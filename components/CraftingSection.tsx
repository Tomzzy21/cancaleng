
import React, { useState } from 'react';
import { ENGINEERING_SERVICES, AUTOMOBILE_SERVICES } from '../constants';
import type { Service } from '../types';
import { WrenchIcon, HeadphoneIcon, ArrowRightIcon } from './icons';

const CraftingSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'engineering' | 'automobile'>('engineering');
  const [activeService, setActiveService] = useState<Service | null>(ENGINEERING_SERVICES[0]);

  const handleCategoryChange = (category: 'engineering' | 'automobile') => {
    setActiveCategory(category);
    if (category === 'engineering') {
      setActiveService(ENGINEERING_SERVICES[0]);
    } else {
      setActiveService(AUTOMOBILE_SERVICES[0]);
    }
  };
  
  return (
    <section className="py-24">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[#D4FF00] font-semibold">Our Services</p>
        <h1 className="text-4xl lg:text-6xl font-bold mt-4 leading-tight tracking-tight">
            Our Engineering Expertise
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
            We offer a comprehensive range of electrical and mechanical engineering services to create efficient, reliable, and cost-effective solutions. Explore our offerings to see how we can power your success.
        </p>
      </div>

      {/* Main Category Tabs */}
      <div className="mt-12 flex border-b border-white/10">
        <button
          onClick={() => handleCategoryChange('engineering')}
          className={`-mb-px px-6 py-3 text-base md:text-lg font-semibold transition-colors duration-300 border-b-2 ${activeCategory === 'engineering' ? 'text-white border-[#D4FF00]' : 'text-gray-500 border-transparent hover:text-white'}`}
          aria-pressed={activeCategory === 'engineering'}
        >
          Energy & Engineering
        </button>
        <button
          onClick={() => handleCategoryChange('automobile')}
          className={`-mb-px px-6 py-3 text-base md:text-lg font-semibold transition-colors duration-300 border-b-2 ${activeCategory === 'automobile' ? 'text-white border-[#D4FF00]' : 'text-gray-500 border-transparent hover:text-white'}`}
          aria-pressed={activeCategory === 'automobile'}
        >
          Automobile
        </button>
      </div>
      
      {activeCategory === 'engineering' ? (
        <div>
          {/* Service Sub-Tabs */}
          <div className="min-h-[76px] pt-4">
            <div className="flex flex-wrap gap-x-2 gap-y-2 pb-2">
              {ENGINEERING_SERVICES.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setActiveService(service)}
                  aria-label={`Select service: ${service.title}`}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300
                    ${activeService && activeService.title === service.title
                      ? 'bg-[#333527] text-[#D4FF00]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {service.icon && <service.icon className="w-5 h-5" aria-hidden="true" />}
                  <span>{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Content */}
          {activeService && (
            <div className="mt-2 bg-[#181A19] border border-white/10 rounded-3xl min-h-[520px] p-8 lg:p-12 flex items-center transition-all duration-500">
              <div className={`grid grid-cols-1 ${activeService.imageUrl ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 items-center w-full`}>
                {/* Left: Text Content */}
                <div className={`flex flex-col items-start ${!activeService.imageUrl ? 'max-w-2xl mx-auto' : ''}`}>
                   <div className="bg-[#D4FF00] text-black p-4 rounded-full w-16 h-16 inline-flex items-center justify-center">
                    {activeService.icon && <activeService.icon className="w-8 h-8" aria-hidden="true"/>}
                  </div>
                  <h3 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                    {activeService.title}
                  </h3>
                  <p className="mt-4 text-gray-300 max-w-md text-lg">
                    {activeService.longDescription || activeService.description}
                  </p>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-3 bg-[#D4FF00] text-black font-semibold px-6 py-4 rounded-full hover:bg-opacity-90 transition-all group">
                    Let's Chat
                    <HeadphoneIcon className="w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true"/>
                  </a>
                </div>

                {/* Right: Image */}
                {activeService.imageUrl && (
                    <div className="w-full h-[350px] lg:h-[400px]">
                    <img
                        key={activeService.imageUrl}
                        src={activeService.imageUrl}
                        alt={activeService.title}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/30"
                    />
                    </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Service Sub-Tabs for Automobile */}
          <div className="min-h-[76px] pt-4">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pb-2">
              {AUTOMOBILE_SERVICES.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setActiveService(service)}
                  aria-label={`Select service: ${service.title}`}
                  className={`flex-1 min-w-0 flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis
                    ${activeService && activeService.title === service.title
                      ? 'bg-[#333527] text-[#D4FF00]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {service.icon && <service.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />}
                  <span className="truncate">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Content for Automobile */}
          {activeService && (
            <div className="mt-2 bg-[#181A19] border border-white/10 rounded-3xl min-h-[480px] p-8 lg:p-12 flex flex-col justify-center transition-all duration-500 overflow-hidden relative">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#D4FF00]/5 blur-3xl -z-0"></div>
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-white/5 blur-3xl -z-0"></div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left: Icon */}
                    <div className="md:col-span-1 flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-white/10 rounded-full blur-lg opacity-75"></div>
                            <div className="relative bg-[#D4FF00] text-black p-6 rounded-full w-24 h-24 inline-flex items-center justify-center">
                                {activeService.icon && <activeService.icon className="w-12 h-12" aria-hidden="true"/>}
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="md:col-span-2 flex flex-col items-start text-center md:text-left">
                      <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white w-full">
                          {activeService.title}
                      </h3>
                      <p className="mt-4 text-gray-300 max-w-lg text-lg w-full">
                          {activeService.longDescription || activeService.description}
                      </p>
                      <a href="./index.html#contact" className="mt-8 mx-auto md:mx-0 inline-flex items-center gap-3 bg-[#D4FF00] text-black font-semibold px-6 py-4 rounded-full hover:bg-opacity-90 transition-all group">
                          Request Service
                          <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true"/>
                      </a>
                    </div>
                </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CraftingSection;
