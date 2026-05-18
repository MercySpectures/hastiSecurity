import { FormEvent, useState } from "react";
import { ArrowUpRight, Cpu, LockKeyhole, SunMedium, Video } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ctaBadges, company } from "../../data/siteContent";
import { MotionItem, MotionStagger } from "../ui/MotionSection";

const badgeIcons = [Video, SunMedium, LockKeyhole, Cpu] as const;

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: typeof Video;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionItem>
      <motion.div
        data-cursor="hover"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative flex h-full gap-4 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-white/15"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <motion.div
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10"
          animate={{ scale: hovered ? 1.4 : 1, opacity: hovered ? 0.5 : 0.2 }}
          transition={{ duration: 0.35 }}
          aria-hidden
        />
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition group-hover:border-white/50 group-hover:bg-white/20">
          <Icon className="h-5 w-5 text-cta-text" strokeWidth={1.6} />
        </div>
        <div className="relative min-w-0">
          <div className="font-display text-sm font-bold text-cta-text">{title}</div>
          <p className="mt-1.5 text-xs leading-relaxed text-cta-text/70">{description}</p>
        </div>
      </motion.div>
    </MotionItem>
  );
}

export function CtaSection() {
  const reduce = useReducedMotion();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-2xl shadow-accent/20"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-muted"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.15),transparent_50%)]"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/15 blur-3xl"
          animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-black/10 blur-3xl"
          animate={reduce ? undefined : { x: [0, -25, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />

        <div className="relative grid gap-12 px-6 py-12 text-cta-text lg:grid-cols-2 lg:gap-16 lg:px-14 lg:py-16">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-pill border border-cta-text/20 bg-cta-text/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-cta-text/80">
              Free consultation
            </div>

            <h2 className="font-display text-[clamp(2.1rem,3.8vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
              Ready to secure
              <br />
              your future?
            </h2>
            <p className="max-w-md text-base leading-relaxed text-cta-text/75">
              Share your site context and priorities. Our team responds with a
              practical scope, timeline, and options aligned to your budget.
            </p>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <label className="sr-only" htmlFor="quote-email">
                Work email
              </label>
              <input
                id="quote-email"
                name="email"
                type="email"
                required
                placeholder="Work email"
                data-cursor="hover"
                className="min-w-0 flex-1 rounded-pill border border-cta-text/15 bg-white px-5 py-3.5 text-sm text-cta-text shadow-sm outline-none transition placeholder:text-cta-text/40 focus:border-cta-text/30 focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                data-cursor="hover"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-pill bg-cta-text px-7 py-3.5 font-display text-sm font-bold text-accent shadow-lg transition hover:bg-cta-text/90 hover:shadow-xl"
              >
                Get free quote
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>

            <p className="text-sm text-cta-text/65">
              Prefer phone?{" "}
              <a
                className="font-semibold text-cta-text underline-offset-4 transition hover:underline"
                href={`tel:${company.phonePrimary.replace(/-/g, "")}`}
                data-cursor="hover"
              >
                {company.phonePrimary}
              </a>
            </p>
          </div>

          <MotionStagger className="grid gap-3 sm:grid-cols-2" stagger={0.1}>
            {ctaBadges.map((b, i) => (
              <ServiceCard
                key={b.title}
                title={b.title}
                description={b.description}
                icon={badgeIcons[i] ?? Cpu}
              />
            ))}
          </MotionStagger>
        </div>
      </motion.div>
    </section>
  );
}
