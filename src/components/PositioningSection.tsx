import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Rocket } from 'lucide-react';

const PositioningSection: React.FC = () => {
  return (
    <>
      <section id="positioning" className="py-32 px-4 relative overflow-hidden section-fade">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Minimal, creative illustration: target and trophy */}
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0 object-cover opacity-20 pointer-events-none">
            {/* Target */}
            <motion.circle cx="400" cy="200" r="80" fill="#00c2cb" fillOpacity="0.10" animate={{ r: [80, 90, 80] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx="400" cy="200" r="40" fill="#0066ff" fillOpacity="0.10" animate={{ r: [40, 50, 40] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
            {/* Trophy (abstract) */}
            <motion.rect x="370" y="140" width="60" height="80" rx="20" fill="#ff6b35" fillOpacity="0.13" animate={{ y: [140, 150, 140] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx="400" cy="140" r="20" fill="#fff" fillOpacity="0.10" animate={{ r: [20, 24, 20] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/20 to-black/80" />
        </div>

        <div className="container mx-auto relative z-10 section-glass card-shadow p-12 xl:pl-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "back.out(1.7)" }}
            viewport={{ once: true }}
            className="text-center fade-in-stagger mb-20"
          >
            <span className="section-label">04 &mdash; For the Builders</span>
            <h2 className="text-6xl md:text-9xl font-bold font-orbitron mb-8 text-reveal">
              <span className="text-white">For the ones who</span>
              <br />
              <motion.span 
                className="text-gradient bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(0, 194, 203, 0.8)"
                }}
              >
                get shit done.
              </motion.span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-rajdhani text-gray-300 max-w-5xl mx-auto leading-relaxed"
            >
              This isn't for everyone. It's for the <span className="text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded">builders</span>, 
              the <span className="text-teal-400 font-bold bg-teal-400/10 px-2 py-1 rounded">makers</span>, 
              the ones who refuse to be passive consumers of someone else's algorithm. 
              If you're ready to engineer your life with the same precision you bring to your craft, 
              <span className="text-orange-400 font-bold bg-orange-400/10 px-2 py-1 rounded"> you're in the right place</span>.
            </motion.p>
          </motion.div>

          {/* Characteristics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 min-h-[340px]">
            <motion.div
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 50px rgba(0, 102, 255, 0.4)',
                rotateY: 5
              }}
              className="bg-black/60 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-md 
                         fade-in-stagger text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-blue-400 mb-6 relative z-10"
              >
                <Users size={64} className="neon-glow mx-auto" />
              </motion.div>
              
              <h3 className="text-2xl font-orbitron text-blue-400 mb-4 neon-glow relative z-10">
                The Builders
              </h3>
              
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed relative z-10">
                You create instead of consume. You see problems as puzzles to solve, 
                not obstacles to avoid. Your default mode is construction, not consumption.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "back.out(1.7)" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 50px rgba(0, 194, 203, 0.4)',
                rotateX: 5
              }}
              className="bg-black/60 border border-teal-500/30 rounded-2xl p-8 backdrop-blur-md scale-in text-center relative overflow-hidden group lg:-mt-12 z-20 lg:mb-20 mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                whileHover={{ rotate: -360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-teal-400 mb-6 relative z-10"
              >
                <Trophy size={64} className="neon-glow mx-auto" />
              </motion.div>
              
              <h3 className="text-2xl font-orbitron text-teal-400 mb-4 neon-glow relative z-10">
                The Achievers
              </h3>
              
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed relative z-10">
                You don't just set goals – you engineer systems to achieve them. 
                Excellence isn't an accident; it's the result of deliberate design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 50px rgba(255, 107, 53, 0.4)',
                rotateY: -5
              }}
              className="bg-black/60 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-md 
                         fade-in-stagger text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-orange-400 mb-6 relative z-10"
              >
                <Rocket size={64} className="neon-glow mx-auto" />
              </motion.div>
              
              <h3 className="text-2xl font-orbitron text-orange-400 mb-4 neon-glow relative z-10">
                The Optimizers
              </h3>
              
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed relative z-10">
                You see inefficiency as an opportunity. Every process can be improved, 
                every system can be optimized, every outcome can be engineered.
              </p>
            </motion.div>
          </div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30 
                       border border-purple-500/30 rounded-3xl p-12 backdrop-blur-md fade-in-stagger"
          >
            <h3 className="text-4xl font-orbitron text-center mb-12 text-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent neon-glow">
              Join the Elite
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-orbitron text-purple-400 neon-glow mb-2">10k+</div>
                <div className="text-gray-400 font-rajdhani">Active Engineers</div>
              </div>
              <div>
                <div className="text-4xl font-orbitron text-blue-400 neon-glow mb-2">500+</div>
                <div className="text-gray-400 font-rajdhani">Systems Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-orbitron text-teal-400 neon-glow mb-2">95%</div>
                <div className="text-gray-400 font-rajdhani">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-orbitron text-orange-400 neon-glow mb-2">24/7</div>
                <div className="text-gray-400 font-rajdhani">Community Support</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20 scale-in"
          >
            <p className="text-xl font-rajdhani text-gray-400 mb-8">
              Ready to stop being a passenger in your own life?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 border border-blue-500/50 rounded-xl text-blue-400 font-rajdhani text-lg
                         hover:border-blue-500 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] transition-all duration-300"
            >
              The beta is coming soon...
            </motion.div>
          </motion.div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-10 w-32 h-32 border border-blue-400/20 rounded-full morph-bg"
          />
          
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-10 w-24 h-24 border border-teal-400/20 morph-bg"
          />
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
};

export default PositioningSection;