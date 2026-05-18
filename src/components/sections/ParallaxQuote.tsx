import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function ParallaxQuote() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[50vh] items-center overflow-hidden border-y border-border bg-bg2 py-20"
      aria-label="Statement"
    >
      <motion.div
        style={{
          y,
          background:
            "linear-gradient(135deg, var(--quote-panel-from), var(--quote-panel-via), var(--quote-panel-to))",
        }}
        className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-accent) 1.4px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <blockquote className="font-display text-[clamp(1.5rem,3.5vw,3.1rem)] font-extrabold leading-tight tracking-[-0.03em] text-balance text-foreground">
          &ldquo;Have you ever seen your{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-accent">security spend shrink</span>
            <span
              className="absolute inset-x-0 bottom-1 z-0 h-2 bg-accent/35 dark:bg-accent/40"
              aria-hidden
            />
          </span>{" "}
          while your protection becomes stronger?&rdquo;
        </blockquote>
        <footer className="mt-8 font-mono text-[0.78rem] text-muted">
          — Hasti Computers Pvt. Ltd.
        </footer>
      </div>
    </section>
  );
}
