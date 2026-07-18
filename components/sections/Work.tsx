"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { works } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

// Sticky-stacking works cards — a port of the Framer `styleTransformEffect`:
// each card pins, then as the next scrolls up over it, the outgoing card
// scales down (→0.85), fades, and rotates slightly, so the stack recedes.
export default function Work({ heading = true }: { heading?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-work-card]");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.35,
          y: -40,
          rotate: -2,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-28">
      <Container>
        {heading && (
          <div className="mb-16">
            <SectionHeading eyebrow="Selected Work" title="Recent Works" />
          </div>
        )}

        <div ref={wrapRef} className="flex flex-col gap-6">
          {works.map((w) => (
            <div
              key={w.slug}
              data-work-card
              className="sticky top-24 origin-top"
            >
              <Link
                href={`/works/${w.slug}`}
                className="group relative block overflow-hidden rounded-[28px] border border-line bg-ink text-cream"
              >
                <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                  <div className="flex flex-col justify-between gap-8">
                    <div className="flex items-center justify-between text-sm text-cream/60">
                      <span className="tabular-nums">{w.page}</span>
                      <span>{w.year}</span>
                    </div>
                    <div>
                      <h3 className="display text-4xl md:text-5xl">{w.title}</h3>
                      <p className="mt-3 max-w-sm text-sm text-cream/60">
                        {w.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-cream/70">
                      <span className="text-cream/40">Role</span>
                      <span>{w.role}</span>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={w.cover}
                      alt={w.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-skayl-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
