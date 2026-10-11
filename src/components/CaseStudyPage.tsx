import Link from "next/link";
import { Fragment, ReactNode } from "react";
import type { Block, CaseStudy, Figure } from "@/data/case-studies/types";
import ArrowIcon from "./ArrowIcon";
import Contact from "./Contact";
import FitText from "./FitText";
import FlowDiagram from "./FlowDiagram";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const pad = (n: number) => String(n).padStart(2, "0");

/** Renders the two inline marks the content uses: **bold** and `code`. */
function rich(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith("**")) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`")) {
      return (
        <code key={i} className="font-mono text-[0.85em] text-foreground">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function FigureBlock({ figure, className = "" }: { figure: Figure; className?: string }) {
  return (
    <figure className={`flex flex-col gap-y-3 ${className}`}>
      {/* The border keeps light screenshots from dissolving into the light theme */}
      <img
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        loading="lazy"
        className="h-auto w-full border border-line"
      />
      {figure.caption && <figcaption className="label text-muted">{figure.caption}</figcaption>}
    </figure>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  // "part" blocks are numbered in the order they appear
  let part = 0;

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <p key={i} className="text-muted">
                {rich(block.text)}
              </p>
            );

          case "list":
            return (
              <ul key={i} className="flex flex-col border-t border-line">
                {block.items.map((item) => (
                  <li key={item} className="border-b border-line py-4 text-muted">
                    {rich(item)}
                  </li>
                ))}
              </ul>
            );

          case "numbered":
            return (
              <div key={i} className="flex flex-col gap-y-16">
                {block.items.map((item, n) => (
                  <div key={item.title} className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                    <div className="label">{pad(n + 1)}</div>
                    <div className="flex flex-col gap-y-4 sm:col-span-5">
                      <h3 className="heading-3">{item.title}</h3>
                      <p className="text-muted">{rich(item.text)}</p>
                    </div>
                  </div>
                ))}
              </div>
            );

          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full text-left text-[1rem]">
                  <thead>
                    <tr>
                      {block.head.map((cell, c) => (
                        <th key={c} scope="col" className="label pr-4 pb-3 text-muted">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-t border-line">
                        {row.map((cell, c) => (
                          <td key={c} className={`py-4 pr-4 align-top ${c === 0 ? "" : "text-muted"}`}>
                            {rich(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "code":
            return (
              <pre key={i} className="overflow-x-auto border border-line p-4 font-mono text-[0.875rem] leading-[1.6]">
                {block.text}
              </pre>
            );

          case "part":
            part += 1;
            return (
              <div key={i} className="grid grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-6">
                <div className="label">{pad(part)}</div>
                <div className="flex flex-col gap-y-6 sm:col-span-5">
                  <h3 className="heading-3">{block.title}</h3>
                  <Blocks blocks={block.blocks} />
                </div>
              </div>
            );
        }
      })}
    </>
  );
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <>
      {/* Above the contact block, which slides out from underneath it */}
      <article className="relative z-1 bg-background">
        <header className="pb-20 sm:pb-32 lg:pt-32">
          <div className="page-container gap-y-16 lg:gap-y-24">
            <div className="flex w-full flex-col gap-y-14">
              <SectionHeader
                load
                stack
                items={[
                  <Link key="back" href="/" className="inline-flex items-center gap-x-2 text-[0.6875rem] leading-none">
                    <ArrowIcon className="rotate-180" />
                    Back
                  </Link>,
                  <Fragment key="type">
                    <span>Case study</span>
                    <span className="text-muted">{study.year}</span>
                  </Fragment>,
                  <Fragment key="kind">
                    <span>Dhimaz ©</span>
                    <span className="text-muted">{study.kind}</span>
                  </Fragment>,
                ]}
              />

              <div className="flex w-full flex-col gap-y-2 sm:gap-y-8">
                <div className="load-grow h-px w-full bg-line" />
                <FitText as="h1" text={study.title} tracking={-0.02} className="load-rise [--load-y:8rem]" />
              </div>
            </div>

            <div className="grid-12 gap-y-12 lg:gap-y-16">
              <div className="label col-span-full lg:col-span-2 lg:col-start-4 lg:row-start-1">Details</div>
              <div className="col-span-full flex flex-col gap-y-6 lg:col-span-6 lg:col-start-6 lg:row-start-1">
                <p className="text-[1.25rem] leading-[1.2] sm:text-[1.5rem]">{study.summary}</p>
                <p className="text-muted">{study.intro}</p>
              </div>

              <nav
                aria-label="Contents"
                className="col-span-full flex flex-col gap-y-4 lg:col-span-3 lg:col-start-2 lg:row-start-2"
              >
                <div className="label text-muted">Contents</div>
                <ol className="flex flex-col items-start gap-y-1 leading-[1.3]">
                  {study.sections.map((section, i) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        {pad(i + 1)} {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <dl className="col-span-full flex flex-col gap-y-6 border-t border-line pt-6 lg:col-span-6 lg:col-start-6 lg:row-start-2">
                {study.facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col-reverse gap-y-1 border-b border-line pb-6">
                    <dt className="label text-muted">{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {study.cover && <FigureBlock figure={study.cover} />}
          </div>
        </header>

        {study.sections.map((section, i) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="pb-20 sm:pb-32">
            <div className="page-container">
              <SectionHeader className="mb-12 lg:mb-20" items={[pad(i + 1), section.label]} />

              {section.flow && (
                <div className="mb-20 lg:mb-28">
                  <FlowDiagram flow={section.flow} />
                </div>
              )}

              <div className="grid-12 gap-y-10">
                {/* Stays in view on desktop while the section's content scrolls past */}
                <Reveal
                  as="h2"
                  id={`${section.id}-heading`}
                  className="col-span-full overflow-hidden font-display text-[2rem] leading-[0.9] font-semibold uppercase md:text-[3rem] lg:sticky lg:top-12 lg:col-span-4 lg:col-start-2"
                >
                  <span className="reveal-line">{section.title}</span>
                </Reveal>

                <div className="col-span-full flex flex-col gap-y-10 lg:col-span-6 lg:col-start-6">
                  <Blocks blocks={section.blocks} />
                </div>

                {section.figure && (
                  <FigureBlock figure={section.figure} className="col-span-full mt-6 lg:col-span-8 lg:col-start-5" />
                )}
              </div>
            </div>
          </section>
        ))}
      </article>

      <Contact />
    </>
  );
}
