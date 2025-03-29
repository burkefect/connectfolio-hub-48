
import React from 'react';
import { Link } from 'react-router-dom';
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
    image: "minimalist-template.jpg",
    previewUrl: "/templates/minimalist",
    className: "font-light tracking-widest uppercase text-4xl"
  },
  {
    id: 2,
    name: "Creative",
    description: "Bold, artistic layout perfect for showcasing visual work",
    image: "creative-template.jpg",
    previewUrl: "/templates/creative",
    className: "font-bold italic text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"
  },
  {
    id: 3,
    name: "Professional",
    description: "Polished, corporate-friendly design for executive roles",
    image: "professional-template.jpg",
    previewUrl: "/templates/professional",
    className: "font-serif text-4xl font-semibold"
  },
  {
    id: 4,
    name: "Interactive",
    description: "Dynamic design with animations and interactive elements",
    image: "interactive-template.jpg",
    previewUrl: "/templates/interactive",
    className: "font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
  },
  {
    id: 5,
    name: "Industry Specific",
    description: "Tailored templates for specific industries and professions",
    image: "industry-template.jpg",
    previewUrl: "/templates/industry",
    className: "font-sans text-4xl font-bold"
  }
];

const TemplateCard = ({ template }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative aspect-video rounded-t-xl overflow-hidden border border-b-0 border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
          <h3 className={template.className}>
            {template.name}
          </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>
      
      <div className="p-6 border border-t-0 border-gray-200 dark:border-gray-800 rounded-b-xl bg-white dark:bg-gray-900 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          {template.name} Template
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {template.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <Button variant="outline" size="sm" asChild>
            <Link to={template.previewUrl}>
              Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to={template.previewUrl}>
              Use Template
            </Link>
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
        <Button variant="outline" asChild>
          <Link to="/portfolio-templates">View Gallery</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example 1 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <h3 className="font-serif text-3xl font-semibold text-center">Professional</h3>
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild>
              <Link to="/templates/professional">View Site</Link>
            </Button>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900">
            <h4 className="font-medium">Sarah's UX Portfolio</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer • Professional Template</p>
          </div>
        </div>
        
        {/* Example 2 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <h3 className="font-light tracking-widest uppercase text-3xl">Minimalist</h3>
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild>
              <Link to="/templates/minimalist">View Site</Link>
            </Button>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900">
            <h4 className="font-medium">David's Dev Portfolio</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Full-Stack Developer • Minimalist Template</p>
          </div>
        </div>
        
        {/* Example 3 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <h3 className="font-bold italic text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Creative</h3>
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild>
              <Link to="/templates/creative">View Site</Link>
            </Button>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900">
            <h4 className="font-medium">Jessica's Architecture Portfolio</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Architect • Creative Template</p>
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
          <div className="mt-6">
            <Button asChild>
              <Link to="/portfolio-templates">Browse All Templates</Link>
            </Button>
          </div>
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
