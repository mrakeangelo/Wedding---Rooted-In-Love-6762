import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiHeart, FiUsers, FiStar } = FiIcons;

const OurLegacy = ({ isDark }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      year: '1995',
      title: 'Ancestral Roots',
      description: 'Our families trace their heritage to Ghana and Nigeria, carrying forward traditions of love, unity, and celebration.',
      icon: FiMapPin,
      color: 'gold',
    },
    {
      year: '2018',
      title: 'First Meeting',
      description: 'We met at the African Heritage Festival in Atlanta, drawn together by our shared love of culture and community.',
      icon: FiHeart,
      color: 'terracotta',
    },
    {
      year: '2022',
      title: 'Family Blessing',
      description: 'Our families came together for the traditional blessing ceremony, uniting our lineages in joy and prosperity.',
      icon: FiUsers,
      color: 'kente',
    },
    {
      year: '2024',
      title: 'Our Union',
      description: 'Today we celebrate not just our love, but the continuation of our ancestral legacy through our union.',
      icon: FiStar,
      color: 'indigo',
    },
  ];

  return (
    <section id="legacy" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-bone-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-slab text-4xl md:text-5xl font-bold mb-6 text-gold-600">
            Our Legacy
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-bone-200' : 'text-gray-600'
          }`}>
            Every love story is rooted in history. Ours grows from the rich soil of African heritage, 
            nurtured by generations of strength, wisdom, and enduring love.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold-500 to-terracotta-500 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`p-6 rounded-lg shadow-lg ${
                    isDark ? 'bg-gray-700' : 'bg-bone-50'
                  }`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-${event.color}-500 flex items-center justify-center`}>
                        <SafeIcon icon={event.icon} className="w-6 h-6 text-bone-50" />
                      </div>
                      <div>
                        <h3 className="font-slab text-2xl font-bold text-gold-600">{event.year}</h3>
                        <h4 className={`text-lg font-semibold ${
                          isDark ? 'text-bone-100' : 'text-gray-800'
                        }`}>
                          {event.title}
                        </h4>
                      </div>
                    </div>
                    <p className={`text-base ${
                      isDark ? 'text-bone-200' : 'text-gray-600'
                    }`}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className={`w-6 h-6 rounded-full bg-${event.color}-500 border-4 ${
                    isDark ? 'border-gray-800' : 'border-bone-100'
                  }`}></div>
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLegacy;