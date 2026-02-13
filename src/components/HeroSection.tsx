import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(15,23,42,0.8)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          style={{ opacity: 0.3 }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="block">Transform Your Business With</span>
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text">
              Innovative Tech Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            We specialize in custom web development, software engineering, data analysis, and AI & machine learning to drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-medium text-lg transition-colors shadow-lg hover:shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-1"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium text-lg transition-colors flex items-center justify-center"
            >
              Our Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16">
            <p className="text-sm text-slate-400 mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="text-slate-400 font-semibold text-lg">Qinex Kenya</div>
              <div className="text-slate-400 font-semibold text-lg">Amazon</div>
              <div className="text-slate-400 font-semibold text-lg">Facebook</div>
              <div className="text-slate-400 font-semibold text-lg">Twitter</div>
              <div className="text-slate-400 font-semibold text-lg">i-innovate Quantum Innovation Hub Consultancy
Ltd</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
