
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b border-border sticky top-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
            All In One PDF Tool
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/tools" className="text-gray-700 hover:text-primary-600 transition-colors">
            Tools
          </Link>
          <Link to="/help" className="text-gray-700 hover:text-primary-600 transition-colors">
            Help
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-gray-700 hover:text-primary-600 transition-colors hidden md:inline-block">
            Log In
          </Link>
          <Link to="/signup" className="hidden md:inline-block">
            <Button variant="outline" size="sm">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
