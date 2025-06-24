import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
      <div className="mb-5 p-2 inline-block rounded-lg bg-slate-50">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-5">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-teal-600 font-medium group-hover:text-teal-700"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;