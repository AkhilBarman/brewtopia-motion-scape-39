
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { useCart } from '@/contexts/CartContext';
import { Moon, Sun, Menu, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RippleButton from './RippleButton';
import CartSidebar from './CartSidebar';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="text-2xl font-bold text-amber-800 dark:text-amber-200 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              ☕ Brewtopia
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'Home', action: () => scrollToSection('home') },
                { label: 'Menu', action: () => scrollToSection('menu') },
                { label: 'About', action: () => scrollToSection('about') },
                { label: 'Testimonials', action: () => scrollToSection('testimonials') },
                { label: 'Contact', action: () => scrollToSection('contact') }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsCartOpen(true)}
                  className="relative"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {totalItems > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {totalItems}
                    </Badge>
                  )}
                </Button>
                
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="w-4 h-4" />
                {totalItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { label: 'Home', action: () => scrollToSection('home') },
                  { label: 'Menu', action: () => scrollToSection('menu') },
                  { label: 'About', action: () => scrollToSection('about') },
                  { label: 'Testimonials', action: () => scrollToSection('testimonials') },
                  { label: 'Contact', action: () => scrollToSection('contact') }
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="text-left text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navigation;
