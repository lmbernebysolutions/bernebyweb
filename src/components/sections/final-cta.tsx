"use client";

import { motion } from "framer-motion";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden">

            <div className="container mx-auto px-8 md:px-16 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Bereit für <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">echtes Wachstum?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Keine Agentur-Buzzwords. Keine leeren Versprechen. <br />
                        Nur messbare Ergebnisse für dein Handwerksunternehmen.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <InteractiveHoverButton className="w-full md:w-auto px-8 py-4 text-lg font-bold border-electric-cyan/50 hover:border-electric-cyan text-white">
                            Jetzt Analyse anfordern
                        </InteractiveHoverButton>
                        <button className="px-8 py-4 rounded-full border border-white/10 bg-gradient-to-b from-white/5 to-black/20 text-white hover:bg-white/5 hover:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                            Termin vereinbaren <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
