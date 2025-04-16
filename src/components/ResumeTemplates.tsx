
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';

const templates = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional resume format with a clean and professional look.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&auto=format&fit=crop',
    features: ['ATS-Friendly', 'Minimalist', 'Professional'],
    popular: true
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with a sleek layout and subtle color accents.',
    image: 'https://images.unsplash.com/photo-1563674847288-4db76180e307?q=80&w=500&auto=format&fit=crop',
    features: ['ATS-Friendly', 'Creative', 'Colorful'],
    popular: false
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Optimized for technical roles with sections for skills and projects.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=500&auto=format&fit=crop',
    features: ['Skills-Focused', 'Project Showcase', 'ATS-Friendly'],
    popular: false
  }
];

const ResumeTemplates: React.FC = () => {
  const navigate = useNavigate();

  const handleUseTemplate = (templateId: string) => {
    // Navigate to the builder tab with template parameter
    navigate(`/resume-builder?tab=builder&template=${templateId}`);
  };

  const handlePreviewTemplate = (templateId: string) => {
    // For now, just show a toast or alert that this feature is coming soon
    alert(`Preview for ${templateId} template coming soon!`);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={template.image} 
                alt={`${template.name} template`} 
                className="object-cover w-full h-full"
              />
              {template.popular && (
                <div className="absolute top-2 right-2">
                  <Badge variant="default" className="bg-primary">Most Popular</Badge>
                </div>
              )}
            </div>
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {template.features.map((feature) => (
                  <Badge key={feature} variant="secondary">{feature}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => handlePreviewTemplate(template.id)}>Preview</Button>
              <Button onClick={() => handleUseTemplate(template.id)}>Use Template</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted p-6 rounded-lg mt-10">
        <h3 className="text-xl font-medium mb-3">Why our resume templates stand out</h3>
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
            <p>ATS-optimized to ensure your resume gets past automated screening</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
            <p>Professional formatting that impresses hiring managers</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
            <p>Download as PDF or Word document for easy sharing</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
            <p>Easy to customize with your personal information and experience</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeTemplates;
