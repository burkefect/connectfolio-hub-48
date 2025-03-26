
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ResumeTips: React.FC = () => {
  return (
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
  );
};

export default ResumeTips;
