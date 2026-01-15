"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AwardBadge = ({ className }: { className?: string }) => {
    return (
        <div className={cn("relative w-64 h-64 flex items-center justify-center", className)}>
            {/* Rotating text ring */}
            <motion.div
                className="absolute inset-0 border-2 border-electric-cyan/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                    <text className="text-[8px] font-bold uppercase tracking-[0.2em] fill-electric-cyan">
                        <textPath href="#circlePath" startOffset="0%">
                            • Zertifizierter Partner • TradeHub Excellence Award 2024
                        </textPath>
                    </text>
                </svg>
            </motion.div>

            {/* Inner Circle Glow */}
            <div className="absolute inset-4 bg-deep-navy/80 backdrop-blur-sm rounded-full border border-electric-cyan/20 flex items-center justify-center shadow-[0_0_30px_rgba(1,250,249,0.15)]">
                <div className="text-center">
                    <div className="text-xl font-bold text-white leading-none">TOP</div>
                    <div className="text-3xl font-black text-electric-cyan leading-none my-1">1%</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest">Handwerker</div>
                </div>
            </div>

            {/* Animated Particles */}
            <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }} />
            </div>
        </div>
    );
};
