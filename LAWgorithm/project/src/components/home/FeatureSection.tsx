import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: 'Smart Legal Chatbot',
    description:
      'Get instant answers to over 1,000 common legal questions with our AI-powered assistant. Fallback systems ensure you always get a response.',
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: 'Document Generator',
    description:
      'Create legally-binding documents with pre-attached ₹10 stamp, professional formatting, and downloadable PDFs. From affidavits to power of attorney.',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Lawyer Finder',
    description:
      'Find the right lawyer based on your location and case requirements. Browse profiles, compare specializations, and contact professionals directly.',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Secure & Reliable',
    description:
      'Your legal matters stay confidential with end-to-end encryption. Our fallback systems ensure reliability even when internet connectivity is limited.',
  },
];

const FeatureSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Powerful Legal Tools <span className="text-primary-400">at Your Fingertips</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-neutral-400"
          >
            Navigate India's complex legal system with confidence using our integrated suite of legal tech solutions.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-lg border border-neutral-800 bg-neutral-900 p-8 hover:border-primary-600/50 transition-colors"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-md bg-primary-900/30 text-primary-400 group-hover:bg-primary-800/50 group-hover:text-primary-300 transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;