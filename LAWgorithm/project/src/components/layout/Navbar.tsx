import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, Menu, X, Moon, Sun, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/chatbot', label: 'Legal AI' },
    { path: '/documents', label: 'Documents' },
    { path: '/lawyers', label: 'Find Lawyers' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-neutral-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-white">Lawgorithm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-400 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-neutral-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {user ? (
              <div className="hidden md:flex md:items-center md:space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1 rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-white"
                >
                  <User size={16} />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-md bg-neutral-800 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex md:items-center md:space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                  Register
                </Link>
              </div>
            )}

            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden"
      >
        <div className="bg-neutral-900 px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-primary-400 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-neutral-300'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 text-base font-medium text-neutral-300 transition-colors hover:text-primary-400"
                >
                  <User size={18} />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left text-base font-medium text-neutral-300 transition-colors hover:text-primary-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-base font-medium text-neutral-300 transition-colors hover:text-primary-400"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-base font-medium text-neutral-300 transition-colors hover:text-primary-400"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;