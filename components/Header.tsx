
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import { MenuIcon, XIcon, Logo } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Ensure this runs only on the client-side
    setCurrentPath(window.location.pathname);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="py-6">
      <div className="flex justify-between items-center">
        <a href="./index.html" className="flex items-center gap-3 z-50">
          <Logo className="h-12 w-auto" />
          <span className="text-white text-xl font-bold hidden sm:block">Cancal Engineering</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link: NavLink) => {
            const linkPath = link.href.split('#')[0];
            const cleanLinkPath = linkPath.startsWith('./') ? linkPath.substring(1) : linkPath;
            const isActive = currentPath === cleanLinkPath || (currentPath === '/' && cleanLinkPath === '/index.html');
            return (
                <a key={link.label} href={link.href} className={`transition-colors ${isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}>
                  {link.label}
                </a>
            )
          })}
        </nav>
        <div className="hidden lg:block">
            <a href="./index.html#contact" className="bg-[#D4FF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
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
      <div className={`lg:hidden fixed inset-0 bg-[#111312] z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link: NavLink) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-3xl text-gray-300 hover:text-white transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="./index.html#contact" className="mt-12 bg-[#D4FF00] text-black font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all text-lg" onClick={closeMenu}>
            Contact Us
          </a>
        </div>
    </header>
  );
};

export default Header;
