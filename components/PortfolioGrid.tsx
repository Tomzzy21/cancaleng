import React, { useState, useMemo } from 'react';
import { PROJECTS, PORTFOLIO_CATEGORIES } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 transition-all duration-300 hover:border-[#D4FF00]/50 hover:bg-white/10 break-inside-avoid">
    <div className="overflow-hidden rounded-2xl relative">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="mt-6">
      <p className="text-[#D4FF00] text-sm font-semibold">{project.category}</p>
      <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-gray-400 text-sm">
        <span>{project.year}</span>
        <span>{project.location}</span>
      </div>
    </div>
  </div>
);

const PortfolioGrid: React.FC = () => {
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
        }
    };

    return (
        <section className="py-24">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-[#D4FF00] font-semibold">Our Portfolio</p>
                <h1 className="text-5xl lg:text-7xl font-bold mt-4 leading-tight tracking-tighter">
                    A Gallery of Our Projects
                </h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className="px-4 py-2 bg-gray-800/50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/70"
                    >
                        Previous
                    </button>
                    <span className="text-gray-400">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-800/50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/70"
                    >
                        Next
                    </button>
                </div>
            )}
        </section>
    );
};

export default PortfolioGrid;