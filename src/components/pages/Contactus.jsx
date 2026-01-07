import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navigation from "../Navigation";
import Footer from "../Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />

      <section
        id="contact"
        className="relative py-32 bg-gradient-to-b from-white via-gray-100 to-gray-200 overflow-hidden"
      >
        {/* Floating animated blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400 to-orange-500 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-300 to-orange-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full border border-orange-500/20 mb-6">
              <span className="text-orange-600 font-semibold">
                Contact MaxLead
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Grow Your Brand with{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                MaxLead Advertising
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Looking to promote your business? Let’s discuss flyer distribution,
              SMS marketing, digital ads, or outdoor advertising solutions.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Business Name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-orange-500"
                  >
                    <option value="">Select a service</option>
                    <option value="flyer-distribution">Flyer Distribution</option>
                    <option value="printing">Printing Services</option>
                    <option value="sms-marketing">SMS Marketing</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="outdoor-advertising">Outdoor Advertising</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Details
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your promotion, target area, and goals..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center"
                >
                  Send Enquiry
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        maxleadadvertising@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 85319 85733</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">
                        Coimbatore, Tamil Nadu
                      </p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday – Friday: 9:00 AM – 6:00 PM
                </p>
                <p className="text-gray-600">
                  Saturday: 10:00 AM – 4:00 PM
                </p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fast Response Guarantee
                </h3>
                <p className="text-gray-600">
                  We respond to all enquiries within 24 hours during business
                  days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            .animate-float {
              animation: float 8s ease-in-out infinite;
            }
            .animate-float-delayed {
              animation: float 10s ease-in-out infinite;
            }
          `}
        </style>
      </section>

      <Footer />
    </>
  );
}
