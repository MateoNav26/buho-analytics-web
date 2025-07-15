import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { motion } from "framer-motion";

export default function CaseStudies() {
  // Placeholder data - you can replace these with actual case study data
  const caseStudies = [
    {
      title: "Descubrimos por qué el 60% de los clientes abandona el carrito.",
      result: "+35% de facturación en un trimestre.", // una sola línea
      backgroundImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Analytics dashboard
    },
    {
      title: "Tradujimos el impacto en una historia con datos irrefutables.",
      result: "Aseguraron su principal fuente de\nfinanciación por dos años más.", // dos líneas
      backgroundImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Business growth
    },
    {
      title: "Mapeamos las verdaderas necesidades de movilidad.",
      result: "Una nueva política de transporte público\ncon 92% de aprobación ciudadana.", // dos líneas
      backgroundImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", // Data visualization
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-accent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Resultados, no promesas.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              className="h-full"
            >
              <CaseStudyCard
                title={caseStudy.title}
                result={caseStudy.result}
                backgroundImage={caseStudy.backgroundImage}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
