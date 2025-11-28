import Hero from "@/components/Hero";
import ProjectsList from "@/components/ProjectsList";
import About from "@/components/About";
import Services from "@/components/Services";
import Numbers from "@/components/Numbers";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsList />
      <About />
      <Services />
      <Numbers />
    </>
  );
}
