import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUser, FiCalendar } = FiIcons;

const Guestbook = ({ isDark }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Auntie Akosua',
      message: 'May your union be blessed with the wisdom of our ancestors and the joy of generations to come. Asante sana for honoring our heritage.',
      date: '2024-08-15',
    },
    {
      id: 2,
      name: 'Uncle Kofi',
      message: 'Like the mighty baobab tree, may your love grow strong and deep, providing shelter and strength for all who come under your care.',
      date: '2024-08-20',
    },
    {
      id: 3,
      name: 'Sister Ama',
      message: 'Your love story is a beautiful continuation of our family legacy. May you dance together through all seasons of life with joy and grace.',
      date: '2024-08-25',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        date: new Date().toISOString().split('T')[0],
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-bone-100'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-slab text-4xl md:text-5xl font-bold mb-6 text-gold-600">
            Ancestral Blessings
          </h2>
          <p className={`text-xl ${isDark ? 'text-bone-200' : 'text-gray-600'}`}>
            Leave a word of blessing for our union, continuing the tradition of community wisdom.
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className={`p-6 rounded-lg shadow-lg mb-12 ${
            isDark ? 'bg-gray-700' : 'bg-bone-50'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-bone-200' : 'text-gray-700'
              }`}>
                Your Name
              </label>
              <input
                type="text"
                value={newMessage.name}
                onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                placeholder="Enter your name"
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                  isDark 
                    ? 'bg-gray-600 border-gray-500 text-bone-100' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-bone-200' : 'text-gray-700'
            }`}>
              Your Blessing
            </label>
            <textarea
              value={newMessage.message}
              onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
              rows={4}
              placeholder="Share your blessings, wisdom, or well-wishes for the couple..."
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
                isDark 
                  ? 'bg-gray-600 border-gray-500 text-bone-100' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-gold-500 to-gold-600 text-bone-50 py-2 px-6 rounded-md font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-200 flex items-center space-x-2"
          >
            <SafeIcon icon={FiHeart} className="w-4 h-4" />
            <span>Leave Blessing</span>
          </button>
        </motion.form>

        {/* Messages Display */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`p-6 rounded-lg shadow-md ${
                isDark ? 'bg-gray-700' : 'bg-bone-50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiUser} className="w-6 h-6 text-bone-50" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className={`font-semibold ${
                      isDark ? 'text-bone-100' : 'text-gray-800'
                    }`}>
                      {message.name}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{message.date}</span>
                    </div>
                  </div>
                  <p className={`text-base leading-relaxed ${
                    isDark ? 'text-bone-200' : 'text-gray-600'
                  }`}>
                    {message.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;