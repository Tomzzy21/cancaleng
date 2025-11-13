import React, { useState, useMemo } from 'react';
import { PROJECTS, PORTFOLIO_CATEGORIES } from '../constants';
import type { Project } from '../types';
import OptimizedImage from './OptimizedImage';

// Preload first few portfolio images
const preloadPortfolioImages = (projects: Project[]) => {
  if (typeof document === 'undefined') return null;
  
  // Preload first 3 images
  return projects.slice(0, 3).map((project, index) => (
    <link 
      key={`preload-${index}`}
      rel="preload"
      as="image"
      href={project.imageUrl}
      imageSrcSet={project.imageUrl}
    />
  ));
};

const ProjectCard: React.FC<{ project: Project; priority?: boolean }> = ({ project }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden flex flex-col w-full h-full transition-all duration-300 hover:border-white/20">
      <div className="relative w-full flex-1 flex flex-col" style={{ backgroundColor: '#1f2937' }}>
        <div className="relative w-full pt-[100%]">
          <div className="absolute inset-0 w-full h-full">
            <OptimizedImage 
              src={project.imageUrl} 
              alt={project.title} 
              width={800}
              height={800}
              fillTop={true}
            />
          </div>
        </div>
        <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <div className="w-12 h-1 bg-[#D4FF00] mt-3 mb-4"></div>
          <p className="text-gray-300 text-sm">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  // Preload images for first page
  React.useEffect(() => {
    preloadPortfolioImages(PROJECTS.slice(0, 3));
  }, []);

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
      <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            priority={index < 3} // First 3 images get higher priority
          />
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