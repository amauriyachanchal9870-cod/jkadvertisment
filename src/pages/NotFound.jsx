import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found (404)"
        description="The page you are looking for cannot be found. Return to JS Advertisment Agency home page."
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8F5]">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-gray-100">
          <div className="w-16 h-16 rounded-2xl bg-[#0B6B35]/10 text-[#0B6B35] flex items-center justify-center mx-auto">
            <Search size={32} />
          </div>

          <div>
            <span className="text-4xl sm:text-5xl font-black text-[#0B6B35] block mb-1">
              404
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-[#17231B]">
              Page Not Found
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
              We couldn't find the page or service you were looking for. Please check the URL or use the navigation below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#0B6B35] hover:bg-[#085027] transition-colors"
            >
              <Home size={15} />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
