import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";

export default function FlyerDistribution() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const headingWords = [
    "Flyer",
    "Distribution",
    "Services",
    "in",
    "Dubai,",
    "UAE",
  ];

  return (
    <>
      {/* NAVIGATION */}
      <Navigation />

      {/* PAGE CONTENT */}
      <section className="relative pt-44 pb-36 bg-[#fafafa] overflow-hidden">
        {/* Subtle Background Blobs */}
        <div
          className="absolute w-[420px] h-[420px] bg-orange-200/30 rounded-full blur-[120px]"
          style={{
            transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-[360px] h-[360px] bg-yellow-200/30 rounded-full blur-[120px]"
          style={{
            transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)`,
          }}
        />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 space-y-28">

          {/* HERO */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="flex flex-wrap justify-center gap-x-3 text-4xl md:text-6xl font-extrabold text-gray-900 mb-8">
              {headingWords.map((word, i) => (
                <span
                  key={word}
                  className="opacity-0 animate-word"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              In a competitive market like the UAE, visibility plays a major role
              in business growth. At <strong>Max Lead Advertising</strong>, we
              provide professional flyer distribution services in Dubai, UAE that
              help businesses connect directly with their target audience.
              Structured planning ensures your message reaches the right people
              at the right location.
            </p>
          </div>

          {/* INTRO */}
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Professional Door to Door Flyer Distribution in Dubai, UAE
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Flyer distribution remains one of the most effective offline
              marketing methods when executed correctly. Physical flyers are
              tangible, visible, and memorable, delivering strong local impact.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "New product launches",
                "Store openings",
                "Offers and discounts",
                "Events and exhibitions",
                "Brand awareness campaigns",
              ].map((item) => (
                <li
                  key={item}
                  className="bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="max-w-7xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Our Flyer Distribution Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Door-to-Door Distribution",
                  text:
                    "Delivering flyers directly to villas, apartments, and residential communities with precise planning.",
                },
                {
                  title: "Hand-to-Hand Distribution",
                  text:
                    "Personal distribution in busy streets, malls, metro stations, and commercial zones.",
                },
                {
                  title: "Retail & In-Store Distribution",
                  text:
                    "Placement inside supermarkets and retail outlets where customers are ready to buy.",
                },
                {
                  title: "Residential Area Distribution",
                  text:
                    "Targeting communities based on demographics, income groups, and lifestyle.",
                },
                {
                  title: "Commercial Area Distribution",
                  text:
                    "Effective for B2B marketing through offices and corporate locations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PROCESS */}
          <div className="max-w-7xl mx-auto space-y-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Our Door-to-Door Flyer Distribution Process
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                "Understanding Objectives",
                "Area & Audience Planning",
                "Distribution Strategy",
                "Execution",
                "Monitoring & Reporting",
              ].map((step, i) => (
                <div
                  key={step}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
                >
                  <div className="text-3xl font-extrabold text-orange-500 mb-3">
                    0{i + 1}
                  </div>
                  <p className="font-semibold text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHY CHOOSE */}
          <div className="bg-white border border-gray-200 rounded-3xl p-14 max-w-7xl mx-auto text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Max Lead Advertising?
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 font-medium">
              {[
                "Experienced advertising & distribution company",
                "UAE-wide coverage",
                "Trained & supervised teams",
                "Transparent & ethical practices",
              ].map((item) => (
                <li
                  key={item}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WORD ANIMATION */}
        <style>{`
          .animate-word {
            animation: wordFade 0.6s ease forwards;
          }
          @keyframes wordFade {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
