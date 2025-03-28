
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Zap, 
  FileText, 
  Globe,
  Code, 
  BrainCircuit, 
  Rocket,
  MessageSquareHeart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="inline-block bg-primary/10 p-2 rounded-full mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Story</h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in animation-delay-200">
                Quikfolio was founded by three friends with a shared vision: to harness 
                the power of AI to help everyone build a remarkable professional presence online.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in animation-delay-300">
                <h2 className="text-3xl font-bold mb-6">Meet the Founders</h2>
                <p className="text-foreground/80 mb-6">
                  Quikfolio is the brainchild of Tyler, Austin, and Ryan – three friends who saw 
                  the need for an intuitive platform that combines the power of AI with professional 
                  portfolio building tools.
                </p>
                <p className="text-foreground/80 mb-6">
                  With backgrounds in technology, design, and career development, we joined forces 
                  to create a one-stop solution for job seekers and professionals looking to elevate 
                  their online presence.
                </p>
                <p className="text-foreground/80">
                  Our complementary skills and shared passion for helping others succeed professionally 
                  drives us to continuously improve and expand Quikfolio's capabilities.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 animate-fade-in animation-delay-400">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full mb-4 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                    <span className="text-3xl font-bold text-primary">T</span>
                  </div>
                  <h3 className="font-semibold">Tyler</h3>
                  <p className="text-sm text-foreground/70">Co-Founder</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full mb-4 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                    <span className="text-3xl font-bold text-primary">A</span>
                  </div>
                  <h3 className="font-semibold">Austin</h3>
                  <p className="text-sm text-foreground/70">Co-Founder</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full mb-4 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                    <span className="text-3xl font-bold text-primary">R</span>
                  </div>
                  <h3 className="font-semibold">Ryan</h3>
                  <p className="text-sm text-foreground/70">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-fade-in animation-delay-500">
              <div className="inline-block bg-primary/10 p-2 rounded-full mb-6">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-foreground/80 mb-6">
                At Quikfolio, we're on a mission to democratize professional self-presentation. 
                We believe that everyone deserves access to tools that can help them stand out 
                in today's competitive job market.
              </p>
              <p className="text-foreground/80">
                Our goal is to bring all the benefits of AI technology to one accessible platform, 
                making it simple for anyone to create professional-quality resumes and portfolios 
                without requiring technical expertise or design skills.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-12 animate-fade-in animation-delay-600">
              <div className="inline-block bg-primary/10 p-2 rounded-full mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-foreground/80 max-w-3xl mx-auto">
                From free tools to premium offerings, we provide everything you need to build your 
                professional presence online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in animation-delay-700">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resume Builder</h3>
                <p className="text-foreground/70 mb-4">
                  Create ATS-friendly resumes with our intuitive, AI-assisted builder. 
                  Choose from multiple templates, get content suggestions, and export in various formats.
                </p>
                <p className="text-sm font-medium text-green-600">Free to use</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in animation-delay-800">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Portfolio Websites</h3>
                <p className="text-foreground/70 mb-4">
                  Get your own customizable portfolio website with a personalized subdomain. 
                  Showcase your work, skills, and experience with professional templates.
                </p>
                <p className="text-sm font-medium text-primary">Starting at $9.99/month</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in animation-delay-900">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Tools</h3>
                <p className="text-foreground/70 mb-4">
                  Leverage AI to improve your professional content. Get suggestions for your resume, 
                  LinkedIn profile optimization, and personal branding assistance.
                </p>
                <p className="text-sm font-medium">Available across all services</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in animation-delay-1000">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Domain Hosting</h3>
                <p className="text-foreground/70 mb-4">
                  We handle all the technical aspects of hosting your portfolio website. No need to 
                  worry about servers, SSL certificates, or website maintenance.
                </p>
                <p className="text-sm font-medium">Included with portfolio plans</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in animation-delay-1100">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Templates</h3>
                <p className="text-foreground/70 mb-4">
                  Access exclusive, professionally designed templates for your portfolio website. 
                  Stand out with unique layouts and interactive elements.
                </p>
                <p className="text-sm font-medium">Available with Pro plan</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in animation-delay-1200">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                  <MessageSquareHeart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Priority Support</h3>
                <p className="text-foreground/70 mb-4">
                  Get personalized help with your portfolio or resume. Our team is ready to assist 
                  you with any questions or customization needs.
                </p>
                <p className="text-sm font-medium">Available with Pro plan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-12 animate-fade-in animation-delay-1300">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-primary-foreground/90 max-w-3xl mx-auto">
                These principles guide everything we do at Quikfolio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-primary-foreground/10 rounded-lg p-6 animate-fade-in animation-delay-1400">
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-primary-foreground/90">
                  We believe everyone should have access to powerful tools for professional growth, 
                  regardless of technical skill or budget.
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-lg p-6 animate-fade-in animation-delay-1500">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-primary-foreground/90">
                  We continuously explore new technologies and methods to provide cutting-edge 
                  solutions for our users.
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-lg p-6 animate-fade-in animation-delay-1600">
                <h3 className="text-xl font-semibold mb-3">User-Centric</h3>
                <p className="text-primary-foreground/90">
                  Every feature we build starts with understanding our users' needs and challenges.
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-lg p-6 animate-fade-in animation-delay-1700">
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-primary-foreground/90">
                  We believe in being clear about what our services offer and how your subscription 
                  supports continued development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-fade-in animation-delay-1800">
              <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
              <p className="text-foreground/80 mb-8">
                Every subscription supports our continued development and helps us bring more 
                innovative features to our community. Thank you for being part of the Quikfolio family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/auth?tab=signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#pricing">View Plans</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
