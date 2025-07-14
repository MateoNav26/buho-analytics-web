import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import OurDifference from "@/components/sections/OurDifference";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import CaseStudies from "@/components/sections/CaseStudies";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <OurDifference />
      <Services />
      <Methodology />
      <CaseStudies />
    </>
  );
}
