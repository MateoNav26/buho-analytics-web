'use client';

import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    desafio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, just close the modal
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark semi-transparent backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Full-screen modal content */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="bg-black border border-white-raw/20 max-w-lg w-full p-8 relative">
          {/* Prominent Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white-raw/80 hover:text-white-raw transition-colors duration-300 group"
            aria-label="Cerrar"
          >
            <svg 
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* Modal Header */}
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl text-white-raw mb-4">
              Iniciemos la Conversación
            </h3>
            <p className="font-sans text-white-raw/60 text-base">
              Contanos sobre tu proyecto
            </p>
          </div>

          {/* Minimalist Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="nombre" className="block text-white-raw text-base font-medium mb-3">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border border-white-raw/20 text-white-raw placeholder-white-raw/40 focus:border-primary-accent focus:outline-none transition-all duration-300 text-lg"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white-raw text-base font-medium mb-3">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border border-white-raw/20 text-white-raw placeholder-white-raw/40 focus:border-primary-accent focus:outline-none transition-all duration-300 text-lg"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="desafio" className="block text-white-raw text-base font-medium mb-3">
                Tu Desafío *
              </label>
              <textarea
                id="desafio"
                name="desafio"
                required
                rows={6}
                value={formData.desafio}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border border-white-raw/20 text-white-raw placeholder-white-raw/40 focus:border-primary-accent focus:outline-none transition-all duration-300 resize-none text-lg"
                placeholder="Contanos sobre tu desafío..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-accent text-black font-sans font-semibold py-4 px-8 text-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 