import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  return (
    <>
      <SEO 
        title="Advertising & Digital Marketing Services"
        description="Explore the complete spectrum of advertising solutions from JK Advertisement: Social Media Management, Facebook Advertising, Graphic Design, Video Reels, Bulk SMS, WhatsApp Campaigns, Voice Calls, Toll-Free numbers, and Commercial Printing."
      />

      <PageHeader
        badge="Services Catalog"
        title="Comprehensive Advertising & Creative Solutions"
        description="From high-impact digital social campaigns to professional graphic artwork and multi-channel customer outreach — find the exact service your business needs to grow."
        breadcrumb={[{ name: "Services" }]}
      />

      <section className="py-16 md:py-24 bg-[#F6F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Detailed Services Vertical Stack */}
          <div className="space-y-12">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent top stripe */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: service.accentColor || '#0B6B35' }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Title, Icon & Description (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
                        style={{ backgroundColor: service.accentColor || '#0B6B35' }}
                      >
                        <DynamicIcon name={service.icon} size={28} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Service #{String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17231B] tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-[#0B6B35]">
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

                    {/* Action Triggers */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0B6B35] hover:bg-[#085027] transition-colors shadow-sm"
                      >
                        <span>View Full Service Details</span>
                        <ArrowRight size={14} />
                      </Link>

                      <a
                        href={getWhatsAppLink(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-sm"
                      >
                        <MessageCircle size={15} />
                        <span>Get Quote on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Features & Deliverables (5 cols) */}
                  <div className="lg:col-span-5 bg-[#F6F8F5] p-5 sm:p-6 rounded-2xl border border-gray-100 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-2">
                      What's Included:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <Check size={16} className="text-[#16A34A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;
