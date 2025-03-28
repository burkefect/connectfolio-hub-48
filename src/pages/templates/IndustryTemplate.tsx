
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  Stethoscope, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail,
  FileText,
  ArrowRight
} from 'lucide-react';

const IndustryTemplate: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-10 px-4 py-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/portfolio-templates">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Templates
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Industry Specific Template Preview (Healthcare)
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="pt-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dr. Emily Richardson
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Board Certified Cardiologist
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1">
                  Cardiovascular Care
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1">
                  20+ Years Experience
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1">
                  Harvard Medical School
                </Badge>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  Book Appointment <Calendar className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2">
                  View Services <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 bg-white transform -translate-y-8 rounded-t-[50%]"></div>
      </header>

      {/* Main Content */}
      <main className="pb-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary Section */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
                    alt="Dr. Emily Richardson" 
                    className="w-full rounded-lg object-cover aspect-square"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. Richardson</h2>
                  <p className="text-gray-700 mb-6">
                    Dr. Emily Richardson is a board-certified cardiologist with over 20 years of experience in cardiovascular care. She specializes in preventive cardiology, heart failure management, and women's heart health. After completing her medical education at Harvard Medical School, Dr. Richardson completed her residency at Massachusetts General Hospital and a fellowship in cardiology at Johns Hopkins Hospital.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Her approach focuses on comprehensive cardiovascular care that addresses not only the physical aspects of heart health but also lifestyle factors that contribute to cardiovascular wellbeing. Dr. Richardson is known for her patient-centered approach, taking time to listen and develop personalized treatment plans.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Experience</p>
                        <p className="text-gray-600">20+ Years</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">Boston, MA</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Patients Treated</p>
                        <p className="text-gray-600">5000+</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-gray-600">Mon-Fri, 9AM-5PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialized Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cardiovascular Risk Assessment</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive evaluation of your heart health including risk factors, family history, and lifestyle factors to develop personalized prevention strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Complete heart health screening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced lipid profile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personalized risk management</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Cardiac Imaging</h3>
                <p className="text-gray-700 mb-4">
                  State-of-the-art imaging techniques to evaluate heart structure and function with precision, allowing for early detection of cardiac issues.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Echocardiography</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cardiac CT and MRI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Stress testing with imaging</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" x2="4" y1="22" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Women's Heart Health</h3>
                <p className="text-gray-700 mb-4">
                  Specialized care addressing the unique cardiovascular risks and symptoms that women experience, with focus on prevention and early intervention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gender-specific risk assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pregnancy-related heart care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Menopause cardiac health</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Patient Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
                  "Dr. Richardson is an exceptional cardiologist. She took the time to thoroughly explain my condition and treatment options. Her preventive approach has significantly improved my heart health. I'm grateful for her expertise and compassionate care."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">RJ</span>
                  </div>
                  <div>
                    <p className="font-bold">Robert Johnson</p>
                    <p className="text-gray-600 text-sm">Patient for 5 years</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
                  "As a woman with a family history of heart disease, I was looking for a specialist who understood the unique aspects of women's heart health. Dr. Richardson's expertise in this area has been invaluable. She's proactive, thorough, and truly cares about her patients."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">SP</span>
                  </div>
                  <div>
                    <p className="font-bold">Sarah Peterson</p>
                    <p className="text-gray-600 text-sm">Patient for 3 years</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education & Publications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education & Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Education & Training</span>
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-600 pl-4">
                    <div className="flex items-center text-sm text-blue-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>1998 - 2002</span>
                    </div>
                    <h4 className="font-bold">Harvard Medical School</h4>
                    <p className="text-gray-600">Doctor of Medicine</p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4">
                    <div className="flex items-center text-sm text-blue-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2002 - 2005</span>
                    </div>
                    <h4 className="font-bold">Massachusetts General Hospital</h4>
                    <p className="text-gray-600">Residency in Internal Medicine</p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4">
                    <div className="flex items-center text-sm text-blue-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2005 - 2008</span>
                    </div>
                    <h4 className="font-bold">Johns Hopkins Hospital</h4>
                    <p className="text-gray-600">Fellowship in Cardiology</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Research & Publications</span>
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center text-sm text-blue-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2022</span>
                    </div>
                    <h4 className="font-bold">"Gender Disparities in Cardiovascular Disease Diagnosis and Treatment"</h4>
                    <p className="text-gray-600">Journal of the American Heart Association</p>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-blue-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2020</span>
                    </div>
                    <h4 className="font-bold">"Advances in Preventive Cardiology: A Review of Current Practices"</h4>
                    <p className="text-gray-600">New England Journal of Medicine</p>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-blue-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2018</span>
                    </div>
                    <h4 className="font-bold">"Emerging Risk Factors for Cardiovascular Disease in Women"</h4>
                    <p className="text-gray-600">Circulation Research</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact & Appointments</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule an Appointment</h3>
                  <p className="text-gray-700 mb-6">
                    For appointments, consultations, or general inquiries, please contact our office. We strive to respond within 24 hours and accommodate your schedule.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">(617) 555-1234</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">dr.richardson@cardiocare.example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">123 Medical Center Drive, Suite 400<br />Boston, MA 02115</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-gray-600">Monday-Friday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                      <select
                        id="reason"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a reason</option>
                        <option value="consultation">Initial Consultation</option>
                        <option value="followup">Follow-up Appointment</option>
                        <option value="preventive">Preventive Cardiology</option>
                        <option value="womens">Women's Heart Health</option>
                        <option value="other">Other (please specify)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Appointment</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Dr. Emily Richardson</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing exceptional cardiovascular care with a focus on prevention, education, and personalized treatment plans.
              </p>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Preventive Cardiology</a></li>
                <li><a href="#" className="hover:text-white">Heart Failure Management</a></li>
                <li><a href="#" className="hover:text-white">Women's Heart Health</a></li>
                <li><a href="#" className="hover:text-white">Cardiac Imaging</a></li>
                <li><a href="#" className="hover:text-white">Risk Assessment</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Book Appointment</a></li>
                <li><a href="#" className="hover:text-white">Patient Resources</a></li>
                <li><a href="#" className="hover:text-white">Insurance Information</a></li>
                <li><a href="#" className="hover:text-white">Publications</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2023 Dr. Emily Richardson Cardiovascular Care. All rights reserved.</p>
            <p className="mt-2">This is a template for demonstration purposes. Not an actual medical practice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndustryTemplate;
