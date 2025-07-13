import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiMapPin, FiHeart, FiSun, FiMoon } = FiIcons;

const WeddingInfo = ({ isDark }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ceremonies = [
    {
      name: 'Libation Ceremony',
      time: '2:00 PM',
      location: 'Heritage Garden',
      description: 'We honor our ancestors with traditional libation, pouring offerings to connect with those who came before us.',
      icon: FiSun,
      color: 'gold',
    },
    {
      name: 'Tying of the Cloth',
      time: '3:00 PM',
      location: 'Main Pavilion',
      description: 'Our families will bind our hands with Kente cloth, symbolizing the unbreakable bond of our union.',
      icon: FiHeart,
      color: 'terracotta',
    },
    {
      name: 'Exchange of Vows',
      time: '4:00 PM',
      location: 'Main Pavilion',
      description: 'We speak our promises before God, family, and community, sealing our commitment with rings.',
      icon: FiHeart,
      color: 'kente',
    },
    {
      name: 'Moonfire Reception',
      time: '6:00 PM',
      location: 'Community Hall',
      description: 'Join us for an evening of celebration with traditional music, dancing, and feast under the stars.',
      icon: FiMoon,
      color: 'indigo',
    },
  ];

  return (
    <section id="wedding-info" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-bone-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-slab text-4xl md:text-5xl font-bold mb-6 text-gold-600">
            Wedding Celebrations
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-bone-200' : 'text-gray-600'
          }`}>
            Join us for a day of sacred traditions and joyful celebration, 
            honoring both our African heritage and modern love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ceremonies.map((ceremony, index) => (
            <motion.div
              key={ceremony.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDark ? 'bg-gray-800' : 'bg-bone-100'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-${ceremony.color}-500 flex items-center justify-center`}>
                  <SafeIcon icon={ceremony.icon} className="w-8 h-8 text-bone-50" />
                </div>
                <div>
                  <h3 className="font-slab text-2xl font-bold text-gold-600">
                    {ceremony.name}
                  </h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4 text-terracotta-500" />
                      <span className={`text-sm ${
                        isDark ? 'text-bone-200' : 'text-gray-600'
                      }`}>
                        {ceremony.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 text-terracotta-500" />
                      <span className={`text-sm ${
                        isDark ? 'text-bone-200' : 'text-gray-600'
                      }`}>
                        {ceremony.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className={`text-base ${
                isDark ? 'text-bone-200' : 'text-gray-600'
              }`}>
                {ceremony.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`mt-16 p-8 rounded-lg shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-bone-100'
          }`}
        >
          <div className="text-center">
            <h3 className="font-slab text-3xl font-bold mb-4 text-gold-600">
              Ghana Cultural Center
            </h3>
            <p className={`text-lg mb-4 ${
              isDark ? 'text-bone-200' : 'text-gray-600'
            }`}>
              2204 Campbellton Road SW, Atlanta, GA 30311
            </p>
            <p className={`text-base max-w-2xl mx-auto ${
              isDark ? 'text-bone-200' : 'text-gray-600'
            }`}>
              A sacred space dedicated to preserving and celebrating African culture, 
              providing the perfect setting for our heritage celebration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;