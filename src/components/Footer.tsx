import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Code className="h-6 w-6 text-teal-500" />
              <span>SOFTWARE-HUB KENYA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovative technology solutions for businesses of all sizes. 
              We specialize in web and software development, data analysis, 
              and AI & machine learning implementations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-1 bg-teal-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-10 h-1 bg-teal-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#web-development" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Web Development</Link>
              </li>
              <li>
                <Link to="/services#software-development" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Software Development</Link>
              </li>
              <li>
                <Link to="/services#data-analysis" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Data Analysis</Link>
              </li>
              <li>
                <Link to="/services#ai-ml" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">AI & Machine Learning</Link>
              </li>
              <li>
                <Link to="/services#mobile-apps" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">Mobile Applications</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">IT Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-10 h-1 bg-teal-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">P.O Box 2870 – 20100, Nakuru-Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+254 742 007 544</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:info@softwarehubkenya.com" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">info@softwarehubkenya.com</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Find Me Online</h4>
              <div className="space-y-2">
                <a 
                  href="https://www.elisha.com.unaux.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-teal-500 transition-colors text-sm block"
                >
                  Personal Website
                </a>
                <a 
                  href="https://www.github.com/eKidenge" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-teal-500 transition-colors text-sm block"
                >
                  GitHub Profile
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-white">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 border border-slate-700 text-gray-300 px-4 py-2 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-500 w-full"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 text-sm font-medium rounded-r-md transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} SOFTWARE-HUB KENYA. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-teal-500 transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-teal-500 transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;