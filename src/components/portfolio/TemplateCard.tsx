
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Template } from '@/data/templates';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
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

export default TemplateCard;
