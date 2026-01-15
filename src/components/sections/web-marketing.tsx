"use client";

import { motion } from "framer-motion";
import { Globe, Layout, Palette, Share2, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
import { fadeInUp, slideInFromLeft } from "@/lib/animation-utils";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";

export const WebMarketingSection = () => {
    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden" id="websites-marketing">
            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Visual Showcase with Sticker */}
                    <motion.div
                        className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative Background */}

                        {/* Browser Window Mockup */}
                        <div className="relative w-full max-w-[500px] bg-[#021A33] rounded-hauer border border-white/10 shadow-2xl overflow-hidden group hover:border-white/20 transition-all">
                            {/* Browser Header */}
                            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex gap-2 items-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                <div className="ml-4 h-5 px-3 rounded bg-white/5 border border-white/5 flex items-center min-w-[200px]">
                                    <Globe className="w-3 h-3 text-gray-500 mr-2" />
                                    <span className="text-[10px] text-gray-500">berneby-solutions.de</span>
                                </div>
                            </div>

                            {/* Browser Content (Website Mockup) */}
                            <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/images/mockups/bedachungen_weber.png"
                                    alt="Website Showcase"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Stats Label */}
                            <div className="absolute bottom-6 right-6 bg-electric-cyan/10 border border-electric-cyan/30 p-4 rounded-hauer backdrop-blur-md">
                                <span className="block text-electric-cyan font-bold text-xl font-mono">+84%</span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Conversion Uplift</span>
                            </div>
                        </div>

                        {/* Secondary Element: Smartphone (Overlap) */}
                        <motion.div
                            className="absolute -bottom-10 left-0 lg:-left-10 w-[180px] h-[360px] hidden md:block"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="w-full h-full bg-black rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-20" />
                                <div className="w-full h-full bg-[#021A33] p-2 flex flex-col pt-8">
                                    <div className="w-full aspect-[9/16] relative rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                        <Image
                                            src="/images/mockups/sanitaer_klein.png"
                                            alt="Mobile Showcase"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="mt-4 px-2 space-y-2">
                                        <div className="h-1.5 w-3/4 bg-white/10 rounded" />
                                        <div className="h-1.5 w-1/2 bg-white/5 rounded" />
                                        <div className="h-3 w-full bg-electric-cyan/20 rounded mt-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Sticker Ornament */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, -8, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-20 -right-16 w-44 h-44 z-30 pointer-events-none drop-shadow-lg"
                        >
                            <Image
                                src="/assets/images/web-transparent.png"
                                alt="Web Sticker"
                                fill
                                className="object-contain drop-shadow-lg"
                                style={{ background: 'transparent' }}
                                unoptimized
                            />
                        </motion.div>
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
                                Websites & Marketing
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Dein digitaler <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">
                                    Hochglanz-Auftritt.
                                </span>
                            </h2>
                        </div>

                        <p className="text-gray-400 mb-10 text-xl leading-relaxed">
                            Wir bauen Websites, die nicht nur gut aussehen, sondern echte Ergebnisse liefern. Von der ersten Zeile Code bis zur fertigen Social-Media-Kampagne positionieren wir dich als Premium-Anbieter.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                            {[
                                { icon: Layout, title: "Modernstes Design", desc: "Pixel-perfekt & individuell" },
                                { icon: Smartphone, title: "Mobile-First", desc: "Perfekt auf allen Endgeräten" },
                                { icon: Zap, title: "High-Speed", desc: "Ladezeiten unter 1 Sekunde" },
                                { icon: Share2, title: "Social Content", desc: "Präsenz auf allen Kanälen" }
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
                            Projekt anfragen
                        </InteractiveHoverButton>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
