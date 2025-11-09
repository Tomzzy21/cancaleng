import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const MarqueeItem: React.FC<{ Logo: React.FC<React.SVGProps<SVGSVGElement>> }> = ({ Logo }) => (
    <div className="flex items-center shrink-0 px-8">
        <Logo />
    </div>
);

const Marquee: React.FC = () => {
    // Duplicate the logos to create a seamless loop
    const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <div className="bg-[#D4FF00] text-black py-4 my-16 overflow-hidden">
            <div className="w-full inline-flex flex-nowrap">
                <div className="flex items-center justify-center animate-marquee">
                    {logos.map((Logo, index) => <MarqueeItem key={index} Logo={Logo} />)}
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Marquee;
