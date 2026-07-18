import Hero from "@/components/sections/Hero";
import Ticker from "@/components/ui/Ticker";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import PrinciplesTeaser from "@/components/sections/PrinciplesTeaser";
import PricingSection from "@/components/sections/PricingSection";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { tickerWords } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker words={tickerWords} className="border-y border-line py-8" />
      <Work />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <PrinciplesTeaser />
      <PricingSection />
      <FAQ />
      <CTA />
    </>
  );
}
