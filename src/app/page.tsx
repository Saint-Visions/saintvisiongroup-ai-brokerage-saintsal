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
        title="Saint Vision Group™"
        subtitle="Premier real estate brokerage powered by SaintSAL™ AI. Where human expertise meets cutting-edge intelligence to deliver exceptional investment results."
        primaryButtonText="Start Your Journey"
        primaryButtonAction="application"
        secondaryButtonText="Meet SaintSAL™ AI"
        showVideo={true}
      />

      {/* Investment Sandbox Preview */}
      <InvestmentSandbox
        title="SaintSAL™ Investment Intelligence"
        subtitle="Our proprietary AI analyzes deals, models scenarios, and identifies high-return opportunities with institutional-grade precision"
        showCalculator={true}
        showComparison={true}
        backgroundColor="bg-neutral-50"
      />

      {/* CTA Section */}
      <CTA
        title="Experience the Saint Vision Group Advantage"
        description="Join successful investors who trust Saint Vision Group's proven expertise combined with SaintSAL™ AI technology to achieve superior real estate returns."
        buttonText="Schedule Consultation"
        buttonStyle="primary"
        action="modal"
        backgroundColor="bg-gradient-to-br from-primary-950 via-neutral-900 to-primary-900"
        textColor="text-white"
        showForm={true}
      />

      {/* Application Form Section */}
      <FormSection
        title="Partner with Saint Vision Group"
        subtitle="Begin your real estate investment journey with our expert team and SaintSAL™ AI technology"
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
