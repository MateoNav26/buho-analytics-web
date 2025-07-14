"use client";

import { useState } from "react";
import ContactModal from "../ui/ContactModal";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";

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
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white-raw leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ¿Tenés un desafío que merezca una respuesta inteligente?
          </motion.h2>

          <motion.p
            className="font-sans text-lg md:text-xl text-white-raw/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Nuestros mejores proyectos nacen de una buena conversación. Hablemos de tus objetivos, sin presiones ni compromiso.
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Button
              onClick={handleClick}
              size="lg"
              variant="primary"
              className="w-full sm:w-auto glow-cta"
            >
              Iniciar Conversación
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal (solo si no hay global) */}
      {!openContactModal && (
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      )}

      {/* Logo animado centrado sobre el footer */}
      <div className="mt-20 flex justify-center">
        <div className="relative">
          <Logo className="h-16 w-16 md:h-20 md:w-20 text-primary-accent" />
        </div>
      </div>
    </section>
  );
}
