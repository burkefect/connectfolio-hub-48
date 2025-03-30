
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsDashboard from '@/components/StatsDashboard';
import StatsInsights from '@/components/StatsInsights';
import ReachMetrics from '@/components/ReachMetrics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Statistics: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-10 md:mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Data-Driven Career Success
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                Discover how a professional online presence translates into measurable career advantages.
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
                <TabsTrigger value="reach">Reach</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <StatsDashboard />
              </TabsContent>
              <TabsContent value="insights">
                <StatsInsights />
              </TabsContent>
              <TabsContent value="reach">
                <ReachMetrics />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Statistics;
