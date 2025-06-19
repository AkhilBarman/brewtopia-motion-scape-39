
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RippleButton from './RippleButton';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-800 dark:text-amber-200 mb-6 font-serif">
            Welcome to
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Brewtopia
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where every cup tells a story and every sip creates memories. 
            Experience the perfect blend of passion, quality, and community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <RippleButton
              onClick={() => navigate('/menu')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              View Our Menu ☕
            </RippleButton>
            
            <RippleButton 
              onClick={onOpenModal}
              className="bg-transparent border-2 border-amber-600 text-amber-600 dark:text-amber-400 dark:border-amber-400 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Learn More
            </RippleButton>
          </div>
        </div>

        {/* Floating Coffee Bean Animation */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <span className="text-4xl opacity-60">☕</span>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-2000">
          <span className="text-3xl opacity-60">🫘</span>
        </div>
        <div className="absolute top-1/2 left-5 animate-bounce delay-3000">
          <span className="text-2xl opacity-40">☕</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 dark:border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 dark:bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
