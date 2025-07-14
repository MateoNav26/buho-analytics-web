import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="font-serif italic text-7xl md:text-9xl text-primary-accent mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          La intuición tuvo su momento.
        </motion.h1>
        <motion.p
          className="font-sans text-lg md:text-xl text-white-raw"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Ahora hablemos de certezas.
        </motion.p>
      </div>
    </section>
  );
}
