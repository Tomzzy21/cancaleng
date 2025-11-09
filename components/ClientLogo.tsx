import React from 'react';

interface ClientLogoProps {
  name: string;
  logo: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name, logo }) => (
  <div className="flex flex-col items-center justify-center px-8 h-24">
    <div className="relative h-16 w-32 flex items-center justify-center">
      <img 
        src={logo} 
        alt={`${name} logo`} 
        className="max-h-full max-w-full object-contain"
        onError={(e) => {
          // Fallback to a placeholder if the image fails to load
          const target = e.target as HTMLImageElement;
          target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjIiIHJ5PSIyIi8+PHRleHQgeD0iMTIiIHk9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMwMDAiPkxvZ288L3RleHQ+PC9zdmc+'
        }}
      />
    </div>
    <span className="mt-2 text-xs text-center text-black opacity-70">{name}</span>
  </div>
);

export default ClientLogo;
