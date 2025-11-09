import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const loadingToast = toast.loading('Sending message...');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Show success toast
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        id: loadingToast,
        duration: 5000,
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(
        error.message || 'Failed to send message. Please try again.',
        {
          id: loadingToast,
          duration: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-5 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4FF00] focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1F2937',
            color: '#fff',
            border: '1px solid #374151',
            padding: '16px',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#D4FF00',
              secondary: '#1F2937',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#1F2937',
            },
          },
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-[#D4FF00] bg-[#D4FF00]/10 rounded-full mb-4">
                  Get in Touch
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Let's Build Something <span className="text-[#D4FF00]">Amazing</span> Together
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  Have a project in mind or want to learn more about our services? Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4FF00]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#D4FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <a href="mailto:info@cancalengineering.com" className="text-gray-400 hover:text-[#D4FF00] transition-colors">
                      info@cancalengineering.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4FF00]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#D4FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Call Us</h3>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-[#D4FF00] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4FF00]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#D4FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                    <p className="text-gray-400">123 Engineering St.<br />Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number <span className="text-gray-500 text-sm">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className={`${inputClasses} resize-none`}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-[#D4FF00] to-[#A3E635] text-black font-bold py-4 px-8 rounded-full hover:opacity-90 transition-all duration-300 text-lg flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-[#D4FF00]/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
