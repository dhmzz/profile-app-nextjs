"use client";

import { useEffect, useRef } from "react";
import TechTags from "./TechTags";
import ArrowIcon from "./ArrowIcon";

export type Project = {
  id: string;
  year: number;
  title: string;
  category: string;
  imagePath?: string;
  tech?: string[];
  description?: string;
};

// Per-frame lerp factor for the preview trailing the cursor (reference smoothing: 98)
const FOLLOW = 0.02;

export default function ProjectItem({ project }: { project: Project }) {
  const previewRef = useRef<HTMLDivElement>(null);
  // Cursor position within the row as 0–1 fractions: current (x, y) easing towards target (tx, ty)
  const follow = useRef({ x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, frame: 0 });

  const tick = () => {
    const f = follow.current;
    const el = previewRef.current;
    f.frame = 0;
    if (!el) return;

    f.x += (f.tx - f.x) * FOLLOW;
    f.y += (f.ty - f.y) * FOLLOW;
    el.style.transform = `translate3d(${(f.x - 0.5) * 14}%, ${(f.y - 0.5) * 6}%, 0) rotate(${(f.x - 0.5) * 4}deg)`;

    if (Math.abs(f.tx - f.x) > 0.0005 || Math.abs(f.ty - f.y) > 0.0005) {
      f.frame = requestAnimationFrame(tick);
    }
  };

  const followTo = (tx: number, ty: number) => {
    const f = follow.current;
    f.tx = tx;
    f.ty = ty;
    if (!f.frame) f.frame = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const f = follow.current;
    return () => cancelAnimationFrame(f.frame);
  }, []);

  const hasDetails = Boolean(project.description || project.tech?.length);
  const details = (
    <>
      {project.tech && project.tech.length > 0 && <TechTags tags={project.tech} />}
      {project.description && (
        <p className="mt-3 max-w-prose text-[1rem] leading-[1.35] text-muted">{project.description}</p>
      )}
    </>
  );

  return (
    <article
      className="group flex w-full flex-col gap-y-6 sm:gap-y-8 lg:pt-8"
      aria-label={`${project.title} ${project.category}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        followTo((e.clientX - rect.left) / rect.width, (e.clientY - rect.top) / rect.height);
      }}
      onMouseLeave={() => followTo(0.5, 0.5)}
    >
      {/* Accessible heading kept out of the button so its content stays phrasing-only */}
      <h3 className="sr-only">{project.title}</h3>

      {/* Preview: a plain image above the row on small screens; from lg it floats beside the list and shows on hover */}
      <div
        ref={previewRef}
        className="w-full max-lg:transform-none! lg:pointer-events-none lg:absolute lg:inset-y-0 lg:right-[8.5%] lg:flex lg:w-[41%] lg:items-center lg:overflow-hidden"
      >
        <div className="w-full lg:opacity-0 lg:transition-opacity lg:duration-500 lg:ease-out-quart lg:group-hover:opacity-100 lg:group-has-[:focus-visible]:opacity-100">
          {project.imagePath ? (
            <img
              src={project.imagePath}
              alt={project.title}
              loading="lazy"
              className="h-auto w-full object-cover lg:transition-transform lg:duration-1000 lg:ease-out-quart lg:group-hover:scale-[1.075] lg:group-has-[:focus-visible]:scale-[1.075]"
            />
          ) : (
            <div className="h-40 w-full bg-line lg:hidden" />
          )}
          {hasDetails && <div className="mt-8 hidden lg:block">{details}</div>}
        </div>
      </div>

      <button type="button" className="flex w-full items-start justify-between text-left">
        <span className="flex flex-col gap-y-3 sm:flex-row sm:gap-y-0 lg:transition-transform lg:duration-1000 lg:ease-out-quad lg:group-hover:translate-x-6 lg:group-hover:ease-out-quart lg:group-has-[:focus-visible]:translate-x-6">
          <span className="label order-1 mt-[0.2rem] w-24 tabular-nums sm:order-none">{project.year}</span>
          <span className="flex flex-col items-start gap-y-1">
            <span className="text-[1.125rem] leading-[1.2]">{project.title}</span>
            <span className="label text-muted">{project.category}</span>
          </span>
        </span>

        <ArrowIcon className="lg:transition-transform lg:duration-500 lg:ease-out-quart lg:group-hover:-translate-x-2 lg:group-hover:-rotate-45 lg:group-has-[:focus-visible]:-translate-x-2 lg:group-has-[:focus-visible]:-rotate-45" />
      </button>

      {hasDetails && <div className="lg:hidden">{details}</div>}

      {/* Baseline divider with animated overlay */}
      <div className="relative overflow-hidden">
        <div className="h-px bg-line" />
        <div className="absolute inset-x-0 top-0 hidden h-px -translate-x-[101%] bg-foreground lg:block lg:transition-transform lg:duration-1500 lg:ease-out-quart lg:group-hover:translate-x-0 lg:group-has-[:focus-visible]:translate-x-0" />
      </div>
    </article>
  );
}
