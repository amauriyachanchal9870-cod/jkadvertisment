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
            {/* Animated Official Emblem Logo */}
            <motion.div
              animate={{ 
                scale: [0.95, 1.05, 0.95],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-24 h-24 rounded-full overflow-hidden shadow-2xl shadow-[#0B6B35]/60 border-2 border-[#16A34A] mb-6 flex items-center justify-center p-0.5 bg-white"
            >
              <img
                src="/images/logo.png"
                alt="JK Advertisment Agency"
                className="w-full h-full object-cover rounded-full"
              />
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
                <span className="text-[#16A34A]">ADVERTISMENT</span>
                <span className="text-[#F4C542] text-xs font-bold px-1.5 py-0.5 rounded bg-white/10 border border-white/20">AGENCY</span>
              </h1>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F4C542]">
                Digital, Social Media & Research Solutions
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
