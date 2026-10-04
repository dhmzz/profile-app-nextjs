import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="relative z-2 mt-8 mb-16 flex w-full flex-col px-6 sm:mb-32 md:px-8 lg:absolute lg:mt-12 lg:mb-0 lg:px-12">
      <div className="load-grow h-px bg-line" />
      <nav
        className="mt-2 flex flex-col items-start gap-y-8 sm:flex-row sm:items-center sm:justify-between"
        aria-label="Primary"
      >
        <a href="#" className="load-rise text-[0.6875rem] font-semibold hover:opacity-100">
          DHIMAZ ©
        </a>
        <ul className="load-rise flex w-full items-center justify-between gap-x-6 [--load-delay:1100ms] [--load-dur:900ms] sm:w-auto sm:justify-start">
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a href="#projects" className="block text-[0.6875rem]">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="block text-[0.6875rem]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="block text-[0.6875rem]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
