import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-serif text-4xl md:text-6xl text-primary-accent mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Dejá de decidir a ciegas
        </motion.h2>

        <motion.p
          className="font-sans text-lg md:text-xl text-white-raw/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          En un mundo ahogado en datos, la paradoja es evidente: nunca tuvimos tanta información y, a la vez, tanta incertidumbre.
          <br />
          <br />
          El problema no es la falta de datos, es la falta de traducción. La mayoría de las decisiones críticas todavía se basan en suposiciones.
          <br />
          <br />
          Existimos para cambiar eso.
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
