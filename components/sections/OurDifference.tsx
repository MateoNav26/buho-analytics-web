export default function OurDifference() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-accent mb-6">
            Donde la sociología encuentra la ingeniería de datos.
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto"></div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Visión Humana */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-white-raw mb-6">
              Visión Humana
            </h3>
            <p className="font-sans text-lg text-white-raw/80 leading-relaxed">
              Nuestro enfoque sociológico nos permite comprender las dinámicas sociales, 
              comportamientos humanos y patrones culturales que subyacen en los datos. 
              No solo analizamos números, sino que interpretamos las historias humanas 
              que estos revelan, proporcionando contexto y significado a los insights 
              que generamos.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                <span className="font-sans text-white-raw/70">Análisis cualitativo</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                <span className="font-sans text-white-raw/70">Contexto cultural</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                <span className="font-sans text-white-raw/70">Interpretación humana</span>
              </div>
            </div>
          </div>

          {/* Right Column - Precisión Algorítmica */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-white-raw mb-6">
              Precisión Algorítmica
            </h3>
            <p className="font-sans text-lg text-white-raw/80 leading-relaxed">
              La ingeniería de datos nos proporciona las herramientas técnicas para 
              procesar, analizar y visualizar grandes volúmenes de información con 
              precisión matemática. Utilizamos algoritmos avanzados y tecnologías 
              de vanguardia para extraer patrones ocultos y generar insights 
              accionables de manera eficiente y escalable.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                <span className="font-sans text-white-raw/70">Machine Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                <span className="font-sans text-white-raw/70">Big Data Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                <span className="font-sans text-white-raw/70">Análisis predictivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 