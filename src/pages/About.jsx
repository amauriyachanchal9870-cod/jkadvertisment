import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';
import { SERVICES } from '../data/services';
import { DynamicIcon } from '../components/IconMapper';

export const About = () => {
  const pillars = [
    {
      title: "Creative Advertising",
      desc: "Distinctive, thumb-stopping design ideas that capture attention on crowded digital feeds.",
      icon: "Sparkles"
    },
    {
      title: "Digital Visibility",
      desc: "Putting your business directly in front of targeted local customers across Firozabad and UP.",
      icon: "Target"
    },
    {
      title: "Social Media Marketing",
      desc: "Continuous brand building, active post publishing, and targeted Facebook and Instagram engagement.",
      icon: "Share2"
    },
    {
      title: "Branding & Visual Identity",
      desc: "Professional logos, color schemes, outdoor banners, and corporate presentation materials.",
      icon: "Palette"
    },
    {
      title: "Business Communication",
      desc: "Direct outreach through official WhatsApp business messaging, Bulk SMS, and voice broadcasting.",
      icon: "MessageSquare"
    },
    {
      title: "Promotional Content Creation",
      desc: "High-retention video reels, festival greetings, seasonal discount posters, and photo shoots.",
      icon: "Video"
    }
  ];

  return (
    <>
      <SEO 
        title="About Us | JS Advertisment Agency"
        description="Learn about JS Advertisment Agency, a premier advertising and digital marketing agency based in Firozabad, Uttar Pradesh specializing in social media marketing, branding, and promotional creatives."
      />

      <PageHeader
        badge="About The Agency"
        title="Building Meaningful Visibility for Your Business"
        description="JS Advertisment Agency is a full-service advertising and digital marketing agency based in Firozabad, Uttar Pradesh, dedicated to empowering local businesses with creative marketing and modern digital strategies."
        breadcrumb={[{ name: "About Us" }]}
      />

      {/* Agency Introduction & Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35]">
                <HeartHandshake size={14} />
                Agency Introduction
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17231B] tracking-tight leading-tight">
                Crafting Smart Campaigns for Forward-Thinking Businesses
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Operating from the industrial and commercial hub of Firozabad, <strong>JS Advertisment Agency</strong> helps retail shops, manufacturers, educational institutions, service providers, and emerging brands establish an authoritative presence online and offline.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe that great advertising isn't just about flashy graphics — it is about connecting real business offerings to customers who need them. Whether through a precisely targeted Facebook boost campaign, high-converting WhatsApp message, or high-definition Instagram reel, our focus is always on driving commercial interest and customer inquiries.
              </p>

              {/* Working Philosophy Box */}
              <div className="p-6 rounded-3xl bg-[#F6F8F5] border-l-4 border-[#0B6B35] space-y-2">
                <h4 className="text-base font-bold text-[#17231B]">
                  Our Working Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  "Clarity over complexity. Honest service coordination, tailored local strategy, and creative execution that respects the client's budget and target market."
                </p>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&auto=format&fit=crop&q=80"
                  alt="JS Advertisment Agency creative workspace"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#16A34A] text-white inline-block mb-2">
                    Firozabad, Uttar Pradesh
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold">
                    Headquartered at Kotla Road, Firozabad
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    Serving commercial clients locally and across northern India.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Areas of Focus */}
      <section className="py-16 md:py-24 bg-[#F6F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B6B35]/10 text-[#0B6B35] mb-3">
              <Layers size={13} />
              Strategic Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17231B] tracking-tight">
              Our Core Focus Areas
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Integrated marketing solutions that cover digital feeds, direct messaging, and physical media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0B6B35]/10 text-[#0B6B35] flex items-center justify-center mb-5">
                  <DynamicIcon name={pillar.icon} size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#17231B] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Location & Office Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#17231B] text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#F4C542]">
                  <MapPin size={13} />
                  Office Location
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  Visit or Connect With Our Firozabad Office
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                  We are conveniently located at Dwarkapuri on Kotla Road, Firozabad. Clients are welcome to discuss campaign roadmaps in person or collaborate completely online via phone and WhatsApp.
                </p>

                <div className="pt-2 space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{BUSINESS_CONFIG.address.full}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#F4C542] shrink-0" />
                    <span>{BUSINESS_CONFIG.workingHours}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-xl font-bold text-sm bg-white text-[#0B6B35] hover:bg-[#F4C542] hover:text-[#17231B] transition-colors"
                  >
                    Contact Our Office
                  </Link>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Quick WhatsApp Discussion
                  </a>
                </div>
              </div>

              {/* Verified Contact Details Grid */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4C542] border-b border-white/10 pb-2">
                  Direct Communications
                </h3>
                
                <div>
                  <span className="text-xs text-gray-400 block">Phone Contacts:</span>
                  <div className="space-y-1 mt-1">
                    <a href={`tel:${BUSINESS_CONFIG.phones[0].value}`} className="block text-sm font-bold text-white hover:text-[#F4C542]">
                      {BUSINESS_CONFIG.phones[0].display} (Primary)
                    </a>
                    <a href={`tel:${BUSINESS_CONFIG.phones[1].value}`} className="block text-sm font-bold text-white hover:text-[#F4C542]">
                      {BUSINESS_CONFIG.phones[1].display}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-gray-400 block">Email Address:</span>
                  <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-sm font-bold text-white hover:text-[#F4C542] mt-0.5 block truncate">
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>

                <div>
                  <span className="text-xs text-gray-400 block">Facebook Page:</span>
                  <a href={BUSINESS_CONFIG.facebook} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#1877F2] hover:underline mt-0.5 inline-flex items-center gap-1">
                    Official Agency Facebook Profile →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
