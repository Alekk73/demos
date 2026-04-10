export const Nabvar = () => {
  const NavLinks = [
    { text: "servicios" },
    { text: "horarios" },
    { text: "planes" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[#1C1C1C]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl text-[#F97316] font-bold tracking-wider">
          FORGE GYM
        </h1>
        <nav className="hidden md:flex space-x-6 text-sm font-semibold items-center">
          {NavLinks.map((link, count) => (
            <a
              href={`#${link.text}`}
              key={count}
              className="hover:text-[#F97316] transition-colors uppercase"
            >
              {link.text}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-[#F97316] text-[#0A0A0A] px-5 py-2 rounded font-bold hover:bg-[#EA580C] transition-colors"
          >
            EMPEZÁ HOY
          </a>
        </nav>
      </div>
    </header>
  );
};
