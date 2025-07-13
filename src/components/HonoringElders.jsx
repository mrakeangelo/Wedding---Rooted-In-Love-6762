import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiHeart } = FiIcons;

const HonoringElders = ({ isDark }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const elders = [
    {
      name: 'Grandmother Ama Serwaa',
      relationship: 'Amara\'s Grandmother',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'Love is like the river that flows from the mountains to the sea. It finds its way through every obstacle and nourishes all it touches.',
      years: '1935-2020',
    },
    {
      name: 'Grandfather Kwaku Asante',
      relationship: 'Kwame\'s Grandfather',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'A man who stands for nothing will fall for anything. Build your marriage on the foundation of respect, truth, and unwavering commitment.',
      years: '1930-2018',
    },
    {
      name: 'Great Aunt Efua',
      relationship: 'Family Matriarch',
      image: 'https://images.unsplash.com/photo-1594736797933-d0b22d2ea9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'The strength of the family tree lies in its roots. Remember where you come from, and you will never lose your way.',
      years: '1925-2021',
    },
    {
      name: 'Uncle Kofi Mensah',
      relationship: 'Beloved Uncle',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'Dance through life with joy in your heart. Even in difficult times, find reasons to celebrate the gift of being together.',
      years: '1940-2019',
    },
  ];

  return (
    <section id="honoring-elders" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-bone-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-slab text-4xl md:text-5xl font-bold mb-6 text-gold-600">
            Honoring Our Elders
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-bone-200' : 'text-gray-600'
          }`}>
            We carry forward the wisdom, love, and blessings of those who came before us. 
            Their spirits guide us as we begin this new chapter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {elders.map((elder, index) => (
            <motion.div
              key={elder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDark ? 'bg-gray-800' : 'bg-bone-100'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={elder.image}
                    alt={elder.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-bone-50" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-slab text-xl font-bold text-gold-600 mb-1">
                    {elder.name}
                  </h3>
                  <p className={`text-sm font-medium mb-2 ${
                    isDark ? 'text-bone-200' : 'text-gray-600'
                  }`}>
                    {elder.relationship} • {elder.years}
                  </p>
                  <blockquote className={`text-base italic leading-relaxed ${
                    isDark ? 'text-bone-200' : 'text-gray-700'
                  }`}>
                    "{elder.quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Memorial Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`mt-16 p-8 rounded-lg shadow-lg text-center ${
            isDark ? 'bg-gray-800' : 'bg-bone-100'
          }`}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiHeart} className="w-8 h-8 text-bone-50" />
          </div>
          <h3 className="font-slab text-2xl font-bold mb-4 text-gold-600">
            In Loving Memory
          </h3>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-bone-200' : 'text-gray-600'
          }`}>
            Though they are no longer with us in body, their spirits live on in our hearts, 
            our traditions, and the love we share. Their blessings surround us on this special day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoringElders;