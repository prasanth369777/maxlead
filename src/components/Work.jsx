import { ExternalLink} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Citywide Flyer Distribution",
    category: "Print & Distribution",
    description:
      "Large-scale flyer printing and door-to-door distribution campaign covering residential and commercial areas.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Flyer Printing", "Door-to-Door", "Targeted Areas", "Local Marketing"],
    color: "from-orange-300 to-red-400",
  },
  {
    title: "Retail Promotion Printing",
    category: "Print & Distribution",
    description:
      "High-quality posters, flyers, and banners printed for retail promotions and in-store visibility.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Posters", "Banners", "Flyer Printing", "Brand Visibility"],
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Bulk SMS Campaign",
    category: "SMS Marketing",
    description:
      "Targeted bulk SMS campaign designed to increase engagement, responses, and customer reach.",
    image:
      "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Bulk SMS", "Promotional SMS", "Customer Engagement"],
    color: "from-yellow-300 to-orange-400",
  },
  {
    title: "SMS Lead Generation",
    category: "SMS Marketing",
    description:
      "Strategic SMS marketing campaign focused on generating inquiries and qualified leads.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Targeted SMS", "Lead Generation", "Campaign Tracking"],
    color: "from-orange-300 to-red-500",
  },
  {
    title: "Digital Lead Ads Campaign",
    category: "Digital Advertising",
    description:
      "Paid advertising campaign across Google and Meta focused on driving high-quality leads.",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Google Ads", "Meta Ads", "Lead Generation"],
    color: "from-orange-400 to-yellow-500",
  },
  {
    title: "Outdoor Brand Activation",
    category: "Outdoor Advertising",
    description:
      "On-ground brand activation and kiosk advertising campaign to maximize local brand visibility.",
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Kiosk Advertising", "Event Promotion", "Brand Activation"],
    color: "from-orange-300 to-red-400",
  },
];

export default function Work() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="work"
      className="relative py-40 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-300 to-red-400 rounded-full blur-3xl opacity-30 pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute w-80 h-80 bg-gradient-to-r from-orange-200 to-yellow-400 rounded-full blur-3xl opacity-20 pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate(${cursorPos.x * -0.03}px, ${cursorPos.y * -0.03}px)`,
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full border border-orange-300 mb-6">
            <span className="text-orange-600 font-semibold">
              Outdoor & Portfolio
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Outdoor &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Advertising Work
            </span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            High-impact outdoor advertising and integrated campaigns executed
            across the UAE.
          </p>
        </div>

        {/* Outdoor Advertising Section */}
        <div className="max-w-5xl mx-auto mb-28 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Outdoor & Other Advertising
          </h3>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            For large-scale brand visibility, we deliver premium outdoor
            advertising solutions across high-traffic locations in the UAE.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Bridge Banners",
              "Unipoles",
              "Lamp Post Advertising",
              "Rooftop Advertising",
              "LED Billboards",
              "Glass Graphics",
              "Hoardings",
              "Taxi, Truck & Van Advertising",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-orange-200 rounded-xl px-6 py-4 text-gray-700 font-medium shadow-sm hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all"
          >
            Explore Outdoor Advertising Solutions
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl border border-orange-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-10 group-hover:opacity-30 transition-opacity`}
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-orange-600">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
