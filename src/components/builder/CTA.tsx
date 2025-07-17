"use client";

import React, { useState } from "react";

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
  title = "Join Elite Investors Using Institutional Intelligence",
  description = "Access the same AI-powered real estate analytics trusted by family offices, institutional investors, and high-net-worth individuals worldwide.",
  buttonText = "Schedule Private Consultation",
  buttonStyle = "primary",
  action = "modal",
  redirectUrl,
  scrollTarget,
  backgroundColor = "bg-gradient-to-br from-primary-950 via-neutral-900 to-primary-900",
  textColor = "text-white",
  showForm = true,
}: CTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    investmentCapacity: "",
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
        } else {
          document
            .getElementById("application-form")
            ?.scrollIntoView({ behavior: "smooth" });
        }
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Premium consultation request:", formData);
    alert(
      "Thank you for your interest. Our investment advisory team will contact you within 24 hours to schedule your private consultation.",
    );
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      investmentCapacity: "",
      investmentGoal: "",
      experience: "",
      message: "",
    });
  };

  const getButtonClasses = () => {
    const baseClasses =
      "group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:shadow-3xl";

    switch (buttonStyle) {
      case "primary":
        return `${baseClasses} btn-gold`;
      case "secondary":
        return `${baseClasses} btn-primary`;
      case "outline":
        return `${baseClasses} btn-secondary glass`;
      default:
        return `${baseClasses} btn-gold`;
    }
  };

  const institutionalPartners = [
    { name: "BlackRock", logo: "🏛️" },
    { name: "Brookfield", logo: "🏢" },
    { name: "Starwood Capital", logo: "⭐" },
    { name: "KKR Real Estate", logo: "💎" },
  ];

  const trustMetrics = [
    { value: "$2.4B+", label: "Assets Under Analysis", icon: "📊" },
    { value: "15,000+", label: "Properties Evaluated", icon: "🏠" },
    { value: "94.7%", label: "Prediction Accuracy", icon: "🎯" },
    { value: "24/7", label: "AI Monitoring", icon: "🔍" },
  ];

  return (
    <>
      <section
        className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${backgroundColor}`}
      >
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gold-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-primary-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Institutional Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-16">
            <div className="text-caption text-gold-400 mb-4 tracking-widest">
              INSTITUTIONAL GRADE INTELLIGENCE
            </div>
            <h2 className={`text-display-lg mb-8 ${textColor}`}>
              <span className="text-gradient-gold">{title}</span>
            </h2>
            <p
              className={`text-body-lg max-w-4xl mx-auto leading-relaxed ${textColor} opacity-90`}
            >
              {description}
            </p>
          </div>

          {/* Trust Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gradient-gold mb-2">
                  {metric.value}
                </div>
                <div className={`text-caption ${textColor} opacity-70`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-16">
            <button onClick={handleAction} className={getButtonClasses()}>
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {buttonText}
              </span>
            </button>
          </div>

          {/* Institutional Partners */}
          <div className="text-center">
            <div
              className={`text-caption ${textColor} opacity-60 mb-8 tracking-wider`}
            >
              TRUSTED BY INSTITUTIONAL PARTNERS
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {institutionalPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </span>
                  <span
                    className={`text-body-sm font-medium ${textColor} group-hover:opacity-100 transition-opacity`}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Consultation Modal */}
      {isModalOpen && showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in-scale">
          <div className="card-premium max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
            <div className="flex justify-between items-center p-8 border-b border-neutral-200">
              <div>
                <h3 className="text-headline-lg text-neutral-900 mb-2">
                  Private Investment Consultation
                </h3>
                <p className="text-body-md text-neutral-600">
                  Exclusive access to institutional-grade real estate
                  intelligence
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-neutral-600 group-hover:rotate-90 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Personal Information */}
              <div>
                <h4 className="text-headline-sm text-neutral-900 mb-6 pb-2 border-b border-neutral-200">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-body-sm font-medium text-neutral-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm font-medium text-neutral-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm font-medium text-neutral-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm font-medium text-neutral-700">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your company or organization"
                    />
                  </div>
                </div>
              </div>

              {/* Investment Profile */}
              <div>
                <h4 className="text-headline-sm text-neutral-900 mb-6 pb-2 border-b border-neutral-200">
                  Investment Profile
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-body-sm font-medium text-neutral-700">
                      Investment Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select experience level</option>
                      <option value="emerging">
                        Emerging Investor (1-5 properties)
                      </option>
                      <option value="experienced">
                        Experienced (6-20 properties)
                      </option>
                      <option value="institutional">
                        Institutional (20+ properties)
                      </option>
                      <option value="family-office">Family Office/Fund</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm font-medium text-neutral-700">
                      Investment Capacity
                    </label>
                    <select
                      value={formData.investmentCapacity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          investmentCapacity: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select investment range</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Investment Goals */}
              <div className="space-y-2">
                <label className="text-body-sm font-medium text-neutral-700">
                  Investment Objectives
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe your investment objectives, target markets, asset classes of interest, and any specific requirements..."
                />
              </div>

              {/* Privacy Notice */}
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-body-sm text-neutral-600 leading-relaxed">
                  <strong>Privacy & Confidentiality:</strong> Your information
                  is protected by institutional-grade security protocols. We
                  maintain strict confidentiality and will only use your
                  information to provide you with relevant investment
                  intelligence and opportunities.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="btn-primary text-lg py-4 flex-1 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Request Private Consultation
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn-secondary text-lg py-4 sm:w-auto w-full"
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
