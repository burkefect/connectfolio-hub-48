
import React from 'react';
import { FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UseFormReturn } from "react-hook-form";
import { FormData } from './types';

interface SkillsFormProps {
  form: UseFormReturn<FormData>;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ form }) => {
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

  return (
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
  );
};

export default SkillsForm;
