import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scale } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';

const LadyJusticeModel = () => {
  // Since we can't load a real 3D model, we'll create a simplified representation
  return (
    <group position={[0, 0, 0]}>
      {/* Base */}
      <mesh position={[0, -2, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.5, 32]} />
        <meshStandardMaterial color="#3730a3" />
      </mesh>
      
      {/* Pedestal */}
      <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1, 2, 2, 32]} />
        <meshStandardMaterial color="#4338ca" />
      </mesh>
      
      {/* Figure body */}
      <mesh position={[0, 1, 0]} rotation={[0, 0, 0]}>
        <capsuleGeometry args={[0.8, 2, 16, 32]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.5} roughness={0.2} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 3, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.5} roughness={0.2} />
      </mesh>
      
      {/* Left arm */}
      <mesh position={[-1.2, 1.5, 0]} rotation={[0, 0, -Math.PI/4]}>
        <capsuleGeometry args={[0.2, 1.5, 16, 32]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.5} roughness={0.2} />
      </mesh>
      
      {/* Right arm */}
      <mesh position={[1.2, 1.5, 0]} rotation={[0, 0, Math.PI/4]}>
        <capsuleGeometry args={[0.2, 1.5, 16, 32]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.5} roughness={0.2} />
      </mesh>
      
      {/* Left scale */}
      <mesh position={[-2, 1.5, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#fcd34d" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Right scale */}
      <mesh position={[2, 1.5, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#fcd34d" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Scale connector */}
      <mesh position={[0, 2.5, 0]} rotation={[0, 0, Math.PI/2]}>
        <capsuleGeometry args={[0.05, 4, 16, 32]} />
        <meshStandardMaterial color="#fcd34d" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-primary-900/20"></div>
      
      {/* Particle overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      <div className="relative container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-20 md:pt-0">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-primary-900/30 px-3 py-1">
              <Scale className="mr-2 h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">India's Smart Legal Assistant</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Legal Solutions,{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Simplified.
              </span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-lg text-lg text-neutral-300 lg:mx-0">
              Navigate India's legal landscape with AI-powered assistance, document generation, and expert lawyer connections — all in one place.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                to="/chatbot"
                className="group inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Ask Legal Questions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/documents"
                className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-base font-medium text-white transition-all hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Generate Documents
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] w-full lg:h-[500px]"
            ref={containerRef}
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <OrbitControls 
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1}
                enablePan={false}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 2.5}
              />
              <LadyJusticeModel />
            </Canvas>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary-900/50 text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">AI Legal Chat</h3>
            <p className="text-neutral-400">Get instant answers to legal queries with our advanced AI assistant and fallback systems.</p>
          </div>
          
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary-900/50 text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-17.25c0-.621-.504-1.125-1.125-1.125H12.75m-1.5 0v1.5a1.125 1.125 0 01-1.125 1.125H8.25m2.25 0H5.625" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Document Generator</h3>
            <p className="text-neutral-400">Create legally-valid documents with built-in ₹10 stamp and professional formatting.</p>
          </div>
          
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary-900/50 text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Find Lawyers</h3>
            <p className="text-neutral-400">Connect with qualified lawyers near you, filtered by specialization and location.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;