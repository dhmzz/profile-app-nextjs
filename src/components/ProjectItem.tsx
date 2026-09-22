"use client";

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

export default function ProjectItem({
  project,
  onHover,
  onBlur,
}: {
  project: Project;
  onHover?: (p: Project | null) => void;
  onBlur?: () => void;
}) {
  return (
    <article
      className="group pb-6 lg:pb-8"
      aria-label={`${project.title} ${project.category}`}
      onMouseEnter={() => onHover?.(project)}
      onMouseLeave={() => {
        onHover?.(null);
        onBlur?.();
      }}
    >
      {/* Accessible heading kept out of the button so its content stays phrasing-only */}
      <h3 className="sr-only">{project.title}</h3>

      <button
        type="button"
        className="w-full text-left pt-6 pb-4 lg:pt-8 lg:pb-6"
        onFocus={() => onHover?.(project)}
        onBlur={() => {
          onHover?.(null);
          onBlur?.();
        }}
      >
        <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[6rem_1fr_auto] items-center gap-x-4">
          <span className="hidden sm:block text-sm text-muted tabular-nums">{project.year}</span>

          <span className="block">
            <span className="block sm:hidden text-xs text-muted tabular-nums mb-1">{project.year}</span>
            <span className="block text-2xl sm:text-3xl font-semibold tracking-tight">{project.title}</span>
            <span className="block text-label uppercase text-muted mt-2">{project.category}</span>
          </span>

          <span className="relative size-4 shrink-0 opacity-60">
            <ArrowIcon
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 group-has-[:focus-visible]:opacity-0"
            />
            <ArrowIcon
              direction="up-right"
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100"
            />
          </span>
        </div>
      </button>

      {/* Mobile thumbnail with natural aspect ratio */}
      <div className="mt-4 lg:hidden">
        {project.imagePath ? (
          <img
            src={project.imagePath}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto rounded-sm"
          />
        ) : (
          <div className="w-full h-40 bg-line rounded-sm" />
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
            <p className="text-sm leading-relaxed text-muted max-w-prose">
              {project.description}
            </p>
          </div>
        )}
      </div>

      {/* Baseline divider with animated overlay */}
      <div className="relative mt-6 lg:mt-0">
        <div className="h-px bg-line" />
        <div className="absolute left-0 top-0 h-px w-full bg-foreground origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 group-has-[:focus-visible]:scale-x-100" />
      </div>
    </article>
  );
}
