"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { useReveal } from "@/lib/useReveal";
import { whyUs } from "@/lib/projects";

export default function WhyUs() {
  const ref = useReveal<HTMLDivElement>({
    childrenSelector: "[data-why]",
    stagger: 0.1,
  });

  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-16">
          <SectionHeading eyebrow="Why SKAYL" title="Why choose us" />
        </div>

        <div ref={ref} className="grid gap-5 md:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.title} data-why>
              <Card className="flex h-full flex-col gap-3 p-8">
                <h3 className="display text-xl md:text-2xl">{w.title}</h3>
                <p className="text-muted">{w.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
