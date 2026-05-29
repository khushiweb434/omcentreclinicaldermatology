import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";
import { track } from "@/lib/tracking";
import { Check, ExternalLink, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Om Centre Dermatology" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Thanks,
});

function Thanks() {
  return (
    <SiteLayout>
      <section className="container-luxe py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-gold">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-serif text-5xl">Your slot is reserved</h1>
          <p className="mt-4 text-muted-foreground">
            We've received your request. Our team will confirm on WhatsApp within 5 minutes during clinic hours (Mon–Sat · 11 AM–1 PM · 5 PM–8 PM).
          </p>

          <div className="mt-10 rounded-3xl border border-gold/40 bg-surface p-8 text-left">
            <div className="hairline">After your visit</div>
            <h2 className="mt-3 font-serif text-2xl">Already a patient? Help future patients find us.</h2>
            <p className="mt-3 text-sm text-muted-foreground">If you've already had a consultation at Om Centre, please take 30 seconds to share your experience. Even a one-line review helps other patients in Ahmedabad trust the clinic.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => void track("google_review_click", { from: "thank_you" })}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Leave a Google review <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                to="/leave-review"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:border-gold hover:text-gold"
              >
                <MessageSquare className="h-4 w-4" /> Write a short review here
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-gold">← Back to home</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}