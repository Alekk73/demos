export const Services = () => {
  return (
    <section id="servicios" className="py-24 px-4 container mx-auto">
      <h3 className="text-5xl text-center mb-16 text-[#F97316]">
        NUESTROS SERVICIOS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "Musculación",
          "Entrenamiento Funcional",
          "Clases Grupales",
          "Personal Trainer",
        ].map((servicio) => (
          <div
            key={servicio}
            className="bg-[#1C1C1C] p-8 rounded text-center border-t-4 border-transparent hover:border-[#EA580C] transition-all cursor-pointer"
          >
            <h4 className="text-xl font-bold mb-3 uppercase tracking-wider">
              {servicio}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Superá tus límites. Equipamiento de primera línea y profesionales
              enfocados en tu progreso.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
