import { FormEvent } from "react";
import { company, partnerBrands } from "../data/siteContent";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageSeo } from "../hooks/usePageSeo";

export function ContactPage() {
  usePageSeo({
    title: "Contact Us",
    description: `Contact ${company.name} in Indore for CCTV, solar, and security quotes. Call ${company.phonePrimary}.`,
    path: "/contact",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="border-b border-border bg-bg2 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
            Contact Us
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Let&apos;s scope your project
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Share timelines, locations, and priorities. We respond with a
            practical proposal — not generic brochures.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h2 className="font-display text-xl font-bold text-foreground">
            Send a message
          </h2>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label htmlFor="msg" className="mb-1 block text-sm font-medium text-foreground">
                Project details
              </label>
              <textarea
                id="msg"
                name="message"
                rows={5}
                required
                className="w-full resize-y rounded-xl border border-border bg-bg px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                placeholder="Site location, approximate scale, timelines…"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-accent py-3.5 font-display text-sm font-bold text-cta-text transition hover:bg-accent2"
            >
              Submit inquiry
            </button>
          </form>
        </motion.div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Head office
            </h2>
            <ul className="mt-6 space-y-5 text-sm text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="space-y-1">
                  <a
                    href={`tel:${company.phonePrimary.replace(/-/g, "")}`}
                    className="block font-medium text-foreground hover:text-accent"
                  >
                    {company.phonePrimary}
                  </a>
                  {company.phoneSecondary.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/-/g, "")}`}
                      className="block text-foreground hover:text-accent"
                    >
                      {p}
                    </a>
                  ))}
                  {company.mobile.map((m) => (
                    <a
                      key={m}
                      href={`tel:${m}`}
                      className="block text-foreground hover:text-accent"
                    >
                      {m}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{company.hours}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-bg2 p-8 text-sm leading-relaxed text-muted">
            For urgent support on existing installations, mention your AMC or
            invoice number in the message so we can route you to the right
            engineer faster.
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-lg font-bold text-foreground">
              Brands we integrate
            </h3>
            <p className="mt-2 text-sm text-muted">
              We recommend and install leading OEMs based on your site, budget,
              and compliance needs.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {partnerBrands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-pill border border-border bg-bg2 px-3 py-1 text-xs font-semibold text-foreground"
                >
                  {brand}
                </span>
              ))}
            </div>
            <Link
              to="/solutions/electronic-safety-security"
              className="mt-5 inline-block text-sm font-bold text-accent hover:underline"
            >
              Browse our solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
