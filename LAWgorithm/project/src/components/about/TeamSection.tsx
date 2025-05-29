import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Valikala Sudesh Chandra',
    role: 'Project Lead, Chief Developer',
   image: "https://i.postimg.cc/sDZNDfSN/CARDSHORT.jpg",
    bio: 'Led the development of Lawgorithm from concept to execution. Expert in legal tech solutions and AI integration for the Indian legal system.',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'sudesh@lawgorithm.in',
    },
  },
  {
    id: '2',
    name: 'Harish Reddy Koki',
    role: 'Research Analyst',
     image: "https://i.postimg.cc/vZY27rkp/HARISH-BARIN-ARSTOMER.jpg",
    bio: 'Specialized in legal research and documentation standards. Ensures all legal content is accurate and compliant with Indian law.',
    social: {
      linkedin: '#',
      github: '#',
      email: 'harish@lawgorithm.in',
    },
  }
];

const TeamSection: React.FC = () => {
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
            Meet Our <span className="text-primary-400">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-neutral-400"
          >
            The minds behind Lawgorithm, combining legal expertise with cutting-edge technology.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="w-80 h-[400px]"
      style={{ perspective: '1000px' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-lg border border-neutral-800 bg-neutral-900 overflow-hidden cursor-pointer"
          style={{
            backfaceVisibility: 'hidden',
          }}
          onClick={() => setIsFlipped(true)}
        >
          <div className="h-[60%] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-primary-400">{member.role}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(true);
              }}
              className="mt-3 inline-flex items-center text-sm text-neutral-400 hover:text-primary-400"
            >
              Read Bio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-lg border border-neutral-800 bg-neutral-900 p-6 cursor-pointer"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          onClick={() => setIsFlipped(false)}
        >
          <div className="flex h-full flex-col">
            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-primary-400">{member.role}</p>
            <p className="mt-4 flex-grow text-sm text-neutral-300">{member.bio}</p>

            <div className="mt-4 flex space-x-3">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary-400"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary-400"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <Github size={18} />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary-400"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter size={18} />
                </a>
              )}
              {member.social.email && (
                <a
                  href={`mailto:${member.social.email}`}
                  className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary-400"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={18} />
                </a>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="mt-4 w-full rounded-md border border-neutral-700 bg-neutral-800 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              Back to Profile
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamSection;
