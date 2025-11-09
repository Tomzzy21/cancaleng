import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!src) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <span className="text-gray-500">No image</span>
      </div>
    );
  }

  if (imgError) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  return (
    <div 
      className={`${className} overflow-hidden`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: height ? `${height}px` : '400px',
        transform: 'translateZ(0)', // Force GPU acceleration
        backfaceVisibility: 'hidden',
        perspective: 1000, // Improve 3D rendering
      }}
    >
      <img 
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: imgLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          imageRendering: 'crisp-edges',
          transform: 'translateZ(0)', // Force GPU acceleration
          backfaceVisibility: 'hidden', // Improve rendering performance
          transformStyle: 'preserve-3d', // Better 3D rendering
          willChange: 'opacity, transform', // Optimize animations
        }}
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
      />
      {!imgLoaded && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
