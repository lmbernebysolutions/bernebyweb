import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-primary-900 text-white hover:bg-primary-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
    destructive: "bg-red-500 text-white hover:bg-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
    link: "text-slate-900 underline-offset-4 hover:underline",
    accent: "bg-accent-600 text-white hover:bg-accent-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, ...props }, ref) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      buttonVariants.variant[variant],
      buttonVariants.size[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={baseStyles}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        className={baseStyles}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
