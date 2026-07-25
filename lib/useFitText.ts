"use client";

import { useEffect, useRef } from "react";

// Scales an element's font-size so its single-line text exactly fills the
// width of its parent — the "fit text to width" behaviour Framer uses for the
// oversized section headings, so titles never wrap or clip regardless of
// length. Re-fits on resize and once web fonts have loaded.
export function useFitText<T extends HTMLElement = HTMLHeadingElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const parentW = parent.clientWidth;
      if (!parentW) return;
      el.style.whiteSpace = "nowrap";
      el.style.fontSize = "100px";
      const textW = el.scrollWidth;
      if (!textW) return;
      el.style.fontSize = `${(100 * parentW) / textW}px`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    if (el.parentElement) ro.observe(el.parentElement);
    if (typeof document !== "undefined" && "fonts" in document) {
      (document as Document).fonts.ready.then(fit).catch(() => {});
    }
    return () => ro.disconnect();
  }, []);

  return ref;
}
