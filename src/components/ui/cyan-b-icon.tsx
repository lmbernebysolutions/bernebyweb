"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CyanBIconProps {
    className?: string;
    size?: number;
    opacity?: number;
}

/**
 * Cyan B Icon - Das Herzstück des Berneby Logos
 * Wird als eigenständiges grafisches Element verwendet
 */
export const CyanBIcon = ({ className, size = 40, opacity = 1 }: CyanBIconProps) => {
    return (
        <div 
            className={cn("relative flex items-center justify-center", className)} 
            style={{ width: size, height: size, opacity }}
        >
            <Image
                src="/assets/cyan-b-icon.svg"
                alt="Cyan B Icon"
                width={size}
                height={size}
                className="w-full h-full object-contain"
            />
        </div>
    );
};
