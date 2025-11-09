
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import OptimizedImage from './OptimizedImage';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4">
    <div className="overflow-hidden rounded-2xl" style={{
      width: '100%',
      height: '400px',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#1f2937' // Skeleton background color
    }}>
      <OptimizedImage 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full"
        quality={60}
        width={800}
        height={400}
      />
    </div>
    <div className="mt-6">
      <h3 className="text-3xl font-bold">{project.title}</h3>
      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-gray-400">
        <div>
          <p className="text-sm">Category</p>
          <p className="text-white font-medium">{project.category}</p>
        </div>
        <div>
          <p className="text-sm">Year</p>
          <p className="text-white font-medium">{project.year}</p>
        </div>
        <div>
          <p className="text-sm">Location</p>
          <p className="text-white font-medium">{project.location}</p>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section className="py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="max-w-2xl">
          <p className="text-[#D4FF00] font-semibold">Our Proven Track Record</p>
          <h2 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight tracking-tighter">Successfully Completed Projects</h2>
          <p className="mt-6 text-gray-400">
            Explore our portfolio of successfully delivered projects, each a testament to our commitment to quality, innovation, and client satisfaction in the engineering sector.
          </p>
        </div>
        <div className="flex-shrink-0 flex gap-4">
           <a href="#contact" className="px-8 py-4 bg-[#D4FF00] rounded-full text-black font-semibold hover:bg-opacity-90 transition-all">
            Get a Quote
          </a>
          <a href="./portfolio.html" className="px-8 py-4 border border-gray-600 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all">
            Browse Portfolio
          </a>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;