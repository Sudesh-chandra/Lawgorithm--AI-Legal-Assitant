import React from 'react';
import { motion } from 'framer-motion';
import DocumentForm from '../components/documents/DocumentForm';
import { FileText, Check, Clock } from 'lucide-react';

const Documents: React.FC = () => {
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
            Document <span className="text-primary-400">Generator</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Create legally-valid documents in minutes with our easy-to-use document generator. Includes ₹10 stamp and professional formatting.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Select Template</h3>
              <p className="text-sm text-neutral-400">
                Choose from our library of legal document templates designed for Indian law.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Fill Details</h3>
              <p className="text-sm text-neutral-400">
                Enter your information and customize the document to fit your needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/30 text-primary-400">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Instant Generation</h3>
              <p className="text-sm text-neutral-400">
                Get your professionally formatted document with ₹10 stamp in seconds.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <DocumentForm />
          </motion.div>
          
          <div className="mt-8 rounded-lg border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Important Information</h3>
            <div className="text-sm text-neutral-400">
              <p className="mb-2">
                Documents generated by Lawgorithm are for general use and comply with standard Indian legal formats. While these documents include a digital ₹10 stamp representation, some situations may require physical stamped paper depending on jurisdiction.
              </p>
              <p>
                For complex legal matters, we recommend consulting with a qualified lawyer. You can use our "Find a Lawyer" feature to connect with legal professionals in your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;