import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 px-4 bg-black relative overflow-hidden">
      {/* Background Grid with Fade (matching Methodology style) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full absolute inset-0 opacity-[0.05]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ maskImage: 'radial-gradient(circle at 50% 50%, white 30%, transparent 80%)' }}
        >
          <defs>
            <pattern
              id="services-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(5,5)"
            >
              <path
                d="M 0 0 L 0 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.25"
                className="text-primary-accent"
              />
              <path
                d="M 0 0 L 12 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.25"
                className="text-primary-accent"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Nuestras Soluciones: Claridad y Acción para cada Desafío.
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white-raw mb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            No ofrecemos servicios, ofrecemos soluciones integrales. Cada una es un ecosistema de herramientas y perspectivas diseñado para un desafío específico.<br/><br/>
            Así es como lo hacemos:
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center px-10">
          {/* Card 1 */}
          <motion.div
            className="bg-neutral-900/40 shadow-lg shadow-black/30 border border-neutral-800 rounded-[2.25rem] p-6 text-white-raw flex flex-col h-full backdrop-blur-sm transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
            style={{ maxWidth: '40rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-2 text-white-raw">Inteligencia Estratégica</h3>
            <p className="font-serif italic text-primary-accent mb-3">Decisiones con sentido, basadas en el mapa completo.</p>
            <p className="mb-4">Antes de dar un paso, te ayudamos a ver todo el terreno. No solo lo que tienes delante, sino las oportunidades y riesgos que se esconden a simple vista. Fusionamos el análisis de mercado con la lectura del contexto para darte una visión panorámica que se traduce en un plan de acción preciso.</p>
            <ul className="list-disc list-inside space-y-1 mt-auto marker:text-secondary-500">
              <li>Análisis de Mercado y Competencia</li>
              <li>Detección de Tendencias</li>
              <li>Evaluación de Riesgos y Escenarios</li>
              <li>Estrategia y Posicionamiento de Marca</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-neutral-900/40 shadow-lg shadow-black/30 border border-neutral-800 rounded-[2.25rem] p-6 text-white-raw flex flex-col h-full backdrop-blur-sm transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
            style={{ maxWidth: '40rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-2 text-white-raw">Data Science Aplicada</h3>
            <p className="font-serif italic text-primary-accent mb-3">Anticipar el futuro, simplificando lo complejo.</p>
            <p className="mb-4">La ciencia de datos no tiene por qué ser abrumadora. Hacemos el trabajo técnico pesado y te lo entregamos traducido en respuestas claras. Creamos modelos que te permiten anticipar lo que viene y herramientas que te facilitan la decisión, hoy.</p>
            <ul className="list-disc list-inside space-y-1 mt-auto marker:text-secondary-500">
              <li>Modelado Predictivo</li>
              <li>Segmentación de Audiencias</li>
              <li>Dashboards y Visualización de Datos</li>
              <li>Automatización de Reportes</li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-neutral-900/40 shadow-lg shadow-black/30 border border-neutral-800 rounded-[2.25rem] p-6 text-white-raw flex flex-col h-full backdrop-blur-sm transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
            style={{ maxWidth: '40rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-2 text-white-raw">Análisis de Impacto Social</h3>
            <p className="font-serif italic text-primary-accent mb-3">Demostrar que es lo que hacés, realmente transforma.</p>
            <p className="mb-4">Tu trabajo cambia vidas. Nosotros te ayudamos a probarlo. Medimos y visibilizamos tu impacto social con una metodología que combina el rigor estadístico con la potencia de las historias humanas, creando reportes que convencen a mentes y corazones.</p>
            <ul className="list-disc list-inside space-y-1 mt-auto marker:text-secondary-500">
              <li>Evaluación de Impacto de Programas</li>
              <li>Diseño de Indicadores a Medida</li>
              <li>Análisis de Públicos y Beneficiarios</li>
              <li>Reportes de Sostenibilidad</li>
            </ul>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-neutral-900/40 shadow-lg shadow-black/30 border border-neutral-800 rounded-[2.25rem] p-6 text-white-raw flex flex-col h-full backdrop-blur-sm transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
            style={{ maxWidth: '40rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-2 text-white-raw">Cultura Organizacional</h3>
            <p className="font-serif italic text-primary-accent mb-3">Fortalecer tu equipo desde adentro, con evidencia.</p>
            <p className="mb-4">Tu equipo es tu mayor activo. Miramos lo que pasa puertas adentro para entender las dinámicas reales. A través del análisis de datos, te ayudamos a mejorar el clima, aumentar el compromiso y construir una cultura de trabajo más fuerte y resiliente.</p>
            <ul className="list-disc list-inside space-y-1 mt-auto marker:text-secondary-500">
              <li>Medición de Clima y Engagement</li>
              <li>Análisis de Redes Organizacionales</li>
              <li>Estrategias de Retención de Talento</li>
              <li>Optimización de la Comunicación Interna</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
