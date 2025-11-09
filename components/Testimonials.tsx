
import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';
import { QuotationIcon } from './icons';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-between">
        <QuotationIcon className="absolute top-8 right-8 w-20 h-20 text-[#D4FF00]/10 -z-10" />
        <div className="flex-1">
          <p className="text-lg text-gray-300 leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover border-2 border-white/20" />
          <div>
            <p className="font-bold text-white text-lg">{testimonial.author}</p>
            <p className="text-gray-400">{testimonial.title}</p>
          </div>
        </div>
      </div>
    );
  };
  

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative subtle-glow">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[#D4FF00] font-semibold">What Our Clients Say</p>
        <h2 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight tracking-tighter">Testimonials</h2>
        <p className="mt-6 text-gray-400">
            We are proud to have collaborated with a diverse range of industry leaders, delivering exceptional engineering solutions and building lasting partnerships.
        </p>
      </div>
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;