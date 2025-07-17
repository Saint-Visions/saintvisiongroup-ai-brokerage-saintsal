"use client";

import { useState } from "react";

interface FormSectionProps {
  title?: string;
  subtitle?: string;
  formType?: "application" | "contact" | "consultation" | "custom";
  showSteps?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

interface FormData {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;

  // Investment Profile
  investmentExperience: string;
  investmentCapacity: string;
  investmentGoals: string;
  timeframe: string;
  riskTolerance: string;
  preferredMarkets: string;

  // Strategic Objectives
  currentPortfolio: string;
  strategicChallenges: string;
  investmentThesis: string;
  additionalRequirements: string;
}

export default function FormSection({
  title = "Strategic Investment Application",
  subtitle = "Begin your journey with institutional-grade real estate intelligence. Complete our comprehensive assessment to receive personalized investment strategies.",
  formType = "application",
  showSteps = true,
  backgroundColor = "bg-neutral-50",
  textColor = "text-neutral-900",
  accentColor = "text-primary-600",
}: FormSectionProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    investmentExperience: "",
    investmentCapacity: "",
    investmentGoals: "",
    timeframe: "",
    riskTolerance: "",
    preferredMarkets: "",
    currentPortfolio: "",
    strategicChallenges: "",
    investmentThesis: "",
    additionalRequirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const totalSteps = 3;

  const steps = [
    {
      id: 1,
      title: "Profile",
      description: "Professional & Contact Information",
    },
    {
      id: 2,
      title: "Investment",
      description: "Capacity & Strategic Objectives",
    },
    { id: 3, title: "Strategy", description: "Portfolio Goals & Requirements" },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.firstName) errors.firstName = "First name is required";
        if (!formData.lastName) errors.lastName = "Last name is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.phone) errors.phone = "Phone number is required";
        break;
      case 2:
        if (!formData.investmentExperience)
          errors.investmentExperience = "Investment experience is required";
        if (!formData.investmentCapacity)
          errors.investmentCapacity = "Investment capacity is required";
        if (!formData.timeframe)
          errors.timeframe = "Investment timeframe is required";
        break;
      case 3:
        // Optional validations for final step
        break;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      console.log("Strategic investment application:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowThankYou(true);
    } catch (error) {
      console.error("Application submission error:", error);
      alert(
        "There was an error submitting your application. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <section id="application-form" className={`py-20 ${backgroundColor}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-12 text-center animate-fade-in-scale">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-display-md text-neutral-900 mb-6">
              Application Received Successfully
            </h2>

            <p className="text-body-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
              Thank you for your interest in our institutional intelligence
              platform. Our investment advisory team will review your
              application and contact you within 24 hours.
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-8 mb-8">
              <h3 className="text-headline-md text-neutral-900 mb-6">
                Your Strategic Roadmap
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h4 className="text-headline-sm text-neutral-900">
                    Application Review
                  </h4>
                  <p className="text-body-sm text-neutral-600">
                    Comprehensive assessment within 24 hours
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <h4 className="text-headline-sm text-neutral-900">
                    Strategy Consultation
                  </h4>
                  <p className="text-body-sm text-neutral-600">
                    Private call with senior investment advisor
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h4 className="text-headline-sm text-neutral-900">
                    Custom Analysis
                  </h4>
                  <p className="text-body-sm text-neutral-600">
                    Personalized investment intelligence report
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-gold-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <h4 className="text-headline-sm text-neutral-900">
                    Platform Access
                  </h4>
                  <p className="text-body-sm text-neutral-600">
                    Full intelligence platform onboarding
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("investment-sandbox")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary text-lg py-4 group"
              >
                <span className="flex items-center gap-2">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Explore Investment Sandbox
                </span>
              </button>
              <button
                onClick={() =>
                  window.open("mailto:invest@saintvisiongroup.com", "_blank")
                }
                className="btn-secondary text-lg py-4 group"
              >
                <span className="flex items-center gap-2">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Advisory Team
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className={`py-20 ${backgroundColor}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-caption text-primary-600 mb-4 tracking-wider">
            EXCLUSIVE ACCESS APPLICATION
          </div>
          <h2 className={`text-display-lg mb-6 ${textColor}`}>
            <span className="text-gradient-primary">{title}</span>
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Progress Indicator */}
        {showSteps && (
          <div className="mb-12">
            <div className="flex justify-center items-center mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-300 ${
                        step.id <= currentStep
                          ? "bg-primary-600 text-white shadow-lg"
                          : "bg-neutral-200 text-neutral-500"
                      }`}
                    >
                      {step.id < currentStep ? (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        step.id
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <div
                        className={`text-body-sm font-medium ${step.id <= currentStep ? "text-primary-600" : "text-neutral-500"}`}
                      >
                        {step.title}
                      </div>
                      <div className="text-caption text-neutral-500 mt-1 max-w-[120px]">
                        {step.description}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-24 h-1 mx-6 mt-[-60px] transition-all duration-300 ${
                        step.id < currentStep
                          ? "bg-primary-600"
                          : "bg-neutral-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="card-premium p-12">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Professional Profile */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h3 className="text-headline-md text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Professional Profile
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                          validationErrors.firstName
                            ? "border-red-300"
                            : "border-neutral-300"
                        }`}
                        placeholder="Your first name"
                      />
                      {validationErrors.firstName && (
                        <p className="text-caption text-red-600">
                          {validationErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                          validationErrors.lastName
                            ? "border-red-300"
                            : "border-neutral-300"
                        }`}
                        placeholder="Your last name"
                      />
                      {validationErrors.lastName && (
                        <p className="text-caption text-red-600">
                          {validationErrors.lastName}
                        </p>
                      )}
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
                          handleInputChange("email", e.target.value)
                        }
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                          validationErrors.email
                            ? "border-red-300"
                            : "border-neutral-300"
                        }`}
                        placeholder="your@email.com"
                      />
                      {validationErrors.email && (
                        <p className="text-caption text-red-600">
                          {validationErrors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                          validationErrors.phone
                            ? "border-red-300"
                            : "border-neutral-300"
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {validationErrors.phone && (
                        <p className="text-caption text-red-600">
                          {validationErrors.phone}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your company or investment firm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Position/Title
                      </label>
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) =>
                          handleInputChange("position", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your role or title"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Investment Profile */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h3 className="text-headline-md text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Investment Profile & Capacity
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Investment Experience *
                        </label>
                        <select
                          required
                          value={formData.investmentExperience}
                          onChange={(e) =>
                            handleInputChange(
                              "investmentExperience",
                              e.target.value,
                            )
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                            validationErrors.investmentExperience
                              ? "border-red-300"
                              : "border-neutral-300"
                          }`}
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
                          <option value="family-office">
                            Family Office/Fund Manager
                          </option>
                        </select>
                        {validationErrors.investmentExperience && (
                          <p className="text-caption text-red-600">
                            {validationErrors.investmentExperience}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Investment Capacity *
                        </label>
                        <select
                          required
                          value={formData.investmentCapacity}
                          onChange={(e) =>
                            handleInputChange(
                              "investmentCapacity",
                              e.target.value,
                            )
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                            validationErrors.investmentCapacity
                              ? "border-red-300"
                              : "border-neutral-300"
                          }`}
                        >
                          <option value="">Select investment range</option>
                          <option value="500k-1m">$500K - $1M</option>
                          <option value="1m-5m">$1M - $5M</option>
                          <option value="5m-25m">$5M - $25M</option>
                          <option value="25m+">$25M+ (Institutional)</option>
                        </select>
                        {validationErrors.investmentCapacity && (
                          <p className="text-caption text-red-600">
                            {validationErrors.investmentCapacity}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Investment Timeframe *
                        </label>
                        <select
                          required
                          value={formData.timeframe}
                          onChange={(e) =>
                            handleInputChange("timeframe", e.target.value)
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                            validationErrors.timeframe
                              ? "border-red-300"
                              : "border-neutral-300"
                          }`}
                        >
                          <option value="">Select timeframe</option>
                          <option value="immediate">
                            Ready to deploy capital immediately
                          </option>
                          <option value="q1">Within next quarter</option>
                          <option value="h1">Within next 6 months</option>
                          <option value="annual">Within next 12 months</option>
                          <option value="strategic">
                            Strategic planning phase
                          </option>
                        </select>
                        {validationErrors.timeframe && (
                          <p className="text-caption text-red-600">
                            {validationErrors.timeframe}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Risk Tolerance
                        </label>
                        <select
                          value={formData.riskTolerance}
                          onChange={(e) =>
                            handleInputChange("riskTolerance", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select risk profile</option>
                          <option value="conservative">
                            Conservative (Core assets)
                          </option>
                          <option value="moderate">Moderate (Core Plus)</option>
                          <option value="aggressive">
                            Aggressive (Value-Add)
                          </option>
                          <option value="opportunistic">
                            Opportunistic (High-risk/High-reward)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Strategic Investment Objectives
                      </label>
                      <textarea
                        rows={4}
                        value={formData.investmentGoals}
                        onChange={(e) =>
                          handleInputChange("investmentGoals", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Describe your strategic investment objectives, preferred asset classes, target returns, and portfolio goals..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Strategic Requirements */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h3 className="text-headline-md text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Strategic Requirements & Portfolio Analysis
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Target Markets & Geographic Preferences
                      </label>
                      <input
                        type="text"
                        value={formData.preferredMarkets}
                        onChange={(e) =>
                          handleInputChange("preferredMarkets", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="e.g., Southeast US, Tier 1 Cities, International Markets"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Current Portfolio Composition
                      </label>
                      <textarea
                        rows={3}
                        value={formData.currentPortfolio}
                        onChange={(e) =>
                          handleInputChange("currentPortfolio", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Describe your current real estate portfolio, asset allocation, and performance metrics..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Strategic Challenges & Pain Points
                      </label>
                      <textarea
                        rows={3}
                        value={formData.strategicChallenges}
                        onChange={(e) =>
                          handleInputChange(
                            "strategicChallenges",
                            e.target.value,
                          )
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="What strategic challenges are you facing? Market analysis, deal sourcing, risk assessment..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-medium text-neutral-700">
                        Additional Requirements & Specifications
                      </label>
                      <textarea
                        rows={3}
                        value={formData.additionalRequirements}
                        onChange={(e) =>
                          handleInputChange(
                            "additionalRequirements",
                            e.target.value,
                          )
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Any specific requirements, compliance needs, or special considerations for your investment strategy..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-neutral-200">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="btn-secondary py-3 px-6 group"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </span>
                  </button>
                )}
              </div>

              <div>
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary py-3 px-8 group"
                  >
                    <span className="flex items-center gap-2">
                      Continue
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold text-lg py-4 px-10 group"
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting Application...
                        </>
                      ) : (
                        <>
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
                          Submit Application
                        </>
                      )}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
