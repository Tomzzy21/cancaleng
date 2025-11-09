
import React from 'react';
import { FOOTER_LINKS } from '../constants';
import { Logo } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1E1D] pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <div className="flex items-center">
                    <Logo className="h-12 w-auto" />
                </div>
                <p className="mt-4 text-gray-400 max-w-sm">
                    Your trusted partner in Electrical, Mechanical, and Contracting services, delivering world-class engineering solutions.
                </p>
                 <div className="mt-6 space-y-2 text-gray-400">
                    <p><strong className="text-white">Email:</strong> <a href="mailto:sales@cancaleng.com" className="hover:text-[#D4FF00]">sales@cancaleng.com</a></p>
                    <p><strong className="text-white">Phone:</strong> <a href="tel:+2348185205961" className="hover:text-[#D4FF00]">+234 818 520 5961</a></p>
                    <p><strong className="text-white">Address:</strong> 31, Ekero road, Beside Brainfield School, Abule-Egba, Lagos.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="font-bold text-white mb-4">Company Info</h4>
                    <ul className="space-y-3">
                        {FOOTER_LINKS.company.map(link => (
                            <li key={link.label}><a href={link.href} className="text-gray-400 hover:text-white">{link.label}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Services</h4>
                    <ul className="space-y-3">
                        {FOOTER_LINKS.services.map(link => (
                             <li key={link.label}><a href={link.href} className="text-gray-400 hover:text-white">{link.label}</a></li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold text-white mb-4">Legal</h4>
                    <ul className="space-y-3">
                        {FOOTER_LINKS.legal.map(link => (
                             <li key={link.label}><a href={link.href} className="text-gray-400 hover:text-white">{link.label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Cancal Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
