
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TemplateCard from './portfolio/TemplateCard';
import PortfolioExamples from './portfolio/PortfolioExamples';
import { templates } from '@/data/templates';

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
