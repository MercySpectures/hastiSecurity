import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company } from "../../data/siteContent";
import { useTheme } from "../../context/ThemeContext";
import { solutionCategories, solutionPath } from "../../data/navigation";
import { SolutionsMegaMenu } from "./SolutionsMegaMenu";
import { AnimatePresence, motion } from "framer-motion";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-[0.85rem] font-semibold tracking-wide transition ${
    isActive ? "text-accent" : "text-muted hover:bg-bg2/80 hover:text-foreground"
  }`;

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [megaSlug, setMegaSlug] = useState(solutionCategories[0].slug);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileSolOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] border-b transition-colors ${
        scrolled
          ? "border-border bg-[color:var(--nav-bg)] shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <AnimatePresence>
        {megaOpen ? (
          <motion.button
            type="button"
            key="mega-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[998] cursor-default border-0 bg-black/25 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setMegaOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <div className="relative z-[1000] mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          to="/"
          data-cursor="hover"
          className="group relative z-10 flex shrink-0 items-center gap-2"
        >
          <img 
            src="/hastiIconLogo.png" 
            alt="Hasti Security Solutions Logo" 
            className="h-8 w-auto sm:h-10"
          />
          <span className="hidden font-display text-xl font-extrabold tracking-tight text-foreground sm:inline sm:text-2xl">
            {company.shortName}
            <span
              className="translate-y-px text-accent transition group-hover:text-accent2"
              aria-hidden
            >
              .
            </span>
          </span>
          <span className="sr-only">{company.name}</span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          <div
            onMouseEnter={() => setMegaOpen(true)}
            onFocus={() => setMegaOpen(true)}
          >
            <button
              type="button"
              data-cursor="hover"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[0.85rem] font-semibold tracking-wide transition ${
                megaOpen || location.pathname.startsWith("/solutions")
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Our Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  megaOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>
          </div>

          <NavLink to="/clients" className={navLinkClass}>
            Clients
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-1 sm:gap-2">
          <button
            type="button"
            data-cursor="hover"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-accent/40 hover:bg-bg3/50"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            ) : (
              <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            )}
          </button>

          <Link
            to="/contact"
            data-cursor="hover"
            className="hidden rounded-full border border-cta-text/20 bg-transparent px-4 py-2 font-display text-[0.8rem] font-bold text-foreground transition hover:border-foreground/40 hover:bg-foreground/5 sm:inline-flex"
          >
            Request a demo
          </Link>

          <Link
            to="/contact"
            data-cursor="hover"
            className="hidden rounded-pill bg-accent px-4 py-2 font-display text-[0.8rem] font-bold uppercase tracking-wide text-cta-text shadow-sm transition hover:bg-accent2 sm:inline-flex md:hidden"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {megaOpen ? (
          <motion.div
            key="mega-panel"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full z-[1001] hidden px-4 pb-2 pt-0 before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] md:block sm:px-6 lg:px-8"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="mx-auto w-full max-w-7xl">
              <SolutionsMegaMenu
                selectedSlug={megaSlug}
                onSelectSlug={setMegaSlug}
                onNavigate={() => setMegaOpen(false)}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[1000] overflow-hidden border-t border-border bg-[color:var(--nav-bg)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex max-h-[min(78vh,560px)] flex-col gap-0 overflow-y-auto px-4 py-4" aria-label="Mobile">
              <NavLink
                to="/"
                end
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-bg2"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-bg2"
              >
                About Us
              </NavLink>

              <div className="border-b border-border py-1">
                <button
                  type="button"
                  onClick={() => setMobileSolOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-foreground hover:bg-bg2"
                  aria-expanded={mobileSolOpen}
                >
                  Our Solutions
                  <ChevronDown
                    className={`h-4 w-4 transition ${mobileSolOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileSolOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-2"
                    >
                      {solutionCategories.map((cat) => (
                        <div key={cat.slug} className="py-1">
                          <Link
                            to={solutionPath(cat.slug)}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm font-bold text-foreground hover:bg-accent/10"
                          >
                            {cat.title}
                          </Link>
                          {cat.children?.map((ch) => (
                            <Link
                              key={ch.anchor}
                              to={`${solutionPath(cat.slug)}#${ch.anchor}`}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-1.5 text-xs text-muted hover:bg-bg2 hover:text-foreground"
                            >
                              {ch.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <NavLink
                to="/clients"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-bg2"
              >
                Clients
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-bg2"
              >
                Contact Us
              </NavLink>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex justify-center rounded-pill bg-accent px-4 py-3 font-display text-sm font-bold text-cta-text"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
