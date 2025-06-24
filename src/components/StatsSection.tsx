import React from 'react';
import { Users, Code, Award, BarChart } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 border-r border-slate-200 last:border-r-0">
      <div className="mb-4 p-4 rounded-full bg-teal-50">
        {icon}
      </div>
      <h3 className="text-4xl font-bold text-slate-900 mb-2">{value}</h3>
      <p className="text-slate-600">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-4 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <StatItem 
            icon={<Users className="h-6 w-6 text-teal-500" />}
            value="50+"
            label="Happy Clients"
          />
          <StatItem 
            icon={<Code className="h-6 w-6 text-teal-500" />}
            value="100+"
            label="Projects Completed"
          />
          <StatItem 
            icon={<Award className="h-6 w-6 text-teal-500" />}
            value="5+"
            label="Years of Experience"
          />
          <StatItem 
            icon={<BarChart className="h-6 w-6 text-teal-500" />}
            value="15+"
            label="Industry Experts"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;