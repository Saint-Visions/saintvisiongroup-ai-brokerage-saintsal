import "../components/builder/builder-registry";
import Hero from "../components/builder/Hero";
import CTA from "../components/builder/CTA";
import InvestmentSandbox from "../components/builder/InvestmentSandbox";
import FormSection from "../components/builder/FormSection";
import Footer from "../components/builder/Footer";

export default function Home() {
  return (
    <main className="homepage">
      {/* Hero Section */}
      <Hero
        title="Strategic Real Estate Intelligence"
        subtitle="Transform your property investments with AI-driven analytics, professional strategy insights, and enterprise-grade automation. Experience the power of strategic thinking in real estate."
        primaryButtonText="Begin Strategic Analysis"
        primaryButtonAction="application"
        secondaryButtonText="Explore Investment Sandbox"
        showVideo={true}
      />

      {/* Investment Sandbox Preview */}
      <InvestmentSandbox
        title="Investment Sandbox"
        subtitle="Analyze deals, model scenarios, and execute high-return investments with precision"
        showCalculator={true}
        showComparison={true}
        backgroundColor="bg-white"
      />

      {/* CTA Section */}
      <CTA
        title="Ready to Elevate Your Investment Strategy?"
        description="Join elite investors already using Saint Vision Group's strategic intelligence to maximize their returns with AI-powered insights and professional-grade automation."
        buttonText="Access Strategic Platform"
        buttonStyle="primary"
        action="modal"
        backgroundColor="bg-gradient-to-r from-yellow-600 to-yellow-700"
        textColor="text-black"
        showForm={true}
      />

      {/* Application Form Section */}
      <FormSection
        title="Start Your Investment Application"
        subtitle="Take the first step towards maximizing your real estate returns with our AI-powered platform"
        formType="application"
        showSteps={true}
        backgroundColor="bg-gray-50"
      />

      {/* Footer */}
      <Footer
        companyName="Saint Vision Group"
        tagline="Strategic Real Estate Intelligence"
        showSocialLinks={true}
        showContactInfo={true}
        backgroundColor="bg-gray-900"
        textColor="text-gray-300"
        accentColor="text-yellow-400"
      />
    </main>
  );
}
