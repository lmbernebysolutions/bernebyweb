"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { Check, ShieldCheck, Clock } from "lucide-react";
import { fadeInUp } from "@/lib/animation-utils";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";

export const VoiceGuardSection = () => {
    return (
        <section className="py-24 bg-deep-navy border-t border-white/5 relative overflow-hidden">

            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Phone Demo with Sticker */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center lg:justify-start relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            <PhoneMockup />

                            {/* Sticker Ornament */}
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                    rotate: [0, 8, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-12 -right-20 w-44 h-44 z-20 pointer-events-none drop-shadow-lg"
                            >
                                <div className="relative w-full h-full bg-transparent">
                                <Image
                                    src="/assets/images/voice-transparent.png"
                                    alt="Voice Sticker"
                                    fill
                                        className="object-contain drop-shadow-lg"
                                        style={{ background: 'transparent' }}
                                        unoptimized
                                />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col mb-8">
                            <span className="text-electric-cyan font-medium tracking-widest uppercase text-sm mb-4 block">
                                24/7 Voice-Guard
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Nie wieder einen <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">
                                    Kunden verpassen.
                                </span>
                            </h2>
                        </div>

                        <p className="text-gray-400 mb-10 text-xl leading-relaxed">
                            Während du auf dem Dach stehst oder unter der Spüle liegst, nimmt unsere KI jeden Anruf entgegen. Freundlich, kompetent und rund um die Uhr.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                            {[
                                { icon: Clock, title: "24/7 Erreichbarkeit", desc: "Auch am Wochenende und nachts" },
                                { icon: ShieldCheck, title: "Vorqualifizierung", desc: "Filtert Spam und unwichtige Anrufe" },
                                { icon: Check, title: "Terminvereinbarung", desc: "Bucht direkt in deinen Kalender" },
                                { icon: Check, title: "CRM Integration", desc: "Alle Daten direkt im System" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 bg-electric-cyan/10 p-2 rounded-hauer border border-electric-cyan/20 hover:border-electric-cyan/40 transition-all">
                                        <item.icon className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-white font-bold text-base">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <InteractiveHoverButton className="w-fit text-white border-electric-cyan/30 hover:border-electric-cyan">
                            Demo anhören
                        </InteractiveHoverButton>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
