import React from 'react';
import { motion } from 'framer-motion';
import ChatInterface from '../components/chatbot/ChatInterface';

const Chatbot: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Legal AI <span className="text-primary-400">Assistant</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Get instant answers to your legal questions with our AI-powered assistant. We handle over 1,000 common legal queries with specialized knowledge of Indian law.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:col-span-1"
          >
            <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Popular Topics</h3>
              <ul className="space-y-3">
                {['IPC Sections', 'Divorce Process', 'Property Laws', 'RTI Applications', 'Traffic Violations', 'Consumer Rights'].map((topic, index) => (
                  <li key={index}>
                    <button className="w-full rounded-md border border-neutral-800 bg-neutral-800/50 px-4 py-2 text-left text-sm text-neutral-300 transition-colors hover:border-primary-500/50 hover:text-primary-400">
                      {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Tips for Best Results</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-400">•</span>
                  Be specific with your questions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-400">•</span>
                  Include relevant details like locations, dates
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-400">•</span>
                  Ask one question at a time for clarity
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-400">•</span>
                  Try voice input for longer questions
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-[600px] lg:col-span-2"
          >
            <ChatInterface />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;