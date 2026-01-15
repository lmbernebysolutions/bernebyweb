"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LogoProps {
    className?: string;
    scrolled?: boolean;
    variant?: "header" | "footer";
}

export const Logo = ({ className, scrolled = false, variant = "header" }: LogoProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const showFullText = !scrolled || variant === "footer";

    return (
        <Link
            href="/"
            className={cn("flex items-center gap-2 group", className)}
            aria-label="Berneby Solutions Home"
        >
            {/* Text mit Cyan B Icon als erstes Zeichen */}
            <div className="flex flex-col">
                {/* "BERNEBY" - mit Cyan B Icon statt "B" */}
                <div className={cn(
                    "flex items-center tracking-tight leading-none transition-all duration-300",
                    variant === "footer" 
                        ? "text-2xl text-white" 
                        : scrolled 
                            ? "text-xl text-deep-navy dark:text-white" 
                            : "text-2xl text-white",
                    // Mobile: Nur B-Icon oder B + "ERNEBY" (ohne Solutions)
                    isMobile && "hidden sm:flex"
                )}>
                    {/* Cyan B Icon ersetzt das "B" - größer und sehr nah an ERNEBY */}
                    <div className={cn(
                        "relative flex items-center justify-center flex-shrink-0 z-10",
                        variant === "footer" 
                            ? "w-[2.2em] h-[2.2em] -mr-[0.3em]" 
                            : scrolled 
                                ? "w-[1.8em] h-[1.8em] -mr-[0.25em]" 
                                : "w-[2.1em] h-[2.1em] -mr-[0.3em]"
                    )}>
                        <Image
                            src="/assets/cyan-b-icon.svg"
                            alt="Berneby B Icon"
                            width={variant === "footer" ? 44 : scrolled ? 36 : 48}
                            height={variant === "footer" ? 44 : scrolled ? 36 : 48}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-electric-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Rest des Textes "ERNEBY" - überschneidet sich mit B */}
                    <span className="font-bold relative z-0 -ml-[0.4em]">
                        ERNEBY
                    </span>
                </div>
                
                {/* "Solutions" - genau unter "ERNEBY" ausgerichtet */}
                <AnimatePresence>
                    {showFullText && (
                        <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                                "uppercase tracking-widest font-medium transition-colors",
                                variant === "footer"
                                    ? "text-xs text-electric-cyan"
                                    : scrolled
                                        ? "text-[0.5rem] text-rust-orange"
                                        : "text-[0.6rem] text-electric-cyan",
                                // Mobile: "Solutions" ausblenden
                                "hidden lg:block"
                            )}
                            style={{
                                marginLeft: variant === "footer" 
                                    ? "-0.4em" 
                                    : scrolled 
                                        ? "-0.4em" 
                                        : "-0.4em"
                            }}
                        >
                            Solutions
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </Link>
    );
};
