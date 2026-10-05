export default function Footer() {
  return (
    <footer className="mt-34 flex flex-col gap-y-2">
      <div className="h-px bg-line" />
      <div className="grid-12">
        <nav
          aria-label="Footer"
          className="col-span-2 justify-self-start lg:col-span-5 lg:col-start-6 lg:row-start-1"
        >
          <ul className="mt-8 mb-16 flex flex-col flex-wrap items-start gap-4 sm:my-0 sm:flex-row">
            <li>
              <a href="#projects" className="block">Projects</a>
            </li>
            <li>
              <a href="#about" className="block">About</a>
            </li>
            <li>
              <a href="#contact" className="block">Contact</a>
            </li>
          </ul>
        </nav>
        <p className="label col-span-2 self-end justify-self-start text-muted md:col-span-1 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-auto">
          © {new Date().getFullYear()} Dhimaz Nur Ramadhan — Full-Stack Developer
        </p>
      </div>
    </footer>
  );
}
