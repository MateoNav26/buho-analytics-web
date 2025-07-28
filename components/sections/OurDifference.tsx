import { motion } from "framer-motion";

export default function OurDifference() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-accent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Donde la sociología se encuentra<br/>con la ingeniería de datos
          </motion.h2>
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1, y: 15 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            style={{ originX: 0.5 }}
          />
        </div>

        {/* Two-Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Visión Humana */}
          <div className="space-y-6">
            <motion.h3
              className="font-serif text-2xl md:text-3xl text-white-raw mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Visión Humana
            </motion.h3>
            <motion.p
              className="font-sans text-lg text-white-raw/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              Nuestro enfoque sociológico nos permite comprender las dinámicas sociales, comportamientos humanos y patrones culturales que subyacen en los datos. No solo analizamos números, sino que interpretamos las historias humanas que estos revelan, proporcionando contexto y significado a los insights que generamos.
            </motion.p>
            <div className="space-y-3">
              {[
                "Análisis cualitativo",
                "Contexto cultural",
                "Interpretación humana",
              ].map((text, i) => (
                <motion.div
                  key={text}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="font-sans text-white-raw/70">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Precisión Algorítmica */}
          <div className="space-y-6">
            <motion.h3
              className="font-serif text-2xl md:text-3xl text-white-raw mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Precisión Algorítmica
            </motion.h3>
            <motion.p
              className="font-sans text-lg text-white-raw/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              La ingeniería de datos nos proporciona las herramientas técnicas para procesar, analizar y visualizar grandes volúmenes de información con precisión matemática. Utilizamos algoritmos avanzados y tecnologías de vanguardia para extraer patrones ocultos y generar insights accionables de manera eficiente y escalable.
            </motion.p>
            <div className="space-y-3">
              {[
                "Machine Learning",
                "Big Data Processing",
                "Análisis predictivo",
              ].map((text, i) => (
                <motion.div
                  key={text}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                  <span className="font-sans text-white-raw/70">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
