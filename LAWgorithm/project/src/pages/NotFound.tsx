import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-900/30">
            <Scale className="h-12 w-12 text-primary-400" />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">404</h1>
          <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl">Page Not Found</h2>
          <p className="mb-8 text-lg text-neutral-400">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;