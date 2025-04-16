
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { FileDown, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { FormData as ResumeFormData } from './types';

interface DownloadOptionsProps {
  resumeData: ResumeFormData;
  templateId: string;
  disabled?: boolean;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({ 
  resumeData, 
  templateId,
  disabled = false 
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [downloadFormat, setDownloadFormat] = useState<string | null>(null);

  const handleDownload = async (format: 'pdf' | 'docx') => {
    if (disabled) return;
    
    setIsGenerating(true);
    setDownloadFormat(format);
    
    try {
      // Call the Supabase Edge Function to generate the resume
      const { data, error } = await supabase.functions.invoke('generate-resume', {
        body: {
          resumeData,
          format,
          templateId
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to generate resume');
      }

      if (!data || !data.success) {
        throw new Error(data?.error || 'Failed to generate resume');
      }

      // Convert the array back to Uint8Array
      const fileBuffer = new Uint8Array(data.file);
      
      // Create a blob from the file buffer
      const blob = new Blob([fileBuffer], { type: data.contentType });
      
      // Create a download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = data.filename;
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success(`Resume downloaded as ${format.toUpperCase()}`);
    } catch (error: any) {
      console.error('Download error:', error);
      toast.error(`Failed to download resume: ${error.message || 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
      setDownloadFormat(null);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button disabled={disabled || isGenerating}>
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating {downloadFormat?.toUpperCase()}...
            </>
          ) : (
            <>
              <FileDown className="mr-2 h-4 w-4" />
              Download Resume
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleDownload('pdf')}
          disabled={isGenerating}
          className="cursor-pointer"
        >
          Download as PDF
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDownload('docx')}
          disabled={isGenerating}
          className="cursor-pointer"
        >
          Download as Word Document
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadOptions;
