import { useEffect } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Printer, 
  Globe, 
  Signpost 
} from "lucide-react";
import HeroImage from "../assests/hero-image.png";

const carouselItems = [
  { name: "Flyer Distribution", icon: MapPin },
  { name: "Printing Services", icon: Printer },
  { name: "Digital Marketing", icon: Globe },
  { name: "Outdoor Ads", icon: Signpost },
  // Duplicate items to ensure seamless infinite scroll
  { name: "Flyer Distribution", icon: MapPin },
  { name: "Printing Services", icon: Printer },
  { name: "Digital Marketing", icon: Globe },
  { name: "Outdoor Ads", icon: Signpost },
  { name: "Flyer Distribution", icon: MapPin },
  { name: "Printing Services", icon: Printer },
  { name: "Digital Marketing", icon: Globe },
  { name: "Outdoor Ads", icon: Signpost },
];

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "heroCanvas";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";
    document.getElementById("hero").appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const points = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100,100,100,0.2)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => canvas.remove();
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-100 to-gray-200 min-h-[80vh] flex flex-col justify-center pt-24"
    >
      {/* Background Stroke */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
                      text-[5rem] sm:text-[7rem] lg:text-[9rem]
                      font-extrabold text-transparent bg-clip-text
                      bg-gradient-to-r from-gray-800 via-gray-500 to-gray-300
                      opacity-10 tracking-widest pointer-events-none select-none z-0">
        MAXLEAD
      </h2>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 mb-12">
        
        {/* LEFT TEXT */}
        <div className="lg:w-1/2 text-center lg:text-left mt-10">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-full mb-6 border border-gray-300 shadow-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-800 font-semibold">
              Advertising & Distribution Experts in UAE
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-extrabold mb-6 leading-[1.1] text-gray-900 tracking-tight">
            Reach Your Audience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-orange-600 to-yellow-500">
              With Precision.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            At <strong>MaxLead Advertising</strong>, At Max Lead Advertising, we help businesses grow by connecting them directly with We help businesses grow through door to door flyer distribution, leaflet distribution, digital printing, SMS marketing, and performance-driven digital marketing solutions across UAE.
.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-base hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full font-semibold text-base border border-gray-300 hover:bg-white hover:border-gray-400 transition-all duration-300 shadow-sm"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end pointer-events-none">
          <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
            <img
              src={HeroImage}
              alt="Advertising and Distribution Services UAE"
              className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* --- CAROUSEL SECTION --- */}
      <div className="mt-16 w-full bg-white/30 backdrop-blur-md border-t border-white/40 py-4 relative z-10 overflow-hidden">
        
        {/* Fade Gradients for Carousel */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-full overflow-hidden">
          <div className="flex animate-infinite-scroll gap-12 sm:gap-24 px-4 items-center">
            {carouselItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 group cursor-default select-none">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all duration-300">
                  <item.icon className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
                </div>
                <span className="text-lg font-bold text-gray-700 whitespace-nowrap group-hover:text-gray-900 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles for Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}