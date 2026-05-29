import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PHONE, WHATSAPP as WA } from "@/lib/constants";
import { track } from "@/lib/tracking";

export const WHATSAPP = WA;

export function StickyBar() {
  return (
    <>
      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-3 text-xs">
          <a href={`tel:${PHONE}`} onClick={() => void track("call_click", { surface: "mobile_bar" })} className="flex flex-col items-center gap-1 py-3 hover:text-gold">
            <Phone className="h-5 w-5 text-gold" /> Call
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => void track("whatsapp_click", { surface: "mobile_bar" })} className="flex flex-col items-center gap-1 border-x border-border py-3 hover:text-gold">
            <MessageCircle className="h-5 w-5 text-gold" /> WhatsApp
          </a>
          <Link to="/book-appointment" onClick={() => void track("booking_start", { surface: "mobile_bar" })} className="flex flex-col items-center gap-1 py-3 hover:text-gold">
            <CalendarCheck className="h-5 w-5 text-gold" /> Book
          </Link>
        </div>
      </div>

      {/* Floating WhatsApp on desktop */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        onClick={() => void track("whatsapp_click", { surface: "float" })}
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground shadow-2xl shadow-black/40 transition-transform hover:-translate-y-1 md:grid"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
