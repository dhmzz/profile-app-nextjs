export default function Header() {
  return (
    <header className="w-full py-4 lg:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8relative mt-6">
        <div className="h-px bg-black/10 dark:bg-white/10" />
      </div>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2 flex items-center justify-between" aria-label="Primary">
        <a href="#" className="text-sm tracking-wider font-medium">DHIMAZ ©</a>
        <ul className="flex items-center gap-6 text-xs uppercase tracking-widest">
          <li><a href="#projects" className="hover:underline underline-offset-4">Projects</a></li>
          <li><a href="#about" className="hover:underline underline-offset-4">About</a></li>
          <li><a href="#contact" className="hover:underline underline-offset-4">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
