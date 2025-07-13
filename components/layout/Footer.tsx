import React from 'react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
        {/* Main CTA Section */}
        <div className="text-center">
          <h2 className="font-dm-sans text-3xl font-normal text-white-raw sm:text-5xl">
            ¿Listo para Dejar de Adivinar?
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-gray-400 font-dm-sans font-normal">
            Convirtamos tus datos en tu mayor ventaja competitiva. El primer paso es una conversación.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-primary-accent bg-black px-12 py-3 text-sm font-medium text-primary-accent hover:bg-primary-accent hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2 focus:ring-offset-black"
          >
            Solicitar Propuesta
          </a>
        </div>

        {/* Navigation and Legal Section */}
        <div className="mt-16 border-t border-neutral-800 pt-8 lg:mt-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
              <Logo className="h-8 w-auto text-white-raw" />
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-right">
              <div>
                <h3 className="font-dm-sans font-medium text-white-raw mb-4">Servicios</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Análisis de Datos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Business Intelligence
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Consultoría Estratégica
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-dm-sans font-medium text-white-raw mb-4">Metodología</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Proceso de Trabajo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Herramientas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Casos de Éxito
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-dm-sans font-medium text-white-raw mb-4">Nosotros</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Equipo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Valores
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white-raw transition-colors duration-200 text-sm">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
            <p className="text-gray-600 text-xs font-dm-sans">
              © {currentYear} Búho Analytics. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;