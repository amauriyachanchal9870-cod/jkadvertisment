import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  ArrowRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';
import { SERVICES } from '../data/services';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';
import { DynamicIcon } from './IconMapper';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Scroll detection for sticky shadow/glass background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setMobileServicesExpanded(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Notification / Quick Contact Strip */}
      <div className="bg-[#17231B] text-gray-300 text-xs py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
              Firozabad's Premier Advertising & Digital Agency
            </span>
            <span className="text-gray-500">|</span>
            <a 
              href={`tel:${BUSINESS_CONFIG.phones[0].value}`} 
              className="flex items-center gap-1 hover:text-[#F4C542] transition-colors"
            >
              <Phone size={13} className="text-[#16A34A]" />
              {BUSINESS_CONFIG.phones[0].display}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={BUSINESS_CONFIG.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#F4C542] transition-colors group"
              aria-label="Visit JK Advertisement on Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#16A34A] group-hover:text-[#F4C542]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook Page</span>
              <ExternalLink size={11} className="opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-sm py-2.5' 
            : 'bg-white/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.name} 
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                          location.pathname.startsWith('/services')
                            ? 'text-[#0B6B35] bg-[#0B6B35]/8'
                            : 'text-[#17231B] hover:text-[#0B6B35] hover:bg-black/5'
                        }`}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                      >
                        {link.name}
                        <ChevronDown 
                          size={15} 
                          className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#0B6B35]' : ''}`} 
                        />
                      </button>

                      {/* Mega Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 mt-1 grid grid-cols-2 gap-2 z-50"
                          >
                            <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between px-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-[#0B6B35]">
                                Agency Services & Solutions
                              </span>
                              <Link 
                                to="/services" 
                                className="text-xs font-semibold text-gray-500 hover:text-[#0B6B35] flex items-center gap-1"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                View All ({SERVICES.length})
                                <ArrowRight size={12} />
                              </Link>
                            </div>

                            {SERVICES.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                onClick={() => setIsServicesOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F6F8F5] transition-all group"
                              >
                                <div className="p-2 rounded-lg bg-[#0B6B35]/10 text-[#0B6B35] group-hover:bg-[#0B6B35] group-hover:text-white transition-colors shrink-0 mt-0.5">
                                  <DynamicIcon name={service.icon} size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-[#17231B] group-hover:text-[#0B6B35] transition-colors truncate">
                                    {service.shortTitle || service.title}
                                  </div>
                                  <p className="text-xs text-gray-500 line-clamp-1">
                                    {service.tagline}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? 'text-[#0B6B35] bg-[#0B6B35]/8'
                          : 'text-[#17231B] hover:text-[#0B6B35] hover:bg-black/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A] bg-[#16A34A]/10 hover:bg-[#16A34A]/20 px-3 py-2 rounded-xl transition-colors"
                title="Chat on WhatsApp"
              >
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                Quick WhatsApp
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0B6B35] to-[#16A34A] text-white shadow-md shadow-[#0B6B35]/25 hover:shadow-lg hover:shadow-[#0B6B35]/35 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
              >
                <span>Get a Free Quote</span>
                <Sparkles size={15} className="text-[#F4C542]" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#16A34A] bg-[#16A34A]/10 hover:bg-[#16A34A]/20"
                aria-label="Open WhatsApp chat"
              >
                <DynamicIcon name="MessageCircle" size={20} />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#17231B] hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B6B35]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <Logo size="small" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100"
                  aria-label="Close navigation drawer"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="p-5 space-y-2 flex-1">
                <NavLink
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base ${
                      isActive ? 'bg-[#0B6B35]/10 text-[#0B6B35]' : 'text-[#17231B] hover:bg-gray-50'
                    }`
                  }
                >
                  Home
                  <ArrowRight size={16} className="text-gray-400" />
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base ${
                      isActive ? 'bg-[#0B6B35]/10 text-[#0B6B35]' : 'text-[#17231B] hover:bg-gray-50'
                    }`
                  }
                >
                  About Us
                  <ArrowRight size={16} className="text-gray-400" />
                </NavLink>

                {/* Services Collapsible in Mobile */}
                <div>
                  <button
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base text-[#17231B] hover:bg-gray-50"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-500 transition-transform ${
                        mobileServicesExpanded ? 'rotate-180 text-[#0B6B35]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 pr-1 py-1 space-y-1 overflow-hidden"
                      >
                        <Link
                          to="/services"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-extrabold uppercase text-[#0B6B35] hover:underline"
                        >
                          → View All Services Overview
                        </Link>
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:text-[#0B6B35] rounded-lg hover:bg-[#F6F8F5]"
                          >
                            <DynamicIcon name={s.icon} size={15} className="text-[#0B6B35]" />
                            <span className="truncate">{s.shortTitle || s.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink
                  to="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base ${
                      isActive ? 'bg-[#0B6B35]/10 text-[#0B6B35]' : 'text-[#17231B] hover:bg-gray-50'
                    }`
                  }
                >
                  Our Work
                  <ArrowRight size={16} className="text-gray-400" />
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base ${
                      isActive ? 'bg-[#0B6B35]/10 text-[#0B6B35]' : 'text-[#17231B] hover:bg-gray-50'
                    }`
                  }
                >
                  Contact Us
                  <ArrowRight size={16} className="text-gray-400" />
                </NavLink>

                {/* Facebook Link in Mobile Menu */}
                <a
                  href={BUSINESS_CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base text-blue-600 bg-blue-50/70"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Visit Facebook Page
                  </span>
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-5 border-t border-gray-100 bg-[#F6F8F5]/60 space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#0B6B35] to-[#16A34A] shadow-md shadow-[#0B6B35]/25"
                >
                  <span>Get a Free Quote</span>
                  <Sparkles size={16} className="text-[#F4C542]" />
                </Link>

                <a
                  href={`tel:${BUSINESS_CONFIG.phones[0].value}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-gray-700 bg-white border border-gray-200"
                >
                  <Phone size={14} className="text-[#0B6B35]" />
                  Call: {BUSINESS_CONFIG.phones[0].display}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
