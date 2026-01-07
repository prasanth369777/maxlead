import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import Logo from '../assests/logo.png'; // import your logo

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Changed max-w-7xl to max-w-[95%] for wider layout */}
      <div className="max-w-[95%] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          
          {/* Logo + Socials */}
          <div>
            <div className="mb-6">
              <img src={Logo} alt="MUHA Logo" className="h-20 w-auto" /> {/* bigger logo */}
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Transforming bold ideas into exceptional digital experiences since 2025.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-base">
              {['UI/UX Design', 'Web Development', 'Graphic Design', 'Logo Design', 'Digital Marketing', 'SEO Services'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-base">
              {['About Us', 'Our Work', 'Careers', 'Blog', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-base">
              Subscribe to get the latest news and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-5 py-3 bg-slate-800 border border-slate-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-r-lg hover:shadow-lg hover:scale-105 transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} MUHA Agency. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
    