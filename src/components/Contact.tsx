import SectionHeader from "./SectionHeader";
import ArrowIcon from "./ArrowIcon";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mt-24 lg:mt-32">
      <SectionHeader index="04" label="Get in touch" />

      <div className="page-container grid grid-cols-12 gap-x-8 gap-y-12 pt-6 lg:pt-10">
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 text-sm" data-aos="fade-up" data-aos-delay="100">
          <h2 id="contact-heading" className="text-display uppercase">
            Let&apos;s Build Something
          </h2>
          <p className="max-w-lg leading-relaxed text-soft">
            I&apos;m open to software engineering opportunities, interesting projects, and collaborations. If
            you&apos;d like to work together or simply want to talk about software, feel free to reach out.
          </p>
        </div>

        <div
          className="col-span-12 lg:col-span-6 flex flex-wrap gap-x-16 gap-y-10 text-sm"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col">
            <h3 className="text-label uppercase text-muted">Contact</h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://wa.me/6285733841588"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-xs text-muted hover:text-foreground transition-colors duration-200"
              >
                +62 857-3384-1588
              </a>
              <a
                href="mailto:dhimaznr777@gmail.com"
                className="max-w-xs text-muted hover:text-foreground transition-colors duration-200"
              >
                dhimaznr777@gmail.com
              </a>
            </div>

            <a
              href="/RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-label uppercase hover:underline underline-offset-4"
            >
              Read my resume
              <ArrowIcon direction="up-right" />
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="text-label uppercase text-muted">Socials</h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/dhimaznurramadhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-xs text-muted hover:text-foreground transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/dhimaznurramadhann/"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-xs text-muted hover:text-foreground transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
