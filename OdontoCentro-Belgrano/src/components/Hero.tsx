export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-20 pb-32 flex items-center min-h-[80vh]"
      style={{
        backgroundImage: `url('src/assets/office.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          Tu sonrisa en <br className="hidden md:block" /> las mejores manos
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          Odontología integral y especializada para toda la familia. Recuperá la
          confianza al sonreír con la última tecnología y el mejor trato humano.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full hover:bg-teal-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Pedir un Turno
        </a>
      </div>
    </section>
  );
};
