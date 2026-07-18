import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Services from "@/components/sections/Services";
import Ticker from "@/components/ui/Ticker";
import CTA from "@/components/sections/CTA";
import { tickerWords } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — SKAYL",
  description:
    "Web development, branding & design, content & media, and event management from SKAYL.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Creative Services, Delivered."
        subtitle="Ideas, stories, and strategies from the creative edge — covering design, development, and the tools that bring bold digital work to life."
      />
      <Services />
      <Ticker words={tickerWords} className="border-y border-line py-8" />
      <CTA />
    </>
  );
}
