import Logo from "@/components/ui/Logo";

export default function AboutUs() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-primary-accent mb-12">
            Una fusión inevitable.
          </h2>

          {/* Content */}
          <div className="space-y-8 text-center">
            {/* Paragraph 1 - The Origin */}
            <p className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed">
              Búho Analytics nació de una insatisfacción: ver cómo las decisiones más importantes se tomaban a ciegas, atrapadas entre la intuición sin datos y los datos sin contexto.
            </p>

            {/* Paragraph 2 - The Duality */}
            <p className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed">
              Somos un colectivo de estrategas y científicos de datos. Un equipo que une dos mundos: la perspectiva sociológica que entiende las complejidades humanas y el rigor de la ingeniería que descifra los patrones ocultos.
            </p>

            {/* Paragraph 3 - The Mission */}
            <p className="font-sans text-lg md:text-xl text-white-raw/90 leading-relaxed">
              No somos solo una consultora. Somos un puente. Existimos para traducir la complejidad en claridad, para asegurar que cada decisión estratégica esté fundamentada en evidencia precisa y, sobre todo, en una profunda conciencia de su impacto humano.
            </p>
          </div>

          {/* Logo with subtle animation */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <Logo className="h-16 w-16 md:h-20 md:w-20 text-primary-accent animate-pulse" />
              <div className="absolute inset-0 h-16 w-16 md:h-20 md:w-20 bg-primary-accent/10 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 