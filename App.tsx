
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import CraftingSection from './components/CraftingSection';
import FeaturedProducts from './components/FeaturedProducts';
import VisionSection from './components/VisionSection';
import TeamSection from './components/TeamSection';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#111312] text-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
      </div>
      <Marquee />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about">
            <VisionSection />
        </div>
        <div className="py-12">
          <TeamSection />
        </div>
        <div id="services">
          <CraftingSection />
        </div>
        <FeaturedProducts />
        <div id="latest-work">
          <Portfolio />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;