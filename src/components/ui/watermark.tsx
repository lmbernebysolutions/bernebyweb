"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WatermarkProps {
    className?: string;
}

/**
 * Industrial Watermark - "THE INDUSTRIAL WATERMARK"
 * Atmosphärisches Hintergrundelement für Hero Section
 * 
 * Design-Specs:
 * - Position: Absolut, rechts außen, halb angeschnitten
 * - Größe: Riesig (w-[800px]), fast abstrakt
 * - Stil: opacity mit Transparenz, blur-sm
 * - Rotation: Leicht geneigt (rotate-12) für Dynamik
 * - Animation: "Floating" - langsam auf und ab (Sinus-Welle)
 * - Layering: HINTER Text/Content (z-10), VOR reinem Hintergrund
 */
export const Watermark = ({ className }: WatermarkProps) => {
    return (
        <div 
            className={`absolute inset-0 pointer-events-none overflow-visible z-10 ${className || ""}`}
            aria-hidden="true"
        >
            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] opacity-[0.15] blur-[1px] rotate-12"
            >
                <Image
                    src="/assets/cyan-b-icon.svg"
                    alt="Berneby Logo Watermark"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                    style={{ background: 'transparent' }}
                    unoptimized
                />
            </motion.div>
        </div>
    );
};
