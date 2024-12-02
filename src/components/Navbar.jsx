import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems2 = [
    {
      title: "Acceuil",
      secure: "link",
      Link: "/",
    },
    {
      title: "A propos",
      Link: "/a-propos",
      secure: "link",
    },
    {
      title: "Destinations",
      secure: "link",
      Link: "/destination",
    },
    {
      title: "Contact",
      secure: "a",
      Link: "/",
    },
    {
      title: "Temoignage",
      secure: "a",
      Link: "/#temoignage",
    },
    {
      title: "Service",
      secure: "link",
      Link: "/service",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md border-b border-white/20"></div>
      <nav className="relative px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo et nom */}
          <Link to={"/"} className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="GTour Logo"
              className="w-12 h-12 md:w-20 md:h-20 rounded-lg"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems2.map((item, index) => (
              <div key={index}>
                {item.secure === "link" ? (
                  <Link
                    to={item.Link}
                    className="text-black hover:text-sky-800 transition-colors duration-200 font-medium"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    href={item.Link}
                    className="text-black hover:text-sky-800 transition-colors duration-200 font-medium"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Links - Mobile */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white md:hidden shadow-lg">
              <div className="flex flex-col items-center py-4 space-y-4">
                {navItems2.map((item, index) =>
                  item.secure === "link" ? (
                    <Link
                      key={index}
                      to={item.Link}
                      className="text-black hover:text-sky-800 transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={item.Link}
                      className="text-black hover:text-sky-800 transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  )
                )}

                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200">
                  Contactez
                </button>
              </div>
            </div>
          )}

          {/* Bouton de connexion - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-sky-800 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200">
              Contactez
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
