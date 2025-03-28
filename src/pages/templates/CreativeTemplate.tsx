
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Instagram, 
  Twitter, 
  Dribbble, 
  Mail, 
  ArrowRight, 
  ExternalLink,
  Image,
  Code,
  Palette
} from 'lucide-react';

const CreativeTemplate: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation Bar */}
      <div className={`fixed top-0 left-0 right-0 z-10 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link to="/portfolio-templates">
            <Button variant="ghost" size="sm" className="text-white gap-1">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
          <div className="text-sm">
            Creative Template Preview
          </div>
          <nav className="hidden md:flex gap-6">
            <button 
              onClick={() => setActiveSection('about')}
              className={`text-sm ${activeSection === 'about' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveSection('work')}
              className={`text-sm ${activeSection === 'work' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Work
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`text-sm ${activeSection === 'contact' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Visual Designer
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Sarah Chen
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
              Creating immersive digital experiences through thoughtful design and creative innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
            <div className="relative overflow-hidden rounded-xl aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" 
                alt="Design Work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold">Digital Art</h3>
                <p className="text-gray-300">Creative explorations</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                alt="Development Work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold">UI/UX Design</h3>
                <p className="text-gray-300">User-centered interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 mb-4">
                I'm a visual designer with over 6 years of experience crafting digital experiences for brands and businesses. My approach combines aesthetic sensibility with strategic thinking to create designs that are both beautiful and functional.
              </p>
              <p className="text-gray-400 mb-6">
                My work spans various disciplines including UI/UX design, branding, and digital illustration. I believe in creating designs that tell meaningful stories and resonate with the intended audience.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200">Download Resume</Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <Palette className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Design</h3>
                <p className="text-gray-400 text-sm">Figma, Adobe CC, Sketch, Procreate</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <Code className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Development</h3>
                <p className="text-gray-400 text-sm">HTML/CSS, JavaScript, React, Framer Motion</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <Image className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Visual</h3>
                <p className="text-gray-400 text-sm">Photography, Illustration, Animation</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <ExternalLink className="h-8 w-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Marketing</h3>
                <p className="text-gray-400 text-sm">Branding, Social Media, Content Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
          
          <div className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Project 1" 
                  className="rounded-xl w-full"
                />
              </div>
              <div className="md:col-span-5">
                <h3 className="text-2xl font-bold mb-3">Nebula App Redesign</h3>
                <p className="text-gray-400 mb-6">
                  A comprehensive redesign of a productivity application, focusing on improving user flows and visual aesthetics.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">UI/UX</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Mobile</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Figma</span>
                </div>
                <Button className="gap-2">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 md:order-1 order-2">
                <h3 className="text-2xl font-bold mb-3">Horizon Branding</h3>
                <p className="text-gray-400 mb-6">
                  Brand identity development for a sustainable fashion startup, including logo design, color palette, and marketing materials.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Branding</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Logo Design</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Identity</span>
                </div>
                <Button className="gap-2">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="md:col-span-7 md:order-2 order-1">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Project 2" 
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="gap-2">
              View All Projects <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            I'm currently available for freelance projects and collaborations. If you have a project in mind, let's discuss how we can bring your vision to life.
          </p>
          <div className="mb-10">
            <Button size="lg" className="gap-2">
              <Mail className="h-5 w-5" /> Get in Touch
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Dribbble className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-gray-500 text-sm flex justify-between items-center">
          <p>© 2023 Sarah Chen</p>
          <p>Made with passion and creativity</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativeTemplate;
