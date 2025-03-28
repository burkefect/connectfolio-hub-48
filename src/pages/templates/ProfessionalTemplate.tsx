
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Briefcase, 
  User, 
  Code, 
  Award, 
  FileText, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const ProfessionalTemplate: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-10 px-4 py-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link to="/portfolio-templates">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Templates
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Professional Template Preview
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="pt-24 pb-6 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                alt="Michael Thompson" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Michael Thompson</h1>
              <p className="text-xl text-gray-600 mb-4">Business Development & Strategy Consultant</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button size="sm" className="gap-2">
                  <Mail className="h-4 w-4" /> Contact Me
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <FileText className="h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex overflow-x-auto">
            <a href="#about" className="py-4 px-6 border-b-2 border-primary font-medium text-primary">About</a>
            <a href="#experience" className="py-4 px-6 text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#expertise" className="py-4 px-6 text-gray-600 hover:text-gray-900">Expertise</a>
            <a href="#clients" className="py-4 px-6 text-gray-600 hover:text-gray-900">Clients</a>
            <a href="#testimonials" className="py-4 px-6 text-gray-600 hover:text-gray-900">Testimonials</a>
            <a href="#contact" className="py-4 px-6 text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>

      <main className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          {/* About Section */}
          <section id="about" className="mb-16">
            <div className="flex items-center mb-8">
              <User className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            <div className="bg-white p-8 border rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                With over 15 years of experience in business strategy and development, I help organizations optimize their operations, enter new markets, and drive sustainable growth. As a certified business consultant with an MBA from Harvard Business School, I blend analytical rigor with creative problem-solving to deliver measurable results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My approach focuses on understanding the unique challenges and opportunities of each client, developing tailored strategies, and providing hands-on implementation support. I've worked with Fortune 500 companies, startups, and non-profits across diverse industries including technology, healthcare, finance, and retail.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Professional Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 border rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">Principal Consultant</h3>
                    <p className="text-primary font-medium mb-2">Thompson Strategy Group</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">2018 - Present</span>
                </div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Founded boutique consulting firm specializing in business strategy, market entry, and operational optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Led strategic initiatives for 30+ clients resulting in average revenue growth of 32%</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Developed comprehensive market analysis and competitor benchmarking frameworks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 border rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">Senior Strategy Director</h3>
                    <p className="text-primary font-medium mb-2">Global Consulting Partners</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">2012 - 2018</span>
                </div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Managed a team of 15 consultants working on high-impact projects for Fortune 500 clients</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Spearheaded international expansion strategies for technology and healthcare companies</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Developed and implemented cost optimization initiatives saving clients over $50M annually</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section id="expertise" className="mb-16">
            <div className="flex items-center mb-8">
              <Code className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Areas of Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Business Strategy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Strategic Planning</li>
                  <li>Market Analysis</li>
                  <li>Competitive Positioning</li>
                  <li>Growth Strategies</li>
                </ul>
              </div>
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Operational Excellence</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Process Optimization</li>
                  <li>Cost Reduction</li>
                  <li>Supply Chain Management</li>
                  <li>Quality Improvement</li>
                </ul>
              </div>
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Organizational Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Change Management</li>
                  <li>Leadership Development</li>
                  <li>Team Building</li>
                  <li>Organizational Design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Client Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Michael's strategic guidance was instrumental in our successful market expansion. His ability to identify opportunities and develop actionable strategies is remarkable. We've seen a 45% increase in revenue since implementing his recommendations."
                </p>
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">CEO, TechNova Solutions</p>
                </div>
              </div>
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "We engaged Michael to help streamline our operations and reduce costs. His methodical approach and deep expertise helped us identify inefficiencies we hadn't seen. The implementation plan was practical and effective, resulting in 28% cost savings."
                </p>
                <div>
                  <p className="font-bold">David Martinez</p>
                  <p className="text-gray-600 text-sm">COO, Healthcare Innovations</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <div className="flex items-center mb-8">
              <Mail className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Contact Me</h2>
            </div>
            <div className="bg-white p-8 border rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
                  <p className="text-gray-700 mb-6">
                    I'm currently available for consulting engagements and speaking opportunities. Feel free to reach out to discuss how I can help your organization achieve its strategic objectives.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-0.5 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">michael@thompsonstrategyconsulting.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mt-0.5 mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex space-x-4 mt-6">
                      <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                        <Twitter className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      ></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2023 Michael Thompson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalTemplate;
