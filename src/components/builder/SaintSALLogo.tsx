"use client";

import React from "react";

interface SaintSALLogoProps {
  variant?: "brain" | "text" | "icon" | "full" | "saint-vision" | "combined";
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
}

export default function SaintSALLogo({
  variant = "full",
  size = "md",
  showTagline = true,
  className = "",
}: SaintSALLogoProps) {
  const sizeClasses = {
    sm: "w-32 h-auto",
    md: "w-48 h-auto",
    lg: "w-64 h-auto",
    xl: "w-80 h-auto",
  };

  // SaintSAL AI Brain Logos
  const brainLogoUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Ffa3f3e1df565442a9a90d129980f9189?format=webp&width=800";
  const fullLogoUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fd5f7cd7593bb4ddfa9c2a7c854ca4bc2?format=webp&width=800";
  const cookingKnowledgeUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F8431113cce644af2a26bcc768adb8c99?format=webp&width=800";
  const iconUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F2eba2bc73e0d4ac1a50feb65cfd998e6?format=webp&width=800";

  // Saint Vision Group Logos
  const saintVisionMainUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F5f271dccba1842b8aa1fa4698a9ef3e4?format=webp&width=800";
  const saintVisionIconUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F375e4214aa0147a9a3b456427f75c769?format=webp&width=800";

  const renderLogo = () => {
    switch (variant) {
      case "brain":
        return (
          <img
            src={brainLogoUrl}
            alt="SaintSAL™ AI Brain Logo"
            className={`${sizeClasses[size]} ${className}`}
          />
        );
      case "text":
        return (
          <div className={`text-center ${className}`}>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              SAINTSAL™
            </h1>
            {showTagline && (
              <p className="text-2xl text-yellow-600 font-light mt-2">
                Cookin&apos; Knowledge.
              </p>
            )}
          </div>
        );
      case "icon":
        return (
          <img
            src={iconUrl}
            alt="SaintSAL™ Icon"
            className={`${sizeClasses[size]} ${className}`}
          />
        );
      case "saint-vision":
        return (
          <img
            src={saintVisionMainUrl}
            alt="Saint Vision Group LLC"
            className={`${sizeClasses[size]} ${className}`}
          />
        );
      case "combined":
        return (
          <div className={`flex items-center gap-6 ${className}`}>
            <img
              src={saintVisionIconUrl}
              alt="Saint Vision Group"
              className="w-16 h-16"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                SAINTSAL™
              </h1>
              {showTagline && (
                <p className="text-lg text-yellow-600 font-light">
                  Powered by Saint Vision Group
                </p>
              )}
            </div>
          </div>
        );
      case "full":
      default:
        return (
          <div className={`flex flex-col items-center ${className}`}>
            <img
              src={fullLogoUrl}
              alt="SaintSAL™ - AI-Powered Real Estate Brokerage"
              className={sizeClasses[size]}
            />
            {showTagline && (
              <img
                src={cookingKnowledgeUrl}
                alt="Cookin' Knowledge"
                className="w-48 h-auto mt-4 opacity-90"
              />
            )}
          </div>
        );
    }
  };

  return <div className="saint-sal-logo">{renderLogo()}</div>;
}
