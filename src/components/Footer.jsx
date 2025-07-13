import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiPhone } = FiIcons;

const Footer = ({ isDark }) => {
  return (
    <footer className={`py-12 ${isDark ? 'bg-gray-900' : 'bg-bone-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-slab text-xl font-bold mb-4 text-gold-600">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-terracotta-500" />
                <span className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                  amaraandkwame@wedding.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4 text-terracotta-500" />
                <span className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                  (404) 555-0123
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-slab text-xl font-bold mb-4 text-gold-600">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#wedding-info" className={`block text-sm transition-colors duration-200 hover:text-gold-600 ${
                isDark ? 'text-bone-200' : 'text-gray-600'
              }`}>
                Wedding Details
              </a>
              <a href="#rsvp" className={`block text-sm transition-colors duration-200 hover:text-gold-600 ${
                isDark ? 'text-bone-200' : 'text-gray-600'
              }`}>
                RSVP
              </a>
              <a href="#registry" className={`block text-sm transition-colors duration-200 hover:text-gold-600 ${
                isDark ? 'text-bone-200' : 'text-gray-600'
              }`}>
                Registry
              </a>
              <a href="#dress-guide" className={`block text-sm transition-colors duration-200 hover:text-gold-600 ${
                isDark ? 'text-bone-200' : 'text-gray-600'
              }`}>
                Dress Guide
              </a>
            </div>
          </div>

          {/* Wedding Details */}
          <div>
            <h3 className="font-slab text-xl font-bold mb-4 text-gold-600">
              Wedding Day
            </h3>
            <div className="space-y-2">
              <p className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                September 15, 2024
              </p>
              <p className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                Ghana Cultural Center
              </p>
              <p className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                Atlanta, Georgia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <SafeIcon icon={FiHeart} className="w-5 h-5 text-gold-600" />
              <span className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                Made with love for our special day
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className={`text-sm ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
                Rooted in Love – An African Heritage Wedding Template
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-bone-300' : 'text-gray-500'}`}>
                by Mrake Agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;