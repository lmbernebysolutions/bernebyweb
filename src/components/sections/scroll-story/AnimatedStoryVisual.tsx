"use client";

import { motion, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedStoryVisualProps {
    children: ReactNode;
    progress: any;
    type: "problem" | "solution";
}

export const AnimatedStoryVisual = ({ children, progress }: AnimatedStoryVisualProps) => {
    const opacity = useTransform(progress, [0, 0.2], [0, 1]);
    const scale = useTransform(progress, [0, 0.3], [0.8, 1]);
    const y = useTransform(progress, [0, 0.3], [30, 0]);

    return (
        <motion.div
            style={{ opacity, scale, y }}
            className="relative w-full h-full"
        >
            {children}
        </motion.div>
    );
};
