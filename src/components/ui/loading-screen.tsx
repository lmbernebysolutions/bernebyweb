"use client";

import { motion } from "framer-motion";
import { CyanBIcon } from "./cyan-b-icon";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onComplete?: () => void;
}

/**
 * Lade-Screen - Pulsierendes cyanfarbenes B
 */
export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Simuliere Ladezeit (kann durch echte Lade-Logik ersetzt werden)
        const timer = setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-deep-navy flex items-center justify-center"
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <CyanBIcon size={120} opacity={1} />
            </motion.div>
        </motion.div>
    );
};
