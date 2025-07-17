"use client";

import { useState } from "react";

interface CommercialLendingAppProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

interface CommercialLoanData {
  // Business Information
  businessName: string;
  businessType: string;
  yearsInBusiness: string;
  federalTaxId: string;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessZip: string;

  // Principal Information
  firstName: string;
  lastName: string;
  title: string;
  ssn: string;
  email: string;
  phone: string;
  homeAddress: string;

  // Loan Request
  loanAmount: string;
  loanPurpose: string;
  propertyType: string;
  propertyAddress: string;
  propertyValue: string;
  downPayment: string;

  // Financial Information
  annualRevenue: string;
  monthlyIncome: string;
  existingDebt: string;
  creditScore: string;
  bankStatements: boolean;
  taxReturns: boolean;
  financialStatements: boolean;

  // Additional Details
  rushProcessing: boolean;
  specialRequirements: string;
}

export default function CommercialLendingApp({
  title = "Commercial Lending Application",
  subtitle = "Secure competitive financing for your commercial real estate ventures with Saint Vision Group's expert lending team",
  backgroundColor = "bg-neutral-50",
}: CommercialLendingAppProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CommercialLoanData>({
    businessName: "",
    businessType: "",
    yearsInBusiness: "",
    federalTaxId: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessZip: "",
    firstName: "",
    lastName: "",
    title: "",
    ssn: "",
    email: "",
    phone: "",
    homeAddress: "",
    loanAmount: "",
    loanPurpose: "",
    propertyType: "",
    propertyAddress: "",
    propertyValue: "",
    downPayment: "",
    annualRevenue: "",
    monthlyIncome: "",
    existingDebt: "",
    creditScore: "",
    bankStatements: false,
    taxReturns: false,
    financialStatements: false,
    rushProcessing: false,
    specialRequirements: "",
  });

  const totalSteps = 5;

  const steps = [
    {
      id: 1,
      title: "Business Info",
      description: "Company Details & Structure",
    },
    { id: 2, title: "Principal", description: "Owner/Guarantor Information" },
    {
      id: 3,
      title: "Loan Request",
      description: "Loan Amount & Property Details",
    },
    { id: 4, title: "Financials", description: "Income & Credit Information" },
    {
      id: 5,
      title: "Documentation",
      description: "Required Documents & Review",
    },
  ];

  const businessTypes = [
    "Corporation (C-Corp)",
    "S-Corporation",
    "Limited Liability Company (LLC)",
    "Partnership",
    "Sole Proprietorship",
    "Non-Profit Organization",
    "Other",
  ];

  const propertyTypes = [
    "Office Building",
    "Retail/Shopping Center",
    "Industrial/Warehouse",
    "Multifamily (5+ units)",
    "Mixed-Use",
    "Hotel/Hospitality",
    "Special Purpose",
    "Land Development",
  ];

  const loanPurposes = [
    "Purchase",
    "Refinance",
    "Cash-Out Refinance",
    "Construction",
    "Bridge/Interim Financing",
    "Equipment Financing",
    "Working Capital",
    "Expansion/Renovation",
  ];

  const handleInputChange = (
    field: keyof CommercialLoanData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
      console.log("Commercial Loan Application:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(
        "Your commercial loan application has been submitted. Our lending team will contact you within 24 hours.",
      );
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-caption text-primary-600 mb-4 tracking-wider">
            COMMERCIAL LENDING DIVISION
          </div>
          <h2 className="text-display-lg text-gradient-primary mb-6">
            {title}
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-center items-center mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                      step.id <= currentStep
                        ? "bg-primary-600 text-white shadow-lg"
                        : "bg-neutral-200 text-neutral-500"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <svg
                        className="w-5 h-5"
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
                    <div className="text-caption text-neutral-500 mt-1 max-w-[100px]">
                      {step.description}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-4 mt-[-40px] transition-all duration-300 ${
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

        {/* Form Container */}
        <div className="card-premium p-10">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Business Information */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h3 className="text-headline-md text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Business Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Legal Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) =>
                          handleInputChange("businessName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Enter your business legal name"
                      />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Business Type *
                      </label>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) =>
                          handleInputChange("businessType", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Years in Business *
                      </label>
                      <select
                        required
                        value={formData.yearsInBusiness}
                        onChange={(e) =>
                          handleInputChange("yearsInBusiness", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select years</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-2">1-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Federal Tax ID (EIN) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.federalTaxId}
                        onChange={(e) =>
                          handleInputChange("federalTaxId", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="XX-XXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Business Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessAddress}
                        onChange={(e) =>
                          handleInputChange("businessAddress", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Street address"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessCity}
                          onChange={(e) =>
                            handleInputChange("businessCity", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                          State *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessState}
                          onChange={(e) =>
                            handleInputChange("businessState", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                          ZIP *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessZip}
                          onChange={(e) =>
                            handleInputChange("businessZip", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Principal Information */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h3 className="text-headline-md text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Principal/Guarantor Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Title/Position *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="CEO, Owner, President, etc."
                      />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Social Security Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.ssn}
                        onChange={(e) =>
                          handleInputChange("ssn", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="XXX-XX-XXXX"
                      />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Home Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.homeAddress}
                        onChange={(e) =>
                          handleInputChange("homeAddress", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Full home address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Loan Request */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h3 className="text-headline-md text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Loan Request Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Requested Loan Amount *
                      </label>
                      <select
                        required
                        value={formData.loanAmount}
                        onChange={(e) =>
                          handleInputChange("loanAmount", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select amount</option>
                        <option value="100k-500k">$100K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-10m">$5M - $10M</option>
                        <option value="10m+">$10M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Loan Purpose *
                      </label>
                      <select
                        required
                        value={formData.loanPurpose}
                        onChange={(e) =>
                          handleInputChange("loanPurpose", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select purpose</option>
                        {loanPurposes.map((purpose) => (
                          <option key={purpose} value={purpose}>
                            {purpose}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Property Type *
                      </label>
                      <select
                        required
                        value={formData.propertyType}
                        onChange={(e) =>
                          handleInputChange("propertyType", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Estimated Property Value *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.propertyValue}
                        onChange={(e) =>
                          handleInputChange("propertyValue", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="$0,000,000"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Property Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.propertyAddress}
                        onChange={(e) =>
                          handleInputChange("propertyAddress", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Full property address"
                      />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-neutral-700 mb-2 block">
                        Down Payment Available *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.downPayment}
                        onChange={(e) =>
                          handleInputChange("downPayment", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="$000,000 or percentage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Continue with remaining steps... */}

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
