
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResumeForm from '@/components/ResumeForm';
import ResumeTemplates from '@/components/ResumeTemplates';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResumeBuilder: React.FC = () => {
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

        <Tabs defaultValue="builder" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="builder">Build Resume</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <TabsContent value="builder">
            <ResumeForm />
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
