import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Brand Logo with circular emblem image and updated brand name:
 * JK Advertisment Agency
 */
export const Logo = ({ variant = 'default', size = 'default', className = '' }) => {
  const isLight = variant === 'light'; // For dark backgrounds (like footer)

  const emblemSizes = {
    small: 'w-8 h-8',
    default: 'w-10 h-10 md:w-11 md:h-11',
    large: 'w-13 h-13 md:w-14 md:h-14'
  };

  const titleSizes = {
    small: 'text-sm',
    default: 'text-base md:text-lg',
    large: 'text-lg md:text-xl'
  };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="JK Advertisment Agency - Home"
    >
      {/* Official Emblem Logo Image with Hover Pulse & Glow */}
      <div className={`relative rounded-full overflow-hidden shrink-0 shadow-md shadow-[#0B6B35]/25 border border-[#0B6B35]/30 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#0B6B35]/40 transition-all duration-300 ${emblemSizes[size] || emblemSizes.default}`}>
        <img 
          src="/images/logo.png" 
          alt="JK Advertisment Agency Logo" 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <div className={`flex items-center flex-wrap gap-1 font-extrabold tracking-tight ${titleSizes[size] || titleSizes.default}`}>
          <span className={isLight ? 'text-white' : 'text-[#17231B]'}>
            JK
          </span>
          <span className="text-[#0B6B35] group-hover:text-[#16A34A] transition-colors">
            ADVERTISMENT
          </span>
          <span className="text-[#F4C542] text-[11px] md:text-xs font-black uppercase px-1.5 py-0.5 rounded bg-[#17231B] text-white">
            AGENCY
          </span>
        </div>
        <span className={`text-[10px] uppercase tracking-wider font-semibold ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
          Digital & Research Solutions
        </span>
      </div>
    </Link>
  );
};

export default Logo;
