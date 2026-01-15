import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface USPCardProps {
    children: ReactNode;
    className?: string;
    gradient?: string;
}

export const USPCard = ({ children, className, gradient }: USPCardProps) => {
    return (
        <div className={cn(
            "relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950 p-6 flex flex-col justify-between group hover:border-electric-cyan/50 transition-all duration-500",
            className
        )}>

            {/* Dynamic background gradient */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700",
                gradient || "bg-gradient-to-br from-electric-cyan to-blue-600"
            )} />

            {/* Content wrapper with Z-index */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>

        </div>
    );
};
