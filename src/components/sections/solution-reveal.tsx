"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Problem1Unsichtbarkeit } from "./scroll-story/Problem1Unsichtbarkeit";
import { Solution1GeoNet } from "./scroll-story/Solution1GeoNet";
import { Problem2Fachkraeftemangel } from "./scroll-story/Problem2Fachkraeftemangel";
import { Solution2PremiumWeb } from "./scroll-story/Solution2PremiumWeb";
import { Problem3BueroWahnsinn } from "./scroll-story/Problem3BueroWahnsinn";
import { Solution3VoiceGuard } from "./scroll-story/Solution3VoiceGuard";
import { Problem4Preiskampf } from "./scroll-story/Problem4Preiskampf";
import { Solution4PremiumPositioning } from "./scroll-story/Solution4PremiumPositioning";

const revealSteps = [
    {
        id: "visibility",
        problem: {
            label: "Digitale Unsichtbarkeit",
            title: "Die Konkurrenz schnappt dir die Aufträge weg.",
            component: Problem1Unsichtbarkeit,
            color: "text-red-500",
            bg: "bg-red-500/5",
            extendedDescription: "Deine Kunden suchen online, aber finden dich nicht. Während du echte Qualitätsarbeit leistest, gewinnt die laute Konkurrenz mit schlechterer Leistung, nur weil sie besser sichtbar ist."
        },
        solution: {
            label: "Geo-Net Dominator",
            title: "Regionale Marktdominanz auf Knopfdruck.",
            component: Solution1GeoNet,
            color: "text-electric-cyan",
            bg: "bg-electric-cyan/5",
            extendedDescription: "Wir verwandeln deine digitale Abwesenheit in absolute regionale Dominanz. Jedes Dorf, jede Stadt – dein Betrieb steht ganz oben, wo die Kunden suchen."
        }
    },
    {
        id: "recruiting",
        problem: {
            label: "Fachkräftemangel",
            title: "Gute Leute finden dich nicht attraktiv.",
            component: Problem2Fachkraeftemangel,
            color: "text-red-500",
            bg: "bg-red-500/5",
            extendedDescription: "Zeitungsanzeigen sind tot. Top-Talente bewerben sich nicht bei Firmen, die digital verstaubt wirken. Dein Team altert, und der Nachwuchs fehlt."
        },
        solution: {
            label: "Premium Web & Branding",
            title: "Werde zum Magneten für Top-Leute.",
            component: Solution2PremiumWeb,
            color: "text-electric-cyan",
            bg: "bg-electric-cyan/5",
            extendedDescription: "Deine neue Website wird zur digitalen Hochglanz-Broschüre. Wir positionieren dich als modernsten Arbeitgeber der Region, bei dem jeder Profi arbeiten will."
        }
    },
    {
        id: "automation",
        problem: {
            label: "Büro-Wahnsinn",
            title: "Du opferst deine Abende für Papierkram.",
            component: Problem3BueroWahnsinn,
            color: "text-red-500",
            bg: "bg-red-500/5",
            extendedDescription: "Angebote am Wochenende, verpasste Anrufe auf der Baustelle. Dein Büro ist ein Papierstapel, der dir die Freiheit und Energie für das Wesentliche raubt."
        },
        solution: {
            label: "24/7 Voice-Guard",
            title: "Backoffice-Vollautomatik rund um die Uhr.",
            component: Solution3VoiceGuard,
            color: "text-electric-cyan",
            bg: "bg-electric-cyan/5",
            extendedDescription: "Keine verpassten Anrufe, kein Terminstress. Unsere KI übernimmt dein Backoffice, qualifiziert Leads und bucht Termine, während du arbeitest oder schläfst."
        }
    },
    {
        id: "pricing",
        problem: {
            label: "Preiskampf",
            title: "Du bist für Kunden nur eine Zahl.",
            component: Problem4Preiskampf,
            color: "text-red-500",
            bg: "bg-red-500/5",
            extendedDescription: "Kunden feilschen um jeden Euro, weil sie deinen Wert nicht erkennen. Du wirst vergleichbar gemacht und verlierst Marge an Billiganbieter."
        },
        solution: {
            label: "Premium Positioning",
            title: "Verkaufe Wert statt billige Stunden.",
            component: Solution4PremiumPositioning,
            color: "text-electric-cyan",
            bg: "bg-electric-cyan/5",
            extendedDescription: "Wir machen dich zur einzigen logischen Wahl. Keine Preisdiskussionen mehr – Kunden buchen dich, weil du der Experte mit dem besten Ruf bist."
        }
    }
];

export const SolutionReveal = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeIndex, setActiveIndex] = useState(0);

    // Track active index based on scroll progress
    useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    }).scrollYProgress.on("change", (v) => {
        const index = Math.min(
            revealSteps.length - 1,
            Math.floor(v * revealSteps.length)
        );
        setActiveIndex(index);
    });

    return (
        <section
            ref={containerRef}
            className="relative h-[600vh] bg-deep-navy" // Increased height for 4 steps
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Text Labels */}
                <div className="absolute inset-x-0 top-20 flex justify-center opacity-10 pointer-events-none">
                    <span className="text-[15vw] font-black uppercase tracking-tighter text-white/5">Berneby</span>
                </div>

                <div className="container mx-auto px-8 md:px-16 h-full flex flex-col justify-center relative">



                    <AnimatePresence mode="wait">
                        <RevealSlide
                            key={activeIndex}
                            step={revealSteps[activeIndex]}
                            index={activeIndex}
                            progress={scrollYProgress}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const RevealSlide = ({ step, index, progress }: { step: typeof revealSteps[0], index: number, progress: any }) => {
    // Local scroll progress for this specific slide (0 to 1)
    const slideStart = index / revealSteps.length;
    const slideEnd = (index + 1) / revealSteps.length;
    const slideProgress = useTransform(progress, [slideStart, slideEnd], [0, 1]);

    // Animation values
    const clipProgress = useTransform(slideProgress, [0.3, 0.7], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);
    // Problem sofort sichtbar (opacity 1 bei progress 0), dann ausblenden
    const problemOpacity = useTransform(slideProgress, [0, 0.1, 0.4, 0.6], [1, 1, 1, 0]);
    const solutionScale = useTransform(slideProgress, [0.4, 0.8], [0.9, 1]);
    const scanlinePos = useTransform(slideProgress, [0.3, 0.7], ["0%", "100%"]);

    return (
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 relative h-[300px] lg:h-auto flex flex-col justify-center">

                {/* Problem Meta */}
                <motion.div style={{ opacity: problemOpacity }} className="absolute inset-0 flex flex-col justify-center">
                    <span className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" /> DAS PROBLEM
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        {step.problem.label}
                    </h3>
                    <p className="text-red-500/80 text-lg md:text-xl font-medium mb-6">
                        {step.problem.title}
                    </p>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
                        {step.problem.extendedDescription}
                    </p>
                </motion.div>

                {/* Solution Meta (Revealed) */}
                <motion.div
                    style={{ clipPath: clipProgress, scale: solutionScale }}
                    className="flex flex-col justify-center"
                >
                    <span className="text-electric-cyan text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> DIE LÖSUNG
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">
                            {step.solution.label}
                        </span>
                    </h3>
                    <p className="text-white text-lg md:text-xl font-medium mb-6">
                        {step.solution.title}
                    </p>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                        {step.solution.extendedDescription}
                    </p>
                </motion.div>
            </div>

            {/* Right: Visual Stage */}
            <div className="order-1 lg:order-2 relative aspect-square flex items-center justify-center">

                {/* Stage Background */}
                <div className="absolute inset-0 rounded-[40px] bg-deep-navy border border-white/5 overflow-hidden">
                </div>

                {/* Problem Visual - Animated Component */}
                <motion.div
                    style={{ opacity: problemOpacity }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                            <step.problem.component progress={slideProgress} />
                        </div>
                    </div>
                </motion.div>

                {/* Solution Visual (Revealed) - Animated Component */}
                <motion.div
                    style={{ clipPath: clipProgress, scale: solutionScale }}
                    className="absolute inset-0 flex items-center justify-center bg-deep-navy"
                >
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-electric-cyan/20 blur-3xl rounded-full" />
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                            <step.solution.component progress={slideProgress} />
                        </div>
                    </div>
                </motion.div>

                {/* Scanline / Reveal Tool */}
                <motion.div
                    style={{ left: scanlinePos }}
                    className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-electric-cyan to-transparent z-40"
                >
                    <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-4 h-4 rounded-full bg-electric-cyan shadow-[0_0_15px_rgba(1,250,249,1)]" />
                </motion.div>
            </div>

        </div>
    );
};
