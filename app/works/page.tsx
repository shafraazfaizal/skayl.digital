import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Works — SKAYL",
  description: "Selected work from SKAYL across web, brand, and content.",
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Works"
        title="Work we’re proud of."
        subtitle="We’ve helped businesses and communities across industries achieve their goals. Here are some of our selected works."
      />
      <Work heading={false} />
      <CTA />
    </>
  );
}
