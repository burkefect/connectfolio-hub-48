
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { File, Globe, PenTool, Image, Link, Briefcase, FileText } from 'lucide-react';

const FeaturesDashboard: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need for Your Professional Presence
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Our all-in-one platform provides the essential tools to build your personal brand and stand out in your job search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Resume Builder */}
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm animate-slide-up">
            <div className="bg-primary p-4 flex justify-center">
              <FileText className="h-12 w-12 text-primary-foreground" />
            </div>
            <CardHeader>
              <CardTitle>Free Resume Builder</CardTitle>
              <CardDescription>Create professional resumes with our easy-to-use builder</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>ATS-optimized templates that pass applicant tracking systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>Multiple design options for different industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>Export as PDF, Word, or publish directly to your portfolio</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Portfolio Website */}
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm animate-slide-up animation-delay-200">
            <div className="bg-primary p-4 flex justify-center">
              <Globe className="h-12 w-12 text-primary-foreground" />
            </div>
            <CardHeader>
              <CardTitle>Portfolio Website + Hosting</CardTitle>
              <CardDescription>Your professional online presence in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>Custom subdomain (yourname.quikfolio.com) included</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>Mobile-optimized responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>Hosting, SSL, and technical maintenance included</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Digital Business Cards */}
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm animate-slide-up animation-delay-400">
            <div className="bg-primary p-4 flex justify-center">
              <Briefcase className="h-12 w-12 text-primary-foreground" />
            </div>
            <CardHeader>
              <CardTitle>Digital Business Cards</CardTitle>
              <CardDescription>Share your details with just a tap or scan</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>Digital cards with QR code for easy sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>Printable designs for physical business cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">✓</div>
                  <span>Integrated with your portfolio for consistent branding</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm animate-fade-in animation-delay-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
              <p className="text-foreground/70">
                Choose from various professional templates that match your industry and personal style.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                <Link className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn Integration</h3>
              <p className="text-foreground/70">
                Import your professional details directly from LinkedIn to save time and ensure consistency.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                <Image className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Showcase</h3>
              <p className="text-foreground/70">
                Highlight your work with beautiful project galleries, case studies, and testimonials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDashboard;
