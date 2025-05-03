
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  buttonText?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  title, 
  description, 
  icon, 
  to,
  buttonText = 'Use Tool' 
}) => {
  return (
    <div className="tool-card">
      <div className="w-16 h-16 mb-4 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="mt-auto pt-2">
        <Link to={to}>
          <Button variant="outline" className="hover:bg-primary-50 hover:text-primary-700">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
