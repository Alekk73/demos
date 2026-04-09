import { useState } from "react";

interface LiProps {
  text: string;
  href: string;
}

const ListLinks: LiProps[] = [
  { text: "Servicios", href: "servicios" },
  { text: "Sobre nosotros", href: "nosotros" },
  { text: "Contacto", href: "contacto" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <a href="#inicio">
              <span className="text-2xl font-bold text-teal-600">
                OdontoCentro Belgrano
              </span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {ListLinks.map((link, count) => (
              <a
                href={`#${link.href}`}
                key={count}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {ListLinks.map((link, count) => (
              <a
                href={`#${link.href}`}
                key={count}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-600 font-medium hover:bg-teal-50 hover:text-teal-600 rounded-md"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
