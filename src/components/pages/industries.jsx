import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
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
  ArrowRight,
  CheckCircle2,
  TrendingUp
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

/* --- INDUSTRIES DATA --- */
const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & FMCG",
    description: "Boost footfall and product visibility for retail brands, supermarkets, and furniture stores through targeted hyper-local distribution.",
    background: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Utensils,
    title: "Food & Hospitality",
    description: "Drive bookings for restaurants, cafes, and hotels using location-based marketing and appetizing visual campaigns.",
    background: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Build trust for clinics, hospitals, and wellness centers with responsible, targeted communication strategies.",
    background: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Generate high-quality leads for developers and agents through strategic community distribution and premium collateral.",
    background: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Help schools and training institutes reach parents and students effectively during key enrollment periods.",
    background: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Ticket,
    title: "Events",
    description: "Maximize attendance for exhibitions and conferences with high-reach promotional activations.",
    background: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Briefcase,
    title: "Prof. Services",
    description: "Compliant marketing solutions for banks, law firms, and financial consultants to build authority.",
    background: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Smartphone,
    title: "E-Commerce",
    description: "Bridge the gap between offline and online for digital brands using QR-driven physical campaigns.",
    background: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: FerrisWheel,
    title: "Entertainment",
    description: "Drive excitement and ticket sales for theme parks and leisure centers with engaging visual print media.",
    background: "https://images.unsplash.com/photo-1605840275083-b1d8c66699b1?auto=format&fit=crop&q=80&w=500"
  },
];

export default function Industries() {
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
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-50/40 to-white">
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
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-green-700 tracking-wide uppercase">Sector Expertise</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Solutions for Every <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Major Industry.
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                We don't believe in one-size-fits-all. Our marketing strategies are customized to the unique behavior of your specific audience and industry standards.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* --- INDUSTRIES GRID (3D FLIP CARDS) --- */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 100}>
                  <div className="group h-[400px] w-full [perspective:1000px] cursor-pointer">
                    
                    <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      
                      {/* --- FRONT SIDE --- */}
                      <div className="absolute inset-0 h-full w-full bg-white rounded-[2rem] shadow-xl border border-gray-100 flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
                        
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                          <img 
                            src={item.background} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6">
                            <item.icon className="w-7 h-7 text-white" />
                          </div>

                          <div>
                            <h3 className="text-3xl font-bold text-white leading-tight mb-2">
                              {item.title}
                            </h3>
                            <div className="h-1 w-12 bg-green-500 rounded-full" />
                          </div>
                        </div>
                        
                        {/* Hover Hint */}
                        <div className="absolute bottom-8 right-8 z-10">
                           <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-bounce">
                              <ArrowRight className="w-5 h-5 text-white" />
                           </div>
                        </div>
                      </div>

                      {/* --- BACK SIDE --- */}
                      <div className="absolute inset-0 h-full w-full bg-gray-900 rounded-[2rem] p-10 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-2xl shadow-green-500/10">
                        {/* Decoration */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                        
                        <div className="relative z-10">
                          <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                              <item.icon className="w-6 h-6 text-green-400" />
                          </div>

                          <h3 className="text-xl font-bold text-white mb-4">
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                            {item.description}
                          </p>

                          <Link 
                            to="/contact" 
                            className="block w-full px-6 py-3 rounded-full bg-green-600 text-white text-sm font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20"
                          >
                            Get Strategy
                          </Link>
                        </div>
                        
                        {/* Background Icon */}
                        <item.icon className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
                      </div>

                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US FOR INDUSTRIES --- */}
        <section className="py-24 bg-green-50">
           <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Industry Expertise Matters</h2>
                 <p className="text-lg text-gray-600 mb-8">
                    Understanding the nuances of your specific sector allows us to craft campaigns that don't just reach people, but resonate with them. We comply with industry regulations (especially for Healthcare & Education) while maximizing impact.
                 </p>
                 <ul className="space-y-4">
                    {[
                        "Tailored messaging for specific demographics",
                        "Compliance with UAE advertising regulations",
                        "Strategic location targeting for retail & events",
                        "Proven track record in high-competition sectors"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                    ))}
                 </ul>
              </FadeIn>

              <FadeIn delay={200}>
                 <div className="relative rounded-[2.5rem] overflow-hidden h-[500px] shadow-2xl group">
                    <img 
                       src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                       alt="Business Growth" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-10 left-10 right-10">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <div className="flex items-center gap-4 text-white">
                                <TrendingUp className="w-8 h-8 text-green-400" />
                                <div>
                                    <p className="font-bold text-lg">Scalable Solutions</p>
                                    <p className="text-sm text-gray-300">From startups to enterprises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn>
              <div className="bg-gray-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Don't see your industry?
                  </h2>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    We adapt quickly. Contact us to discuss how our marketing frameworks can be applied to your unique business model.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link to="/contact">
                      <button className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all text-lg">
                        Talk to an Expert
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
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