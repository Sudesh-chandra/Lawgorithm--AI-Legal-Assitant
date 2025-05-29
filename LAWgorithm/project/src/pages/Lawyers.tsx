import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LawyerCard, { Lawyer } from '../components/lawyers/LawyerCard';
import { Search, MapPin, Filter, SlidersHorizontal } from 'lucide-react';

// Mock data for lawyers
const mockLawyers: Lawyer[] = [
  {
    id: '1',
    name: 'Adv. Rajesh Sharma',
    image: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialization: 'Criminal Law, Constitutional Law',
    rating: 4.8,
    experience: 15,
    location: 'Delhi',
    phone: '+91 98765 43210',
    email: 'rajesh.sharma@example.com',
    availability: 'Mon-Fri, 10:00 AM - 6:00 PM',
    bio: 'Rajesh Sharma is a senior advocate with 15 years of experience in Criminal and Constitutional Law. He has represented clients in the Supreme Court and various High Courts across India.',
  },
  {
    id: '2',
    name: 'Adv. Priya Patel',
    image: 'https://images.pexels.com/photos/7821579/pexels-photo-7821579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialization: 'Family Law, Divorce',
    rating: 4.7,
    experience: 10,
    location: 'Mumbai',
    phone: '+91 97654 32109',
    email: 'priya.patel@example.com',
    availability: 'Mon-Sat, 9:00 AM - 5:00 PM',
    bio: 'Priya Patel specializes in Family Law with a focus on divorce cases. She is known for her empathetic approach and has helped numerous families navigate difficult legal situations.',
  },
  {
    id: '3',
    name: 'Adv. Arjun Singh',
    image: 'https://images.pexels.com/photos/8107807/pexels-photo-8107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialization: 'Corporate Law, Mergers & Acquisitions',
    rating: 4.9,
    experience: 12,
    location: 'Bangalore',
    phone: '+91 96543 21098',
    email: 'arjun.singh@example.com',
    availability: 'Mon-Fri, 9:00 AM - 7:00 PM',
    bio: 'Arjun Singh is a leading corporate lawyer who has advised numerous startups and established businesses. His expertise in M&A has made him a sought-after legal consultant in the tech industry.',
  },
  {
    id: '4',
    name: 'Adv. Meera Reddy',
    image: 'https://images.pexels.com/photos/6936136/pexels-photo-6936136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialization: 'Property Law, Real Estate',
    rating: 4.6,
    experience: 8,
    location: 'Chennai',
    phone: '+91 95432 10987',
    email: 'meera.reddy@example.com',
    availability: 'Tue-Sun, 10:00 AM - 6:00 PM',
    bio: 'Meera Reddy has extensive experience in Property Law and Real Estate transactions. She helps clients navigate complex property disputes and ensures secure property transactions.',
  },
  {
    id: '5',
    name: 'Adv. Vikram Malhotra',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialization: 'Intellectual Property, Patent Law',
    rating: 4.8,
    experience: 14,
    location: 'Delhi',
    phone: '+91 94321 09876',
    email: 'vikram.malhotra@example.com',
    availability: 'Mon-Fri, 9:00 AM - 5:00 PM',
    bio: 'Vikram Malhotra is an expert in Intellectual Property and Patent Law. He has helped numerous tech companies and innovators protect their intellectual assets and navigate patent registrations.',
  },
  {
    id: '6',
    name: 'Adv. Sunita Joshi',
    image: 'https://images.pexels.com/photos/8101532/pexels-photo-8101532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialization: 'Civil Law, Consumer Protection',
    rating: 4.5,
    experience: 9,
    location: 'Hyderabad',
    phone: '+91 93210 98765',
    email: 'sunita.joshi@example.com',
    availability: 'Mon-Sat, 10:00 AM - 7:00 PM',
    bio: 'Sunita Joshi focuses on Civil Law and Consumer Protection cases. She is committed to fighting for consumer rights and has won significant cases against major corporations.',
  },
];

const locations = ['All Locations', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune'];
const specializations = ['All Specializations', 'Criminal Law', 'Family Law', 'Corporate Law', 'Property Law', 'Intellectual Property', 'Civil Law', 'Constitutional Law', 'Divorce'];

const Lawyers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All Specializations');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filteredLawyers = mockLawyers.filter((lawyer) => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocation === 'All Locations' || lawyer.location === selectedLocation;
    
    const matchesSpecialization = selectedSpecialization === 'All Specializations' || 
                                  lawyer.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesSpecialization;
  });

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
            Find a <span className="text-primary-400">Lawyer</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Connect with qualified lawyers across India. Filter by location, specialization, and experience to find the right legal expert for your needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-grow">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-neutral-500" />
              </div>
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-neutral-700 bg-neutral-800 py-3 pl-10 pr-4 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
            
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MapPin className="h-5 w-5 text-neutral-500" />
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="rounded-md border border-neutral-700 bg-neutral-800 py-3 pl-10 pr-10 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Filter className="h-5 w-5 text-neutral-500" />
              </div>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="rounded-md border border-neutral-700 bg-neutral-800 py-3 pl-10 pr-10 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                {specializations.map((specialization) => (
                  <option key={specialization} value={specialization}>
                    {specialization}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-white md:hidden"
            >
              <SlidersHorizontal className="mr-2 h-5 w-5" />
              Filters
            </button>
          </div>
          
          {/* Mobile filter menu */}
          {isFilterMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4 rounded-md border border-neutral-700 bg-neutral-800 p-4 md:hidden"
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-400">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 py-2 px-3 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-400">
                  Specialization
                </label>
                <select
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 py-2 px-3 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                >
                  {specializations.map((specialization) => (
                    <option key={specialization} value={specialization}>
                      {specialization}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={() => setIsFilterMenuOpen(false)}
                className="w-full rounded-md bg-primary-600 py-2 text-center font-medium text-white"
              >
                Apply Filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {filteredLawyers.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredLawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              >
                <LawyerCard lawyer={lawyer} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-lg border border-neutral-800 bg-neutral-900 p-8 text-center"
          >
            <p className="text-lg text-neutral-400">
              No lawyers found matching your criteria. Try adjusting your filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Lawyers;