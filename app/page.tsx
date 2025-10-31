import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  );
}
