export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] py-8 text-center text-gray-600 text-sm border-t border-[#1C1C1C]">
      <p className="font-bold tracking-widest uppercase mb-2">FORGE GYM</p>
      <p>
        &copy; {new Date().getFullYear()}. Todos los derechos reservados. Forjá
        tu mejor versión.
      </p>
    </footer>
  );
};
