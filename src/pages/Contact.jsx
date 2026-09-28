import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ExternalLink,
  ShieldCheck 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';

export const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Phone, WhatsApp & Office in Firozabad"
        description="Contact JS Advertisment Agency in Firozabad, Uttar Pradesh. Call +91-9837436607 or +91-7042497485, chat on WhatsApp, or email jsadvertisment@gmail.com for advertising and digital marketing services."
      />

      <PageHeader
        badge="Contact Us"
        title="Get in Touch with JS Advertisment Agency"
        description="Have a question or ready to launch your advertising campaign? Reach out to our team in Firozabad via phone, WhatsApp, email, or send your requirement below."
        breadcrumb={[{ name: "Contact Us" }]}
      />

      {/* Main Two-Column Contact Section */}
      <section className="py-16 md:py-24 bg-[#F6F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Verified Agency Details & Direct Communication Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Agency Direct Cards */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B6B35]">
                    Official Communications
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#17231B] mt-1">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Reach our founders and creative coordinators directly during business hours.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Phone Contacts (Click to Call) */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F6F8F5] border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-[#0B6B35] text-white flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                        Phone (Click to Call)
                      </span>
                      <div className="space-y-1">
                        <div>
                          <a 
                            href={`tel:${BUSINESS_CONFIG.phones[0].value}`}
                            className="text-sm font-bold text-[#17231B] hover:text-[#0B6B35] transition-colors"
                          >
                            {BUSINESS_CONFIG.phones[0].display} <span className="text-[10px] text-[#16A34A] font-semibold">(Primary)</span>
                          </a>
                        </div>
                        <div>
                          <a 
                            href={`tel:${BUSINESS_CONFIG.phones[1].value}`}
                            className="text-sm font-bold text-[#17231B] hover:text-[#0B6B35] transition-colors"
                          >
                            {BUSINESS_CONFIG.phones[1].display}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Official WhatsApp Chat */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#16A34A] block mb-0.5">
                        Official WhatsApp
                      </span>
                      <p className="text-xs text-gray-600 mb-2">
                        Get fast quotes, send sample references, and chat directly.
                      </p>
                      <a 
                        href={getWhatsAppLink()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-sm"
                      >
                        <span>Open WhatsApp Chat</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Email (mailto) */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F6F8F5] border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                        Official Email Address
                      </span>
                      <a 
                        href={`mailto:${BUSINESS_CONFIG.email}`}
                        className="text-sm font-bold text-[#17231B] hover:text-[#0B6B35] transition-colors truncate block"
                      >
                        {BUSINESS_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F6F8F5] border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-[#17231B] text-white flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                        Agency Office Address
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
                        {BUSINESS_CONFIG.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-xs text-gray-600">
                    <Clock size={16} className="text-[#F4C542] shrink-0" />
                    <span><strong>Hours:</strong> {BUSINESS_CONFIG.workingHours}</span>
                  </div>
                </div>

                {/* Facebook Integration Card */}
                <div className="pt-2 border-t border-gray-100">
                  <a
                    href={BUSINESS_CONFIG.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/80 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-blue-900 group-hover:text-blue-700">
                          Visit JS Advertisment Agency on Facebook
                        </div>
                        <div className="text-[11px] text-blue-600">Connect with our business page</div>
                      </div>
                    </div>
                    <ExternalLink size={15} className="text-blue-500" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* Interactive Google Map Location */}
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-card overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-[#0B6B35]" />
                <h3 className="text-lg font-bold text-[#17231B]">
                  Office Location Map • Firozabad, UP
                </h3>
              </div>
              <span className="text-xs text-gray-500 hidden sm:inline">
                Dwarkapuri, Kotla Road, Firozabad – 283203
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[21/9] sm:aspect-[24/9] bg-gray-100 border border-gray-200">
              <iframe
                title="JS Advertisment Agency Location Map"
                src={`https://maps.google.com/maps?q=${BUSINESS_CONFIG.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
