import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Briefcase, Heart } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import ScrollAnimation from './ScrollAnimation';

const TeamSection: React.FC = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const stats = [
    { value: '10', label: 'Team Members', icon: Users, suffix: '+' },
    { value: '5', label: 'Years Experience', icon: Award, suffix: '+' },
    { value: '50', label: 'Projects Completed', icon: Briefcase, suffix: '+' },
    { value: '98', label: 'Client Satisfaction', icon: Heart, suffix: '%' },
  ];

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <ScrollAnimation amount={0.1} direction="glow" duration={1.5}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111312] opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        </div>
      </ScrollAnimation>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block text-[#D4FF00] font-semibold mb-3">Our Strength</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Meet the <span className="text-[#D4FF00]">Innovators</span> Behind Our Success
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              A talented collective of engineers, designers, and problem-solvers dedicated to pushing boundaries and delivering exceptional results.
            </p>
          </div>
        </ScrollAnimation>

        {/* Main Team Showcase */}
        <div className="relative">
          {/* Team Photo */}
          <ScrollAnimation direction="zoom" delay={0.4}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl"
            >
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative bg-black/20">
                <img
                  src="/group-photo.jpg"
                  alt="Cancal Engineering Team"
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Floating elements */}
                <motion.div 
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-5 -top-5 w-24 h-24 rounded-full bg-[#D4FF00] mix-blend-overlay opacity-20"
                />
                <motion.div 
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#D4FF00] mix-blend-overlay opacity-20"
                />
              </div>
            </motion.div>
          </ScrollAnimation>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollAnimation 
                  key={stat.label}
                  direction="up"
                  delay={0.2 + (index * 0.1)}
                  className="bg-[#181A19] border border-white/10 p-6 rounded-2xl text-center hover:bg-[#1f211f] transition-all duration-500 hover:border-[#D4FF00]/30 hover:shadow-lg hover:shadow-[#D4FF00]/10"
                >
                  <div className="w-14 h-14 bg-[#D4FF00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#D4FF00]" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">
                    <span className="text-[#D4FF00]">
                      <AnimatedNumber value={stat.value} duration={2} />
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>

        {/* Team CTA */}
        <ScrollAnimation direction="fade" delay={0.8} className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Meet the Team Behind Your Success
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our dedicated team of experts is committed to delivering exceptional results for every project.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-[#D4FF00] text-black font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all group"
          >
            Get in Touch
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
