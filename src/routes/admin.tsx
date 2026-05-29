import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { SiteLayout } from "@/components/site/Layout";
import { getDashboard, moderateReview } from "@/lib/admin.functions";
import { Check, Trash2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Om Centre" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Admin,
});

type Dash = Awaited<ReturnType<typeof getDashboard>>;

function Admin() {
  const fetchDash = useServerFn(getDashboard);
  const moderate = useServerFn(moderateReview);
  const [passcode, setPasscode] = useState("");
  const [data, setData] = useState<Dash | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async (pc: string) => {
    setLoading(true);
    setError(null);
    try {
      const d = await fetchDash({ data: { passcode: pc } });
      setData(d);
      sessionStorage.setItem("om_admin_pc", pc);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const onModerate = async (id: string, action: "approve" | "delete") => {
    try {
      await moderate({ data: { passcode, id, action } });
      await load(passcode);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Action failed");
    }
  };

  if (!data) {
    return (
      <SiteLayout>
        <section className="container-luxe py-24">
          <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface p-8">
            <div className="hairline">Restricted area</div>
            <h1 className="mt-3 font-serif text-4xl">Admin access</h1>
            <p className="mt-3 text-sm text-muted-foreground">Enter the dashboard passcode.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                load(passcode);
              }}
              className="mt-6 space-y-4"
            >
              <input
                type="password"
                autoFocus
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode"
                className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none"
              />
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button
                disabled={loading || !passcode}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gold text-sm font-medium text-primary-foreground disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Unlock"}
              </button>
            </form>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const c = data.counts;
  const wa = c.whatsapp_click ?? 0;
  const call = c.call_click ?? 0;
  const bookStart = c.booking_start ?? 0;
  const bookSubmit = c.booking_submit ?? 0;
  const rev = c.review_submit ?? 0;
  const maxDaily = Math.max(1, ...data.daily.map((d) => d.whatsapp + d.call + d.booking));
  const pendingReviews = data.reviews.filter((r) => !r.approved);

  return (
    <SiteLayout>
      <section className="container-luxe py-12">
        <div className="flex items-center justify-between">
          <div>
            <div className="hairline">Last 30 days</div>
            <h1 className="mt-2 font-serif text-4xl">Conversion dashboard</h1>
          </div>
          <button
            onClick={() => load(passcode)}
            className="rounded-full border border-border px-4 py-2 text-sm hover:border-gold hover:text-gold"
          >
            Refresh
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <Stat label="WhatsApp clicks" value={wa} />
          <Stat label="Call clicks" value={call} />
          <Stat label="Booking started" value={bookStart} />
          <Stat label="Booking submitted" value={bookSubmit} />
          <Stat label="Reviews submitted" value={rev} />
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface p-6">
          <div className="hairline">Daily activity (14d)</div>
          <div className="mt-6 flex items-end gap-2 overflow-x-auto pb-2">
            {data.daily.map((d) => {
              const total = d.whatsapp + d.call + d.booking;
              const h = Math.round((total / maxDaily) * 140);
              return (
                <div key={d.date} className="flex w-10 shrink-0 flex-col items-center gap-2">
                  <div className="flex h-[140px] w-full items-end overflow-hidden rounded-md bg-background">
                    <div
                      className="w-full bg-gold transition-all"
                      style={{ height: `${h}px` }}
                      title={`WA ${d.whatsapp} · Call ${d.call} · Book ${d.booking}`}
                    />
                  </div>
                  <div className="text-[10px] text-muted-foreground">{d.date.slice(5)}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <div className="hairline">Recent appointments</div>
            <div className="mt-4 space-y-3">
              {data.appointments.length === 0 && (
                <p className="text-sm text-muted-foreground">No appointments yet.</p>
              )}
              {data.appointments.slice(0, 20).map((a) => (
                <div key={a.id} className="rounded-lg border border-border bg-background p-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">{a.name}</span>
                    <span className="text-muted-foreground">{new Date(a.created_at).toLocaleString()}</span>
                  </div>
                  <div className="mt-1 text-muted-foreground">
                    {a.treatment} · {a.appointment_date} · {a.slot} · <a className="text-gold" href={`tel:${a.phone}`}>{a.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6">
            <div className="flex items-center justify-between">
              <div className="hairline">Reviews · {pendingReviews.length} pending</div>
            </div>
            <div className="mt-4 space-y-3">
              {data.reviews.length === 0 && (
                <p className="text-sm text-muted-foreground">No reviews yet.</p>
              )}
              {data.reviews.map((r) => (
                <div key={r.id} className="rounded-lg border border-border bg-background p-4 text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-medium">{r.name}</span>{" "}
                      <span className="text-gold">{"★".repeat(r.rating)}</span>
                      {r.treatment && <span className="text-muted-foreground"> · {r.treatment}</span>}
                    </div>
                    <span className={"rounded-full px-2 py-0.5 text-[10px] " + (r.approved ? "bg-gold/20 text-gold" : "bg-muted/20 text-muted-foreground")}>
                      {r.approved ? "Approved" : "Pending"}
                    </span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{r.body}</p>
                  <div className="mt-3 flex gap-2">
                    {!r.approved && (
                      <button onClick={() => onModerate(r.id, "approve")} className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs text-primary-foreground">
                        <Check className="h-3 w-3" /> Approve
                      </button>
                    )}
                    <button onClick={() => onModerate(r.id, "delete")} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs hover:border-red-400 hover:text-red-400">
                      <Trash2 className="h-3 w-3" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-serif text-4xl text-gold">{value}</div>
    </div>
  );
}