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
        title="Every discipline. One team."
        subtitle="We don’t subcontract. Every service is built by us — so every output shares the same creative language."
      />
      <Services />
      <Ticker words={tickerWords} className="border-y border-line py-8" />
      <CTA />
    </>
  );
}
