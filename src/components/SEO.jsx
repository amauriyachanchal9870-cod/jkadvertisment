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
    const baseTitle = "JK Advertisement | Firozabad";
    document.title = title ? `${title} | JK Advertisement` : "JK Advertisement | Digital Marketing & Advertising Agency in Firozabad";

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
    canonical.setAttribute('href', `https://jkadvertisement.com${location.pathname}`);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, location.pathname]);

  return null;
};

export default SEO;
