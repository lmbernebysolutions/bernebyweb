"use client";

import { motion } from "framer-motion";
import { ReviewTimeline } from "@/components/ui/review-timeline";
import { ScanEye, Star, MessageSquareWarning, ThumbsUp } from "lucide-react";
import { slideInFromRight } from "@/lib/animation-utils";
import ShimmerButton from "@/components/libraries/magic-ui/shimmer-button";

export const ReviewRadarSection = () => {
    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={slideInFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="p-2 bg-orange-500/10 rounded-lg">
                                <ScanEye className="w-5 h-5 text-orange-400" />
                            </span>
                            <span className="text-orange-400 font-bold uppercase tracking-wider text-sm">
                                Review-Radar
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Deine Reputation <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">auf Autopilot.</span>
                        </h2>

                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Ein einziger Klick für den Kunden, 5 Sterne für dich. Unser System fragt zufriedene Kunden automatisch nach Bewertungen und fängt negative Stimmen ab, bevor sie öffentlich werden.
                        </p>

                        <div className="space-y-6 mb-10">
                            <Feature
                                icon={Star}
                                title="Mehr 5-Sterne Bewertungen"
                                desc="Automatisierte SMS & E-Mail Kampagnen nach Abschluss"
                            />
                            <Feature
                                icon={MessageSquareWarning}
                                title="Kritik-Schutzschild"
                                desc="Unzufriedene Kunden werden auf ein internes Feedback-Formular geleitet"
                            />
                            <Feature
                                icon={ThumbsUp}
                                title="Einfachste Bedienung"
                                desc="Kein Account-Zwang für Kunden. Maximale Conversion."
                            />
                        </div>

                        <ShimmerButton className="w-fit px-8">
                            Reputation steigern
                        </ShimmerButton>
                    </motion.div>

                    {/* Right: Timeline Demo */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <ReviewTimeline />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const Feature = ({ icon: Icon, title, desc }: any) => (
    <div className="flex gap-4 items-start">
        <div className="mt-1 bg-electric-cyan/10 p-2 rounded-hauer border border-electric-cyan/20 hover:border-electric-cyan/40 transition-all">
            <Icon className="w-5 h-5 text-electric-cyan" />
        </div>
        <div>
            <h4 className="text-white font-bold text-base">{title}</h4>
            <p className="text-gray-500 text-sm mt-1">{desc}</p>
        </div>
    </div>
);
