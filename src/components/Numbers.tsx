import numbersData from "@/data/numbers.json";

export default function Numbers() {
  const items = numbersData;
  return (
    <section aria-labelledby="numbers-heading" className="page-container mt-16 lg:mt-24">
      <h2 id="numbers-heading" className="text-2xl font-semibold tracking-tight mb-8" data-aos="fade-up">
        Numbers
      </h2>
      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {items.map((n, index) => (
          <div key={n.label} data-aos="zoom-in" data-aos-delay={index * 100}>
            <dt className="text-label uppercase text-muted">{n.label}</dt>
            <dd className="text-3xl font-semibold mt-1">{n.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
