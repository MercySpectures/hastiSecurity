import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company } from "../data/siteContent";
import { usePageSeo } from "../hooks/usePageSeo";
import { HeroSection } from "../components/sections/HeroSection";
import { MarqueeSection } from "../components/sections/MarqueeSection";
import { SolutionsSection } from "../components/sections/SolutionsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ParallaxQuote } from "../components/sections/ParallaxQuote";
import { ClientsSection } from "../components/sections/ClientsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { CtaSection } from "../components/sections/CtaSection";

export function HomePage() {
  const location = useLocation();

  usePageSeo({
    title: "Home",
    description: `${company.name} — CCTV surveillance, solar energy, electronic security, and industrial automation across India since ${company.founded}.`,
    path: "/",
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.hash]);

  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <SolutionsSection />
      <AboutSection />
      <ParallaxQuote />
      <ClientsSection logoLimit={25} showViewAllLink showMap />
      <MarqueeSection reverse />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
