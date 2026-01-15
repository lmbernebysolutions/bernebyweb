"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";
import { staggerContainer, fadeInUp } from "@/lib/animation-utils";

export const HeroContent = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl mx-auto text-center z-20 flex flex-col items-center pt-16 md:pt-24"
        >
            <div className="mb-6 flex flex-col items-center">
                <motion.h1
                    variants={fadeInUp}
                    className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-white max-w-4xl mx-auto"
                >
                    Der digitale <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">Revierführer</span> für dein Handwerk
                </motion.h1>
            </div>

            {/* Quick USPs Summary */}
            <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-medium text-gray-400"
            >
                {[
                    "Regionale Dominanz",
                    "24/7 Voice-Guard",
                    "Social Media Marketing",
                    "Website Erstellung"
                ].map((usp, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                        <span>{usp}</span>
                    </div>
                ))}
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full"
            >
                <Link href="/contact" className="w-full sm:w-auto">
                    <InteractiveHoverButton className="w-full sm:w-auto text-sm md:text-base px-8 py-4 text-white">
                        Kostenlose Analyse starten
                    </InteractiveHoverButton>
                </Link>
                <Link href="/demo" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-gradient-to-b from-white/5 to-black/20 text-white font-medium hover:bg-white/5 hover:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all text-sm md:text-base">
                        Zur Live-Demo
                    </button>
                </Link>
            </motion.div>
        </motion.div >
    );
};
