"use client";

import { useState, useEffect, useCallback } from "react";

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
}

export default function InvestmentSandbox({
  title = "Investment Sandbox",
  subtitle = "Analyze deals, model scenarios, and execute high-return investments with precision",
  showCalculator = true,
  showComparison = true,
  backgroundColor = "bg-white",
}: InvestmentSandboxProps) {
  const [dealData, setDealData] = useState<DealData>({
    purchasePrice: 250000,
    downPayment: 20,
    interestRate: 6.5,
    loanTerm: 30,
    monthlyRent: 2200,
    vacancyRate: 5,
    propertyTaxes: 3000,
    insurance: 1200,
    maintenance: 1500,
    rehabCosts: 15000,
    closingCosts: 5000,
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
  });

  const [activeStrategy, setActiveStrategy] = useState("buy-hold");

  useEffect(() => {
    calculateDealMetrics();
  }, [dealData]);

  const calculateDealMetrics = useCallback(() => {
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

    // Returns
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
    });
  }, [dealData]);

  const strategies = [
    { id: "buy-hold", name: "Buy & Hold", icon: "🏠" },
    { id: "brrrr", name: "BRRRR", icon: "🔄" },
    { id: "fix-flip", name: "Fix & Flip", icon: "🔨" },
    { id: "wholesale", name: "Wholesale", icon: "📋" },
    { id: "multifamily", name: "Multifamily", icon: "🏢" },
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

  return (
    <section className={`sandbox-section py-16 ${backgroundColor} relative`}>
      {/* Strategic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F1005f14aff024d168dcd72d638634d3a?format=webp&width=800)`,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="sandbox-header text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Strategy Selector */}
        <div className="strategy-selector mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Choose Your Investment Strategy
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {strategies.map((strategy) => (
              <button
                key={strategy.id}
                onClick={() => setActiveStrategy(strategy.id)}
                className={`strategy-button flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeStrategy === strategy.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-xl">{strategy.icon}</span>
                {strategy.name}
              </button>
            ))}
          </div>
        </div>

        {showCalculator && (
          <div className="calculator-section grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Input Form */}
            <div className="input-form bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Deal Parameters
              </h3>

              <div className="input-groups space-y-6">
                {/* Purchase Details */}
                <div className="input-group">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Purchase Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purchase Price
                      </label>
                      <input
                        type="number"
                        value={dealData.purchasePrice}
                        onChange={(e) =>
                          handleInputChange(
                            "purchasePrice",
                            Number(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Down Payment (%)
                      </label>
                      <input
                        type="number"
                        value={dealData.downPayment}
                        onChange={(e) =>
                          handleInputChange(
                            "downPayment",
                            Number(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Loan Details */}
                <div className="input-group">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Loan Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interest Rate (%)
                      </label>
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Term (years)
                      </label>
                      <input
                        type="number"
                        value={dealData.loanTerm}
                        onChange={(e) =>
                          handleInputChange("loanTerm", Number(e.target.value))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Income & Expenses */}
                <div className="input-group">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Income & Expenses
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Rent
                      </label>
                      <input
                        type="number"
                        value={dealData.monthlyRent}
                        onChange={(e) =>
                          handleInputChange(
                            "monthlyRent",
                            Number(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vacancy Rate (%)
                      </label>
                      <input
                        type="number"
                        value={dealData.vacancyRate}
                        onChange={(e) =>
                          handleInputChange(
                            "vacancyRate",
                            Number(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Property Taxes
                      </label>
                      <input
                        type="number"
                        value={dealData.propertyTaxes}
                        onChange={(e) =>
                          handleInputChange(
                            "propertyTaxes",
                            Number(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Insurance
                      </label>
                      <input
                        type="number"
                        value={dealData.insurance}
                        onChange={(e) =>
                          handleInputChange("insurance", Number(e.target.value))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="results-panel bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Deal Analysis
              </h3>

              <div className="results-grid space-y-4">
                {/* Key Metrics */}
                <div className="metric-card bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Monthly Cash Flow
                  </h4>
                  <div
                    className={`text-2xl font-bold ${results.monthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {formatCurrency(results.monthlyCashFlow)}
                  </div>
                </div>

                <div className="metric-card bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Annual Cash Flow
                  </h4>
                  <div
                    className={`text-2xl font-bold ${results.annualCashFlow >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {formatCurrency(results.annualCashFlow)}
                  </div>
                </div>

                <div className="metric-card bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Cash-on-Cash Return
                  </h4>
                  <div
                    className={`text-2xl font-bold ${results.cashOnCashReturn >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {formatPercentage(results.cashOnCashReturn)}
                  </div>
                </div>

                <div className="metric-card bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Cap Rate
                  </h4>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatPercentage(results.cap)}
                  </div>
                </div>

                <div className="metric-card bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Total Investment
                  </h4>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(results.totalInvestment)}
                  </div>
                </div>
              </div>

              {/* Deal Quality Indicator */}
              <div className="deal-quality mt-6 p-4 rounded-lg bg-white">
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  Deal Quality
                </h4>
                <div className="flex items-center gap-2">
                  {results.cashOnCashReturn >= 12 ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <span className="text-xl">🟢</span>
                      <span className="font-semibold">Excellent Deal</span>
                    </div>
                  ) : results.cashOnCashReturn >= 8 ? (
                    <div className="flex items-center gap-2 text-yellow-600">
                      <span className="text-xl">🟡</span>
                      <span className="font-semibold">Good Deal</span>
                    </div>
                  ) : results.cashOnCashReturn >= 0 ? (
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="text-xl">🟠</span>
                      <span className="font-semibold">Fair Deal</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <span className="text-xl">🔴</span>
                      <span className="font-semibold">Poor Deal</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="action-buttons text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Save Deal Analysis
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Get Funding Options
            </button>
            <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300">
              Export Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
