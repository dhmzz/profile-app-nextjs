"use client";

/**
 * A plain square in the text colour that flips between light and dark.
 * The choice lives in `data-theme` on <html> (see globals.css) and in
 * localStorage, which the inline script in layout.tsx reads on load.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the theme still changes for this visit.
    }
  };

  return (
    <span className="relative block">
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle color theme"
        className="peer block size-[0.6875rem] cursor-pointer bg-foreground transition-opacity duration-200 hover:opacity-60"
      />
      {/* Hint: its text and intro animation come from globals.css (.theme-hint) */}
      <span
        aria-hidden
        className="theme-hint label pointer-events-none absolute top-full left-0 mt-3 bg-foreground px-2 py-1.5 whitespace-nowrap text-background opacity-0 transition-opacity duration-200 peer-hover:opacity-100 peer-focus-visible:opacity-100"
      />
    </span>
  );
}
