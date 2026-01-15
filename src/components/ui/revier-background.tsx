"use client";

import { cn } from "@/lib/utils";

interface RevierBackgroundProps {
  variant?: 'grid' | 'topography';
  className?: string;
}

export const RevierBackground = ({ 
  variant = 'grid', 
  className 
}: RevierBackgroundProps) => {
  const gridPattern = (
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="blueprint-grid"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="20"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white"
          />
          <line
            x1="0"
            y1="0"
            x2="20"
            y2="0"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white"
          />
        </pattern>
        <linearGradient id="grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.01" />
          <stop offset="20%" stopColor="white" stopOpacity="0.005" />
          <stop offset="50%" stopColor="white" stopOpacity="0.002" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-grid)" opacity="0.01" />
      <rect width="100%" height="100%" fill="url(#grid-fade)" />
    </svg>
  );

  const topographyPattern = (
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="topography-lines"
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          {/* Subtle curved lines resembling topographic contours */}
          <path
            d="M 0 100 Q 50 80, 100 100 T 200 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white"
          />
          <path
            d="M 0 120 Q 50 100, 100 120 T 200 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white"
          />
          <path
            d="M 0 80 Q 50 60, 100 80 T 200 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white"
          />
        </pattern>
        <linearGradient id="topography-fade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.01" />
          <stop offset="20%" stopColor="white" stopOpacity="0.005" />
          <stop offset="50%" stopColor="white" stopOpacity="0.002" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#topography-lines)" opacity="0.01" />
      <rect width="100%" height="100%" fill="url(#topography-fade)" />
    </svg>
  );

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      {variant === 'grid' ? gridPattern : topographyPattern}
    </div>
  );
};
