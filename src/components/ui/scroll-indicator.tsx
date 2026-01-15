"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
    return (
        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
                const nextSection = document.getElementById("trust-section");
                nextSection?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            <div className="flex flex-col items-center gap-2">
                <span className="text-electric-cyan/60 text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="text-electric-cyan w-6 h-6" />
            </div>
        </motion.div>
    );
};
