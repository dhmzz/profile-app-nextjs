export default function Footer() {
  return (
    <footer className="page-container mt-16 lg:mt-24">
      <div className="border-t border-line py-10 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm" data-aos="fade-up">
          <p className="text-muted">© {new Date().getFullYear()} Dhimaz</p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-label uppercase">
              <li>
                <a className="hover:underline underline-offset-4" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:underline underline-offset-4" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:underline underline-offset-4" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
