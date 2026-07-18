"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/projects";
import Wordmark from "@/components/ui/Wordmark";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container-skayl">
        <div className="mt-4 flex items-center justify-between rounded-full border border-line bg-cream/80 px-5 py-2.5 backdrop-blur-md">
          <Link href="/" aria-label="SKAYL home" className="flex items-center">
            <Wordmark className="h-5 w-auto text-ink" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={nav.cta.href}
              className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-cream transition-transform hover:scale-[1.03] md:inline-flex"
            >
              {nav.cta.label}
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-4 bg-ink transition-transform ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-4 bg-ink transition-transform ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="container-skayl md:hidden"
          >
            <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-line bg-cream p-4">
              {nav.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-ink/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={nav.cta.href}
                onClick={() => setOpen(false)}
                className="mt-1 rounded-2xl bg-ink px-4 py-3 text-center text-base font-medium text-cream"
              >
                {nav.cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
