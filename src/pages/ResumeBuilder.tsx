
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResumeForm from '@/components/ResumeForm';
import ResumeTemplates from '@/components/ResumeTemplates';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from 'react-router-dom';

const ResumeBuilder: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const templateParam = searchParams.get('template');
  const [activeTab, setActiveTab] = useState<string>(tabParam === 'templates' ? 'templates' : 'builder');
  
  useEffect(() => {
    // Set tab based on URL parameter
    if (tabParam === 'templates' || tabParam === 'builder') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Resume Builder</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a professional resume that passes through applicant tracking systems. Choose from multiple templates and easily download your resume.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="builder">Build Resume</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <TabsContent value="builder">
            <ResumeForm selectedTemplateFromUrl={templateParam} />
          </TabsContent>
          <TabsContent value="templates">
            <ResumeTemplates />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
