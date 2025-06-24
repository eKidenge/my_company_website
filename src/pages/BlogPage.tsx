import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, Clock } from 'lucide-react';
import BlogPreview from '../components/BlogPreview';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Discover how artificial intelligence is transforming various industries and how businesses can prepare for the AI revolution.',
      date: 'May 15, 2025',
      author: 'John Doe',
      category: 'Artificial Intelligence',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/future-of-ai'
    },
    {
      id: 2,
      title: 'Web Development Trends for 2025',
      excerpt: 'Explore the latest web development technologies and methodologies that are shaping the digital landscape this year.',
      date: 'April 28, 2025',
      author: 'Jane Smith',
      category: 'Web Development',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/web-dev-trends'
    },
    {
      id: 3,
      title: 'Leveraging Data Analytics for SMEs',
      excerpt: 'How small and medium-sized enterprises can use data analytics to gain competitive advantages without breaking the bank.',
      date: 'April 10, 2025',
      author: 'David Johnson',
      category: 'Data Analysis',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/data-analytics-sme'
    },
    {
      id: 4,
      title: 'The Rise of Progressive Web Apps',
      excerpt: 'Why progressive web apps are becoming the standard for mobile-friendly websites and how to implement them effectively.',
      date: 'March 22, 2025',
      author: 'Sarah Wanjiku',
      category: 'Web Development',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/progressive-web-apps'
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices for 2025',
      excerpt: 'Essential security measures every business should implement to protect their digital assets and customer data.',
      date: 'March 5, 2025',
      author: 'Michael Omondi',
      category: 'Software Development',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/cybersecurity-best-practices'
    },
    {
      id: 6,
      title: 'Machine Learning for Predictive Maintenance',
      excerpt: 'How manufacturing companies are using machine learning to predict equipment failures and optimize maintenance schedules.',
      date: 'February 18, 2025',
      author: 'Alice Njeri',
      category: 'Artificial Intelligence',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/machine-learning-maintenance'
    },
    {
      id: 7,
      title: 'The Impact of 5G on Software Development',
      excerpt: 'Exploring how the rollout of 5G networks is changing the way we design and develop software applications.',
      date: 'February 3, 2025',
      author: 'Daniel Muthoni',
      category: 'Software Development',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/5g-impact'
    },
    {
      id: 8,
      title: 'Data Visualization Techniques That Drive Insights',
      excerpt: 'Effective ways to visualize complex data to uncover patterns, trends, and insights for better decision-making.',
      date: 'January 20, 2025',
      author: 'Peter Kamau',
      category: 'Data Analysis',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/data-visualization'
    },
    {
      id: 9,
      title: 'Building Accessible Websites: A Complete Guide',
      excerpt: 'How to ensure your websites are accessible to all users, including those with disabilities, and why it matters.',
      date: 'January 8, 2025',
      author: 'Grace Kimani',
      category: 'Web Development',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/blog/accessible-websites'
    }
  ];

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filter === 'all' || post.category === filter;
      
      return matchesSearch && matchesCategory;
    });

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Insights, news, and knowledge from our technology experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-10">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    filter === 'all'
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Categories
                </button>
                <button
                  onClick={() => setFilter('Web Development')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    filter === 'Web Development'
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Web Development
                </button>
                <button
                  onClick={() => setFilter('Software Development')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    filter === 'Software Development'
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Software Development
                </button>
                <button
                  onClick={() => setFilter('Data Analysis')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    filter === 'Data Analysis'
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Data Analysis
                </button>
                <button
                  onClick={() => setFilter('Artificial Intelligence')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    filter === 'Artificial Intelligence'
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Artificial Intelligence
                </button>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="mb-8">
                    <BlogPreview
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      author={post.author}
                      category={post.category}
                      image={post.image}
                      link={post.link}
                    />
                  </div>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-slate-600">No articles found. Try a different search or category.</p>
                </div>
              )}

              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <a href="#" className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50">
                      Previous
                    </a>
                    <a href="#" className="px-4 py-2 bg-teal-600 text-white rounded-md">
                      1
                    </a>
                    <a href="#" className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50">
                      2
                    </a>
                    <a href="#" className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50">
                      3
                    </a>
                    <a href="#" className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50">
                      Next
                    </a>
                  </nav>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Popular Posts */}
              <div className="bg-slate-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={`popular-${post.id}`} className="flex items-start">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-16 h-16 object-cover rounded-md mr-3 flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium text-sm text-slate-900 line-clamp-2 hover:text-teal-600">
                          <Link to={post.link}>{post.title}</Link>
                        </h4>
                        <div className="flex items-center text-xs text-slate-500 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-slate-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <a href="#" className="text-slate-700 hover:text-teal-600 flex items-center">
                      <Tag className="h-4 w-4 mr-2" />
                      Web Development
                    </a>
                    <span className="bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded-full">12</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <a href="#" className="text-slate-700 hover:text-teal-600 flex items-center">
                      <Tag className="h-4 w-4 mr-2" />
                      Software Development
                    </a>
                    <span className="bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded-full">8</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <a href="#" className="text-slate-700 hover:text-teal-600 flex items-center">
                      <Tag className="h-4 w-4 mr-2" />
                      Data Analysis
                    </a>
                    <span className="bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded-full">10</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <a href="#" className="text-slate-700 hover:text-teal-600 flex items-center">
                      <Tag className="h-4 w-4 mr-2" />
                      Artificial Intelligence
                    </a>
                    <span className="bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded-full">15</span>
                  </li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-teal-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-teal-100 mb-4 text-sm">
                  Stay updated with the latest trends and insights in technology.
                </p>
                <form>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-white text-teal-700 font-medium py-2 px-4 rounded-md hover:bg-teal-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;