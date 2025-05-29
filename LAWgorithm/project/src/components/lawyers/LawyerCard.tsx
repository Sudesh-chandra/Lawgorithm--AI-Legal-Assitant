import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Star, Phone, Mail, Clock } from 'lucide-react';

export interface Lawyer {
  id: string;
  name: string;
  image: string;
  specialization: string;
  rating: number;
  experience: number;
  location: string;
  phone: string;
  email: string;
  availability: string;
  bio: string;
}

interface LawyerCardProps {
  lawyer: Lawyer;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-[400px] w-full perspective-1000">
      <motion.div
        className="relative h-full w-full transform-style-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div
          className="absolute h-full w-full backface-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-lg"
          onClick={handleFlip}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-primary-500">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{lawyer.name}</h3>
                <div className="mt-1 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < lawyer.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-600'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-neutral-400">({lawyer.rating.toFixed(1)})</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center text-sm text-neutral-400">
              <Briefcase size={16} className="mr-2 text-primary-400" />
              <span>{lawyer.specialization}</span>
            </div>
            
            <div className="mt-2 flex items-center text-sm text-neutral-400">
              <MapPin size={16} className="mr-2 text-primary-400" />
              <span>{lawyer.location}</span>
            </div>
            
            <div className="mt-2 flex items-center text-sm text-neutral-400">
              <Clock size={16} className="mr-2 text-primary-400" />
              <span>{lawyer.experience} years experience</span>
            </div>

            <p className="mt-4 flex-grow text-sm text-neutral-300 line-clamp-4">
              {lawyer.bio}
            </p>

            <div className="mt-auto flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                Book Consultation
              </motion.button>
              <button
                onClick={handleFlip}
                className="rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
              >
                Contact Info
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute h-full w-full backface-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-lg rotate-y-180"
          onClick={handleFlip}
        >
          <div className="flex h-full flex-col">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3 rounded-md border border-neutral-800 bg-neutral-800/50 p-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-neutral-300">{lawyer.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3 rounded-md border border-neutral-800 bg-neutral-800/50 p-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-neutral-300">{lawyer.email}</span>
              </div>
              
              <div className="flex items-center space-x-3 rounded-md border border-neutral-800 bg-neutral-800/50 p-3">
                <Clock className="h-5 w-5 text-primary-400" />
                <span className="text-neutral-300">{lawyer.availability}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-semibold text-neutral-400">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {lawyer.specialization.split(',').map((spec, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary-900/50 px-3 py-1 text-xs font-medium text-primary-400"
                  >
                    {spec.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                Send Message
              </motion.button>
              <button
                onClick={handleFlip}
                className="rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LawyerCard;