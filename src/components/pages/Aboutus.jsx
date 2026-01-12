import { useEffect, useState } from "react";
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
  TrendingUp,
  MapPin,
  Smile,
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

/* NEW: Impact Stats */
const stats = [
  { label: "Campaigns Launched", value: "500+", icon: Rocket },
  { label: "Flyers Distributed", value: "1M+", icon: MapPin },
  { label: "Happy Clients", value: "200+", icon: Smile },
  { label: "Years in Business", value: "10+", icon: Award },
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
        className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden mt-10"
      >
        {/* Interactive background circles - GREEN THEME */}
        <div
          className="absolute rounded-full w-72 h-72 bg-green-200/30 blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute rounded-full w-64 h-64 bg-emerald-300/30 blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- HEADER SECTION --- */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
              <span className="text-green-600 font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We Are{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
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

          {/* --- VALUES GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {values.map((value, index) => (
              <Tilt
                key={index}
                glareEnable={true}
                glareMaxOpacity={0.1}
                scale={1.05}
                className="w-full"
              >
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 mb-6 group-hover:scale-110 transition-transform">
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

          {/* --- NEW SECTION: OUR IMPACT IN NUMBERS --- */}
          <div className="mb-24 relative rounded-[3rem] bg-gray-900 overflow-hidden px-8 py-20 text-white">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]"></div>
             
             <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Impact in Numbers</h3>
                <p className="text-gray-300 mb-12">
                  We take pride in the measurable results we deliver for our clients across the UAE.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                       <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                       <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                       <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* --- PROCESS TIMELINE --- */}
          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Campaign{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Process
              </span>
            </h3>

            <div className="relative max-w-4xl mx-auto">
              {/* Green vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-green-200"></div>
              
              <div className="space-y-16">
                {processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center w-full ${
                      idx % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="w-1/2 relative px-8">
                      {/* Green Center Dot/Icon */}
                      <div className={`absolute top-0 bg-green-500 p-3 rounded-full shadow-lg z-10 ${idx % 2 === 0 ? "-right-8" : "-left-8"}`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-bold mb-2 text-gray-900">
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

          {/* --- CTA SECTION --- */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200 text-center relative overflow-hidden">
            <div className="relative z-10">
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
                className="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 flex items-center gap-2 mx-auto"
                >
                Get Started Now <TrendingUp className="w-5 h-5" />
                </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}