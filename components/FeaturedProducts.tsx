
import React from 'react';
import { WHY_CHOOSE_US_POINTS, WHY_CHOOSE_US_IMAGE_URL } from '../constants';
import type { WhyChooseUsPoint } from '../types';

const DifferentiatorCard: React.FC<{ point: WhyChooseUsPoint }> = ({ point }) => (
  <div className="flex items-start gap-4 py-6 border-b border-gray-800">
    <div className="bg-white/10 text-[#D4FF00] p-3 rounded-full">
        <point.icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold">{point.title}</h3>
      <p className="text-gray-400 mt-1">{point.description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 relative subtle-glow">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[#D4FF00] font-semibold">Why Choose Us</p>
        <h2 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight tracking-tighter">Why Partner with Cancal Engineering?</h2>
        <p className="mt-6 text-gray-400">
          Discover the advantages of working with a dedicated team committed to excellence, innovation, and cost-effective solutions for all your engineering needs.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
             <DifferentiatorCard key={index} point={point} />
          ))}
        </div>
        <div className="h-[600px] w-full sticky top-8">
            <img 
                src={WHY_CHOOSE_US_IMAGE_URL} 
                alt="Advanced engineering components" 
                className="w-full h-full object-cover rounded-2xl object-[center_top] shadow-lg" 
            />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;