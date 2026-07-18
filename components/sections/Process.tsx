"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useReveal } from "@/lib/useReveal";
import { processSteps } from "@/lib/projects";

export default function Process() {
  const ref = useReveal<HTMLDivElement>({
    childrenSelector: "[data-step]",
    stagger: 0.1,
  });

  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-16">
          <SectionHeading eyebrow="How we work" title="The Process" />
        </div>

        <div ref={ref} className="border-t border-line">
          {processSteps.map((s) => (
            <div
              key={s.no}
              data-step
              className="grid gap-4 border-b border-line py-10 md:grid-cols-[120px_1fr_1.4fr] md:items-baseline md:gap-8"
            >
              <span className="font-display text-2xl tracking-tightest text-orange">
                {s.no}
              </span>
              <h3 className="display text-2xl md:text-3xl">{s.name}</h3>
              <p className="max-w-xl text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
