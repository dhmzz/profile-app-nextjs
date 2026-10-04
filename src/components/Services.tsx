import servicesData from "@/data/services.json";

export default function Services({ className = "" }: { className?: string }) {
  const items = servicesData;
  return (
    <ul className={`flex w-full flex-col gap-y-6 ${className}`}>
      {items.map((s, index) => (
        <li
          key={s.id}
          className="flex w-full flex-col items-start gap-y-2 border-b border-line pb-6 sm:flex-row sm:gap-y-0"
        >
          <div className="label mt-[0.2rem] w-16">{String(index + 1).padStart(2, "0")}</div>
          <div className="flex flex-1 flex-col items-start gap-y-1">
            <p>{s.title}</p>
            {/* Looser leading only where the list is long enough to wrap */}
            <p className="label text-muted max-md:leading-[1.3]">{s.sub}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
