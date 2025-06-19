
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Coffee Enthusiast',
    content: 'Brewtopia has completely changed my morning routine. The quality and flavor of their coffee is unmatched. Every cup feels like a warm hug.',
    rating: 5,
    image: '👩‍💼'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Local Business Owner',
    content: 'As someone who drinks coffee all day, I can honestly say Brewtopia serves the best coffee in town. The atmosphere is perfect for meetings too.',
    rating: 5,
    image: '👨‍💻'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Student',
    content: 'This place has become my second home. Great coffee, friendly staff, and the perfect study environment. Plus their pastries are incredible!',
    rating: 5,
    image: '👩‍🎓'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the community that makes Brewtopia special.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-6">{testimonial.image}</div>
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-amber-600 dark:text-amber-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-600 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-amber-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
