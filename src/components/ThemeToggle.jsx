import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onClick={() => setIsDark(!isDark)}
      className={`fixed top-20 right-4 z-50 w-12 h-12 rounded-full ${
        isDark ? 'bg-gray-800' : 'bg-bone-100'
      } shadow-lg flex items-center justify-center transition-colors duration-300 hover:scale-110`}
      title={isDark ? 'Sun Ceremony' : 'Moonfire Reception'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <SafeIcon 
          icon={isDark ? FiSun : FiMoon} 
          className={`w-6 h-6 ${isDark ? 'text-gold-400' : 'text-indigo-600'}`} 
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;