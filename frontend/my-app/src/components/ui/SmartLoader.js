'use client';
import { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';

/**
 * SmartLoader - Intelligent loading with proper cleanup and performance optimization
 */
const SmartLoader = memo(({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  fallback = null,
  className = '',
  enablePreload = false,
  priority = false
}) => {
  const [isVisible, setIsVisible] = useState(priority);
  const [hasLoaded, setHasLoaded] = useState(priority);
  const [preloadStarted, setPreloadStarted] = useState(false);
  const ref = useRef();
  const observerRef = useRef();

  useEffect(() => {
    if (priority) return; // Skip observer for priority content

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasLoaded) {
            // Delay loading slightly to allow smooth scrolling
            const timer = setTimeout(() => {
              setHasLoaded(true);
            }, 100);
            return () => clearTimeout(timer);
          }
        }
      },
      { 
        threshold, 
        rootMargin,
        // Use passive observation for better performance
      }
    );

    // Preload observer (earlier trigger)
    const preloadObserver = enablePreload ? new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !preloadStarted) {
          setPreloadStarted(true);
          // Start preloading images or other resources
          if (typeof children?.type?.preload === 'function') {
            children.type.preload();
          }
        }
      },
      { 
        threshold: 0, 
        rootMargin: '200px' // Preload when 200px away
      }
    ) : null;

    observerRef.current = observer;
    
    if (ref.current) {
      observer.observe(ref.current);
      if (preloadObserver) {
        preloadObserver.observe(ref.current);
      }
    }

    return () => {
      observer.disconnect();
      if (preloadObserver) {
        preloadObserver.disconnect();
      }
    };
  }, [threshold, rootMargin, hasLoaded, enablePreload, preloadStarted, priority]);

  const LoadingFallback = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-[400px] flex items-center justify-center ${className}`}
    >
      {fallback || (
        <div className="relative">
          {/* Enhanced loading spinner */}
          <div className="w-12 h-12 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-8 h-8 m-2 border-2 border-transparent border-l-purple-400 rounded-full animate-spin animate-reverse"></div>
        </div>
      )}
    </motion.div>
  );

  if (!isVisible && !priority) {
    return <div ref={ref} className={className}><LoadingFallback /></div>;
  }

  if (!hasLoaded && !priority) {
    return (
      <div ref={ref} className={className}>
        <LoadingFallback />
      </div>
    );
  }

  return (
    <motion.div
      ref={!priority ? ref : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: priority ? 0 : 0.1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

SmartLoader.displayName = 'SmartLoader';

export default SmartLoader;
