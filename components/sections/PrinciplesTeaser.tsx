import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { principlesTeaser } from "@/lib/content";

export default function PrinciplesTeaser() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-sm font-medium italic text-orange">
            What Guides Us
          </span>
          <h2 className="display-h2 text-4xl sm:text-5xl">
            Every project runs on the same principles.
          </h2>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-display text-xl tracking-tightest text-ink md:text-2xl">
            {principlesTeaser.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                {p}
                {i < principlesTeaser.length - 1 && (
                  <span className="text-muted">·</span>
                )}
              </span>
            ))}
          </p>
          <Link
            href="/about#principles"
            className="text-[17px] italic text-muted underline-offset-4 transition-colors hover:text-ink"
          >
            Read the full story behind how we work →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
