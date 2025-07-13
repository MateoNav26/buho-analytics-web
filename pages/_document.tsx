import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" className="scroll-smooth">
      <Head />
      <body className="antialiased bg-white dark:bg-neutral-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
