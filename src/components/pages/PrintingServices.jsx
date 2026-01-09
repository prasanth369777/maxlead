import { useEffect, useState, useRef } from "react";
import { 
  CheckCircle, 
  Printer, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Layers, 
  Zap, 
  Palette, 
  Box 
} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";

/* IMAGES */
// Note: Keeping your 'assests' spelling as per your folder structure
import printingHero from "../../assests/printing/printingHero.gif";
import printingService1 from "../../assests/printing/printingService1.png";
import printingService2 from "../../assests/printing/printingService2.png";
import printingService3 from "../../assests/printing/printingService3.png";

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

export default function PrintingServices() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Services Data Structure for cleaner rendering
  const serviceCategories = [
    {
      title: "Marketing & Promotional",
      desc: "Increase brand visibility and drive customer action with high-impact promotional tools.",
      items: ["Flyers & Leaflets", "Posters", "Banners", "Stickers"],
      icon: Zap,
      color: "text-orange-500",
      bg: "bg-orange-50",
      img: printingService1 // Mapping your image here
    },
    {
      title: "Corporate & Office",
      desc: "Professional stationery that represents your brand identity with consistency and quality.",
      items: ["Business Cards", "Letterheads", "Envelopes", "Company Profiles"],
      icon: Box,
      color: "text-blue-500",
      bg: "bg-blue-50",
       img: null // Or add specific image if available
    },
    {
      title: "Large Format Printing",
      desc: "Essential for outdoor visibility, retail branding, and delivering impact at scale.",
      items: ["Flex Banners", "Roll-up Standees", "Hoardings", "Backdrops"],
      icon: Layers,
      color: "text-purple-500",
      bg: "bg-purple-50",
      img: printingService2
    },
    {
      title: "Event & Exhibition",
      desc: "Visual consistency for conferences and events. Fast timelines and professional results.",
      items: ["Event Branding", "Booth Graphics", "Stage Backdrops", "Display Boards"],
      icon: Palette,
      color: "text-pink-500",
      bg: "bg-pink-50",
      img: null
    },
    {
      title: "Branding & Custom",
      desc: "Extend your presence across vehicles, walls, and custom display areas.",
      items: ["Vehicle Branding", "Wall Graphics", "Custom Signage", "Promotional Displays"],
      icon: Sparkles,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      img: printingService3
    },
    {
      title: "Specialty Printing",
      desc: "Premium finishes and unique display solutions for high-end impressions.",
      items: ["UV Printing", "Acrylic Printing", "Foam Board Printing"],
      icon: Printer,
      color: "text-teal-500",
      bg: "bg-teal-50",
      img: null
    }
  ];

  return (
    <>
      <Navigation />

      <main className="relative overflow-hidden bg-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute -top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-orange-200/30 blur-[120px] rounded-full mix-blend-multiply transition-transform duration-75 ease-out"
              style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }} 
            />
            <div 
              className="absolute top-[20%] -right-[10%] w-[40rem] h-[40rem] bg-yellow-200/30 blur-[120px] rounded-full mix-blend-multiply transition-transform duration-75 ease-out"
              style={{ transform: `translate(${cursor.x * -0.03}px, ${cursor.y * -0.03}px)` }} 
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <FadeIn className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-bold text-orange-700 tracking-wide uppercase">Premier Printing in UAE</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Digital Printing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Services in Dubai.
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                As a trusted digital printing company in UAE, we work with businesses of all sizes to deliver high-impact printed materials that reflect brand identity and create a lasting impression.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:shadow-orange-500/20 hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1">
                  Get a Free Quote
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold hover:border-orange-200 hover:bg-orange-50 transition-all duration-300">
                  View Portfolio
                </button>
              </div>

              {/* Trusted By - Avatar Group */}
              <div className="flex items-center gap-4 pt-8 opacity-90">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
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
                  Trusted by <span className="text-gray-900 font-bold">500+ Businesses</span> in UAE
                </div>
              </div>
            </FadeIn>

            {/* Right Image */}
            <FadeIn delay={200} className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full aspect-[4/5] lg:aspect-auto h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700">
                <img 
                  src={printingHero} 
                  alt="Printing Services Dubai" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-[220px]">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-gray-900">Quality Assured</span>
                  </div>
                  <p className="text-xs text-gray-500">High-resolution prints with premium finishing and color accuracy.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- INTRODUCTION SECTION --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Trusted Digital Printing Company in UAE
              </h2>
              <div className="h-1 w-20 bg-orange-500 rounded-full mb-8" />
            </FadeIn>
            <FadeIn delay={200} className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Printing is more than putting ink on paper. It is about representing
                your brand the right way. At <strong>Max Lead Advertising</strong>,
                we understand how important print quality, color accuracy, and
                finishing are to your business image.
              </p>
              <p>
                We serve as a full-service printing company in Dubai, supporting
                marketing campaigns, corporate branding, retail promotions, events,
                and exhibitions. Whether you need short-run prints or bulk printing, 
                we guide you through material selection.
              </p>
            </FadeIn>
          </div>
        </section>

     {/* --- SERVICES GRID (UPDATED WITH IMAGES) --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Printing Services</h2>
              <p className="text-xl text-gray-600">
                We offer a wide range of printing services in Dubai and across UAE, organized clearly so you can find the perfect solution.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service, idx) => (
                <FadeIn key={idx} delay={idx * 100}>
                  <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 h-full flex flex-col relative overflow-hidden">
                    {/* Hover Gradient Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/50 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />
                    
                    <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>

                    {/* Image Preview (Now Available for All) */}
                    {service.img && (
                      <div className="mb-6 rounded-xl overflow-hidden h-40 w-full">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Includes:</p>
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY PROFESSIONAL PRINTING MATTERS --- */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden relative">
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-20" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20" />

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <FadeIn>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Why Professional Printing Matters
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Poor print quality can weaken trust, while well-designed and high-quality prints enhance credibility. Professional printing supports your marketing efforts effectively.
                  </p>
                  <button className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition">
                    Learn more about our quality <ArrowRight className="w-4 h-4" />
                  </button>
                </FadeIn>

                <FadeIn delay={200} className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Consistent color accuracy",
                    "Durable materials",
                    "Clean finishing",
                    "Better brand perception",
                    "Long-term usability",
                    "High-res output"
                  ].map((benefit, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Printing Process</h2>
              <p className="text-gray-600">A structured workflow to ensure quality and timeliness.</p>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { title: "Understand", desc: "We discuss purpose & quantity." },
                  { title: "Guidance", desc: "Advice on layout & paper." },
                  { title: "Production", desc: "Modern digital printing." },
                  { title: "Quality Check", desc: "Strict inspection." },
                  { title: "Delivery", desc: "Safe delivery across UAE." },
                ].map((step, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center hover:-translate-y-2 transition duration-300 h-full flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg ring-4 ring-white">
                        {i + 1}
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US & INDUSTRIES --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
            {/* Left: Why Choose */}
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Max Lead?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced digital printing company",
                  "Wide range of printing solutions",
                  "Modern printing technology",
                  "Fast turnaround times",
                  "Competitive pricing",
                  "Reliable support and guidance",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: Industries */}
            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Industries We Serve</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Retail & FMCG",
                  "Real Estate",
                  "Events & Exhibitions",
                  "Restaurants & Hospitality",
                  "Healthcare & Clinics",
                  "Education & Training Institutes",
                ].map((ind, i) => (
                  <span key={i} className="px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium transition cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What types of printing services do you offer in Dubai?", a: "We offer promotional printing, corporate printing, large-format printing, event printing, branding prints, and specialty printing." },
                { q: "Do you provide bulk printing services in UAE?", a: "Yes, we handle both small-run and bulk printing projects efficiently." },
                { q: "What is large format printing used for?", a: "Large format printing is used for banners, hoardings, standees, and backdrops for branding and visibility." },
                { q: "Do you assist with design and material selection?", a: "Yes, our team provides guidance on design formats, materials, and finishes." },
                { q: "What is your delivery coverage?", a: "We provide printing services and delivery across Dubai and UAE." }
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <details className="group bg-white border border-gray-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-orange-300 transition-colors">
                    <summary className="flex items-center justify-between font-bold text-lg text-gray-900">
                      {faq.q}
                      <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                        <ArrowRight className="w-5 h-5 text-orange-500 rotate-90" />
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed border-t pt-4 border-gray-100">
                      {faq.a}
                    </p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

  {/* --- CTA SECTION --- */}
<section className="py-20 bg-white">
  <FadeIn className="max-w-6xl mx-auto px-6">
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Ready to print?
        </h2>

        <p className="text-xl text-gray-600">
          If you are looking for reliable digital printing services in Dubai, UAE,
          Max Lead Advertising is ready to support your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          
          {/* CONTACT US */}
          <a href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-bold shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all">
              <Phone className="w-5 h-5" />
              Contact Us Today
            </button>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/971XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 bg-white border border-gray-300 text-gray-800 rounded-full font-bold hover:bg-gray-50 flex items-center justify-center gap-2 transition-all">
              <MessageCircle className="w-5 h-5 text-green-500" />
              WhatsApp Quote
            </button>
          </a>

        </div>
      </div>
    </div>
  </FadeIn>
</section>


      </main>
      <Footer />
    </>
  );
}