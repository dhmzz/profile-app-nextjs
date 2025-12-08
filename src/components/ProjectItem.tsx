"use client";

import { useState } from "react";
import TechTags from "./TechTags";

export type Project = {
  id: string;
  year: number;
  title: string;
  category: string;
  imagePath?: string;
  tech?: string[];
  description?: string;
};

export default function ProjectItem({
  project,
  onHover,
  onBlur,
}: {
  project: Project;
  onHover?: (p: Project | null) => void;
  onBlur?: () => void;
}) {
  const [_hovered, setHovered] = useState(false);

  return (
    <article className="group" aria-label={`${project.title} ${project.category}`}>
      <button
        type="button"
        className="w-full text-left py-6 lg:py-8 focus:outline-none"
        onMouseEnter={() => {
          setHovered(true);
          onHover?.(project);
        }}
        onMouseLeave={() => {
          setHovered(false);
          onHover?.(null);
          onBlur?.();
        }}
        onFocus={() => {
          setHovered(true);
          onHover?.(project);
        }}
        onBlur={() => {
          setHovered(false);
          onHover?.(null);
          onBlur?.();
        }}
      >
        <div className="grid grid-cols-12 items-center gap-x-4">
          <div className="col-span-3 sm:col-span-2 lg:col-span-2 text-xs sm:text-sm opacity-70 tabular-nums">
            {project.year}
          </div>
          <div className="col-span-8 sm:col-span-9 lg:col-span-9">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              <span>{project.title}</span>
            </h3>
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-70 mt-2">
              {project.category}
            </p>
          </div>
          <div className="col-span-1 justify-self-end opacity-60 relative w-4 h-4">
            <span aria-hidden className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">→</span>
            <span aria-hidden className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">↗</span>
          </div>
        </div>

        {/* Mobile thumbnail with natural aspect ratio */}
        <div className="mt-4 lg:hidden">
          {project.imagePath ? (
            <img src={project.imagePath} alt={project.title} className="w-full h-auto" />
          ) : (
            <div className="w-full h-40 bg-black/10 dark:bg-white/10" />
          )}
          {/* Tech tags for mobile */}
          {project.tech && project.tech.length > 0 && (
            <div className="mt-4">
              <TechTags tags={project.tech} />
            </div>
          )}
          {/* Description for mobile */}
          {project.description && (
            <div className="mt-3" data-aos="fade-up" data-aos-delay="250">
              <p className="text-sm leading-relaxed text-black/60 dark:text-white/60 max-w-prose">
                {project.description}
              </p>
            </div>
          )}
        </div>

        {/* Baseline divider with animated white overlay */}
        <div className="relative mt-6">
          <div className="h-px bg-black/10 dark:bg-white/10" />
          <div className="absolute left-0 top-0 h-px w-full bg-white origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100" />
        </div>
      </button>
    </article>
  );
}
