"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { rotateIn } from "@/lib/animation-utils";

export const EberMascot = () => {
    return (
        <motion.div
            variants={rotateIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-electric-cyan/20 blur-[100px] rounded-full animate-pulse-slow" />

            {/* Real Eber Logo */}
            <div className="relative z-10 w-full h-full p-8 transition-transform duration-500 hover:scale-105">
                <Image
                    src="/logo.svg"
                    alt="Eber Mascot"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                />
            </div>
        </motion.div>
    );
};
