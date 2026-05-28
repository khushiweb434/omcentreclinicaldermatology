import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "./Layout";
import { Link } from "@tanstack/react-router";
import { Check, MessageCircle, ChevronRight } from "lucide-react";
import { WHATSAPP } from "./StickyBar";

export interface TreatmentContent {
  slug: string;
  title: string;
  keyword: string;
  metaDescription: string;
  hero: string;
  intro: string;
  whyUs: string;
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
  testimonial: { name: string; text: string };
}

export function TreatmentLanding({ t }: { t: TreatmentContent }) {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(201,169,110,0.18),transparent_70%)]" />
        <div className="container-luxe relative grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="hairline"><span className="h-px w-8 bg-gold" /> Ahmedabad · Shahibaug</div>
            <h1 className="mt-6 text-4xl leading-[1.05] md:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.hero}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/book-appointment" className="inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-medium text-primary-foreground">Book Appointment</Link>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm hover:border-gold hover:text-gold">
                <MessageCircle className="h-4 w-4" /> Get details on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="hairline">Quick request</div>
              <h3 className="mt-3 font-serif text-2xl">Get treatment details</h3>
              <p className="mt-2 text-sm text-muted-foreground">Send us your details, our team will share treatment information & slots on WhatsApp within 30 minutes.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const msg = `Hi, I'm ${fd.get("name")}. I'm interested in ${t.keyword}. Please share details.`;
                  window.open(`${WHATSAPP.split("?")[0]}?text=${encodeURIComponent(msg)}`, "_blank");
                }}
                className="mt-6 space-y-3"
              >
                <input name="name" required placeholder="Your name" className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none focus:border-gold" />
                <input name="phone" required placeholder="Phone number" className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none focus:border-gold" />
                <button className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gold text-sm font-medium text-primary-foreground">Send via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-2">
          <div>
            <div className="hairline">About the condition</div>
            <h2 className="mt-4 text-3xl md:text-4xl">Understanding your skin</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.intro}</p>
          </div>
          <div>
            <div className="hairline">Why Dr. Patel</div>
            <h2 className="mt-4 text-3xl md:text-4xl">Treatment that actually works</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.whyUs}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["25+ years of clinical experience", "Personalised, evidence-based protocols", "Advanced dermatology equipment", "Transparent pricing"].map((c) => (
                <li key={c} className="flex items-center gap-3"><Check className="h-4 w-4 text-gold" /> {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-luxe py-20">
          <div className="hairline">Treatment process</div>
          <h2 className="mt-4 text-3xl md:text-4xl">How treatment unfolds</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p, i) => (
              <div key={p.step} className="rounded-2xl border border-border bg-background p-6">
                <div className="font-serif text-3xl text-gold">0{i + 1}</div>
                <h3 className="mt-4 font-serif text-xl">{p.step}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-luxe py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="hairline">Patient story</div>
              <h2 className="mt-4 text-3xl md:text-4xl">Real results</h2>
            </div>
            <blockquote className="lg:col-span-7">
              <p className="font-serif text-2xl leading-snug md:text-3xl">"{t.testimonial.text}"</p>
              <footer className="mt-6 text-sm text-muted-foreground">— {t.testimonial.name}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-luxe py-20">
          <div className="hairline">Frequently asked</div>
          <h2 className="mt-4 text-3xl md:text-4xl">Answers before you book</h2>
          <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-background">
            {t.faqs.map((f) => (
              <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="font-serif text-xl">{f.q}</span>
                  <ChevronRight className="h-5 w-5 text-gold transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 text-center">
        <h2 className="text-3xl md:text-5xl">Book {t.keyword.toLowerCase()} today</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Limited slots Mon – Sat, 11 AM – 1 PM and 5 PM – 8 PM. WhatsApp confirmation within minutes.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/book-appointment" className="inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-medium text-primary-foreground">Book Appointment</Link>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm hover:border-gold hover:text-gold">WhatsApp Clinic</a>
        </div>
      </section>
    </SiteLayout>
  );
}

export const _routeHelpers = { createFileRoute };
