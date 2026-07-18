import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/projects";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-16">
          <SectionHeading eyebrow="Client Review" title="Testimonials" />
        </div>

        <div className="flex flex-col gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i}>
              <figure className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-cream md:px-16 md:py-20">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(70% 90% at 100% 0%, rgba(230,74,25,0.35) 0%, rgba(15,5,5,0) 65%)",
                  }}
                />
                <blockquote className="relative z-10 flex flex-col gap-8">
                  <p className="display max-w-3xl text-2xl leading-snug md:text-4xl">
                    “{t.quote}”
                  </p>
                  <figcaption className="text-sm text-cream/60">
                    <span className="text-cream">{t.author}</span> — {t.role}
                  </figcaption>
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
