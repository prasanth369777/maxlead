import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Send
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-white pt-20 pb-10 overflow-hidden">
      
      {/* --- STATIC BACKGROUND GLOW --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- TOP SECTION (CTA & BRAND) --- */}
        <div className="grid lg:grid-cols-2 gap-12 border-b border-white/10 pb-16 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to scale your business?
            </h2>
            <p className="text-gray-400 max-w-md">
              Join 500+ businesses across UAE who trust MaxLead for their advertising needs.
            </p>
            <div className="flex gap-4">
               {/* Social Icons */}
               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
               ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:flex lg:justify-end items-center">
            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-orange-500 text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-orange-500 rounded-lg hover:bg-orange-600">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- MAIN LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-xl font-bold text-orange-500">MaxLead.</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your premier partner for digital printing, flyer distribution, and integrated marketing solutions across the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Home', 'About Us', 'Services', 'Our Work', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-orange-500 flex items-center gap-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Printing Services', 'Flyer Distribution', 'SMS Marketing', 'Digital Ads', 'Outdoor Media'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-orange-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:info@maxlead.com" className="hover:text-white">info@maxlead.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="tel:+91000000000" className="hover:text-white">+91 000 000 0000</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} MaxLead Advertising. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}