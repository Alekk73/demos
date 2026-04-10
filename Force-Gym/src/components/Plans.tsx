export const Plans = () => {
  const PlansArray = [
    { nombre: "MENSUAL", precio: "$18.000", destaque: false },
    { nombre: "TRIMESTRAL", precio: "$40.000", destaque: true },
    { nombre: "ANUAL", precio: "$130.000", destaque: false },
  ];

  return (
    <section id="planes" className="py-24 px-4 container mx-auto">
      <h3 className="text-5xl text-center mb-16 text-[#F97316]">
        PLANES DE ENTRENAMIENTO
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {PlansArray.map((plan) => (
          <div
            key={plan.nombre}
            className={`bg-[#1C1C1C] p-10 rounded text-center flex flex-col ${plan.destaque ? "border-2 border-[#F97316] transform scale-105 shadow-[0_0_20px_rgba(249,115,22,0.15)] z-10 py-12" : "border border-[#0A0A0A]"}`}
          >
            {plan.destaque && (
              <span className="bg-[#F97316] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 self-center">
                Más Elegido
              </span>
            )}
            <h4 className="text-3xl font-bold mb-4 tracking-wider">
              {plan.nombre}
            </h4>
            <p className="text-5xl text-[#FFFFFF] font-bold mb-6">
              {plan.precio}
            </p>
            <ul className="text-gray-400 text-sm mb-10 space-y-4 grow text-left mx-auto">
              <li className="flex items-center">
                <span className="text-[#F97316] mr-2">✓</span> Acceso libre a
                musculación
              </li>
              <li className="flex items-center">
                <span className="text-[#F97316] mr-2">✓</span> Clases
                funcionales incluidas
              </li>
              <li className="flex items-center">
                <span className="text-[#F97316] mr-2">✓</span> Rutina
                personalizada
              </li>
            </ul>
            <button
              className={`w-full font-bold py-4 rounded transition-colors ${plan.destaque ? "bg-[#F97316] text-[#0A0A0A] hover:bg-[#EA580C]" : "bg-transparent border-2 border-[#1C1C1C] hover:border-[#F97316] hover:text-[#F97316]"}`}
            >
              SELECCIONAR PLAN
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
