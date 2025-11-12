
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import { MenuIcon, XIcon, Logo } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Handle hash-based navigation
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
    };

    // Set initial hash if none exists
    if (!window.location.hash) {
      window.location.hash = 'home';
    } else {
      handleHashChange();
    }

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without triggering a page reload
      window.history.pushState(null, '', `${window.location.pathname}${hash}`);
      setCurrentPath(hash);
      closeMenu();
    }
  };

  return (
    <header className="py-6">
      <div className="flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center gap-3 z-50"
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <Logo className="h-12 w-auto" />
          <span className="text-white text-xl font-bold hidden sm:block">Cancal Engineering</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link: NavLink) => {
            const hash = link.href;
            const isActive = currentPath === hash || (hash === '#home' && !currentPath);
            return (
              <a 
                key={link.label} 
                href={hash}
                onClick={(e) => scrollToSection(e, hash)}
                className={`transition-colors ${isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-[#D4FF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} className="text-white p-2" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-90 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 py-24 h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8 text-2xl">
            {NAV_LINKS.map((link: NavLink) => {
              const hash = link.href;
              return (
                <a 
                  key={link.label} 
                  href={hash}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(hash);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', `${window.location.pathname}${hash}`);
                      setCurrentPath(hash);
                      closeMenu();
                    }
                  }}
                  className={`${currentPath === hash ? 'text-white font-bold' : 'text-gray-300 hover:text-white'} transition-colors`}
                >
                  {link.label}
                </a>
              );
            })}
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', `${window.location.pathname}#contact`);
                  setCurrentPath('#contact');
                  closeMenu();
                }
              }}
              className="bg-[#D4FF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all mt-4"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
