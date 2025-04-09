
import React from 'react';
import { BalanceScale, Facebook, Twitter, Linkedin, Youtube, Globe, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-legal-dark text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <BalanceScale className="h-6 w-6 text-legal-gold mr-2" />
              <span className="font-semibold text-xl">Legal AI</span>
            </div>
            <p className="mb-4 text-sm">
              Legal AI provides expert legal assistance using state-of-the-art AI technology. Our platform is designed to help you with legal queries, document verification, and real-time legal advice.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-legal-gold transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-legal-gold transition-colors" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-legal-gold transition-colors" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-legal-gold transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-legal-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-legal-gold transition-colors">About Us</Link></li>
              <li><Link to="/services/criminal-law" className="hover:text-legal-gold transition-colors">Criminal Law</Link></li>
              <li><Link to="/services/family-law" className="hover:text-legal-gold transition-colors">Family Law</Link></li>
              <li><Link to="/services/corporate-law" className="hover:text-legal-gold transition-colors">Corporate Law</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center mb-3">
              <Phone className="h-5 w-5 mr-2 text-legal-gold" />
              <span>Phone: +123 456 7890</span>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-5 w-5 mr-2 text-legal-gold" />
              <span>Email: support@legalai.com</span>
            </div>
            <div className="flex items-center mb-3">
              <Globe className="h-5 w-5 mr-2 text-legal-gold" />
              <span>Website: www.legalai.com</span>
            </div>
            <Link to="/contact" className="inline-block mt-2 bg-legal-gold text-black font-medium py-2 px-4 rounded hover:bg-opacity-80 transition-colors">
              Get Legal Advice
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © 2025 Legal AI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
