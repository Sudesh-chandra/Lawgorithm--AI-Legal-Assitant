import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, FileText, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-950 to-primary-950/20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              Trusted by <span className="text-primary-400">Legal Professionals</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-neutral-400"
            >
              Hear what our users have to say about Lawgorithm
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-neutral-800 bg-neutral-900/70 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-neutral-300">
                "Lawgorithm has been a game-changer for my legal practice. The document generator saves me hours of work, and the AI chatbot handles routine client questions."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-800">
                  <img src="https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Testimonial" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Ananya Patel</p>
                  <p className="text-xs text-neutral-500">Corporate Lawyer, Mumbai</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg border border-neutral-800 bg-neutral-900/70 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-neutral-300">
                "As a law student, I rely on Lawgorithm to understand complex legal concepts. The AI explains everything in simple terms and the document templates are incredibly useful for assignments."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-800">
                  <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Testimonial" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Raj Kumar</p>
                  <p className="text-xs text-neutral-500">Law Student, Delhi</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg border border-neutral-800 bg-neutral-900/70 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-neutral-300">
                "I needed to create a rental agreement quickly and found Lawgorithm. The process was simple, and I had a professional document with proper stamp in minutes. Highly recommended!"
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-800">
                  <img src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Testimonial" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Priya Desai</p>
                  <p className="text-xs text-neutral-500">Business Owner, Bangalore</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-primary-900 to-secondary-900 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Ready to Simplify Your Legal Journey?
                </h2>
                <p className="mb-8 text-lg text-neutral-200">
                  Join thousands of Indians who are using Lawgorithm to navigate the legal system with confidence.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary-800 shadow-sm transition-colors hover:bg-neutral-100"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/chatbot"
                    className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    Try AI Assistant
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;