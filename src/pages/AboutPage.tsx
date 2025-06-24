import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Award, Users, Calendar, Flag, ChevronRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'John Kiamah',
      position: 'CEO & Lead Developer',
      bio: 'With over 15 years of experience in software development, John leads our team with expertise in multiple programming languages and frameworks.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Sarah Wanjiku',
      position: 'UI/UX Designer',
      bio: 'Sarah brings creativity and user-focused design thinking to every project, ensuring our solutions are both beautiful and functional.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'David Mwangi',
      position: 'Data Scientist',
      bio: 'David specializes in statistical analysis, machine learning, and data visualization to help clients extract meaningful insights from their data.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Alice Njeri',
      position: 'AI Specialist',
      bio: 'Alice leads our AI initiatives, with expertise in deep learning, natural language processing, and computer vision applications.',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to provide cutting-edge solutions.'
    },
    {
      title: 'Client Focus',
      description: 'We prioritize understanding and meeting our clients\' unique needs and expectations.'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to communication.'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices at all times.'
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
              About Us
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Learn more about SOFTWARE-HUB KENYA, our mission, values, and the team behind our success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Our team working together" 
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white py-4 px-6 rounded-lg shadow-lg">
                  <p className="text-xl font-bold">Est. 2020</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Our Story</h2>
                <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                  From Small Beginnings to Industry Leaders
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                SOFTWARE-HUB KENYA was founded in 2020 with a vision to bridge the technology gap for Kenyan businesses. What started as a small team of passionate developers has grown into a comprehensive technology partner serving clients across East Africa and beyond.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our journey began with web development projects for local businesses, but our commitment to excellence and innovation quickly earned us a reputation for delivering high-quality technical solutions. Today, we offer a full range of services including web and software development, data analysis, and AI implementations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Throughout our growth, we've maintained our core values and commitment to empowering businesses through technology. We're proud of our Kenyan roots and passionate about contributing to the local tech ecosystem while delivering world-class solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-teal-50 rounded-lg mr-4">
                  <Flag className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses across Kenya and East Africa with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to make advanced technology accessible to organizations of all sizes, helping them thrive in an increasingly digital world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-teal-50 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To be the leading technology partner in East Africa, known for delivering exceptional quality, innovation, and value. We envision a future where every business, regardless of size or industry, can harness the power of technology to achieve their goals and make a positive impact in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Core Values</h2>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              What We Stand For
            </h3>
            <p className="mt-4 text-slate-600">
              Our values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-start">
                <div className="p-2 bg-teal-50 rounded-lg mr-4 mt-1">
                  <Check className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-50 scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Our Team</h2>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Meet The Experts
            </h3>
            <p className="mt-4 text-slate-600">
              Our diverse team brings together expertise in development, design, data science, and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-teal-600 font-medium mb-3">{member.position}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              Join Our Team
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Our Journey</h2>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Key Milestones
            </h3>
            <p className="mt-4 text-slate-600">
              Tracing our path from inception to where we are today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-teal-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex md:justify-end md:w-1/2 md:pr-8 pb-8 md:pb-0">
                      <div className="max-w-xs md:text-right">
                        <div className="flex items-center md:justify-end">
                          <Calendar className="h-5 w-5 text-teal-500 md:order-2 md:ml-2 mr-2 md:mr-0" />
                          <span className="text-teal-600 font-semibold">2020</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 my-2">Company Founded</h4>
                        <p className="text-slate-600">SOFTWARE-HUB KENYA was established with a team of three developers.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                    <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                    <div className="flex md:w-1/2 md:pl-8 pb-8 md:pb-0">
                      <div className="max-w-xs">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-teal-500 mr-2" />
                          <span className="text-teal-600 font-semibold">2021</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 my-2">First Major Client</h4>
                        <p className="text-slate-600">Secured our first enterprise client and expanded the team to 10 members.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex md:justify-end md:w-1/2 md:pr-8 pb-8 md:pb-0">
                      <div className="max-w-xs md:text-right">
                        <div className="flex items-center md:justify-end">
                          <Calendar className="h-5 w-5 text-teal-500 md:order-2 md:ml-2 mr-2 md:mr-0" />
                          <span className="text-teal-600 font-semibold">2022</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 my-2">Expanded Services</h4>
                        <p className="text-slate-600">Added data analysis and AI services to our portfolio.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                    <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                    <div className="flex md:w-1/2 md:pl-8 pb-8 md:pb-0">
                      <div className="max-w-xs">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-teal-500 mr-2" />
                          <span className="text-teal-600 font-semibold">2023</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 my-2">Regional Expansion</h4>
                        <p className="text-slate-600">Opened our second office in Mombasa and started serving clients across East Africa.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex md:justify-end md:w-1/2 md:pr-8">
                      <div className="max-w-xs md:text-right">
                        <div className="flex items-center md:justify-end">
                          <Calendar className="h-5 w-5 text-teal-500 md:order-2 md:ml-2 mr-2 md:mr-0" />
                          <span className="text-teal-600 font-semibold">2025</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 my-2">Today & Beyond</h4>
                        <p className="text-slate-600">With over 20 team members and 100+ completed projects, we continue to grow and innovate.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                    <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-teal-600 tracking-wide uppercase">Recognition</h2>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Awards & Achievements
            </h3>
            <p className="mt-4 text-slate-600">
              We're proud to be recognized for our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-block">
                <Award className="h-12 w-12 text-teal-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Best Tech Startup 2022</h4>
              <p className="text-slate-600">Kenya ICT Awards</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-block">
                <Award className="h-12 w-12 text-teal-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Innovation Excellence</h4>
              <p className="text-slate-600">East Africa Technology Summit</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-block">
                <Award className="h-12 w-12 text-teal-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Top 50 Tech Companies</h4>
              <p className="text-slate-600">African Business Magazine</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default AboutPage;