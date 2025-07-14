"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    desafio: "",
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Cerrar con Escape y manejar foco
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Trap focus
      if (e.key === "Tab" && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    // Foco inicial en el botón de cerrar
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // For now, just close the modal
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Fondo desenfocado y degradado */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Contenido del modal con animación */}
          <motion.div
            className="relative w-full min-h-screen flex items-center justify-center p-4"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              ref={modalRef}
              className="bg-black/95 border border-primary-accent/40 shadow-brand max-w-lg w-full max-h-[90vh] overflow-y-auto p-10 sm:p-8 relative outline-none rounded-2xl overflow-hidden scrollbar-hide"
              style={{ boxShadow: "0 8px 32px 0 rgba(207,255,0,0.10)", scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar destacado */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-full p-1"
                aria-label="Cerrar"
              >
                <svg
                  className="w-5 h-5"
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

              {/* Header destacado */}
              <div className="text-center mb-8">
                <h3
                  id="contact-modal-title"
                  className="font-serif text-3xl text-primary-accent mb-2 drop-shadow-lg"
                >
                  Iniciemos la Conversación
                </h3>
                <p className="font-sans text-white-raw/70 text-base">
                  Contanos sobre tu proyecto
                </p>
              </div>

              {/* Separador visual */}
              <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-accent/80 via-white-raw/30 to-primary-accent/80 opacity-80" />

              {/* Formulario elegante */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-white-raw text-base font-medium mb-3"
                  >
                    Nombre *
                  </label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    inputSize="lg"
                    variant="primary"
                    className="focus:ring-2 focus:ring-primary-accent/80 focus:border-primary-accent/80 shadow-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white-raw text-base font-medium mb-3"
                  >
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    inputSize="lg"
                    variant="primary"
                    className="focus:ring-2 focus:ring-primary-accent/80 focus:border-primary-accent/80 shadow-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="desafio"
                    className="block text-white-raw text-base font-medium mb-3"
                  >
                    Tu Desafío *
                  </label>
                  <Textarea
                    id="desafio"
                    name="desafio"
                    required
                    rows={6}
                    value={formData.desafio}
                    onChange={handleChange}
                    placeholder="Contanos sobre tu desafío..."
                    textareaSize="lg"
                    variant="primary"
                    className="focus:ring-2 focus:ring-primary-accent/80 focus:border-primary-accent/80 shadow-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-cta shadow-brand text-black bg-primary-accent hover:bg-primary-400 focus:ring-2 focus:ring-primary-accent/80 focus:ring-offset-2 focus:ring-offset-black/80"
                  variant="secondary"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
