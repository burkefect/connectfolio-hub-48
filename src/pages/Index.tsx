
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesDashboard from '@/components/StatsDashboard';
import PortfolioPreview from '@/components/PortfolioPreview';
import BusinessCardPreview from '@/components/BusinessCardPreview';
import ResumeBuilderPreview from '@/components/ResumeBuilderPreview';
import PricingTiers from '@/components/PricingTiers';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesDashboard />
        <PortfolioPreview />
        <ResumeBuilderPreview />
        <BusinessCardPreview />
        <PricingTiers />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
