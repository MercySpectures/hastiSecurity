import { Plus } from "lucide-react";
import { type ReactNode, useCallback, useLayoutEffect, useRef, useState } from "react";

type Item = {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
};

type Props = {
  items: Item[];
  className?: string;
};

export function Accordion({ items, className = "" }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  const measure = useCallback(() => {
    const next: Record<string, number> = {};
    for (const it of items) {
      const el = contentRefs.current[it.id];
      next[it.id] = el?.scrollHeight ?? 0;
    }
    setHeights(next);
  }, [items]);

  useLayoutEffect(() => {
    measure();
  }, [measure, items]);

  useLayoutEffect(() => {
    const ro = new ResizeObserver(() => measure());
    for (const it of items) {
      const el = contentRefs.current[it.id];
      if (el) ro.observe(el);
    }
    return () => ro.disconnect();
  }, [items, measure]);

  const toggle = (id: string) => {
    setOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border ${className}`}
    >
      {items.map((it, idx) => {
        const isOpen = openId === it.id;
        const h = heights[it.id] ?? 0;
        return (
          <div
            key={it.id}
            className={idx === 0 ? "" : "border-t border-border"}
          >
            <button
              type="button"
              onClick={() => toggle(it.id)}
              className="flex w-full items-center justify-between gap-4 bg-card px-5 py-4 text-left transition-colors hover:bg-bg3/60"
              aria-expanded={isOpen}
            >
              <div className="min-w-0">
                {it.subtitle ? (
                  <div className="mb-1 font-mono text-[0.72rem] uppercase tracking-wider text-accent">
                    {it.subtitle}
                  </div>
                ) : null}
                <div className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {it.title}
                </div>
              </div>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-300 ${
                  isOpen
                    ? "rotate-45 border-accent bg-accent text-cta-text"
                    : "text-muted"
                }`}
                aria-hidden
              >
                <Plus className="h-4 w-4" strokeWidth={2} />
              </span>
            </button>
            <div
              className="bg-card"
              style={{
                maxHeight: isOpen ? `${h}px` : "0px",
                transition: "max-height 0.45s cubic-bezier(0.77, 0, 0.18, 1)",
                overflow: "hidden",
              }}
            >
              <div
                ref={(el) => {
                  contentRefs.current[it.id] = el;
                }}
                className="px-5 pb-5 pt-0 text-sm leading-relaxed text-muted md:text-[0.95rem]"
              >
                {it.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
