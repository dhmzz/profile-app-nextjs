export default function Header() {
  return (
    <header className="page-container pt-10 pb-4 lg:pt-12 lg:pb-6">
      <div className="h-px bg-line" />
      <nav
        className="mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-2"
        aria-label="Primary"
      >
        <a href="#" className="text-sm tracking-wider font-medium">
          DHIMAZ ©
        </a>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-label uppercase sm:gap-x-6">
          <li>
            <a href="#projects" className="hover:underline underline-offset-4">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline underline-offset-4">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline underline-offset-4">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
