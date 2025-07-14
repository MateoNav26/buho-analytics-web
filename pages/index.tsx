import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import OurDifference from "@/components/sections/OurDifference";
import AboutUs from "@/components/sections/AboutUs";
import PartnershipPhilosophy from "@/components/sections/PartnershipPhilosophy";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import CaseStudies from "@/components/sections/CaseStudies";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <OurDifference />
      <AboutUs />
      <PartnershipPhilosophy />
      <Services />
      <Methodology />
      <CaseStudies />
      <CallToAction />
    </>
  );
}
