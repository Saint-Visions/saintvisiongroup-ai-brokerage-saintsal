"use client";

import React, { useState, useEffect, useCallback } from "react";

interface InvestmentSandboxProps {
  title?: string;
  subtitle?: string;
  showCalculator?: boolean;
  showComparison?: boolean;
  backgroundColor?: string;
}

interface DealData {
  purchasePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  monthlyRent: number;
  vacancyRate: number;
  propertyTaxes: number;
  insurance: number;
  maintenance: number;
  rehabCosts: number;
  closingCosts: number;
}

interface DealResults {
  monthlyPayment: number;
  totalInvestment: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlyCashFlow: number;
  annualCashFlow: number;
  cashOnCashReturn: number;
  cap: number;
  roi: number;
  irr: number;
  equityBuild: number;
}

interface MarketData {
  averageCapRate: number;
  marketAppreciation: number;
  rentGrowth: number;
  competitiveAnalysis: string;
}

export default function InvestmentSandbox({
  title = "Loan Calculator & Financing Tools",
  subtitle = "Calculate loan payments, compare rates, and explore our comprehensive lending programs with SaintSAL™ AI assistance",
  showCalculator = true,
  showComparison = true,
  backgroundColor = "bg-neutral-50",
}: InvestmentSandboxProps) {
  const [dealData, setDealData] = useState<DealData>({
    purchasePrice: 750000,
    downPayment: 25,
    interestRate: 7.2,
    loanTerm: 30,
    monthlyRent: 5800,
    vacancyRate: 4,
    propertyTaxes: 9000,
    insurance: 2400,
    maintenance: 3600,
    rehabCosts: 45000,
    closingCosts: 18000,
  });

  const [results, setResults] = useState<DealResults>({
    monthlyPayment: 0,
    totalInvestment: 0,
    monthlyIncome: 0,
    monthlyExpenses: 0,
    monthlyCashFlow: 0,
    annualCashFlow: 0,
    cashOnCashReturn: 0,
    cap: 0,
    roi: 0,
    irr: 0,
    equityBuild: 0,
  });

  const [marketData] = useState<MarketData>({
    averageCapRate: 5.8,
    marketAppreciation: 4.2,
    rentGrowth: 3.1,
    competitiveAnalysis: "Above Market Average",
  });

  const [activeStrategy, setActiveStrategy] = useState("institutional-hold");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    calculateDealMetrics();
  }, [dealData]);

  const calculateDealMetrics = useCallback(() => {
    setIsAnalyzing(true);

    setTimeout(() => {
      const downPaymentAmount =
        (dealData.purchasePrice * dealData.downPayment) / 100;
      const loanAmount = dealData.purchasePrice - downPaymentAmount;

      // Monthly payment calculation
      const monthlyRate = dealData.interestRate / 100 / 12;
      const numberOfPayments = dealData.loanTerm * 12;
      const monthlyPayment =
        (loanAmount *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      // Monthly income (accounting for vacancy)
      const monthlyIncome =
        dealData.monthlyRent * (1 - dealData.vacancyRate / 100);

      // Monthly expenses
      const monthlyExpenses =
        monthlyPayment +
        dealData.propertyTaxes / 12 +
        dealData.insurance / 12 +
        dealData.maintenance / 12;

      // Cash flow
      const monthlyCashFlow = monthlyIncome - monthlyExpenses;
      const annualCashFlow = monthlyCashFlow * 12;

      // Total investment
      const totalInvestment =
        downPaymentAmount + dealData.rehabCosts + dealData.closingCosts;

      // Advanced metrics
      const cashOnCashReturn =
        totalInvestment > 0 ? (annualCashFlow / totalInvestment) * 100 : 0;
      const annualIncome =
        dealData.monthlyRent * 12 * (1 - dealData.vacancyRate / 100);
      const annualExpenses =
        dealData.propertyTaxes + dealData.insurance + dealData.maintenance;
      const noi = annualIncome - annualExpenses;
      const cap =
        dealData.purchasePrice > 0 ? (noi / dealData.purchasePrice) * 100 : 0;
      const roi = totalInvestment > 0 ? (noi / totalInvestment) * 100 : 0;

      // Estimated IRR (simplified calculation)
      const irr = cashOnCashReturn + marketData.marketAppreciation;

      // Annual equity build (principal paydown)
      const equityBuild = monthlyPayment * 12 * 0.3; // Simplified

      setResults({
        monthlyPayment,
        totalInvestment,
        monthlyIncome,
        monthlyExpenses,
        monthlyCashFlow,
        annualCashFlow,
        cashOnCashReturn,
        cap,
        roi,
        irr,
        equityBuild,
      });

      setIsAnalyzing(false);
    }, 800);
  }, [dealData, marketData]);

  const strategies = [
    {
      id: "fixed-rate",
      name: "Fixed-Rate Loan",
      icon: "🏛️",
      desc: "Stable long-term financing",
    },
    {
      id: "bridge-loan",
      name: "Bridge Loan",
      icon: "🌉",
      desc: "Short-term transitional funding",
    },
    {
      id: "construction",
      name: "Construction Loan",
      icon: "🏗️",
      desc: "Development financing",
    },
    {
      id: "commercial",
      name: "Commercial Loan",
      icon: "🏢",
      desc: "Business property financing",
    },
    {
      id: "investment",
      name: "Investment Property",
      icon: "📈",
      desc: "Rental property loans",
    },
  ];

  const handleInputChange = (field: keyof DealData, value: number) => {
    setDealData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(2)}%`;
  };

  const getDealRating = () => {
    if (results.cashOnCashReturn >= 15)
      return { rating: "AAA", color: "emerald", label: "Institutional Grade" };
    if (results.cashOnCashReturn >= 12)
      return { rating: "AA", color: "emerald", label: "Premium Asset" };
    if (results.cashOnCashReturn >= 9)
      return { rating: "A", color: "gold", label: "Strong Performance" };
    if (results.cashOnCashReturn >= 6)
      return { rating: "BBB", color: "gold", label: "Market Rate" };
    if (results.cashOnCashReturn >= 3)
      return { rating: "BB", color: "orange", label: "Below Market" };
    return { rating: "B", color: "red", label: "High Risk" };
  };

  const dealRating = getDealRating();

  return (
    <section
      id="investment-sandbox"
      className={`relative py-20 ${backgroundColor}`}
    >
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, var(--primary-600) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, var(--gold-500) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="text-caption text-primary-600 mb-4 tracking-wider">
            SAINTSΑL™ AI-POWERED LENDING PLATFORM
          </div>
          <h2 className="text-display-lg text-gradient-primary mb-6">
            {title}
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Strategy Selector */}
        <div className="mb-12">
          <h3 className="text-headline-md text-neutral-900 mb-8 text-center">
            Choose Your Loan Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {strategies.map((strategy) => (
              <button
                key={strategy.id}
                onClick={() => setActiveStrategy(strategy.id)}
                className={`card-premium p-6 text-center transition-all duration-300 group ${
                  activeStrategy === strategy.id
                    ? "border-primary-500 bg-primary-50 shadow-xl"
                    : "hover:border-primary-300 hover:shadow-lg"
                }`}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {strategy.icon}
                </div>
                <div
                  className={`text-headline-sm mb-2 ${
                    activeStrategy === strategy.id
                      ? "text-primary-700"
                      : "text-neutral-800"
                  }`}
                >
                  {strategy.name}
                </div>
                <div className="text-body-sm text-neutral-600">
                  {strategy.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showCalculator && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
            {/* Input Parameters */}
            <div className="xl:col-span-2">
              <div className="card-premium p-8">
                <h3 className="text-headline-md text-neutral-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  Deal Parameters
                </h3>

                <div className="space-y-8">
                  {/* Property Acquisition */}
                  <div>
                    <h4 className="text-headline-sm text-neutral-800 mb-6 pb-2 border-b border-neutral-200">
                      Property Acquisition
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Purchase Price
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                            $
                          </span>
                          <input
                            type="number"
                            value={dealData.purchasePrice}
                            onChange={(e) =>
                              handleInputChange(
                                "purchasePrice",
                                Number(e.target.value),
                              )
                            }
                            className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Down Payment
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={dealData.downPayment}
                            onChange={(e) =>
                              handleInputChange(
                                "downPayment",
                                Number(e.target.value),
                              )
                            }
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financing Terms */}
                  <div>
                    <h4 className="text-headline-sm text-neutral-800 mb-6 pb-2 border-b border-neutral-200">
                      Financing Terms
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Interest Rate
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            step="0.1"
                            value={dealData.interestRate}
                            onChange={(e) =>
                              handleInputChange(
                                "interestRate",
                                Number(e.target.value),
                              )
                            }
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                            %
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Loan Term
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={dealData.loanTerm}
                            onChange={(e) =>
                              handleInputChange(
                                "loanTerm",
                                Number(e.target.value),
                              )
                            }
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                            years
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue & Operating Expenses */}
                  <div>
                    <h4 className="text-headline-sm text-neutral-800 mb-6 pb-2 border-b border-neutral-200">
                      Revenue & Operating Expenses
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Monthly Rent Revenue
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                            $
                          </span>
                          <input
                            type="number"
                            value={dealData.monthlyRent}
                            onChange={(e) =>
                              handleInputChange(
                                "monthlyRent",
                                Number(e.target.value),
                              )
                            }
                            className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Vacancy Allowance
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={dealData.vacancyRate}
                            onChange={(e) =>
                              handleInputChange(
                                "vacancyRate",
                                Number(e.target.value),
                              )
                            }
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                            %
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Annual Property Taxes
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                            $
                          </span>
                          <input
                            type="number"
                            value={dealData.propertyTaxes}
                            onChange={(e) =>
                              handleInputChange(
                                "propertyTaxes",
                                Number(e.target.value),
                              )
                            }
                            className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-body-sm font-medium text-neutral-700">
                          Annual Insurance
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                            $
                          </span>
                          <input
                            type="number"
                            value={dealData.insurance}
                            onChange={(e) =>
                              handleInputChange(
                                "insurance",
                                Number(e.target.value),
                              )
                            }
                            className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Dashboard */}
            <div className="space-y-6">
              {/* Deal Rating */}
              <div className="card-premium p-6 text-center">
                <div className="text-caption text-neutral-600 mb-2">
                  INVESTMENT GRADE
                </div>
                <div
                  className={`text-5xl font-bold text-${dealRating.color}-600 mb-2`}
                >
                  {dealRating.rating}
                </div>
                <div
                  className={`text-body-sm text-${dealRating.color}-700 font-medium`}
                >
                  {dealRating.label}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="card-premium p-6">
                <h4 className="text-headline-sm text-neutral-900 mb-6">
                  Key Performance Metrics
                </h4>

                {isAnalyzing ? (
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-4 bg-neutral-200 rounded mb-2"></div>
                        <div className="h-8 bg-neutral-100 rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-body-sm text-neutral-600">
                          Monthly Cash Flow
                        </span>
                        <div
                          className={`w-3 h-3 rounded-full ${results.monthlyCashFlow >= 0 ? "bg-emerald-500" : "bg-red-500"}`}
                        ></div>
                      </div>
                      <div
                        className={`text-2xl font-bold ${results.monthlyCashFlow >= 0 ? "text-emerald-600" : "text-red-600"}`}
                      >
                        {formatCurrency(results.monthlyCashFlow)}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-body-sm text-neutral-600">
                          Cash-on-Cash Return
                        </span>
                        <div
                          className={`w-3 h-3 rounded-full ${results.cashOnCashReturn >= 8 ? "bg-emerald-500" : results.cashOnCashReturn >= 5 ? "bg-gold-500" : "bg-red-500"}`}
                        ></div>
                      </div>
                      <div className="text-2xl font-bold text-primary-600">
                        {formatPercentage(results.cashOnCashReturn)}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-body-sm text-neutral-600">
                          Cap Rate
                        </span>
                        <div
                          className={`w-3 h-3 rounded-full ${results.cap >= marketData.averageCapRate ? "bg-emerald-500" : "bg-gold-500"}`}
                        ></div>
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">
                        {formatPercentage(results.cap)}
                      </div>
                      <div className="text-caption text-neutral-500">
                        Market Avg:{" "}
                        {formatPercentage(marketData.averageCapRate)}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-body-sm text-neutral-600">
                          Projected IRR
                        </span>
                        <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      </div>
                      <div className="text-2xl font-bold text-gradient-primary">
                        {formatPercentage(results.irr)}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Market Intelligence */}
              <div className="card-premium p-6">
                <h4 className="text-headline-sm text-neutral-900 mb-4">
                  Market Intelligence
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-body-sm text-neutral-600">
                      Market Appreciation
                    </span>
                    <span className="text-body-sm font-medium text-emerald-600">
                      +{formatPercentage(marketData.marketAppreciation)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body-sm text-neutral-600">
                      Rent Growth
                    </span>
                    <span className="text-body-sm font-medium text-emerald-600">
                      +{formatPercentage(marketData.rentGrowth)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body-sm text-neutral-600">
                      Competitive Analysis
                    </span>
                    <span className="text-body-sm font-medium text-primary-600">
                      {marketData.competitiveAnalysis}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Center */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <button className="btn-primary text-lg py-4 group">
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                Generate Investment Report
              </span>
            </button>
            <button className="btn-gold text-lg py-4 group">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                Connect with Lenders
              </span>
            </button>
            <button className="btn-secondary text-lg py-4 group">
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:animate-pulse"
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
                Schedule Analysis Call
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
