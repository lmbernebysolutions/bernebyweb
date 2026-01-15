"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animation-utils";

export const EberSad = () => {
    return (
        <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full max-w-[400px] aspect-square"
        >
            {/* Muted Glow Effect */}
            <div className="absolute inset-0 bg-blue-900/10 blur-[80px] rounded-full" />

            <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full relative z-10 drop-shadow-lg opacity-90"
            >
                {/* Body Shape - Slightly slumped */}
                <path
                    d="M100 220 C100 120 200 70 300 120 C350 145 380 200 350 270 C320 340 200 370 100 320 C50 295 80 270 100 220"
                    className="fill-deep-navy stroke-blue-500/50 stroke-[3]"
                />

                {/* Droopy Ears */}
                <path d="M110 140 L90 190 L130 180 Z" className="fill-deep-navy stroke-blue-500/50 stroke-[2]" />
                <path d="M290 140 L310 190 L270 180 Z" className="fill-deep-navy stroke-blue-500/50 stroke-[2]" />

                {/* Tusks - Pointing down slightly */}
                <path
                    d="M120 280 Q100 260 140 250"
                    className="stroke-gray-400 stroke-[8] fill-none"
                />
                <path
                    d="M280 280 Q300 260 260 250"
                    className="stroke-gray-400 stroke-[8] fill-none"
                />

                {/* Eyes (Sad/Closed) */}
                <path d="M145 190 Q160 185 175 190" className="stroke-blue-200 stroke-[4] fill-none" />
                <path d="M225 190 Q240 185 255 190" className="stroke-blue-200 stroke-[4] fill-none" />

                {/* Tear (Animated) */}
                <motion.circle
                    cx="250" cy="200" r="4"
                    className="fill-electric-cyan"
                    animate={{ y: [0, 40], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />

                {/* Snout */}
                <ellipse cx="200" cy="250" rx="40" ry="30" className="fill-deep-navy/50 stroke-blue-500/50 stroke-[2]" />
                <circle cx="185" cy="250" r="5" className="fill-deep-navy" />
                <circle cx="215" cy="250" r="5" className="fill-deep-navy" />

                {/* Mouth - Frown */}
                <path d="M180 295 Q200 285 220 295" className="stroke-blue-200 stroke-[3] fill-none" />

                {/* Question Marks */}
                <text x="320" y="100" fill="#60a5fa" className="text-4xl font-bold opacity-50">?</text>
                <text x="60" y="150" fill="#60a5fa" className="text-3xl font-bold opacity-30">?</text>
            </svg>
        </motion.div>
    );
};
