
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type PricingPeriod = 'monthly' | 'annually';

interface PlanFeature {
  included: boolean;
  text: string;
}

interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: PlanFeature[];
  availableTemplates: string[];
  highlighted?: boolean;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: {
      monthly: 9.99,
      annually: 7.99,
    },
    description: "Perfect for new job seekers",
    features: [
      { included: true, text: "Custom firstnamelastname.quikfolio.com subdomain" },
      { included: true, text: "Mobile-optimized portfolio" },
      { included: true, text: "LinkedIn data integration" },
      { included: true, text: "Website hosting included" },
      { included: true, text: "Basic analytics" },
      { included: true, text: "Content editing capabilities" },
      { included: false, text: "Access to premium templates" },
      { included: false, text: "Priority support" },
      { included: false, text: "PDF resume generation" },
      { included: false, text: "Digital business card" },
      { included: false, text: "Monthly SEO optimization" },
      { included: false, text: "Early access to new features" },
    ],
    availableTemplates: ["Minimalist", "Professional", "Industry-Specific"],
    buttonText: "Get Started",
  },
  {
    name: "Professional",
    price: {
      monthly: 19.99,
      annually: 15.99,
    },
    description: "For serious career advancement",
    highlighted: true,
    features: [
      { included: true, text: "Custom firstnamelastname.quikfolio.com subdomain" },
      { included: true, text: "Mobile-optimized portfolio" },
      { included: true, text: "LinkedIn data integration" },
      { included: true, text: "Website hosting included" },
      { included: true, text: "Advanced analytics" },
      { included: true, text: "Content editing capabilities" },
      { included: true, text: "Access to ALL premium templates" },
      { included: true, text: "Priority support" },
      { included: true, text: "PDF resume generation" },
      { included: true, text: "Digital business card" },
      { included: true, text: "Monthly SEO optimization" },
      { included: true, text: "Early access to new features" },
    ],
    availableTemplates: ["Minimalist", "Professional", "Industry-Specific", "Creative", "Interactive"],
    buttonText: "Get Pro",
  },
  {
    name: "Executive",
    price: {
      monthly: 29.99,
      annually: 23.99,
    },
    description: "Complete career presence solution",
    features: [
      { included: true, text: "Custom firstnamelastname.quikfolio.com subdomain" },
      { included: true, text: "Custom domain name option" },
      { included: true, text: "Mobile-optimized portfolio" },
      { included: true, text: "LinkedIn data integration" },
      { included: true, text: "Website hosting included" },
      { included: true, text: "Advanced analytics & reports" },
      { included: true, text: "Content editing capabilities" },
      { included: true, text: "Access to ALL premium templates" },
      { included: true, text: "24/7 VIP support" },
      { included: true, text: "PDF resume generation" },
      { included: true, text: "Digital & printable business cards" },
      { included: true, text: "Monthly SEO optimization" },
      { included: true, text: "Early access to new features" },
      { included: true, text: "Dedicated account manager" },
    ],
    availableTemplates: ["Minimalist", "Professional", "Industry-Specific", "Creative", "Interactive"],
    buttonText: "Get Executive",
  }
];

const PricingTiers: React.FC = () => {
  const [period, setPeriod] = useState<PricingPeriod>('monthly');
  const navigate = useNavigate();
  
  const togglePeriod = () => {
    setPeriod(period === 'monthly' ? 'annually' : 'monthly');
  };
  
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Choose the perfect plan to elevate your professional presence online.
            All plans include hosting and your personal subdomain.
          </p>
          
          {/* Period toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`text-sm mr-3 ${period === 'monthly' ? 'font-semibold' : 'text-foreground/70'}`}>
              Monthly
            </span>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                period === 'annually' ? 'bg-primary' : 'bg-foreground/20'
              }`}
              onClick={togglePeriod}
              type="button"
              role="switch"
              aria-checked={period === 'annually'}
            >
              <span
                className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                  period === 'annually' ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ml-3 ${period === 'annually' ? 'font-semibold' : 'text-foreground/70'}`}>
              Annually <span className="text-xs text-green-600 font-medium">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden animate-slide-up ${
                plan.highlighted 
                  ? 'border-2 border-primary shadow-lg' 
                  : 'border border-border shadow-sm'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center text-sm py-1">
                  Most Popular
                </div>
              )}
              <div className={`p-6 ${plan.highlighted ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-foreground/70 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${period === 'monthly' ? plan.price.monthly : plan.price.annually}
                  </span>
                  <span className="text-foreground/70">/mo</span>
                </div>
                <Button 
                  className={`w-full mb-6 ${plan.highlighted ? '' : 'bg-foreground/90 hover:bg-foreground'}`}
                  onClick={() => navigate('/auth', { state: { plan: plan.name } })}
                >
                  {plan.buttonText}
                </Button>
                
                {/* Available Templates */}
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Available Templates:</h4>
                  <ul className="space-y-1">
                    {plan.availableTemplates.map((template, i) => (
                      <li key={i} className="text-sm flex items-center text-foreground/80">
                        <Check className="h-3.5 w-3.5 text-green-500 mr-2" />
                        {template}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <h4 className="font-medium text-sm mb-2">Features:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-2 mt-1 ${feature.included ? 'text-green-500' : 'text-foreground/40'}`}>
                        {feature.included ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                      </span>
                      <span className={feature.included ? '' : 'text-foreground/50'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center p-6 bg-secondary/50 rounded-xl max-w-3xl mx-auto animate-fade-in animation-delay-600">
          <h3 className="text-xl font-semibold mb-2">Why We Charge a Monthly Fee</h3>
          <p className="text-foreground/70 mb-4">
            Your subscription covers high-performance website hosting, automatic subdomain creation,
            ongoing technical maintenance, and continuous platform updates. We take care of all the technical
            aspects so you can focus on showcasing your professional achievements.
          </p>
          <Button variant="outline" onClick={() => navigate('/auth')}>Get Started Today</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
