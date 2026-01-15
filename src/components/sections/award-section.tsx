"use client";

import { motion } from "framer-motion";
import { AwardBadge } from "@/components/ui/award-badge";
import { Award, Trophy, Medal } from "lucide-react";
import ShimmerButton from "@/components/libraries/magic-ui/shimmer-button";
import { fadeInUp } from "@/lib/animation-utils";

export const AwardSection = () => {
    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Badge */}
                    <motion.div
                        className="w-full lg:w-1/3 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <AwardBadge />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="p-2 bg-electric-cyan/10 rounded-hauer border border-electric-cyan/20">
                                <Trophy className="w-5 h-5 text-electric-cyan" />
                            </span>
                            <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm">
                                Ausgezeichnet
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Gehöre zu den <span className="text-electric-cyan">Besten 1%</span> deiner Region.
                        </h2>

                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Berneby-Partner werden automatisch für den TradeHub Excellence Award nominiert. Ein Qualitätssiegel, das Vertrauen schafft und dich von der Konkurrenz abhebt.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Medal className="w-5 h-5 text-gray-500" />
                                <span className="text-sm text-gray-300">Offizielles Siegel</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="w-5 h-5 text-gray-500" />
                                <span className="text-sm text-gray-300">Urkunde für den Showroom</span>
                            </div>
                        </div>

                        <ShimmerButton className="w-fit px-6 py-2 text-sm">
                            Jetzt qualifizieren
                        </ShimmerButton>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
