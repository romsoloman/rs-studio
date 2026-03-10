import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AgentsShowcase } from "@/components/sections/AgentsShowcase";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <AgentsShowcase />
      <HowItWorksSection />
      <TechStackSection />
      <PricingSection />
      <PortfolioPreview />
      <FaqSection />
      <ContactSection />
    </>
  );
}
