import { CursorFollower } from "./components/ui/CursorFollower";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { NavBar } from "./components/layout/NavBar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { MarqueeSection } from "./components/sections/MarqueeSection";
import { SolutionsSection } from "./components/sections/SolutionsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ParallaxQuote } from "./components/sections/ParallaxQuote";
import { ClientsSection } from "./components/sections/ClientsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { FaqSection } from "./components/sections/FaqSection";
import { CtaSection } from "./components/sections/CtaSection";

export default function App() {
  return (
    <div className="min-h-dvh bg-bg">
      <CursorFollower />
      <ScrollProgress />
      <NavBar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <SolutionsSection />
        <AboutSection />
        <ParallaxQuote />
        <ClientsSection />
        <MarqueeSection reverse />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
