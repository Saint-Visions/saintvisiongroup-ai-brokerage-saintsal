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

  // Investment Info
  investmentExperience: string;
  investmentGoals: string;
  timeframe: string;
  budget: string;
  preferredMarkets: string;

  // Additional Info
  currentSituation: string;
  challenges: string;
  hearAboutUs: string;
  additionalInfo: string;
}

export default function FormSection({
  title = "Start Your Investment Application",
  subtitle = "Take the first step towards maximizing your real estate returns with our AI-powered platform",
  formType = "application",
  showSteps = true,
  backgroundColor = "bg-gray-50",
  textColor = "text-gray-900",
  accentColor = "text-blue-600",
}: FormSectionProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentExperience: "",
    investmentGoals: "",
    timeframe: "",
    budget: "",
    preferredMarkets: "",
    currentSituation: "",
    challenges: "",
    hearAboutUs: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const totalSteps = 3;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
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
    setIsSubmitting(true);

    try {
      // Here you would integrate with your backend/GHL
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setShowThankYou(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "There was an error submitting your application. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone
        );
      case 2:
        return (
          formData.investmentExperience &&
          formData.investmentGoals &&
          formData.timeframe
        );
      case 3:
        return true; // Optional step
      default:
        return false;
    }
  };

  if (showThankYou) {
    return (
      <section className={`form-section py-16 ${backgroundColor}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="thank-you-content bg-white rounded-lg shadow-lg p-8">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Application!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We've received your investment application and will review it
              within 24 hours. Our team will contact you soon to discuss next
              steps.
            </p>
            <div className="next-steps bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What Happens Next?
              </h3>
              <div className="steps-list space-y-3 text-left">
                <div className="step-item flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Application review within 24 hours</span>
                </div>
                <div className="step-item flex items-start gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Initial consultation call to discuss your goals</span>
                </div>
                <div className="step-item flex items-start gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Customized investment strategy presentation</span>
                </div>
                <div className="step-item flex items-start gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>Access to our Investment Sandbox platform</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => (window.location.href = "/investment-sandbox")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Explore Investment Sandbox
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`form-section py-16 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="form-header text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textColor}`}
          >
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Progress Steps */}
        {showSteps && (
          <div className="progress-steps mb-8">
            <div className="flex justify-center items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`step-circle w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step <= currentStep
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`step-line w-16 h-1 mx-2 ${
                        step < currentStep ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="step-labels flex justify-center mt-4 space-x-20">
              <span
                className={`text-sm ${currentStep >= 1 ? "text-blue-600 font-semibold" : "text-gray-500"}`}
              >
                Personal Info
              </span>
              <span
                className={`text-sm ${currentStep >= 2 ? "text-blue-600 font-semibold" : "text-gray-500"}`}
              >
                Investment Goals
              </span>
              <span
                className={`text-sm ${currentStep >= 3 ? "text-blue-600 font-semibold" : "text-gray-500"}`}
              >
                Additional Details
              </span>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="form-container bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
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
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Investment Goals */}
            {currentStep === 2 && (
              <div className="form-step">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Investment Goals & Experience
                </h3>
                <div className="space-y-6">
                  <div className="form-group">
                    <label
                      htmlFor="investmentExperience"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Investment Experience *
                    </label>
                    <select
                      id="investmentExperience"
                      required
                      value={formData.investmentExperience}
                      onChange={(e) =>
                        handleInputChange(
                          "investmentExperience",
                          e.target.value,
                        )
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 deals)</option>
                      <option value="intermediate">
                        Intermediate (2-10 deals)
                      </option>
                      <option value="experienced">
                        Experienced (10+ deals)
                      </option>
                      <option value="professional">
                        Professional Investor
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="investmentGoals"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Primary Investment Goals *
                    </label>
                    <textarea
                      id="investmentGoals"
                      required
                      rows={3}
                      value={formData.investmentGoals}
                      onChange={(e) =>
                        handleInputChange("investmentGoals", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Describe your investment goals (e.g., passive income, portfolio growth, BRRRR strategy)"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label
                        htmlFor="timeframe"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Investment Timeframe *
                      </label>
                      <select
                        id="timeframe"
                        required
                        value={formData.timeframe}
                        onChange={(e) =>
                          handleInputChange("timeframe", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeframe</option>
                        <option value="immediate">Ready to invest now</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="1-year">Within 1 year</option>
                        <option value="exploring">
                          Just exploring options
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Investment Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          handleInputChange("budget", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-plus">$500,000+</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <div className="form-step">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Additional Details
                </h3>
                <div className="space-y-6">
                  <div className="form-group">
                    <label
                      htmlFor="preferredMarkets"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Markets/Locations
                    </label>
                    <input
                      type="text"
                      id="preferredMarkets"
                      value={formData.preferredMarkets}
                      onChange={(e) =>
                        handleInputChange("preferredMarkets", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Atlanta, GA; Phoenix, AZ; Nationwide"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="currentSituation"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Current Investment Situation
                    </label>
                    <textarea
                      id="currentSituation"
                      rows={3}
                      value={formData.currentSituation}
                      onChange={(e) =>
                        handleInputChange("currentSituation", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your current portfolio or investment situation"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="challenges"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Investment Challenges
                    </label>
                    <textarea
                      id="challenges"
                      rows={3}
                      value={formData.challenges}
                      onChange={(e) =>
                        handleInputChange("challenges", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="What challenges are you facing in your investment journey?"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="hearAboutUs"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={(e) =>
                        handleInputChange("hearAboutUs", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select source</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">
                        Friend/Colleague Referral
                      </option>
                      <option value="podcast">Podcast</option>
                      <option value="youtube">YouTube</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Form Navigation */}
            <div className="form-navigation flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}
              </div>

              <div>
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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
