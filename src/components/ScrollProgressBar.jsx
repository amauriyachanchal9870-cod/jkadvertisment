import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Global Top Scroll Progress Bar with Brand Gradient
 */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B6B35] via-[#16A34A] to-[#F4C542] origin-left z-50 shadow-sm shadow-[#16A34A]/30"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
