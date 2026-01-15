"use client";

import { cn } from "@/lib/utils";

interface ScrollGuideProps {
  className?: string;
}

export const ScrollGuide = ({ 
  className 
}: ScrollGuideProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 right-0 w-px z-10 pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Simple dashed line */}
      <div
        className={cn(
          "absolute inset-y-0 w-full border-l border-dashed",
          "border-electric-cyan/30"
        )}
      />
    </div>
  );
};
