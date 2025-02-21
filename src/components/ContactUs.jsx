'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaUser, FaPhone } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 text-white border border-gray-700 shadow-xl bg-white/10 backdrop-blur-lg rounded-2xl"
      >
        <h2 className="mb-6 text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-3 pl-12 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 pl-12 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your Phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full p-3 pl-12 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="4"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 font-bold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
