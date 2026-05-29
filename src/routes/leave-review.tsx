import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { supabase } from "@/integrations/supabase/client";
import { track } from "@/lib/tracking";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";
import { Star, ExternalLink, Check } from "lucide-react";

export const Route = createFileRoute("/leave-review")({
  head: () => ({
    meta: [
      { title: "Leave a Review — Om Centre Dermatology, Ahmedabad" },
      { name: "description", content: "Share your experience with Dr. Nayankumar Patel and Om Centre for Clinical Dermatology. Your feedback helps other patients." },
    ],
    links: [{ rel: "canonical", href: "https://omcentreclinicaldermatology.lovable.app/leave-review" }],
  }),
  component: Leave,
});

function Leave() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [treatment, setTreatment] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErr(null);
    const trimmedName = name.trim().slice(0, 100);
    const trimmedBody = body.trim().slice(0, 1000);
    if (trimmedName.length < 2 || trimmedBody.length < 10) {
      setErr("Please enter your name and at least a short review.");
      setSubmitting(false);
      return;
    }
    const { error } = await supabase.from("reviews").insert({
      name: trimmedName,
      rating,
      treatment: treatment.trim().slice(0, 100) || null,
      body: trimmedBody,
    });
    if (error) {
      setErr("Could not submit. Please try again.");
      setSubmitting(false);
      return;
    }
    void track("review_submit", { rating });
    setDone(true);
    setSubmitting(false);
  };

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-luxe py-16">
          <div className="hairline">Your voice matters</div>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Share your experience</h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Two ways to help — leave a quick review here on our website, or share your story on Google so more patients in Ahmedabad can find us.
          </p>
        </div>
      </section>

      <section className="container-luxe grid gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {done ? (
            <div className="rounded-3xl border border-gold/40 bg-surface p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/20 text-gold">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-serif text-3xl">Thank you</h2>
              <p className="mt-3 text-sm text-muted-foreground">Your review will appear once approved. Would you take 30 seconds to also leave it on Google? It helps us reach more patients across Ahmedabad.</p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => void track("google_review_click", { from: "thank_you" })}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground"
              >
                Leave a Google review <ExternalLink className="h-4 w-4" />
              </a>
              <div className="mt-4">
                <Link to="/" className="text-sm text-muted-foreground hover:text-gold">Back to home</Link>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6 rounded-3xl border border-border bg-surface p-8">
              <div>
                <label className="hairline">Your rating</label>
                <div className="mt-3 flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      type="button"
                      key={n}
                      onClick={() => setRating(n)}
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      className="p-1"
                    >
                      <Star className={"h-7 w-7 " + (n <= rating ? "fill-gold text-gold" : "text-muted-foreground")} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="hairline">Name</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} maxLength={100} className="mt-3 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="hairline">Treatment (optional)</label>
                <input value={treatment} onChange={(e) => setTreatment(e.target.value)} maxLength={100} placeholder="e.g. Acne, Hair fall, Pigmentation" className="mt-3 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="hairline">Your review</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} maxLength={1000} rows={5} className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                <div className="mt-1 text-right text-xs text-muted-foreground">{body.length}/1000</div>
              </div>
              {err && <p className="text-sm text-red-400">{err}</p>}
              <button disabled={submitting} className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gold text-sm font-medium text-primary-foreground disabled:opacity-50">
                {submitting ? "Submitting…" : "Submit review"}
              </button>
              <p className="text-xs text-muted-foreground">Reviews are moderated before they appear publicly.</p>
            </form>
          )}
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <div className="hairline">Help us on Google</div>
            <h3 className="mt-3 font-serif text-2xl">A Google review takes 30 seconds</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Google reviews are how new patients in Shahibaug, Sabarmati and Chandkheda discover us. Your one-tap review makes a huge difference.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => void track("google_review_click", { from: "leave_review_aside" })}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-3 text-sm text-gold hover:bg-gold hover:text-primary-foreground"
            >
              Open Google review page <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}