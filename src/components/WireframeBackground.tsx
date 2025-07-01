import React from 'react';
import { motion } from 'framer-motion';

const WireframeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="wireframe-bg w-full h-full" />
      <div className="neural-network" />
      
      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border border-blue-500 opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-16 h-16 border border-teal-400 opacity-15"
        animate={{
          rotate: -360,
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/3 w-24 h-24 border border-orange-500 opacity-10"
        animate={{
          rotate: 360,
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default WireframeBackground;