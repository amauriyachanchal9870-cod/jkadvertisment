import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const PageHeader = ({ badge, title, description, breadcrumb = [] }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-white via-[#F6F8F5] to-[#F6F8F5] overflow-hidden border-b border-gray-100">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0B6B35]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-60 h-60 bg-[#F4C542]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
            <li>
              <Link to="/" className="hover:text-[#0B6B35] flex items-center gap-1 transition-colors">
                <Home size={13} />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumb.map((crumb, index) => (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-gray-400" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-[#0B6B35] transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="font-semibold text-[#17231B]">{crumb.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35] mb-4">
              <Sparkles size={13} />
              {badge}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17231B] tracking-tight leading-tight mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
