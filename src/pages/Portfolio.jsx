import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Filter, Info, MessageCircle, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { PortfolioCard } from '../components/PortfolioCard';
import { PortfolioModal } from '../components/PortfolioModal';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../data/portfolio';
import { getWhatsAppLink } from '../data/business';

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Filter items
  const filteredItems = selectedCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Our Work & Portfolio | Advertising & Design Samples"
        description="Browse creative design samples, Facebook ad frameworks, social media posts, and promotional campaigns created by JK Advertisement in Firozabad."
      />

      <PageHeader
        badge="Our Work"
        title="Creative Portfolio & Campaign Concepts"
        description="Explore samples of our design work, social media post frameworks, video editing aesthetics, and multi-channel campaign architectures."
        breadcrumb={[{ name: "Our Work" }]}
      />

      {/* Portfolio Grid Section */}
      <section className="py-16 md:py-24 bg-[#F6F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Honest Transparency Notice as per guidelines */}
          <div className="mb-10 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-start gap-3 text-xs text-gray-600 max-w-3xl">
            <Info size={18} className="text-[#0B6B35] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#17231B] font-bold block mb-0.5">
                Authentic Agency Showcase Note:
              </strong>
              Items marked with "Sample" or "Demo" reflect agency creative concepts and production frameworks designed by our creative team to illustrate layout, typography, and campaign capabilities.
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0B6B35] text-white shadow-md shadow-[#0B6B35]/25 scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Grid of Projects */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={(clicked) => setActiveModalItem(clicked)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State fallback */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8">
              <p className="text-gray-500 text-sm">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-3 text-xs font-bold text-[#0B6B35] underline"
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Bottom Custom Project Callout */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B6B35]">
                Custom Creative Requirements
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#17231B]">
                Have a specific campaign idea or design format in mind?
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                We design custom banners, visiting cards, reels, and ad setups tailored to your industry.
              </p>
            </div>

            <a
              href={getWhatsAppLink("Custom Portfolio Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/25 shrink-0"
            >
              <MessageCircle size={16} />
              <span>Discuss Custom Creative on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* Interactive Modal */}
      <PortfolioModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </>
  );
};

export default Portfolio;
