import React from 'react';

export const PageLoader = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="relative w-16 h-16">
        <div className="w-16 h-16 rounded-full border-4 border-[#0B6B35]/20 border-t-[#0B6B35] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#F4C542] animate-pulse" />
        </div>
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#0B6B35] animate-pulse">
        Loading JS Advertisment Agency...
      </p>
    </div>
  );
};

export default PageLoader;
