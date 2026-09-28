import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SitePreloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 300);
          return 100;
        }
        // Random incremental speed for realistic loading feel
        const diff = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!isDone && (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 bg-[#17231B] text-white flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Ambient luminous glow background */}
          <div className="absolute w-96 h-96 bg-[#0B6B35]/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute w-64 h-64 bg-[#F4C542]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Animated Logo Monogram */}
            <motion.div
              animate={{ 
                scale: [0.95, 1.05, 0.95],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0B6B35] to-[#16A34A] p-4 shadow-2xl shadow-[#0B6B35]/50 border border-white/20 mb-6 flex items-center justify-center"
            >
              <svg 
                viewBox="0 0 100 100" 
                className="w-12 h-12 text-white" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="44" stroke="#F4C542" strokeWidth="3" strokeDasharray="10 8" opacity="0.8"/>
                <path d="M28 26 H42 V58 C42 66 36 72 26 72 C22 72 18 70 16 68 L20 58 C22 59 24 60 26 60 C29 60 30 58 30 54 V26 Z" fill="#FFFFFF"/>
                <path d="M50 26 H62 V45 L76 26 H90 L70 50 L91 74 H77 L62 55 V74 H50 V26 Z" fill="#F4C542"/>
                <circle cx="80" cy="28" r="4" fill="#FFFFFF"/>
              </svg>
            </motion.div>

            {/* Agency Brand Name with Glow */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1 mb-8"
            >
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center justify-center gap-2">
                <span>JK</span>
                <span className="text-[#16A34A]">ADVERTISEMENT</span>
              </h1>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F4C542]">
                Smart Advertising & Creative Solutions
              </p>
            </motion.div>

            {/* Glowing Animated Loading Bar */}
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5 border border-white/10 mb-4 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0B6B35] via-[#16A34A] to-[#F4C542] rounded-full shadow-lg shadow-[#16A34A]/50"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <div className="flex items-center justify-between w-full text-xs font-mono font-bold text-gray-400">
              <span className="text-[#16A34A] animate-pulse">Initializing Creative Suite...</span>
              <span className="text-white text-sm">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SitePreloader;
