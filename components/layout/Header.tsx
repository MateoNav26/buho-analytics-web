import { useState } from "react";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { name: "Servicios", href: "#servicios" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Nosotros", href: "#nosotros" },
];

export default function Header({ onOpenContact }: { onOpenContact?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" aria-label="Búho Analytics - Página de Inicio" className="flex items-center gap-2">
            <Logo className="h-8 w-auto text-neutral-900 dark:text-white" />
            <span className="ml-2 text-lg font-bold text-neutral-900 dark:text-white tracking-tight font-dm-sans hidden sm:inline whitespace-nowrap">
              Búho Analytics
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-dm-sans text-base font-medium">
          {NAV_LINKS.map((link) => (
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

        {/* CTA Button & Hamburger */}
        <div className="flex items-center gap-2">
          {/* CTA Button (Desktop only) */}
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden md:inline-block rounded-lg bg-black px-5 py-2.5 text-base font-semibold text-primary-accent shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 font-dm-sans"
          >
            Iniciar Conversación
          </button>
          {/* Hamburger (Mobile only) */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur flex flex-col items-center justify-center md:hidden transition-all">
          <button
            className="absolute top-4 right-4 p-2 rounded-md text-neutral-700 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            type="button"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col gap-8 text-2xl font-dm-sans font-semibold">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="mt-8 inline-block rounded-lg bg-black px-8 py-3 text-lg font-semibold text-primary-accent shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenContact && onOpenContact();
                }}
              >
                Iniciar Conversación
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}