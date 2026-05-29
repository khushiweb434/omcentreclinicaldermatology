import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { supabase } from "@/integrations/supabase/client";
import { track } from "@/lib/tracking";
import { useNavigate } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Om Centre Dermatology, Ahmedabad" },
      { name: "description", content: "Book your dermatology consultation with Dr. Nayankumar Patel in Shahibaug, Ahmedabad. Instant WhatsApp confirmation." },
      { property: "og:url", content: "/book-appointment" },
    ],
    links: [{ rel: "canonical", href: "/book-appointment" }],
  }),
  component: Book,
});

const treatments = [
  "General consultation",
  "Acne / pimple treatment",
  "Hair fall / PRP",
  "Pigmentation / melasma",
  "Skin allergy",
  "Laser treatment",
  "Eczema / psoriasis",
  "Cosmetic / aesthetic",
];

const morning = ["11:00", "11:20", "11:40", "12:00", "12:20", "12:40"];
const evening = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

function Book() {
  const [treatment, setTreatment] = useState(treatments[0]);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const trimmedName = name.trim().slice(0, 100);
    const trimmedPhone = phone.trim().slice(0, 20);
    // Persist to DB
    const { error } = await supabase.from("appointments").insert({
      name: trimmedName,
      phone: trimmedPhone,
      treatment,
      appointment_date: date,
      slot,
      source: "book-appointment",
    });
    if (error) console.warn("appointment insert failed", error);
    void track("booking_submit", { treatment, slot });
    const text = `Hi Om Centre,\n\nI'd like to book an appointment:\n• Name: ${trimmedName}\n• Phone: ${trimmedPhone}\n• Treatment: ${treatment}\n• Date: ${date}\n• Slot: ${slot}\n\nThank you.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    navigate({ to: "/thank-you" });
  };

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-luxe py-20">
          <div className="hairline">Appointments</div>
          <h1 className="mt-4 text-5xl md:text-6xl">Book your consultation.</h1>
          <p className="mt-6 max-w-xl text-muted-foreground">Pick the treatment and slot that work for you. We'll confirm on WhatsApp within 5 minutes during clinic hours.</p>
        </div>
      </section>
      <section className="container-luxe grid gap-12 py-16 lg:grid-cols-12">
        <form onSubmit={submit} className="space-y-8 rounded-3xl border border-border bg-surface p-8 md:p-10 lg:col-span-7">
          <div>
            <label className="hairline">1 · Treatment</label>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {treatments.map((t) => (
                <button type="button" key={t} onClick={() => setTreatment(t)} className={"flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition " + (treatment === t ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold/40")}>
                  {t}
                  {treatment === t && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="hairline">2 · Date</label>
            <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="mt-4 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
          </div>
          <div>
            <label className="hairline">3 · Time slot</label>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Morning</div>
                <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {morning.map((s) => <SlotBtn key={s} v={s} active={slot === s} onClick={() => setSlot(s)} />)}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Evening</div>
                <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {evening.map((s) => <SlotBtn key={s} v={s} active={slot === s} onClick={() => setSlot(s)} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className="h-12 rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
            <input required placeholder="Phone (WhatsApp)" value={phone} onChange={(e) => setPhone(e.target.value)} className="h-12 rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
          </div>
          <button type="submit" disabled={!slot || submitting} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-sm font-medium text-primary-foreground disabled:opacity-50">
            <MessageCircle className="h-4 w-4" /> {submitting ? "Confirming…" : "Confirm on WhatsApp"}
          </button>
        </form>
        <aside className="lg:col-span-5">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <div className="hairline">What happens next</div>
            <ol className="mt-6 space-y-5 text-sm">
              {[
                "Your request is sent to the clinic via WhatsApp.",
                "Our team confirms the slot within 5 minutes during working hours.",
                "You receive a reminder 24 hours and 1 hour before your visit.",
              ].map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/40 font-serif text-gold">{i + 1}</span>
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-6 rounded-3xl border border-border bg-surface p-8">
            <div className="hairline">Consultation fees</div>
            <div className="mt-4 flex items-baseline justify-between border-b border-border pb-4">
              <span>New consultation</span><span className="font-serif text-2xl text-gold">₹700</span>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span>Follow-up</span><span className="font-serif text-2xl text-gold">₹700</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Treatment & procedure pricing shared transparently after assessment.</p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function SlotBtn({ v, active, onClick }: { v: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={"h-10 rounded-md border text-sm transition " + (active ? "border-gold bg-gold text-primary-foreground" : "border-border hover:border-gold hover:text-gold")}>{v}</button>
  );
}