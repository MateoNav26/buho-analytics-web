"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

// V.I.S.T.A. Method Data
const vistaSteps = [
  {
    letter: "V",
    title: "Ver",
    description:
      "Observamos y analizamos los datos desde múltiples perspectivas, identificando patrones ocultos y tendencias emergentes que otros métodos podrían pasar por alto.",
  },
  {
    letter: "I",
    title: "Interpretar",
    description:
      "Aplicamos contexto sociológico y cultural para dar significado a los datos, transformando números en narrativas humanas comprensibles y accionables.",
  },
  {
    letter: "S",
    title: "Sintetizar",
    description:
      "Integramos insights cualitativos y cuantitativos en una visión coherente, conectando puntos aparentemente dispares para revelar la imagen completa.",
  },
  {
    letter: "T",
    title: "Transformar",
    description:
      "Convertimos los hallazgos en estrategias concretas y soluciones innovadoras que generan valor real e impacto medible para nuestros clientes.",
  },
  {
    letter: "A",
    title: "Activar",
    description:
      "Implementamos las soluciones con precisión algorítmica, monitoreando resultados y optimizando continuamente para maximizar el retorno de inversión.",
  },
];

// Elegant Visual Component for the left column
const VistaVisual = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Sophisticated background animation */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary-accent"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-accent/10 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${15 + i * 8}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Elegant radial gradient that responds to active step */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary-accent/5 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle moving lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary-accent/20 to-transparent"
              style={{
                top: `${30 + i * 20}%`,
                left: "0%",
                right: "0%",
              }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Dynamic circles that respond to active step */}
        <div className="absolute inset-0">
          {vistaSteps.map((step, index) => (
            <motion.div
              key={`circle-${index}`}
              className="absolute w-32 h-32 border border-primary-accent/10 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: activeStep >= index ? [1, 1.1, 1] : 0.8,
                opacity: activeStep >= index ? [0.1, 0.2, 0.1] : 0.05,
                rotate: activeStep === index ? 360 : 0,
              }}
              transition={{
                duration: 4,
                repeat: activeStep === index ? Infinity : 0,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Central letter display - elegant and minimal */}
      <div className="relative z-10 flex items-center justify-center">
        {vistaSteps.map((step, index) => (
          <motion.div
            key={step.letter}
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: activeStep === index ? 1 : 0,
              scale: activeStep === index ? 1 : 0.9,
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.1,
            }}
          >
            {/* Main letter with elegant styling */}
            <motion.div
              className="text-8xl md:text-9xl font-serif italic text-primary-accent relative"
              animate={{
                y: activeStep === index ? 0 : 10,
              }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {step.letter}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Individual step component
const VistaStep = ({
  step,
  index,
  isActive,
  isInView,
  innerRef,
}: {
  step: (typeof vistaSteps)[0];
  index: number;
  isActive: boolean;
  isInView: boolean;
  innerRef: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <motion.div
      ref={innerRef}
      className="min-h-[500px] flex flex-col justify-center py-20 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isInView ? 1 : 0.4,
        y: isInView ? 0 : 30,
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="space-y-8">
        {/* Letter and Title */}
        <div className="flex items-baseline space-x-6">
          <motion.div
            className="text-7xl md:text-8xl font-serif italic text-primary-accent"
            animate={{
              scale: isActive ? 1.05 : 1,
              y: isActive ? -5 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {step.letter}
          </motion.div>
          <motion.h3
            className="text-3xl md:text-4xl font-sans font-bold text-white-raw"
            animate={{
              opacity: isActive ? 1 : 0.7,
              x: isActive ? 0 : -10,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.05,
            }}
          >
            {step.title}
          </motion.h3>
        </div>

        {/* Description */}
        <motion.div
          className="max-w-2xl"
          animate={{
            opacity: isActive ? 1 : 0.6,
            x: isActive ? 0 : -15,
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.1,
          }}
        >
          <p className="text-lg md:text-xl text-white-raw/80 leading-relaxed">
            {step.description}
          </p>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="flex items-center space-x-4"
          animate={{
            opacity: isActive ? 1 : 0.4,
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.15,
          }}
        >
          <motion.div
            className="w-12 h-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent"
            animate={{
              scaleX: isActive ? 1 : 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
          <span className="text-sm font-sans text-white-raw/50">
            {index + 1} / {vistaSteps.length}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Methodology({ openContactModal }: { openContactModal?: () => void } = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>(
    vistaSteps.map(() => null),
  );
  const [activeStep, setActiveStep] = useState(0);

  // Improved scroll detection with better synchronization
  useEffect(() => {
    function handleScroll() {
      const viewportCenter = window.innerHeight / 2;
      let minDistance = Infinity;
      let closest = 0;

      stepRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const blockCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - blockCenter);

          // Add threshold to prevent flickering and improve synchronization
          if (distance < minDistance && distance < window.innerHeight * 0.5) {
            minDistance = distance;
            closest = idx;
          }
        }
      });

      setActiveStep(closest);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="metodologia"
      ref={containerRef}
      className={"py-20 md:py-32 bg-black relative overflow-visible"}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-accent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Nuestra Metodología V.I.S.T.A.
          </motion.h2>
          <motion.p
            className="font-sans text-xl text-white-raw/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Un enfoque único que combina la precisión algorítmica con la
            interpretación sociológica
          </motion.p>
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          />
        </div>

        {/* Two-Column Grid */}
        <div
          className={
            "grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto relative z-1"
          }
        >
          {/* Left Column - Sticky Visual */}
          <div className="lg:sticky lg:top-8 lg:h-[100vh] flex items-center justify-center z-10">
            <VistaVisual activeStep={activeStep} />
          </div>

          {/* Right Column - Scrolling Text */}
          <div className="space-y-0">
            {vistaSteps.map((step, index) => (
              <VistaStep
                key={step.letter}
                step={step}
                index={index}
                isActive={activeStep === index}
                isInView={activeStep === index}
                innerRef={(el) => (stepRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-sans text-lg text-white-raw/70 mb-6">
            ¿Listo para transformar sus datos con nuestra metodología
            V.I.S.T.A.?
          </p>
          <Button
            type="button"
            onClick={openContactModal}
            variant="primary"
            size="md"
          >
            Solicitar Propuesta
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
