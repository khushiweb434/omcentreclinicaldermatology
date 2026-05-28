import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ChevronRight, Sparkles, Scissors, Droplets, Sun, Zap, Leaf, Heart, Wand2 } from "lucide-react";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Dermatology Treatments in Ahmedabad — Om Centre" },
      { name: "description", content: "Acne, hair fall, pigmentation, eczema, laser and skin allergy treatments at Om Centre for Clinical Dermatology, Shahibaug, Ahmedabad." },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: Treatments,
});

const items = [
  { icon: Sparkles, title: "Acne & Pimple Treatment", desc: "Active acne, cystic acne, hormonal breakouts, acne scarring.", to: "/acne-treatment-ahmedabad" },
  { icon: Scissors, title: "Hair Fall & PRP", desc: "Diffuse hair fall, androgenic alopecia, PRP and mesotherapy.", to: "/hair-fall-treatment-ahmedabad" },
  { icon: Droplets, title: "Skin Allergy", desc: "Chronic urticaria, contact dermatitis, allergen testing.", to: "/skin-allergy-treatment-ahmedabad" },
  { icon: Sun, title: "Pigmentation & Melasma", desc: "Sun damage, melasma, dark spots, chemical peels.", to: "/pigmentation-treatment-ahmedabad" },
  { icon: Zap, title: "Laser Dermatology", desc: "Laser hair removal, scar revision, skin resurfacing.", to: "/laser-treatment-ahmedabad" },
  { icon: Leaf, title: "Eczema & Psoriasis", desc: "Long-term management of chronic inflammatory skin disease.", to: "/eczema-psoriasis-treatment-ahmedabad" },
  { icon: Heart, title: "Anti-Ageing & Aesthetics", desc: "Skin rejuvenation, fine lines, injectable consultations.", to: "/treatments" },
  { icon: Wand2, title: "Cosmetic Dermatology", desc: "Brightening protocols, facial peels, advanced facials.", to: "/treatments" },
];

function Treatments() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-luxe py-20 lg:py-28">
          <div className="hairline">Our practice</div>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">Treatments built around your skin.</h1>
          <p className="mt-8 max-w-2xl text-muted-foreground">A comprehensive clinical dermatology practice in Ahmedabad — from everyday skin concerns to advanced laser and trichology care, all under one roof.</p>
        </div>
      </section>
      <section className="container-luxe py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <Link key={t.title} to={t.to} className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-gold/60">
              <t.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-6 font-serif text-2xl">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gold">Read more <ChevronRight className="h-3 w-3" /></div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}