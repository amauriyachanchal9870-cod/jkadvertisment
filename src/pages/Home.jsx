import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Phone, 
  MessageCircle, 
  Share2, 
  Megaphone, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ContactForm } from '../components/ContactForm';
import { DynamicIcon } from '../components/IconMapper';
import { SERVICES } from '../data/services';
import { HOW_WE_WORK_STEPS, WHY_CHOOSE_US, GENERAL_FAQS } from '../data/agencyData';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';
import { PORTFOLIO_ITEMS } from '../data/portfolio';

export const Home = () => {
  const [activeServiceCategory, setActiveServiceCategory] = useState('all');

  return (
    <>
      <SEO 
        title="Smart Advertising & Creative Digital Solutions"
        description="JK Advertisement is a premier digital marketing and advertising agency in Firozabad. Facebook ad campaigns, social media management, creative design, video editing, bulk SMS, and WhatsApp marketing."
      />

      {/* =========================================================================
          HERO SECTION
          Headline: "Grow Your Business with Smart Advertising & Creative Digital Solutions"
          Supporting: "From social media marketing and Facebook advertising to creative design, video editing, and digital branding — JK Advertisement helps your business build a powerful online presence."
      ========================================================================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-white via-[#F6F8F5] to-[#F6F8F5]">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#0B6B35]/10 to-[#16A34A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#F4C542]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Copy & CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35] border border-[#0B6B35]/15 shadow-sm">
                <Sparkles size={14} className="text-[#16A34A]" />
                <span>Premier Advertising Agency • Firozabad</span>
              </div>

              {/* Exact Prompt Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#17231B] tracking-tight leading-[1.12]">
                Grow Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B6B35] via-[#16A34A] to-[#0B6B35]">
                  Smart Advertising
                </span>{" "}
                & Creative Digital Solutions
              </h1>

              {/* Exact Prompt Supporting Text */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From social media marketing and Facebook advertising to creative design, video editing, and digital branding — JK Advertisement helps your business build a powerful online presence.
              </p>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs font-semibold text-gray-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-[#16A34A]" />
                  Local Targeting in Firozabad & UP
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-[#16A34A]" />
                  Facebook Page & Ad Boosting
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-[#16A34A]" />
                  High-Impact Video Reels & Posts
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0B6B35] to-[#16A34A] shadow-lg shadow-[#0B6B35]/25 hover:shadow-xl hover:shadow-[#0B6B35]/35 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#17231B] bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight size={16} className="text-[#0B6B35]" />
                </Link>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-[#16A34A] bg-[#16A34A]/10 hover:bg-[#16A34A]/20 transition-colors"
                  aria-label="Chat directly on WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Creative Advertising Mockup Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Agency Visual Card */}
                <div className="relative bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=900&auto=format&fit=crop&q=80" 
                      alt="Digital marketing campaign planning" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F4C542] text-[#17231B] mb-1.5 inline-block">
                        Featured Campaign
                      </span>
                      <h4 className="text-base sm:text-lg font-bold">
                        Targeted Local Reach & Branding
                      </h4>
                      <p className="text-xs text-gray-300">
                        Smart social promotions for businesses across Uttar Pradesh
                      </p>
                    </div>
                  </div>

                  {/* Campaign Metrics Bar */}
                  <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-[#F6F8F5]">
                      <span className="block text-xs font-bold text-[#0B6B35]">Meta Ads</span>
                      <span className="text-[10px] text-gray-500">Sponsored Reach</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F6F8F5]">
                      <span className="block text-xs font-bold text-[#0B6B35]">Reels</span>
                      <span className="text-[10px] text-gray-500">Short Video</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F6F8F5]">
                      <span className="block text-xs font-bold text-[#0B6B35]">Creatives</span>
                      <span className="text-[10px] text-gray-500">HD Graphics</span>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: Facebook Boosting Live */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute -top-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100 flex items-center gap-3 hidden sm:flex"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                    <Megaphone size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#17231B]">Facebook Post Boosting</span>
                      <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">Targeted Local Engagement</span>
                  </div>
                </motion.div>

                {/* Floating Card 2: WhatsApp Conversion */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100 flex items-center gap-3 hidden sm:flex"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#17231B] block">Direct Customer Leads</span>
                    <span className="text-[10px] text-[#16A34A] font-semibold">Click-to-WhatsApp Flow</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION (Enhanced with Interactive Category Filter & Animations)
          Heading: "Everything Your Business Needs to Grow"
          Description: "Complete advertising, branding, and digital marketing solutions under one roof."
      ========================================================================= */}
      <section id="services-section" className="py-16 md:py-24 bg-[#F6F8F5] relative overflow-hidden">
        {/* Animated Ambient Floating Orbs in Background */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#0B6B35]/8 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 -right-20 w-96 h-96 bg-[#F4C542]/10 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with entrance motion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35] mb-3 shadow-sm border border-[#0B6B35]/15">
              <Sparkles size={13} className="text-[#16A34A] animate-spin" style={{ animationDuration: '8s' }} />
              Full-Spectrum Agency Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17231B] tracking-tight">
              Everything Your Business Needs to Grow
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
              Complete advertising, branding, and digital marketing solutions under one roof.
            </p>
          </motion.div>

          {/* Animated Interactive Service Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {[
              { id: 'all', label: 'All Services', count: SERVICES.length },
              { id: 'social', label: 'Social & Digital Ads', count: 2 },
              { id: 'creative', label: 'Design & Video', count: 3 },
              { id: 'outreach', label: 'Direct Messaging & Voice', count: 4 },
            ].map((tab) => {
              const isActive = activeServiceCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveServiceCategory(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive ? 'text-white' : 'text-gray-600 hover:text-[#0B6B35] bg-white border border-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeHomeServiceTab"
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

          {/* Service Cards Grid with Layout Animations */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {SERVICES.filter((service) => {
              if (activeServiceCategory === 'social') {
                return ['social-media-marketing', 'facebook-advertising'].includes(service.id);
              }
              if (activeServiceCategory === 'creative') {
                return ['graphic-design', 'video-editing', 'photography-printing'].includes(service.id);
              }
              if (activeServiceCategory === 'outreach') {
                return ['bulk-sms', 'whatsapp-marketing', 'voice-call', 'toll-free-services'].includes(service.id);
              }
              return true;
            }).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>

          {/* All Services Bottom CTA with hover bounce */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-14 text-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm bg-white text-[#0B6B35] hover:bg-[#0B6B35] hover:text-white border border-[#0B6B35]/20 shadow-md shadow-black/5 hover:shadow-xl hover:shadow-[#0B6B35]/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore In-Depth Deliverables For All 9 Services</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE JK ADVERTISEMENT
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35]">
                <ShieldCheck size={14} />
                Client-Centered Approach
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17231B] tracking-tight leading-tight">
                Why Choose <span className="text-[#0B6B35]">JK Advertisement</span> for Your Brand?
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                In today's competitive landscape, generic posters and random posts are not enough. We combine creative visual design, sharp audience targeting, and multi-channel outreach to deliver measurable business inquiries for your store, firm, or brand.
              </p>

              {/* Office Location Snapshot */}
              <div className="p-4 rounded-2xl bg-[#F6F8F5] border border-gray-100 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#0B6B35] text-white shrink-0 mt-0.5">
                  <DynamicIcon name="MapPin" size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B6B35]">
                    Local Roots in Firozabad
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-snug">
                    {BUSINESS_CONFIG.address.full}
                  </p>
                </div>
              </div>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#0B6B35] hover:text-[#16A34A] transition-colors"
                >
                  <span>Learn more about our agency philosophy</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Grid: 6 Value Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_US.map((item, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-[#F6F8F5] hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0B6B35]/10 text-[#0B6B35] flex items-center justify-center mb-4">
                    <DynamicIcon name={item.icon} size={22} />
                  </div>
                  <h3 className="text-base font-bold text-[#17231B] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK (Animated 4-Step Process)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#17231B] text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B6B35]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#F4C542] mb-3">
              <Sparkles size={13} />
              Our Proven Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              How We Work
            </h2>
            <p className="text-gray-400 text-base mt-2">
              A transparent, structured four-step journey from initial brief to successful execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_WORK_STEPS.map((step, index) => (
              <div 
                key={step.number}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#F4C542]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0B6B35] text-white flex items-center justify-center">
                      <DynamicIcon name={step.icon} size={20} />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A34A] block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PORTFOLIO PREVIEW
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35] mb-3">
                <Sparkles size={13} />
                Creative Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17231B] tracking-tight">
                Our Work & Creative Concepts
              </h2>
              <p className="text-gray-500 text-sm mt-1 max-w-xl">
                Explore samples of festive creatives, ad banners, short video reels, and branding kits crafted for regional businesses.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-[#0B6B35] bg-[#0B6B35]/10 hover:bg-[#0B6B35] hover:text-white transition-colors shrink-0"
            >
              <span>View All Portfolio Work</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_ITEMS.slice(0, 4).map((item, index) => (
              <Link 
                key={item.id}
                to="/portfolio"
                className="group bg-[#F6F8F5] rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase bg-white/95 text-[#0B6B35] shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-semibold block mb-0.5">
                      {item.clientType}
                    </span>
                    <h4 className="text-sm font-bold text-[#17231B] group-hover:text-[#0B6B35] transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#0B6B35] mt-3 block">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FACEBOOK BUSINESS PAGE HIGHLIGHT (Verified Link Integration)
      ========================================================================= */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4C542]">
                  Official Facebook Business Page
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                  Follow JK Advertisement on Facebook
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/80 mt-1 max-w-xl">
                  Stay updated with our newest campaign designs, festival creative announcements, and digital marketing insights.
                </p>
              </div>
            </div>

            <a
              href={BUSINESS_CONFIG.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-blue-900 hover:bg-[#F4C542] hover:text-[#17231B] transition-colors shadow-lg shrink-0 inline-flex items-center gap-2"
            >
              <span>Visit Facebook Page</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F6F8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35] mb-3">
              <DynamicIcon name="HelpCircle" size={13} />
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17231B] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Everything you need to know about working with JK Advertisement.
            </p>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-base font-bold text-[#17231B] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT & ENQUIRY SECTION ON HOME
      ========================================================================= */}
      <section id="contact-section" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Info & Direct Triggers */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35]">
                <Phone size={13} />
                Get in Touch Today
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17231B] tracking-tight">
                Let's Discuss Your Advertising Needs
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Whether you need a full social media management package, targeted Facebook boost campaigns, or quick festival banners, our team is ready to assist.
              </p>

              {/* Direct Action Cards */}
              <div className="space-y-3.5 pt-2">
                {/* Phone Call Card */}
                <div className="p-4 rounded-2xl bg-[#F6F8F5] border border-gray-100 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#0B6B35] text-white shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Call Us Directly
                    </span>
                    <div className="text-sm font-bold text-[#17231B] mt-0.5 space-y-0.5">
                      <div>
                        <a href={`tel:${BUSINESS_CONFIG.phones[0].value}`} className="hover:text-[#0B6B35] transition-colors">
                          {BUSINESS_CONFIG.phones[0].display}
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${BUSINESS_CONFIG.phones[1].value}`} className="hover:text-[#0B6B35] transition-colors">
                          {BUSINESS_CONFIG.phones[1].display}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Card */}
                <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#25D366] text-white shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16A34A]">
                      Fast WhatsApp Chat
                    </span>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Chat directly with our creative team for quick queries & pricing.
                    </p>
                    <a 
                      href={getWhatsAppLink()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B6B35] mt-1 hover:underline"
                    >
                      Start WhatsApp Conversation →
                    </a>
                  </div>
                </div>

                {/* Office Address Card */}
                <div className="p-4 rounded-2xl bg-[#F6F8F5] border border-gray-100 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#17231B] text-white shrink-0">
                    <DynamicIcon name="MapPin" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Agency Address
                    </span>
                    <p className="text-xs text-gray-700 font-medium mt-0.5 leading-snug">
                      {BUSINESS_CONFIG.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
