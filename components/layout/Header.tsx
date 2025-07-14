import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Servicios", href: "#servicios" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Nosotros", href: "#nosotros" },
];

export default function Header({
  onOpenContact,
}: {
  onOpenContact?: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-neutral-900 bg-black/60 backdrop-blur-md backdrop-saturate-150 transition-all duration-300">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Búho Analytics - Página de Inicio"
            className="flex items-center gap-2"
          >
            <Logo className="h-8 w-auto text-neutral-900 dark:text-white" />
            <span className="ml-2 text-lg font-bold text-neutral-900 dark:text-white tracking-tight font-dm-sans hidden sm:inline whitespace-nowrap">
              Búho Analytics
            </span>
          </Link>
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
          <Button
            type="button"
            onClick={onOpenContact}
            className="hidden md:inline-block"
            size="md"
            variant="primary"
          >
            Iniciar Conversación
          </Button>
          {/* Hamburger (Mobile only) */}
          <Button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
            variant="ghost"
            size="sm"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur flex flex-col items-center justify-center md:hidden transition-all">
          <Button
            className="absolute top-4 right-4 p-2 rounded-md text-neutral-700 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            type="button"
            variant="ghost"
            size="sm"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
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
              <Button
                type="button"
                className="mt-8 inline-block"
                size="lg"
                variant="primary"
                onClick={() => {
                  setMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
              >
                Iniciar Conversación
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
