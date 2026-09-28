import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Tag } from 'lucide-react';

export const PortfolioCard = ({ item, onClick, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      onClick={() => onClick(item)}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
    >
      {/* Image Preview Container */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-[#0B6B35] shadow-sm backdrop-blur-sm">
            {item.category}
          </span>

          {item.badge && (
            <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#F4C542] text-[#17231B] shadow-sm">
              {item.badge}
            </span>
          )}
        </div>

        {/* Hover Action Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 text-[#0B6B35] text-xs font-bold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>View Details</span>
            <ExternalLink size={13} />
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold text-gray-400 block mb-1">
            {item.clientType}
          </span>
          <h3 className="text-base font-bold text-[#17231B] group-hover:text-[#0B6B35] transition-colors leading-snug line-clamp-2">
            {item.title}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span className="line-clamp-1">{item.deliverables?.[0] || 'Agency Creative'}</span>
          <span className="text-[#0B6B35] font-bold group-hover:underline">Explore →</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
