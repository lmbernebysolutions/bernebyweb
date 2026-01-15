"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Target, Zap } from "lucide-react";
import { fadeInUp, slideInFromLeft } from "@/lib/animation-utils";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";

const data = [
    { name: "Jan", revenue: 4000, leads: 12 },
    { name: "Feb", revenue: 7500, leads: 18 },
    { name: "Mar", revenue: 12000, leads: 32 },
    { name: "Apr", revenue: 18500, leads: 45 },
    { name: "Mai", revenue: 24000, leads: 58 },
    { name: "Jun", revenue: 31000, leads: 84 },
];

export const PerformanceSection = () => {
    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden" id="performance">
            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={slideInFromLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col mb-8">
                            <span className="text-electric-cyan font-medium tracking-widest uppercase text-sm mb-4 block">
                                Umsatz & Anfragen
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Transparenz, die <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">
                                    Wachstum schafft.
                                </span>
                            </h2>
                        </div>

                        <p className="text-gray-400 mb-10 text-xl leading-relaxed">
                            Schluss mit Rätselraten. Wir zeigen dir schwarz auf weiß, wie viele Anfragen reinkommen und welcher Umsatz direkt durch unsere Maßnahmen generiert wurde.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {[
                                { icon: TrendingUp, title: "Umsatz-Attribution", desc: "Jeder Euro wird getrackt" },
                                { icon: Users, title: "Lead-Management", desc: "Alle Anfragen zentral im Blick" },
                                { icon: Target, title: "Conversion-Optimierung", desc: "Höhere Abschlussquoten" },
                                { icon: Zap, title: "Echtzeit-Daten", desc: "Keine Verzögerung in der Analyse" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 bg-electric-cyan/10 p-2 rounded-hauer border border-electric-cyan/20 hover:border-electric-cyan/40 transition-all">
                                        <item.icon className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-base">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <InteractiveHoverButton className="w-fit text-white border-electric-cyan/30 hover:border-electric-cyan">
                            Analyse starten
                        </InteractiveHoverButton>
                    </motion.div>

                    {/* Right: Chart Visual */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-[#021A33] border border-white/10 rounded-hauer p-8 shadow-2xl relative group hover:border-white/20 transition-all">
                            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="flex justify-between items-center mb-8 relative z-10">
                                <div>
                                    <h3 className="text-white font-bold text-lg">Wachstumskurve (Beispiel)</h3>
                                    <p className="text-gray-500 text-sm">Monatlicher Umsatz-Trend</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-electric-cyan font-bold text-2xl font-mono">+145%</span>
                                    <p className="text-gray-500 text-xs">vs Vorjahr</p>
                                </div>
                            </div>

                            <div className="h-[300px] w-full relative z-10">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data}>
                                        <defs>
                                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#01FAF9" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#01FAF9" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                        <XAxis
                                            dataKey="name"
                                            stroke="#666"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fontSize: 12 }}
                                        />
                                        <YAxis hide />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#032448', border: '1px solid #ffffff10', borderRadius: '12px', fontFamily: 'var(--font-mono), ui-monospace, monospace' }}
                                            itemStyle={{ color: '#01FAF9', fontFamily: 'var(--font-mono), ui-monospace, monospace' }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="revenue"
                                            stroke="#01FAF9"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorRevenue)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-4 relative z-10">
                                <div className="p-4 rounded-hauer bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                                    <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-1">Leads</span>
                                    <span className="text-white font-bold font-mono">248</span>
                                </div>
                                <div className="p-4 rounded-hauer bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                                    <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-1">Conversion</span>
                                    <span className="text-white font-bold font-mono">18.5%</span>
                                </div>
                                <div className="p-4 rounded-hauer bg-white/10 border border-electric-cyan/30 hover:border-electric-cyan/50 transition-all">
                                    <span className="block text-electric-cyan text-[10px] uppercase tracking-wider mb-1">Status</span>
                                    <span className="text-white font-bold">Aktiv</span>
                                </div>
                            </div>

                            {/* Sticker Ornament */}
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                    rotate: [0, -8, 0]
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-12 -left-28 w-44 h-44 z-30 pointer-events-none drop-shadow-lg"
                            >
                                <Image
                                    src="/assets/images/dashboard-transparent.png"
                                    alt="Dashboard Sticker"
                                    fill
                                    className="object-contain drop-shadow-lg"
                                    style={{ background: 'transparent' }}
                                    unoptimized
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
