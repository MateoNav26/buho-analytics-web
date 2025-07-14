import Logo from "@/components/ui/Logo";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-sans text-4xl md:text-6xl text-white-raw mb-8 max-w-4xl mx-auto">
          En un mundo ahogado en datos, la claridad es el único lujo.
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-white-raw/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Las empresas se encuentran inundadas de información, pero carecen de la capacidad 
          para transformar esos datos en decisiones claras y accionables. En Búho Analytics, 
          convertimos el ruido en señal, la complejidad en simplicidad, y la incertidumbre 
          en certeza.
        </p>
        
        <div className="flex justify-center">
          <Logo className="h-24 w-24 text-primary-accent" />
        </div>
      </div>
    </section>
  );
} 