import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { ExternalLink } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const blogs = [
  {
    title: "How Flyer Distribution Drives Local Business Growth",
    description:
      "Learn how targeted flyer distribution can increase local visibility, foot traffic, and customer inquiries.",
    author: "MaxLead Team",
    date: "Oct 1, 2025",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Flyer Distribution", "Local Marketing", "Print Advertising"],
  },
  {
    title: "Bulk SMS Marketing: Best Practices for Higher Engagement",
    description:
      "Discover proven strategies to run effective bulk SMS campaigns that boost engagement and conversions.",
    author: "MaxLead Team",
    date: "Sep 22, 2025",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["SMS Marketing", "Bulk SMS", "Lead Generation"],
  },
  {
    title: "Print Advertising That Still Works in the Digital Age",
    description:
      "Why flyers, posters, and banners remain powerful tools for brand awareness and local promotions.",
    author: "MaxLead Team",
    date: "Sep 15, 2025",
    image:
      "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Printing Services", "Brand Promotion", "Offline Marketing"],
  },
  {
    title: "Generating Leads with Google & Meta Ads",
    description:
      "A practical guide to running paid ad campaigns that deliver qualified leads and measurable ROI.",
    author: "MaxLead Team",
    date: "Aug 30, 2025",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Digital Marketing", "Google Ads", "Meta Ads"],
  },
];

const popularNews = [
  {
    title: "AI in FinTech: Revolutionizing Banking UX",
    description: "Learn how AI is shaping the future of financial applications.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Top E-Commerce Trends 2025",
    description:
      "Discover strategies to maximize sales and customer retention online.",
    image:
      "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "The Power of Branding in Startups",
    description: "Tips for building a strong brand identity that stands out.",
    image:
      "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function BlogSectionClassic() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navigation />

      {/* Blog Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 overflow-hidden">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-orange-500">Blog Posts</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Insights, strategies, and real-world marketing knowledge from MaxLead.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 flex-1 mb-4">
                  {blog.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, tid) => (
                    <span
                      key={tid}
                      className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/blog"
                  className="inline-flex items-center text-orange-500 font-medium hover:underline"
                >
                  Read More
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Floating blobs */}
        <div
          className="absolute w-48 h-48 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${cursorPos.x * 0.01}px, ${cursorPos.y * 0.01}px)`,
          }}
        />
        <div
          className="absolute w-32 h-32 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${cursorPos.x * -0.01}px, ${cursorPos.y * -0.01}px)`,
          }}
        />
      </section>

      {/* Popular News */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Popular <span className="text-orange-400">News</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trending insights from marketing and branding.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {popularNews.map((news, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:shadow-xl transition"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                {news.title}
              </h3>
              <p className="text-gray-300">{news.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
