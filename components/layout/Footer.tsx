import React from 'react';
import Logo from '../ui/Logo';

// LinkedIn: recuadro igual que Instagram (radio y stroke)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <title>LinkedIn</title>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8.5 10.5h2v6h-2v-6zm1-2c.69 0 1.25-.56 1.25-1.25S10.19 6 9.5 6 8.25 6.56 8.25 7.25 8.81 8.5 9.5 8.5zm3 2h1.9v.9h.03c.27-.5.93-1.03 1.91-1.03 2.04 0 2.41 1.34 2.41 3.08v3.05h-2v-2.7c0-.69-.01-1.58-1-1.58-1 0-1.15.77-1.15 1.53v2.75h-2v-5z" fill="currentColor" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    width={24}
    height={24}
    aria-hidden="true"
  >
    <title>Instagram</title>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-800 bg-black py-6">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        {/* Left: Logo and copyright */}
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-auto text-white-raw" />
          <span className="text-xs text-gray-500 font-dm-sans">© {currentYear} Búho Analytics. Todos los derechos reservados.</span>
        </div>
        {/* Center/Right: Links */}
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm text-gray-400 hover:text-white-raw transition-colors font-dm-sans">Blog</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white-raw transition-colors font-dm-sans">Política de Privacidad</a>
        </nav>
        {/* Far right: Social icons */}
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/company/buho-analytics" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="text-gray-400 hover:text-white-raw transition-colors" />
          </a>
          <a href="https://www.instagram.com/buho.analytics" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon className="text-gray-400 hover:text-white-raw transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;