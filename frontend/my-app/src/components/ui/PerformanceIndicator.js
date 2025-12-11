'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Eye } from 'lucide-react';

export default function PerformanceIndicator() {
  const [metrics, setMetrics] = useState({
    fps: 60,
    loadTime: 0,
    isVisible: false
  });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Measure load time
    if (typeof window !== 'undefined' && window.performance) {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));
    }

    // FPS counter
    let lastTime = performance.now();
    let frames = 0;
    let frameId;

    const measureFPS = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frames = 0;
        lastTime = currentTime;
      }
      
      frameId = requestAnimationFrame(measureFPS);
    };

    frameId = requestAnimationFrame(measureFPS);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  // Don't show on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  const fpsColor = metrics.fps >= 55 ? '#10b981' : metrics.fps >= 30 ? '#f59e0b' : '#ef4444';

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-24 right-8 z-40 hidden md:block"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Compact indicator */}
      <motion.div
        className="relative bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-full p-3 cursor-pointer shadow-lg shadow-purple-500/20"
        whileHover={{ scale: 1.1 }}
      >
        <Activity size={20} className="text-purple-400" />
        
        {/* FPS badge */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg"
          style={{ backgroundColor: fpsColor }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {metrics.fps}
        </motion.div>
      </motion.div>

      {/* Detailed panel */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4 shadow-2xl shadow-purple-500/20 min-w-[200px]"
          >
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Zap size={12} />
                  <span>FPS</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: fpsColor }}>
                  {metrics.fps}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Eye size={12} />
                  <span>Load Time</span>
                </div>
                <div className="text-lg font-semibold text-purple-400">
                  {metrics.loadTime}ms
                </div>
              </div>

              {/* Performance bar */}
              <div className="pt-2 border-t border-purple-500/20">
                <div className="text-xs text-gray-400 mb-2">Performance</div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: fpsColor }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(metrics.fps / 60) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
