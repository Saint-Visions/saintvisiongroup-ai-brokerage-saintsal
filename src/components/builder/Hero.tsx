"use client";

import React, { useState, useEffect } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonAction?: string;
  secondaryButtonText?: string;
  backgroundVideo?: string;
  backgroundImage?: string;
  showVideo?: boolean;
}

export default function Hero({
  title = "Saint Vision Group LLC",
  subtitle = "Premier commercial lending and real estate financing. Fixed-rate loans, bridge financing, construction loans, and investment opportunities. Licensed and regulated with institutional-grade expertise.",
  primaryButtonText = "Apply for Financing",
  primaryButtonAction = "application",
  secondaryButtonText = "View Loan Programs",
  backgroundVideo,
  backgroundImage,
  showVideo = true,
}: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePrimaryAction = () => {
    if (primaryButtonAction === "application") {
      document
        .getElementById("application-form")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (primaryButtonAction === "sandbox") {
      document
        .getElementById("investment-sandbox")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSecondaryAction = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-950 via-primary-950 to-neutral-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Premium Background Video/Image */}
      {backgroundVideo && showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          style={{ zIndex: -1 }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: -1,
          }}
        />
      ) : null}

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo with Animation */}
          <div
            className={`mb-12 transition-all duration-1000 ${isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
          >
            <div className="text-center mb-6">
              <h1 className="text-6xl font-bold text-gradient-gold mb-4">
                Saint Vision Group
              </h1>
              <div className="text-lg text-gold-400 font-medium">LLC</div>
            </div>
            <div className="text-caption text-neutral-400 tracking-wider">
              LICENSED COMMERCIAL LENDER • REAL ESTATE FINANCING
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-display-2xl text-white mb-8 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
          >
            <span className="text-gradient-primary">
              Premier Commercial Lending
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-body-lg text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
          >
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
          >
            <button
              onClick={handlePrimaryAction}
              className="btn-primary text-lg px-8 py-4 min-w-[200px] group relative overflow-hidden"
            >
              <span className="relative z-10">{primaryButtonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>

            {secondaryButtonText && (
              <button
                onClick={handleSecondaryAction}
                className="btn-secondary text-lg px-8 py-4 min-w-[200px] group glass"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 group-hover:animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5z" />
                  </svg>
                  {secondaryButtonText}
                </span>
              </button>
            )}
          </div>

          {/* Trust Indicators */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold mb-1">
                $500M+
              </div>
              <div className="text-caption text-neutral-400">LOANS FUNDED</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold mb-1">
                2,500+
              </div>
              <div className="text-caption text-neutral-400">
                BORROWERS SERVED
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold mb-1">
                3.5%
              </div>
              <div className="text-caption text-neutral-400">RATES FROM</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold mb-1">
                48HR
              </div>
              <div className="text-caption text-neutral-400">APPROVAL TIME</div>
            </div>
          </div>

          {/* Floating Action Hint */}
          <div
            className={`mt-16 transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <div className="text-caption text-neutral-500 mt-2">
              EXPLORE INTELLIGENCE PLATFORM
            </div>
          </div>
        </div>
      </div>

      {/* Premium Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in-scale"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="card-premium max-w-5xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-neutral-200">
              <div>
                <h3 className="text-headline-md text-neutral-900 mb-1">
                  Platform Intelligence Demo
                </h3>
                <p className="text-body-sm text-neutral-600">
                  Advanced AI analytics in action
                </p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5 text-neutral-600"
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
            <div className="p-6">
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-gold-500/20" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 5v10l8-5z" />
                    </svg>
                  </div>
                  <h4 className="text-headline-sm text-neutral-800 mb-2">
                    Intelligence Demo
                  </h4>
                  <p className="text-body-md text-neutral-600">
                    Real-time AI analytics and strategic insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
