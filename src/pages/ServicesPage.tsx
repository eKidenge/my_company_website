import React, { useEffect } from 'react';
import { Code, Database, BarChart3, Brain, Monitor, Server, Search, Shield, Smartphone, CloudCog } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Code className="h-12 w-12 text-teal-500" />,
      description: 'Create stunning, responsive websites and web applications that engage users and drive conversions.',
      features: [
        'Custom website design and development',
        'E-commerce websites',
        'Content management systems',
        'Progressive web applications',
        'UI/UX design',
        'Website maintenance and support'
      ]
    },
    {
      id: 'software-development',
      title: 'Software Development',
      icon: <Database className="h-12 w-12 text-teal-500" />,
      description: 'Build robust, scalable software solutions tailored to your specific business needs and requirements.',
      features: [
        'Custom software development',
        'Enterprise applications',
        'Cloud-based solutions',
        'API development and integration',
        'Database design and management',
        'Software maintenance and support'
      ]
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      icon: <BarChart3 className="h-12 w-12 text-teal-500" />,
      description: 'Transform raw data into actionable insights that drive informed business decisions and strategy.',
      features: [
        'Data visualization and reporting',
        'Business intelligence solutions',
        'Statistical analysis',
        'Predictive analytics',
        'Data mining and processing',
        'Custom dashboards and metrics'
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <Brain className="h-12 w-12 text-teal-500" />,
      description: 'Harness the power of artificial intelligence to automate processes and gain competitive advantages.',
      features: [
        'Machine learning model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive modeling',
        'AI integration with existing systems',
        'Chatbots and virtual assistants'
      ]
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Development',
      icon: <Smartphone className="h-12 w-12 text-teal-500" />,
      description: 'Create native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS and Android app development',
        'Cross-platform solutions',
        'Mobile UI/UX design',
        'App maintenance and updates',
        'Push notification systems',
        'Mobile payment integration'
      ]
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      icon: <CloudCog className="h-12 w-12 text-teal-500" />,
      description: 'Get expert guidance on technology strategy, digital transformation, and IT infrastructure optimization.',
      features: [
        'Technology strategy planning',
        'Digital transformation consulting',
        'IT infrastructure assessment',
        'Cloud migration strategy',
        'Cybersecurity consultation',
        'Process automation advisory'
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Comprehensive technology solutions to help your business innovate, grow, and succeed in a digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} id={service.id} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100 group scroll-mt-32">
                <div className="mb-6 p-3 inline-block rounded-lg bg-slate-50">{service.icon}</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Development Process</h2>
            <p className="text-slate-600">
              We follow a comprehensive, client-centered approach to ensure your project is delivered successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">1</div>
              <div className="mb-4 text-center">
                <Search className="h-10 w-10 text-teal-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Discovery</h3>
              <p className="text-slate-600 text-center">
                We learn about your business goals, requirements, and expectations to define the project scope.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">2</div>
              <div className="mb-4 text-center">
                <Monitor className="h-10 w-10 text-teal-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Design</h3>
              <p className="text-slate-600 text-center">
                We create wireframes and prototypes that visualize the solution before development begins.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">3</div>
              <div className="mb-4 text-center">
                <Server className="h-10 w-10 text-teal-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Development</h3>
              <p className="text-slate-600 text-center">
                Our experts build your solution using modern technologies and industry best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">4</div>
              <div className="mb-4 text-center">
                <Shield className="h-10 w-10 text-teal-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Delivery & Support</h3>
              <p className="text-slate-600 text-center">
                We thoroughly test, deploy, and provide ongoing maintenance and support for your solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technologies We Use</h2>
            <p className="text-slate-600">
              We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">React</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">Node.js</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">Python</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">Django</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">TensorFlow</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">AWS</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">MongoDB</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">PostgreSQL</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">Flutter</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">Express</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">Vue.js</p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-xl font-bold text-slate-800">Laravel</p>
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
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-md group">
              <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-lg text-slate-900">
                How long does a typical project take?
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

      <CallToAction />
    </div>
  );
};

export default ServicesPage;