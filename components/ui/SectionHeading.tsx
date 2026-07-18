import AnimatedText from "./AnimatedText";
import Reveal from "./Reveal";

// Two heading treatments from Framer:
//  - "giant": the oversized Cal Sans title that bleeds to the section edge and
//    dissolves via a gradient mask (used for Recent Works, What we do, etc.)
//  - "standard": the centered Cal Sans/H2-64 heading (used for FAQ, etc.)
// Both carry the parenthesised eyebrow and the letter-by-letter reveal.
export default function SectionHeading({
  eyebrow,
  title,
  size = "giant",
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  size?: "giant" | "standard";
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Reveal as="span" className={`mb-3 text-sm ${light ? "text-cream/60" : "text-muted"}`}>
        ({eyebrow})
      </Reveal>

      {size === "giant" ? (
        <div className="w-full overflow-hidden">
          <AnimatedText
            text={title}
            as="h2"
            className={`giant-heading ${
              light ? "giant-heading--light" : ""
            } block text-[18vw] leading-[0.82] sm:text-[15vw] md:text-[12vw] lg:text-[clamp(6rem,11vw,13rem)]`}
          />
        </div>
      ) : (
        <AnimatedText
          text={title}
          as="h2"
          className={`display text-4xl leading-[1.02] sm:text-5xl md:text-6xl ${
            light ? "text-cream" : "text-ink"
          }`}
        />
      )}
    </div>
  );
}
