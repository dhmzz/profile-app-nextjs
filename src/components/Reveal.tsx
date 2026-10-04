"use client";

import { ElementType, ReactNode, useEffect, useRef, useState } from "react";

/**
 * Marks itself `data-inview` the first time it scrolls into view, which lets
 * the `.reveal-line` elements inside it slide up into place.
 */
export default function Reveal({
  as: Tag = "div",
  offset = 10,
  id,
  className,
  children,
}: {
  as?: ElementType;
  /** How far into the viewport the element must be, as a % of its height. */
  offset?: number;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Already scrolled past counts too, e.g. when the page opens at an anchor.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: `0px 0px -${offset}% 0px` }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [offset]);

  return (
    <Tag ref={ref} id={id} className={className} data-inview={inView ? "" : undefined}>
      {children}
    </Tag>
  );
}
