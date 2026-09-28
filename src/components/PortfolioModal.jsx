import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles, MessageCircle, ExternalLink, Tag } from 'lucide-react';
import { getWhatsAppLink } from '../data/business';

export const PortfolioModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>

          {/* Image & Header */}
          <div className="relative h-64 sm:h-80 bg-gray-900 shrink-0">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#16A34A] text-white">
                  {item.category}
                </span>
                {item.badge && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F4C542] text-[#17231B]">
                    {item.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Context: {item.clientType}
              </p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                Project Overview
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.summary}
              </p>
            </div>

            {/* Deliverables & Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-gray-100">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Key Deliverables
                </h4>
                <ul className="space-y-1.5">
                  {item.deliverables?.map((del, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                      <Check size={14} className="text-[#16A34A]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.toolsUsed?.map((tool, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Results / Intent */}
            {item.results && (
              <div className="p-4 rounded-2xl bg-[#0B6B35]/5 border border-[#0B6B35]/15 text-xs text-gray-700">
                <span className="font-bold text-[#0B6B35] block mb-1">
                  Strategic Objective:
                </span>
                {item.results}
              </div>
            )}

            {/* CTA action in modal */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100">
              <span className="text-xs text-gray-500">
                Want a similar creative design or campaign for your business?
              </span>
              <a
                href={getWhatsAppLink(`Project Inquiry: ${item.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle size={15} />
                <span>Enquire About Similar Work</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PortfolioModal;
