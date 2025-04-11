
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { FormData as ResumeFormData } from './types';

interface SummaryFormProps {
  form: UseFormReturn<ResumeFormData>;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ form }) => {
  return (
    <div className="bg-card rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
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
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default SummaryForm;
