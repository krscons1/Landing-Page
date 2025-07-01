import React from 'react';
import { motion } from 'framer-motion';
import { Code, Target, Zap, ArrowRight } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <>
      <section id="solution" className="py-32 px-4 relative overflow-hidden section-fade">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Minimal, creative illustration: interlocking blocks/gears */}
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0 object-cover opacity-20 pointer-events-none">
            {/* Gear 1 */}
            <motion.circle cx="250" cy="200" r="40" fill="#00c2cb" fillOpacity="0.13" animate={{ rotate: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 200px' }} />
            {/* Gear 2 */}
            <motion.circle cx="400" cy="200" r="60" fill="#0066ff" fillOpacity="0.10" animate={{ rotate: [0, -360] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '400px 200px' }} />
            {/* Gear 3 */}
            <motion.circle cx="550" cy="200" r="40" fill="#ff6b35" fillOpacity="0.13" animate={{ rotate: [0, 360] }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '550px 200px' }} />
            {/* Interlocking blocks */}
            <motion.rect x="320" y="160" width="40" height="80" rx="10" fill="#00c2cb" fillOpacity="0.18" animate={{ y: [160, 170, 160] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.rect x="440" y="160" width="40" height="80" rx="10" fill="#ff6b35" fillOpacity="0.18" animate={{ y: [160, 150, 160] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-blue-900/30 to-black/90" />
        </div>

        <div className="container mx-auto relative z-10 section-glass card-shadow p-12 xl:pl-24">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "power3.out" }}
            viewport={{ once: true }}
            className="text-center mb-20 fade-in-stagger"
          >
            <span className="section-label">02 &mdash; The Solution</span>
            <h2 className="text-6xl md:text-8xl font-bold font-orbitron mb-8 text-reveal">
              <span className="text-blue-400">Life's a machine.</span>
              <br />
              <span className="text-teal-400">Tune it.</span>
            </h2>
            <p className="text-2xl md:text-3xl font-rajdhani text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stop being a <span className="text-red-400 font-bold bg-red-400/10 px-2 py-1 rounded">passive consumer</span>. 
              Start being an <span className="text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded">active engineer</span> of your own existence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 min-h-[340px]">
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 50px rgba(0, 102, 255, 0.5)',
                rotateY: 5,
                z: 50
              }}
              className="bg-black/60 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-md 
                         slide-left relative overflow-hidden group perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.3 }}
                transition={{ duration: 0.8, ease: "back.out(1.7)" }}
                className="text-blue-400 mb-8 relative z-10"
              >
                <Code size={64} className="neon-glow" />
              </motion.div>
              
              <h3 className="text-3xl font-orbitron text-blue-400 mb-6 neon-glow relative z-10">
                System Design
              </h3>
              
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-6 relative z-10">
                Build frameworks for your life like you'd architect software. 
                Create systems that work <span className="text-blue-400 font-bold">for you</span>, not against you.
              </p>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-blue-400" />
                  Modular life components
                </div>
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-blue-400" />
                  Scalable productivity systems
                </div>
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-blue-400" />
                  Automated decision frameworks
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "back.out(1.7)" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 50px rgba(0, 194, 203, 0.5)',
                rotateX: 5
              }}
              className="bg-black/60 border border-teal-500/30 rounded-2xl p-8 backdrop-blur-md scale-in relative overflow-hidden group lg:-mt-12 z-20 lg:mb-20 mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <motion.div
                whileHover={{ rotate: -360, scale: 1.3 }}
                transition={{ duration: 0.8, ease: "back.out(1.7)" }}
                className="text-teal-400 mb-8 relative z-10"
              >
                <Target size={64} className="neon-glow" />
              </motion.div>
              
              <h3 className="text-3xl font-orbitron text-teal-400 mb-6 neon-glow relative z-10">
                Precision Focus
              </h3>
              
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-6 relative z-10">
                Cut through the noise with laser-sharp clarity. 
                Engineer your attention like a <span className="text-teal-400 font-bold">precision instrument</span>.
              </p>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-teal-400" />
                  Deep work protocols
                </div>
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-teal-400" />
                  Distraction elimination systems
                </div>
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-teal-400" />
                  Cognitive load optimization
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 50px rgba(255, 107, 53, 0.5)',
                rotateY: -5
              }}
              className="bg-black/60 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-md 
                         slide-right relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.3 }}
                transition={{ duration: 0.8, ease: "back.out(1.7)" }}
                className="text-orange-400 mb-8 relative z-10"
              >
                <Zap size={64} className="neon-glow" />
              </motion.div>
              
              <h3 className="text-3xl font-orbitron text-orange-400 mb-6 neon-glow relative z-10">
                Rapid Iteration
              </h3>
              
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-6 relative z-10">
                Test, measure, optimize. Apply the engineering mindset 
                to <span className="text-orange-400 font-bold">continuous self-improvement</span> and growth.
              </p>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-orange-400" />
                  A/B test your habits
                </div>
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-orange-400" />
                  Performance metrics tracking
                </div>
                <div className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                  <ArrowRight size={16} className="text-orange-400" />
                  Feedback loop optimization
                </div>
              </div>
            </motion.div>
          </div>

          {/* Transformation Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 via-teal-900/30 to-orange-900/30 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-md fade-in-stagger mt-24"
          >
            <h3 className="text-4xl font-orbitron text-center mb-12 text-gradient bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent neon-glow">
              The Transformation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400 font-rajdhani text-lg line-through">Mindless scrolling</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400 font-rajdhani text-lg line-through">Reactive decision making</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400 font-rajdhani text-lg line-through">Scattered attention</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-rajdhani text-lg font-bold">Intentional creation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-rajdhani text-lg font-bold">Systematic optimization</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-rajdhani text-lg font-bold">Laser-focused execution</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
};

export default SolutionSection;