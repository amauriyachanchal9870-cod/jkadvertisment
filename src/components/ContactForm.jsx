import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  MessageCircle, 
  AlertCircle, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2,
  Phone
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { getWhatsAppLink, getMailtoLink, BUSINESS_CONFIG } from '../data/business';

export const ContactForm = ({ defaultService = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    service: defaultService || '',
    budget: '',
    requirement: ''
  });

  const [errors, setErrors] = useState({});
  const [redirectNotice, setRedirectNotice] = useState(null);

  const budgetRanges = [
    "Under ₹5,000",
    "₹5,000 – ₹15,000",
    "₹15,000 – ₹30,000",
    "₹30,000 – ₹50,000",
    "₹50,000+ (Custom Scope)"
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your 10-digit phone number.";
    } else {
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      if (!/^\+?[0-9]{10,13}$/.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid phone number (10 digits).";
      }
    }

    if (formData.email.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select the service you are interested in.";
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = "Please describe your project or enquiry requirements.";
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = "Please provide a little more detail (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (redirectNotice) {
      setRedirectNotice(null);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setRedirectNotice({
      channel: 'WhatsApp',
      message: 'Preparing your enquiry... You will be redirected to WhatsApp to send your message directly to JK Advertisement.'
    });

    const url = getWhatsAppLink(null, formData);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setRedirectNotice({
      channel: 'Email',
      message: 'Opening your email application... You can review and hit send to deliver your enquiry directly to jsadvertisment@gmail.com.'
    });

    const url = getMailtoLink(null, formData);
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0B6B35]/10 text-[#0B6B35] mb-2">
          <Sparkles size={13} />
          Direct Agency Enquiry
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17231B] tracking-tight">
          Let's Plan Your Advertising Campaign
        </h3>
        <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
          Fill in your requirement below. You can send your enquiry instantly via <strong>WhatsApp</strong> or <strong>Email</strong> with no login required.
        </p>
      </div>

      <form className="space-y-5" noValidate>
        {/* Row 1: Name & Business */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17231B] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                errors.name 
                  ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                  : 'border-gray-200 focus:border-[#0B6B35] focus:ring-[#0B6B35]/20 bg-[#F6F8F5]/60'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Business / Shop Name <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="e.g. Kumar Glass Works"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#17231B] placeholder-gray-400 focus:outline-none focus:border-[#0B6B35] focus:ring-2 focus:ring-[#0B6B35]/20 bg-[#F6F8F5]/60 transition-all"
            />
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9837436607"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17231B] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                errors.phone 
                  ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                  : 'border-gray-200 focus:border-[#0B6B35] focus:ring-[#0B6B35]/20 bg-[#F6F8F5]/60'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Email Address <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. yourname@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17231B] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                errors.email 
                  ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                  : 'border-gray-200 focus:border-[#0B6B35] focus:ring-[#0B6B35]/20 bg-[#F6F8F5]/60'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Service & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Interested Service <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17231B] focus:outline-none focus:ring-2 transition-all ${
                errors.service 
                  ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                  : 'border-gray-200 focus:border-[#0B6B35] focus:ring-[#0B6B35]/20 bg-[#F6F8F5]/60'
              }`}
            >
              <option value="">Select a service...</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Complete Agency Retainer / Custom Package">
                Complete Agency Retainer / Custom Package
              </option>
            </select>
            {errors.service && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.service}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Budget Range <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#17231B] focus:outline-none focus:border-[#0B6B35] focus:ring-2 focus:ring-[#0B6B35]/20 bg-[#F6F8F5]/60 transition-all"
            >
              <option value="">Select estimated budget...</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label htmlFor="requirement" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Project Requirements / Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="requirement"
            name="requirement"
            rows={4}
            required
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Tell us about your business, target audience, preferred marketing dates, or specific promotional materials needed..."
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17231B] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-y ${
              errors.requirement 
                ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                : 'border-gray-200 focus:border-[#0B6B35] focus:ring-[#0B6B35]/20 bg-[#F6F8F5]/60'
            }`}
          />
          {errors.requirement && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.requirement}
            </p>
          )}
        </div>

        {/* Dynamic Redirection Notice */}
        <AnimatePresence>
          {redirectNotice && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3"
            >
              <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Redirecting to {redirectNotice.channel}:</strong>
                <p className="mt-0.5 text-amber-800 leading-relaxed">{redirectNotice.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Actions */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle size={18} />
            <span>Send Enquiry on WhatsApp</span>
            <ExternalLink size={14} className="opacity-70" />
          </button>

          <button
            type="button"
            onClick={handleEmailSubmit}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#0B6B35] hover:bg-[#085027] shadow-lg shadow-[#0B6B35]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail size={18} />
            <span>Send Enquiry via Email</span>
            <ExternalLink size={14} className="opacity-70" />
          </button>
        </div>

        {/* Transparent Static Disclaimer */}
        <p className="text-[11px] text-gray-500 text-center leading-normal pt-2">
          🔒 Your details are not stored on external databases or shared with third parties. Clicking either button opens WhatsApp or your mail app with your prefilled details to submit directly.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
