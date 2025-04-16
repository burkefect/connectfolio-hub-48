
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Trash2, FileEdit, Eye, PlusCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Json } from '@/integrations/supabase/types';
import { format } from 'date-fns';

// Define the resume type structure
interface Resume {
  id: string;
  title: string;
  template_id: string;
  created_at: string;
  updated_at: string;
  is_public: boolean;
  data: Json;
}

const MyResumes: React.FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user && !isLoading) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    const fetchResumes = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('resumes')
          .select('*')
          .eq('user_id', user.id)
          .order('updated_at', { ascending: false });

        if (error) {
          throw error;
        }

        setResumes(data as Resume[]);
      } catch (error: any) {
        console.error('Error fetching resumes:', error);
        toast.error(`Failed to fetch resumes: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResumes();
  }, [user]);

  const handleEditResume = (resumeId: string) => {
    navigate(`/resume-builder?resumeId=${resumeId}`);
  };

  const handleCreateNew = () => {
    if (resumes.length >= 3) {
      toast.error("You've reached the maximum limit of 3 resumes. Please delete one to create a new resume.");
      return;
    }
    navigate('/resume-builder');
  };

  const handleDeleteResume = async (resumeId: string) => {
    try {
      const { error } = await supabase
        .from('resumes')
        .delete()
        .eq('id', resumeId);

      if (error) {
        throw error;
      }

      setResumes(resumes.filter(resume => resume.id !== resumeId));
      toast.success('Resume deleted successfully');
    } catch (error: any) {
      console.error('Error deleting resume:', error);
      toast.error(`Failed to delete resume: ${error.message}`);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy h:mm a');
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Resumes</h1>
          <Button onClick={handleCreateNew} disabled={resumes.length >= 3}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Resume
          </Button>
        </div>

        {isLoading ? (
          <div className="py-10 text-center">Loading your resumes...</div>
        ) : (
          <>
            {resumes.length === 0 ? (
              <div className="text-center py-10">
                <h2 className="text-xl mb-4">You don't have any saved resumes yet</h2>
                <p className="mb-6 text-muted-foreground">Create your first resume to get started on your job search journey.</p>
                <Button onClick={() => navigate('/resume-builder')}>Create Your First Resume</Button>
              </div>
            ) : (
              <>
                <Alert className="mb-6">
                  <AlertTitle>Resume Limit</AlertTitle>
                  <AlertDescription>
                    You can save up to 3 resumes. You currently have {resumes.length}/3 resumes.
                  </AlertDescription>
                </Alert>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Template</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {resumes.map((resume) => (
                        <TableRow key={resume.id}>
                          <TableCell className="font-medium">
                            {resume.title}
                            {resume.is_public && <Badge className="ml-2 bg-green-500">Public</Badge>}
                          </TableCell>
                          <TableCell className="capitalize">{resume.template_id}</TableCell>
                          <TableCell>{formatDate(resume.updated_at)}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleEditResume(resume.id)}>
                                <FileEdit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="destructive" size="sm" onClick={() => handleDeleteResume(resume.id)}>
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyResumes;
