"use client";

import { cn } from "@/lib/utils";

interface SectionTrailDividerProps {
  variant?: 'default' | 'dashed' | 'dotted' | 'gradient' | 'glow';
  className?: string;
  height?: number;
}

/**
 * Section Trail Divider - Modern GitHub-Style Dividers
 * Clean, elegant dividers that match the industrial design system
 */
export const SectionTrailDivider = ({ 
  variant = 'default',
  className,
  height = 80
}: SectionTrailDividerProps) => {
  return (
    <div
      className={cn(
        "relative w-full bg-deep-navy flex items-center justify-center",
        className
      )}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <div className="container mx-auto px-8 md:px-16 w-full h-full flex items-center">
        {variant === 'default' && (
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
        
        {variant === 'dashed' && (
          <svg
            width="100%"
            height="1"
            className="overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1"
              strokeDasharray="8 4"
            />
          </svg>
        )}
        
        {variant === 'dotted' && (
          <svg
            width="100%"
            height="1"
            className="overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          </svg>
        )}
        
        {variant === 'gradient' && (
          <div className="relative w-full h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
          </div>
        )}
        
        {variant === 'glow' && (
          <div className="relative w-full h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-cyan/40 to-transparent" />
            <div 
              className="absolute inset-0 blur-sm"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(1, 250, 249, 0.3), transparent)',
                boxShadow: '0 0 10px rgba(1, 250, 249, 0.2)'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
