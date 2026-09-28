import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Premium JK Advertisement Brand Logo with modern JK monogram
 * and subtle advertising/growth signal symbol.
 */
export const Logo = ({ variant = 'default', size = 'default', className = '' }) => {
  const isLight = variant === 'light'; // For dark backgrounds (like footer)

  const sizeClasses = {
    small: 'h-8 text-base',
    default: 'h-10 text-lg md:text-xl',
    large: 'h-12 text-xl md:text-2xl'
  };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="JK Advertisement - Home"
    >
      {/* Monogram Symbol */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#0B6B35] to-[#16A34A] shadow-md shadow-[#0B6B35]/25 border border-white/20 group-hover:shadow-lg group-hover:shadow-[#0B6B35]/35 transition-all duration-300">
        <svg 
          viewBox="0 0 100 100" 
          className="w-7 h-7 text-white" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle outer accent arc */}
          <circle cx="50" cy="50" r="44" stroke="#F4C542" strokeWidth="3" strokeDasharray="10 8" opacity="0.6"/>
          {/* Monogram 'J' in White */}
          <path d="M28 26 H42 V58 C42 66 36 72 26 72 C22 72 18 70 16 68 L20 58 C22 59 24 60 26 60 C29 60 30 58 30 54 V26 Z" fill="#FFFFFF"/>
          {/* Monogram 'K' in Golden Accent */}
          <path d="M50 26 H62 V45 L76 26 H90 L70 50 L91 74 H77 L62 55 V74 H50 V26 Z" fill="#F4C542"/>
          {/* Advertising signal spark */}
          <circle cx="80" cy="28" r="4" fill="#FFFFFF"/>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5 font-extrabold tracking-tight">
          <span className={isLight ? 'text-white' : 'text-[#17231B]'}>
            JK
          </span>
          <span className="text-[#0B6B35] group-hover:text-[#16A34A] transition-colors">
            ADVERTISEMENT
          </span>
        </div>
        <span className={`text-[10px] uppercase tracking-wider font-semibold ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
          Smart Creative Solutions
        </span>
      </div>
    </Link>
  );
};

export default Logo;
