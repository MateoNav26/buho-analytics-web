import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="font-serif italic text-7xl md:text-9xl text-primary-accent mb-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tu intuición te trajo hasta aquí.
        </motion.h1>
        <motion.h2
          className="font-serif text-3xl md:text-5xl text-white-raw mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          Ahora, dale la certeza que tanto necesitás
        </motion.h2>
        <motion.p
          className="font-sans text-lg md:text-xl text-white-raw max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          En Búho Analytics no reemplazamos tu instinto, lo potenciamos. Convertimos la complejidad de tus datos en un plan de acción tan claro y preciso, que tu próximo movimiento será el más seguro que hayas hecho.
        </motion.p>
      </div>
    </section>
  );
}
