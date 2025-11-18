'use client';
import { memo, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * LazySection - Wrapper for lazy loading sections with intersection observer
 */
const LazySection = memo(({ 
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "100px",
  fallback = null,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          // Disconnect after loading to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        fallback || (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )
      )}
    </div>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;
