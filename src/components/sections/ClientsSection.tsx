import { company, clientLogos } from "../../data/siteContent";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { MotionItem, MotionStagger } from "../ui/MotionSection";

const mapDots = [
  { top: "18%", left: "42%" },
  { top: "28%", left: "48%" },
  { top: "34%", left: "38%" },
  { top: "40%", left: "52%" },
  { top: "48%", left: "44%" },
  { top: "52%", left: "58%" },
  { top: "58%", left: "40%" },
  { top: "62%", left: "50%" },
  { top: "70%", left: "46%" },
] as const;

export function ClientsSection() {
  return (
    <section
      id="clients"
      className="scroll-mt-24 border-y border-border bg-bg2 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
            Clients
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Institutions that run on uptime
          </h2>
          <p className="text-muted">
            A snapshot of organizations where our systems operate daily — from
            healthcare and education to manufacturing and infrastructure.
          </p>
        </div>

        <MotionStagger className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 md:grid-cols-5" stagger={0.04}>
          {clientLogos.map((name) => (
            <MotionItem key={name}>
              <div className="flex min-h-[5.5rem] items-center justify-center bg-card px-3 py-4 text-center transition hover:bg-[color:var(--card-hover)]">
                <span className="text-[0.8rem] font-medium leading-snug text-muted">
                  {name}
                </span>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>

        <div className="mb-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-5">
          {[
            { target: company.stats.states, suffix: "+", label: "States" },
            { target: company.stats.cities, suffix: "+", label: "Cities" },
            { target: company.stats.years, suffix: "", label: "Years active" },
            { target: company.stats.staff, suffix: "+", label: "Staff trained" },
            {
              target: company.stats.customers,
              suffix: "+",
              label: "Customers",
              customers: true as const,
            },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`bg-card px-4 py-6 text-center sm:py-8 ${
                i > 0 ? "sm:border-l sm:border-border" : ""
              }`}
            >
              <div className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
                <AnimatedCounter
                  target={s.target}
                  suffix={s.suffix}
                  isCustomers={"customers" in s && s.customers}
                />
              </div>
              <div className="mt-2 text-[0.72rem] font-medium uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg3">
          <div className="relative h-56 w-full md:h-64">
            <div
              className="absolute inset-0 opacity-[0.35] dark:opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden
            />
            {mapDots.map((d, idx) => (
              <span
                key={idx}
                className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_rgb(var(--color-accent-rgb)/0.15)]"
                style={{ top: d.top, left: d.left }}
              >
                <span
                  className="absolute inset-0 animate-ripple rounded-full border border-accent/60"
                  style={{ animationDelay: `${idx * 0.25}s` }}
                  aria-hidden
                />
              </span>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="rounded-full border border-border bg-card/90 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-wider text-muted backdrop-blur">
                Pan-India coverage · {company.stats.states} states ·{" "}
                {company.stats.cities}+ cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
