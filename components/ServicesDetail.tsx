
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';
import { ArrowRightIcon } from './icons';

const ServiceShowcaseItem: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const isReversed = index % 2 !== 0;

    if (!service.imageUrl) {
        return null; 
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
            <div className={`h-[400px] lg:h-[500px] ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/30" 
                />
            </div>
            <div className={`relative ${isReversed ? 'lg:order-1 lg:-mr-16' : 'lg:order-2 lg:-ml-16'} z-10`}>
                <div className="bg-[#1C1E1D] border border-white/10 p-8 lg:p-12 rounded-2xl shadow-2xl shadow-black/50 backdrop-blur-sm">
                    <span className="text-7xl lg:text-8xl font-bold text-[#D4FF00]/10 mb-4 block">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="font-bold text-2xl lg:text-3xl mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-8">{service.longDescription || service.description}</p>
                    <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4FF00] rounded-full text-black font-semibold hover:bg-opacity-90 transition-all group/button self-start">
                        Get a Quote <ArrowRightIcon className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const ServicesDetail: React.FC = () => {
  return (
    <section className="py-24">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[#D4FF00] font-semibold">Our Services</p>
        <h1 className="text-5xl lg:text-7xl font-bold mt-4 leading-tight tracking-tighter">
            Our Engineering Expertise
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
            We offer a comprehensive range of electrical and mechanical engineering services to create efficient, reliable, and cost-effective solutions. Explore our offerings to see how we can power your success.
        </p>
      </div>
      <div className="mt-20 space-y-24">
        {SERVICES.map((service, index) => (
            <ServiceShowcaseItem key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesDetail;