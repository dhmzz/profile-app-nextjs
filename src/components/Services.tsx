import servicesData from "@/data/services.json";
import ArrowIcon from "./ArrowIcon";

export default function Services() {
  const items = servicesData;
  return (
    <section aria-labelledby="services-heading" className="page-container mt-16 lg:mt-24">
      <h2 id="services-heading" className="text-2xl font-semibold tracking-tight mb-8" data-aos="fade-up">
        Skills
      </h2>
      <ul className="divide-y divide-line border-b border-line">
        {items.map((s, index) => (
          <li key={s.id} className="py-4 lg:py-6" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-lg font-medium">{s.title}</p>
                <p className="text-label uppercase text-muted mt-1">{s.sub}</p>
              </div>
              <ArrowIcon className="text-muted" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
