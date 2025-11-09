
import React from 'react';

const logoUrl = "/Logo.png";

export const Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img src={logoUrl} alt="Cancal Engineering Logo" {...props} />
);

export const HeroLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="76" height="48" viewBox="0 0 76 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Designing Company Logo</title>
    <circle cx="24" cy="24" r="24" fill="#6B7280"/>
    <circle cx="52" cy="24" r="24" fill="#a3e635"/>
    <path d="M52 18V30" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M46 24H58" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const EngineeringIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20V4M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L8 6M12 2L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12L17 16M21 12L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="17" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const PanelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="8" y="8" width="3" height="3" rx="1" fill="currentColor"/>
    <rect x="13" y="8" width="3" height="3" rx="1" fill="currentColor"/>
    <rect x="8" y="13" width="8" height="3" rx="1" fill="currentColor"/>
  </svg>
);

export const RenewableIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V1M12 23V21M5.64 5.64L4.22 4.22M19.78 19.78L18.36 18.36M1 12H3M21 12H23M5.64 18.36L4.22 19.78M19.78 4.22L18.36 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MaintenanceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a1 1 0 0 0-1.4-1.4l-3.77 3.77zM12 12l-6 6-3-3 6-6 3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.7 13.3a1 1 0 0 0-1.4 0l-1.6 1.6a1 1 0 0 0 0 1.4l3.77 3.77a1 1 0 0 0 1.4-1.4l-3.77-3.77z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 21l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6L9 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ConsultancyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 10H3M17 6H3M11 14H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 14L21 12L17 10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ProcurementIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"></path>
        <circle cx="13" cy="9" r="2.5"></circle>
        <path d="M13 6.34V5M15.3 7.3l1.18-.7M15.3 10.7l1.18.7M13 11.66V13M10.7 10.7l-1.18.7M10.7 7.3l-1.18-.7"></path>
    </svg>
);

export const AutomobileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 13.7727C18.8 13.2727 19.2 12.8727 19.7 12.8727C20.2 12.8727 20.6 13.2727 20.6 13.7727C20.6 14.2727 20.2 14.6727 19.7 14.6727C19.2 14.6727 18.8 14.2727 18.8 13.7727Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.30078 13.7727C5.30078 13.2727 5.70078 12.8727 6.20078 12.8727C6.70078 12.8727 7.10078 13.2727 7.10078 13.7727C7.10078 14.2727 6.70078 14.6727 6.20078 14.6727C5.70078 14.6727 5.30078 13.2727 5.30078 13.7727Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 13.7727H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.90039 13.7727H16.9004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.0002 13.7727H22.5002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.39961 10.9724L5.39961 8.27237C5.89961 7.67237 6.69961 7.27237 7.39961 7.27237H18.1996C18.8996 7.27237 19.5996 7.67237 20.0996 8.27237L22.1996 10.9724" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.5 13.7727H2C2 12.0097 3.011 11.0877 3.3 10.9727" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 13.7727V16.7727" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.1006 13.7727V16.7727" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const OilCanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 10.5V17.5C9.5 18.0523 9.94772 18.5 10.5 18.5H13.5C14.0523 18.5 14.5 18.0523 14.5 17.5V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 8.5C9.5 7.39543 10.3954 6.5 11.5 6.5H12.5C13.6046 6.5 14.5 7.39543 14.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 11L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 10.5H5.5C5.22386 10.5 5 10.2761 5 10V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const DiagnosticsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 15.5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 11C5 7.13401 8.13401 4 12 4C15.866 4 19 7.13401 19 11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 9.5H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 11.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const BodyworkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10H4V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4H15C15.5523 4 16 4.44772 16 5V7C16 7.55228 15.5523 8 15 8H9C8.44772 8 8 7.55228 8 7V5C8 4.44772 8.44772 4 9 4H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


export const TeamIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23 21V19C22.9992 16.9436 21.4168 15.2428 19.373 15.024" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 3.13C17.0673 3.58296 17.9327 4.41704 18.4856 5.48434" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
);

export const CostIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V6M12 18L15 15M12 18L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 12H15.5C14.8333 12 14.5 11.6667 14.5 11V9.5C14.5 8.16667 15.5 7 17 7C18.5 7 19.5 8.16667 19.5 9.5V10.5C19.5 11.1667 19.1667 11.5 18.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 11H6.5C7.16667 11 7.5 11.3333 7.5 11.5V13C7.5 14.3333 6.5 15.5 5 15.5C3.5 15.5 2.5 14.3333 2.5 13V12C2.5 11.3333 2.83333 11 3.5 11H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
);

export const OEMIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6 18V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 18V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 18V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18 18V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 22V8L12 2L20 8V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
);

export const QualityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.5L8.5 20L5 21.5L5.5 17.5L2 15L4.5 12L2 9L5.5 6.5L5 2.5L8.5 4L12 2.5L15.5 4L19 2.5L18.5 6.5L22 9L19.5 12L22 15L18.5 17.5L19 21.5L15.5 20L12 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
);

export const WrenchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5833 4H10.9167C10.5161 4 10.1345 4.15804 9.86546 4.42713L4.42713 9.86546C4.15804 10.1345 4 10.5161 4 10.9167V15.5833C4 17.4727 5.52728 19 7.41667 19H9V12.5L15.5 6V4.41667C15.5 4.18783 15.5463 3.96126 15.6354 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 19C9 20.1046 9.89543 21 11 21H12C13.1046 21 14 20.1046 14 19V17.5C14 16.6716 13.3284 16 12.5 16H11.5C10.1193 16 9 14.8807 9 13.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.9999 8.5C21.1045 8.5 21.9999 7.60457 21.9999 6.5C21.9999 5.39543 21.1045 4.5 19.9999 4.5C18.8953 4.5 17.9999 5.39543 17.9999 6.5C17.9999 7.60457 18.8953 8.5 19.9999 8.5Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

export const HeadphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19V14C9 13.4477 8.55228 13 8 13H4C3.44772 13 3 13.4477 3 14V12Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M21 12V19C21 20.1046 20.1046 21 19 21H17C15.8954 21 15 20.1046 15 19V14C15 13.4477 15.4477 13 16 13H20C20.5523 13 21 13.4477 21 14V12Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

export const QuotationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="100" height="100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 14.725C13 11.55 15.55 9 18.725 9C21.9 9 24 11.55 24 14.725C24 17.9 21.9 21 18.725 21C16.5 21 14 20 13 18.4C13 18.4 13 17.9 13 17.9C13 17.9 13.55 18.45 14.1 18.85C14.75 19.35 15.5 19.5 16.25 19.5C18.35 19.5 19.5 17.9 19.5 15.75C19.5 13.65 18.35 12 16.25 12C14.15 12 13 13.65 13 15.75C13 16.05 13 16.35 13.15 16.65C12.45 15.75 12.05 15.05 11.95 14.25L13 14.725Z" />
        <path d="M0 14.725C0 11.55 2.55 9 5.725 9C8.9 9 11 11.55 11 14.725C11 17.9 8.9 21 5.725 21C3.5 21 1 20 0 18.4C0 18.4 0 17.9 0 17.9C0 17.9 0.55 18.45 1.1 18.85C1.75 19.35 2.5 19.5 3.25 19.5C5.35 19.5 6.5 17.9 6.5 15.75C6.5 13.65 5.35 12 3.25 12C1.15 12 0 13.65 0 15.75C0 16.05 0 16.35 0.15 16.65C-0.55 15.75 -0.95 15.05 -1.05 14.25L0 14.725Z" />
    </svg>
);

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export const MinusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TextLogo: React.FC<{ children: React.ReactNode, width?: number }> = ({ children, width=150 }) => (
    <svg viewBox={`0 0 ${width} 32`} height="32" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="16" fontWeight="bold" fontFamily="Manrope, sans-serif">
            {children}
        </text>
    </svg>
);

export const HuaweiLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo>HUAWEI</TextLogo>;
export const PowerGenLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={220}>PowerGen Renewable Energy</TextLogo>;
export const DarwayCoastLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={160}>DarwayCoast</TextLogo>;
export const FrieslandCampinaLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={180}>FrieslandCampina</TextLogo>;
export const CadburyLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={120}>Cadbury</TextLogo>;
export const FouaniGroupLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={160}>FOUANI Group</TextLogo>;
export const PromasidorLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo>PROMASIDOR</TextLogo>;
export const JrbSolarLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={260}>JRB SOLAR INVESTMENT LIMITED</TextLogo>;
export const PrimlaksLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo>PRIMLAKS</TextLogo>;
export const SolarShopLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={120}>solar shop</TextLogo>;
export const DaystarPowerLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={170}>DAYSTAR POWER</TextLogo>;
export const GrecoLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo>GreCo</TextLogo>;
export const PaniscoLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={230}>PANISCO ENGINEERING LTD</TextLogo>;
export const RensourceLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo>rensource</TextLogo>;
export const WestaSolarLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => <TextLogo width={130}>westa solar</TextLogo>;
