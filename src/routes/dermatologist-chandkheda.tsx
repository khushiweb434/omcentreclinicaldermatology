import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { WHATSAPP } from "@/components/site/StickyBar";
import { MapPin, Phone, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/dermatologist-chandkheda")({
  head: () => ({
    meta: [
      { title: "Best Dermatologist in Chandkheda, Ahmedabad — Dr. Nayankumar Patel" },
      { name: "description", content: "Trusted dermatologist near Chandkheda, Ahmedabad. Dr. Nayankumar Patel at Om Centre for Clinical Dermatology — 25+ years of experience." },
      { property: "og:title", content: "Dermatologist in Chandkheda, Ahmedabad" },
      { property: "og:description", content: "Skin, hair and laser treatment near Chandkheda by Dr. Nayankumar Patel." },
      { property: "og:url", content: "/dermatologist-chandkheda" },
    ],
    links: [{ rel: "canonical", href: "/dermatologist-chandkheda" }],
  }),
  component: AreaPage,
});

function AreaPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(201,169,110,0.18),transparent_70%)]" />
        <div className="container-luxe relative py-20 lg:py-28">
          <div className="hairline"><span className="h-px w-8 bg-gold" /> Ahmedabad · Chandkheda</div>
          <h1 className="mt-6 max-w-3xl text-5xl md:text-7xl">Best Dermatologist near Chandkheda, Ahmedabad.</h1>
          <p className="mt-8 max-w-2xl text-muted-foreground">Patients across Chandkheda and surrounding areas trust Om Centre for Clinical Dermatology in Shahibaug for advanced skin, hair and laser care. Just a short drive from Chandkheda, our clinic offers personalised dermatology under Dr. Nayankumar Patel — with 25+ years of experience.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/book-appointment" className="inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-medium text-primary-foreground">Book Appointment</Link>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm hover:border-gold hover:text-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Clinic
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-2">
          <div>
            <div className="hairline">Why patients from Chandkheda choose Om Centre</div>
            <h2 className="mt-4 text-3xl md:text-4xl">Premium dermatology, a short drive away.</h2>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "25+ years of clinical experience",
                "Gentle, evidence-based protocols",
                "Advanced laser & trichology under one roof",
                "Transparent pricing & honest timelines",
                "Easy access from Chandkheda, Shahibaug, Sabarmati & Motera",
              ].map((c) => (<li key={c} className="flex items-center gap-3"><Check className="h-4 w-4 text-gold" /> {c}</li>))}
            </ul>
          </div>
          <div>
            <div className="hairline">Visit the clinic</div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gold" /> 604, A Park Business Hub, near Panchal Hall, Shahibaug, Ahmedabad 380004</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-gold" /> <a href="tel:+919925011309" className="hover:text-gold">+91 99250 11309</a></div>
            </div>
            <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <iframe title="Om Centre map" src="https://www.google.com/maps?q=Park+Business+Hub+Shahibaug+Ahmedabad&output=embed" loading="lazy" className="h-full w-full grayscale" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
