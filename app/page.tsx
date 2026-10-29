import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import GrowthSystem from "@/components/sections/GrowthSystem";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <GrowthSystem />
      <ServicesOverview />
      <HowItWorks />
      <CTA />
    </>
  );
}
