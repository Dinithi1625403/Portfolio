'use client';
import { useState, useEffect } from 'react';

/**
 * PerformanceMonitor - Dev tool for monitoring FPS and performance
 * Only shows in development mode
 */
export default function PerformanceMonitor() {
  const [fps, setFps] = useState(0);
  const [frameTime, setFrameTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = Date.now();
    let animationId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= 1000) {
        const currentFPS = Math.round((frameCount * 1000) / deltaTime);
        setFps(currentFPS);
        setFrameTime(deltaTime / frameCount);
        frameCount = 0;
        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    measureFPS();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) return null;

  const getFPSColor = (fps) => {
    if (fps >= 55) return 'text-green-400';
    if (fps >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 left-4 z-[9999] bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-xs font-mono text-white">
      <div className="mb-1">
        <span className="text-gray-300">FPS: </span>
        <span className={getFPSColor(fps)}>{fps}</span>
      </div>
      <div className="mb-1">
        <span className="text-gray-300">Frame: </span>
        <span className="text-blue-400">{frameTime.toFixed(1)}ms</span>
      </div>
      <div className="text-gray-500 text-xs">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}
