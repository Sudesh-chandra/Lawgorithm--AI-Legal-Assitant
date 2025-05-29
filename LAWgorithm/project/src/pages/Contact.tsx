import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Contact <span className="text-primary-400">Us</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 lg:col-span-1"
            >
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Email Us</h3>
                <p className="text-neutral-400">
                  For general inquiries:
                  <a href="mailto:info@lawgorithm.in" className="ml-2 text-primary-400 hover:underline">
                    info@lawgorithm.in
                  </a>
                </p>
                <p className="text-neutral-400">
                  For support:
                  <a href="mailto:support@lawgorithm.in" className="ml-2 text-primary-400 hover:underline">
                    support@lawgorithm.in
                  </a>
                </p>
              </div>
              
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Call Us</h3>
                <p className="text-neutral-400">
                  Toll-Free: <span className="text-white">1800-123-4567</span>
                </p>
                <p className="text-neutral-400">
                  Office: <span className="text-white">+91 11 2345 6789</span>
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  Available Monday-Friday, 9:00 AM - 6:00 PM IST
                </p>
              </div>
              
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Visit Us</h3>
                <p className="text-neutral-400">
                  Lawgorithm Technologies Pvt. Ltd.
                  <br />
                  4th Floor, Tech Park One
                  <br />
                  Koramangala, Bangalore - 560034
                  <br />
                  Karnataka, India
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                <h2 className="mb-6 text-xl font-semibold text-white">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center rounded-lg bg-success-500/10 py-12 text-center"
                  >
                    <CheckCircle className="mb-4 h-16 w-16 text-success-500" />
                    <h3 className="mb-2 text-xl font-semibold text-white">Message Sent!</h3>
                    <p className="text-neutral-400">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-300">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-neutral-300">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-300">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;