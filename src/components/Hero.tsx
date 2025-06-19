
import React, { useEffect, useState } from 'react';
import RippleButton from './RippleButton';

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-orange-200/40 rounded-full blur-lg animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-amber-300/20 rounded-full blur-md animate-pulse delay-2000"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Brewtopia
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where every cup tells a story and every sip creates memories. Experience the perfect blend of passion, quality, and community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <RippleButton 
                onClick={onOpenModal}
                size="lg"
                className="text-lg"
              >
                Discover Our Story
              </RippleButton>
              
              <RippleButton 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Menu
              </RippleButton>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Coffee Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-8 text-4xl animate-bounce"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
            animationDelay: '0s',
            animationDuration: '3s'
          }}
        >
          ☕
        </div>
        <div 
          className="absolute top-3/4 right-12 text-3xl animate-bounce"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${-scrollY * 0.1}deg)`,
            animationDelay: '1s',
            animationDuration: '4s'
          }}
        >
          🫘
        </div>
        <div 
          className="absolute top-1/2 right-1/4 text-2xl animate-bounce"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px)`,
            animationDelay: '2s',
            animationDuration: '3.5s'
          }}
        >
          🥐
        </div>
      </div>
    </section>
  );
};

export default Hero;
