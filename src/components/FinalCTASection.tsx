import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Sparkles, Zap, Target } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="finalcta" className="py-32 px-4 relative overflow-hidden section-fade">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Minimal, creative illustration: rocket and launch path */}
        <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0 object-cover opacity-20 pointer-events-none">
          {/* Launch path */}
          <motion.path d="M400 320 Q400 200 400 80" stroke="#00c2cb" strokeWidth="8" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
          {/* Rocket (abstract) */}
          <motion.polygon points="400,60 420,100 400,90 380,100" fill="#ff6b35" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.circle cx="400" cy="110" r="18" fill="#fff" fillOpacity="0.10" animate={{ r: [18, 22, 18] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-blue-900/30 to-black/90" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "power3.out" }}
          viewport={{ once: true }}
          className="mb-16 fade-in-stagger"
        >
          <span className="section-label">05 &mdash; Get Early Access</span>
          <motion.h2 
            className="text-6xl md:text-8xl font-bold font-orbitron mb-8 text-reveal"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-blue-400">Beta's</span>
            <br />
            <span className="text-teal-400">dropping soon.</span>
          </motion.h2>
          <p className="text-2xl md:text-3xl font-rajdhani text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Get early access to the <span className="text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded">tools</span>, 
            <span className="text-teal-400 font-bold bg-teal-400/10 px-2 py-1 rounded"> frameworks</span>, and 
            <span className="text-orange-400 font-bold bg-orange-400/10 px-2 py-1 rounded"> community</span> that will help you 
            engineer the life you actually want to live.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "back.out(1.7)" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto fade-in-stagger mb-20"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-10 py-8 bg-black/70 border-2 border-blue-500 neon-border rounded-2xl 
                             text-white placeholder-gray-400 focus:outline-none focus:border-teal-400
                             font-rajdhani text-2xl backdrop-blur-md transition-all duration-500
                             focus:shadow-[0_0_50px_rgba(0,194,203,0.6)] group-hover:border-blue-400/70"
                  required
                />
                <Mail className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-teal-400 transition-colors duration-300" size={28} />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 60px rgba(0, 102, 255, 0.8)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-8 bg-gradient-to-r from-blue-500 via-teal-400 to-orange-500 text-black 
                           font-bold rounded-2xl font-rajdhani text-2xl flex items-center justify-center gap-4
                           hover:from-blue-400 hover:via-teal-300 hover:to-orange-400 transition-all duration-500
                           shadow-[0_0_40px_rgba(0,102,255,0.4)] relative overflow-hidden group"
              >
                <span className="relative z-10">Get Early Access</span>
                <ChevronRight size={28} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "back.out(1.7)" }}
              className="py-16"
            >
              <motion.div 
                className="text-8xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6, repeat: 2 }}
              >
                🚀
              </motion.div>
              <h3 className="text-5xl font-orbitron text-teal-400 neon-glow mb-6">
                You're in!
              </h3>
              <p className="text-2xl font-rajdhani text-gray-300">
                We'll notify you when the beta launches.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Feature preview cards */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-stagger"
        >
          <motion.div 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 40px rgba(0, 102, 255, 0.3)',
              rotateY: 5
            }}
            className="bg-black/50 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-md 
                       relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="text-blue-400 mb-4 relative z-10"
            >
              <Sparkles size={48} className="neon-glow" />
            </motion.div>
            <h4 className="text-xl font-orbitron text-blue-400 mb-4 relative z-10">System Templates</h4>
            <p className="text-gray-400 font-rajdhani text-lg relative z-10">Pre-built frameworks for productivity, learning, and growth</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 40px rgba(0, 194, 203, 0.3)',
              rotateX: 5
            }}
            className="bg-black/50 border border-teal-500/20 rounded-2xl p-8 backdrop-blur-md 
                       relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ rotate: -360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="text-teal-400 mb-4 relative z-10"
            >
              <Zap size={48} className="neon-glow" />
            </motion.div>
            <h4 className="text-xl font-orbitron text-teal-400 mb-4 relative z-10">Performance Metrics</h4>
            <p className="text-gray-400 font-rajdhani text-lg relative z-10">Track and optimize your personal operating system</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 40px rgba(255, 107, 53, 0.3)',
              rotateY: -5
            }}
            className="bg-black/50 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-md 
                       relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="text-orange-400 mb-4 relative z-10"
            >
              <Target size={48} className="neon-glow" />
            </motion.div>
            <h4 className="text-xl font-orbitron text-orange-400 mb-4 relative z-10">Community Access</h4>
            <p className="text-gray-400 font-rajdhani text-lg relative z-10">Connect with other personal engineers and builders</p>
          </motion.div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 fade-in-stagger"
        >
          <p className="text-lg font-rajdhani text-gray-400 max-w-2xl mx-auto">
            Join thousands of engineers, creators, and builders who are taking control of their personal operating systems. 
            The future belongs to those who engineer it.
          </p>
        </motion.div>
      </div>

      {/* Floating background elements */}
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
          className="absolute top-20 left-20 w-16 h-16 border border-blue-400/30 rounded-full morph-bg"
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
          className="absolute bottom-32 right-32 w-20 h-20 border border-teal-400/30 morph-bg"
        />
        
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-12 h-12 border border-orange-400/30 morph-bg"
        />
      </div>
    </section>
  );
};

export default FinalCTASection;