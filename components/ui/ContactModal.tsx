// ui/ContactModal.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/Button"; // Tu botón
import Input from "@/components/ui/Input";   // Tu Input
import Textarea from "@/components/ui/Textarea"; // Tu Textarea
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- TIPO PARA EL ESTADO DEL FORMULARIO ---
type FormStatus = "idle" | "loading" | "success" | "error";
type FormStatusMessage = {
  type: FormStatus;
  message: string;
} | null;

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    desafio: "",
  });
  
  // --- NUEVO ESTADO PARA EL ENVÍO ---
  const [status, setStatus] = useState<FormStatusMessage>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // --- LÓGICA DE CIERRE MEJORADA ---
  // Limpia el formulario y el estado al cerrar
  const handleClose = () => {
    setFormData({ nombre: "", email: "", desafio: "" });
    setStatus(null);
    setFormStatus("idle");
    onClose();
  };
  
  // Cerrar con Escape y manejar foco (Tu lógica original, movida para usar handleClose)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      // ... (tu lógica de trap de foco original)
    };
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]); // Dependencias originales

  // --- FUNCIÓN DE ENVÍO ACTUALIZADA ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setStatus({ type: "loading", message: "Enviando..." });

    try {
      const response = await fetch('/api/send', { // Llama a tu backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envía los datos del estado
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus("success");
        setStatus({ type: "success", message: "¡Mensaje enviado! Gracias." });
        // Opcional: cierra el modal después de 2 segundos de éxito
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        // Muestra el error específico del backend
        setFormStatus("error");
        setStatus({ type: "error", message: result.error || 'Algo salió mal.' });
      }
    } catch (error) {
      console.error('Error de red al enviar el formulario:', error);
      setFormStatus("error");
      setStatus({ type: "error", message: 'Error de conexión. Intenta de nuevo.' });
    }
  };

  // --- FUNCIÓN DE CAMBIO (Tu original) ---
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
          {/* Fondo (Tu original) */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
            onClick={handleClose} // Usa la nueva función de cierre
          />

          {/* Contenido del modal (Tu original) */}
          <motion.div
            className="relative w-full min-h-screen flex items-center justify-center p-4"
            // ... (tus props de motion)
          >
            <div
              ref={modalRef}
              className="bg-black/95 border border-primary-accent/40 shadow-brand max-w-lg w-full max-h-[90vh] overflow-y-auto p-10 sm:p-8 relative outline-none rounded-2xl overflow-hidden scrollbar-hide"
              // ... (tus props de estilo y ARIA)
            >
              {/* Botón de cerrar (Tu original) */}
              <button
                ref={closeButtonRef}
                onClick={handleClose} // Usa la nueva función de cierre
                className="absolute top-4 right-4 text-white/50 hover:text-white/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-full p-1"
                aria-label="Cerrar"
              >
                {/* ... (tu SVG) */}
              </button>

              {/* Header (Tu original) */}
              <div className="text-center mb-8">
                <h3
                  id="contact-modal-title"
                  className="font-serif text-3xl text-primary-accent mb-2 drop-shadow-lg"
                >
                  Iniciemos la conversación
                </h3>
                <p className="font-sans text-white-raw/70 text-base">
                  Hablemos sobre tu proyecto!
                </p>
              </div>

              {/* Separador (Tu original) */}
              <div className="w-16 h-0.5 mx-auto mb-8 rounded-full bg-gradient-to-r from-secondary-accent via-primary-accent to-secondary-accent" />
              
              {/* Formulario (ACTUALIZADO) */}
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
                    disabled={formStatus === 'loading'} // Deshabilita en carga
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
                    disabled={formStatus === 'loading'} // Deshabilita en carga
                  />
                </div>

                <div>
                  <label
                    htmlFor="desafio"
                    className="block text-white-raw text-base font-medium mb-3"
                  >
                    Tu Desafío
                  </label>
                  <Textarea
                    id="desafio"
                    name="desafio"
                    rows={3}
                    value={formData.desafio}
                    onChange={handleChange}
                    placeholder="Contanos sobre tu desafío..."
                    textareaSize="lg"
                    variant="primary"
                    className="focus:ring-2 focus:ring-primary-accent/80 focus:border-primary-accent/80 shadow-sm"
                    disabled={formStatus === 'loading'} // Deshabilita en carga
                  />
                </div>

                {/* --- NUEVO: MENSAJES DE ESTADO --- */}
                {status && (
                  <div
                    className={`text-center p-3 rounded-lg text-sm ${
                      status.type === 'error' ? 'bg-red-900/50 text-red-300' :
                      status.type === 'success' ? 'bg-green-900/50 text-green-300' :
                      'bg-gray-800/50 text-gray-300'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-cta shadow-brand text-black bg-primary-accent hover:bg-primary-400 focus:ring-2 focus:ring-primary-accent/80 focus:ring-offset-2 focus:ring-offset-black/80"
                  variant="secondary"
                  // --- Conecta tu prop 'loading' con nuestro estado ---
                  loading={formStatus === 'loading'} 
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}