// --- Importaciones de Estilos y Tipografías --- //
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans, Playfair_Display } from "next/font/google";

// --- Importación de Componentes de Layout --- //
import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// --- Importación de Componentes de UI --- //
// import Button from "@/components/ui/button";
// import Card from "@/components/ui/card";
// import Input from "@/components/ui/input";

// --- Definición de Tipografías --- //
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

// --- Definición de la Aplicación --- //
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${dmSans.variable} ${playfairDisplay.variable} font-sans`}>
      <Header /> {/* <-- 2. LA INTEGRACIÓN DEL HEADER */}
      
      <main className="pt-20"> {/* Opcional pero recomendado: un <main> para el contenido principal */}
        <Component {...pageProps} /> {/* Aquí se renderiza cada página */}
      </main>

      {/* <Footer /> */} {/* (Aquí iría el Footer cuando lo tengas) */}
    </div>
  );
}