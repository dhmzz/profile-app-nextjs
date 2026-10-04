import SectionHeader from "./SectionHeader";

export default function Hero() {
  return (
    <>
      <section className="mt-12" aria-labelledby="hero-heading">
        <SectionHeader
          index="01"
          label="Hi, I'm Dhimaz."
          aside={
            <>
              Full-Stack Developer
              <br />
              <span className="text-muted">2023 – Present</span>
            </>
          }
        />

        <div className="page-container pt-6 lg:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:items-end">
            <div className="lg:col-span-4 flex flex-col gap-2 text-sm" data-aos="fade-right" data-aos-delay="200">
              <p className="max-w-xs text-soft">
                {/* Welcome to Dhimaz&apos;s online portfolio. An experienced full-stack web developer. */}
                I build scalable and maintainable web applications across frontend, backend, databases, and deployment.
              </p>
            </div>

            <div className="lg:col-span-1" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="/images/PHOTO.jpg"
                alt="Portrait of Dhimaz"
                width={60}
                height={60}
                className="size-15 rounded-full object-cover grayscale"
              />
            </div>

            <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
              <h1 id="hero-heading" className="text-display-xl uppercase">
                Dhimaz
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
