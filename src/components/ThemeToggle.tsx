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
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="block size-[0.6875rem] cursor-pointer bg-foreground transition-opacity duration-200 hover:opacity-60"
    />
  );
}
