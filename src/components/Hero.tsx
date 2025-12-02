export default function Hero() {
  return (<>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12" data-aos="fade-down">
        <div className="h-px bg-black/10 dark:bg-white/10" />
    </div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2 flex items-center justify-between" data-aos="fade-down" data-aos-delay="100">
        <div className="tracking-widest text-[12px] sm:text-[12px]">01<br/><span className="opacity-70">HI THERE</span></div>
        <div className="tracking-widest text-[12px]">SELECTED WORK<br/><span className="opacity-70">2023 - 2025</span></div>
    </div>

    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8">
        <div className="lg:col-span-4 flex flex-col gap-2 text-sm" data-aos="fade-right" data-aos-delay="200">
          <p className="max-w-xs opacity-90 mt-11">Welcome to Dhimaz's online portfolio. An experienced full-stack web developer.</p>
        </div>

        <div className="lg:col-span-1 mt-11" data-aos="zoom-in" data-aos-delay="300">
          <img src="/images/PHOTO.jpg" width="60" className="rounded-full object-cover grayscale"/>
        </div>

        <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
          <h1 id="hero-heading" className="text-[48px] sm:text-[72px] lg:text-[144px] font-extrabold tracking-[-0.04em] leading-[0.9] uppercase">DHIMAZ</h1>
        </div>
      </div>
    </section>
    </>
  );
}
