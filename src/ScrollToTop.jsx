import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top with multiple fallbacks
    const scrollToTop = () => {
      // Method 1: Standard scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Method 2: Fallback for older browsers
      window.scrollTo(0, 0);
      
      // Method 3: Document element fallback
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      
      // Method 4: Body element fallback
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Execute immediately
    scrollToTop();
    
    // Also execute after a small delay to ensure DOM is ready
    const timer = setTimeout(scrollToTop, 10);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToTop; 