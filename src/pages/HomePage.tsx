import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, BarChart3, Brain, ChevronRight, ExternalLink, Users } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ProjectCard from '../components/ProjectCard';
import BlogPreview from '../components/BlogPreview';
import CallToAction from '../components/CallToAction';
import StatsSection from '../components/StatsSection';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom, responsive websites and web applications tailored to your business needs.',
      icon: <Code className="h-8 w-8 text-teal-500" />,
      link: '/services#web-development'
    },
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Scalable, robust software solutions to streamline your operations and boost productivity.',
      icon: <Database className="h-8 w-8 text-teal-500" />,
      link: '/services#software-development'
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description: 'Transform your raw data into actionable insights to drive informed business decisions.',
      icon: <BarChart3 className="h-8 w-8 text-teal-500" />,
      link: '/services#data-analysis'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Harness the power of AI to automate processes and gain a competitive edge.',
      icon: <Brain className="h-8 w-8 text-teal-500" />,
      link: '/services#ai-ml'
    }
  ];

  const featuredProjects = [
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
    }
  ];

  return (
    <div>
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team working together" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">About Us</h2>
                <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Transforming Ideas into Digital Solutions
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                At SOFTWARE-HUB KENYA, we're passionate about leveraging technology to solve real-world problems. With a team of experienced developers, data scientists, and AI specialists, we deliver cutting-edge solutions that help businesses thrive in the digital landscape.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to empower businesses across Kenya and beyond with innovative digital tools and insights that drive growth and efficiency.
              </p>
              <div className="flex space-x-8 pt-4">
                <div>
                  <h4 className="font-bold text-3xl text-slate-900">5+</h4>
                  <p className="text-slate-600 text-sm">Years of Experience</p>
                </div>
                <div>
                  <h4 className="font-bold text-3xl text-slate-900">100+</h4>
                  <p className="text-slate-600 text-sm">Projects Completed</p>
                </div>
                <div>
                  <h4 className="font-bold text-3xl text-slate-900">50+</h4>
                  <p className="text-slate-600 text-sm">Happy Clients</p>
                </div>
              </div>
              <div>
                <Link to="/about" className="inline-flex items-center group text-teal-600 font-medium">
                  Learn more about us 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Our Services</h2>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Comprehensive Tech Solutions
            </h3>
            <p className="mt-4 text-slate-600">
              We offer end-to-end technology services to help your business grow, innovate, and succeed in a competitive marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Our Work</h2>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Projects
            </h3>
            <p className="mt-4 text-slate-600">
              Browse through some of our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-gray-50 border-teal-600 transition-colors"
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-teal-400 tracking-wide uppercase">Testimonials</h2>
            <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              What Our Clients Say
            </h3>
            <p className="mt-4 text-slate-300">
              Don't just take our word for it. Here's what some of our clients have to say about working with us.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Team Section Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Our Team</h2>
                <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Meet the Experts Behind Our Success
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Our diverse team of skilled professionals brings together expertise in web development, software engineering, data science, and artificial intelligence to deliver comprehensive solutions for any challenge.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We're passionate about technology and committed to staying at the forefront of innovation to ensure our clients receive cutting-edge solutions.
              </p>
              <div className="pt-4">
                <Link 
                  to="/about#team" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                >
                  Meet Our Team
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team member" 
                className="rounded-lg shadow-md h-40 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team member" 
                className="rounded-lg shadow-md h-40 object-cover mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team member" 
                className="rounded-lg shadow-md h-40 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team member" 
                className="rounded-lg shadow-md h-40 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Our Blog</h2>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Latest Insights & News
            </h3>
            <p className="mt-4 text-slate-600">
              Stay updated with the latest trends in technology and learn how to leverage them for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPreview 
              title="The Future of AI in Business"
              excerpt="Discover how artificial intelligence is transforming various industries and how businesses can prepare for the AI revolution."
              date="May 15, 2025"
              author="John Doe"
              category="Artificial Intelligence"
              image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="/blog/future-of-ai"
            />
            <BlogPreview 
              title="Web Development Trends for 2025"
              excerpt="Explore the latest web development technologies and methodologies that are shaping the digital landscape this year."
              date="April 28, 2025"
              author="Jane Smith"
              category="Web Development"
              image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="/blog/web-dev-trends"
            />
            <BlogPreview 
              title="Leveraging Data Analytics for SMEs"
              excerpt="How small and medium-sized enterprises can use data analytics to gain competitive advantages without breaking the bank."
              date="April 10, 2025"
              author="David Johnson"
              category="Data Analysis"
              image="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="/blog/data-analytics-sme"
            />
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-gray-50 border-teal-600 transition-colors"
            >
              Read All Articles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default HomePage;