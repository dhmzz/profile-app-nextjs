import { ReactNode } from "react";

type Ratio = "1/1" | "4/3" | "16/9" | "3/2" | "auto";

export default function ImageSlot({
  label = "Image Slot",
  ratio = "16/9",
  className,
  children,
}: {
  label?: string;
  ratio?: Ratio;
  className?: string;
  children?: ReactNode;
}) {
  const aspectClass =
    ratio === "1/1"
      ? "aspect-square"
      : ratio === "4/3"
      ? "aspect-[4/3]"
      : ratio === "3/2"
      ? "aspect-[3/2]"
      : ratio === "auto"
      ? ""
      : "aspect-[16/9]";

  return (
    <div
      className={[
        "w-full overflow-hidden rounded-sm",
        children ? "" : "bg-line",
        aspectClass,
        className || "",
      ].join(" ")}
    >
      {children ? (
        children
      ) : (
        <div className="h-full w-full grid place-items-center border border-dashed border-line-strong text-label uppercase text-muted">
          {label}
        </div>
      )}
    </div>
  );
}
