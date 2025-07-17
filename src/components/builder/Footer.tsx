"use client";

import { useState } from "react";
import SaintSALLogo from "./SaintSALLogo";

interface FooterProps {
  companyName?: string;
  tagline?: string;
  showSocialLinks?: boolean;
  showContactInfo?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export default function Footer({
  companyName = "Saint Vision Group",
  tagline = "Strategic Real Estate Intelligence",
  showSocialLinks = true,
  showContactInfo = true,
  backgroundColor = "bg-neutral-950",
  textColor = "text-neutral-300",
  accentColor = "text-gold-400",
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Newsletter subscription:", email);
    alert("Thank you for subscribing to our intelligence briefings!");
    setEmail("");
    setIsSubscribing(false);
  };

  const platformLinks = [
    { name: "Investment Intelligence", url: "/intelligence" },
    { name: "Market Analytics", url: "/analytics" },
    { name: "Portfolio Dashboard", url: "/dashboard" },
    { name: "Strategic Consulting", url: "/consulting" },
    { name: "Client Portal", url: "/portal" },
  ];

  const institutionalLinks = [
    { name: "Family Offices", url: "/family-offices" },
    { name: "Institutional Investors", url: "/institutional" },
    { name: "Private Equity", url: "/private-equity" },
    { name: "Fund Managers", url: "/fund-managers" },
    { name: "REIT Operations", url: "/reit" },
  ];

  const complianceLinks = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Investment Disclaimers", url: "/disclaimers" },
    { name: "Regulatory Compliance", url: "/compliance" },
    { name: "Data Security", url: "/security" },
  ];

  const socialPlatforms = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/saint-vision-group",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/saintvisiongroup",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@saintvisiongroup",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  const certifications = [
    { name: "SOC 2 Type II", icon: "🛡️" },
    { name: "ISO 27001", icon: "🔒" },
    { name: "FINRA Member", icon: "🏛️" },
    { name: "SEC Registered", icon: "📋" },
  ];

  return (
    <footer
      className={`relative ${backgroundColor} ${textColor} overflow-hidden`}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <SaintSALLogo
                variant="combined"
                size="md"
                showTagline={false}
                className="mb-4"
              />
              <div className="text-caption text-gold-400 tracking-wider mb-4">
                INSTITUTIONAL INTELLIGENCE PLATFORM
              </div>
              <p className="text-body-md text-neutral-400 leading-relaxed max-w-lg">
                Empowering institutional investors, family offices, and
                sophisticated real estate professionals with AI-powered
                analytics and strategic intelligence for superior investment
                outcomes.
              </p>
            </div>

            {showContactInfo && (
              <div className="space-y-4">
                <h4 className="text-headline-sm text-neutral-200 mb-4">
                  Global Headquarters
                </h4>
                <div className="space-y-3 text-body-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:invest@saintvisiongroup.com"
                      className="text-neutral-300 hover:text-gold-400 transition-colors"
                    >
                      invest@saintvisiongroup.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <a
                      href="tel:+18887776553"
                      className="text-neutral-300 hover:text-gold-400 transition-colors"
                    >
                      +1 (888) 777-6553
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-400">
                      Global Operations, US-Based
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Platform Solutions */}
          <div>
            <h4 className="text-headline-sm text-neutral-200 mb-6">
              Platform Solutions
            </h4>
            <nav>
              <ul className="space-y-3">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-body-sm text-neutral-400 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <svg
                        className="w-3 h-3 text-primary-500 group-hover:text-gold-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Institutional Services */}
          <div>
            <h4 className="text-headline-sm text-neutral-200 mb-6">
              Institutional Services
            </h4>
            <nav>
              <ul className="space-y-3">
                {institutionalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-body-sm text-neutral-400 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <svg
                        className="w-3 h-3 text-primary-500 group-hover:text-gold-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Newsletter & Intelligence Briefings */}
        <div className="border-t border-neutral-800 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-headline-md text-neutral-200 mb-4">
                Intelligence Briefings
              </h4>
              <p className="text-body-md text-neutral-400 mb-6">
                Receive exclusive market intelligence, investment insights, and
                strategic analysis delivered to institutional decision-makers
                worldwide.
              </p>
              <div className="flex flex-wrap gap-4 text-caption text-neutral-500">
                <span>• Weekly Market Analysis</span>
                <span>• Quarterly Investment Reports</span>
                <span>• Exclusive Deal Flow</span>
              </div>
            </div>

            <div>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter institutional email address"
                      required
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="btn-gold px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? "..." : "Subscribe"}
                  </button>
                </div>
                <p className="text-caption text-neutral-500">
                  Institutional-grade intelligence for qualified investors only
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media & Certifications */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Social Links */}
            {showSocialLinks && (
              <div className="flex flex-col items-center lg:items-start">
                <h5 className="text-body-sm font-medium text-neutral-300 mb-4">
                  Connect With Us
                </h5>
                <div className="flex gap-4">
                  {socialPlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200 group"
                      title={platform.name}
                    >
                      {platform.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            <div className="flex flex-col items-center lg:items-end">
              <h5 className="text-body-sm font-medium text-neutral-300 mb-4">
                Security & Compliance
              </h5>
              <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-neutral-400"
                  >
                    <span className="text-lg">{cert.icon}</span>
                    <span className="text-caption font-medium">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-body-sm text-neutral-500">
              © {currentYear} {companyName}. All rights reserved. |
              <span className="ml-2">SEC Registered Investment Adviser</span>
            </div>

            {/* Legal Links */}
            <nav>
              <ul className="flex flex-wrap justify-center gap-6 text-body-sm">
                {complianceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-neutral-500 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Investment Disclaimer */}
        <div className="border-t border-neutral-800 py-6">
          <div className="text-center">
            <p className="text-caption text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              <strong>Investment Disclaimer:</strong> Real estate investments
              involve risk and may result in loss of principal. Past performance
              is not indicative of future results. This platform is intended for
              qualified institutional investors and accredited individuals only.
              Consult with qualified financial advisors before making investment
              decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
