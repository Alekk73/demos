export const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-gray-300">
              <img
                src="src/assets/dentist2.jpg"
                alt="Retrato del Doctor/a principal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Dr. Marcos Perez
            </h2>
            <p className="text-teal-600 font-semibold text-lg mb-6">
              Odontólogo Especialista en Estética
            </p>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Con más de 15 años de experiencia en la profesión, mi objetivo
                siempre ha sido cambiar la percepción de ir al dentista. Creo
                firmemente en una odontología sin dolor, empática y centrada en
                las necesidades de cada paciente.
              </p>
              <p>
                Graduado de la Universidad (Nombre de la Universidad) y con
                múltiples posgrados en implantología y diseño de sonrisas, me
                dedico a devolverle a mis pacientes no solo la funcionalidad,
                sino la seguridad de mostrar su mejor versión al mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
