import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import { Link } from "react-router-dom";

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

export default function BlogSectionClassic() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Floating background effect
  useEffect(() => {
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Latest <span className="text-orange-500">Blog Posts</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Insights, strategies, and case studies on advertising, marketing, and
          lead generation.
        </p>
      </div>

      {/* Blog Grid – WIDER */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-8 lg:px-10">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="h-56 overflow-hidden rounded-t-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-700 flex-1 mb-4">
                {blog.description}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, tid) => (
                  <span
                    key={tid}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800"
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
  );
}
