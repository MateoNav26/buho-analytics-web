import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function CaseStudies() {
  // Placeholder data - you can replace these with actual case study data
  const caseStudies = [
    {
      title: "De la intuición a +40% en ventas",
      description: "Transformamos las decisiones basadas en suposiciones en estrategias respaldadas por datos concretos.",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Analytics dashboard
    },
    {
      title: "Optimización que genera resultados",
      description: "Identificamos oportunidades ocultas que llevaron a mejoras significativas en el rendimiento empresarial.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Business growth
    },
    {
      title: "Datos que transforman negocios",
      description: "Convertimos información compleja en insights accionables que impulsan el crecimiento sostenible.",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", // Data visualization
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-accent mb-6">
            Resultados, no promesas.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              title={caseStudy.title}
              description={caseStudy.description}
              backgroundImage={caseStudy.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 