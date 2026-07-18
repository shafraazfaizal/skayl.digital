"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Available for new projects
          </motion.span>

          <AnimatedText
            as="h1"
            play="mount"
            text="Digital products for brands that mean it."
            className="display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          />

          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-balance text-lg text-muted"
          >
            SKAYL is a creative house building websites, brands, and content for
            charities, startups, and growing businesses across the UK and Sri
            Lanka.
          </motion.p>

          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/contact" variant="primary">
              Start a Project →
            </Button>
            <Button href="/works" variant="outline">
              View our work
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
