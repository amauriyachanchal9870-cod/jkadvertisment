import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';
import { DynamicIcon } from './IconMapper';
import { getWhatsAppLink } from '../data/business';

export const ServiceCard = ({ service, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: 0.45, 
        delay: (index % 3) * 0.1, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden card-hover-effect hover:border-[#0B6B35]/40"
    >
      {/* Dynamic Animated Top Shimmer Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 overflow-hidden"
        style={{ backgroundColor: service.accentColor || '#0B6B35' }}
      >
        <motion.div 
          className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
          animate={isHovered ? { x: ['-100%', '100%'] } : {}}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />
      </div>

      {/* Subtle Background Glow Orb on Hover */}
      <motion.div 
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          backgroundColor: service.accentColor ? `${service.accentColor}25` : 'rgba(11, 107, 53, 0.15)' 
        }}
      />

      <div className="relative z-10">
        {/* Header: Icon & Number Badge with Micro-Animations */}
        <div className="flex items-start justify-between mb-5">
          <motion.div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md shadow-[#0B6B35]/15 relative overflow-hidden"
            style={{ backgroundColor: service.accentColor || '#0B6B35' }}
            animate={isHovered ? { scale: 1.08, rotate: [0, -3, 3, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Shimmer sweep inside icon box */}
            <motion.div 
              className="absolute inset-0 bg-white/20 -skew-x-12"
              animate={isHovered ? { x: ['-120%', '120%'] } : { x: '-120%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <DynamicIcon name={service.icon} size={26} className="relative z-10" />
          </motion.div>

          <span className="text-[11px] font-black uppercase tracking-wider text-gray-300 group-hover:text-[#0B6B35] transition-colors bg-gray-50 group-hover:bg-[#0B6B35]/10 px-2.5 py-1 rounded-full">
            #{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-extrabold text-[#17231B] group-hover:text-[#0B6B35] transition-colors mb-2 leading-tight">
          {service.title}
        </h3>
        <p className="text-xs font-bold text-[#16A34A] mb-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
          {service.tagline}
        </p>

        {/* Short Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Key Features Preview (Top 3) with interactive check hover */}
        <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
          {service.features.slice(0, 3).map((feat, i) => (
            <motion.div 
              key={i} 
              className="flex items-start gap-2 text-xs text-gray-600 group-hover:text-gray-900 transition-colors"
              animate={isHovered ? { x: 2 } : { x: 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
            >
              <div className="w-4 h-4 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#16A34A] group-hover:text-white transition-colors duration-200">
                <Check size={11} strokeWidth={3} />
              </div>
              <span className="leading-snug">{feat}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action Buttons with Spring Taps */}
      <div className="pt-2 flex items-center gap-3 relative z-10">
        <Link
          to={`/services/${service.slug}`}
          className="flex-1 btn-shimmer inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#0B6B35] bg-[#0B6B35]/8 hover:bg-[#0B6B35] hover:text-white transition-all duration-200 group/btn shadow-sm"
        >
          <span>Learn More</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        <motion.a
          href={getWhatsAppLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.06 }}
          className="inline-flex items-center justify-center p-2.5 rounded-xl text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm shadow-[#25D366]/30 transition-all duration-200"
          title={`Get Quote for ${service.title} on WhatsApp`}
          aria-label={`Get Quote for ${service.title} on WhatsApp`}
        >
          <MessageCircle size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
