import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiBriefcase, FiGlobe, FiMapPin, FiGift } = FiIcons;

const Registry = ({ isDark }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const legacyFunds = [
    {
      title: 'Home Foundation',
      description: 'Help us build our first home together, a sanctuary where we can grow our family and continue our traditions.',
      icon: FiHome,
      color: 'gold',
      goal: 15000,
      raised: 8500,
    },
    {
      title: 'Business Venture',
      description: 'Support our dream of opening a cultural center that celebrates African heritage and serves our community.',
      icon: FiBriefcase,
      color: 'terracotta',
      goal: 25000,
      raised: 12000,
    },
    {
      title: 'Ancestral Journey',
      description: 'Fund our pilgrimage to Ghana and Nigeria to connect with our roots and honor our ancestors.',
      icon: FiGlobe,
      color: 'kente',
      goal: 10000,
      raised: 6500,
    },
    {
      title: 'Land Legacy',
      description: 'Contribute to our goal of purchasing land to establish a generational legacy for our future children.',
      icon: FiMapPin,
      color: 'indigo',
      goal: 50000,
      raised: 18000,
    },
  ];

  const traditionalGifts = [
    'Handcrafted Kente Cloth',
    'African Art & Sculptures',
    'Traditional Cooking Utensils',
    'Books on African History',
    'Musical Instruments',
    'Ceremonial Items',
  ];

  return (
    <section id="registry" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-bone-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-slab text-4xl md:text-5xl font-bold mb-6 text-gold-600">
            Legacy Fund
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-bone-200' : 'text-gray-600'
          }`}>
            Your gifts help us build a foundation for our future while honoring our heritage. 
            Every contribution plants seeds for generations to come.
          </p>
        </motion.div>

        {/* Legacy Funds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {legacyFunds.map((fund, index) => (
            <motion.div
              key={fund.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDark ? 'bg-gray-800' : 'bg-bone-100'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-${fund.color}-500 flex items-center justify-center`}>
                  <SafeIcon icon={fund.icon} className="w-8 h-8 text-bone-50" />
                </div>
                <div>
                  <h3 className="font-slab text-2xl font-bold text-gold-600">
                    {fund.title}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-bone-200' : 'text-gray-600'
                  }`}>
                    ${fund.raised.toLocaleString()} of ${fund.goal.toLocaleString()} raised
                  </p>
                </div>
              </div>
              
              <p className={`text-base mb-4 ${
                isDark ? 'text-bone-200' : 'text-gray-600'
              }`}>
                {fund.description}
              </p>
              
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-${fund.color}-500 h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${(fund.raised / fund.goal) * 100}%` }}
                  ></div>
                </div>
                <p className={`text-sm mt-2 ${
                  isDark ? 'text-bone-200' : 'text-gray-600'
                }`}>
                  {Math.round((fund.raised / fund.goal) * 100)}% funded
                </p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-bone-50 py-3 px-6 rounded-md font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-200">
                Contribute
              </button>
            </motion.div>
          ))}
        </div>

        {/* Traditional Gifts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`p-8 rounded-lg shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-bone-100'
          }`}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiGift} className="w-8 h-8 text-bone-50" />
            </div>
            <h3 className="font-slab text-3xl font-bold mb-4 text-gold-600">
              Traditional Gifts
            </h3>
            <p className={`text-lg ${
              isDark ? 'text-bone-200' : 'text-gray-600'
            }`}>
              Honor our heritage with meaningful gifts that celebrate African culture
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {traditionalGifts.map((gift, index) => (
              <motion.div
                key={gift}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`p-4 rounded-lg border-2 border-dashed ${
                  isDark ? 'border-gray-600 hover:border-gold-500' : 'border-gray-300 hover:border-gold-500'
                } transition-colors duration-200 text-center`}
              >
                <span className={`text-sm font-medium ${
                  isDark ? 'text-bone-200' : 'text-gray-700'
                }`}>
                  {gift}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;