"use client";

import { ElementType, useLayoutEffect, useRef } from "react";

// Measuring at a large size keeps the browser's whole-pixel metric rounding negligible.
const BASE = 1000;

/**
 * One line of display text scaled to exactly fill its container's width and
 * trimmed to the ink box, the way the reference uses full-width wordmark SVGs.
 */
export default function FitText({
  as: Tag = "div",
  text,
  tracking = 0,
  id,
  className = "",
}: {
  as?: ElementType;
  text: string;
  /** Letter spacing in em. */
  tracking?: number;
  id?: string;
  className?: string;
}) {
  const frameRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const box = boxRef.current;
    const el = textRef.current;
    const ctx = document.createElement("canvas").getContext("2d");
    if (!frame || !box || !el || !ctx) return;

    const fit = () => {
      const style = getComputedStyle(el);
      const content = style.textTransform === "uppercase" ? text.toUpperCase() : text;
      ctx.font = `${style.fontWeight} ${BASE}px ${style.fontFamily}`;
      const m = ctx.measureText(content);

      const inkWidth =
        m.actualBoundingBoxLeft +
        m.actualBoundingBoxRight +
        (content.length - 1) * tracking * BASE;
      if (inkWidth <= 0) return;

      const scale = frame.clientWidth / inkWidth;
      // Where the baseline sits inside a line box of line-height 1
      const baseline = (BASE + m.fontBoundingBoxAscent - m.fontBoundingBoxDescent) / 2;

      box.style.fontSize = `${scale * BASE}px`;
      box.style.height = `${scale * (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent)}px`;
      el.style.marginLeft = `${scale * m.actualBoundingBoxLeft}px`;
      el.style.marginTop = `${scale * (m.actualBoundingBoxAscent - baseline)}px`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(frame);
    document.fonts.ready.then(fit);

    return () => observer.disconnect();
  }, [text, tracking]);

  return (
    <Tag ref={frameRef} id={id} className={`@container block w-full ${className}`}>
      {/* The em values are Clash Display's metrics, used until the text is measured.
          flow-root keeps the text's negative top margin from collapsing through. */}
      <span
        ref={boxRef}
        className="flow-root h-[0.67em] font-display font-semibold uppercase leading-none whitespace-nowrap"
        style={{ fontSize: `calc(100cqw / ${(text.length * 0.65).toFixed(2)})` }}
      >
        <span
          ref={textRef}
          className="-mt-[0.15em] -ml-[0.045em] block"
          style={{ letterSpacing: `${tracking}em` }}
        >
          {text}
        </span>
      </span>
    </Tag>
  );
}
