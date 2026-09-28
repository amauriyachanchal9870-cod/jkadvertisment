import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  MessageCircle, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { DynamicIcon } from '../components/IconMapper';
import { SERVICES } from '../data/services';
import { getWhatsAppLink } from '../data/business';

export const Services = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Services', count: SERVICES.length },
    { id: 'social', label: 'Social & Digital Ads', count: 2 },
    { id: 'creative', label: 'Design & Video', count: 3 },
    { id: 'outreach', label: 'Direct Messaging & Telecom', count: 4 },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (selectedFilter === 'social') {
      return ['social-media-marketing', 'facebook-advertising'].includes(service.id);
    }
    if (selectedFilter === 'creative') {
      return ['graphic-design', 'video-editing', 'photography-printing'].includes(service.id);
    }
    if (selectedFilter === 'outreach') {
      return ['bulk-sms', 'whatsapp-marketing', 'voice-call', 'toll-free-services'].includes(service.id);
    }
    return true;
  });

  return (
    <>
      <SEO 
        title="Advertising & Digital Marketing Services"
        description="Explore the complete spectrum of advertising solutions from JS Advertisment Agency: Social Media Management, Facebook Advertising, Graphic Design, Video Reels, Bulk SMS, WhatsApp Campaigns, Voice Calls, Toll-Free numbers, and Commercial Printing."
      />

      <PageHeader
        badge="Services Catalog"
        title="Comprehensive Advertising & Creative Solutions"
        description="From high-impact digital social campaigns to professional graphic artwork and multi-channel customer outreach — find the exact service your business needs to grow."
        breadcrumb={[{ name: "Services" }]}
      />

      <section className="py-16 md:py-24 bg-[#F6F8F5] relative overflow-hidden">
        {/* Animated background ambient glow orbs */}
        <motion.div 
          animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-96 h-96 bg-[#0B6B35]/8 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ y: [0, 18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#F4C542]/10 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Animated Category Filter Navigation */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors duration-200 flex items-center gap-2 ${
                    isActive ? 'text-white' : 'text-gray-600 hover:text-[#0B6B35] bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServicesPageTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#0B6B35] to-[#16A34A] rounded-xl shadow-md shadow-[#0B6B35]/25"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Services Vertical Stack with layout animations */}
          <motion.div layout className="space-y-10">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
                >
                  {/* Accent top stripe with shimmer animation */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 overflow-hidden"
                    style={{ backgroundColor: service.accentColor || '#0B6B35' }}
                  >
                    <motion.div 
                      className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Title, Icon & Description (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 cursor-pointer"
                          style={{ backgroundColor: service.accentColor || '#0B6B35' }}
                        >
                          <DynamicIcon name={service.icon} size={28} />
                        </motion.div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            Service #{String(index + 1).padStart(2, '0')}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17231B] tracking-tight group-hover:text-[#0B6B35] transition-colors">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-bold text-[#0B6B35] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                        {service.tagline}
                      </p>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Disclaimer if applicable (e.g. for Facebook Verification) */}
                      {service.disclaimer && (
                        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-2">
                          <ShieldCheck size={16} className="text-amber-700 shrink-0 mt-0.5" />
                          <span><strong>Policy Notice:</strong> {service.disclaimer}</span>
                        </div>
                      )}

                      {/* Action Triggers with Micro-Animations */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0B6B35] hover:bg-[#085027] transition-all shadow-sm hover:translate-x-0.5"
                        >
                          <span>View Full Service Details</span>
                          <ArrowRight size={14} />
                        </Link>

                        <motion.a
                          href={getWhatsAppLink(service.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileTap={{ scale: 0.94 }}
                          whileHover={{ scale: 1.04 }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-sm"
                        >
                          <MessageCircle size={15} />
                          <span>Get Quote on WhatsApp</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Right Column: Features & Deliverables (5 cols) */}
                    <div className="lg:col-span-5 bg-[#F6F8F5] p-5 sm:p-6 rounded-2xl border border-gray-100 space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-2">
                        What's Included:
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <motion.li 
                            key={fIdx} 
                            whileHover={{ x: 3 }}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={11} strokeWidth={3} />
                            </div>
                            <span className="leading-snug">{feat}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Services;
