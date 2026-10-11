import Hero from "@/components/Hero";
import ProjectsList from "@/components/ProjectsList";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { caseStudies, caseStudyPath } from "@/data/case-studies";

export default function Home() {
  const latest = caseStudies[0];

  return (
    <>
      <Hero caseStudy={latest && { title: latest.title, href: caseStudyPath(latest.slug) }} />
      <ProjectsList />
      <About />
      <Contact />
    </>
  );
}
