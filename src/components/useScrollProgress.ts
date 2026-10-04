"use client";

import { useEffect, useRef } from "react";

// Per-frame lerp factor (reference smoothing: 50)
const SMOOTHING = 0.5;

/**
 * Tracks how far an element has travelled through the viewport and writes it
 * to `--p` (0–1) on that element, for the scroll-linked styles in globals.css.
 * `--p-full` is the progress at which the whole element is in view.
 *
 * The maths mirrors the reference's "while scrolling in view" trigger,
 * including measuring the element with its own transform applied.
 *
 * @param fromEnter true: progress starts when the element's top enters the
 *   viewport. false: it starts once the element fills the viewport.
 */
export function useScrollProgress<T extends HTMLElement>(fromEnter: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const desktop = window.matchMedia("(min-width: 62rem)");
    let frame = 0;
    let target = 0;
    let position: number | null = null;

    // Like the reference, the target is only re-measured when the page scrolls,
    // not while the element is still easing towards it.
    const update = () => {
      if (!desktop.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        position = null;
        el.style.removeProperty("--p");
        el.style.removeProperty("--p-full");
        return;
      }

      const viewport = document.documentElement.clientHeight;
      const rect = el.getBoundingClientRect();
      const start = rect.top + (fromEnter ? 0 : Math.min(rect.height, viewport));
      const end = rect.top + rect.height;
      const range = Math.min(
        viewport + end - start,
        document.documentElement.scrollHeight
      );

      target = Math.min(Math.max(0, viewport - start), range) / range;
      el.style.setProperty("--p-full", Math.min(rect.height / range, 1).toFixed(4));
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const tick = () => {
      frame = 0;
      position = position === null ? target : position + (target - position) * SMOOTHING;
      if (Math.abs(target - position) < 0.0001) position = target;
      el.style.setProperty("--p", position.toFixed(4));
      if (position !== target) frame = requestAnimationFrame(tick);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    desktop.addEventListener("change", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      desktop.removeEventListener("change", update);
    };
  }, [fromEnter]);

  return ref;
}
