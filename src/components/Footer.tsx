export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16 border-t border-black/10 dark:border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" data-aos="fade-up">
        <p className="opacity-70">© {new Date().getFullYear()} Dhimaz</p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-6 uppercase text-xs tracking-widest">
            <li><a className="hover:underline underline-offset-4" href="#projects">Projects</a></li>
            <li><a className="hover:underline underline-offset-4" href="#about">About</a></li>
            <li><a className="hover:underline underline-offset-4" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
