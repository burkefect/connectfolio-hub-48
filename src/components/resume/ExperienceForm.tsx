
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Trash2, Plus } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from './types';

interface ExperienceFormProps {
  form: UseFormReturn<FormData>;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ form }) => {
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

  return (
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
  );
};

export default ExperienceForm;
