import numbersData from "@/data/numbers.json";

export default function Numbers() {
  const items = numbersData;
  return (
    <section aria-labelledby="numbers-heading" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <h2 id="numbers-heading" className="text-xl font-semibold tracking-tight mb-6" data-aos="fade-up">Numbers</h2>
      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {items.map((n, index) => (
          <div key={n.label} data-aos="zoom-in" data-aos-delay={index * 100}>
            <dt className="text-xs uppercase tracking-widest opacity-70">{n.label}</dt>
            <dd className="text-3xl font-bold mt-1">{n.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
