import { useEffect, useState, useRef } from "react";
import { 
  MapPin, 
  Users, 
  Megaphone, 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  Clock, 
  ShieldCheck, 
  BarChart, 
  ShoppingBag, 
  Home,
  Building2,
  Phone,
  MessageCircle
} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";

/* IMAGES */
import flyerHero from "../../assests/Flyers/flyerhero.gif";
import flyerService1 from "../../assests/Flyers/flyerService1.png";
import flyerService2 from "../../assests/Flyers/flyerService2.png";
import flyerService3 from "../../assests/Flyers/flyerService3.png";
import flyerCTA from "../../assests/Flyers/flyerService1.png"; // Using existing image for bottom section

/* --- ANIMATION COMPONENT (No external libs needed) --- */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function FlyerDistribution() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#fff7ed] via-white to-[#fafafa] overflow-hidden">
        {/* BACKGROUND BLOBS */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[120px] mix-blend-multiply filter"
          style={{ transform: `translate(${cursorPos.x * 0.03}px, ${cursorPos.y * 0.03}px)` }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply filter"
          style={{ transform: `translate(${cursorPos.x * -0.03}px, ${cursorPos.y * -0.03}px)` }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 space-y-32">

          {/* 1. HERO SECTION */}
          <div className="grid lg:grid-cols-2 gap-12 items-center pt-10">
            <FadeIn>
              <div className="space-y-8 text-center lg:text-left">
                 <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full">
                    <Megaphone className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-bold text-orange-800 tracking-wide uppercase">#1 Flyer Distribution UAE</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                  Flyer Distribution Services in{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Dubai, UAE
                  </span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed">
                  In a competitive market like the UAE, visibility plays a major role in business growth. 
                  At <strong>Max Lead Advertising</strong>, we provide professional flyer distribution services designed to help businesses connect directly with their target audience.
                </p>

                {/* Trusted Avatar Snippet */}
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 opacity-90">
                  <div className="flex -space-x-4">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                      "https://images.unsplash.com/photo-1521119989659-a83eee488058?auto=format&fit=crop&w=64&h=64",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Trusted Client ${i + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-gray-200"
                      />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Trusted by <span className="text-gray-900 font-bold block sm:inline">500+ Businesses</span> in UAE
                  </div>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition transform hover:-translate-y-1">
                    Get a Quote
                  </button>
                  <button className="px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-700 font-bold shadow-sm hover:bg-gray-50 transition">
                    View Areas
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-[2rem] transform rotate-3 opacity-20 blur-lg"></div>
                <img
                  src={flyerHero}
                  alt="Flyer distribution services in Dubai"
                  className="relative w-full rounded-[2rem] shadow-2xl border-4 border-white"
                />
              </div>
            </FadeIn>
          </div>

          {/* 2. ABOUT / INTRO SECTION */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Professional Door to Door Flyer Distribution in Dubai
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                    Flyer distribution remains one of the most effective offline marketing methods when executed correctly. Unlike digital ads that can be skipped, physical flyers are tangible and memorable.
                    </p>
                    <p>
                    As one of the trusted flyer distribution companies in Dubai UAE, we specialize in door to door leaflet distribution and targeted campaigns.
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={200}>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-orange-100 p-2 rounded-lg"><Layers className="w-5 h-5 text-orange-600"/></span>
                        We help businesses promote:
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                        {[
                        "New product launches",
                        "Store openings & Retail offers",
                        "Events and exhibitions",
                        "Brand awareness campaigns",
                        "Real Estate & Healthcare promotions"
                        ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            {item}
                        </li>
                        ))}
                    </ul>
                </div>
            </FadeIn>
          </div>

          {/* 3. SERVICES SECTION */}
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Distribution Services</h2>
               <p className="text-lg text-gray-600">We offer a complete range of flyer and leaflet distribution solutions across Dubai and UAE, planned carefully to ensure coverage and targeting.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <FadeIn delay={100}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img src={flyerService1} alt="Door to Door" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                                <Home className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Door-to-Door</h3>
                            <p className="text-gray-600 flex-1">Our door to door flyer distribution service involves delivering flyers directly to homes in villas, apartments, and residential communities. This method is ideal for businesses targeting local customers, families, and neighborhood audiences. Every distribution is planned area-wise to ensure proper coverage..</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Service 2 */}
                <FadeIn delay={200}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img src={flyerService2} alt="Hand to Hand" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Hand-to-Hand</h3>
                            <p className="text-gray-600 flex-1">Hand-to-hand distribution allows direct interaction with potential customers. Flyers are distributed personally in busy streets, malls, metro stations, and commercial zones. This method works well for promotions, events, and time-sensitive campaigns.</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Service 3 */}
                <FadeIn delay={300}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img src={flyerService3} alt="Commercial Distribution" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Retail and In-Store Distribution</h3>
                            <p className="text-gray-600 flex-1">We place flyers inside supermarkets, retail outlets, shopping malls, and stores where customers are already in a buying mindset. This increases the chances of response and engagement, especially for FMCG brands, restaurants, and service providers.</p>
                        </div>
                    </div>
                </FadeIn>
                {/* Service 4*/}
                <FadeIn delay={300}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img src={flyerService3} alt="Commercial Distribution" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Residential Area Distribution</h3>
                            <p className="text-gray-600 flex-1">Residential area distribution focuses on specific communities based on demographics, income groups, and lifestyle. We distribute flyers in apartments, villas, gated communities, and housing societies to ensure precise targeting.</p>
                        </div>
                    </div>
                </FadeIn>
                {/* Service 5*/}
                <FadeIn delay={300}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img src={flyerService3} alt="Commercial Distribution" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Commercial Area Distribution</h3>
                            <p className="text-gray-600 flex-1">For B2B and service-based businesses, commercial area distribution is highly effective. Flyers are distributed in offices, business centers, and corporate locations across Dubai and UAE.
</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
          </div>

          {/* 4. WHY IT WORKS (Grid) */}
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>

             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Flyer Distribution Still Works in UAE</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Despite the digital boom, the UAE's high residential density and strong retail culture make physical marketing impactful. It offers direct touch-points that screens cannot match.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Tangible & Visible: Hard to ignore compared to digital ads.",
                            "Cost-Effective: Lower CPM compared to mass media.",
                            "Hyper-Local: Target specific neighborhoods precisely.",
                            "High Recall: Physical interaction improves memory."
                        ].map((item, i) =>(
                            <li key={i} className="flex items-center gap-3">
                                <span className="bg-orange-500/20 p-1 rounded-full"><CheckCircle className="w-5 h-5 text-orange-400"/></span>
                                <span className="text-gray-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                </FadeIn>
                <FadeIn delay={200} className="grid grid-cols-2 gap-4">
                    {[
                        { label: "Direct Reach", icon: MapPin },
                        { label: "Audience Targeting", icon: Users },
                        { label: "High Visibility", icon: Megaphone },
                        { label: "Quick Launch", icon: Clock },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                            <stat.icon className="w-8 h-8 text-orange-400 mb-3" />
                            <h4 className="font-bold text-lg">{stat.label}</h4>
                        </div>
                    ))}
                </FadeIn>
             </div>
          </div>

          {/* 5. PROCESS SECTION */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Our Distribution Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                    { title: "Goal Setting", icon: ShieldCheck, desc: "Discuss goals & target audience." },
                    { title: "Planning", icon: MapPin, desc: "Identify suitable residential/commercial areas." },
                    { title: "Strategy", icon: Layers, desc: "Select door-to-door or hand-to-hand." },
                    { title: "Execution", icon: Users, desc: "Trained team executes the campaign." },
                    { title: "Reporting", icon: BarChart, desc: "Track progress and transparency." },
                ].map((step, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition h-full">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-orange-200 shadow-lg">
                                {i + 1}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-500">{step.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
          </div>

           {/* 6. WHY CHOOSE US & AREAS */}
           <div className="grid md:grid-cols-2 gap-12 bg-orange-50 rounded-3xl p-10 border border-orange-100">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Why Choose Max Lead?</h3>
                    <ul className="space-y-4">
                        {[
                            "Experienced advertising & distribution company",
                            "Trained and supervised distribution teams",
                            "Transparent and ethical practices",
                            "Integrated offline & online support"
                        ].map((point, i) => (
                            <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                                <span className="text-gray-700 font-medium">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-6">Areas We Cover</h3>
                    <p className="mb-4 text-gray-600">Our flyer and leaflet distribution services are available across major locations in UAE.</p>
                    <div className="flex flex-wrap gap-2">
                        {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((city) => (
                            <span key={city} className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 shadow-sm">
                                {city}
                            </span>
                        ))}
                    </div>
                </div>
           </div>


          {/* 7. FAQ SECTION */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {[
                {
                  q: "What is door to door flyer distribution in Dubai?",
                  a: "Door to door flyer distribution involves delivering flyers directly to homes in selected residential areas. It helps businesses reach local customers effectively.",
                },
                {
                  q: "Is flyer distribution legal in UAE?",
                  a: "Yes, flyer distribution is allowed when conducted responsibly and in compliance with local guidelines. We ensure ethical and professional execution.",
                },
                {
                  q: "Which businesses benefit from flyer distribution?",
                  a: "Retail stores, restaurants, real estate, clinics, events, education institutes, and service providers benefit greatly from flyer distribution.",
                },
                {
                  q: "Do you offer targeted flyer distribution?",
                  a: "Yes, we provide targeted area distribution based on location, audience type, and campaign goals.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 50}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-orange-300 transition cursor-default">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-orange-500">?</span> {item.q}
                    </h3>
                    <p className="text-gray-600 pl-5 border-l-2 border-gray-100">{item.a}</p>
                    </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 8. CTA SECTION */}
         {/* 8. CTA SECTION */}
<FadeIn>
  <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 text-white text-center p-12 md:p-24">
    
    <div className="absolute inset-0 opacity-40">
      <img
        src={flyerCTA}
        alt="Background"
        className="w-full h-full object-cover blur-sm"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>

    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        Start Your Flyer Distribution Campaign Today
      </h2>

      <p className="text-lg text-gray-300">
        If you are looking for reliable flyer distribution services in Dubai, UAE,
        Max Lead Advertising is here to help. Reach the right audience with precision.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">

        {/* CONTACT US */}
        <a href="/contact">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-orange-500/40 transition flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Contact Us Free
          </button>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/971XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            WhatsApp Quote
          </button>
        </a>

      </div>
    </div>
  </div>
</FadeIn>


        </div>
      </section>

      <Footer />
    </>
  );
}