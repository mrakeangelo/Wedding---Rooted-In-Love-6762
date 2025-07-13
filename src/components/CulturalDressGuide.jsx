import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight, FiInfo } = FiIcons;

const CulturalDressGuide = ({ isDark }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const dressGuide = [
    {
      title: 'Kente Cloth',
      image: 'https://images.unsplash.com/photo-1594736797933-d0b22d2ea9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Traditional Ghanaian textile with vibrant colors and geometric patterns.',
      meaning: 'Each pattern tells a story of wisdom, courage, and cultural heritage.',
      occasion: 'Perfect for all ceremonies',
    },
    {
      title: 'Dashiki',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Colorful garment with intricate embroidery around the neckline.',
      meaning: 'Symbolizes African pride and cultural identity.',
      occasion: 'Ideal for the reception',
    },
    {
      title: 'Agbada',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Flowing robe worn by men, often in rich fabrics and colors.',
      meaning: 'Represents dignity, respect, and ceremonial importance.',
      occasion: 'Excellent for formal ceremonies',
    },
    {
      title: 'Ankara Prints',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Vibrant wax-print fabrics with bold patterns and bright colors.',
      meaning: 'Celebrates African creativity and artistic expression.',
      occasion: 'Great for all celebrations',
    },
    {
      title: 'Head Wraps',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Elegant head coverings in various styles and fabrics.',
      meaning: 'Honors feminine beauty and cultural tradition.',
      occasion: 'Beautiful for any event',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dressGuide.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dressGuide.length) % dressGuide.length);
  };

  return (
    <section id="dress-guide" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-bone-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-slab text-4xl md:text-5xl font-bold mb-6 text-gold-600">
            Cultural Dress Guide
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-bone-200' : 'text-gray-600'
          }`}>
            Celebrate with us by wearing traditional African attire. Here's a guide to help you 
            choose the perfect outfit for our special day.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {dressGuide.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${
                    isDark ? 'bg-gray-700' : 'bg-bone-50'
                  }`}>
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="font-slab text-3xl font-bold mb-4 text-gold-600">
                        {item.title}
                      </h3>
                      <p className={`text-lg mb-4 ${
                        isDark ? 'text-bone-200' : 'text-gray-700'
                      }`}>
                        {item.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-terracotta-600 mb-2">Cultural Meaning:</h4>
                        <p className={`text-base ${
                          isDark ? 'text-bone-200' : 'text-gray-600'
                        }`}>
                          {item.meaning}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiInfo} className="w-5 h-5 text-gold-600" />
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-bone-200' : 'text-gray-600'
                        }`}>
                          {item.occasion}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full ${
              isDark ? 'bg-gray-800/80' : 'bg-white/80'
            } backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-gold-600" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full ${
              isDark ? 'bg-gray-800/80' : 'bg-white/80'
            } backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-gold-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {dressGuide.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-gold-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`mt-16 p-8 rounded-lg shadow-lg ${
            isDark ? 'bg-gray-700' : 'bg-bone-50'
          }`}
        >
          <h3 className="font-slab text-2xl font-bold mb-4 text-gold-600 text-center">
            Dress Code Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-terracotta-600 mb-2">Libation & Cloth Tying</h4>
              <p className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                Traditional African attire encouraged. Bright colors and cultural patterns welcome.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-terracotta-600 mb-2">Vow Exchange</h4>
              <p className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                Semi-formal to formal attire. Mix of traditional and contemporary styles.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-terracotta-600 mb-2">Reception</h4>
              <p className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                Festive attire for dancing! Comfortable shoes recommended for celebration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CulturalDressGuide;