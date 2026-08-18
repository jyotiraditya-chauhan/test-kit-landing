import { HeroSection } from "@/components/sections/hero-section";
import { WhyTestKitSection } from "@/components/sections/why-test-kit-section";
import { WhySection } from "@/components/sections/why-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { FaultInjectionSection } from "@/components/sections/fault-injection-section";
import { WorkedExampleSection } from "@/components/sections/worked-example-section";
import { InstallSection } from "@/components/sections/install-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyTestKitSection />
      <WhySection />
      <CapabilitiesSection />
      <SkillsSection />
      <HowItWorksSection />
      <FaultInjectionSection />
      <WorkedExampleSection />
      <InstallSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
