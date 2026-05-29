import { supabase } from "@/integrations/supabase/client";

export type TrackEvent =
  | "whatsapp_click"
  | "call_click"
  | "booking_start"
  | "booking_submit"
  | "review_submit"
  | "google_review_click";

export async function track(event: TrackEvent, metadata: Record<string, unknown> = {}) {
  try {
    const source = typeof window !== "undefined" ? window.location.pathname : null;
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : null;
    await supabase.from("tracking_events").insert({
      event_type: event,
      source,
      metadata: metadata as never,
      user_agent: ua,
    });
  } catch (e) {
    // tracking must never block UX
    console.warn("track failed", e);
  }
}