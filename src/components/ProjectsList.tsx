import { Project } from "./ProjectItem";
import ProjectItems from "./ProjectItems";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import projectsData from "@/data/projects.json";

export default function ProjectsList() {
  const projects: Project[] = projectsData as unknown as Project[];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-0 bg-background py-20 sm:py-32"
    >
      <div className="page-container">
        <SectionHeader
          className="mb-20"
          items={[
            "02",
            "Projects",
            <span key="aside" className="text-muted">
              Selected Work
            </span>,
          ]}
        />

        <div className="grid-12">
          <Reveal
            as="h2"
            id="projects-heading"
            className="heading-huge col-span-full flex flex-col items-start gap-y-1 overflow-hidden sm:gap-y-0 lg:col-span-7 lg:col-start-6 lg:row-start-1"
          >
            <span className="block overflow-hidden">
              <span className="reveal-line">Selected </span>
            </span>
            <span className="block overflow-hidden">
              <span className="reveal-line [--reveal-delay:150ms] [--reveal-dur:850ms]">Projects</span>
            </span>
          </Reveal>
          <p className="col-span-full max-w-[520px] text-[1.25rem] leading-[1.2] sm:text-[1.5rem] lg:col-span-4 lg:col-start-2 lg:row-start-1 lg:max-w-[250px] lg:self-end lg:justify-self-start lg:text-[1.125rem]">
            A selection of applications and systems I&apos;ve worked on across enterprise and business environments.
          </p>
        </div>

        {/* Positioning context for each project's floating preview */}
        <div className="relative mt-16 flex w-full items-center">
          <div className="flex w-full flex-col gap-y-16 lg:w-[41%] lg:gap-y-0">
            <ProjectItems projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
