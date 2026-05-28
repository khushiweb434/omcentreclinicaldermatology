import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Dermatology Journal — Om Centre, Ahmedabad" },
      { name: "description", content: "Practical skin and hair care guidance from Dr. Nayankumar Patel and the Om Centre clinical team in Ahmedabad." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { t: "How to choose the right acne treatment in Ahmedabad", d: "Topicals, oral therapy, peels, laser — what actually works and when." },
  { t: "Summer skin care guide for Indian skin", d: "SPF, hydration and habits that protect against pigmentation in Gujarat's climate." },
  { t: "PRP for hair fall: what to expect across 6 months", d: "A realistic timeline of results, sessions and aftercare." },
  { t: "Melasma: why it returns and how to manage it long term", d: "An honest guide to one of the most stubborn skin conditions." },
  { t: "Sunscreens that work for Indian climate", d: "What to look for on the label — and what to ignore." },
  { t: "Fungal infection in the monsoon: prevention & treatment", d: "Simple steps that prevent recurrence after the first course." },
];

function Blog() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-luxe py-20 lg:py-28">
          <div className="hairline">Journal</div>
          <h1 className="mt-4 text-5xl md:text-7xl">Clinical notes on skin & hair.</h1>
          <p className="mt-6 max-w-xl text-muted-foreground">Practical, evidence-led guidance from Om Centre's dermatology team. Updated regularly.</p>
        </div>
      </section>
      <section className="container-luxe py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <article key={p.t} className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-gold/50">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">Coming soon · 0{i + 1}</div>
              <h2 className="mt-4 font-serif text-2xl">{p.t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}