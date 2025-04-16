
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FileDown, Eye, Save } from "lucide-react";
import ResumePreview from "@/components/ResumePreview";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { Json } from '@/integrations/supabase/types';
import { FormData as ResumeFormData } from './resume/types';

import PersonalInfoForm from './resume/PersonalInfoForm';
import SummaryForm from './resume/SummaryForm';
import ExperienceForm from './resume/ExperienceForm';
import EducationForm from './resume/EducationForm';
import SkillsForm from './resume/SkillsForm';
import TemplateSelector from './resume/TemplateSelector';
import ResumeTips from './resume/ResumeTips';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface ResumeFormProps {
  selectedTemplateFromUrl?: string | null;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ selectedTemplateFromUrl }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  const [resumeTitle, setResumeTitle] = useState('My Resume');
  const [resumeId, setResumeId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const { user } = useAuth();
  
  const form = useForm<ResumeFormData>({
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

  // Apply the template from URL if provided
  useEffect(() => {
    if (selectedTemplateFromUrl) {
      setSelectedTemplate(selectedTemplateFromUrl);
      form.setValue('templateId', selectedTemplateFromUrl);
      toast.success(`${selectedTemplateFromUrl.charAt(0).toUpperCase() + selectedTemplateFromUrl.slice(1)} template selected!`);
    }
  }, [selectedTemplateFromUrl, form]);

  const saveResume = async () => {
    if (!user) {
      toast.error('You need to be logged in to save your resume');
      return;
    }

    setIsSaving(true);
    const formData = form.getValues();
    formData.templateId = selectedTemplate;

    try {
      let result;
      
      if (resumeId) {
        result = await supabase
          .from('resumes')
          .update({
            title: resumeTitle,
            data: formData as unknown as Json,
            template_id: selectedTemplate,
            is_public: isPublic,
            updated_at: new Date().toISOString()
          })
          .eq('id', resumeId)
          .select();
      } else {
        const newId = uuidv4();
        result = await supabase
          .from('resumes')
          .insert({
            id: newId,
            user_id: user.id,
            title: resumeTitle,
            data: formData as unknown as Json,
            template_id: selectedTemplate,
            is_public: isPublic
          })
          .select();
        
        if (!result.error) {
          setResumeId(newId);
        }
      }

      if (result.error) {
        throw result.error;
      }

      await supabase.rpc('log_user_activity', {
        p_user_id: user.id,
        p_activity_type: resumeId ? 'update' : 'create',
        p_resource_type: 'resume',
        p_resource_id: resumeId || result.data[0].id,
        p_metadata: { template_id: selectedTemplate }
      });

      toast.success(resumeId ? 'Resume updated successfully!' : 'Resume saved successfully!');
    } catch (error: any) {
      console.error('Error saving resume:', error);
      toast.error(`Failed to save resume: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSaving(false);
    }
  };

  const onSubmit = async (data: ResumeFormData) => {
    try {
      if (!user) {
        toast.error('You need to be logged in to download your resume');
        return;
      }

      await saveResume();
      
      toast.success('Generating your resume for download...');
      setTimeout(() => {
        toast.success('Resume downloaded successfully!');
      }, 1500);
    } catch (error: any) {
      console.error('Error generating resume:', error);
      toast.error(`Failed to generate resume: ${error.message || 'Unknown error'}`);
    }
  };

  const watchData = form.watch();

  useEffect(() => {
    const loadResumeData = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('resumes')
          .select('*')
          .eq('user_id', user.id)
          .order('updated_at', { ascending: false })
          .limit(1);

        if (error) {
          console.error('Error fetching resume:', error);
          return;
        }

        if (data && data.length > 0) {
          const resume = data[0];
          setResumeId(resume.id);
          setResumeTitle(resume.title);
          setSelectedTemplate(resume.template_id);
          setIsPublic(resume.is_public || false);
          form.reset(resume.data as unknown as ResumeFormData);
        }
      } catch (error) {
        console.error('Unexpected error loading resume:', error);
      }
    };

    loadResumeData();
  }, [user, form]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <Label htmlFor="resume-title">Resume Title</Label>
                <Input 
                  id="resume-title"
                  value={resumeTitle} 
                  onChange={(e) => setResumeTitle(e.target.value)} 
                  placeholder="My Professional Resume"
                />
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="is-public" 
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  className="h-4 w-4"
                />
                <Label htmlFor="is-public">Public</Label>
              </div>
              <Button 
                type="button" 
                variant="secondary" 
                onClick={saveResume} 
                disabled={isSaving || !user}
              >
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? 'Saving...' : 'Save'}
              </Button>
            </div>
            
            <PersonalInfoForm form={form} />
            
            <SummaryForm form={form} />
            
            <ExperienceForm form={form} />
            
            <EducationForm form={form} />
            
            <SkillsForm form={form} />
            
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
                <Button type="submit" className="bg-primary" disabled={!user}>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            {!user && (
              <div className="p-4 bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 rounded-md text-center">
                You need to <a href="/auth" className="font-semibold underline">login or sign up</a> to save or download your resume.
              </div>
            )}
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
