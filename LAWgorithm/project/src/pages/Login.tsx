import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, Mail, Lock, EyeOff, Eye } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-neutral-800 bg-neutral-900 p-8 shadow-lg"
          >
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-900/30">
                <Scale className="h-8 w-8 text-primary-400" />
              </div>
              <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
              <p className="mt-2 text-sm text-neutral-400">
                Sign in to your Lawgorithm account
              </p>
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 rounded-md bg-error-500/10 p-3 text-sm text-error-500"
              >
                {error}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-neutral-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 py-2 pl-10 pr-4 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-neutral-300">
                    Password
                  </label>
                  <a href="#" className="text-xs text-primary-400 hover:text-primary-300">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-neutral-500" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 py-2 pl-10 pr-10 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md bg-primary-600 py-2 text-center font-medium text-white transition-colors hover:bg-primary-700 disabled:opacity-70"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </motion.button>
            </form>
            
            <div className="mt-6 text-center text-sm text-neutral-400">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-primary-400 hover:text-primary-300">
                Register
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;