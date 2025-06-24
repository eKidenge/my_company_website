import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            <Code className="h-8 w-8 text-teal-500" />
            <span className="hidden sm:inline">SOFTWARE-HUB KENYA</span>
            <span className="sm:hidden">SH KENYA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium hover:text-teal-400 transition-colors ${
                isActive('/') ? 'text-teal-400' : 'text-gray-100'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium hover:text-teal-400 transition-colors ${
                  isActive('/services') ? 'text-teal-400' : 'text-gray-100'
                }`}
                onClick={toggleServicesDropdown}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  to="/services#web-development"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-500 hover:text-white"
                >
                  Web Development
                </Link>
                <Link
                  to="/services#software-development"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-500 hover:text-white"
                >
                  Software Development
                </Link>
                <Link
                  to="/services#data-analysis"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-500 hover:text-white"
                >
                  Data Analysis
                </Link>
                <Link
                  to="/services#ai-ml"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-500 hover:text-white"
                >
                  AI & Machine Learning
                </Link>
              </div>
            </div>
            <Link
              to="/projects"
              className={`text-sm font-medium hover:text-teal-400 transition-colors ${
                isActive('/projects') ? 'text-teal-400' : 'text-gray-100'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium hover:text-teal-400 transition-colors ${
                isActive('/about') ? 'text-teal-400' : 'text-gray-100'
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium hover:text-teal-400 transition-colors ${
                isActive('/blog') ? 'text-teal-400' : 'text-gray-100'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md bg-teal-500 text-white font-medium text-sm hover:bg-teal-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-teal-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-[500px] opacity-100 visible mt-4'
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="flex flex-col space-y-3 p-4 bg-slate-800 rounded-lg mt-2">
            <Link
              to="/"
              className={`text-base font-medium hover:text-teal-400 transition-colors ${
                isActive('/') ? 'text-teal-400' : 'text-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                className={`flex items-center text-base font-medium hover:text-teal-400 transition-colors ${
                  isActive('/services') ? 'text-teal-400' : 'text-gray-100'
                }`}
                onClick={toggleServicesDropdown}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`ml-4 mt-2 space-y-2 ${
                  servicesDropdown ? 'block' : 'hidden'
                }`}
              >
                <Link
                  to="/services#web-development"
                  className="block text-sm text-gray-300 hover:text-teal-400"
                  onClick={() => setIsOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  to="/services#software-development"
                  className="block text-sm text-gray-300 hover:text-teal-400"
                  onClick={() => setIsOpen(false)}
                >
                  Software Development
                </Link>
                <Link
                  to="/services#data-analysis"
                  className="block text-sm text-gray-300 hover:text-teal-400"
                  onClick={() => setIsOpen(false)}
                >
                  Data Analysis
                </Link>
                <Link
                  to="/services#ai-ml"
                  className="block text-sm text-gray-300 hover:text-teal-400"
                  onClick={() => setIsOpen(false)}
                >
                  AI & Machine Learning
                </Link>
              </div>
            </div>
            <Link
              to="/projects"
              className={`text-base font-medium hover:text-teal-400 transition-colors ${
                isActive('/projects') ? 'text-teal-400' : 'text-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium hover:text-teal-400 transition-colors ${
                isActive('/about') ? 'text-teal-400' : 'text-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`text-base font-medium hover:text-teal-400 transition-colors ${
                isActive('/blog') ? 'text-teal-400' : 'text-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md bg-teal-500 text-white font-medium text-sm hover:bg-teal-600 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;