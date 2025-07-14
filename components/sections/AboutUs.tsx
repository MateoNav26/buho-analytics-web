import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Title */}
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-accent mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Una fusión inevitable.
          </motion.h2>

          {/* Content */}
          <div className="space-y-12 text-center">
            {/* Paragraph 1 - The Origin */}
            <motion.p
              className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              Búho Analytics nació de una insatisfacción: ver cómo las decisiones más importantes se tomaban a ciegas, atrapadas entre la intuición sin datos y los datos sin contexto.
            </motion.p>
            <motion.div
              className="w-16 h-px bg-white-raw/20 mx-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              style={{ originX: 0.5 }}
            />
            {/* Paragraph 2 - The Duality */}
            <motion.p
              className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Somos un colectivo de estrategas y científicos de datos. Un equipo que une dos mundos: la perspectiva sociológica que entiende las complejidades humanas y el rigor de la ingeniería que descifra los patrones ocultos.
            </motion.p>
            <motion.div
              className="w-16 h-px bg-white-raw/20 mx-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              style={{ originX: 0.5 }}
            />
            {/* Paragraph 3 - The Mission */}
            <motion.p
              className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              No somos solo una consultora. Somos un puente. Existimos para traducir la complejidad en claridad, para asegurar que cada decisión estratégica esté fundamentada en evidencia precisa y, sobre todo, en una profunda conciencia de su impacto humano.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
