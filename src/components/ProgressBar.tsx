
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <Progress value={progress} className="h-2" />
      <p className="text-xs text-gray-500 mt-1 text-right">{Math.round(progress)}%</p>
    </div>
  );
};

export default ProgressBar;
