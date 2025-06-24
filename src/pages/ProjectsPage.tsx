import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import CallToAction from '../components/CallToAction';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A complete e-commerce solution with payment integration and inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/1'
    },
    {
      id: 2,
      title: 'Healthcare Analytics Dashboard',
      category: 'Data Analysis',
      description: 'Interactive dashboard for healthcare providers to monitor patient metrics and trends.',
      image: 'https://images.pexels.com/photos/7947953/pexels-photo-7947953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/2'
    },
    {
      id: 3,
      title: 'AI-Powered Recommendation Engine',
      category: 'AI & Machine Learning',
      description: 'Machine learning algorithm that provides personalized product recommendations.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/3'
    },
    {
      id: 4,
      title: 'Inventory Management System',
      category: 'Software Development',
      description: 'Custom software for tracking inventory, orders, and supply chain management.',
      image: 'https://images.pexels.com/photos/4506152/pexels-photo-4506152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/4'
    },
    {
      id: 5,
      title: 'Financial Services Mobile App',
      category: 'Web Development',
      description: 'Mobile application for banking, investments, and financial management.',
      image: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/5'
    },
    {
      id: 6,
      title: 'Customer Sentiment Analysis',
      category: 'AI & Machine Learning',
      description: 'AI system that analyzes customer feedback to identify satisfaction levels and areas for improvement.',
      image: 'https://images.pexels.com/photos/7709206/pexels-photo-7709206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/6'
    },
    {
      id: 7,
      title: 'School Management Platform',
      category: 'Software Development',
      description: 'Comprehensive system for managing student records, schedules, and administrative tasks.',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/7'
    },
    {
      id: 8,
      title: 'Real Estate Market Analysis',
      category: 'Data Analysis',
      description: 'Data-driven insights into property market trends, investment opportunities, and pricing strategies.',
      image: 'https://images.pexels.com/photos/7579201/pexels-photo-7579201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/8'
    },
    {
      id: 9,
      title: 'Supply Chain Optimization',
      category: 'Data Analysis',
      description: 'Analytics solution for optimizing logistics, reducing costs, and improving delivery times.',
      image: 'https://images.pexels.com/photos/4506155/pexels-photo-4506155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/projects/9'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('Web Development')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'Web Development'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('Software Development')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'Software Development'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Software Development
            </button>
            <button
              onClick={() => setFilter('Data Analysis')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'Data Analysis'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Data Analysis
            </button>
            <button
              onClick={() => setFilter('AI & Machine Learning')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'AI & Machine Learning'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              AI & ML
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-10">
              <p className="text-slate-600">No projects found for this category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Project Approach</h2>
            <p className="text-slate-600">
              We follow a structured methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-100"></div>
              
              <div className="space-y-12 md:space-y-0">
                {/* Step 1 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:text-right pb-10 md:pb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md ml-auto max-w-md">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">1. Discovery</h3>
                      <p className="text-slate-600">
                        We start by understanding your business goals, target audience, and project requirements through detailed consultations.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  <div className="md:pl-8"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="hidden md:block"></div>
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  <div className="pb-10 md:pb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">2. Planning</h3>
                      <p className="text-slate-600">
                        We develop a comprehensive project plan with timelines, milestones, and resource allocation to ensure smooth execution.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:text-right pb-10 md:pb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md ml-auto max-w-md">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">3. Design & Development</h3>
                      <p className="text-slate-600">
                        Our designers and developers work collaboratively to create the solution, with regular client updates and feedback sessions.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  <div className="md:pl-8"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="hidden md:block"></div>
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  <div className="pb-10 md:pb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">4. Testing</h3>
                      <p className="text-slate-600">
                        Rigorous testing ensures the solution meets all requirements and functions flawlessly across different scenarios.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md ml-auto max-w-md">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">5. Deployment & Support</h3>
                      <p className="text-slate-600">
                        We launch your solution and provide ongoing support and maintenance to ensure long-term success.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  <div className="md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default ProjectsPage;