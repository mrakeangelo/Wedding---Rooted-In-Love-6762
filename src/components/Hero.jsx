import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCalendar, FiMapPin } = FiIcons;

const Hero = ({ isDark }) => {
  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark ? 'bg-gray-900' : 'bg-bone-50'
    }`}>
      {/* Kente Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-gold-500 via-kente-500 to-terracotta-500"></div>
        <div className="absolute inset-0 bg-repeat opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.3'%3E%3Cpath d='M30 30l15-15v30zM0 15l15-15v30zM45 45l15-15v30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Animated Crown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center animate-pulse-gold">
            <SafeIcon icon={FiHeart} className="w-12 h-12 text-bone-50" />
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-slab text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gold-600">Amara</span>
            <span className={`mx-4 ${isDark ? 'text-bone-100' : 'text-gray-800'}`}>&</span>
            <span className="text-terracotta-600">Kwame</span>
          </h1>
          <p className={`text-xl md:text-2xl font-medium ${
            isDark ? 'text-bone-200' : 'text-gray-600'
          }`}>
            Two hearts, one heritage, infinite love
          </p>
        </motion.div>

        {/* Wedding Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12"
        >
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCalendar} className="w-5 h-5 text-gold-600" />
            <span className={`font-medium ${isDark ? 'text-bone-200' : 'text-gray-700'}`}>
              September 15, 2024
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiMapPin} className="w-5 h-5 text-gold-600" />
            <span className={`font-medium ${isDark ? 'text-bone-200' : 'text-gray-700'}`}>
              Ghana Cultural Center, Atlanta
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;