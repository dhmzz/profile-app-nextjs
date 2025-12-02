export default function Services() {
  const items = [
    { id: 1, title: "Research and strategy", sub: "Brand strategy, audits, prototyping" },
    { id: 2, title: "UX design", sub: "Wireframes, user flows, usability tests" },
    { id: 3, title: "UI Design", sub: "Web/mobile product design" },
    { id: 4, title: "Webflow development", sub: "No-code web development" },
  ];
  return (
    <section aria-labelledby="services-heading" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <h2 id="services-heading" className="text-xl font-semibold tracking-tight mb-6" data-aos="fade-up">Services</h2>
      <ul className="divide-y divide-black/10 dark:divide-white/10">
        {items.map((s, index) => (
          <li key={s.id} className="py-4 lg:py-6" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-lg font-medium">{s.title}</p>
                <p className="text-xs uppercase tracking-widest opacity-70 mt-1">{s.sub}</p>
              </div>
              <span aria-hidden className="opacity-60">→</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
