"use client";

import { BarChart3, Map, PhoneCall, Layout, BellIcon, FileTextIcon, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animation-utils";
import { BentoCard, BentoGrid } from "@/components/libraries/magic-ui/bento-grid";
import Marquee from "@/components/libraries/magic-ui/marquee";
import { AnimatedList } from "@/components/libraries/magic-ui/animated-list";

const leads = [
    {
        name: "Neuanfrage: Photovoltaik",
        body: "PV-Anlage München. Potenzial: 25.000€",
    },
    {
        name: "Termin: Heizungswartung",
        body: "Service-Check in Erding.",
    },
    {
        name: "Lead: Badsanierung",
        body: "Loft-Sanierung. Budget: 15.000€",
    },
    {
        name: "Rückruf: Meister-Beratung",
        body: "Wärmepumpen-Anfrage.",
    },
];

const notifications = [
    {
        name: "Voice-Guard aktiv",
        description: "KI hat Lead qualifiziert.",
        time: "vor 2 Min.",
        icon: "📞",
        color: "#01FAF9",
    },
    {
        name: "Neuer Lead",
        description: "Anfrage im Postfach.",
        time: "vor 10 Min.",
        icon: "👤",
        color: "#C1510F",
    },
    {
        name: "Termin bestätigt",
        description: "Vor-Ort morgen 10:00 Uhr.",
        time: "vor 25 Min.",
        icon: "💬",
        color: "#01FAF9",
    },
];

const Notification = ({ name, description, icon, color, time }: any) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-hauer p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white/5 border border-white/10 backdrop-blur-md",
                "transform-gpu dark:bg-white/5 dark:backdrop-blur-md dark:[box-shadow:0_-20px_80px_-20px_#01FAF91a_inset]",
                "hover:border-white/20 hover:shadow-[0_0_20px_rgba(1,250,249,0.2)]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color + "20",
                        border: `1px solid ${color}`
                    }}
                >
                    <span className="text-lg" style={{ color: color }}>{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-400">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export const USPShowcase = () => {
    const features = [
        {
            Icon: BarChart3,
            name: "Umsatz & Anfragen",
            description: "Echtzeit-Tracking deiner Leads und des generierten Umsatzes durch unsere Strategie.",
            href: "/services",
            cta: "Statistiken ansehen",
            className: "lg:col-span-2",
            background: (
                <Marquee
                    pauseOnHover
                    className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:30s]"
                >
                    {leads.map((f, idx) => (
                        <figure
                            key={idx}
                            className={cn(
                                "relative w-48 cursor-pointer overflow-hidden rounded-hauer border p-4",
                                "border-white/10 bg-white/5 hover:bg-white/10",
                                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                                "hover:border-white/20"
                            )}
                        >
                            <div className="flex flex-row items-center gap-2">
                                <figcaption className="text-sm font-medium text-white">
                                    {f.name}
                                </figcaption>
                            </div>
                            <blockquote className="mt-2 text-xs text-gray-500">{f.body}</blockquote>
                        </figure>
                    ))}
                    {/* Sticker Ornament */}
                    <Image
                        src="/assets/images/dashboard-transparent.png"
                        alt="Dashboard Sticker"
                        width={176}
                        height={176}
                        className="absolute top-0 right-0 opacity-25 pointer-events-none group-hover:scale-110 transition-transform drop-shadow-lg"
                        style={{ background: 'transparent' }}
                        unoptimized
                    />
                </Marquee>
            ),
        },
        {
            Icon: PhoneCall,
            name: "24/7 Voice-Guard",
            description: "Unser AI-Assistent lässt keinen Kunden ins Leere laufen und qualifiziert sofort.",
            href: "/voice-guard",
            cta: "Demo starten",
            className: "lg:col-span-2",
            background: (
                <div className="absolute top-4 right-2 h-[300px] w-full scale-75 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90 overflow-hidden">
                    <AnimatedList>
                        {notifications.map((item, idx) => (
                            <Notification {...item} key={idx} />
                        ))}
                    </AnimatedList>
                    {/* Sticker Ornament */}
                    <Image
                        src="/assets/images/voice-transparent.png"
                        alt="Voice Sticker"
                        width={176}
                        height={176}
                        className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                        style={{ background: 'transparent' }}
                        unoptimized
                    />
                </div>
            ),
        },
        {
            Icon: Map,
            name: "Regionale Dominanz",
            description: "Werde in deinem gesamten Einzugsgebiet zur Nummer 1 bei Google & Social Media.",
            href: "/geo-net",
            cta: "Karte prüfen",
            className: "lg:col-span-2",
            background: (
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                    <Globe className="absolute h-32 w-32 text-electric-cyan/10 animate-pulse" />
                    <div className="w-1/2 h-1/2 border border-electric-cyan/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                    {/* Sticker Ornament */}
                    <Image
                        src="/assets/images/geo-transparent.png"
                        alt="Geo Sticker"
                        width={176}
                        height={176}
                        className="absolute top-2 right-2 opacity-30 group-hover:rotate-12 group-hover:scale-110 transition-all drop-shadow-lg"
                        style={{ background: 'transparent' }}
                        unoptimized
                    />
                </div>
            ),
        },
        {
            Icon: Layout,
            name: "Website Erstellung",
            description: "Hochperformante, verkaufsoptimierte Websites, die speziell für das Handwerk entwickelt wurden – einfach und effektiv.",
            className: "lg:col-span-3",
            href: "/services",
            cta: "Beispiele ansehen",
            // ... same background content ...
            background: (
                <div className="absolute top-10 left-4 right-4 bottom-0 origin-top scale-90 rounded-t-lg border border-white/10 bg-[#032448] p-2 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-100">
                    <div className="flex items-center gap-1 mb-2 border-b border-white/5 pb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-1/2 bg-electric-cyan/20 rounded-full" />
                        <div className="grid grid-cols-3 gap-1">
                            <div className="h-8 bg-white/5 rounded-sm" />
                            <div className="h-8 bg-white/5 rounded-sm" />
                            <div className="h-8 bg-white/5 rounded-sm" />
                        </div>
                        <div className="h-12 w-full bg-electric-cyan/10 rounded-sm border border-electric-cyan/20 flex items-center justify-center">
                            <div className="h-1.5 w-12 bg-electric-cyan/40 rounded-full" />
                        </div>
                    </div>
                    {/* Sticker Ornament */}
                    <Image
                        src="/assets/images/web-transparent.png"
                        alt="Web Sticker"
                        width={176}
                        height={176}
                        className="absolute -bottom-8 -right-8 opacity-40 group-hover:scale-110 transition-transform drop-shadow-lg"
                        style={{ background: 'transparent' }}
                        unoptimized
                    />
                </div>
            )
        },
        {
            Icon: Globe,
            name: "Social Media Marketing",
            description: "Gewinne neue Mitarbeiter und Kunden dort, wo sie sich täglich aufhalten – auf Instagram, Facebook & Co.",
            className: "lg:col-span-3",
            href: "/services",
            cta: "Sichtbarkeit erhöhen",
            background: (
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" />
                        <div className="w-12 h-12 rounded-xl bg-blue-600" />
                        <div className="w-12 h-12 rounded-xl bg-blue-400" />
                    </div>
                    {/* Sticker Ornament */}
                    <Image
                        src="/assets/images/dgvo-transparent.png"
                        alt="DSGVO Sticker"
                        width={176}
                        height={176}
                        className="absolute bottom-2 right-2 opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all drop-shadow-lg"
                        style={{ background: 'transparent' }}
                        unoptimized
                    />
                </div>
            ),
        }
    ];

    return (
        <section className="pt-12 md:pt-16 pb-24 bg-deep-navy relative overflow-hidden" id="usp">
            <div className="container mx-auto px-8 md:px-16">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-electric-cyan font-medium tracking-widest uppercase text-sm mb-4 block">
                        Vorsprung durch Technik
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Digitale Werkzeuge für <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">dein Wachstum</span>
                    </h2>
                    <div className="space-y-12 w-full">
                        <p className="text-gray-400">
                            Wir kombinieren High-End Webdesign mit smarten Automatisierungen, damit du dich auf dein Handwerk konzentrieren kannst.
                        </p>
                    </div>
                </motion.div>

                <BentoGrid className="lg:grid-cols-6 auto-rows-[20rem]">
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};
