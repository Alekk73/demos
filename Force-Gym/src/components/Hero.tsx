export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#1C1C1C] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-7xl md:text-9xl text-[#FFFFFF] mb-2 leading-none">
          FORJÁ TU MEJOR VERSIÓN
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
          Entrenamiento funcional y musculación. Resultados, energía y garra
          para quienes se lo toman en serio.
        </p>
        <a
          href="#planes"
          className="inline-block bg-[#F97316] text-[#0A0A0A] text-2xl px-10 py-4 font-bold rounded hover:bg-[#EA580C] transition-all transform hover:scale-105"
        >
          EMPEZÁ HOY
        </a>
      </div>
    </section>
  );
};
