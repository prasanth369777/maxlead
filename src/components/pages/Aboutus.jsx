import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import {
  Users,
  Target,
  Zap,
  Award,
  Lightbulb,
  MonitorSmartphone,
  Code,
  Rocket,
} from "lucide-react";

/* Values section */
const values = [
  {
    icon: Target,
    title: "Results-Oriented",
    description:
      "Every campaign is built with a clear focus on reach, engagement, and lead generation.",
  },
  {
    icon: Zap,
    title: "Strategic Execution",
    description:
      "We combine planning, creativity, and execution across print, digital, and outdoor advertising.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "We tailor our solutions based on your business goals, audience, and market location.",
  },
  {
    icon: Award,
    title: "Reliable Quality",
    description:
      "Consistent quality, timely delivery, and transparent communication are our standards.",
  },
];

/* Process roadmap */
const processSteps = [
  {
    title: "Understanding Your Goals",
    description:
      "We analyze your business, audience, and objectives to create the right advertising strategy.",
    icon: Lightbulb,
  },
  {
    title: "Strategy & Planning",
    description:
      "Selecting the right mix of print, SMS, digital, and outdoor channels for maximum impact.",
    icon: MonitorSmartphone,
  },
  {
    title: "Execution & Distribution",
    description:
      "Campaign rollout with precise targeting, high-quality materials, and timely delivery.",
    icon: Code,
  },
  {
    title: "Optimization & Growth",
    description:
      "Monitoring performance, refining campaigns, and scaling what works best.",
    icon: Rocket,
  },
];

export default function Aboutus() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  /* Lenis smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* Cursor background effect */
  useEffect(() => {
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navigation />

      <section
        id="about"
        className="py-32 bg-gradient-to-br from-white via-gray-200 to-gray-200 relative overflow-hidden"
      >
        {/* Interactive background circles */}
        <div
          className="absolute rounded-full w-72 h-72 bg-orange-200/30 blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            transform: `translate(${cursorPos.x * 0.02}px, ${
              cursorPos.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute rounded-full w-64 h-64 bg-orange-300/30 blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            transform: `translate(${cursorPos.x * -0.02}px, ${
              cursorPos.y * -0.02
            }px)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-orange-50 rounded-full border border-orange-200 mb-6">
              <span className="text-orange-500 font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We Are{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                MaxLead Advertising
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              MaxLead Advertising is a full-service advertising agency delivering
              impactful print, flyer distribution, SMS marketing, digital
              campaigns, and outdoor promotions. We help brands increase
              visibility, reach the right audience, and generate real results.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {values.map((value, index) => (
              <Tilt
                key={index}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                className="w-full"
              >
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>

          {/* Process */}
          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Campaign{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Process
              </span>
            </h3>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-orange-300"></div>
              <div className="space-y-16">
                {processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center w-full ${
                      idx % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="w-1/2 relative">
                      <div className="absolute -left-8 top-0 bg-orange-500 p-3 rounded-full shadow-lg">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h4 className="text-xl font-bold mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-white to-gray-300 rounded-3xl p-12 border border-orange-300 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Grow Your Brand?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with MaxLead Advertising to launch high-impact campaigns
              that drive visibility, engagement, and leads.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
