import React from 'react';
import { TopBar } from './components/TopBar';
import { Logo } from './components/Logo';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorks } from './components/HowItWorks';
import { ModulesSection } from './components/ModulesSection';
import { BonusSection } from './components/BonusSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { PlanComparisonSection } from './components/PlanComparisonSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#2D3748] flex flex-col items-center">
      {/* Top Banner */}
      <TopBar />

      {/* Main Container - Narrow Column on Desktop, Full-Width on Mobile */}
      <main className="w-full max-w-[480px] sm:max-w-[540px] md:max-w-[580px] bg-[#FFF9F2] shadow-sm flex flex-col">
        {/* Brand Header */}
        <Logo />

        {/* Hero Section */}
        <HeroSection onScrollToOffers={scrollToOffers} />

        {/* Benefits & Skills Section */}
        <BenefitsSection />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Complete Content / Modules (01 to 09) */}
        <ModulesSection />

        {/* Exclusive Bonuses (01 to 05) */}
        <BonusSection />

        {/* Target Audience Section */}
        <TargetAudienceSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Main Pricing / Offers Section */}
        <PricingSection />

        {/* Plan Comparison Section */}
        <PlanComparisonSection />

        {/* 7 Days Guarantee Section */}
        <GuaranteeSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
