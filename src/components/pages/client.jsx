import { useEffect, useState, useRef } from "react";
import { 
  
  CheckCircle2, 
  Trophy, 
  Users, 
  ArrowRight,
  Handshake,
  Star
} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";

/* --- ANIMATION COMPONENT --- */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- CLIENTS DATA (Based on your Screenshot) --- */
const clients = [
  { 
    name: "LuLu Hypermarket", 
    category: "Retail", 
    // Using Wikimedia URL for immediate preview
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/LuLu_Group_International_Logo.svg/1200px-LuLu_Group_International_Logo.svg.png" 
  },
  { 
    name: "GMC Hospital", 
    category: "Healthcare", 
    // Using a placeholder representation or public URL if available
    logo: "https://thumbay.com/wp-content/uploads/2016/02/GMC-Hospital-Ajman-Change-of-Name.jpg" 
  },
  { 
    name: "Burjeel Hospital", 
    category: "Healthcare", 
    logo: "https://upload.wikimedia.org/wikipedia/en/2/26/Burjeel_Holdings_Logo.jpg" 
  },
  { 
    name: "Al Madina", 
    category: "Retail", 
    logo: "https://almadinahypermarket.com/wp-content/uploads/2020/12/logo-1.png" 
  },
  { 
    name: "Ahalia Group", 
    category: "Healthcare", 
    logo: "https://ahaliagroup.com/wp-content/uploads/2019/04/ahalia-logo.png" 
  },
  { 
    name: "Aster Hospital", 
    category: "Healthcare", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Aster_DM_Healthcare_Logo.svg/2560px-Aster_DM_Healthcare_Logo.svg.png" 
  },
  { 
    name: "Fitness First", 
    category: "Wellness", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Fitness_First_Logo_2011.png/800px-Fitness_First_Logo_2011.png" 
  },
  { 
    name: "Thumbay Hospital", 
    category: "Healthcare", 
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Thumbay_Group_logo.svg/1200px-Thumbay_Group_logo.svg.png" 
  },
];

const stats = [
  { label: "Active Clients", value: "500+", icon: Users },
  { label: "Projects Completed", value: "1200+", icon: CheckCircle2 },
  { label: "Industry Awards", value: "15", icon: Trophy },
  { label: "Years of Trust", value: "10+", icon: Handshake },
];

export default function Clients() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <Navigation />

      <main className="relative overflow-hidden bg-white mt-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-50/50 to-white">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute -top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-green-200/30 blur-[120px] rounded-full mix-blend-multiply animate-blob"
              style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }}
            />
            <div 
              className="absolute top-[20%] -right-[10%] w-[40rem] h-[40rem] bg-emerald-200/30 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000"
              style={{ transform: `translate(${cursor.x * -0.02}px, ${cursor.y * -0.02}px)` }}
            />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-4 py-2 rounded-full shadow-sm mb-8">
                <Star className="w-4 h-4 text-green-600 fill-current" />
                <span className="text-xs font-bold text-green-700 tracking-wide uppercase">Our Prestigious Portfolio</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Trusted by the UAE's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Market Leaders.
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                We are proud to be the chosen marketing partner for some of the biggest names in healthcare, retail, and wellness across the region.
              </p>
            </FadeIn>

            {/* Stats Row */}
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <stat.icon className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- CLIENT LOGO GRID --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, idx) => (
                <FadeIn key={idx} delay={idx * 50}>
                  <div className="group h-48 flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden cursor-pointer">
                    
                    {/* Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-green-50/50 group-hover:to-emerald-50/30 transition-all duration-500" />

                    {/* Logo Image */}
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 relative z-10"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {client.category}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- PARTNERSHIP BANNER --- */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn>
              <div className="bg-gray-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                    <Handshake className="w-10 h-10 text-green-400" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Ready to join our success stories?
                  </h2>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    We bring the same level of dedication and results to every client, whether you are a global brand or a local startup.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a href="/contact">
                      <button className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all text-lg">
                        Become a Client
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}