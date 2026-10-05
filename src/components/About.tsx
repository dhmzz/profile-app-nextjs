import Numbers from "./Numbers";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Services from "./Services";

const approach = [
  {
    title: "Strategic Approach",
    text: "I start by understanding the problem, business requirements, and existing system before deciding how to approach a solution.",
  },
  {
    title: "Collaboration is Key",
    text: "Good software is built through collaboration. I work closely with developers, stakeholders, and users to turn requirements into practical solutions.",
  },
  {
    title: "End to End Delivery",
    text: "I enjoy working across the development lifecycle, from database design and backend APIs to frontend implementation, deployment, and maintenance.",
  },
];

export default function About() {
  return (
    // Sits above the contact block, which slides out from underneath it
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-1 overflow-hidden bg-background py-20 sm:py-32"
    >
      <div className="page-container">
        <SectionHeader
          className="mb-20"
          items={[
            "Get to know me",
            "About",
            <span key="aside" className="text-muted">
              How I work
            </span>,
          ]}
        />

        <div className="grid-12 gap-y-8 lg:gap-y-30">
          <img
            src="/images/PHOTO.jpg"
            alt="Portrait of Dhimaz Nur Ramadhan"
            width={96}
            height={96}
            loading="lazy"
            className="size-6 rounded-full object-cover grayscale sm:size-24 lg:col-start-3 lg:row-start-1 lg:mx-2 lg:-mt-[2vw] lg:size-[4vw] lg:self-end"
          />
          <Reveal
            as="h2"
            id="about-heading"
            offset={20}
            className="heading-large col-span-full flex flex-col items-start gap-y-1 overflow-hidden sm:gap-y-0 lg:col-span-8 lg:col-start-5 lg:row-start-1"
          >
            <span className="block overflow-hidden">
              <span className="reveal-line">I&apos;m a Full-Stack </span>
            </span>
            <span className="block overflow-hidden">
              <span className="reveal-line [--reveal-delay:150ms] [--reveal-dur:850ms]">Software </span>
            </span>
            <span className="block overflow-hidden">
              <span className="reveal-line [--reveal-delay:300ms] [--reveal-dur:700ms]">Engineer</span>
            </span>
          </Reveal>
          <div className="label col-span-full lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:self-end lg:justify-self-start">
            03
          </div>

          <div className="col-span-full my-20 flex flex-col gap-y-24 lg:col-span-6 lg:col-start-5 lg:row-start-2 lg:my-0">
            {approach.map((item, index) => (
              <div key={item.title} className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                <div className="label">{String(index + 1).padStart(2, "0")}</div>
                <div className="flex flex-col gap-y-4 sm:col-span-5">
                  <h3 className="heading-3">{item.title}</h3>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="heading-3 col-span-full lg:col-span-4 lg:col-start-2 lg:row-start-3">Skills</h3>
          <Services className="col-span-full mb-20 lg:col-span-6 lg:col-start-6 lg:row-start-3 lg:mb-0" />

          <h3 className="heading-3 col-span-full lg:col-span-4 lg:col-start-2 lg:row-start-4">Numbers</h3>
          <Numbers className="col-span-full lg:col-span-6 lg:col-start-6 lg:row-start-4" />
        </div>
      </div>
    </section>
  );
}
