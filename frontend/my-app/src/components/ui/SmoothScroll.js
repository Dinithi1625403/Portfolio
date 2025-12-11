'use client';
import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let requestId = null;
    let currentScroll = 0;
    let targetScroll = 0;
    const ease = 0.08;

    const smoothScrolling = () => {
      currentScroll += (targetScroll - currentScroll) * ease;
      
      if (Math.abs(targetScroll - currentScroll) < 0.5) {
        currentScroll = targetScroll;
      }

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(-${currentScroll}px)`;
      }

      requestId = requestAnimationFrame(smoothScrolling);
    };

    const handleScroll = () => {
      targetScroll = window.pageYOffset || document.documentElement.scrollTop;
    };

    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      requestId = requestAnimationFrame(smoothScrolling);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className="will-change-transform">
      {children}
    </div>
  );
}
