import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

type ScrollAnimationProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom' | 'flip' | 'glow';
  amount?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
};

const ScrollAnimation = ({
  children,
  delay = 0,
  className = '',
  direction = 'fade',
  amount = 0.2,
  duration = 0.8,
  once = true,
  threshold = 0.1,
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount,
    once,
    margin: '0px 0px -10% 0px',
    threshold
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
    fade: { opacity: 0 },
    zoom: { scale: 0.9, opacity: 0 },
    flip: { rotateX: 90, opacity: 0 },
    glow: { 
      opacity: 0,
      boxShadow: '0 0 0 0 rgba(212, 255, 0, 0)' 
    }
  };

  const animationVariants = {
    hidden: (custom: number) => ({
      ...(directionVariants[direction] || directionVariants.fade),
      transition: { duration: 0 }
    }),
    visible: (custom: number) => ({
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      opacity: 1,
      boxShadow: direction === 'glow' ? '0 0 20px 5px rgba(212, 255, 0, 0.6)' : 'none',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        mass: 0.5,
        delay: delay + (custom || 0) * 0.1,
        duration,
        ...(direction === 'flip' && { 
          rotateX: { type: 'spring', damping: 15, stiffness: 100, mass: 0.5 }
        })
      }
    })
  };

  // For staggered children animations
  if (Array.isArray(children) || (children as any)?.type === 'div') {
    return (
      <div ref={ref} className={className}>
        {React.Children.map(children, (child, index) => (
          <motion.div
            custom={index}
            initial="hidden"
            animate={controls}
            variants={animationVariants}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      custom={0}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
