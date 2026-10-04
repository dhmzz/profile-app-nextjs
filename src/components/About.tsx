import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-24 lg:mt-32">
      <SectionHeader index="03" label="Get to know me" aside="How I work" />

      <div className="page-container pt-6 lg:pt-10">
        <h2 id="about-heading" className="text-2xl font-semibold tracking-tight mb-8" data-aos="fade-up">
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-label uppercase text-muted mb-3">Strategic Approach</h3>
            <p className="leading-relaxed text-soft">
              I start by understanding the problem, business requirements, and existing system before deciding how to
              approach a solution.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-label uppercase text-muted mb-3">Collaboration is Key</h3>
            <p className="leading-relaxed text-soft">
              Good software is built through collaboration. I work closely with developers, stakeholders, and users to
              turn requirements into practical solutions.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-label uppercase text-muted mb-3">End to End Delivery</h3>
            <p className="leading-relaxed text-soft">
              I enjoy working across the development lifecycle, from database design and backend APIs to frontend
              implementation, deployment, and maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
