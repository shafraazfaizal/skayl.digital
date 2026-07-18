"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { footer } from "@/lib/projects";
import Wordmark from "@/components/ui/Wordmark";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/London",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      {/* orange glow rising from the bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, #E64A19 0%, rgba(92,29,11,0.55) 35%, rgba(15,5,5,0) 80%)",
        }}
      />

      <div className="container-skayl relative z-10 pt-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:max-w-3xl">
          {footer.columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <span className="text-sm text-cream/50">{col.heading}</span>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target={"external" in l && l.external ? "_blank" : undefined}
                      rel={
                        "external" in l && l.external
                          ? "noreferrer"
                          : undefined
                      }
                      className="text-lg font-semibold text-cream transition-colors hover:text-orange-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col gap-3 text-sm text-cream/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SKAYL. All rights reserved.</span>
          <span className="tabular-nums">London → {time}</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left text-orange transition-colors hover:text-orange-soft md:text-right"
          >
            Back to top
          </button>
        </div>

        <div className="mt-10">
          <Wordmark className="h-auto w-full text-ink" />
        </div>
      </div>
    </footer>
  );
}
