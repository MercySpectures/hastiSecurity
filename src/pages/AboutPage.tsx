import { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company, partnerBrands, valueCards } from "../data/siteContent";
import { solutionCategories, solutionPath } from "../data/navigation";
import { menuFeaturedSrc } from "../data/menuFeaturedImages";
import {
  ArrowUpRight,
  Building2,
  Eye,
  Globe,
  Leaf,
  MapPin,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { LazyIndiaCoverageMap } from "../components/layout/AppLayout";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { getOrganizationJsonLd, usePageSeo } from "../hooks/usePageSeo";

const valueIcons = [Leaf, Shield, Sparkles, Eye, Users, Target] as const;

const journeySteps = [
  {
    year: "2008",
    title: "Founded in Indore",
    text: "Hasti Security Solutions begins as a regional integrator for CCTV and electronic security.",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Incorporated as Pvt. Ltd.",
    text: "Formalized as Hasti Security Solutions with expanded product lines and service standards.",
    icon: Building2,
  },
  {
    year: "2020s",
    title: "Pan-India expansion",
    text: `Delivery and support across ${company.stats.states}+ states and ${company.stats.cities}+ cities nationwide.`,
    icon: Globe,
  },
  {
    year: "Today",
    title: "Trusted systems partner",
    text: `${company.stats.staff}+ trained staff serving ${company.stats.customers}+ customers with AMC and after-sales.`,
    icon: Users,
  },
] as const;

function MapSkeleton() {
  return (
    <div className="h-[280px] animate-pulse rounded-2xl border border-border bg-bg3 sm:h-[320px] lg:h-[360px]" />
  );
}

export function AboutPage() {
  usePageSeo({
    title: "About Us",
    description: `${company.name} — best security system dealers in Indore. CCTV, solar, access control & automation since ${company.founded}.`,
    path: "/about",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(getOrganizationJsonLd());
    script.id = "org-jsonld";
    document.head.appendChild(script);
    return () => {
      document.getElementById("org-jsonld")?.remove();
    };
  }, []);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-bg2 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
              About Us
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Best Security System Dealers in Indore
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Since {company.founded}, {company.name} delivers surveillance, solar,
              electronic security, and smart technology with excellent products and
              nationwide after-sales support.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex rounded-pill bg-accent px-6 py-3 font-display text-sm font-bold text-cta-text transition hover:bg-accent2"
              >
                Get in touch
              </Link>
              <Link
                to="/clients"
                className="inline-flex rounded-pill border border-border bg-card px-6 py-3 font-display text-sm font-bold text-foreground transition hover:border-accent/40"
              >
                Our clients
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
            <img
              src={menuFeaturedSrc("electronic-safety-security")}
              alt="Electronic security and access control solutions by Hasti Security Solutions"
              className="aspect-[4/3] h-full w-full object-cover sm:aspect-[16/10]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-white/80">
                Headquarters
              </p>
              <p className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
                Indore, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            { target: company.stats.years, suffix: "+", label: "Years active" },
            { target: company.stats.staff, suffix: "+", label: "Trained staff" },
            { target: company.stats.states, suffix: "+", label: "States" },
            {
              target: company.stats.customers,
              suffix: "+",
              label: "Customers",
              big: true,
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-bg2/50 px-3 py-3 text-center sm:px-4 sm:py-4"
            >
              <div className="font-display text-2xl font-extrabold text-accent sm:text-3xl">
                <AnimatedCounter
                  target={s.target}
                  suffix={s.suffix}
                  isCustomers={"big" in s && s.big}
                />
              </div>
              <div className="mt-1 text-[0.65rem] font-medium uppercase tracking-wider text-muted sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4 text-muted"
        >
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
            Company overview
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            One-stop systems partner for central India
          </h2>
          <p className="text-sm leading-relaxed sm:text-base">
            Since {company.founded}, we have developed excellent quality products and
            after-sales services. Incorporated in {company.incorporated} as{" "}
            {company.name}, we are among the top suppliers of industrial automation,
            safety equipment, and integrated solutions in Indore, Bhopal, and Jabalpur.
          </p>
          <p className="text-sm leading-relaxed sm:text-base">
            From CCTV and access control to solar panels and Nextview displays, we serve
            homes, schools, hospitals, and enterprises — partnering with India&apos;s
            leading brands.
          </p>
        </motion.div>
      </section>

      <section className="border-y border-border bg-bg2 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
              Our journey
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              From Indore startup to pan-India partner
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Fifteen years of disciplined delivery, training, and long-term client
              relationships.
            </p>
          </div>
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="pointer-events-none absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
              aria-hidden
            />
            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-lg font-extrabold text-accent">
                      {step.year}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg2 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
              What we deliver
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Four solution lines, one accountable partner
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutionCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={solutionPath(cat.slug)}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-accent/40 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-bg3">
                  <img
                    src={menuFeaturedSrc(cat.slug)}
                    alt={cat.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-sm font-bold text-foreground sm:text-base">
                    {cat.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted sm:text-sm">
                    {cat.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent sm:text-sm">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <Target className="h-8 w-8 text-accent" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-xl font-bold text-foreground">Our mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              To be India&apos;s most trustworthy systems solutions company promoting safety,
              renewable resources, and easier lives through automation.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <Eye className="h-8 w-8 text-accent" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-xl font-bold text-foreground">Our vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              A brighter, safer, and greener future — spreading awareness to shift toward
              renewable resources and protect the environment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg2 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
              Our core values
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              What makes us professional
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valueCards.map((card, i) => {
              const Icon = valueIcons[i] ?? Sparkles;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                  <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-base font-bold text-foreground sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Suspense fallback={<MapSkeleton />}>
          <LazyIndiaCoverageMap />
        </Suspense>
      </section>

      <section className="border-y border-border bg-bg2 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
            Partners &amp; OEMs
          </p>
          <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
            Brands we integrate and support
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {partnerBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-pill border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground sm:text-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection
        eyebrow="Client's testimonials"
        title="Trusted by institutions nationwide"
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <MapPin className="h-8 w-8 text-accent" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-lg font-bold text-foreground sm:text-xl">
              Visit our headquarters
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{company.address}</p>
            <p className="mt-4 text-sm text-muted">{company.hours}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent"
            >
              Contact office
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-accent/30 bg-accent/5 p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-foreground">
              Ready to scope your site?
            </h3>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Share your location and timeline for a practical proposal.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex w-fit rounded-pill bg-accent px-5 py-2.5 font-display text-sm font-bold text-cta-text transition hover:bg-accent2"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
