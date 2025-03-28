
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Monitor,
  Layers,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const InteractiveTemplate: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id') || '';
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];
  
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'GraphQL', level: 75 },
    { name: 'CSS/SCSS', level: 95 },
    { name: 'UI/UX Design', level: 70 }
  ];
  
  const faqs = [
    {
      question: 'What technologies do you work with?',
      answer: 'I specialize in modern web technologies including React, TypeScript, Node.js, and GraphQL. I also have experience with Next.js, Vue.js, and various CSS frameworks.'
    },
    {
      question: 'Do you take on freelance projects?',
      answer: 'Yes! I'm available for freelance projects, particularly those involving interactive web applications, e-commerce solutions, or innovative digital experiences.'
    },
    {
      question: 'What is your development process?',
      answer: 'I follow an agile approach, starting with thorough requirements gathering, followed by design prototyping, iterative development with regular client check-ins, testing, and deployment with ongoing support.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/portfolio-templates">
              <Button variant="ghost" size="sm" className="text-white gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-gray-900 transform transition-transform duration-300 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xl font-medium text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center" ref={heroRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-900/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                Alex Walker
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl sm:text-2xl mb-8 text-gray-300">
                Interactive Developer & UI Engineer
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={() => scrollToSection('projects')} className="gap-2">
                  View My Work <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')} className="gap-2">
                  Contact Me <Mail className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center mt-10 space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white opacity-70 hover:opacity-100 transition-opacity"
              >
                <ChevronDown className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0">About Me</h2>
              <div className="w-16 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="animate-on-scroll opacity-0">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden border-4 border-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                      alt="Alex Walker" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-black font-bold p-3 rounded-lg">
                    5+ Years Experience
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0">
                <h3 className="text-2xl font-bold mb-4">Interactive Developer & UI Engineer</h3>
                <p className="text-gray-300 mb-6">
                  I specialize in creating captivating digital experiences that combine technical excellence with creative design. With a focus on interactive web applications, I blend form and function to deliver solutions that delight users and achieve business goals.
                </p>
                <p className="text-gray-300 mb-6">
                  My approach emphasizes clean code, thoughtful animations, and intuitive interfaces. I'm passionate about pushing the boundaries of what's possible on the web while maintaining performance and accessibility.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Frontend Development</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Interactive Design</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Motion Graphics</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">3D Web Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0">
              A selection of my most innovative work showcasing interactive elements, animations, and seamless user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative bg-gray-800 rounded-lg overflow-hidden animate-on-scroll opacity-0">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop" 
                  alt="Project 1" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-xl font-bold mb-2">3D Product Configurator</h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Interactive 3D product visualization tool allowing customers to customize products in real-time.
                  </p>
                  <div className="flex gap-3 mb-4">
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">Three.js</span>
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">WebGL</span>
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">React</span>
                  </div>
                  <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group relative bg-gray-800 rounded-lg overflow-hidden animate-on-scroll opacity-0">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" 
                  alt="Project 2" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-xl font-bold mb-2">Interactive Data Dashboard</h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Real-time analytics platform with animated charts and interactive filtering capabilities.
                  </p>
                  <div className="flex gap-3 mb-4">
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">D3.js</span>
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">Node.js</span>
                  </div>
                  <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group relative bg-gray-800 rounded-lg overflow-hidden animate-on-scroll opacity-0">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop" 
                  alt="Project 3" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-xl font-bold mb-2">Immersive E-learning Platform</h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Educational platform with interactive exercises, progress tracking, and gamification elements.
                  </p>
                  <div className="flex gap-3 mb-4">
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">Firebase</span>
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs">GSAP</span>
                  </div>
                  <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-on-scroll opacity-0">
            <Button variant="outline" className="gap-2">
              View All Projects <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0">Technical Skills</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-900 p-8 rounded-lg animate-on-scroll opacity-0">
              <div className="flex items-center mb-6">
                <Code className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Modern JavaScript (ES6+) & TypeScript</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>React.js, Next.js, Vue.js</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>CSS3, SCSS, Tailwind CSS</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Webpack, Vite, Build Tools</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Responsive & Mobile-First Design</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg animate-on-scroll opacity-0">
              <div className="flex items-center mb-6">
                <Layers className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-xl font-bold">Interactive Design</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Three.js & WebGL</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>GSAP Animation Library</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>SVG Animation & Manipulation</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Canvas & WebGL Shaders</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Motion Design Principles</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg animate-on-scroll opacity-0">
              <div className="flex items-center mb-6">
                <Monitor className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-xl font-bold">Backend & Tools</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Node.js & Express</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>GraphQL & REST APIs</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Firebase & MongoDB</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Git, GitHub, CI/CD</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Figma, Adobe XD, Design Tools</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h3 className="text-xl font-bold mb-6">Skill Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 border border-gray-700 rounded-lg overflow-hidden animate-on-scroll opacity-0"
              >
                <button 
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 transform transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-40 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0">
              I'm currently available for freelance work and new opportunities. Let's create something amazing together!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">alex@interactivedev.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Map className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-300">San Francisco, CA (Open to Remote)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2023 Alex Walker. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Interactive Template Preview for Quikfolio</p>
        </div>
      </footer>
    </div>
  );
};

// Since we're using the Map icon but it's not imported, we need to create it
const Map = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

export default InteractiveTemplate;
