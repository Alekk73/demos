export const Testimonies = () => {
  const people = [
    {
      nombre: "Gastón R.",
      resultado: "Bajé 8kg en 3 meses",
      texto:
        "Increíble la energía del lugar. Venís sin ganas y salís prendido fuego. Los profes no te dejan aflojar.",
      src: "/person2.jpg",
    },
    {
      nombre: "Macarena S.",
      resultado: "Aumento de fuerza y masa",
      texto:
        "Nunca pensé que me iba a copar tanto con los fierros. Forge te cambia la cabeza, el mejor ambiente para entrenar en serio.",
      src: "/person.jpg",
    },
    {
      nombre: "Ezequiel M.",
      resultado: "Recuperación funcional",
      texto:
        "Después de una lesión necesitaba fortalecer. La paciencia y la técnica con la que te enseñan es de otro nivel.",
      src: "/person3.jpg",
    },
  ];
  return (
    <section className="py-24 px-4 container mx-auto">
      <h3 className="text-5xl text-center mb-16 text-[#F97316]">
        RESULTADOS REALES
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {people.map((testimonio) => (
          <div
            key={testimonio.nombre}
            className="bg-[#1C1C1C] p-8 rounded border-l-4 border-[#F97316]"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#0A0A0A] rounded-full mr-4 flex items-center justify-center text-xs text-gray-500 border border-[#2a2a2a]">
                <img
                  src={testimonio.src}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg">{testimonio.nombre}</h4>
                <p className="text-[#EA580C] text-sm font-bold uppercase tracking-wider">
                  {testimonio.resultado}
                </p>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">
              "{testimonio.texto}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
