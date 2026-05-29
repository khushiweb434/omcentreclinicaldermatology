import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { PHONE } from "@/lib/constants";
import { track } from "@/lib/tracking";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-luxe flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold font-serif text-lg">Om</span>
          <div className="leading-tight">
            <div className="font-serif text-lg">Om Centre</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Clinical Dermatology</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            onClick={() => void track("call_click", { surface: "nav" })}
            className="hidden h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-foreground/90 transition-colors hover:border-gold hover:text-gold md:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call Clinic
          </a>
          <Link
            to="/book-appointment"
            onClick={() => void track("booking_start", { surface: "nav" })}
            className="hidden h-11 items-center rounded-full bg-gold px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Book Appointment
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="container-luxe flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm hover:bg-surface-elevated"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-gold text-sm font-medium text-primary-foreground"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
