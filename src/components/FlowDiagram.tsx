import type { CSSProperties } from "react";
import type { Flow } from "@/data/case-studies/types";
import Reveal from "./Reveal";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * A plain-language walk through a process: one track with a step per stop,
 * who does each step, and what gets sent. Horizontal from lg up, vertical below.
 * The drawing-in, the travelling dot and the hover dimming live in globals.css (.flow-*).
 */
export default function FlowDiagram({ flow }: { flow: Flow }) {
  return (
    <figure className="flex w-full flex-col gap-y-10">
      <figcaption className="label text-muted">{flow.title}</figcaption>

      <Reveal className="flow relative">
        {/* The track, and a dot running along it like a booking moving through */}
        <div className="flow-line absolute top-0 bottom-0 left-1 w-px bg-line lg:top-1 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" />
        <span aria-hidden className="flow-dot absolute size-[9px]" />

        <ol className="grid grid-cols-1 gap-y-12 lg:grid-cols-5 lg:gap-x-8">
          {flow.steps.map((step, i) => (
            <li
              key={step.title}
              className="flow-step relative pl-8 lg:pt-10 lg:pl-0"
              style={{ "--flow-delay": `${300 + i * 150}ms` } as CSSProperties}
            >
              {/* Stop on the track */}
              <span aria-hidden className="absolute top-[0.15rem] left-0 size-[9px] bg-foreground lg:top-0" />

              <div className="flow-body flex flex-col items-start gap-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="label">{pad(i + 1)}</span>
                  {/* Steps the system does on its own stand out from the ones a person does */}
                  <span
                    className={`label border px-2 py-1 ${
                      step.automatic ? "border-foreground bg-foreground text-background" : "border-line text-muted"
                    }`}
                  >
                    {step.actor}
                  </span>
                </div>

                <h3 className="heading-3">{step.title}</h3>
                <p className="text-[1rem] leading-[1.35] text-muted">{step.text}</p>

                {step.message && <p className="label leading-[1.3] text-muted">{step.message}</p>}

                {step.branch && (
                  <p className="border-l border-dashed border-muted pl-3 text-[0.875rem] leading-[1.35] text-muted">
                    {step.branch}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      {flow.note && <p className="max-w-[520px]">{flow.note}</p>}
    </figure>
  );
}
