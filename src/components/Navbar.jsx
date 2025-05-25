// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white ${
        active ? "shadow-md py-4" : "shadow-none py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/Logo.png" alt="Albatech Logo" className="h-10" />
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-900">
            <li>
              <a href="#service" className="hover:text-yellow-400 transition">
                Service
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-yellow-400 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-yellow-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#career" className="hover:text-yellow-400 transition">
                Career
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-900 font-semibold text-sm px-4 py-2 rounded-full hover:text-red-500 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-gray-900 font-semibold text-sm px-4 py-2 rounded-full hover:text-yellow-400 transition"
              >
                Login
              </Link>
            )}
            <a
              href="#contact"
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
