import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures browser window scrolls to top immediately upon every route change.
 */
export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
