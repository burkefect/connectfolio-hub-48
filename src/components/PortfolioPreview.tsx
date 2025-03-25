
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: 1,
    name: "Minimalist",
    description: "Clean, modern design that puts your content front and center",
  },
  {
    id: 2,
    name: "Creative",
    description: "Bold, artistic layout perfect for showcasing visual work",
  },
  {
    id: 3,
    name: "Professional",
    description: "Polished, corporate-friendly design for executive roles",
  }
];

const PortfolioPreview: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState(0);
  
  const nextTemplate = () => {
    setActiveTemplate((prev) => (prev + 1) % templates.length);
  };
  
  const prevTemplate = () => {
    setActiveTemplate((prev) => (prev - 1 + templates.length) % templates.length);
  };
  
  return (
    <section id="features" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Premium Portfolio Templates
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Choose from our collection of professionally designed templates 
            that showcase your skills and experience in the best light.
          </p>
        </div>
        
        <div className="relative animate-scale-in">
          {/* Preview display */}
          <div className="relative mx-auto overflow-hidden bg-white/20 rounded-2xl shadow-lg aspect-video max-w-5xl">
            {/* Template preview */}
            <div className="absolute inset-0 bg-gray-50 rounded-2xl">
              {/* Navigation header mockup */}
              <div className="h-14 px-6 bg-white border-b border-gray-100 flex items-center justify-between">
                <div className="w-32 h-5 bg-gray-200 rounded"></div>
                <div className="flex space-x-6">
                  <div className="w-12 h-4 bg-gray-200 rounded"></div>
                  <div className="w-12 h-4 bg-gray-200 rounded"></div>
                  <div className="w-12 h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              {/* Template content */}
              <div className="grid grid-cols-12 gap-6 p-8">
                {/* Hero section mockup */}
                <div className="col-span-12 h-64 bg-white rounded-xl shadow-sm p-6 flex">
                  <div className="w-1/2 flex flex-col justify-center pr-8">
                    <div className="w-4/5 h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                    <div className="w-3/4 h-4 bg-gray-100 rounded mb-2"></div>
                    <div className="w-5/6 h-4 bg-gray-100 rounded mb-6"></div>
                    <div className="w-32 h-10 bg-blue-500 rounded-lg"></div>
                  </div>
                  <div className="w-1/2 bg-gray-100 rounded-xl"></div>
                </div>
                
                {/* About section mockup */}
                <div className="col-span-4 bg-white rounded-xl shadow-sm p-4">
                  <div className="w-2/3 h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4"></div>
                  <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
                  <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
                  <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                </div>
                
                {/* Skills section mockup */}
                <div className="col-span-8 bg-white rounded-xl shadow-sm p-4">
                  <div className="w-1/3 h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                  </div>
                </div>
                
                {/* Experience section mockup */}
                <div className="col-span-12 bg-white rounded-xl shadow-sm p-4">
                  <div className="w-1/4 h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-1/5">
                        <div className="w-4/5 h-4 bg-gray-100 rounded mb-2"></div>
                        <div className="w-3/5 h-4 bg-gray-100 rounded"></div>
                      </div>
                      <div className="w-4/5">
                        <div className="w-2/3 h-5 bg-gray-200 rounded mb-2"></div>
                        <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
                        <div className="w-full h-3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-1/5">
                        <div className="w-4/5 h-4 bg-gray-100 rounded mb-2"></div>
                        <div className="w-3/5 h-4 bg-gray-100 rounded"></div>
                      </div>
                      <div className="w-4/5">
                        <div className="w-2/3 h-5 bg-gray-200 rounded mb-2"></div>
                        <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
                        <div className="w-full h-3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Template overlay with info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    {templates[activeTemplate].name} Template
                  </h3>
                  <p className="text-white/80">
                    {templates[activeTemplate].description}
                  </p>
                </div>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Preview <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTemplate}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-transform-300 hover:scale-110"
            aria-label="Previous template"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTemplate}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-transform-300 hover:scale-110"
            aria-label="Next template"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTemplate(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all-300 ${
                  index === activeTemplate 
                    ? 'bg-primary w-6' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to template ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
