"use client";

import { Fragment } from "react";
import FitText from "./FitText";
import SectionHeader from "./SectionHeader";
import { useScrollProgress } from "./useScrollProgress";

export default function Hero() {
  // Sinks and fades behind the next section as it scrolls away
  const ref = useScrollProgress<HTMLElement>(false);

  return (
    <section
      ref={ref}
      className="hero-scroll relative z-0 bg-background lg:pb-[12svh]"
      aria-labelledby="hero-heading"
    >
      {/* min-height, not height: on short screens the hero grows instead of spilling up under the header */}
      <div className="flex w-full items-end pb-12 lg:min-h-svh lg:pt-32">
        <div className="page-container justify-end gap-y-16 md:px-12 lg:gap-y-20">
          <div className="flex w-full flex-col gap-y-14">
            <SectionHeader
              load
              stack
              className="order-3 sm:order-none"
              items={[
                "Hi, I'm Dhimaz.",
                <Fragment key="role">
                  <span>Full-Stack Developer</span>
                  <span className="text-muted">2023 – Present</span>
                </Fragment>,
              ]}
            />

            <div className="grid-12 order-2 gap-y-4 sm:order-none sm:gap-y-12 md:gap-y-4">
              <div className="load-rise label mt-[0.2rem] justify-self-start [--load-delay:1050ms] [--load-dur:950ms] lg:col-span-2 lg:col-start-4">
                01
              </div>
              <p className="load-rise col-span-2 max-w-[420px] text-[1.25rem] leading-[1.2] [--load-delay:1100ms] [--load-dur:900ms] [--load-y:3rem] sm:text-[1.5rem] lg:col-span-6 lg:col-start-6">
                {/* Welcome to Dhimaz&apos;s online portfolio. An experienced full-stack web developer. */}
                I build scalable and maintainable web applications across frontend, backend, databases, and deployment.
              </p>
            </div>
          </div>

          <div className="-order-1 flex w-full flex-col items-start gap-y-2 sm:order-none sm:gap-y-8">
            <div className="load-grow h-px w-full bg-line" />
            <FitText
              as="h1"
              id="hero-heading"
              text="Dhimaz"
              tracking={-0.03}
              className="load-rise [--load-y:8rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
