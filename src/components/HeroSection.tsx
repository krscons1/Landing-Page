import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code, Zap, Target } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden section-fade">
        {/* Minimal Interactive Network Illustration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-teal-900/20" />
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0 object-cover opacity-30 pointer-events-none">
            {/* Animated lines */}
            <motion.line x1="200" y1="200" x2="400" y2="100" stroke="#00c2cb" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
            <motion.line x1="400" y1="100" x2="600" y2="200" stroke="#0066ff" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
            <motion.line x1="200" y1="200" x2="400" y2="300" stroke="#ff6b35" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
            <motion.line x1="400" y1="300" x2="600" y2="200" stroke="#00c2cb" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
            {/* Animated nodes */}
            <motion.circle cx="200" cy="200" r="16" fill="#00c2cb" animate={{ r: [16, 20, 16] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx="400" cy="100" r="14" fill="#0066ff" animate={{ r: [14, 18, 14] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx="600" cy="200" r="16" fill="#ff6b35" animate={{ r: [16, 20, 16] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx="400" cy="300" r="14" fill="#00c2cb" animate={{ r: [14, 18, 14] }} transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }} />
          </svg>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 text-blue-400/30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code size={48} />
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-32 text-teal-400/30"
            animate={{
              y: [0, 30, 0],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap size={56} />
          </motion.div>
          
          <motion.div
            className="absolute bottom-32 left-1/4 text-orange-400/30"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target size={40} />
          </motion.div>
        </div>

        <div className="container mx-auto text-center z-10 relative section-glass card-shadow p-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "power3.out" }}
            className="mb-8"
          >
            <span className="section-label">00 &mdash; Welcome</span>
            <motion.h1 
              className="text-6xl md:text-9xl font-bold font-orbitron mb-6 text-reveal"
              style={{
                background: 'linear-gradient(45deg, #0066ff, #00c2cb, #ff6b35)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-shift 3s ease infinite'
              }}
            >
              Scroll less.
            </motion.h1>
            <motion.h1 
              className="text-6xl md:text-9xl font-bold font-orbitron text-teal-400 text-reveal"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              Build more.
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-3xl font-rajdhani text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Stop feeding the <span className="text-pink-400 neon-glow font-bold">algorithm</span>. 
              Start <span className="text-blue-400 neon-glow font-bold">engineering</span> your life.
            </p>
            <p className="text-lg md:text-xl font-rajdhani text-gray-400 max-w-2xl mx-auto">
              Transform your existence from passive consumption to active creation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: "back.out(1.7)" }}
            className="max-w-lg mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join the revolution"
                  className="w-full px-8 py-6 bg-black/70 border-2 border-blue-500/50 neon-border rounded-2xl 
                             text-white placeholder-gray-400 focus:outline-none focus:border-teal-400
                             font-rajdhani text-xl backdrop-blur-md transition-all duration-500
                             focus:shadow-[0_0_40px_rgba(0,194,203,0.6)] group-hover:border-blue-400/70"
                  required
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 50px rgba(0, 102, 255, 0.8)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-6 bg-gradient-to-r from-blue-500 via-teal-400 to-orange-500 text-black 
                           font-bold rounded-2xl font-rajdhani text-xl flex items-center justify-center gap-3
                           hover:from-blue-400 hover:via-teal-300 hover:to-orange-400 transition-all duration-500
                           shadow-[0_0_30px_rgba(0,102,255,0.4)] relative overflow-hidden group"
              >
                <span className="relative z-10">Get Early Access</span>
                <ChevronRight size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div className="text-center fade-in-stagger">
              <div className="text-3xl md:text-4xl font-orbitron text-blue-400 neon-glow mb-2">10k+</div>
              <div className="text-sm font-rajdhani text-gray-400">Engineers</div>
            </div>
            <div className="text-center fade-in-stagger">
              <div className="text-3xl md:text-4xl font-orbitron text-teal-400 neon-glow mb-2">500+</div>
              <div className="text-sm font-rajdhani text-gray-400">Systems Built</div>
            </div>
            <div className="text-center fade-in-stagger">
              <div className="text-3xl md:text-4xl font-orbitron text-orange-400 neon-glow mb-2">99%</div>
              <div className="text-sm font-rajdhani text-gray-400">Success Rate</div>
            </div>
          </motion.div>
        </div>

        {/* Interactive mouse follower */}
        <motion.div
          className="absolute pointer-events-none z-20"
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 blur-xl" />
        </motion.div>
      </section>
      <div className="section-divider" />
    </>
  );
};

export default HeroSection;