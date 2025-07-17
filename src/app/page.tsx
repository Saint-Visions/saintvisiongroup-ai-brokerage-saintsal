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
        title="SaintSAL™ - AI-Powered Real Estate Brokerage"
        subtitle="Transform your real estate investments with AI-driven automation, advanced analytics, and seamless CRM integration. Join the future of property investment."
        primaryButtonText="Start Your Investment Journey"
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
        title="Ready to Transform Your Real Estate Investments?"
        description="Join thousands of investors already using SaintSAL™ to maximize their returns with AI-powered insights and automation."
        buttonText="Get Started Today"
        buttonStyle="primary"
        action="modal"
        backgroundColor="bg-gradient-to-r from-blue-600 to-purple-600"
        textColor="text-white"
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
        companyName="SaintSAL™"
        tagline="AI-Powered Real Estate Brokerage"
        showSocialLinks={true}
        showContactInfo={true}
        backgroundColor="bg-gray-900"
        textColor="text-gray-300"
        accentColor="text-blue-400"
      />
    </main>
  );
}
