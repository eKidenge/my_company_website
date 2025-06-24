import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  link: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({
  title,
  excerpt,
  date,
  author,
  category,
  image,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-500 text-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center text-sm text-slate-500 mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <Link
          to={link}
          className="inline-flex items-center text-teal-600 font-medium group-hover:text-teal-700"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;