"use client";

import ArrowIcon from "./ArrowIcon";
import FitText from "./FitText";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import { useScrollProgress } from "./useScrollProgress";

export default function Contact() {
  // Slides out from under the About section as it scrolls into view
  const ref = useScrollProgress<HTMLElement>(true);

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
      className="footer-reveal relative w-full pb-6 sm:mt-32 sm:pb-12"
    >
      <div className="page-container">
        <SectionHeader items={["04", "Get in touch"]} />

        <FitText
          as="h2"
          id="contact-heading"
          text="Let's Build Something"
          tracking={-0.02}
          className="mt-8 mb-16"
        />

        <div className="flex w-full flex-col gap-y-2 sm:gap-y-4 md:gap-y-2">
          <div className="h-px bg-line" />
          <div className="grid-12 gap-y-4">
            <p className="col-span-2 max-w-[420px] md:col-span-1 lg:col-span-5">
              I&apos;m open to software engineering opportunities, interesting projects, and collaborations. If
              you&apos;d like to work together or simply want to talk about software, feel free to reach out.
            </p>

            <div className="col-span-2 sm:col-span-1 lg:col-span-3">
              <h3 className="label text-muted">Contact</h3>
              <div className="mt-4 mb-8 flex flex-col items-start gap-y-1 leading-[1.3] sm:mb-0">
                <a href="https://wa.me/6285733841588" target="_blank" rel="noopener noreferrer">
                  +62 857-3384-1588
                </a>
                <a href="mailto:dhimaznr777@gmail.com">dhimaznr777@gmail.com</a>
                <a
                  href="/RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  Read my resume
                  <ArrowIcon direction="up-right" />
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 lg:col-span-3">
              <h3 className="label text-muted">Socials</h3>
              <div className="mt-4 mb-8 flex flex-col items-start gap-y-1 leading-[1.3] sm:mb-0">
                <a href="https://www.linkedin.com/in/dhimaznurramadhan/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/dhimaznurramadhann/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
