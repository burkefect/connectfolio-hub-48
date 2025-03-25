
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

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
      { included: true, text: "Custom domain name" },
      { included: true, text: "Mobile-optimized portfolio" },
      { included: true, text: "LinkedIn data integration" },
      { included: true, text: "Basic analytics" },
      { included: false, text: "Custom color themes" },
      { included: false, text: "Priority support" },
      { included: false, text: "PDF resume generation" },
      { included: false, text: "Monthly SEO optimization" },
    ],
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
      { included: true, text: "Custom domain name" },
      { included: true, text: "Mobile-optimized portfolio" },
      { included: true, text: "LinkedIn data integration" },
      { included: true, text: "Advanced analytics" },
      { included: true, text: "Custom color themes" },
      { included: true, text: "Priority support" },
      { included: true, text: "PDF resume generation" },
      { included: false, text: "Monthly SEO optimization" },
    ],
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
      { included: true, text: "Custom domain name" },
      { included: true, text: "Mobile-optimized portfolio" },
      { included: true, text: "LinkedIn data integration" },
      { included: true, text: "Advanced analytics & reports" },
      { included: true, text: "Custom color themes" },
      { included: true, text: "24/7 VIP support" },
      { included: true, text: "PDF resume generation" },
      { included: true, text: "Monthly SEO optimization" },
    ],
    buttonText: "Get Executive",
  }
];

const PricingTiers: React.FC = () => {
  const [period, setPeriod] = useState<PricingPeriod>('monthly');
  
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
            All plans include hosting and domain registration.
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
                >
                  {plan.buttonText}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-2 mt-1 ${feature.included ? 'text-green-500' : 'text-foreground/40'}`}>
                        <Check className="h-4 w-4" />
                      </span>
                      <span className={feature.included ? '' : 'text-foreground/50 line-through'}>
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
          <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
          <p className="text-foreground/70 mb-4">
            Need a custom solution for your organization? We offer enterprise plans for 
            companies looking to provide portfolio services to multiple employees.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
