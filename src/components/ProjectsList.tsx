"use client";

import { useEffect, useState } from "react";
import ProjectItem, { Project } from "./ProjectItem";
import ImageSlot from "./ImageSlot";
import TechTags from "./TechTags";
import projectsData from "@/data/projects.json";

export default function ProjectsList() {
  const [active, setActive] = useState<Project | null>(null);
  const projects: Project[] = projectsData as unknown as Project[];

  // keep persistent preview wrapper to allow opacity transitions
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (active?.imagePath) {
      // reset then show on next frame to trigger transition
      setIsVisible(false);
      setPreviewSrc(active.imagePath);
      const id = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(id);
    }
    // on blur, fade out but keep last previewSrc so it can fade
    setIsVisible(false);
  }, [active?.imagePath]);

  return (<>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24" data-aos="fade-down">
        <div className="h-px bg-black/10 dark:bg-white/10" />
    </div>
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8">
        <div className="lg:col-span-6 flex flex-col gap-2 text-sm" data-aos="fade-right" data-aos-delay="100">
          {/* <p className="uppercase tracking-widest opacity-70">Hi there</p> */}
          <p className="max-w-xs opacity-90">I've been fortunate to work with a lot of awesome people on even more awesome projects.</p>
        </div>
        <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
          <h1 id="hero-heading" className="text-[48px] sm:text-[72px] lg:text-[82px] font-extrabold tracking-[-0.04em] leading-[0.9] uppercase">Recent Projects</h1>
        </div>
      </div>
    </section>

    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <h2 id="projects-heading" className="sr-only">Selected Works</h2>
          {projects.map((p, index) => (
            <div key={p.id} data-aos="fade-up" data-aos-delay={index * 50}>
              <ProjectItem project={p} onHover={setActive} />
            </div>
          ))}
        </div>

        {/* Preview panel - desktop only */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="sticky top-24" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <ImageSlot ratio="auto" label={active?.title ?? "Project Preview"} className="bg-transparent">
                <div className={`mask-radial-[100%_100%] mask-radial-from-20% mask-radial-at-top ... transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  {previewSrc ? (
                    <img src={previewSrc} alt={active?.title ?? 'Project Preview'} className="w-full h-auto" />
                  ) : (
                    <div className="text-sm opacity-60 py-8"> </div>
                  )}
                </div>
              </ImageSlot>
              {/* Tech tags for desktop preview */}
              {active?.tech && active.tech.length > 0 && (
                <div className="mt-4">
                  <TechTags tags={active.tech} />
                </div>
              )}
              {/* Description for desktop preview */}
              {active?.description && (
                <div className="mt-3" data-aos="fade-up" data-aos-delay="250">
                  <p className="text-sm leading-relaxed text-black/60 dark:text-white/60 max-w-prose">
                    {active.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
