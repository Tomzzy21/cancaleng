
import React from 'react';
import type { NavLink, Service, Project, WhyChooseUsPoint, FAQItem, Testimonial } from './types';
import { 
    EngineeringIcon, PanelIcon, RenewableIcon, MaintenanceIcon, ConsultancyIcon, ProcurementIcon,
    AutomobileIcon, TeamIcon, CostIcon, OEMIcon, QualityIcon,
    OilCanIcon, DiagnosticsIcon, BodyworkIcon,
    HuaweiLogo, PowerGenLogo, DarwayCoastLogo, FrieslandCampinaLogo, CadburyLogo,
    FouaniGroupLogo, PromasidorLogo, JrbSolarLogo, PrimlaksLogo, SolarShopLogo,
    DaystarPowerLogo, GrecoLogo, PaniscoLogo, RensourceLogo, WestaSolarLogo
} from './components/icons';

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#latest-work', label: 'Portfolio' },
  { href: '#faq', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
];

export const CLIENT_LOGOS: React.FC<React.SVGProps<SVGSVGElement>>[] = [
    HuaweiLogo, PowerGenLogo, DarwayCoastLogo, FrieslandCampinaLogo, CadburyLogo,
    FouaniGroupLogo, PromasidorLogo, JrbSolarLogo, PrimlaksLogo, SolarShopLogo,
    DaystarPowerLogo, GrecoLogo, PaniscoLogo, RensourceLogo, WestaSolarLogo
];

export const HERO_IMAGES = {
    img1: "/optimized/hero.png",
    img2: "/optimized/hero1.png"
};

export const ABOUT_IMAGE = "/optimized/about us.png";

export const ADDITIONAL_IMAGES = {
    chatGPT1: "/optimized/ChatGPT Image Aug 14, 2025, 10_39_29 PM.png",
    chatGPT2: "/optimized/ChatGPT Image Aug 14, 2025, 10_47_12 PM.png"
};

export const AWARDS = [
  'Design Excellence 2024',
  'Best of Houzz 2024',
  'Featured in Architectural Digest'
];

export const ENGINEERING_SERVICES: Service[] = [
  {
    icon: EngineeringIcon,
    imageUrl: '/optimized/ChatGPT Image Aug 16, 2025, 12_00_52 PM.png',
    title: 'Engineering, Procurement, Construction (EPC)',
    description: 'End-to-end project management from design to commissioning.',
    longDescription: 'We provide comprehensive EPC services, handling every phase of your project. From initial engineering design and procurement of high-quality components to construction and final commissioning, we ensure seamless execution and superior results for all electrical and mechanical projects.'
  },
  {
    icon: PanelIcon,
    imageUrl: '/optimized/ChatGPT Image Aug 16, 2025, 12_04_51 PM.png',
    title: 'Custom Panel Manufacturing',
    description: 'Bespoke electrical panels for any application.',
    longDescription: 'Our state-of-the-art facility manufactures a wide range of custom electrical panels built to the highest standards. Our expertise includes: Automatic Transfer Switch (ATS) Panels (MV and LV), Synchronization Panels, Motor Control Centers (MCC), Starter panels, AC/DC Combiner Panels, Hybrid Multicluster Panels, Feeder Pillars, Distribution Boards, Remote Timer Switches, and Automation/Control Panels.'
  },
  {
    icon: RenewableIcon,
    imageUrl: '/optimized/ChatGPT Image Aug 16, 2025, 12_09_32 PM.png',
    title: 'Renewable Energy Solutions',
    description: 'Harness the power of green energy.',
    longDescription: 'We are at the forefront of the green energy transition. Our services include the design, installation, and maintenance of Solar Power Systems, Inverter and Battery Energy Storage Systems (BESS), and the deployment of Electric Vehicle (EV) Charging Stations.'
  },
  {
    icon: MaintenanceIcon,
    imageUrl: '/optimized/ChatGPT Image Aug 16, 2025, 12_16_40 PM.png',
    title: 'Installations, Maintenance & Retrofitting',
    description: 'Ensuring peak performance and safety.',
    longDescription: 'Our certified technicians provide expert installation of MV and LV switchgear. We also offer comprehensive maintenance schedules and retrofitting services for existing LV and MV panels to enhance efficiency, safety, and extend equipment lifespan.'
  },
  {
    icon: ConsultancyIcon,
    imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&dpr=1',
    title: 'Consultancy, Audits & Training',
    description: 'Expert guidance to optimize your systems.',
    longDescription: 'Leverage our expertise to improve your operations. We offer professional Electrical Audits to identify safety and efficiency gaps, provide expert consultancy on system design, and conduct professional Trainings for your technical teams.'
  },
  {
    icon: ProcurementIcon,
    imageUrl: '/component-procurement.jpg',
    title: 'Component Procurement & Supply',
    description: 'Sourcing high-quality engineering components.',
    longDescription: 'We procure and supply a wide variety of mechanical and electrical engineering components. Thanks to our familiarity with leading OEMs, we can source the best parts for your project needs, ensuring quality and compatibility.'
  }
];

export const AUTOMOBILE_SERVICES: Service[] = [
    {
        icon: OilCanIcon,
        title: 'Routine Maintenance',
        description: 'Keeping your vehicle in peak condition with scheduled servicing.',
        longDescription: 'Regular maintenance is key to vehicle longevity and performance. We offer comprehensive check-ups, oil changes, fluid level adjustments, tire rotations, and filter replacements to keep your car running smoothly and prevent costly repairs down the road.'
    },
    {
        icon: DiagnosticsIcon,
        title: 'Advanced Diagnostics',
        description: 'Pinpointing issues quickly with state-of-the-art technology.',
        longDescription: 'Our workshop is equipped with the latest diagnostic tools to accurately identify issues. From check engine lights to complex electrical problems, we can quickly diagnose the root cause and recommend the most effective solution, saving you time and money.'
    },
    {
        icon: MaintenanceIcon,
        title: 'Repair Services',
        description: 'Expert repairs for brakes, engines, and transmissions.',
        longDescription: 'We handle a full range of mechanical repairs. Our certified technicians specialize in brake systems, engine overhauls, transmission servicing, and suspension work. We use high-quality parts to ensure every repair is durable and reliable.'
    },
    {
        icon: BodyworkIcon,
        title: 'Collision & Bodywork',
        description: 'Restoring your vehicle’s appearance after an accident.',
        longDescription: 'Our body shop provides expert collision repair services. We handle everything from minor dent removal and scratch repair to major frame straightening and panel replacement. Our precision paint matching ensures a flawless finish, restoring your car to its pre-accident condition.'
    }
];

export const SERVICES: Service[] = [
    ...ENGINEERING_SERVICES,
    ...AUTOMOBILE_SERVICES
];


export const WHY_CHOOSE_US_POINTS: WhyChooseUsPoint[] = [
  {
    icon: TeamIcon,
    title: 'Experienced Team',
    description: 'We have experienced Engineers and Technicians to deliver the best engineering solutions.',
  },
  {
    icon: CostIcon,
    title: 'Cost-Effective Solutions',
    description: 'We proffer solutions to...save cost, and render complete solutions.',
  },
  {
    icon: OEMIcon,
    title: 'OEM Familiarity',
    description: 'We procure and supply all kinds of components...as we are very familiar with OEMs like Schneider, ABB, Siemens, and more.',
  },
    {
    icon: QualityIcon,
    title: 'Commitment to Quality',
    description: 'We will complete your project to your satisfaction in a professional and timely manner.',
  },
];

export const WHY_CHOOSE_US_IMAGE_URL = "/optimized/why choose us.png";


export const VISION_IMAGE_URL = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1";

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Power Control & Management Panels',
  'Distribution & Transfer Panels',
  'Renewable Energy & Grid Integration Panels',
  'Switchgear Installations'
];

export const PROJECTS: Project[] = [
  {
    title: '3200A Synchronizing Panel',
    category: 'Power Control & Management Panels',
    year: '2023',
    location: 'Lagos',
    imageUrl: '/3200a.png',
  },
  {
    title: '800A MCC with Softstarters',
    category: 'Power Control & Management Panels',
    year: '2022',
    location: 'Port Harcourt',
    imageUrl: '/800a mcc.png',
  },
  {
    title: 'PLC + HMI Control Panel',
    category: 'Power Control & Management Panels',
    year: '2023',
    location: 'Abuja',
    imageUrl: '/PCI panel.png',
  },
  {
    title: '4000A Auto Transfer Switch',
    category: 'Distribution & Transfer Panels',
    year: '2023',
    location: 'Kano',
    imageUrl: 'https://images.pexels.com/photos/8346332/pexels-photo-8346332.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  },
  {
    title: '2000A Distribution Board',
    category: 'Distribution & Transfer Panels',
    year: '2022',
    location: 'Ibadan',
    imageUrl: 'https://images.pexels.com/photos/8292825/pexels-photo-8292825.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  },
  {
    title: 'Schneider Prisma P Panel',
    category: 'Distribution & Transfer Panels',
    year: '2023',
    location: 'Lagos',
    imageUrl: 'https://images.pexels.com/photos/7238799/pexels-photo-7238799.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  },
  {
    title: '1600A ON/OFF Grid Totalizing Panel',
    category: 'Renewable Energy & Grid Integration Panels',
    year: '2023',
    location: 'Delta',
    imageUrl: 'https://images.pexels.com/photos/7249185/pexels-photo-7249185.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  },
  {
    title: 'GTAG Solar Installation',
    category: 'Renewable Energy & Grid Integration Panels',
    year: '2022',
    location: 'Kaduna',
    imageUrl: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  },
  {
    title: 'AC Combiner Panel',
    category: 'Renewable Energy & Grid Integration Panels',
    year: '2023',
    location: 'Ogun',
    imageUrl: 'https://images.pexels.com/photos/6908502/pexels-photo-6908502.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  },
  {
    title: 'Schneider SM6 Switchgear',
    category: 'Switchgear Installations',
    year: '2022',
    location: 'Lagos',
    imageUrl: 'https://images.pexels.com/photos/6805612/pexels-photo-6805612.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  },
  {
    title: '800A Dual ATS Panel',
    category: 'Distribution & Transfer Panels',
    year: '2021',
    location: 'Anambra',
    imageUrl: 'https://images.pexels.com/photos/8346337/pexels-photo-8346337.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  },
  {
    title: 'DOL Motor Control Centre',
    category: 'Power Control & Management Panels',
    year: '2022',
    location: 'Enugu',
    imageUrl: 'https://images.pexels.com/photos/6805650/pexels-photo-6805650.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Cancal Engineering's expertise in renewable energy is unmatched. They delivered our solar project on time and within budget, exceeding our expectations. Their team is professional, knowledgeable, and a pleasure to work with.",
    author: 'Michael Adebayo',
    title: 'COO, PowerGen Renewable Energy',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    quote: "The custom MCC panel we commissioned from Cancal was of the highest quality. It integrated perfectly with our existing systems. Their attention to detail and commitment to safety standards are commendable.",
    author: 'Sarah Chen',
    title: 'Plant Manager, Fouani Group',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    quote: "We've relied on Cancal for our facility's electrical maintenance for years. Their prompt service and proactive approach have minimized downtime and saved us significant costs. They are a truly reliable partner.",
    author: 'David Okoro',
    title: 'Facilities Director, Cadbury Nigeria',
    avatarUrl: 'https://randomuser.me/api/portraits/men/56.jpg'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What services does Cancal Engineering Company offer?",
    answer: "We provide solar energy solutions, electrical installations, energy audits, automobile services and consultancy. Our team designs, installs, and maintains power systems for residential, commercial, and industrial clients, as well as providing vehicle maintenance."
  },
  {
    question: "Do you only work with solar energy?",
    answer: "No. While solar is a major focus, we also offer full-scale electrical engineering services including wiring, rewiring, backup systems, and surge protection, alongside comprehensive automobile services."
  },
  {
    question: "Where are you located, and do you serve clients outside your region?",
    answer: "We are based in Nigeria and serve clients across various states. For large-scale or specialized projects, we’re open to working nationwide or regionally."
  },
  {
    question: "Can I get a custom solar system designed for my home or business?",
    answer: "Yes. We design solar systems tailored to your specific power needs, space, and budget—whether it’s off-grid, hybrid, or backup solutions."
  },
  {
    question: "What kind of clients have you worked with?",
    answer: "Our clients range from individuals to institutions like banks, universities, churches, and hotels. Notable clients include First Bank, Zenith Bank, and Covenant University."
  },
  {
    question: "Are your products and installations guaranteed?",
    answer: "Absolutely. We use high-quality, certified components and provide warranties on installations and equipment, depending on the product and service type."
  },
  {
    question: "Do you offer maintenance and after-sales support?",
    answer: "Yes, we offer scheduled maintenance, system checks, and support services to ensure optimal system performance over time for both engineering solutions and vehicles."
  },
  {
    question: "How do I get a quote or consultation?",
    answer: "You can contact us via phone, email, or through our website to book a free consultation or request a project quote."
  },
  {
    question: "How long does it take to complete a solar installation?",
    answer: "Project duration depends on system size and complexity. Most standard home or office installations are completed within a few days."
  },
  {
    question: "What makes Cancal different from other engineering companies?",
    answer: "Our commitment to quality, innovation, and customer satisfaction. We combine technical expertise with the best equipment and a client-first approach across all our services, from green energy to automotive care."
  }
];


export const FOOTER_LINKS = {
    company: [
        { href: './index.html', label: 'Home' },
        { href: './portfolio.html', label: 'Portfolio' },
        { href: './services.html', label: 'Services' },
        { href: './index.html#faq', label: 'FAQs' },
        { href: './index.html#contact', label: 'Contact Us' },
    ],
    services: [
        { href: './services.html#', label: 'EPC' },
        { href: './services.html#', label: 'Panel Manufacturing' },
        { href: './services.html#', label: 'Renewable Energy' },
        { href: './services.html#', 'label': 'Installations' },
        { href: './services.html#', label: 'Automobile' },
        { href: './services.html#', label: 'Consultancy' },
    ],
    legal: [
        { href: '#', label: 'Terms & Conditions' },
        { href: '#', 'label': 'Privacy Policy' },
        { href: '#', label: 'Cookie Policy' },
    ]
};
