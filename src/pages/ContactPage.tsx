import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is being edited
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="p-3 bg-teal-50 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">Our Location</h3>
                      <p className="text-slate-600">P.O Box 2870 – 20100, Nakuru-Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-teal-50 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">Email Us</h3>
                      <a href="mailto:info@softwarehubkenya.com" className="text-teal-600 hover:underline">info@softwarehubkenya.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-teal-50 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">Call Us</h3>
                      <p className="text-slate-600">+254 742 007 544</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Find Me Online</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://www.elisha.com.unaux.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-teal-600 hover:underline block"
                    >
                      Personal Website
                    </a>
                    <a 
                      href="https://www.github.com/eKidenge" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-teal-600 hover:underline block"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Working Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monday - Friday:</span>
                      <span className="text-slate-900 font-medium">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Saturday:</span>
                      <span className="text-slate-900 font-medium">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sunday:</span>
                      <span className="text-slate-900 font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-12 bg-slate-100 h-64 rounded-lg shadow overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-slate-200">
                    <p className="text-slate-500">[Map Placeholder]</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                {submitSuccess && (
                  <div className="bg-green-50 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Thank you for your message! We'll get back to you soon.</span>
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg mb-6">
                    {submitError}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="+254 xxx xxx xxx"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Data Analysis">Data Analysis</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-teal-600 text-white font-medium rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">
              Find quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-md group">
              <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-900">
                How quickly can you start on my project?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600">
                Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex software application could take 3-6 months or more. During our initial consultation, we'll provide a detailed timeline estimate for your specific project.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-md group">
              <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-900">
                What is your pricing structure?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600">
                We offer flexible pricing models including fixed-price projects, time and materials, and retainer arrangements. After understanding your requirements, we'll recommend the most suitable pricing structure and provide a detailed quote.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-md group">
              <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-900">
                Do you provide ongoing support after project completion?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600">
                Yes, we offer various support and maintenance packages to ensure your solution remains up-to-date, secure, and performant. Our support packages include regular updates, bug fixes, security patches, and technical assistance.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-md group">
              <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-900">
                How do you handle data security and privacy?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600">
                We take data security very seriously. We implement industry-standard security measures, follow best practices for secure coding, and ensure compliance with relevant data protection regulations. We're happy to sign NDAs and can work with your security team to address specific concerns.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;