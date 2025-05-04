
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/merge-pdf" className="text-gray-600 hover:text-primary-600 transition-colors">Merge PDF</Link></li>
              <li><Link to="/compress-pdf" className="text-gray-600 hover:text-primary-600 transition-colors">Compress PDF</Link></li>
              <li><Link to="/convert-to-pdf" className="text-gray-600 hover:text-primary-600 transition-colors">Convert to PDF</Link></li>
              <li><Link to="/pdf-to-word" className="text-gray-600 hover:text-primary-600 transition-colors">PDF to Word</Link></li>
              <li><Link to="/tools" className="text-gray-600 hover:text-primary-600 transition-colors">All Tools</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-primary-600 transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary-600 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-primary-600 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-gray-600 hover:text-primary-600 transition-colors">Log In</Link></li>
              <li><Link to="/signup" className="text-gray-600 hover:text-primary-600 transition-colors">Sign Up</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
              <FileText className="h-4 w-4" />
            </div>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
              All In One PDF Tool
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All In One PDF Tool. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
