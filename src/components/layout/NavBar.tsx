import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navLinks } from "../../data/siteContent";
import { useTheme } from "../../context/ThemeContext";

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] border-b transition-colors ${
        scrolled
          ? "border-border bg-[color:var(--nav-bg)] shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-baseline gap-0.5 font-display text-xl font-extrabold tracking-tight text-foreground sm:text-2xl"
        >
          {company.shortName}
          <span
            className="translate-y-px text-accent transition group-hover:text-accent2"
            aria-hidden
          >
            .
          </span>
          <span className="sr-only">{company.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.85rem] font-medium uppercase tracking-[0.04em] text-muted transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-accent/40 hover:bg-bg3/50"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            ) : (
              <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-pill bg-accent px-4 py-2 font-display text-[0.8rem] font-bold uppercase tracking-wide text-cta-text shadow-sm transition hover:bg-accent2 sm:inline-flex"
          >
            Get in Touch
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`border-t border-border bg-[color:var(--nav-bg)] backdrop-blur-xl transition ${
            open ? "max-h-[70vh] opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium uppercase tracking-wider text-muted transition hover:bg-bg3 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-pill bg-accent px-4 py-3 font-display text-sm font-bold text-cta-text"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
