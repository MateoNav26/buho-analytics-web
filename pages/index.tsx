import Head from "next/head";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/Hero"));
const ProblemSection = dynamic(
  () => import("@/components/sections/ProblemSection"),
);
const OurDifference = dynamic(
  () => import("@/components/sections/OurDifference"),
);
const AboutUs = dynamic(() => import("@/components/sections/AboutUs"));
const PartnershipPhilosophy = dynamic(
  () => import("@/components/sections/PartnershipPhilosophy"),
);
const Services = dynamic(() => import("@/components/sections/Services"));
const Methodology = dynamic(() => import("@/components/sections/Methodology"));
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies"));
const CallToAction = dynamic(
  () => import("@/components/sections/CallToAction"),
);

export default function Home({ openContactModal }: { openContactModal?: () => void }) {
  return (
    <>
      <Head>
        <title>
          Búho Analytics | Consultoría en Ciencia de Datos y Estrategia
        </title>
        <meta
          name="description"
          content="Consultora de ciencia de datos y estrategia. Transformamos datos en certezas para tu negocio. Sociología + Ingeniería de datos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Búho Analytics | Consultoría en Ciencia de Datos y Estrategia"
        />
        <meta
          property="og:description"
          content="Consultora de ciencia de datos y estrategia. Transformamos datos en certezas para tu negocio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content="https://tu-dominio.com" />
        <meta property="og:site_name" content="Búho Analytics" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tu-dominio.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Búho Analytics",
              url: "https://tu-dominio.com",
              logo: "/favicon.ico",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://tu-dominio.com",
              name: "Búho Analytics",
            }),
          }}
        />
      </Head>
      <Hero />
      <ProblemSection />
      <OurDifference />
      <AboutUs />
      <PartnershipPhilosophy />
      <Services />
      <Methodology openContactModal={openContactModal} />
      <CaseStudies />
      <CallToAction />
    </>
  );
}
