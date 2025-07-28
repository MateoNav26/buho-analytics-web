import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";

export default function PartnershipPhilosophy() {
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
            No buscamos clientes. Forjamos alianzas
          </motion.h2>

          {/* Content */}
          <div className="space-y-12">
            {/* Paragraph 1 */}
            <motion.p
              className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              No somos proveedores; somos socios. Nos integramos en tu equipo, hacemos de tu misión la nuestra y nos obsesionamos con tus resultados. Nuestro éxito está intrínsecamente ligado al tuyo.
            </motion.p>
            <motion.div
              className="w-16 h-px bg-white-raw/20 mx-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              style={{ originX: 0.5 }}
            />
            {/* Paragraph 2 */}
            <motion.p
              className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              La confianza se construye con transparencia radical. Abrimos nuestra 'caja negra'. Entenderás nuestra metodología, nuestras herramientas y el porqué de cada recomendación, permitiéndote tomar decisiones con seguridad absoluta.
            </motion.p>
            <motion.div
              className="w-16 h-px bg-white-raw/20 mx-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              style={{ originX: 0.5 }}
            />
            {/* Paragraph 3 */}
            <motion.p
              className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Buscamos relaciones a largo plazo. Nuestro objetivo no es entregar un informe y desaparecer. Buscamos ser el socio estratégico de inteligencia que te acompañe en los desafíos de hoy y en las oportunidades de mañana.
            </motion.p>
          </div>

          {/* Logo with subtle animation */}
        </div>
      </div>
    </section>
  );
}
