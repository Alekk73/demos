export const Services = () => {
  const services = [
    {
      id: 1,
      name: "Ortodoncia",
      src: "/orthodontics.jpg",
      imgAlt: "Primer plano de brackets",
    },
    {
      id: 2,
      name: "Implantes",
      src: "/implants.jpg",
      imgAlt: "Modelo de implante dental",
    },
    {
      id: 3,
      name: "Blanqueamiento",
      src: "/teeth-whitening.jpg",
      imgAlt: "Sonrisa con dientes blancos",
    },
    {
      id: 4,
      name: "Emergencia",
      src: "/dental-emergencies.jpg",
      imgAlt: "Paciente recibiendo limpieza dental",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-8 pt-4 px-4 snap-x snap-mandatory hide-scrollbar">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex-none w-64 bg-slate-50 rounded-2xl overflow-hidden shadow-md snap-center hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={service.src}
                  alt={service.imgAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-teal-800">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
