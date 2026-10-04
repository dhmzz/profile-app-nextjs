import numbersData from "@/data/numbers.json";
import Reveal from "./Reveal";

export default function Numbers({ className = "" }: { className?: string }) {
  const items = numbersData;
  return (
    <div className={`grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2 md:gap-y-10 ${className}`}>
      {items.map((n) => (
        <Reveal key={n.label} className="flex size-full flex-col items-start justify-between gap-y-1">
          <div className="h-px w-full bg-line" />
          <div className="mt-6 overflow-hidden">
            <div className="number-large reveal-line">{n.value}</div>
          </div>
          <div className="overflow-hidden">
            <div className="label reveal-line text-muted [--reveal-delay:300ms] [--reveal-dur:900ms]">{n.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
