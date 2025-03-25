
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Globe, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

interface BusinessCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
}

const sampleCards: BusinessCardProps[] = [
  {
    name: "Sarah Johnson",
    title: "Software Engineer",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    website: "sarahjohnson.portfolio.com",
    linkedin: "linkedin.com/in/sarahjohnson"
  },
  {
    name: "Michael Chen",
    title: "UX Designer",
    email: "michael@example.com",
    phone: "+1 (555) 987-6543",
    website: "michaelchen.portfolio.com",
    linkedin: "linkedin.com/in/michaelchen"
  }
];

const BusinessCardView = ({ cardData }: { cardData: BusinessCardProps }) => {
  return (
    <div className="relative mx-auto transform transition-all hover:scale-105">
      {/* Front side of the card */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 rounded-xl shadow-lg w-full max-w-[350px] aspect-[1.8/1]">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="font-bold text-xl">{cardData.name}</h3>
            <p className="opacity-90">{cardData.title}</p>
          </div>
          
          <div className="flex flex-col space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5" />
              <span>{cardData.website}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-3.5 w-3.5" />
              <span>{cardData.linkedin}</span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <span>{cardData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <span>{cardData.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BusinessCardPreview: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  
  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % sampleCards.length);
  };
  
  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + sampleCards.length) % sampleCards.length);
  };
  
  return (
    <section id="business-cards" className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Digital Business Cards
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Stand out at job fairs and networking events with professional business cards 
            that match your portfolio site. Available with Pro and Executive plans.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card className="p-6 bg-white border shadow-md">
              <h3 className="text-xl font-semibold mb-4">Premium Feature Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>Digital business cards with QR code to your portfolio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>Printable high-quality designs with Executive plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>Matching design with your portfolio website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>One-click share to email and messaging apps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>Track how many people view your profile via your card</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="w-full">Upgrade to Pro</Button>
              </div>
            </Card>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <BusinessCardView cardData={sampleCards[currentCard]} />
              
              <div className="flex justify-center mt-6 space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevCard}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextCard}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-[300px] h-[150px] bg-gradient-to-t from-secondary/50 to-transparent -z-10 blur-2xl opacity-60 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCardPreview;
