"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "@/components/ui/globe";
import { CheckCircle2 } from "lucide-react";
import { slideInFromLeft } from "@/lib/animation-utils";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";

export const GeoNetSection = () => {
    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden">
            {/* Background Pattern */}

            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

                    {/* Right: Globe Visual */}
                    <motion.div
                        className="w-full lg:w-1/2 relative min-h-[500px] flex flex-col items-center justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-full aspect-square max-w-[500px]">
                            <Globe className="scale-110" />
                        </div>

                        {/* Map Stats Card Overlay */}
                        <div className="relative mt-8 grid grid-cols-2 gap-4 w-full z-20">
                            <div className="bg-electric-cyan/5 border border-white/10 p-6 rounded-hauer backdrop-blur-md hover:border-white/20 transition-all">
                                <span className="block text-4xl font-bold text-white mb-1 font-mono">100%</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest">Abdeckung Erzgebirge</span>
                            </div>
                            <div className="bg-electric-cyan/5 border border-white/10 p-6 rounded-hauer backdrop-blur-md hover:border-white/20 transition-all">
                                <span className="block text-4xl font-bold text-white mb-1 font-mono">450+</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest">Lokale Seiten</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Left: Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={slideInFromLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col mb-8 relative">
                            <span className="text-electric-cyan font-medium tracking-widest uppercase text-sm mb-4 block">
                                Geo-Net Dominator
                            </span>
                            <div className="flex items-center gap-6">
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-0 leading-tight max-w-[600px]">
                                    <span className="whitespace-nowrap">Werde zum <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">Platzhirsch</span></span> <br />
                                    <span className="whitespace-nowrap">in deiner Region.</span>
                                </h2>

                                {/* Standardized Sticker Size: w-44 h-44 */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 10, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="hidden xl:block w-44 h-44 flex-shrink-0 pointer-events-none drop-shadow-lg ml-8"
                                >
                                    <div className="relative w-full h-full bg-transparent">
                                        <Image
                                            src="/assets/images/geo-transparent.png"
                                            alt="Geo Sticker"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            style={{ background: 'transparent' }}
                                            unoptimized
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-10 text-xl leading-relaxed">
                            Deine Kunden sitzen nicht nur in deiner Stadt. Mit dem Geo-Net Dominator erstellen wir hunderte lokalisierte Landingpages für jedes Dorf und jede Stadt.
                        </p>

                        <div className="grid grid-cols-1 gap-4 mb-12">
                            {[
                                "Bis zu 50km Umkreis-Abdeckung",
                                "Jede Seite individuell auf den Standort optimiert",
                                "Dominanz in den lokalen Suchergebnissen"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-electric-cyan/10 flex items-center justify-center border border-electric-cyan/20 group-hover:bg-electric-cyan/20 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-electric-cyan" />
                                    </div>
                                    <span className="text-gray-300 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <InteractiveHoverButton className="w-fit text-white border-electric-cyan/30 hover:border-electric-cyan">
                            Verfügbarkeit prüfen
                        </InteractiveHoverButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
