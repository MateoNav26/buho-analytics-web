import React from "react";
import Logo from "../ui/Logo";

// LinkedIn: recuadro igual que Instagram (radio y stroke)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <g transform="translate(0.5,0)">
      <path
        d="M7.75 8.5C8.44 8.5 9 7.94 9 7.25C9 6.56 8.44 6 7.75 6C7.06 6 6.5 6.56 6.5 7.25C6.5 7.94 7.06 8.5 7.75 8.5ZM8.75 10.5H6.75V16H8.75V10.5ZM11.25 10.5H13V11.25H13.03C13.3 10.75 13.96 10.22 14.94 10.22C16.98 10.22 17.35 11.56 17.35 13.3V16H15.35V13.3C15.35 12.61 15.34 11.72 14.35 11.72C13.35 11.72 13.2 12.49 13.2 13.25V16H11.2V10.5Z"
        fill="currentColor"
      />
    </g>
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
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

type FooterProps = object;

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-800 bg-black py-6">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        {/* Left: Logo and copyright */}
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-auto text-white-raw" />
          <span className="text-xs text-gray-500 font-dm-sans">
            © {currentYear} Búho Analytics. Todos los derechos reservados.
          </span>
        </div>
        {/* Center/Right: Links */}
        <nav className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white-raw transition-colors font-dm-sans"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white-raw transition-colors font-dm-sans"
          >
            Política de Privacidad
          </a>
        </nav>
        {/* Far right: Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/buho-analytics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="text-gray-400 hover:text-white-raw transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/buho.analytics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="text-gray-400 hover:text-white-raw transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
