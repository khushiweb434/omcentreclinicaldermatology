import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";
import { track } from "@/lib/tracking";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews — Om Centre Dermatology, Ahmedabad" },
      { name: "description", content: "Read verified Google reviews and patient testimonials for Dr. Nayankumar Patel and Om Centre for Clinical Dermatology, Shahibaug, Ahmedabad." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const seedReviews = [
  { name: "Dr. Rahul Agrawal", tag: "Local Guide · 136 reviews", text: "You will get best treatment here for any skin diseases. Dr. Patel is patient, kind, and explains every step. My acne and scarring improved dramatically over four months." },
  { name: "Nitesh Bhagchandani", tag: "Local Guide · 24 reviews", text: "Best skin doctor in Shahibaug. Clean clinic, no waiting, honest pricing. Got my chronic urticaria under control after struggling for years." },
  { name: "Jeana Patel", tag: "Google reviewer", text: "Calm clinic, excellent doctor. Helped me build a real skincare routine and finally got my melasma under control." },
  { name: "Ankita S.", tag: "Patient · Acne", text: "After trying 4 dermatologists, Dr. Patel was the only one who got my hormonal acne under control. The team is gentle, never rushed." },
  { name: "Rohan M.", tag: "Patient · Hair fall", text: "Started PRP six months ago. My hair fall has reduced significantly and I can see new growth. Highly recommend Om Centre." },
  { name: "Priya K.", tag: "Patient · Pigmentation", text: "Years of melasma treated with patience and a real plan. I trust Dr. Patel completely with anything to do with my skin." },
];

function Reviews() {
  const [siteReviews, setSiteReviews] = useState<{ name: string; tag: string; text: string }[]>([]);

  useEffect(() => {
    supabase
      .from("reviews")
      .select("name,treatment,body,created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(12)
      .then(({ data }) => {
        if (data) {
          setSiteReviews(
            data.map((r) => ({
              name: r.name,
              tag: r.treatment ? `Patient · ${r.treatment}` : "Patient",
              text: r.body,
            })),
          );
        }
      });
  }, []);

  const reviews = [...siteReviews, ...seedReviews];
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-luxe py-20 lg:py-28">
          <div className="hairline">Patient stories</div>
          <h1 className="mt-4 text-5xl md:text-7xl">5.0 on Google.</h1>
          <div className="mt-6 flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-gold" />)}
          </div>
          <p className="mt-6 max-w-xl text-muted-foreground">Honest, verified words from patients who trust Om Centre with their skin and hair care.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/leave-review" className="inline-flex h-11 items-center rounded-full bg-gold px-5 text-sm font-medium text-primary-foreground">Leave a review</Link>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => void track("google_review_click", { from: "reviews_page" })}
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm hover:border-gold hover:text-gold"
            >
              Review on Google
            </a>
          </div>
        </div>
      </section>
      <section className="container-luxe py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={`${r.name}-${i}`} className="rounded-2xl border border-border bg-surface p-6">
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
        <div className="mt-16 text-center">
          <Link to="/book-appointment" className="inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-medium text-primary-foreground">Book your consultation</Link>
        </div>
      </section>
    </SiteLayout>
  );
}