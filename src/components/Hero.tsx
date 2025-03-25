
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content */}
          <div className="w-full md:w-1/2 md:pr-8 space-y-6 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Stand out in your 
              <span className="text-gradient block"> job search</span> 
              with a premium portfolio
            </h1>
            <p className="text-lg text-foreground/70 sm:text-xl max-w-2xl">
              Create a professional portfolio website that gets you noticed. 
              Our platform helps you showcase your skills and experience to 
              land your dream job faster.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button size="lg" className="group">
                Create Your Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Examples
              </Button>
            </div>
            <div className="flex items-center pt-4 text-sm text-foreground/60">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
              </div>
              <p>
                <span className="font-semibold text-foreground/80">Join 2,000+</span> 
                {' '}professionals who've landed jobs with our portfolios
              </p>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="w-full md:w-1/2 relative animate-slide-up animation-delay-400">
            <div className="relative aspect-[4/3] mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background rounded-2xl transform rotate-3 scale-95 shadow-lg"></div>
              <div className="absolute inset-0 bg-white rounded-2xl glassmorphism transform -rotate-3 shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl p-4">
                  <div className="h-4 w-24 bg-foreground/10 rounded mb-4"></div>
                  <div className="h-8 w-48 bg-foreground/10 rounded mb-6"></div>
                  <div className="h-32 w-full bg-foreground/5 rounded mb-4"></div>
                  <div className="h-24 w-full bg-foreground/5 rounded"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-white rounded-2xl glassmorphism shadow-lg overflow-hidden animate-float">
                <div className="h-full w-full object-cover p-4">
                  <div className="h-4 w-24 bg-foreground/10 rounded mb-4"></div>
                  <div className="h-10 w-2/3 bg-foreground/10 rounded mb-6"></div>
                  <div className="h-32 w-full bg-foreground/5 rounded mb-4"></div>
                  <div className="h-24 w-full bg-foreground/5 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-0 right-0 transform -translate-y-1/3 translate-x-1/4 animate-float animation-delay-200">
              <div className="glassmorphism p-4 rounded-xl shadow-lg">
                <div className="w-20 h-16 flex flex-col items-center justify-center text-center">
                  <div className="text-foreground font-semibold text-xl">75%</div>
                  <div className="text-xs text-foreground/70">faster</div>
                  <div className="text-xs text-foreground/70">responses</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 transform translate-y-1/3 -translate-x-1/4 animate-float animation-delay-800">
              <div className="glassmorphism p-4 rounded-xl shadow-lg">
                <div className="w-20 h-16 flex flex-col items-center justify-center text-center">
                  <div className="text-foreground font-semibold text-xl">3.5x</div>
                  <div className="text-xs text-foreground/70">more</div>
                  <div className="text-xs text-foreground/70">interviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
