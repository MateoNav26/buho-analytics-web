import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-sans text-4xl md:text-6xl text-white-raw mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          En un mundo ahogado en datos, la claridad es el único lujo.
        </motion.h2>

        <motion.p
          className="font-sans text-lg md:text-xl text-white-raw/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Vivimos rodeados de información, pero muchas veces falta la capacidad para transformarla en decisiones claras y accionables.
          <br />
          <br />
          En Búho Analytics, convertimos el ruido en señal, la complejidad en simplicidad, y la incertidumbre en certeza. Acompañamos a quienes toman decisiones a dar sentido a sus datos y avanzar con propósito.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <Logo className="h-24 w-24 text-primary-accent" />
        </motion.div>
      </div>
    </section>
  );
}
