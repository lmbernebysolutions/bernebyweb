import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  variant: {
    default: "border-transparent bg-slate-900 text-slate-50",
    secondary: "border-transparent bg-slate-100 text-slate-900",
    destructive: "border-transparent bg-red-500 text-slate-50",
    outline: "text-slate-950",
    glass: "bg-white/20 backdrop-blur-md border border-white/30 text-white",
  },
  size: {
    default: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  }
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants.variant;
  size?: keyof typeof badgeVariants.size;
  icon?: React.ReactNode;
}

function Badge({ className, variant = "default", size="default", icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn("inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2", badgeVariants.variant[variant], badgeVariants.size[size], className)} {...props}>
      {icon && <span className="mr-1.5 -ml-0.5 inline-block h-4 w-4">{icon}</span>}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
