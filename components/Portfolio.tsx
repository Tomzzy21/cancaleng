import React, { useState, useMemo } from 'react';
import { PROJECTS, PORTFOLIO_CATEGORIES } from '../constants';
import type { Project } from '../types';
import OptimizedImage from './OptimizedImage';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 h-full flex flex-col">
    <div className="overflow-hidden rounded-2xl flex-1" style={{
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#1f2937',
      aspectRatio: '16/9'
    }}>
      <OptimizedImage 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        quality={75}
        width={800}
        height={450}
      />
    </div>
    <div className="mt-6">
      <h3 className="text-2xl font-bold">{project.title}</h3>
      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-gray-400">
        <div>
          <p className="text-sm">Category</p>
          <p className="text-white font-medium">{project.category}</p>
        </div>
        <div>
          <p className="text-sm">Year</p>
          <p className="text-white font-medium">{project.year}</p>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return filteredProjects.slice(startIndex, endIndex);
  }, [currentPage, filteredProjects]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: document.getElementById('portfolio-grid')?.offsetTop - 100 || 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[#D4FF00] font-semibold">Our Portfolio</p>
        <h2 className="text-5xl lg:text-7xl font-bold mt-4 leading-tight tracking-tighter">
          A Gallery of Our Projects
        </h2>
        <p className="mt-6 text-gray-400 text-lg">
          Explore a curated selection of our projects, each telling a unique story of collaboration, innovation, and engineering excellence. Discover the possibilities for your own facility.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-12">
        {PORTFOLIO_CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-[#D4FF00] text-black shadow-lg shadow-[#D4FF00]/20' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white'
                }`
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-6 py-2 bg-gray-800/50 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/70 transition-colors"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === page 
                    ? 'bg-[#D4FF00] text-black' 
                    : 'bg-gray-800/50 hover:bg-gray-700/70'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-2 bg-gray-800/50 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/70 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;