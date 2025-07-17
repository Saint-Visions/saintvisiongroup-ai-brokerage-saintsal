"use client";

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
  companyName = "SaintSAL™",
  tagline = "AI-Powered Real Estate Brokerage",
  showSocialLinks = true,
  showContactInfo = true,
  backgroundColor = "bg-gray-900",
  textColor = "text-gray-300",
  accentColor = "text-blue-400",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "����" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "Facebook", url: "#", icon: "📘" },
    { name: "Instagram", url: "#", icon: "📸" },
    { name: "YouTube", url: "#", icon: "📺" },
  ];

  const quickLinks = [
    { name: "Investment Sandbox", url: "/investment-sandbox" },
    { name: "Real Estate Navigator", url: "/navigator" },
    { name: "Client Portal", url: "/portal" },
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Cookie Policy", url: "/cookies" },
    { name: "Disclaimers", url: "/disclaimers" },
  ];

  const resources = [
    { name: "Blog", url: "/blog" },
    { name: "Market Insights", url: "/insights" },
    { name: "Investment Guides", url: "/guides" },
    { name: "FAQ", url: "/faq" },
    { name: "Support", url: "/support" },
  ];

  return (
    <footer className={`footer-section ${backgroundColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="footer-content py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="company-info">
            <div className="logo-section mb-4">
              <h3 className={`text-2xl font-bold ${accentColor}`}>
                {companyName}
              </h3>
              <p className="text-sm opacity-80 mt-1">{tagline}</p>
            </div>

            <p className="company-description text-sm leading-relaxed mb-6">
              Revolutionizing real estate investment with AI-powered analytics,
              seamless CRM integration, and automated pipeline management for
              maximum returns and efficiency.
            </p>

            {showContactInfo && (
              <div className="contact-info space-y-2 text-sm">
                <div className="contact-item flex items-center gap-2">
                  <span>📧</span>
                  <a
                    href="mailto:info@saintvisiongroup.com"
                    className={`hover:${accentColor} transition-colors`}
                  >
                    info@saintvisiongroup.com
                  </a>
                </div>
                <div className="contact-item flex items-center gap-2">
                  <span>📞</span>
                  <a
                    href="tel:+1234567890"
                    className={`hover:${accentColor} transition-colors`}
                  >
                    (123) 456-7890
                  </a>
                </div>
                <div className="contact-item flex items-center gap-2">
                  <span>📍</span>
                  <span>Nationwide Service</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h4 className={`text-lg font-semibold mb-4 ${accentColor}`}>
              Quick Links
            </h4>
            <nav className="footer-nav">
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className={`text-sm hover:${accentColor} transition-colors duration-200`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div className="resources">
            <h4 className={`text-lg font-semibold mb-4 ${accentColor}`}>
              Resources
            </h4>
            <nav className="footer-nav">
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      className={`text-sm hover:${accentColor} transition-colors duration-200`}
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div className="newsletter-social">
            <h4 className={`text-lg font-semibold mb-4 ${accentColor}`}>
              Stay Connected
            </h4>

            {/* Newsletter Signup */}
            <div className="newsletter-signup mb-6">
              <p className="text-sm mb-3">
                Get market insights and investment tips delivered to your inbox.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            {showSocialLinks && (
              <div className="social-links">
                <h5 className="text-sm font-medium mb-3">Follow Us</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`social-link text-xl hover:${accentColor} transition-colors duration-200`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="copyright text-sm opacity-80">
              © {currentYear} {companyName}. All rights reserved.
            </div>

            {/* Legal Links */}
            <nav className="legal-nav">
              <ul className="flex flex-wrap gap-4 text-sm">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className={`hover:${accentColor} transition-colors duration-200`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* License Info */}
            <div className="license-info text-xs opacity-60">
              Licensed Real Estate Brokerage
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges border-t border-gray-800 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs opacity-70">
            <div className="trust-badge flex items-center gap-1">
              🔒 SSL Secured
            </div>
            <div className="trust-badge flex items-center gap-1">
              🛡️ Privacy Protected
            </div>
            <div className="trust-badge flex items-center gap-1">
              ⭐ A+ BBB Rating
            </div>
            <div className="trust-badge flex items-center gap-1">
              📋 Licensed & Insured
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
