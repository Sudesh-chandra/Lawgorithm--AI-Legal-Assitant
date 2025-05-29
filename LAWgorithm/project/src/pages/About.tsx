import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/about/TeamSection';
import { Scale, CheckCircle, BarChart3, Award } from 'lucide-react';

const About: React.FC = () => {
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
            About <span className="text-primary-400">Lawgorithm</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            India's first AI-powered legal assistant, making legal services accessible to everyone.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900 p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                  <Scale className="h-7 w-7" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">Our Mission</h2>
                <p className="mb-6 text-neutral-400">
                  Lawgorithm was founded with a simple yet powerful mission: to democratize legal services across India. We believe everyone deserves access to quality legal assistance, regardless of their location or economic status.
                </p>
                <p className="text-neutral-400">
                  By combining artificial intelligence with legal expertise, we've created a platform that makes navigating India's complex legal system easier and more affordable for all citizens.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900 p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">Our Approach</h2>
                <p className="mb-6 text-neutral-400">
                  We've built Lawgorithm to address the unique challenges of India's legal landscape. Our platform combines cutting-edge AI technology with deep legal domain knowledge to provide accurate, reliable legal assistance.
                </p>
                <p className="text-neutral-400">
                  What sets us apart is our comprehensive fallback system that ensures you always get a response, even in situations with limited connectivity or complex queries that require human expertise.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 rounded-lg border border-neutral-800 bg-neutral-900 p-8"
          >
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Our Impact</h3>
                <p className="text-neutral-400">
                  Since our launch, Lawgorithm has helped thousands of Indians navigate legal challenges, generate important documents, and connect with qualified lawyers. Our platform processes over 10,000 legal queries daily, providing instant assistance to users across the country.
                </p>
              </div>
              
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Recognition</h3>
                <p className="text-neutral-400">
                  Lawgorithm has been recognized for its innovative approach to legal tech, winning the National Legal Tech Innovation Award and being featured in major publications like The Economic Times, India Today, and Bar & Bench for our contribution to legal accessibility.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg bg-neutral-800/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Important Disclaimer</h3>
              <p className="text-sm text-neutral-400">
                While Lawgorithm provides legal information and assistance, it is not a substitute for professional legal advice. The information provided is for general guidance only and may not be applicable to your specific situation. For complex legal matters, we recommend consulting with a qualified lawyer. You can use our "Find a Lawyer" feature to connect with legal professionals in your area.
              </p>
            </div>
          </motion.div>
        </div>
        
        <TeamSection />
      </div>
    </div>
  );
};

export default About;