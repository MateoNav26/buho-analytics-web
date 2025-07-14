"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";

// Service data
const servicesData = [
  {
    title: "Inteligencia Estratégica",
    teaser:
      "Transformamos datos complejos en insights estratégicos que impulsan decisiones inteligentes y resultados medibles.",
    description:
      "Nuestro enfoque de inteligencia estratégica combina análisis avanzado de datos con comprensión profunda del contexto empresarial. Identificamos oportunidades ocultas, evaluamos riesgos y diseñamos estrategias basadas en evidencia que generan ventajas competitivas sostenibles.",
    services: [
      "Análisis de mercado y competencia",
      "Identificación de tendencias emergentes",
      "Evaluación de riesgos estratégicos",
      "Desarrollo de escenarios futuros",
      "Optimización de procesos de decisión",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Data Science",
    teaser:
      "Aplicamos ciencia de datos avanzada para extraer patrones ocultos y crear modelos predictivos que transforman su negocio.",
    description:
      "Nuestro equipo de data scientists combina expertise técnico con creatividad analítica para desarrollar soluciones que van más allá de los dashboards tradicionales. Creamos modelos predictivos, sistemas de recomendación y algoritmos de optimización que generan valor real.",
    services: [
      "Machine Learning y AI aplicada",
      "Análisis predictivo avanzado",
      "Procesamiento de datos masivos",
      "Visualización interactiva",
      "Automatización de procesos analíticos",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Impacto Social",
    teaser:
      "Medimos y maximizamos el impacto social de sus iniciativas, conectando propósito con resultados cuantificables.",
    description:
      "Ayudamos a organizaciones a crear y medir impacto social real. Nuestro enfoque combina metodologías rigurosas de evaluación con tecnologías innovadoras para demostrar el valor social de sus programas y optimizar la asignación de recursos.",
    services: [
      "Evaluación de impacto social",
      "Diseño de indicadores de impacto",
      "Análisis de stakeholders",
      "Optimización de programas sociales",
      "Reportes de sostenibilidad",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Cultura Organizacional",
    teaser:
      "Transformamos culturas organizacionales mediante insights basados en datos que fomentan engagement y productividad.",
    description:
      "Utilizamos análisis de datos para entender y mejorar la cultura organizacional. Identificamos patrones de comportamiento, medimos engagement y diseñamos estrategias que crean entornos de trabajo más productivos y satisfactorios.",
    services: [
      "Análisis de clima organizacional",
      "Medición de engagement",
      "Diseño de programas de desarrollo",
      "Optimización de comunicación interna",
      "Estrategias de retención de talento",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="services-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary-accent"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#services-grid)" />
          </svg>
        </div>

        {/* Floating accent elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-accent/20 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 12}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 6 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Nuestro Arsenal de Soluciones
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-accent to-transparent mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                teaser={service.teaser}
                description={service.description}
                services={service.services}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
