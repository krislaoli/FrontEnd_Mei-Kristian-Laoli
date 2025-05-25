import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState("Alba"); // default name
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const savedUsername = localStorage.getItem("username") || "Alba";

    setIsLoggedIn(!!token);
    setUsername(savedUsername);
  }, []);

  // Optional: pantau perubahan localStorage secara manual setiap 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      const savedUsername = localStorage.getItem("username") || "Alba";
      setUsername(savedUsername);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Close dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleProfile = () => {
    const token = localStorage.getItem("jwtToken");
    navigate("/profile", { state: { token } });
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
          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-yellow-500"
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                    {username[0]?.toUpperCase() || "A"}
                  </div>
                  <span className="hidden md:inline">{username}</span>
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <button
                      onClick={handleProfile}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
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
