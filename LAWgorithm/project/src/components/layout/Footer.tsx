import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 pt-12 text-neutral-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">Lawgorithm</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-400">
              India's Smart Legal Web Assistant, providing AI-powered legal guidance, document generation, and lawyer discovery.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary-500"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary-500"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary-500"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary-500"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-sm transition-colors hover:text-primary-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-sm transition-colors hover:text-primary-500">
                  Legal AI
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-sm transition-colors hover:text-primary-500">
                  Document Generator
                </Link>
              </li>
              <li>
                <Link to="/lawyers" className="text-sm transition-colors hover:text-primary-500">
                  Find a Lawyer
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm transition-colors hover:text-primary-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm transition-colors hover:text-primary-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Legal Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm transition-colors hover:text-primary-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors hover:text-primary-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors hover:text-primary-500">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors hover:text-primary-500">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors hover:text-primary-500">
                  Legal Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400" />
                <span className="text-sm">support@lawgorithm.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400" />
                <span className="text-sm">+91 1234567890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 py-6 text-center">
          <p className="text-xs text-neutral-500">
            © {currentYear} Lawgorithm. All rights reserved. Legal information on this site is not legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;