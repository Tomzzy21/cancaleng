import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioGrid from '../components/PortfolioGrid';
import CTA from '../components/CTA';

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-[#111312] text-white overflow-x-hidden">
        <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGrid />
        <div id="contact">
            <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
