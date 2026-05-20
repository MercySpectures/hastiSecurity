import { Navigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  solutionCategories,
  solutionPath,
} from "../data/navigation";
import { getCatalogBySlug } from "../data/solutionsCatalog";
import { usePageSeo } from "../hooks/usePageSeo";

export function SolutionsCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const cat = solutionCategories.find((c) => c.slug === slug);
  const catalog = slug ? getCatalogBySlug(slug) : undefined;

  usePageSeo({
    title: cat?.title ?? "Solutions",
    description:
      cat?.description ??
      "Security, solar, and surveillance solutions by Hasti Security Solutions.",
    path: slug ? `/solutions/${slug}` : "/solutions",
  });

  if (!cat || !catalog) {
    return <Navigate to="/" replace />;
  }

  return (
    <main>
      <section className="border-b border-border bg-bg2 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
            Our Solutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {cat.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {cat.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex rounded-pill bg-accent px-5 py-2.5 font-display text-sm font-bold text-cta-text transition hover:bg-accent2"
            >
              Request a quote
            </Link>
            <Link
              to="/"
              className="inline-flex rounded-pill border border-border bg-card px-5 py-2.5 font-display text-sm font-bold text-foreground transition hover:border-accent/40"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h2 className="font-display text-xl font-bold text-foreground">
            Overview
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {cat.featuredBody} We scope each engagement with site walks, risk
            mapping, and a clear bill of materials before installation begins.
          </p>
        </motion.div>

        {catalog.sections?.map((section, i) => (
          <motion.article
            key={section.anchor}
            id={section.anchor}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.03 }}
            className="scroll-mt-nav rounded-2xl border border-border bg-card p-8"
          >
            <h2 className="font-display text-xl font-bold text-foreground">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Hasti Security Solutions supplies, installs, and supports {section.title.toLowerCase()}{" "}
              across Indore, Bhopal, Jabalpur, and nationwide deployments — with
              documented handover and AMC options.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-border bg-bg2 px-4 py-2.5 text-sm font-medium text-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-block text-sm font-bold text-accent hover:underline"
            >
              Discuss {section.title}
            </Link>
          </motion.article>
        ))}

        {catalog.items ? (
          <motion.article
            id="products"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-nav rounded-2xl border border-border bg-card p-8"
          >
            <h2 className="font-display text-xl font-bold text-foreground">
              Products &amp; offerings
            </h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {catalog.items.map((item) => (
                <li
                  key={item}
                  id={item
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className="scroll-mt-nav flex items-center gap-2 rounded-xl border border-border bg-bg2 px-4 py-2.5 text-sm font-medium text-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-block text-sm font-bold text-accent hover:underline"
            >
              Request pricing for {cat.title}
            </Link>
          </motion.article>
        ) : null}

        <div className="rounded-2xl border border-dashed border-border bg-bg2/50 p-8 text-center">
          <p className="text-sm text-muted">
            Explore other solution lines from the navigation menu, or return to{" "}
            <Link to="/" className="font-bold text-accent hover:underline">
              home
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {solutionCategories
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={solutionPath(c.slug)}
                  className="rounded-pill border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted transition hover:border-accent/40 hover:text-accent"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
