'use client';

import { useState } from 'react';
import ContactModal from '../ui/ContactModal';

interface CallToActionProps {
  openContactModal?: () => void;
}

export default function CallToAction({ openContactModal }: CallToActionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = () => {
    if (openContactModal) {
      openContactModal();
    } else {
      openModal();
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Ample whitespace and centered content */}
        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white-raw leading-tight">
            ¿Tenés un desafío que merezca una respuesta inteligente?
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-white-raw/80 max-w-2xl mx-auto leading-relaxed">
            Nuestros mejores proyectos nacen de una buena conversación. Hablemos de tus objetivos, sin presiones ni compromiso.
          </p>
          
          <div className="pt-4">
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-primary-accent font-dm-sans font-semibold text-lg rounded-lg shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Iniciar la Conversación
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal (solo si no hay global) */}
      {!openContactModal && (
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </section>
  );
} 