import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="pb-24 md:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-16 text-cream md:px-16 md:py-24">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 80% 120%, rgba(230,74,25,0.55) 0%, rgba(15,5,5,0) 70%)",
              }}
            />
            <div className="relative z-10 flex flex-col items-start gap-6">
              <h2 className="display max-w-2xl text-4xl md:text-6xl">
                Got a project in mind?
              </h2>
              <p className="max-w-md text-cream/60">
                We build digital products for charities, startups, and growing
                businesses across the UK and Sri Lanka. Let’s make something that
                lasts.
              </p>
              <Button href="/contact" variant="light">
                Start a Project →
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
