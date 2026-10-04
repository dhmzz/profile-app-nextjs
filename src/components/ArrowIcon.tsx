export default function ArrowIcon({
  direction = "right",
  className = "",
}: {
  direction?: "right" | "up-right";
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      className={[
        "size-4 shrink-0",
        direction === "up-right" ? "-rotate-45" : "",
        className,
      ].join(" ")}
    >
      <path
        d="M9.333 12.666 14 8 9.333 3.333M14 8H1.333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
