
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormData as ResumeFormData } from './types';

interface TemplateSelectorProps {
  form: UseFormReturn<ResumeFormData>;
  setSelectedTemplate: (value: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ form, setSelectedTemplate }) => {
  return (
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
  );
};

export default TemplateSelector;
