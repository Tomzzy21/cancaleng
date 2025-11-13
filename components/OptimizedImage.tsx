import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fillTop?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  fillTop = false
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

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#1f2937',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    opacity: imgLoaded ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    willChange: 'opacity',
  };

  return (
    <div 
      className={className}
      style={containerStyle}
    >
      <img 
        src={src}
        alt={alt}
        style={imageStyle}
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
