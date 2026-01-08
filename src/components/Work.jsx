import { useEffect, useState } from "react";

const industries = [
  {
    title: "Retail & FMCG",
    description:
      "Helping retail brands, supermarkets, FMCG companies, jewelry stores, and furniture brands increase footfall and product visibility through targeted distribution and promotions.",
  },
  {
    title: "Food, Hospitality & Lifestyle",
    description:
      "Driving awareness and customer engagement for restaurants, cafes, hotels, luxury brands, and travel businesses using location-based marketing and digital visibility.",
  },
  {
    title: "Healthcare & Wellness",
    description:
      "Supporting clinics, hospitals, wellness centers, beauty salons, and cosmetic brands with responsible, targeted communication and trust-based marketing.",
  },
  {
    title: "Real Estate & Automotive",
    description:
      "Generating leads and brand visibility for real estate developers, car rentals, and automobile dealers through strategic distribution and digital campaigns.",
  },
  {
    title: "Education & Institutions",
    description:
      "Helping schools, universities, training institutes, and driving schools reach parents and students through targeted offline and online campaigns.",
  },
  {
    title: "Events, Exhibitions & Promotions",
    description:
      "Promoting exhibitions, events, conferences, and activations with high-impact distribution and promotional strategies.",
  },
  {
    title: "Professional & Financial Services",
    description:
      "Supporting banks, insurance companies, lawyers, advocates, and crypto companies with compliant and effective marketing solutions.",
  },
  {
    title: "E-Commerce & Digital Brands",
    description:
      "Helping online-first brands grow traffic, visibility, and conversions using performance-driven digital campaigns.",
  },
  {
    title: "Entertainment & Leisure",
    description:
      "Promoting amusement parks and theme parks with high-reach campaigns designed to drive footfall and engagement.",
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
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Floating background */}
      <div
        className="absolute w-96 h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)` }}
      />
      <div
        className="absolute w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)` }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Industry-Specific{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Advertising & Marketing Solutions
          </span>
        </h2>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          Different industries require different marketing approaches. That’s why we
          customize our advertising, distribution, and digital marketing strategies
          based on industry behavior and audience mindset.
        </p>
      </div>

      {/* Flip Cards */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((item, idx) => (
          <div key={idx} className="flip-card h-72">
            <div className="flip-inner">
              {/* Front */}
              <div className="flip-front bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl flex items-center justify-center p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 text-center">
                  {item.title}
                </h4>
              </div>

              {/* Back */}
              <div className="flip-back bg-gradient-to-br from-orange-300 to-yellow-900 rounded-3xl p-8 text-white flex items-center justify-center text-center shadow-xl">
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flip CSS */}
      <style>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
