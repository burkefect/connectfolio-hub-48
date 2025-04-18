
import React from 'react';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const ResumeBuilderPreview: React.FC = () => {
  return (
    <section id="resume-builder" className="py-20 bg-slate-50 dark:bg-gray-900">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional Resume Builder
          </h2>
          <p className="text-lg text-foreground/70 dark:text-gray-300 max-w-3xl mx-auto">
            Create ATS-optimized resumes that help you get past automated screening systems 
            and impress hiring managers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold">Build Your Resume In Minutes</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">1</div>
                <div>
                  <h4 className="font-medium">Enter Your Information</h4>
                  <p className="text-muted-foreground dark:text-gray-400">Fill in your work experience, education, and skills with our easy-to-use form.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">2</div>
                <div>
                  <h4 className="font-medium">Choose Your Template</h4>
                  <p className="text-muted-foreground dark:text-gray-400">Select from professionally designed templates optimized for your industry.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">3</div>
                <div>
                  <h4 className="font-medium">Download & Share</h4>
                  <p className="text-muted-foreground dark:text-gray-400">Get your resume as a PDF or Word document ready to send to employers.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border shadow-sm">
              <h4 className="font-semibold mb-3">Resume Builder Features</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="text-primary">✓</div>
                  <span className="dark:text-gray-300">ATS-optimized templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="text-primary">✓</div>
                  <span className="dark:text-gray-300">Expert resume tips and guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="text-primary">✓</div>
                  <span className="dark:text-gray-300">PDF and Word document export</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="text-primary">✓</div>
                  <span className="dark:text-gray-300">Multiple template designs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="text-primary">✓</div>
                  <span className="dark:text-gray-300">Easy content formatting</span>
                </li>
              </ul>
            </div>
            
            <Button asChild size="lg">
              <Link to="/resume-builder">
                Build Your Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -top-12 -right-12 rotate-12 hidden md:block">
              <Badge className="bg-amber-500 text-white border-none">
                <Download className="mr-1 h-3 w-3" /> Easy Download
              </Badge>
            </div>
            
            <Card className="shadow-lg overflow-hidden dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="font-bold text-lg">Professional Resume</h3>
                <p className="text-sm opacity-90">Modern Template</p>
              </div>
              
              <CardContent className="p-5">
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="font-bold text-base dark:text-gray-200">JOHN ANDERSON</h4>
                    <div className="text-xs text-muted-foreground dark:text-gray-400">
                      <span>john.anderson@example.com</span> • <span>(555) 123-4567</span> • <span>New York, NY</span>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold dark:text-gray-200">SUMMARY</h5>
                    <Separator className="my-1 dark:bg-gray-600" />
                    <p className="text-xs leading-normal dark:text-gray-400">
                      Results-driven software engineer with 5+ years of experience in developing web and mobile applications. 
                      Proficient in React, Node.js, and cloud technologies.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold dark:text-gray-200">EXPERIENCE</h5>
                    <Separator className="my-1 dark:bg-gray-600" />
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between dark:text-gray-300">
                        <span className="font-medium">Senior Software Engineer</span>
                        <span>2020 - Present</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground dark:text-gray-400">
                        <span>Tech Solutions Inc.</span>
                        <span>New York, NY</span>
                      </div>
                      <ul className="list-disc list-inside text-[10px] leading-tight pl-2 dark:text-gray-400">
                        <li>Led development of cloud-based application that increased customer efficiency by 35%</li>
                        <li>Mentored junior engineers and implemented code review processes</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold dark:text-gray-200">EDUCATION</h5>
                    <Separator className="my-1 dark:bg-gray-600" />
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between dark:text-gray-300">
                        <span className="font-medium">Bachelor of Science, Computer Science</span>
                        <span>2016 - 2020</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground dark:text-gray-400">
                        <span>New York University</span>
                        <span>New York, NY</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold dark:text-gray-200">SKILLS</h5>
                    <Separator className="my-1 dark:bg-gray-600" />
                    <div className="flex flex-wrap gap-1 text-[10px]">
                      <Badge variant="outline" className="rounded-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">React</Badge>
                      <Badge variant="outline" className="rounded-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">Node.js</Badge>
                      <Badge variant="outline" className="rounded-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">TypeScript</Badge>
                      <Badge variant="outline" className="rounded-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">AWS</Badge>
                      <Badge variant="outline" className="rounded-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">CI/CD</Badge>
                      <Badge variant="outline" className="rounded-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">RESTful APIs</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="absolute right-4 bottom-4 bg-white dark:bg-gray-700 p-2 rounded-full border shadow dark:border-gray-600">
                  <FileText className="h-4 w-4 text-primary dark:text-gray-300" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilderPreview;
