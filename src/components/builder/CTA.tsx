"use client";

import { useState } from "react";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonStyle?: "primary" | "secondary" | "outline";
  action?: "modal" | "redirect" | "scroll";
  redirectUrl?: string;
  scrollTarget?: string;
  backgroundColor?: string;
  textColor?: string;
  showForm?: boolean;
}

export default function CTA({
  title = "Ready to Transform Your Real Estate Investments?",
  description = "Join thousands of investors already using SaintSAL™ to maximize their returns with AI-powered insights and automation.",
  buttonText = "Get Started Today",
  buttonStyle = "primary",
  action = "modal",
  redirectUrl,
  scrollTarget,
  backgroundColor = "bg-gradient-to-r from-blue-600 to-purple-600",
  textColor = "text-white",
  showForm = true,
}: CTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentGoal: "",
    experience: "",
    message: "",
  });

  const handleAction = () => {
    switch (action) {
      case "modal":
        setIsModalOpen(true);
        break;
      case "redirect":
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
        break;
      case "scroll":
        if (scrollTarget) {
          const element = document.querySelector(scrollTarget);
          element?.scrollIntoView({ behavior: "smooth" });
        }
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with GHL or your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentGoal: "",
      experience: "",
      message: "",
    });
  };

  const getButtonClasses = () => {
    const baseClasses =
      "inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl";

    switch (buttonStyle) {
      case "primary":
        return `${baseClasses} bg-white text-blue-600 hover:bg-gray-100`;
      case "secondary":
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`;
      case "outline":
        return `${baseClasses} border-2 border-white text-white hover:bg-white hover:text-blue-600`;
      default:
        return `${baseClasses} bg-white text-blue-600 hover:bg-gray-100`;
    }
  };

  return (
    <>
      <section
        className={`cta-section py-16 px-4 sm:px-6 lg:px-8 ${backgroundColor}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`cta-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${textColor}`}
          >
            {title}
          </h2>

          <p
            className={`cta-description text-lg sm:text-xl mb-8 opacity-90 ${textColor}`}
          >
            {description}
          </p>

          <button onClick={handleAction} className={getButtonClasses()}>
            {buttonText}
          </button>

          <div className="trust-indicators mt-8 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <div className={`trust-item ${textColor}`}>
              ✓ 10,000+ Properties Analyzed
            </div>
            <div className={`trust-item ${textColor}`}>
              ✓ $500M+ in Deals Facilitated
            </div>
            <div className={`trust-item ${textColor}`}>
              ✓ 99% Client Satisfaction
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && showForm && (
        <div className="application-modal fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="modal-content bg-white rounded-lg max-w-2xl w-full max-h-full overflow-y-auto">
            <div className="modal-header flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">
                Start Your Investment Journey
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="close-button text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-body p-6 space-y-6">
              <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Investment Experience
                  </label>
                  <select
                    id="experience"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner (0-1 deals)</option>
                    <option value="intermediate">
                      Intermediate (2-10 deals)
                    </option>
                    <option value="experienced">Experienced (10+ deals)</option>
                    <option value="professional">Professional Investor</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="investmentGoal"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Investment Goal
                </label>
                <input
                  type="text"
                  id="investmentGoal"
                  value={formData.investmentGoal}
                  onChange={(e) =>
                    setFormData({ ...formData, investmentGoal: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Buy and hold, Fix and flip, Wholesale"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell us about your investment goals
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Share your investment goals, target markets, or any questions you have..."
                />
              </div>

              <div className="form-actions flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 sm:flex-none border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
