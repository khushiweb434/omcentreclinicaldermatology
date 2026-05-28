import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { WHATSAPP } from "@/components/site/StickyBar";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Om Centre — Dermatologist in Shahibaug, Ahmedabad" },
      { name: "description", content: "Visit, call or WhatsApp Om Centre for Clinical Dermatology in Shahibaug, Ahmedabad. Open Mon–Sat, morning and evening hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-luxe py-20 lg:py-28">
          <div className="hairline">Get in touch</div>
          <h1 className="mt-4 text-5xl md:text-7xl">Visit the clinic.</h1>
          <p className="mt-6 max-w-xl text-muted-foreground">Walk-ins welcome during clinic hours. For confirmed slots, please book in advance via WhatsApp or our appointment page.</p>
        </div>
      </section>
      <section className="container-luxe grid gap-12 py-16 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-5">
          <Info icon={MapPin} t="Address" s="604, A Park Business Hub, near Panchal Hall, Shahibaug, Ahmedabad 380004, Gujarat" />
          <Info icon={Phone} t="Phone" s="+91 99999 99999" href="tel:+919999999999" />
          <Info icon={MessageCircle} t="WhatsApp" s="Chat with the clinic" href={WHATSAPP} />
          <Info icon={Mail} t="Email" s="appointments@omdermatology.in" href="mailto:appointments@omdermatology.in" />
          <Info icon={Clock} t="Hours" s="Mon – Sat · 11:00 AM – 1:00 PM · 5:00 PM – 8:00 PM · Sunday closed" />
        </div>
        <div className="lg:col-span-7">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Om Centre Ahmedabad map"
              src="https://www.google.com/maps?q=Park+Business+Hub+Shahibaug+Ahmedabad&output=embed"
              loading="lazy"
              className="h-full w-full grayscale"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon: Icon, t, s, href }: { icon: typeof MapPin; t: string; s: string; href?: string }) {
  const body = (
    <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-gold/50">
      <Icon className="h-5 w-5 text-gold" />
      <div className="mt-3 text-xs uppercase tracking-[0.2em] text-gold">{t}</div>
      <div className="mt-1 text-sm leading-relaxed">{s}</div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{body}</a> : body;
}