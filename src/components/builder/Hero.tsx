"use client";

import { useState } from "react";
import SaintSALLogo from "./SaintSALLogo";

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
  title = "SaintSAL™ - AI-Powered Real Estate Brokerage",
  subtitle = "Transform your real estate investments with AI-driven automation, advanced analytics, and seamless CRM integration. Join the future of property investment.",
  primaryButtonText = "Start Your Investment Journey",
  primaryButtonAction = "application",
  secondaryButtonText = "Watch Demo",
  backgroundVideo,
  backgroundImage,
  showVideo = true,
}: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handlePrimaryAction = () => {
    if (primaryButtonAction === "application") {
      // Trigger application form/modal
      console.log("Opening application form");
    } else if (primaryButtonAction === "sandbox") {
      // Navigate to investment sandbox
      window.location.href = "/investment-sandbox";
    }
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      {backgroundVideo && showVideo ? (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -2 }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: -2,
          }}
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4aa3c3e0f0ba44ad82f543d587028528?format=webp&width=800)`,
            zIndex: -2,
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: -1 }} />

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* SaintSAL Logo */}
          <div className="hero-logo mb-8">
            <SaintSALLogo
              variant="combined"
              size="lg"
              showTagline={true}
              className="mb-4"
            />
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="hero-actions flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handlePrimaryAction}
              className="primary-cta-button bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-yellow-400"
            >
              {primaryButtonText}
            </button>

            {secondaryButtonText && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="secondary-cta-button border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                {secondaryButtonText}
              </button>
            )}
          </div>

          {/* Key Features Pills */}
          <div className="key-features flex flex-wrap justify-center gap-4 text-sm">
            <div className="feature-pill bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-md text-yellow-100 border border-yellow-400/30 px-6 py-3 rounded-full">
              ♕ Strategic AI Analytics
            </div>
            <div className="feature-pill bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-md text-yellow-100 border border-yellow-400/30 px-6 py-3 rounded-full">
              ⚡ Investment Sandbox
            </div>
            <div className="feature-pill bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-md text-yellow-100 border border-yellow-400/30 px-6 py-3 rounded-full">
              🔗 CRM Integration
            </div>
            <div className="feature-pill bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-md text-yellow-100 border border-yellow-400/30 px-6 py-3 rounded-full">
              📱 Enterprise Grade
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="modal-content bg-white rounded-lg max-w-4xl w-full max-h-full overflow-hidden">
            <div className="modal-header flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold">
                SaintSAL™ Platform Demo
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="close-button text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="modal-body p-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">
                  Demo video will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
