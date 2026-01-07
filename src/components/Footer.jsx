import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-4">MaxLead Advertising</h4>
          <p className="text-sm text-gray-400">
            Trusted advertising & distribution partner across the UAE.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-400">Services</Link></li>
            <li><Link to="/work" className="hover:text-orange-400">Work</Link></li>
            <li><Link to="/blog" className="hover:text-orange-400">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services#print" className="hover:text-orange-400">Printing</Link></li>
            <li><Link to="/services#distribution" className="hover:text-orange-400">Flyer Distribution</Link></li>
            <li><Link to="/services#sms" className="hover:text-orange-400">SMS Marketing</Link></li>
            <li><Link to="/services#digital" className="hover:text-orange-400">Digital Marketing</Link></li>
            <li><Link to="/services#outdoor" className="hover:text-orange-400">Outdoor Advertising</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@maxleadadvertising.com"
                className="hover:text-orange-400"
              >
                info@maxleadadvertising.com
              </a>
            </li>
            <li>
              <a
                href="tel:+971XXXXXXXXX"
                className="hover:text-orange-400"
              >
                +971 XXXXXXXX
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12">
        © {new Date().getFullYear()} MaxLead Advertising. All rights reserved.
      </div>
    </footer>
  );
}
