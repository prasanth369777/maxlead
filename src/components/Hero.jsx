import { useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroImage from "../assests/hero-image.png";

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

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.remove();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden
                 bg-gradient-to-br from-white via-gray-100 to-gray-200
                 min-h-[110vh] flex items-center"
    >
      {/* Background Stroke Text */}
      <h2 className="absolute inset-0 flex items-center justify-center
                     text-[6rem] sm:text-[8rem] lg:text-[10rem]
                     font-extrabold text-transparent bg-clip-text
                     bg-gradient-to-r from-gray-800 via-gray-500 to-gray-300
                     opacity-10 tracking-widest pointer-events-none select-none">
        MAXLEAD
      </h2>

      {/* Floating Blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gray-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* CONTENT */}
      <div
        className="relative z-10 max-w-screen-2xl mx-auto
                   px-4 sm:px-6 lg:px-16 w-full
                   flex flex-col lg:flex-row items-center justify-between
                   gap-14 lg:gap-24
                   mt-24 sm:mt-28 lg:mt-0"
      >
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2
                          bg-white/70 backdrop-blur-sm
                          px-4 py-2 rounded-full mb-6
                          border border-gray-300">
            <Sparkles className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-800 font-semibold">
              Advertising & Distribution Experts in UAE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl
                         lg:text-[4.5rem] xl:text-[5.2rem]
                         font-extrabold mb-8 leading-[1.05] text-gray-900">
            Advertising & Distribution Company in
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              UAE That Helps You Reach the Right Audience
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl
                        text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            At <strong>MaxLead Advertising</strong>, we help businesses grow by
            connecting them directly with customers through door-to-door flyer
            distribution, professional printing services, SMS marketing, and
            result-driven digital marketing across UAE.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-700
                         text-white rounded-full font-semibold text-lg
                         transition-all duration-300
                         hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/40"
            >
              <span className="flex items-center">
                Get a Free Consultation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="px-10 py-5 bg-white/70 backdrop-blur-sm
                         text-gray-900 rounded-full font-semibold text-lg
                         border-2 border-gray-300
                         hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Request a Quick Quote
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 relative flex justify-center items-end pointer-events-none">
          <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-gray-300/30 rounded-full blur-3xl"></div>
            <img
              src={HeroImage}
              alt="Advertising and Distribution Services UAE"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
