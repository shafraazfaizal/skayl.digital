"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { useReveal } from "@/lib/useReveal";
import { services } from "@/lib/projects";

export default function Services() {
  const listRef = useReveal<HTMLDivElement>({
    childrenSelector: "[data-service]",
    stagger: 0.12,
  });

  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-16">
          <SectionHeading eyebrow="Services" title="What we do" />
        </div>

        <div ref={listRef} className="flex flex-col gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              data-service
              className="grid items-center gap-6 rounded-[28px] border border-line p-6 md:grid-cols-[1fr_1.2fr] md:p-8"
            >
              <div className="relative order-2 aspect-[16/10] overflow-hidden rounded-2xl md:order-1">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="order-1 flex flex-col gap-5 md:order-2">
                <div className="flex flex-col gap-3">
                  <h3 className="display text-2xl md:text-3xl">{s.title}</h3>
                  <p className="max-w-md text-muted">{s.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-1 flex gap-10 border-t border-line pt-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-muted">Starts at</span>
                    <span className="font-medium">{s.price}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted">Timeline</span>
                    <span className="font-medium">{s.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
