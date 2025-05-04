
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <header className="border-b border-border sticky top-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18H17V16H7V18Z" fill="white"/>
              <path d="M17 14H7V12H17V14Z" fill="white"/>
              <path d="M7 10H11V8H7V10Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 8.73478 20.8946 8.48043 20.7071 8.29289L15.7071 3.29289C15.5196 3.10536 15.2652 3 15 3H6ZM5 5C5 4.44772 5.44772 4 6 4H14V9C14 9.55228 14.4477 10 15 10H20V19C20 19.5523 19.5523 20 19 20H6C5.44772 20 5 19.5523 5 19V5ZM19.2929 8L16 4.70711V8H19.2929Z" fill="white"/>
            </svg>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
            All In One PDF Tool
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                  Tools <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/merge-pdf" className="w-full">Merge PDF</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/compress-pdf" className="w-full">Compress PDF</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/convert-to-pdf" className="w-full">Convert to PDF</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/pdf-to-word" className="w-full">PDF to Word</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/add-page-numbers" className="w-full">Add Page Numbers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/tools" className="w-full font-semibold text-primary-600">All Tools</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
