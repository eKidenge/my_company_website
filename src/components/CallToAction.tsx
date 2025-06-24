import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 px-6 py-12 md:py-16 md:px-12 overflow-hidden shadow-xl">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-teal-100 text-lg">
                Let's discuss how our custom tech solutions can help your business grow and thrive in the digital age. Contact us today for a free consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg bg-white text-teal-700 font-medium text-base transition-colors shadow-lg hover:shadow-xl hover:shadow-teal-500/20 hover:bg-gray-50 flex items-center justify-center"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-medium text-base transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;