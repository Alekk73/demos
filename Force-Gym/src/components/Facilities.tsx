export const Facilities = () => {
  const ImagesArray = [
    { src: "/interior-gym.jpg" },
    { src: "/interior-gym2.jpg" },
    { src: "/interior-gym3.jpg" },
    { src: "/interior-gym4.jpg" },
    { src: "/interior-gym5.jpg" },
    { src: "/interior-gym6.jpg" },
    { src: "/interior-gym7.jpg" },
    { src: "/interior-gym8.jpg" },
  ];

  return (
    <section id="instalaciones" className="py-24 px-4 bg-[#1C1C1C]">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-5xl text-center mb-16 text-[#F97316]">
          NUESTRAS INSTALACIONES
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ImagesArray.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] aspect-square rounded flex items-center justify-center border border-[#1C1C1C] hover:border-[#EA580C] transition-colors overflow-hidden group"
            >
              <img
                src={item.src}
                alt={`Imagen de la instalación ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
