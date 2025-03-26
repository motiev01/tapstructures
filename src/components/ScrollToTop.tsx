/**
 * ScrollToTop.tsx
 * Created: Implements automatic scroll restoration when navigating between pages
 * This component uses the useEffect hook to scroll to the top of the page whenever
 * the route location changes.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 