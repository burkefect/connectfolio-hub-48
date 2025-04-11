
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Trash2, Plus } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData as ResumeFormData } from './types';

interface EducationFormProps {
  form: UseFormReturn<ResumeFormData>;
}

const EducationForm: React.FC<EducationFormProps> = ({ form }) => {
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

  return (
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
  );
};

export default EducationForm;
