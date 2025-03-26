import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, FileDown, Eye, List } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import ResumePreview from "@/components/ResumePreview";

type FormData = {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
  };
  summary: string;
  summaryBullets: Array<string>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    fieldOfStudy?: string;
    startDate: string;
    endDate: string;
    location?: string;
    description?: string;
  }>;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    location?: string;
    description: string;
  }>;
  skills: Array<string>;
  templateId: string;
};

const ResumeForm: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  const [useAIBullets, setUseAIBullets] = useState(false);
  const [isGeneratingBullets, setIsGeneratingBullets] = useState(false);
  
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
      summaryBullets: [],
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

  const generateBulletPoints = () => {
    const summary = form.getValues('summary');
    
    if (!summary || summary.trim() === '') {
      toast.error("Please provide a summary first");
      return;
    }
    
    setIsGeneratingBullets(true);
    
    setTimeout(() => {
      const sentences = summary.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const bulletPoints = sentences.map(sentence => {
        const words = sentence.trim().split(' ');
        if (words.length > 0) {
          words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
        }
        return words.join(' ');
      });
      
      form.setValue('summaryBullets', bulletPoints);
      setIsGeneratingBullets(false);
      toast.success("Bullet points generated successfully");
    }, 1500);
  };

  const handleAddEducation = () => {
    const currentEducation = form.getValues('education');
    form.setValue('education', [
      ...currentEducation,
      {
        id: Date.now().toString(),
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    const currentEducation = form.getValues('education');
    form.setValue(
      'education',
      currentEducation.filter((_, i) => i !== index)
    );
  };

  const handleAddExperience = () => {
    const currentExperience = form.getValues('experience');
    form.setValue('experience', [
      ...currentExperience,
      {
        id: Date.now().toString(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    const currentExperience = form.getValues('experience');
    form.setValue(
      'experience',
      currentExperience.filter((_, i) => i !== index)
    );
  };

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
      e.preventDefault();
      const newSkill = e.currentTarget.value.trim();
      const currentSkills = form.getValues('skills') || [];
      
      if (!currentSkills.includes(newSkill)) {
        form.setValue('skills', [...currentSkills, newSkill]);
        e.currentTarget.value = '';
      }
    }
  };

  const handleRemoveSkill = (skill: string) => {
    const currentSkills = form.getValues('skills');
    form.setValue(
      'skills',
      currentSkills.filter((s) => s !== skill)
    );
  };

  const handleAddBulletPoint = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
      e.preventDefault();
      const newBullet = e.currentTarget.value.trim();
      const currentBullets = form.getValues('summaryBullets') || [];
      
      if (!currentBullets.includes(newBullet)) {
        form.setValue('summaryBullets', [...currentBullets, newBullet]);
        e.currentTarget.value = '';
      }
    }
  };

  const handleRemoveBulletPoint = (bullet: string) => {
    const currentBullets = form.getValues('summaryBullets');
    form.setValue(
      'summaryBullets',
      currentBullets.filter((b) => b !== bullet)
    );
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Resume data submitted. In a real app, this would generate and download your resume.');
  };

  const watchData = form.watch();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="personalInfo.fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="personalInfo.email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="personalInfo.phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="personalInfo.location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City, State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="personalInfo.website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="www.yourwebsite.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="personalInfo.linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="linkedin.com/in/username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Manual Input</span>
                  <Switch
                    checked={useAIBullets}
                    onCheckedChange={setUseAIBullets}
                  />
                  <span className="text-sm font-medium">AI Bullet Points</span>
                </div>
                
                {useAIBullets && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={generateBulletPoints}
                    disabled={isGeneratingBullets}
                  >
                    <List className="h-4 w-4 mr-2" />
                    {isGeneratingBullets ? "Generating..." : "Generate Bullets"}
                  </Button>
                )}
              </div>
              
              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Summary</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write a short summary of your professional background and key strengths..."
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Keep it concise, around 3-4 sentences highlighting your experience and value.
                      {useAIBullets && " Click 'Generate Bullets' to create bullet points from your summary."}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {useAIBullets && (
                <div className="mt-4">
                  <FormItem>
                    <FormLabel>Summary Bullet Points</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Add a bullet point and press Enter" 
                        onKeyDown={handleAddBulletPoint}
                        disabled={isGeneratingBullets}
                      />
                    </FormControl>
                    <FormDescription>
                      Add impactful bullet points that highlight your achievements and skills.
                    </FormDescription>
                  </FormItem>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {form.getValues().summaryBullets.map((bullet) => (
                      <Badge key={bullet} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                        {bullet}
                        <button
                          type="button"
                          onClick={() => handleRemoveBulletPoint(bullet)}
                          className="ml-1 h-4 w-4 rounded-full hover:bg-muted flex items-center justify-center"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    {form.getValues().summaryBullets.length === 0 && (
                      <p className="text-sm text-muted-foreground">No bullet points added yet.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-6">
                {form.getValues().experience.map((_, index) => (
                  <Collapsible key={index} defaultOpen={index === 0} className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <CollapsibleTrigger className="flex items-center w-full justify-between">
                        <h3 className="text-lg font-medium">
                          {form.getValues().experience[index].position || form.getValues().experience[index].company || `Experience ${index + 1}`}
                        </h3>
                        <div>▼</div>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name={`experience.${index}.company`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input placeholder="Company Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`experience.${index}.position`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Position</FormLabel>
                              <FormControl>
                                <Input placeholder="Job Title" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`experience.${index}.startDate`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Start Date</FormLabel>
                              <FormControl>
                                <Input type="month" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`experience.${index}.endDate`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>End Date</FormLabel>
                              <FormControl>
                                <Input type="month" placeholder="Present" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`experience.${index}.location`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="City, State" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name={`experience.${index}.description`}
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your responsibilities and achievements..."
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Use bullet points and action verbs to highlight your accomplishments.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {form.getValues().experience.length > 1 && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="mt-4"
                          onClick={() => handleRemoveExperience(index)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove Experience
                        </Button>
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleAddExperience}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Experience
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <div className="space-y-6">
                {form.getValues().education.map((_, index) => (
                  <Collapsible key={index} defaultOpen={index === 0} className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <CollapsibleTrigger className="flex items-center w-full justify-between">
                        <h3 className="text-lg font-medium">
                          {form.getValues().education[index].school || `Education ${index + 1}`}
                        </h3>
                        <div>▼</div>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name={`education.${index}.school`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>School</FormLabel>
                              <FormControl>
                                <Input placeholder="University Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`education.${index}.degree`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Degree</FormLabel>
                              <FormControl>
                                <Input placeholder="Bachelor of Science" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`education.${index}.fieldOfStudy`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Field of Study</FormLabel>
                              <FormControl>
                                <Input placeholder="Computer Science" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`education.${index}.location`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="City, State" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`education.${index}.startDate`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Start Date</FormLabel>
                              <FormControl>
                                <Input type="month" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name={`education.${index}.endDate`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>End Date</FormLabel>
                              <FormControl>
                                <Input type="month" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name={`education.${index}.description`}
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Relevant coursework, honors, activities..."
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {form.getValues().education.length > 1 && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="mt-4"
                          onClick={() => handleRemoveEducation(index)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove Education
                        </Button>
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleAddEducation}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Education
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <FormItem>
                <FormLabel>Add Skills</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Type a skill and press Enter" 
                    onKeyDown={handleAddSkill}
                  />
                </FormControl>
                <FormDescription>
                  Add skills relevant to the job you're applying for.
                </FormDescription>
              </FormItem>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {form.getValues().skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-1 h-4 w-4 rounded-full hover:bg-muted flex items-center justify-center"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
                {form.getValues().skills.length === 0 && (
                  <p className="text-sm text-muted-foreground">No skills added yet.</p>
                )}
              </div>
            </div>
            
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Resume Template</h2>
              <FormField
                control={form.control}
                name="templateId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Template</FormLabel>
                    <Select 
                      onValueChange={value => {
                        field.onChange(value);
                        setSelectedTemplate(value);
                      }} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a template" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="classic">Classic</SelectItem>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
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
        <div className="sticky top-24">
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Resume Tips</h2>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
                <p className="text-sm">Keep your resume to one page for most industries</p>
              </li>
              <li className="flex gap-2">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
                <p className="text-sm">Use action verbs to describe your experience</p>
              </li>
              <li className="flex gap-2">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
                <p className="text-sm">Quantify your achievements with numbers when possible</p>
              </li>
              <li className="flex gap-2">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
                <p className="text-sm">Tailor your resume for each job application</p>
              </li>
              <li className="flex gap-2">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">✓</div>
                <p className="text-sm">Use keywords from the job description to pass ATS systems</p>
              </li>
            </ul>
            
            <Separator className="my-4" />
            
            <h3 className="font-medium mb-2">Words to avoid:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Responsible for</Badge>
              <Badge variant="outline">Duties included</Badge>
              <Badge variant="outline">Worked on</Badge>
              <Badge variant="outline">Assisted with</Badge>
              <Badge variant="outline">Helped</Badge>
            </div>
            
            <h3 className="font-medium mb-2 mt-4">Power words to use:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Achieved</Badge>
              <Badge variant="outline">Implemented</Badge>
              <Badge variant="outline">Launched</Badge>
              <Badge variant="outline">Developed</Badge>
              <Badge variant="outline">Optimized</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;

