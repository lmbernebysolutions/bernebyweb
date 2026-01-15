"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animation-utils";
import { StarRating } from "@/components/ui/star-rating";

const CLIENTS = [
    { name: "Bauer Bedachungen", logo: "/logos/bauer.svg" }, // Placeholder paths
    { name: "Klein Sanitär", logo: "/logos/klein.svg" },
    { name: "Weber Elektro", logo: "/logos/weber.svg" },
    { name: "Meyer Maler", logo: "/logos/meyer.svg" },
    { name: "Holzbau Müller", logo: "/logos/mueller.svg" },
    { name: "Schmidt Fenster", logo: "/logos/schmidt.svg" },
];

export const TrustSection = () => {
    return (
        <section className="py-20 bg-deep-navy border-b border-white/5 relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Vertraut von <span className="text-electric-cyan">20+ Handwerksbetrieben</span> im Erzgebirgskreis
                    </motion.h2>

                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-6 text-gray-400 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <StarRating rating={5} className="w-4 h-4" />
                            <span>4.9/5 Durchschnittsbewertung</span>
                        </div>
                        <span className="hidden md:inline">•</span>
                        <span>250.000€+ Umsatz generiert</span>
                    </motion.div>
                </motion.div>

                {/* Logo Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center opacity-70"
                >
                    {CLIENTS.map((client, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 cursor-pointer opacity-50 hover:opacity-100"
                        >
                            {/* Placeholder for actual logos */}
                            <div className="h-12 flex items-center justify-center font-bold text-lg text-white/40 border border-white/10 rounded-hauer bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                                {client.name.split(" ")[0]}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
