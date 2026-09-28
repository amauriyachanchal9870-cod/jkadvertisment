import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';
import { SERVICES } from '../data/services';

export const Footer = () => {
  return (
    <footer className="bg-[#17231B] text-gray-300 pt-16 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B6B35]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F4C542]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-[#0B6B35] to-[#16A34A] rounded-3xl p-8 md:p-12 mb-16 text-white shadow-2xl relative overflow-hidden border border-white/15">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/20 text-[#F4C542] mb-3">
              <Sparkles size={13} />
              Take Your Brand To The Next Level
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Ready to grow your business with smart advertising?
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
              Connect with JS Advertisment Agency today for customized social media promotions, poster designs, video reels, and local marketing campaigns.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-[#0B6B35] hover:bg-[#F4C542] hover:text-[#17231B] transition-colors shadow-lg shadow-black/10 inline-flex items-center gap-2"
              >
                <span>Request a Free Quote</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-black/20 hover:bg-black/30 border border-white/30 text-white transition-colors inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
                <span className="w-2 h-2 rounded-full bg-[#F4C542]" />
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="large" />
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              JS Advertisment Agency is Firozabad's dedicated advertising, digital marketing, and research solutions agency. We deliver strategic social media promotion, Facebook ad boosting, creative poster design, video reels, and multi-channel messaging solutions.
            </p>

            {/* Facebook Connection Card */}
            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
                aria-label="Connect on Facebook"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-[#F4C542] transition-colors flex items-center gap-1">
                    Follow on Facebook
                    <ExternalLink size={12} />
                  </div>
                  <div className="text-[11px] text-gray-400">Join our business updates</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Services 1-5 (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-[#16A34A] pl-2.5">
              Digital Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services 6-9 + Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-[#F4C542] pl-2.5">
              Marketing & Media
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {SERVICES.slice(5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                  >
                    {service.shortTitle || service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <Link to="/about" className="hover:text-white">About Agency</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white">Our Work</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-[#0B6B35] pl-2.5">
              Office & Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#16A34A] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {BUSINESS_CONFIG.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={17} className="text-[#16A34A] shrink-0" />
                <div className="space-y-0.5">
                  <div>
                    <a 
                      href={`tel:${BUSINESS_CONFIG.phones[0].value}`} 
                      className="hover:text-white transition-colors"
                    >
                      {BUSINESS_CONFIG.phones[0].display}
                    </a>
                  </div>
                  <div>
                    <a 
                      href={`tel:${BUSINESS_CONFIG.phones[1].value}`} 
                      className="hover:text-white transition-colors"
                    >
                      {BUSINESS_CONFIG.phones[1].display}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={17} className="text-[#16A34A] shrink-0" />
                <a 
                  href={`mailto:${BUSINESS_CONFIG.email}`} 
                  className="hover:text-white transition-colors truncate"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-gray-400">
                <Clock size={16} className="text-[#F4C542] shrink-0" />
                <span>{BUSINESS_CONFIG.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">JS Advertisment Agency</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-400">
              <ShieldCheck size={14} className="text-[#16A34A]" />
              Firozabad, Uttar Pradesh, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
