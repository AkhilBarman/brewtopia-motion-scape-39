
import React, { useEffect, useState } from 'react';

const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 bg-amber-50 dark:bg-gray-900 flex items-center justify-center z-50 transition-all duration-500">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-amber-200 dark:border-gray-700"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-amber-600 dark:border-amber-500 border-t-transparent animate-spin"
            style={{ 
              background: `conic-gradient(from 0deg, transparent 0deg, #d97706 ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
              borderRadius: '50%'
            }}
          ></div>
          <div className="absolute inset-2 bg-amber-50 dark:bg-gray-900 rounded-full flex items-center justify-center">
            ☕
          </div>
        </div>
        <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-2">Brewtopia</h2>
        <div className="w-48 h-2 bg-amber-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-amber-700 dark:text-amber-300">Brewing the perfect experience...</p>
      </div>
    </div>
  );
};

export default Loader;
