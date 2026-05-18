import { company, navLinks } from "../../data/siteContent";

const footerCols = [
  {
    title: "Company",
    links: ["About Us", "Solutions", "Clients", "Career", "Blog"],
  },
  {
    title: "Solutions",
    links: [
      "Surveillance Systems",
      "Solar Energy",
      "Electronic Security",
      "Nextview",
      "Industrial Automation",
    ],
  },
  {
    title: "Contact",
    links: [
      company.phonePrimary,
      company.phoneSecondary[0],
      company.mobile[0],
      company.email,
      company.domain,
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm space-y-4">
            <div className="font-display text-2xl font-extrabold tracking-tight">
              {company.shortName}
              <span className="text-accent">.</span>{" "}
              <span className="text-base font-semibold text-muted">
                Computers
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              India&apos;s benchmark in CCTV surveillance, solar energy,
              electronic security, and industrial automation since{" "}
              {company.founded}.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`tel:${company.phonePrimary.replace(/-/g, "")}`}
                  className="transition hover:text-accent"
                >
                  {company.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition hover:text-accent"
                >
                  {company.email}
                </a>
              </li>
              <li className="leading-relaxed">{company.address}</li>
            </ul>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                {col.title}
              </div>
              <ul className="space-y-2.5 text-sm text-muted">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link.includes("@")
                          ? `mailto:${link}`
                          : link.startsWith("073") || link.startsWith("958")
                            ? `tel:${link.replace(/-/g, "")}`
                            : link === company.domain
                              ? `https://${link}`
                              : "#top"
                      }
                      className="transition hover:text-accent"
                      {...(link === company.domain
                        ? { rel: "noreferrer", target: "_blank" }
                        : {})}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.slice(0, 3).map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent">
                {l.label}
              </a>
            ))}
            <span className="hidden sm:inline" aria-hidden>
              |
            </span>
            <a href="#top" className="hover:text-accent">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-accent">
              Terms
            </a>
            <a href="#top" className="hover:text-accent">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
