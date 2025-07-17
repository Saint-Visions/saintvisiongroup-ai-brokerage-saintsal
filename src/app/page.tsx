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
        title="Saint Vision Group LLC"
        subtitle="Premier real estate lending and commercial financing solutions. Fixed-rate loans, bridge financing, construction loans, and investment opportunities powered by SaintSAL™ AI lending intelligence."
        primaryButtonText="Apply for Financing"
        primaryButtonAction="application"
        secondaryButtonText="View Loan Programs"
        showVideo={true}
      />

      {/* Investment Sandbox Preview */}
      <InvestmentSandbox
        title="Loan Calculator & Financing Tools"
        subtitle="Calculate rates, analyze loan terms, and explore our comprehensive lending programs for real estate and commercial projects"
        showCalculator={true}
        showComparison={true}
        backgroundColor="bg-neutral-50"
      />

      {/* CTA Section */}
      <CTA
        title="Ready to Secure Your Real Estate Financing?"
        description="Join thousands of borrowers who trust Saint Vision Group for competitive fixed rates, flexible terms, and expert lending solutions backed by SaintSAL™ AI technology."
        buttonText="Get Pre-Approved"
        buttonStyle="primary"
        action="modal"
        backgroundColor="bg-gradient-to-br from-primary-950 via-neutral-900 to-primary-900"
        textColor="text-white"
        showForm={true}
      />

      {/* Application Form Section */}
      <FormSection
        title="Loan Application"
        subtitle="Start your financing application with Saint Vision Group. Our SaintSAL™ AI technology streamlines the approval process for faster decisions."
        formType="application"
        showSteps={true}
        backgroundColor="bg-neutral-50"
      />

      {/* Footer */}
      <Footer
        companyName="Saint Vision Group LLC"
        tagline="Premier Real Estate Brokerage"
        showSocialLinks={true}
        showContactInfo={true}
        backgroundColor="bg-neutral-950"
        textColor="text-neutral-300"
        accentColor="text-gold-400"
      />
    </main>
  );
}
