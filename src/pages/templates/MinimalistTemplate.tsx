import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';

const MinimalistTemplate: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-10 px-4 py-3">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <Link to="/portfolio-templates">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Templates
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Minimalist Template Preview
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <header className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-3">John Anderson</h1>
          <p className="text-xl text-gray-600 mb-6">Frontend Developer</p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Button>
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm a frontend developer with 5+ years of experience building responsive, user-friendly websites and applications. Specialized in React.js and modern CSS frameworks, I focus on creating clean, efficient code that delivers exceptional user experiences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Based in <span className="inline-flex items-center"><MapPin className="h-4 w-4 mr-1" /> San Francisco, CA</span> and open to remote opportunities worldwide.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" alt="Project 1" className="w-full aspect-video object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-3 text-sm">React, Redux, Tailwind CSS</p>
                <p className="text-gray-700 text-sm mb-4">A fully responsive e-commerce site with cart functionality and payment processing.</p>
                <Button size="sm" className="w-full">View Project</Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop" alt="Project 2" className="w-full aspect-video object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-3 text-sm">TypeScript, React, Firebase</p>
                <p className="text-gray-700 text-sm mb-4">A productivity tool that helps teams organize tasks and track progress.</p>
                <Button size="sm" className="w-full">View Project</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Frontend</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>React.js / Next.js</li>
                <li>TypeScript</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Backend</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Tools</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Git / GitHub</li>
                <li>Webpack / Vite</li>
                <li>Jest / Testing Library</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Contact</h2>
          <p className="text-gray-700 mb-6">
            I'm currently available for freelance work and full-time opportunities. Let's discuss how I can help with your project!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
            />
            <textarea 
              placeholder="Message" 
              className="col-span-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]" 
            />
            <Button className="col-span-2">Send Message</Button>
          </div>
        </section>
      </div>

      <footer className="bg-gray-50 py-8 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2023 John Anderson. All rights reserved.</p>
          <p className="mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistTemplate;
