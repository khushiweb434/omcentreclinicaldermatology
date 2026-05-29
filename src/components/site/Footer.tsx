import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

const treatments = [
  { to: "/acne-treatment-ahmedabad", label: "Acne Treatment Ahmedabad" },
  { to: "/hair-fall-treatment-ahmedabad", label: "Hair Fall Treatment Ahmedabad" },
  { to: "/skin-allergy-treatment-ahmedabad", label: "Skin Allergy Treatment Ahmedabad" },
  { to: "/pigmentation-treatment-ahmedabad", label: "Pigmentation Treatment Ahmedabad" },
  { to: "/laser-treatment-ahmedabad", label: "Laser Treatment Ahmedabad" },
  { to: "/eczema-psoriasis-treatment-ahmedabad", label: "Eczema & Psoriasis Treatment" },
];

const areas = [
  { to: "/dermatologist-shahibaug", label: "Dermatologist in Shahibaug" },
  { to: "/dermatologist-chandkheda", label: "Dermatologist in Chandkheda" },
  { to: "/dermatologist-sabarmati", label: "Dermatologist in Sabarmati" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-luxe py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold font-serif text-xl">Om</span>
              <div>
                <div className="font-serif text-xl">Om Centre</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Clinical Dermatology</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Ahmedabad's trusted clinical dermatology practice. 25+ years of experience in advanced skin, hair and laser care under Dr. Nayankumar H. Patel.
            </p>
            <div className="mt-6 space-y-3 text-sm text-foreground/80">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> 604, A Park Business Hub, near Panchal Hall, Shahibaug, Ahmedabad 380004</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> <a href={`tel:${PHONE}`} className="hover:text-gold">{PHONE_DISPLAY}</a></div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:appointments@omdermatology.in" className="hover:text-gold">appointments@omdermatology.in</a></div>
              <div className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-gold" /> Mon – Sat · 11:00 AM – 1:00 PM · 5:00 PM – 8:00 PM</div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="hairline">Treatments</div>
            <ul className="mt-6 space-y-3 text-sm">
              {treatments.map((t) => (
                <li key={t.to}><Link to={t.to} className="text-foreground/75 hover:text-gold">{t.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="hairline">Areas Served</div>
            <ul className="mt-6 space-y-3 text-sm">
              {areas.map((t) => (
                <li key={t.to}><Link to={t.to} className="text-foreground/75 hover:text-gold">{t.label}</Link></li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Trusted dermatologist serving patients from Shahibaug, Sabarmati, Chandkheda, Motera, Ranip, Navrangpura, CG Road, Paldi, Satellite, Gota and all of Ahmedabad, Gujarat.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Om Centre for Clinical Dermatology. All rights reserved.</div>
          <div>GMC Reg. No. 29756 · MBBS, MD (Dermatology)</div>
        </div>
      </div>
    </footer>
  );
}
