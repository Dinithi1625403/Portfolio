'use client';
import { useEffect, useState } from 'react';
import PageLoader from './PageLoader';

export default function LoaderWrapper({ children, duration = 10000 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [duration]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      {children}
    </>
  );
}
