import React from 'react';

const logos = [
    { name: 'jrb solar', path: '/jrb solar.PNG' },
    { name: 'panisco', path: '/panisco.PNG' },
    { name: 'promasidor', path: '/promasidor.PNG' },
    { name: 'solar shop', path: '/solar shop.PNG' },
    { name: 'westa solar', path: '/westa solar.PNG' },
    { name: 'fouani', path: '/fouani.PNG' },
    { name: 'greco', path: '/greco.PNG' },
    { name: 'cadbury', path: '/cadbury.PNG' },
    { name: 'daystar', path: '/daystar.PNG' },
    { name: 'rensource', path: '/rensource.PNG' }
];

const MarqueeItem: React.FC<{ logo: { name: string; path: string } }> = ({ logo }) => (
    <div className="flex items-center justify-center shrink-0 px-6 h-12">
        <img 
            src={logo.path} 
            alt={logo.name} 
            className="h-10 w-auto object-contain"
            loading="lazy"
        />
    </div>
);

export const TrustedBySection: React.FC = () => {
    return (
        <section className="pt-12 pb-4 my-8">
            <div className="text-center max-w-4xl mx-auto px-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Leading Brands</h2>
                <p className="text-lg text-gray-700">
                    Our commitment to excellence has earned us the trust of renowned brands and organizations across different sectors. 
                    Here are some of the clients who have partnered with us to achieve sustainable and innovative results.
                </p>
            </div>
        </section>
    );
};

const Marquee: React.FC = () => {
    // Duplicate the logos to create a seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="bg-[#D4FF00] py-4 overflow-hidden">
            <div className="w-full inline-flex flex-nowrap">
                <div className="flex items-center justify-center animate-marquee">
                    {duplicatedLogos.map((logo, index) => (
                        <MarqueeItem key={`${logo.name}-${index}`} logo={logo} />
                    ))}
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

const MarqueeSection: React.FC = () => {
    return (
        <>
            <TrustedBySection />
            <Marquee />
        </>
    );
};

export default MarqueeSection;
