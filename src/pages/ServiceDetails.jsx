import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  HelpCircle, 
  ShieldCheck, 
  Layers, 
  ArrowLeft 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { DynamicIcon } from '../components/IconMapper';
import { ContactForm } from '../components/ContactForm';
import { getServiceBySlug, SERVICES } from '../data/services';
import { getWhatsAppLink, BUSINESS_CONFIG } from '../data/business';

export const ServiceDetails = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // If service does not exist, redirect to /services
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get related service objects
  const relatedServices = service.related
    ? service.related.map(rSlug => getServiceBySlug(rSlug)).filter(Boolean)
    : SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <>
      <SEO 
        title={`${service.title} Services in Firozabad`}
        description={`${service.title} by JS Advertisment Agency in Firozabad. ${service.tagline} ${service.description}`}
      />

      <PageHeader
        badge="Service Details"
        title={service.title}
        description={service.tagline}
        breadcrumb={[
          { name: "Services", path: "/services" },
          { name: service.shortTitle || service.title }
        ]}
      />

      {/* Main Content & Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Main Column: Detailed Overview, Deliverables, Workflow (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Service Description Card */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B6B35]">
                  Comprehensive Service Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17231B] tracking-tight">
                  Why {service.title} Matters for Your Business
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Important Policy Notice (if any) */}
                {service.disclaimer && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3 mt-4">
                    <ShieldCheck size={20} className="text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Important Policy & Compliance Notice:</strong>
                      <p className="mt-0.5">{service.disclaimer}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Deliverables & Key Inclusions */}
              <div className="bg-[#F6F8F5] rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B6B35] text-white flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#17231B]">
                      What We Deliver
                    </h3>
                    <p className="text-xs text-gray-500">Key tangibles and strategic components included in this service</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.deliverables?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm text-xs sm:text-sm font-semibold text-gray-700">
                      <Check size={16} className="text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Features Checklist */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17231B]">
                  Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B6B35] shrink-0 mt-2" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How This Service Works (Step-by-Step Workflow) */}
              {service.workflow && (
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B6B35]">
                      Process & Execution
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#17231B] tracking-tight mt-1">
                      How We Execute {service.shortTitle || service.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.workflow.map((w, wIdx) => (
                      <div key={wIdx} className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-2">
                        <span className="text-xs font-extrabold text-[#F4C542] px-2 py-0.5 rounded bg-gray-900 inline-block">
                          Step {w.step}
                        </span>
                        <h4 className="text-sm font-bold text-[#17231B]">
                          {w.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {w.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Frequently Asked Questions for this Service */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-[#17231B] flex items-center gap-2">
                    <HelpCircle size={20} className="text-[#0B6B35]" />
                    Frequently Asked Questions
                  </h3>

                  <div className="space-y-3">
                    {service.faqs.map((faq, faqIdx) => (
                      <div key={faqIdx} className="p-5 rounded-2xl bg-[#F6F8F5] border border-gray-100">
                        <h4 className="text-sm font-bold text-[#17231B] mb-1.5">
                          {faq.q}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Quick CTA Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Quote Trigger Card */}
              <div className="bg-[#17231B] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-5 border border-white/10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#F4C542]">
                  <Sparkles size={12} />
                  Fast Agency Response
                </span>

                <h3 className="text-xl font-extrabold leading-tight">
                  Interested in {service.title}?
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Connect with our creative director for customized rates, campaign timelines, and sample reviews.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 transition-all"
                  >
                    <MessageCircle size={16} />
                    <span>Get Quote on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_CONFIG.phones[0].value}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-gray-200 bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Phone size={15} />
                    <span>Call: {BUSINESS_CONFIG.phones[0].display}</span>
                  </a>
                </div>
              </div>

              {/* Related Services Navigation */}
              {relatedServices.length > 0 && (
                <div className="bg-[#F6F8F5] rounded-3xl p-6 border border-gray-100 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-2">
                    Related Services
                  </h4>
                  <div className="space-y-2">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/services/${rel.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#0B6B35] hover:text-white group transition-all text-xs font-bold text-[#17231B] shadow-sm"
                      >
                        <span className="truncate">{rel.shortTitle || rel.title}</span>
                        <ArrowRight size={13} className="text-[#0B6B35] group-hover:text-white transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to all services */}
              <div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#0B6B35] transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>Back to All Services</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Embedded Contact Form for this specific service */}
      <section className="py-16 bg-[#F6F8F5] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm defaultService={service.title} />
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
