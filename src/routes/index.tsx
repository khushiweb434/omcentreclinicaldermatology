import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { WHATSAPP } from "@/components/site/StickyBar";
import doctorImg from "@/assets/doctor-portrait.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import {
  Sparkles, Scissors, Droplets, Sun, Zap, Leaf,
  Star, ShieldCheck, Award, Users, ChevronRight,
  MapPin, Phone, MessageCircle, Calendar, Video,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Dermatologist in Ahmedabad | Dr. Nayankumar Patel — Om Centre" },
      { name: "description", content: "Om Centre for Clinical Dermatology, Shahibaug, Ahmedabad. 25+ years experience. Acne, hair fall, pigmentation, laser & skin allergy treatments by Dr. Nayankumar Patel (MBBS, MD)." },
      { property: "og:title", content: "Best Dermatologist in Ahmedabad | Om Centre for Clinical Dermatology" },
      { property: "og:description", content: "Trusted dermatologist in Shahibaug, Ahmedabad. Advanced skin, hair and laser care by Dr. Nayankumar Patel." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "Physician"],
          name: "Om Centre for Clinical Dermatology",
          medicalSpecialty: "Dermatology",
          founder: { "@type": "Person", name: "Dr. Nayankumar Harshadkumar Patel" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "604, 6th floor, A Park Business Hub, Near Panchal Hall, Shahibaug",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "380004",
            addressCountry: "IN",
          },
          telephone: "+91-99999-99999",
          openingHours: ["Mo-Sa 11:00-13:00", "Mo-Sa 17:00-20:00"],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "3" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Treatments />
      <AboutDoctor />
      <HowToBook />
      <SlotPicker />
      <BeforeAfter />
      <Reviews />
      <FAQ />
      <LocationAreas />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(201,169,110,0.18),transparent_60%),radial-gradient(50%_50%_at_90%_80%,rgba(201,169,110,0.10),transparent_60%)]" />
      <div className="container-luxe relative grid gap-14 py-20 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-7">
          <div className="hairline"><span className="h-px w-8 bg-gold" /> Established · Ahmedabad · 2001</div>
          <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
            Ahmedabad's most <em className="not-italic text-gold">trusted</em> dermatologist for skin, hair & laser care.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Personalised clinical dermatology by Dr. Nayankumar Patel — 25+ years of experience treating acne, hair fall, pigmentation, eczema and advanced skin conditions in Shahibaug, Ahmedabad.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/book-appointment" className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
              <Calendar className="h-4 w-4" /> Book Appointment
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background/40 px-6 text-sm backdrop-blur hover:border-gold hover:text-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link to="/book-appointment" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background/40 px-6 text-sm backdrop-blur hover:border-gold hover:text-gold">
              <Video className="h-4 w-4" /> Video Consult
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> GMC Reg. 29756</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> MBBS, MD</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> 5000+ patients</span>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-gold/30">
            <img src={doctorImg} alt="Dr. Nayankumar Patel, Dermatologist, Ahmedabad" width={1024} height={1280} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6">
              <div className="font-serif text-xl">Dr. Nayankumar H. Patel</div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold">MBBS, MD · Dermatologist</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-surface px-5 py-4 shadow-xl md:block">
            <div className="flex items-center gap-2 text-gold"><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /></div>
            <div className="mt-2 text-sm font-medium">5.0 Google Rating</div>
            <div className="text-xs text-muted-foreground">Verified patient reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { v: "25+", l: "Years experience" },
    { v: "5000+", l: "Patients treated" },
    { v: "5.0★", l: "Google rating" },
    { v: "29756", l: "GMC Reg. No." },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-luxe grid grid-cols-2 divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
        {stats.map((s) => (
          <div key={s.l} className="px-6 py-10 text-center">
            <div className="font-serif text-4xl text-gold md:text-5xl">{s.v}</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const TREATMENTS = [
  { icon: Sparkles, title: "Acne & Pimple Treatment", desc: "Active acne, scars, cystic acne and PCOS-related breakouts.", to: "/acne-treatment-ahmedabad" },
  { icon: Scissors, title: "Hair Fall & Regrowth", desc: "PRP, mesotherapy and medical management for thinning hair.", to: "/hair-fall-treatment-ahmedabad" },
  { icon: Droplets, title: "Skin Allergy & Eczema", desc: "Chronic urticaria, contact dermatitis, eczema and psoriasis.", to: "/eczema-psoriasis-treatment-ahmedabad" },
  { icon: Sun, title: "Pigmentation & Melasma", desc: "Tan, dark spots, melasma — chemical peels and prescription care.", to: "/pigmentation-treatment-ahmedabad" },
  { icon: Zap, title: "Laser Dermatology", desc: "Laser hair removal, scar revision and skin resurfacing.", to: "/laser-treatment-ahmedabad" },
  { icon: Leaf, title: "Skin Allergy Specialist", desc: "Patch testing, allergen identification and long-term care.", to: "/skin-allergy-treatment-ahmedabad" },
];

function Treatments() {
  return (
    <section className="container-luxe py-24 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="hairline">Treatments</div>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Clinical care for every skin & hair concern.</h2>
        </div>
        <Link to="/treatments" className="inline-flex items-center gap-1 text-sm text-gold hover:underline">View all treatments <ChevronRight className="h-4 w-4" /></Link>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TREATMENTS.map((t) => (
          <Link key={t.title} to={t.to} className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-gold/60">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity group-hover:opacity-100" />
            <t.icon className="h-7 w-7 text-gold" />
            <h3 className="mt-6 font-serif text-2xl">{t.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
            <div className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gold">Learn more <ChevronRight className="h-3 w-3" /></div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AboutDoctor() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-luxe grid gap-14 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={clinicImg} alt="Om Centre clinic interior, Shahibaug" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="hairline">About the doctor</div>
          <h2 className="mt-4 text-4xl md:text-5xl">Dr. Nayankumar Harshadkumar Patel</h2>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gold">MBBS · MD (Dermatology) · 25+ years</p>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            For over two and a half decades, Dr. Patel has built one of Ahmedabad's most respected clinical dermatology practices. His approach is quiet, evidence-based, and deeply personal — every patient receives a treatment plan built specifically for their skin, history and lifestyle.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Om Centre for Clinical Dermatology in Shahibaug brings together advanced equipment, gentle protocols and the kind of unhurried clinical attention that has earned the trust of thousands of patients across Gujarat.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { t: "Gujarat Medical Council", s: "Reg. 29756 · 2001" },
              { t: "Clinical Dermatology", s: "MD, Skin & Venereology" },
              { t: "Languages", s: "English · हिंदी · ગુજરાતી" },
              { t: "Memberships", s: "IADVL · Cosmetology Society" },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-background p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">{c.t}</div>
                <div className="mt-2 text-sm">{c.s}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/about" className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm hover:border-gold hover:text-gold">Read full profile</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToBook() {
  const steps = [
    { n: "01", t: "Choose your treatment", d: "Pick from acne, hair, laser, allergy or general dermatology consultation." },
    { n: "02", t: "Pick an available slot", d: "Real-time clinic and video consultation slots, Mon to Sat." },
    { n: "03", t: "Confirm on WhatsApp", d: "Receive instant confirmation and reminders from the clinic." },
  ];
  return (
    <section className="container-luxe py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <div className="hairline justify-center">How it works</div>
        <h2 className="mt-4 text-4xl md:text-5xl">Booking in under a minute.</h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-surface p-8">
            <div className="font-serif text-5xl text-gold">{s.n}</div>
            <h3 className="mt-6 font-serif text-2xl">{s.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SlotPicker() {
  const morning = ["11:00", "11:20", "11:40", "12:00", "12:20", "12:40"];
  const evening = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
  const booked = new Set(["11:20", "12:00", "17:30", "19:00"]);
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-luxe py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="hairline">Today's availability</div>
            <h2 className="mt-4 text-4xl md:text-5xl">Live consultation slots.</h2>
            <p className="mt-6 text-muted-foreground">Slots refresh in real time. Tap any open time to reserve via WhatsApp — confirmation usually within 5 minutes.</p>
            <Link to="/book-appointment" className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-medium text-primary-foreground">Open full calendar</Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="hairline">Morning · 11 AM – 1 PM</div>
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {morning.map((s) => <SlotChip key={s} time={s} booked={booked.has(s)} />)}
              </div>
              <div className="hairline mt-10">Evening · 5 PM – 8 PM</div>
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {evening.map((s) => <SlotChip key={s} time={s} booked={booked.has(s)} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlotChip({ time, booked }: { time: string; booked: boolean }) {
  const handle = () => {
    if (booked) return;
    window.open(`${WHATSAPP.split("?")[0]}?text=${encodeURIComponent(`Hi, I'd like to book the ${time} slot today.`)}`, "_blank");
  };
  return (
    <button
      onClick={handle}
      disabled={booked}
      className={
        "h-11 rounded-lg border text-sm transition-colors " +
        (booked
          ? "cursor-not-allowed border-border bg-surface text-muted-foreground line-through"
          : "border-border hover:border-gold hover:bg-gold/10 hover:text-gold")
      }
    >
      {time}
    </button>
  );
}

function BeforeAfter() {
  const cases = [
    { title: "Cystic acne — 12 weeks", tag: "Acne treatment" },
    { title: "Melasma — 16 weeks", tag: "Pigmentation" },
    { title: "Hair density — 6 months", tag: "PRP therapy" },
  ];
  return (
    <section className="container-luxe py-24 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="hairline">Patient outcomes</div>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Real results, photographed honestly.</h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">All images shared with explicit patient consent. Results vary by individual and treatment plan.</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div key={c.title} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="grid aspect-[4/3] grid-cols-2">
              <div className="relative grid place-items-center bg-gradient-to-br from-surface-elevated to-background">
                <span className="absolute top-3 left-3 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Before</span>
                <div className="font-serif text-6xl text-muted-foreground/30">B</div>
              </div>
              <div className="relative grid place-items-center bg-gradient-to-br from-gold/20 to-background">
                <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground">After</span>
                <div className="font-serif text-6xl text-gold/40">A</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold">{c.tag}</div>
              <h3 className="mt-2 font-serif text-xl">{c.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Dr. Rahul Agrawal", text: "You will get best treatment here for any skin diseases.", tag: "Local Guide · Google" },
    { name: "Nitesh Bhagchandani", text: "Best skin doctor in Shahibaug. Highly recommended.", tag: "Google review" },
    { name: "Jeana Patel", text: "Calm clinic, excellent doctor — actually listens and treatment worked.", tag: "Google review" },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-luxe py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="hairline">Patient love</div>
            <h2 className="mt-4 text-4xl md:text-5xl">5.0 on Google.</h2>
            <div className="mt-6 flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-gold" />)}
            </div>
            <p className="mt-6 max-w-sm text-muted-foreground">Verified reviews from patients who trust Om Centre with their skin and hair care.</p>
            <Link to="/reviews" className="mt-8 inline-flex items-center gap-1 text-sm text-gold hover:underline">Read all reviews <ChevronRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 lg:col-span-8 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}
                </div>
                <blockquote className="mt-4 font-serif text-xl leading-snug">"{r.text}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.tag}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Who is the best dermatologist in Ahmedabad for acne?", a: "Dr. Nayankumar Patel at Om Centre has 25+ years of experience treating acne, cystic acne and acne scars with personalised, evidence-based protocols." },
  { q: "How long does hair fall treatment take to show results?", a: "Most patients see noticeable improvement in shedding within 8–12 weeks of consistent treatment; visible regrowth typically appears between 4–6 months." },
  { q: "What is the consultation fee?", a: "Consultation starts at ₹700. Follow-ups and treatments are quoted transparently after the first assessment." },
  { q: "Is laser hair removal safe for Indian skin?", a: "Yes — we use diode and Nd:YAG technologies that are specifically calibrated for Indian skin tones to deliver safe, effective results." },
  { q: "Do you offer video consultations?", a: "Yes. Video consults are available for follow-ups and select first visits. Book directly from our appointment page." },
  { q: "Where exactly is the clinic located?", a: "Om Centre is at 604, A Park Business Hub, near Panchal Hall, Shahibaug, Ahmedabad 380004 — easily reachable from Sabarmati, Chandkheda and Motera." },
  { q: "What languages does Dr. Patel speak?", a: "English, Hindi and Gujarati." },
  { q: "Do I need a referral to book?", a: "No referral required. You can walk in or book online directly through this website or WhatsApp." },
];

function FAQ() {
  return (
    <section className="container-luxe py-24 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="hairline">FAQ</div>
          <h2 className="mt-4 text-4xl md:text-5xl">Questions, answered.</h2>
          <p className="mt-6 text-muted-foreground">If you can't find your answer here, message us directly on WhatsApp.</p>
        </div>
        <div className="lg:col-span-7">
          <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
            {FAQS.map((f) => (
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
      </div>
    </section>
  );
}

function LocationAreas() {
  const areas = ["Shahibaug", "Sabarmati", "Chandkheda", "Motera", "Ranip", "Navrangpura", "CG Road", "Paldi", "Satellite", "Gota", "Naranpura", "Vastrapur"];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-luxe grid gap-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="hairline">Visit the clinic</div>
          <h2 className="mt-4 text-4xl md:text-5xl">Om Centre, Shahibaug.</h2>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gold" /> <span>604, A Park Business Hub, near Panchal Hall,<br />Shahibaug, Ahmedabad 380004</span></div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-gold" /> <a href="tel:+919999999999" className="hover:text-gold">+91 99999 99999</a></div>
          </div>
          <div className="mt-8">
            <div className="hairline">Areas served</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="rounded-full border border-border bg-background px-4 py-2 text-xs text-foreground/80">{a}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Om Centre Ahmedabad location"
              src="https://www.google.com/maps?q=Park+Business+Hub+Shahibaug+Ahmedabad&output=embed"
              loading="lazy"
              className="h-full w-full grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-luxe py-24 lg:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface px-8 py-16 text-center md:px-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(201,169,110,0.25),transparent_70%)]" />
        <div className="relative">
          <div className="hairline justify-center">Begin your treatment</div>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">Skin you trust. Care you'll come back to.</h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Book your first consultation with Dr. Nayankumar Patel today. Slots open Monday to Saturday, morning and evening.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/book-appointment" className="inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-medium text-primary-foreground">Book Appointment</Link>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background/40 px-6 text-sm hover:border-gold hover:text-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Clinic
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-gold" /> Confirmation within 5 minutes
          </div>
        </div>
      </div>
    </section>
  );
}
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    </div>
  );
}
