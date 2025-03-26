
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FileDown, Eye } from "lucide-react";
import ResumePreview from "@/components/ResumePreview";
import { FormData } from './resume/types';

// Import all form section components
import PersonalInfoForm from './resume/PersonalInfoForm';
import SummaryForm from './resume/SummaryForm';
import ExperienceForm from './resume/ExperienceForm';
import EducationForm from './resume/EducationForm';
import SkillsForm from './resume/SkillsForm';
import TemplateSelector from './resume/TemplateSelector';
import ResumeTips from './resume/ResumeTips';

const ResumeForm: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  
  const form = useForm<FormData>({
    defaultValues: {
      personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        website: '',
        linkedin: '',
      },
      summary: '',
      education: [
        {
          id: '1',
          school: '',
          degree: '',
          fieldOfStudy: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        },
      ],
      experience: [
        {
          id: '1',
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        },
      ],
      skills: [],
      templateId: 'classic',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real app, this would generate and download the resume
    alert('Resume data submitted. In a real app, this would generate and download your resume.');
  };

  const watchData = form.watch();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <PersonalInfoForm form={form} />
            
            {/* Professional Summary */}
            <SummaryForm form={form} />
            
            {/* Work Experience */}
            <ExperienceForm form={form} />
            
            {/* Education */}
            <EducationForm form={form} />
            
            {/* Skills */}
            <SkillsForm form={form} />
            
            {/* Template Selection */}
            <TemplateSelector form={form} setSelectedTemplate={setSelectedTemplate} />
            
            <div className="flex justify-between">
              <Sheet>
                <SheetTrigger asChild>
                  <Button type="button" variant="outline">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview Resume
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-3xl overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Resume Preview</SheetTitle>
                    <SheetDescription>
                      This is how your resume will look when downloaded.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <ResumePreview data={watchData} templateId={selectedTemplate} />
                  </div>
                </SheetContent>
              </Sheet>
              
              <div className="space-x-2">
                <Button type="submit" className="bg-primary">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
      
      <div className="hidden lg:block">
        <ResumeTips />
      </div>
    </div>
  );
};

export default ResumeForm;
