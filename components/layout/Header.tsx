import { useState } from "react";

const navLinks = [
  { name: "Servicios", href: "#servicios" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Nosotros", href: "#nosotros" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
          <span className="sr-only">Búho Analytics</span>
          {/* Búho Analytics SVG Logo */}
          <svg
            className="h-8 w-auto"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="20" fill="#111827" />
            <ellipse cx="13.5" cy="18" rx="5" ry="7" fill="#fff" />
            <ellipse cx="26.5" cy="18" rx="5" ry="7" fill="#fff" />
            <circle cx="13.5" cy="18" r="2.2" fill="#0ea5e9" />
            <circle cx="26.5" cy="18" r="2.2" fill="#0ea5e9" />
            <ellipse cx="20" cy="28" rx="7" ry="3" fill="#fff" />
            <path d="M10 13 Q13 10 20 13 Q27 10 30 13" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="ml-2 text-lg font-bold text-neutral-900 dark:text-white tracking-tight hidden sm:inline">
            Búho Analytics
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-neutral-700 dark:text-neutral-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button & Hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden md:inline-block rounded-lg bg-black px-5 py-2.5 text-base font-semibold text-primary-500 dark:text-primary-400 shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Contáctanos
          </a>
          {/* Hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
          <ul className="flex flex-col gap-2 px-4 py-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block w-full py-2 px-2 rounded-md text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="block w-full mt-2 rounded-lg bg-black px-5 py-2.5 text-base font-semibold text-primary-500 dark:text-primary-400 shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => setMenuOpen(false)}
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}