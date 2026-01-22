
export default function Contact() {
  return (<>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24" data-aos="fade-down">
      <div className="h-px bg-black/10 dark:bg-white/10" />
    </div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2 flex items-center justify-between" data-aos="fade-down" data-aos-delay="100">
        <div className="tracking-widest text-[12px] sm:text-[12px]">04<br/><span className="opacity-70">GET IN TOUCH</span></div>
        <div className="tracking-widest text-[12px]"></div>
    </div>

    <section className="mb-11 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10 grid grid-cols-12 gap-4 lg:gap-4 xl:gap-4" aria-labelledby="contact-heading">
        <div className="lg:mt-5 xl:mt-5 col-span-12 lg:col-span-6 xl:col-span-6 flex flex-col gap-4 text-sm" data-aos="fade-up" data-aos-delay="100">
            <h1 id="contact-heading" className="text-[48px] sm:text-[72px] lg:text-[82px] font-extrabold tracking-[-0.04em] leading-[0.9] uppercase">Let's Connect</h1>
            <p className="max-w-lg opacity-90">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me via email or through my social media channels.</p>
        </div>
        <div className="mt-12 lg:mt-5 xl:mt-5 col-span-12 lg:col-span-6 xl:col-span-6 flex flex-row gap-16 text-sm" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col">
                <span className="max-w-xs opacity-90 ">Direct</span>
                <a 
                    href="https://wa.me/6285733841588" target="_blank" 
                    className="max-w-xs mt-5 opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                    +62 857-3384-1588
                </a>
                <a 
                    href="mailto:dhimaznr777@gmail.com" target="_blank" 
                    className="max-w-xs mt-1 opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                    dhimaznr777@gmail.com
                </a>

                <a 
                    href="/RESUME.pdf" target="_blank" 
                    className="max-w-xs mt-12 hover:opacity-60 transition-opacity duration-200"
                >
                    READ MY RESUME
                </a>
            </div>
             <div className="flex flex-col">
                <span className="max-w-xs opacity-90 ">Socials</span>
                <a 
                    href="https://www.linkedin.com/in/dhimaznurramadhan/" target="_blank" 
                    className="max-w-xs mt-5 opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                    LINKEDIN
                </a>
                <a 
                    href="https://www.instagram.com/dhimaznurramadhann/" target="_blank" 
                    className="max-w-xs mt-1 opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                    INSTAGRAM
                </a>
            </div>
        </div>
    </section>
    </>);
}