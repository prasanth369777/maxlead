import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assests/logo.png";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { name: "Printing Services", path: "/services#print" },
    { name: "Flyer Distribution", path: "/services#distribution" },
    { name: "SMS Marketing", path: "/services#sms" },
    { name: "Digital Marketing", path: "/services#digital" },
    { name: "Outdoor Advertising", path: "/services#outdoor" },
    { name: "Event Promotions", path: "/services#events" },
  ];

  const handleServiceClick = (path) => {
    setServicesOpen(false);
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-700 backdrop-blur-xl">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="MaxLead Advertising"
            className="h-10 w-10 rounded-full border border-gray-600"
          />
          <span className="hidden sm:block font-bold text-lg">MaxLead</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-base font-medium">

          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>

          {/* SERVICES CLICK DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-gray-300 hover:text-orange-400 transition"
            >
              Services
              {servicesOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                {services.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleServiceClick(item.path)}
                    className="w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/work" className="nav-link">Work</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden bg-black transition-all duration-500 ${menuOpen ? "max-h-[600px] py-4" : "max-h-0 overflow-hidden"}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)} className="mobile-link">Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)} className="mobile-link">About</NavLink>

        {/* Mobile Services */}
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex justify-center items-center gap-2 py-3 text-gray-300"
        >
          Services
          {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {servicesOpen && (
          <div className="bg-gray-900">
            {services.map((item) => (
              <button
                key={item.name}
                onClick={() => handleServiceClick(item.path)}
                className="block w-full py-2 text-sm text-gray-400 hover:text-orange-400"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}

        <NavLink to="/work" onClick={() => setMenuOpen(false)} className="mobile-link">Work</NavLink>
        <NavLink to="/blog" onClick={() => setMenuOpen(false)} className="mobile-link">Blog</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="mobile-link">Contact</NavLink>
      </div>

      {/* Styles */}
      <style>{`
        .nav-link {
          color: #d1d5db;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #fb923c;
        }
        .mobile-link {
          display: block;
          padding: 0.75rem;
          text-align: center;
          color: #d1d5db;
        }
      `}</style>
    </nav>
  );
}
