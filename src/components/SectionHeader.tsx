import { ReactNode } from "react";

export default function SectionHeader({
  index,
  label,
  aside,
}: {
  index: string;
  label: string;
  aside?: ReactNode;
}) {
  return (
    <div className="page-container">
      <div className="h-px bg-line" data-aos="fade-down" />
      <div
        className="mt-2 flex items-start justify-between gap-6 text-label uppercase"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div>
          {index}
          <br />
          <span className="text-muted">{label}</span>
        </div>
        {aside ? <div className="text-right">{aside}</div> : null}
      </div>
    </div>
  );
}
