import React from 'react';
import { motion } from 'framer-motion';
import { Radar, Wrench, RotateCcw, ArrowRight } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const processes = [
    {
      icon: Radar,
      title: 'Scan',
      description: 'Analyze your current systems and identify inefficiencies',
      details: ['System audit', 'Bottleneck identification', 'Performance metrics'],
      color: 'blue',
      delay: 0.2
    },
    {
      icon: Wrench,
      title: 'Build',
      description: 'Engineer new frameworks and optimize existing processes',
      details: ['Framework design', 'Process automation', 'Tool integration'],
      color: 'teal',
      delay: 0.4
    },
    {
      icon: RotateCcw,
      title: 'Iterate',
      description: 'Continuously refine and improve your personal systems',
      details: ['A/B testing', 'Feedback loops', 'Continuous optimization'],
      color: 'orange',
      delay: 0.6
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          text: 'text-blue-400',
          border: 'border-blue-500/30',
          glow: 'rgba(0, 102, 255, 0.5)',
          hover: 'hover:border-blue-500',
          bg: 'from-blue-500/20'
        };
      case 'teal':
        return {
          text: 'text-teal-400',
          border: 'border-teal-500/30',
          glow: 'rgba(0, 194, 203, 0.5)',
          hover: 'hover:border-teal-500',
          bg: 'from-teal-500/20'
        };
      case 'orange':
        return {
          text: 'text-orange-400',
          border: 'border-orange-500/30',
          glow: 'rgba(255, 107, 53, 0.5)',
          hover: 'hover:border-orange-500',
          bg: 'from-orange-500/20'
        };
      default:
        return {
          text: 'text-white',
          border: 'border-gray-500/30',
          glow: 'rgba(255, 255, 255, 0.5)',
          hover: 'hover:border-gray-500',
          bg: 'from-gray-500/20'
        };
    }
  };

  return (
    <section id="process" className="py-32 px-4 relative overflow-hidden section-fade">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Minimal, creative illustration: animated flowchart/arrow path */}
        <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0 object-cover opacity-20 pointer-events-none">
          {/* Flow path */}
          <motion.path d="M150 300 Q400 100 650 300" stroke="#00c2cb" strokeWidth="8" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
          {/* Arrow head */}
          <motion.polygon points="640,290 650,300 660,290" fill="#00c2cb" animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
      </div>

      <div className="container mx-auto relative z-10 section-glass card-shadow p-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "power3.out" }}
          viewport={{ once: true }}
          className="text-center mb-20 fade-in-stagger"
        >
          <span className="section-label">03 &mdash; The Process</span>
          <h2 className="text-5xl md:text-7xl font-bold font-orbitron mb-8 text-reveal">
            <span className="text-white">The Process</span>
          </h2>
          <p className="text-2xl font-rajdhani text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A <span className="text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded">systematic approach</span> to 
            engineering your personal operating system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {processes.map((process, index) => {
            const colors = getColorClasses(process.color);
            const IconComponent = process.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: process.delay, ease: "back.out(1.7)" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 60px ${colors.glow}`,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  z: 50
                }}
                className={`bg-black/60 border ${colors.border} ${colors.hover} rounded-2xl p-8 
                           backdrop-blur-md transition-all duration-500 fade-in-stagger text-center
                           relative overflow-hidden group perspective-1000`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.3,
                  }}
                  transition={{ duration: 0.8, ease: "back.out(1.7)" }}
                  className={`${colors.text} mb-8 inline-block relative z-10`}
                >
                  <IconComponent size={80} className="neon-glow" />
                </motion.div>
                
                <h3 className={`text-4xl font-orbitron ${colors.text} mb-6 neon-glow relative z-10`}>
                  {process.title}
                </h3>
                
                <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-8 relative z-10">
                  {process.description}
                </p>

                <div className="space-y-3 relative z-10">
                  {process.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: process.delay + (detailIndex * 0.1) }}
                      className="flex items-center gap-3 text-sm font-rajdhani text-gray-400"
                    >
                      <ArrowRight size={16} className={colors.text} />
                      {detail}
                    </motion.div>
                  ))}
                </div>

                {/* Step number */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full border ${colors.border} flex items-center justify-center text-sm font-orbitron ${colors.text} relative z-10`}>
                  {index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;