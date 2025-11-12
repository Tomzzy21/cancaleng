import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  value, 
  duration = 1.5,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isInView, setIsInView] = useState(false);
  const isPercentage = value.endsWith('%');
  const numericValue = isPercentage ? parseFloat(value) : parseFloat(value);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = numericValue;
    const increment = end / (duration * 60); // 60fps for smooth animation
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(`${Math.round(end)}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayValue(`${Math.round(start)}${suffix}`);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, numericValue, duration, suffix]);

  return (
    <motion.span 
      className={className}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;
