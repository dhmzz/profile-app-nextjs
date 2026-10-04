import { ReactNode } from "react";

// Page-load stagger per column (hero only)
const LOAD_TIMING = [
  "",
  "[--load-delay:1050ms] [--load-dur:950ms]",
  "[--load-delay:1100ms] [--load-dur:900ms]",
];

export default function SectionHeader({
  items,
  stack = false,
  load = false,
  className = "",
}: {
  /** Up to three label columns. */
  items: ReactNode[];
  /** On small screens, give the first column its own row and stack the rest. */
  stack?: boolean;
  /** Play the page-load entrance. */
  load?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col gap-y-2 sm:gap-y-4 md:gap-y-2 ${className}`}>
      <div className={`h-px bg-line ${load ? "load-grow" : ""}`} />
      <div className="grid-12 gap-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={[
              "label flex flex-col gap-y-1",
              i === 0 ? "lg:col-span-5" : "lg:col-span-3",
              stack ? (i === 0 ? "col-span-2 md:col-span-1" : "col-span-2 sm:col-span-1") : "",
              load ? `load-rise ${LOAD_TIMING[i] ?? ""}` : "",
            ].join(" ")}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
