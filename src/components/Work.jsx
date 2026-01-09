import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import { 
  ShoppingBag, 
  Utensils, 
  HeartPulse, 
  Building2, 
  GraduationCap, 
  Ticket, 
  Briefcase, 
  Smartphone, 
  FerrisWheel,
  ArrowRight
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & FMCG",
    description: "Boost footfall and product visibility for retail brands, supermarkets, and furniture stores through targeted hyper-local distribution.",
    color: "from-blue-400 to-indigo-600"
  },
  {
    icon: Utensils,
    title: "Food & Hospitality",
    description: "Drive bookings for restaurants, cafes, and hotels using location-based marketing and appetizing visual campaigns.",
    color: "from-orange-400 to-red-600"
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Build trust for clinics, hospitals, and wellness centers with responsible, targeted communication strategies.",
    color: "from-emerald-400 to-teal-600"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Generate high-quality leads for developers and agents through strategic community distribution and premium collateral.",
    color: "from-purple-400 to-violet-600"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Help schools and training institutes reach parents and students effectively during key enrollment periods.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Ticket,
    title: "Events",
    description: "Maximize attendance for exhibitions and conferences with high-reach promotional activations.",
    color: "from-pink-400 to-rose-600"
  },
  {
    icon: Briefcase,
    title: "Prof. Services",
    description: "Compliant marketing solutions for banks, law firms, and financial consultants to build authority.",
    color: "from-slate-400 to-slate-600"
  },
  {
    icon: Smartphone,
    title: "E-Commerce",
    description: "Bridge the gap between offline and online for digital brands using QR-driven physical campaigns.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: FerrisWheel,
    title: "Entertainment",
    description: "Drive excitement and ticket sales for theme parks and leisure centers with engaging visual print media.",
    color: "from-fuchsia-400 to-purple-600"
  },
];

export default function IndustrySolutions() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div 
            className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-orange-200/30 rounded-full blur-[120px]"
            style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)` }}
          />
          <div 
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"
            style={{ transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)` }}
          />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-orange-600 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Tailored Strategies
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Solutions for Every <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-orange-600 to-orange-500">
              Major Industry
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             We don't believe in one-size-fits-all. Our marketing strategies are customized to the unique behavior of your specific audience.
          </p>
        </div>

        {/* --- 3D CARD GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="group h-[380px] w-full [perspective:1000px]">
              
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
                  {/* Abstract bg shape */}
                  <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-gray-900" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <div className="relative z-10 flex items-center justify-between border-t border-gray-100 pt-6">
                    <span className="text-sm font-medium text-gray-400">0{idx + 1}</span>
                    <div className="flex items-center gap-2 text-sm font-bold text-orange-600 group-hover:gap-3 transition-all">
                      Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div className="absolute inset-0 h-full w-full bg-gray-900 rounded-[2rem] p-10 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-2xl shadow-orange-500/10">
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                        <item.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                      {item.description}
                    </p>

                    {/* 2. REPLACED BUTTON WITH LINK */}
                    <Link 
                      to="/contact" 
                      className="block w-full px-6 py-3 rounded-full bg-orange-600 text-white text-sm font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/20"
                    >
                      Explore Strategy
                    </Link>
                  </div>
                  
                  {/* Decorative faint icon bg */}
                  <item.icon className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}