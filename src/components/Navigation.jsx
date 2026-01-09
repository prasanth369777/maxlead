import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assests/logo.png";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  const services = [
    { name: "Printing Services", path: "/printing" },
    { name: "Flyer Distribution", path: "/flyer" },
    { name: "SMS Marketing", path: "/flyer" },
    { name: "Digital Marketing", path: "/flyer" },
    { name: "Outdoor Advertising", path: "/flyer" },
    { name: "Event Promotions", path: "/flyer" },
  ];

  const handleServiceClick = (path) => {
    setServicesOpen(false);
    setMenuOpen(false);
    navigate(path);
  };

  // CLOSE SERVICES DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-700 backdrop-blur-xl">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="MaxLead Advertising"
            className="h-10 w-10 rounded-full border border-gray-600"
          />
          <span className="hidden sm:block font-bold text-lg">MaxLead</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 font-medium">

          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About Us</NavLink>

          {/* SERVICES – HOVER OPEN & STAY */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
          >
            <button
              type="button"
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
              <div
                className="absolute top-full left-0 mt-4 w-72 bg-white
                           rounded-xl shadow-2xl border border-gray-200 z-50"
              >
                {services.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setServicesOpen(false)}
                    className="block px-6 py-3 text-sm text-gray-700
                               hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/industries" className="nav-link">Industries</NavLink>
          <NavLink to="/work" className="nav-link">Clients</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </div>

        {/* MOBILE TOGGLE */}
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
        <NavLink to="/about" onClick={() => setMenuOpen(false)} className="mobile-link">About Us</NavLink>

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
                className="block w-full py-2 text-sm text-gray-400 hover:text-orange-400 transition"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}

        <NavLink to="/industries" onClick={() => setMenuOpen(false)} className="mobile-link">Industries</NavLink>
        <NavLink to="/work" onClick={() => setMenuOpen(false)} className="mobile-link">Clients</NavLink>
        <NavLink to="/blog" onClick={() => setMenuOpen(false)} className="mobile-link">Blog</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="mobile-link">Contact Us</NavLink>
      </div>

      <style>{`
        .nav-link {
          color: #d1d5db;
          transition: color .3s;
        }
        .nav-link:hover {
          color: #fb923c;
        }
        .mobile-link {
          display: block;
          padding: .75rem;
          text-align: center;
          color: #d1d5db;
        }
      `}</style>
    </nav>
  );
}
