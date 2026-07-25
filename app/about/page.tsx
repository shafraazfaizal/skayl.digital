import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CorePrinciples from "@/components/sections/CorePrinciples";
import Founders from "@/components/sections/Founders";
import ToolsStack from "@/components/sections/ToolsStack";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About — SKAYL",
  description:
    "SKAYL is a creative house guided by clear principles and Islamic values, building digital products across the UK and Sri Lanka.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A creative house built on principle."
        subtitle="We help businesses, charities, and organisations launch sharper brands, websites, and content — built to last, not to trend."
      />
      <CorePrinciples />
      <Founders />
      <ToolsStack />
      <CTA />
    </>
  );
}
