import React from 'react';
import { HERO_IMAGES, AWARDS } from '../constants';
import { ArrowRightIcon, HeroLogo } from './icons';
import TypingAnimation from './TypingAnimation';

const Hero: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      {/* 
        This grid uses a mobile-first source order. 
        On large screens, grid-placement utilities rearrange elements into the desired staggered layout.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8">

        {/* === START: MOBILE-FIRST SOURCE ORDER === */}

        {/* 1. Headline Part 1: "Your" */}
        <div className="lg:col-span-7 lg:row-start-1 text-center lg:text-left">
          <div className="inline-flex flex-col lg:flex-row items-center gap-4">
            <HeroLogo className="h-12 w-auto flex-shrink-0" />
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">Your</div>
          </div>
        </div>
        
        {/* 2. Headline Part 2: "#1 Engineering solution" as one phrase */}
        <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white text-center lg:text-left lg:col-start-1 lg:col-span-12 xl:col-span-10 xl:col-start-2 lg:row-start-2 px-4 sm:px-0">
          <div className="flex flex-nowrap justify-center lg:justify-start items-baseline gap-1 xs:gap-2 overflow-x-visible">
            <span className="bg-[#D4FF00] text-black rounded-md px-1 xs:px-2 leading-none inline-flex items-center h-[1em] shadow-[0_0_15px_3px_rgba(212,255,0,0.7)] whitespace-nowrap">#1</span>
            <span className="whitespace-nowrap">Engineering solution</span>
          </div>
        </div>

        {/* 3. Headline Part 3: Typing Animation */}
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white text-center lg:text-right lg:col-span-4 lg:col-start-9 lg:row-start-3 lg:self-end">
            <TypingAnimation />
        </div>

        {/* 4. Subheading (gets moved to top-right on desktop) */}
        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 flex items-center">
          <p className="text-gray-300 text-base leading-relaxed max-w-sm mx-auto lg:ml-auto text-center lg:text-left">
            From concept to commissioning, we provide end-to-end electrical, mechanical, and automotive solutions that drive efficiency and save costs for our industrial and commercial partners.
          </p>
        </div>

        {/* 5. Credibility Features (gets moved to bottom-left on desktop) */}
        <div className="lg:col-span-4 lg:row-start-3 lg:self-end space-y-3 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2">
            <ArrowRightIcon className="text-[#D4FF00] w-4 h-4 flex-shrink-0"/>
            <span className="text-[#D4FF00] font-medium text-sm">Trusted by Industry Leaders</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRightIcon className="text-[#D4FF00] w-4 h-4 flex-shrink-0"/>
            <span className="text-[#D4FF00] font-medium text-sm">Specialists in Green Energy</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRightIcon className="text-[#D4FF00] w-4 h-4 flex-shrink-0"/>
            <span className="text-[#D4FF00] font-medium text-sm">Certified Engineering Excellence</span>
          </div>
        </div>
        
        {/* 6. Buttons (gets moved to bottom-center on desktop) */}
        <div className="lg:col-span-4 lg:col-start-5 lg:row-start-3 flex flex-row justify-center gap-4 self-end">
          <a href="./portfolio.html" className="px-5 py-2.5 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 text-sm whitespace-nowrap">
            Explore Our Projects
          </a>
          <a href="./index.html#contact" className="px-5 py-2.5 bg-[#D4FF00] rounded-full text-black font-semibold hover:bg-[#c2e600] transition-all text-sm whitespace-nowrap">
            Request a Consultation
          </a>
        </div>

        {/* === END: MOBILE-FIRST SOURCE ORDER === */}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-[350px] md:h-[450px] w-full">
          <img src={HERO_IMAGES.img1} alt="Modern interior design" className="w-full h-full object-cover rounded-3xl"/>
        </div>
        <div className="h-[350px] md:h-[450px] w-full">
          <img src={HERO_IMAGES.img2} alt="Cozy living room" className="w-full h-full object-cover rounded-3xl"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;