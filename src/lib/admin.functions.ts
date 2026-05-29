import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

function checkPasscode(passcode: string) {
  const expected = process.env.ADMIN_PASSCODE;
  if (!expected) throw new Error("Admin passcode not configured");
  if (passcode !== expected) throw new Error("Invalid passcode");
}

export const getDashboard = createServerFn({ method: "POST" })
  .inputValidator((d: { passcode: string }) =>
    z.object({ passcode: z.string().min(1).max(128) }).parse(d),
  )
  .handler(async ({ data }) => {
    checkPasscode(data.passcode);
    const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    const [eventsRes, appointmentsRes, reviewsRes] = await Promise.all([
      supabaseAdmin
        .from("tracking_events")
        .select("event_type, created_at, source")
        .gte("created_at", since)
        .order("created_at", { ascending: false })
        .limit(2000),
      supabaseAdmin
        .from("appointments")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100),
      supabaseAdmin
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100),
    ]);

    if (eventsRes.error) throw eventsRes.error;
    if (appointmentsRes.error) throw appointmentsRes.error;
    if (reviewsRes.error) throw reviewsRes.error;

    const events = eventsRes.data ?? [];
    const counts: Record<string, number> = {};
    for (const e of events) counts[e.event_type] = (counts[e.event_type] ?? 0) + 1;

    // Daily series last 14 days
    const daily: { date: string; whatsapp: number; call: number; booking: number }[] = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      daily.push({ date: key, whatsapp: 0, call: 0, booking: 0 });
    }
    const idx: Record<string, number> = {};
    daily.forEach((d, i) => (idx[d.date] = i));
    for (const e of events) {
      const key = e.created_at.slice(0, 10);
      const i = idx[key];
      if (i == null) continue;
      if (e.event_type === "whatsapp_click") daily[i].whatsapp++;
      else if (e.event_type === "call_click") daily[i].call++;
      else if (e.event_type === "booking_submit") daily[i].booking++;
    }

    return {
      counts,
      totalEvents: events.length,
      daily,
      appointments: appointmentsRes.data ?? [],
      reviews: reviewsRes.data ?? [],
    };
  });

export const moderateReview = createServerFn({ method: "POST" })
  .inputValidator((d: { passcode: string; id: string; action: "approve" | "delete" }) =>
    z
      .object({
        passcode: z.string().min(1).max(128),
        id: z.string().uuid(),
        action: z.enum(["approve", "delete"]),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    checkPasscode(data.passcode);
    if (data.action === "approve") {
      const { error } = await supabaseAdmin
        .from("reviews")
        .update({ approved: true })
        .eq("id", data.id);
      if (error) throw error;
    } else {
      const { error } = await supabaseAdmin.from("reviews").delete().eq("id", data.id);
      if (error) throw error;
    }
    return { ok: true };
  });