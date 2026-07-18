"use client";

// Infinite marquee ticker. Content is duplicated so the -50% translate loops
// seamlessly. Pauses on hover, mirrors the Framer Ticker behaviour.
export default function Ticker({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const sequence = [...words, ...words];
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {sequence.concat(sequence).map((w, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-display text-6xl leading-none tracking-tightest text-orange/90 sm:text-7xl md:text-8xl"
          >
            {w}
            <span className="mx-8 text-orange-soft/70 md:mx-12">×</span>
          </span>
        ))}
      </div>
    </div>
  );
}
