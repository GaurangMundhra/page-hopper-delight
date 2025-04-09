
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { BalanceScale } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-legal-dark text-white py-3 px-6 md:px-12">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" className="flex items-center">
            <BalanceScale className="h-6 w-6 text-legal-gold mr-2" />
            <span className="font-semibold text-xl tracking-tight">Legal AI</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-legal-gold hover:border-legal-gold">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-legal-gold mr-6">
              Home
            </Link>
            <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-legal-gold mr-6">
              About Us
            </Link>
            <Link to="/services" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-legal-gold mr-6">
              Services
            </Link>
            <Link to="/news" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-legal-gold mr-6">
              News
            </Link>
            <Link to="/categories" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-legal-gold mr-6">
              Legal Categories
            </Link>
            <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-legal-gold">
              Contact
            </Link>
          </div>
          <div>
            <Button asChild variant="ghost" className="text-white hover:text-legal-gold">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
