import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { PageLoader } from './components/PageLoader';
import { ScrollProgressBar } from './components/ScrollProgressBar';

// Code-split lazy loaded pages for optimal performance and instant initial load
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F8F5]">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Top Animated Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Page Routing with Suspense fallback */}
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Floating WhatsApp Contact Action */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
