import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, MessageCircle } from 'lucide-react';
import { DynamicIcon } from './IconMapper';
import { getWhatsAppLink } from '../data/business';

export const ServiceCard = ({ service, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Top Accent Gradient Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 opacity-80 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: service.accentColor || '#0B6B35' }}
      />

      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-start justify-between mb-5">
          <div 
            className="w-13 h-13 rounded-2xl flex items-center justify-center p-3 text-white shadow-md transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: service.accentColor || '#0B6B35' }}
          >
            <DynamicIcon name={service.icon} size={24} />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#0B6B35] transition-colors">
            #{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-[#17231B] group-hover:text-[#0B6B35] transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-xs font-semibold text-[#16A34A] mb-3">
          {service.tagline}
        </p>

        {/* Short Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Key Features Preview (Top 3) */}
        <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
          {service.features.slice(0, 3).map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
              <Check size={14} className="text-[#16A34A] shrink-0 mt-0.5" />
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex items-center gap-3">
        <Link
          to={`/services/${service.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#0B6B35] bg-[#0B6B35]/8 hover:bg-[#0B6B35] hover:text-white transition-all duration-200"
        >
          <span>Learn More</span>
          <ArrowRight size={14} />
        </Link>

        <a
          href={getWhatsAppLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2.5 rounded-xl text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm transition-all duration-200 hover:scale-105"
          title={`Get Quote for ${service.title} on WhatsApp`}
          aria-label={`Get Quote for ${service.title} on WhatsApp`}
        >
          <MessageCircle size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
