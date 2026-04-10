export const Schedules = () => {
  return (
    <section id="horarios" className="py-24 px-4 bg-[#1C1C1C]">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-5xl text-center mb-16 text-[#F97316]">
          GRILLA DE HORARIOS
        </h3>
        <div className="overflow-x-auto bg-[#0A0A0A] rounded p-6 border border-[#1C1C1C]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#EA580C]">
                <th className="py-4 px-4 font-bold text-lg">Hora</th>
                <th className="py-4 px-4 font-bold text-lg">
                  Lunes - Miércoles - Viernes
                </th>
                <th className="py-4 px-4 font-bold text-lg">Martes - Jueves</th>
                <th className="py-4 px-4 font-bold text-lg">Sábados</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-[#1C1C1C] hover:bg-[#1C1C1C] transition-colors">
                <td className="py-4 px-4 text-[#F97316] font-bold">08:00 AM</td>
                <td className="py-4 px-4">Funcional</td>
                <td className="py-4 px-4">Musculación / GAP</td>
                <td className="py-4 px-4">Open Box</td>
              </tr>
              <tr className="border-b border-[#1C1C1C] hover:bg-[#1C1C1C] transition-colors">
                <td className="py-4 px-4 text-[#F97316] font-bold">18:00 PM</td>
                <td className="py-4 px-4">Musculación Libre</td>
                <td className="py-4 px-4">Funcional Intensivo</td>
                <td className="py-4 px-4">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
