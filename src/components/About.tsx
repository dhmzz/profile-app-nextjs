export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <h2 id="about-heading" className="text-xl font-semibold tracking-tight mb-8" data-aos="fade-up">About</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="uppercase text-sm tracking-widest opacity-70 mb-3">Strategic Approach</h3>
          <p className="opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="uppercase text-sm tracking-widest opacity-70 mb-3">Collaboration is Key</h3>
          <p className="opacity-80">Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="uppercase text-sm tracking-widest opacity-70 mb-3">End to End Delivery</h3>
          <p className="opacity-80">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
      </div>
    </section>
  );
}
