
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const templates = [
  {
    id: 1,
    name: "Minimalist",
    description: "Clean, modern design that puts your content front and center",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    previewUrl: "#minimalist"
  },
  {
    id: 2,
    name: "Creative",
    description: "Bold, artistic layout perfect for showcasing visual work",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    previewUrl: "#creative"
  },
  {
    id: 3,
    name: "Professional",
    description: "Polished, corporate-friendly design for executive roles",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop",
    previewUrl: "#professional"
  },
  {
    id: 4,
    name: "Interactive",
    description: "Dynamic design with animations and interactive elements",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop",
    previewUrl: "#interactive"
  },
  {
    id: 5,
    name: "Industry Specific",
    description: "Tailored templates for specific industries and professions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    previewUrl: "#industry"
  }
];

const TemplateCard = ({ template }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative aspect-video rounded-t-xl overflow-hidden border border-b-0 border-gray-200">
        <img 
          src={template.image} 
          alt={`${template.name} template preview`} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>
      
      <div className="p-6 border border-t-0 border-gray-200 rounded-b-xl bg-white flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">
          {template.name} Template
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {template.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <Button variant="outline" size="sm" asChild>
            <a href={template.previewUrl}>
              Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
          <Button size="sm">
            Use Template
          </Button>
        </div>
      </div>
    </div>
  );
};

const PortfolioExamples = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Real User Examples</h3>
        <Button variant="outline">View Gallery</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example 1 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop" 
              alt="Portfolio example" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button>View Site</Button>
          </div>
          <div className="p-4 bg-white">
            <h4 className="font-medium">Sarah's UX Portfolio</h4>
            <p className="text-sm text-gray-500">UX Designer • Professional Template</p>
          </div>
        </div>
        
        {/* Example 2 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
              alt="Portfolio example" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button>View Site</Button>
          </div>
          <div className="p-4 bg-white">
            <h4 className="font-medium">David's Dev Portfolio</h4>
            <p className="text-sm text-gray-500">Full-Stack Developer • Creative Template</p>
          </div>
        </div>
        
        {/* Example 3 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" 
              alt="Portfolio example" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button>View Site</Button>
          </div>
          <div className="p-4 bg-white">
            <h4 className="font-medium">Jessica's Architecture Portfolio</h4>
            <p className="text-sm text-gray-500">Architect • Minimalist Template</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioPreview: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Premium Portfolio Templates
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Choose from our collection of professionally designed templates 
            that showcase your skills and experience in the best light.
          </p>
        </div>
        
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {templates.map((template) => (
                <CarouselItem key={template.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <TemplateCard template={template} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 left-auto" />
              <CarouselNext className="static translate-y-0 right-auto" />
            </div>
          </Carousel>
        </div>
        
        <PortfolioExamples />
      </div>
    </section>
  );
};

export default PortfolioPreview;
