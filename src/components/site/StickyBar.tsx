import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const WHATSAPP = "https://wa.me/919999999999?text=Hello%20Dr.%20Patel%2C%20I%27d%20like%20to%20book%20an%20appointment.";

export function StickyBar() {
  return (
    <>
      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-3 text-xs">
          <a href="tel:+919999999999" className="flex flex-col items-center gap-1 py-3 hover:text-gold">
            <Phone className="h-5 w-5 text-gold" /> Call
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 border-x border-border py-3 hover:text-gold">
            <MessageCircle className="h-5 w-5 text-gold" /> WhatsApp
          </a>
          <Link to="/book-appointment" className="flex flex-col items-center gap-1 py-3 hover:text-gold">
            <CalendarCheck className="h-5 w-5 text-gold" /> Book
          </Link>
        </div>
      </div>

      {/* Floating WhatsApp on desktop */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground shadow-2xl shadow-black/40 transition-transform hover:-translate-y-1 md:grid"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
