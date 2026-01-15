"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const TransitionBanner = () => {
    return (
        <section className="py-16 bg-deep-navy text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl md:text-3xl font-medium mb-2">
                        Es ist nicht deine Schuld.
                    </h3>
                    <p className="text-xl md:text-2xl text-electric-cyan font-bold flex items-center justify-center gap-3">
                        Aber es gibt eine bessere Lösung.
                        <ArrowRight className="w-6 h-6 animate-pulse" />
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
