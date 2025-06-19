
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Modal from '@/components/Modal';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {isLoading && <Loader onLoaded={handleLoaderComplete} />}
        
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Navigation />
          <Hero onOpenModal={openModal} />
          <About />
          <Testimonials />
          <Contact />
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 text-center">
              <div className="text-3xl font-bold mb-4">☕ Brewtopia</div>
              <p className="text-gray-400 mb-6">Crafting perfect moments, one cup at a time.</p>
              <div className="flex justify-center space-x-6 text-2xl">
                <span className="hover:text-amber-400 cursor-pointer transition-colors">📘</span>
                <span className="hover:text-amber-400 cursor-pointer transition-colors">📷</span>
                <span className="hover:text-amber-400 cursor-pointer transition-colors">🐦</span>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
                <p>&copy; 2024 Brewtopia. All rights reserved. Made with ❤️ and lots of ☕</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
