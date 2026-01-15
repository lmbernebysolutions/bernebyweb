"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BarChart3, Map, Phone } from "lucide-react";
import { ChartDemo } from "@/components/demos/chart-demo";
import { MapDemo } from "@/components/demos/map-demo";
import { PhoneMockup } from "@/components/ui/phone-mockup";

const FEATURES = [
    {
        id: "leads",
        label: "Anfragen & Umsatz",
        icon: BarChart3,
        component: <ChartDemo />,
        color: "from-blue-500 to-electric-cyan"
    },
    {
        id: "geo",
        label: "Regionale Dominanz",
        icon: Map,
        component: <MapDemo />,
        color: "from-electric-cyan to-green-400"
    },
    {
        id: "voice",
        label: "24/7 Erreichbarkeit",
        icon: Phone,
        component: <PhoneMockup />, // Reusing existing phone mockup
        color: "from-purple-500 to-blue-500"
    }
];

const AUTO_SWITCH_INTERVAL = 5000; // 5 seconds

export const HeroFeatureSwitcher = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(0);
    const startTimeRef = useRef<number | null>(null);
    const reqRef = useRef<number | null>(null);

    const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const newProgress = Math.min((elapsed / AUTO_SWITCH_INTERVAL) * 100, 100);

        setProgress(newProgress);

        if (elapsed < AUTO_SWITCH_INTERVAL) {
            reqRef.current = requestAnimationFrame(animate);
        } else {
            // Next tab
            setProgress(0);
            startTimeRef.current = null;
            setActiveTab((prev) => (prev + 1) % FEATURES.length);
        }
    };

    useEffect(() => {
        reqRef.current = requestAnimationFrame(animate);
        return () => {
            if (reqRef.current) cancelAnimationFrame(reqRef.current);
        };
    }, [activeTab]);

    const handleTabClick = (index: number) => {
        if (reqRef.current) cancelAnimationFrame(reqRef.current);
        setActiveTab(index);
        setProgress(0);
        startTimeRef.current = null;
        // Restart animation is handled by useEffect dependency on activeTab
    };

    return (
        <div className="w-full flex flex-col gap-8">

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 border-b border-white/10 pb-4">
                {FEATURES.map((feature, index) => {
                    const isActive = activeTab === index;
                    const Icon = feature.icon;
                    return (
                        <button
                            key={feature.id}
                            onClick={() => handleTabClick(index)}
                            className={cn(
                                "group relative flex flex-col items-center gap-2 pb-2 transition-all duration-300 outline-none",
                                isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                            )}
                        >
                            <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-white">
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>{feature.label}</span>
                            </div>

                            {/* Progress Line */}
                            <div className="absolute -bottom-[17px] left-0 w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                                {isActive && (
                                    <div
                                        className="h-full bg-electric-cyan"
                                        style={{ width: `${progress}%` }}
                                    />
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Content Display */}
            <div className="relative h-[400px] sm:h-[500px] w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Glow Effect */}
                <div className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 transition-colors duration-1000 bg-gradient-to-r",
                    FEATURES[activeTab].color
                )} />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="absolute inset-0 flex items-center justify-center p-6"
                    >
                        {FEATURES[activeTab].component}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
};
