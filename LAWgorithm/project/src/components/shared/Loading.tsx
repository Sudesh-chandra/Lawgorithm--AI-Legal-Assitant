import React from 'react';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="mb-4 text-primary-500"
        >
          <Scale size={48} />
        </motion.div>
        <h2 className="text-xl font-semibold text-primary-400">Lawgorithm</h2>
        <p className="mt-2 text-neutral-400">Loading legal resources...</p>
      </motion.div>
    </div>
  );
};

export default Loading;