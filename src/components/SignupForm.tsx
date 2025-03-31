
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Globe } from 'lucide-react';
import { toast } from "sonner";
import { useLocation } from 'react-router-dom';

const SignupForm: React.FC = () => {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState<string>('Basic');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    linkedinUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subdomainPreview, setSubdomainPreview] = useState('yourname.quikfolio.com');
  
  useEffect(() => {
    // Check if a plan was passed via location state
    if (location.state && location.state.plan) {
      setSelectedPlan(location.state.plan);
    }
  }, [location]);
  
  useEffect(() => {
    // Update subdomain preview based on name fields
    if (formData.firstName && formData.lastName) {
      const subdomain = `${formData.firstName.toLowerCase()}${formData.lastName.toLowerCase()}.quikfolio.com`;
      setSubdomainPreview(subdomain);
    } else {
      setSubdomainPreview('yourname.quikfolio.com');
    }
  }, [formData.firstName, formData.lastName]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Profile creation started!", {
        description: `We're setting up your portfolio at ${subdomainPreview}`,
      });
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        linkedinUrl: '',
      });
    }, 1500);
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-white dark:from-gray-800 to-secondary/30 dark:to-gray-900/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden animate-scale-in">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-2">Create Your Portfolio</h2>
              <p className="text-foreground/70 mb-6">
                Connect your LinkedIn profile to get started with a professionally designed portfolio website.
                {selectedPlan !== 'Basic' && ' You selected the ' + selectedPlan + ' plan.'}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground/70 mb-1">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground/70 mb-1">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subdomain" className="block text-sm font-medium text-foreground/70 mb-1">
                    Your Portfolio Subdomain
                  </label>
                  <div className="flex items-center p-3 bg-secondary/30 dark:bg-gray-700 rounded-md">
                    <Globe className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">{subdomainPreview}</span>
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">
                    This will be your portfolio's web address
                  </p>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium text-foreground/70 mb-1">
                    LinkedIn Profile URL
                  </label>
                  <div className="flex">
                    <div className="bg-secondary dark:bg-gray-700 flex items-center px-3 rounded-l-md border border-r-0 border-input">
                      <Linkedin className="h-4 w-4 text-foreground/70" />
                    </div>
                    <Input
                      id="linkedinUrl"
                      name="linkedinUrl"
                      type="url"
                      required
                      className="rounded-l-none"
                      placeholder="linkedin.com/in/username"
                      value={formData.linkedinUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">
                    We'll use your LinkedIn data to populate your portfolio
                  </p>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : `Create Your ${selectedPlan} Portfolio`}
                </Button>
                
                <p className="text-xs text-center text-foreground/60 mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
            
            <div className="bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">What You'll Get</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Professional portfolio website with your custom subdomain</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Automatic import of your skills, experience, and education from LinkedIn</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Mobile-optimized responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>SEO optimization to help employers find you</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Website hosting and technical maintenance included</span>
                </li>
                {selectedPlan === 'Basic' ? (
                  <li className="flex items-start">
                    <span className="mr-3 mt-1">✓</span>
                    <span>Access to Standard templates (Minimalist, Professional, Industry-Specific)</span>
                  </li>
                ) : (
                  <>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">✓</span>
                      <span>Access to ALL templates (including Creative & Interactive)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">✓</span>
                      <span>Priority support and early access to new features</span>
                    </li>
                  </>
                )}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <blockquote className="italic opacity-80">
                  "My Quikfolio site helped me land interviews at top tech companies after just 2 weeks."
                </blockquote>
                <div className="mt-2 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 mr-2"></div>
                  <div>
                    <div className="text-sm font-medium">Sarah Johnson</div>
                    <div className="text-xs opacity-80">Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
