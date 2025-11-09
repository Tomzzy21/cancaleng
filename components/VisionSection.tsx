
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ABOUT_IMAGE } from '../constants';

const VisionSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="py-24" ref={ref}>
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.div 
          className="h-[600px] w-full overflow-hidden rounded-2xl"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            show: { 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              } 
            }
          }}
        >
          <img 
            src={ABOUT_IMAGE} 
            alt="Engineers collaborating on a project" 
            className="w-full h-full object-cover object-center"
            style={{
              transform: isInView ? 'none' : 'scale(1.05)',
              transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </motion.div>
        
        <motion.div className="max-w-lg space-y-6" variants={container}>
          <motion.div variants={item}>
            <p className="text-[#D4FF00] font-semibold">About Us</p>
            <div className="flex items-center gap-4">
              <h2 className="text-5xl lg:text-6xl font-bold mt-2 leading-tight tracking-tighter">Who We Are</h2>
              <div className="relative w-16 h-16 ml-4 flex items-center">
                <div className="relative w-8 h-12">
                  <div className="absolute top-1/2 left-1/2 w-8 h-12 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                <div className="relative w-8 h-12 ml-2">
                  <div className="absolute top-1/2 left-1/2 w-8 h-12 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.p className="text-gray-400" variants={item}>
            Cancal Engineering is a specialized engineering firm focused on Electrical and Mechanical services. Our experienced team of engineers and technicians excels in the design, installation, and maintenance of the solutions we provide, with a primary goal of saving costs through reliable energy.
          </motion.p>
          
          <motion.div className="space-y-4 text-gray-300" variants={container}>
            <motion.p variants={item}>
              <strong className="text-white">Our Vision:</strong> To build a world-class service offering in the electrical engineering sector that will evolve and introduce new technology in the industry.
            </motion.p>
            <motion.p variants={item}>
              <strong className="text-white">Our Mission:</strong> To provide engineering services and expertise that enhance customer's plants and facilities at optimum performance and cost of ownership while remaining friendly to the environment.
            </motion.p>
            <motion.p variants={item}>
              <strong className="text-white">Our Commitment:</strong> We will complete your project to your satisfaction in a professional and timely manner.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisionSection;

// Add CSS for the animated eyes
const styles = `
  @keyframes look-around {
    0%, 100% { transform: translate(-50%, -50%) translateX(0); }
    25% { transform: translate(-50%, -50%) translateX(4px); }
    50% { transform: translate(-50%, -50%) translateX(0); }
    75% { transform: translate(-50%, -50%) translateX(-4px); }
  }
  
  @keyframes blink {
    0%, 96%, 100% { height: 3rem; }
    98% { height: 0.25rem; }
  }
  
  .bg-black.rounded-full {
    animation: look-around 5s infinite;
  }
  
  .relative.w-8.h-12 > div {
    animation: blink 4s infinite;
    animation-delay: 1s;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
