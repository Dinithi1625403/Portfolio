'use client';
import Image from 'next/image';
import { useState } from 'react';

/**
 * OptimizedImage - Performance-focused image component with blur placeholder
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  fill = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Create blur data URL for placeholder
  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#222" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
    </svg>`;

  const toBase64 = (str) => 
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return (
    <Image
      src={src}
      alt={alt}
      className={`duration-700 ease-in-out ${className} ${
        isLoading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      }`}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      onLoadingComplete={() => setIsLoading(false)}
      loading={priority ? 'eager' : 'lazy'}
      quality={90}
      {...props}
    />
  );
}
