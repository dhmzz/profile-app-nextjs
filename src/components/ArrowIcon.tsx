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
        d="M3.5 8h9m0 0-3.5-3.5M12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
