import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import doctorImg from "@/assets/doctor-portrait.jpg";
import { Award, ShieldCheck, GraduationCap, Languages, Calendar } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Nayankumar Patel — Dermatologist in Ahmedabad" },
      { name: "description", content: "Dr. Nayankumar Harshadkumar Patel — MBBS, MD Dermatologist with 25+ years of experience at Om Centre for Clinical Dermatology, Shahibaug, Ahmedabad." },
      { property: "og:title", content: "About Dr. Nayankumar Patel — Dermatologist in Ahmedabad" },
      { property: "og:description", content: "Leading clinical dermatologist in Ahmedabad with 25+ years of experience." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        name: "Dr. Nayankumar Harshadkumar Patel",
        medicalSpecialty: "Dermatology",
        identifier: "GMC 29756",
        alumniOf: "MBBS, MD",
        worksFor: { "@type": "MedicalBusiness", name: "Om Centre for Clinical Dermatology" },
      }),
    }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-luxe grid gap-14 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-gold/30">
              <img src={doctorImg} alt="Dr. Nayankumar Patel" width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="hairline">About the doctor</div>
            <h1 className="mt-4 text-4xl md:text-6xl">Dr. Nayankumar<br />Harshadkumar Patel</h1>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gold">MBBS · MD (Dermatology) · GMC 29756</p>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>Dr. Nayankumar Patel founded Om Centre for Clinical Dermatology in Shahibaug, Ahmedabad with a single conviction — that great dermatology begins with great listening. Over 25 years, his quiet, methodical and deeply personal approach has built a practice that thousands of patients across Gujarat return to for decades.</p>
              <p>Trained in MBBS and a postgraduate MD in Dermatology, Dr. Patel combines classical clinical rigour with the latest in laser, aesthetic and trichology medicine. His protocols are built case by case — never templated — and his clinic is known for unhurried consultations, honest expectations and follow-through that goes beyond the prescription.</p>
              <p>From cystic acne and PCOS-linked skin concerns to chronic eczema, melasma, advanced laser care and hair restoration — Om Centre is one of the few clinics in Ahmedabad where complex dermatology and gentle, design-led patient experience meet.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Stat icon={Award} t="Experience" s="25+ years in clinical dermatology" />
              <Stat icon={ShieldCheck} t="Registration" s="Gujarat Medical Council · 29756" />
              <Stat icon={GraduationCap} t="Qualifications" s="MBBS, MD (Skin & Venereology)" />
              <Stat icon={Languages} t="Languages" s="English · हिंदी · ગુજરાતી" />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/book-appointment" className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-medium text-primary-foreground">
                <Calendar className="h-4 w-4" /> Book a consultation
              </Link>
              <Link to="/treatments" className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm hover:border-gold hover:text-gold">Explore treatments</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface">
        <div className="container-luxe py-20">
          <div className="hairline">Clinic philosophy</div>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">"Skin is a record of how the body, the environment and the mind interact. Treating it well requires patience for all three."</h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">— Dr. Nayankumar Patel</p>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ icon: Icon, t, s }: { icon: typeof Award; t: string; s: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <Icon className="h-5 w-5 text-gold" />
      <div className="mt-3 text-xs uppercase tracking-[0.2em] text-gold">{t}</div>
      <div className="mt-1 text-sm">{s}</div>
    </div>
  );
}