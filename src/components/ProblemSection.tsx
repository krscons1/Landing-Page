import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Brain, Clock } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <>
      <section id="problem" className="py-32 px-4 relative overflow-hidden section-fade">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Minimal, creative illustration: spiral loop and hand/phone */}
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0 object-cover opacity-20 pointer-events-none">
            {/* Spiral loop */}
            <motion.path
              d="M400,200 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
              stroke="#ff6b35"
              strokeWidth="6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, rotate: 0 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              style={{ originX: 0.5, originY: 0.5 }}
            />
            {/* Hand reaching for phone (minimal, abstract) */}
            <motion.rect x="370" y="120" width="60" height="120" rx="18" fill="#fff" fillOpacity="0.13"
              animate={{ y: [120, 130, 120] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.rect x="390" y="220" width="20" height="40" rx="8" fill="#ff6b35" fillOpacity="0.18"
              animate={{ y: [220, 230, 220] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-900/20 to-black/80" />
        </div>

        <div className="container mx-auto text-center relative z-10 section-glass card-shadow p-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "power3.out" }}
            viewport={{ once: true }}
            className="fade-in-stagger mb-16"
          >
            <span className="section-label">01 &mdash; The Problem</span>
            <h2 
              className="text-6xl md:text-8xl font-bold font-orbitron mb-8 text-reveal"
            >
              <span className="text-pink-500">Stuck in the Loop?</span>
              <br />
              <span className="text-red-500">Hooked by the Feed</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto fade-in-stagger mb-16"
          >
            <p className="text-2xl md:text-3xl font-rajdhani text-gray-300 mb-8 leading-relaxed">
              You're <span className="text-pink-400 neon-glow font-bold bg-pink-400/10 px-2 py-1 rounded">scrolling</span> through endless feeds, 
              consuming content that someone else designed to <span className="text-red-400 neon-glow font-bold bg-red-400/10 px-2 py-1 rounded">hook you</span>. 
              Your time, your attention, your potential – all being harvested by systems built to keep you clicking.
            </p>
            
            <div className="text-lg font-rajdhani text-gray-400 max-w-3xl mx-auto">
              The average person checks their phone <span className="text-orange-400 font-bold">96 times per day</span>. 
              That's once every 10 minutes of your waking life.
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 40px rgba(255, 75, 166, 0.4)',
                rotateY: 5
              }}
              className="p-8 bg-black/50 border border-pink-500/30 rounded-2xl backdrop-blur-md 
                         slide-left relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-pink-400 mb-6 relative z-10"
              >
                <Smartphone size={64} className="neon-glow mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-orbitron text-pink-400 mb-4 neon-glow relative z-10">Endless Scroll</h3>
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed relative z-10">
                Hours vanish into the void of infinite feeds, designed to never end. 
                Your brain craves the next dopamine hit while your goals collect dust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)',
                rotateX: 5
              }}
              className="p-8 bg-black/50 border border-orange-500/30 rounded-2xl backdrop-blur-md 
                         scale-in relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: -360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-orange-400 mb-6 relative z-10"
              >
                <Brain size={64} className="neon-glow mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-orbitron text-orange-400 mb-4 neon-glow relative z-10">Dopamine Trap</h3>
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed relative z-10">
                Your brain's reward system hijacked by likes, shares, and notifications. 
                Each ping rewires your neural pathways for instant gratification.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 40px rgba(0, 194, 203, 0.4)',
                rotateY: -5
              }}
              className="p-8 bg-black/50 border border-teal-500/30 rounded-2xl backdrop-blur-md 
                         slide-right relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-teal-400 mb-6 relative z-10"
              >
                <Clock size={64} className="neon-glow mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-orbitron text-teal-400 mb-4 neon-glow relative z-10">Lost Focus</h3>
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed relative z-10">
                Deep work becomes impossible when your attention is fractured. 
                The cost? Your most valuable projects remain unfinished.
              </p>
            </motion.div>
          </div>

          {/* Impact Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 p-8 bg-red-900/20 border border-red-500/30 rounded-2xl backdrop-blur-md fade-in-stagger"
          >
            <h3 className="text-2xl font-orbitron text-red-400 mb-6 neon-glow">The Hidden Cost</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-orbitron text-red-400 neon-glow mb-2">7 hours</div>
                <div className="text-gray-400 font-rajdhani">Daily screen time average</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron text-red-400 neon-glow mb-2">23 minutes</div>
                <div className="text-gray-400 font-rajdhani">Time to refocus after distraction</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron text-red-400 neon-glow mb-2">2,555 days</div>
                <div className="text-gray-400 font-rajdhani">Lifetime spent on social media</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating warning elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-16 h-16 border border-red-400/30 rounded-full morph-bg"
          />
          
          <motion.div
            animate={{
              y: [0, 40, 0],
              rotate: [360, 180, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 right-32 w-20 h-20 border border-pink-400/30 morph-bg"
          />
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
};

export default ProblemSection;