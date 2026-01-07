import { useEffect, useState } from "react";
import {
  Lightbulb,
  Layout,
  Rocket,
  BarChart3,
  Repeat,
} from "lucide-react";

const steps = [
  {
    title: "Strategy & Planning",
    description:
      "We analyze your business goals, audience, and select the most effective advertising channels.",
    icon: Lightbulb,
  },
  {
    title: "Creative Development",
    description:
      "Designing creatives, ad copies, print materials, and promotional assets.",
    icon: Layout,
  },
  {
    title: "Campaign Execution",
    description:
      "Launching print distribution, SMS campaigns, digital ads, and on-ground promotions.",
    icon: Rocket,
  },
  {
    title: "Tracking & Analytics",
    description:
      "Monitoring reach, engagement, and performance across all channels.",
    icon: BarChart3,
  },
  {
    title: "Optimization & Scaling",
    description:
      "Optimizing campaigns and scaling what works best to maximize ROI.",
    icon: Repeat,
  },
];

export default function ProcessVertical() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Floating circles */}
      <div
        className="absolute w-72 h-72 bg-orange-300/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate(${cursorPos.x * 0.03}px, ${cursorPos.y * 0.03}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-4">
        <div className="inline-block px-4 py-2 bg-white/50 rounded-full border border-gray-300 mb-6">
          <span className="text-orange-500 font-semibold">Process</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Workflow
          </span>
        </h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto">
          A proven step-by-step process to plan, execute, optimize, and scale
          successful advertising campaigns.
        </p>
      </div>

      {/* PROCESS FLOW */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        {/* Desktop Horizontal */}
        <div className="hidden lg:grid grid-cols-5 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="text-center relative">
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center shadow-lg animate-bounce">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line */}
                {idx !== steps.length - 1 && (
                  <div className="absolute top-8 right-[-50%] w-full h-px bg-orange-300"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical */}
        <div className="lg:hidden space-y-16 max-w-md mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center shadow-lg animate-bounce">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Extra floating elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-orange-300/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `}
      </style>
    </section>
  );
}
