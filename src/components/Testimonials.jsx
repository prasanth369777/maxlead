import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    company: "Urban Mart",
    role: "Business Owner",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "MaxLead Advertising handled our flyer printing and door-to-door distribution perfectly. We saw a noticeable increase in walk-in customers within just a week.",
    rating: 5,
  },
  {
    name: "Anitha Sharma",
    company: "GreenLeaf Clinic",
    role: "Marketing Manager",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "Their SMS marketing campaign delivered excellent results. Open rates were very high, and appointment bookings increased significantly.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    company: "Prime Real Estate",
    role: "Founder",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "MaxLead helped us run targeted digital ads and flyer distribution for our property launch. The campaign generated quality leads and great local visibility.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    company: "StyleStreet Boutique",
    role: "Store Owner",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "From printing banners to outdoor promotions, MaxLead delivered everything on time with excellent quality. Our store opening was a big success.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    company: "EduGrow Academy",
    role: "Director",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "The combination of SMS campaigns and digital ads helped us fill multiple batches quickly. Their reporting and communication were very clear.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    company: "HealthPlus Pharmacy",
    role: "Operations Head",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "We partnered with MaxLead for flyer distribution and local promotions. The reach and response exceeded our expectations. Highly recommended.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-orange-400/50 shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-md mx-auto">
      <div className="absolute top-6 right-6 text-orange-400/10 group-hover:text-orange-400/20 transition-colors">
        <Quote className="w-16 h-16" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
          ))}
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>

        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="text-gray-900 font-semibold">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-200 to-gray-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIvPjwvZz48L3N2Zz4=')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full border border-yellow-500/20 mb-6">
            <span className="text-orange-600 font-semibold">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have grown their visibility, reach, and
            leads with MaxLead Advertising.
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden">
              <div className="absolute flex flex-col gap-6 animate-scroll hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`col1-${i}`} testimonial={t} />
                ))}
              </div>
            </div>

            {/* Column 2 – desktop only */}
            <div className="hidden lg:block relative h-[600px] overflow-hidden">
              <div className="absolute flex flex-col gap-6 animate-scroll hover:[animation-play-state:paused] [animation-direction:reverse]">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`col2-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-12 justify-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>

            <div className="hidden sm:block h-12 w-px bg-gray-300"></div>

            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                150+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>

            <div className="hidden sm:block h-12 w-px bg-gray-300"></div>

            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                98%
              </div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
