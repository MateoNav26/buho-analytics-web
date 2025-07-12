import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans, Playfair_Display } from "next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dmSans.variable + " " + playfairDisplay.variable + " font-sans"}>
      <Component {...pageProps} />
    </main>
  );
}
