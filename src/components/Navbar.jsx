// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white ${
        active ? "shadow-md py-4" : "shadow-none py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-yellow-400 text-3xl font-bold lowercase tracking-widest">
          alba
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-900">
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Career
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-900 font-semibold text-sm px-4 py-2 rounded-full hover:text-yellow-400 transition"
            >
              Login
            </Link>
            <a
              href="#"
              className="bg-yellow-400 text-black font-semibold text-sm px-6 py-2 rounded-full hover:bg-yellow-500 transition"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
