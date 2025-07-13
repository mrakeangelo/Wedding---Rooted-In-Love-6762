import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSend, FiCheck } = FiIcons;

const RSVP = ({ isDark }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    ceremonies: [],
    dietaryRestrictions: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const ceremonies = [
    'Libation Ceremony',
    'Tying of the Cloth',
    'Exchange of Vows',
    'Moonfire Reception',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCeremonyChange = (ceremony) => {
    setFormData(prev => ({
      ...prev,
      ceremonies: prev.ceremonies.includes(ceremony)
        ? prev.ceremonies.filter(c => c !== ceremony)
        : [...prev.ceremonies, ceremony]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-bone-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-lg shadow-lg ${
              isDark ? 'bg-gray-800' : 'bg-bone-100'
            }`}
          >
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiCheck} className="w-8 h-8 text-bone-50" />
            </div>
            <h2 className="font-slab text-3xl font-bold mb-4 text-gold-600">
              Asante Sana!
            </h2>
            <p className={`text-lg ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
              Thank you for your RSVP. We can't wait to celebrate with you!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-bone-50'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-slab text-4xl md:text-5xl font-bold mb-6 text-gold-600">
            RSVP
          </h2>
          <p className={`text-xl ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
            Please let us know which celebrations you'll be joining us for.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className={`p-8 rounded-lg shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-bone-100'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-bone-200' : 'text-gray-700'
              }`}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-bone-100' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-bone-200' : 'text-gray-700'
              }`}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-bone-100' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-bone-200' : 'text-gray-700'
              }`}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-bone-100' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-bone-200' : 'text-gray-700'
              }`}>
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-bone-100' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className={`block text-sm font-medium mb-3 ${
              isDark ? 'text-bone-200' : 'text-gray-700'
            }`}>
              Which celebrations will you attend? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ceremonies.map((ceremony) => (
                <label key={ceremony} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.ceremonies.includes(ceremony)}
                    onChange={() => handleCeremonyChange(ceremony)}
                    className="w-4 h-4 text-gold-600 bg-gray-100 border-gray-300 rounded focus:ring-gold-500"
                  />
                  <span className={`text-sm ${
                    isDark ? 'text-bone-200' : 'text-gray-700'
                  }`}>
                    {ceremony}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-bone-200' : 'text-gray-700'
            }`}>
              Dietary Restrictions
            </label>
            <input
              type="text"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleInputChange}
              placeholder="Please specify any dietary restrictions or allergies"
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-bone-100' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>

          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-bone-200' : 'text-gray-700'
            }`}>
              Message for the Couple
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Share your blessings, wishes, or any special message..."
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-bone-100' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-bone-50 py-3 px-6 rounded-md font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <SafeIcon icon={FiSend} className="w-5 h-5" />
            <span>Send RSVP</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVP;