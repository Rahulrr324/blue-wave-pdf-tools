
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="wavy-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Powerful PDF Tools at Your Fingertips
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Merge, compress, convert, and manage PDF files easily and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/tools">
              <Button size="lg" className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600">
                Explore All Tools
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-primary-300 text-primary-700 hover:bg-primary-50">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
