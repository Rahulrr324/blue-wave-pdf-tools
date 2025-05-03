
import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className = '' }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  
  useEffect(() => {
    // Animate the progress value
    const animationFrame = requestAnimationFrame(() => {
      setDisplayProgress(prev => {
        if (Math.abs(prev - progress) < 1) return progress;
        return prev + (progress - prev) * 0.2;
      });
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [progress]);
  
  return (
    <div className={`w-full ${className}`}>
      <Progress value={displayProgress} className="h-2" />
      <p className="text-xs text-gray-500 mt-1 text-right">{Math.round(displayProgress)}%</p>
    </div>
  );
};

export default ProgressBar;
