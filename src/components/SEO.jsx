import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight static SEO updater for React SPA.
 * Updates document.title and standard meta description dynamically.
 */
export const SEO = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // Title
    const baseTitle = "JS Advertisment Agency | Firozabad";
    document.title = title ? `${title} | JS Advertisment Agency` : "JS Advertisment Agency | Digital Marketing & Advertising in Firozabad";

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://jsadvertisment.com${location.pathname}`);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, location.pathname]);

  return null;
};

export default SEO;
