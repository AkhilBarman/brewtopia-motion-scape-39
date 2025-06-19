
import React from 'react';
import RippleButton from './RippleButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl mx-4 p-8 transform animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          ×
        </button>
        
        <div className="text-center">
          <div className="text-6xl mb-6">☕</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          
          <div className="text-left space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Founded in 2020 with a simple mission: to create a space where community, quality, and passion for coffee converge. Brewtopia began as a dream between two friends who traveled the world, discovering unique coffee cultures and bringing those experiences home.
            </p>
            
            <p>
              We source our beans directly from small farms across Ethiopia, Colombia, and Guatemala, ensuring fair trade practices and supporting sustainable farming methods. Each batch is roasted in small quantities to maintain the perfect flavor profile.
            </p>
            
            <p>
              Today, Brewtopia serves over 1,000 customers daily, but we never forget our roots. Every cup is crafted with the same attention to detail and love that started our journey.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-amber-50 dark:bg-gray-700 rounded-xl">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Coffee Varieties</div>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-gray-700 rounded-xl">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">15</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Partner Farms</div>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-gray-700 rounded-xl">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
          </div>
          
          <div className="mt-8">
            <RippleButton onClick={onClose}>
              Close
            </RippleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
