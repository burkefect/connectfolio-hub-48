
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';

type PortfolioTemplate = {
  id: string;
  name: string;
  description: string;
  thumbnail_url: string;
  demo_url: string;
  category: string;
  features: string[];
  is_popular: boolean;
};

const PortfolioTemplates: React.FC = () => {
  const [templates, setTemplates] = useState<PortfolioTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const { data, error } = await supabase
          .from('portfolio_templates')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setTemplates(data || []);
      } catch (error) {
        console.error('Error fetching templates:', error);
        toast.error('Failed to load portfolio templates');
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'general': 'bg-blue-100 text-blue-800',
      'design': 'bg-purple-100 text-purple-800',
      'business': 'bg-green-100 text-green-800',
      'technology': 'bg-amber-100 text-amber-800',
      'specialized': 'bg-rose-100 text-rose-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold">Portfolio Templates</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={template.thumbnail_url} 
                  alt={`${template.name} template`} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {template.is_popular && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary">Popular</Badge>
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <Badge className={getCategoryColor(template.category)}>{template.category}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle>{template.name}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.features.map(feature => (
                        <Badge key={feature} variant="secondary">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button asChild className="w-full gap-2">
                  <a href={template.demo_url} target="_blank" rel="noreferrer">
                    View Template <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-16 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Portfolio Templates?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Professional Design</h3>
            <p className="text-muted-foreground">Each template is crafted by professional designers to ensure a polished and impressive online presence.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Easy Customization</h3>
            <p className="text-muted-foreground">Customize colors, fonts, and layout to match your personal brand with our intuitive interface.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Mobile Responsive</h3>
            <p className="text-muted-foreground">All templates are fully responsive, ensuring your portfolio looks great on any device.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">SEO Optimized</h3>
            <p className="text-muted-foreground">Built with search engine optimization in mind to help your portfolio get discovered.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTemplates;
