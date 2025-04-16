
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Eye, Save, Loader2 } from "lucide-react";
import ResumePreview from "@/components/ResumePreview";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { Json } from '@/integrations/supabase/types';
import { FormData as ResumeFormData } from './resume/types';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import DownloadOptions from './resume/DownloadOptions';

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
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const resumeIdParam = searchParams.get('resumeId');
  const [resumeCount, setResumeCount] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();
  
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

  useEffect(() => {
    // Check the number of resumes user has
    const fetchResumeCount = async () => {
      if (!user) return;
      
      try {
        const { count, error } = await supabase
          .from('resumes')
          .select('id', { count: 'exact' })
          .eq('user_id', user.id);
          
        if (error) throw error;
        setResumeCount(count || 0);
      } catch (error: any) {
        console.error('Error fetching resume count:', error);
      }
    };
    
    fetchResumeCount();
  }, [user]);

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
      // Check if user has reached the limit when creating a new resume
      if (!resumeId) {
        const { count, error } = await supabase
          .from('resumes')
          .select('id', { count: 'exact' })
          .eq('user_id', user.id);
          
        if (error) throw error;
        
        if ((count || 0) >= 3) {
          toast.error('You have reached the maximum limit of 3 resumes. Please delete one to create a new resume or edit an existing one.');
          throw new Error('Resume limit reached');
        }
      }
      
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

      // Update resume count after successful save
      setResumeCount(prev => resumeId ? prev : prev + 1);
      
      toast.success(resumeId ? 'Resume updated successfully!' : 'Resume saved successfully!');
    } catch (error: any) {
      if (error.message !== 'Resume limit reached') {
        console.error('Error saving resume:', error);
        toast.error(`Failed to save resume: ${error.message || 'Unknown error'}`);
      }
    } finally {
      setIsSaving(false);
    }
  };

  const onSubmit = async (data: ResumeFormData) => {
    if (!user) {
      toast.error('You need to be logged in to download your resume');
      return;
    }

    await saveResume();
  };

  const watchData = form.watch();

  useEffect(() => {
    const loadResumeData = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        let query;
        
        if (resumeIdParam) {
          // Load specific resume if resumeId is provided in URL
          query = supabase
            .from('resumes')
            .select('*')
            .eq('id', resumeIdParam)
            .eq('user_id', user.id)
            .single();
        } else {
          // Load most recent resume if no specific resumeId is provided
          query = supabase
            .from('resumes')
            .select('*')
            .eq('user_id', user.id)
            .order('updated_at', { ascending: false })
            .limit(1)
            .single();
        }

        const { data, error } = await query;

        if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned" which is fine
          console.error('Error fetching resume:', error);
          return;
        }

        if (data) {
          setResumeId(data.id);
          setResumeTitle(data.title);
          setSelectedTemplate(data.template_id);
          setIsPublic(data.is_public || false);
          form.reset(data.data as unknown as ResumeFormData);
        }
      } catch (error) {
        console.error('Unexpected error loading resume:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadResumeData();
  }, [user, form, resumeIdParam]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Loading resume data...</span>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {(resumeCount >= 3 && !resumeId) && (
                <Alert variant="destructive" className="mb-4">
                  <AlertTitle>Resume limit reached</AlertTitle>
                  <AlertDescription>
                    You have reached the maximum limit of 3 resumes. 
                    Please <a href="/my-resumes" className="underline">visit your dashboard</a> to delete a resume before creating a new one.
                  </AlertDescription>
                </Alert>
              )}
              
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
                <div className="flex gap-2">
                  <Button 
                    type="button" 
                    variant="secondary" 
                    onClick={() => navigate('/my-resumes')}
                  >
                    My Resumes
                  </Button>
                  <Button 
                    type="button" 
                    variant="default" 
                    onClick={saveResume} 
                    disabled={isSaving || !user || (resumeCount >= 3 && !resumeId)}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isSaving ? 'Saving...' : 'Save'}
                  </Button>
                </div>
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
                  <DownloadOptions 
                    resumeData={watchData} 
                    templateId={selectedTemplate} 
                    disabled={!user || (resumeCount >= 3 && !resumeId)}
                  />
                </div>
              </div>

              {!user && (
                <div className="p-4 bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 rounded-md text-center">
                  You need to <a href="/auth" className="font-semibold underline">login or sign up</a> to save or download your resume.
                </div>
              )}
            </form>
          </Form>
        )}
      </div>
      
      <div className="hidden lg:block">
        <ResumeTips />
      </div>
    </div>
  );
};

export default ResumeForm;
