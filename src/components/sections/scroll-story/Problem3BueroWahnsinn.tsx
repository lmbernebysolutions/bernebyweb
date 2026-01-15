"use client";

import { motion, useTransform } from "framer-motion";

interface Problem3Props {
    progress: any;
}

export const Problem3BueroWahnsinn = ({ progress }: Problem3Props) => {
    // Alle Elemente sofort sichtbar beim Problem (keine Animation)
    const stressGlowOpacity = useTransform(progress, [0, 0.3], [0.2, 0.4]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Hintergrund Glow */}
            <motion.div
                style={{ opacity: stressGlowOpacity }}
                className="absolute inset-0 bg-red-500/50 blur-[120px] rounded-full"
            />

            {/* Schreibtisch - genau wie Voice-Guard Tisch */}
            <div className="relative z-10">
                <div className="relative w-[500px] h-[300px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 shadow-xl">
                    {/* Papiere auf dem Tisch - überall verteilt */}
                    <div className="absolute inset-0 p-6">
                            {/* Papierstapel 1 - links oben */}
                            <motion.div
                                className="absolute top-8 left-12"
                                animate={{ 
                                    rotate: [-1, 1, -1],
                                    y: [0, -2, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <div className="relative">
                                    {/* Papierstapel mit Schatten */}
                                    <div className="w-20 h-28 bg-white rounded-sm shadow-xl">
                                        <div className="p-3 space-y-1.5">
                                            <div className="h-1 bg-gray-300 rounded w-full" />
                                            <div className="h-1 bg-gray-300 rounded w-4/5" />
                                            <div className="h-1 bg-gray-300 rounded w-full" />
                                            <div className="h-1 bg-gray-300 rounded w-3/4" />
                                        </div>
                                    </div>
                                    <div className="absolute top-1 left-1 w-20 h-28 bg-white/90 rounded-sm shadow-lg" />
                                    <div className="absolute top-2 left-2 w-20 h-28 bg-white/70 rounded-sm shadow-md" />
                                    <div className="absolute top-3 left-3 w-20 h-28 bg-white/50 rounded-sm" />
                                </div>
                            </motion.div>

                            {/* Papierstapel 2 - rechts oben */}
                            <motion.div
                                className="absolute top-12 right-16"
                                animate={{ 
                                    rotate: [1, -1, 1],
                                    y: [0, -2, 0]
                                }}
                                transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
                            >
                                <div className="relative">
                                    <div className="w-18 h-24 bg-white rounded-sm shadow-xl">
                                        <div className="p-2.5 space-y-1">
                                            <div className="h-1 bg-gray-300 rounded w-full" />
                                            <div className="h-1 bg-gray-300 rounded w-2/3" />
                                            <div className="h-1 bg-gray-300 rounded w-4/5" />
                                        </div>
                                    </div>
                                    <div className="absolute top-1 left-1 w-18 h-24 bg-white/85 rounded-sm shadow-lg" />
                                    <div className="absolute top-2 left-2 w-18 h-24 bg-white/65 rounded-sm" />
                                </div>
                            </motion.div>

                            {/* Papierstapel 3 - Mitte links */}
                            <motion.div
                                className="absolute top-1/2 left-8 -translate-y-1/2"
                                animate={{ 
                                    rotate: [-0.5, 0.5, -0.5],
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                            >
                                <div className="relative">
                                    <div className="w-16 h-22 bg-white rounded-sm shadow-xl">
                                        <div className="p-2 space-y-1">
                                            <div className="h-1 bg-gray-300 rounded w-full" />
                                            <div className="h-1 bg-gray-300 rounded w-5/6" />
                                            <div className="h-1 bg-gray-300 rounded w-3/4" />
                                        </div>
                                    </div>
                                    <div className="absolute top-1 left-1 w-16 h-22 bg-white/80 rounded-sm shadow-lg" />
                                </div>
                            </motion.div>

                            {/* Papierstapel 4 - rechts Mitte */}
                            <motion.div
                                className="absolute top-1/2 right-12 -translate-y-1/2"
                                animate={{ 
                                    rotate: [0.5, -0.5, 0.5],
                                }}
                                transition={{ duration: 3.2, repeat: Infinity, delay: 0.9 }}
                            >
                                <div className="relative">
                                    <div className="w-20 h-26 bg-white rounded-sm shadow-xl">
                                        <div className="p-3 space-y-1.5">
                                            <div className="h-1 bg-gray-300 rounded w-full" />
                                            <div className="h-1 bg-gray-300 rounded w-full" />
                                            <div className="h-1 bg-gray-300 rounded w-4/5" />
                                        </div>
                                    </div>
                                    <div className="absolute top-1 left-1 w-20 h-26 bg-white/90 rounded-sm shadow-lg" />
                                    <div className="absolute top-2 left-2 w-20 h-26 bg-white/70 rounded-sm" />
                                </div>
                            </motion.div>

                            {/* Einzelne Papiere - verstreut */}
                            <div className="absolute bottom-12 left-16 w-12 h-16 bg-white/90 rounded-sm shadow-lg transform rotate-12" />
                            <div className="absolute bottom-16 right-20 w-10 h-14 bg-white/85 rounded-sm shadow-lg transform -rotate-6" />
                            <div className="absolute top-20 left-1/3 w-12 h-18 bg-white/80 rounded-sm shadow-md transform rotate-3" />
                        </div>
                </div>
            </div>

            {/* Telefon - klingelt (sofort sichtbar) */}
            <div className="absolute top-1/2 right-1/4 z-20">
                <motion.div
                    animate={{
                        x: [0, -5, 5, -5, 0],
                        rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                    }}
                >
                    <div className="relative">
                        <div className="w-24 h-14 bg-gray-800 rounded-lg shadow-2xl border-2 border-red-500">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"
                                >
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </motion.div>
                            </div>
                        </div>
                        {/* Klingel-Effekt */}
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute inset-0 bg-red-500/30 rounded-lg blur-md"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Uhr - späte Zeit (sofort sichtbar) - 22:00 */}
            <div className="absolute top-20 right-1/4 z-20">
                <div className="relative w-24 h-24 bg-gray-800 rounded-full border-4 border-red-500 shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Stundenzeiger - 22:00 = 10 Uhr auf 12h-Zifferblatt */}
                        {/* origin-bottom bedeutet: 0° = unten, 90° = links, 180° = oben, 270° = rechts */}
                        {/* 10 Uhr = 10/12 * 360 = 300° im Uhrzeigersinn von oben = 60° gegen Uhrzeigersinn von oben = 120° von unten */}
                        {/* Position korrigiert - Zeiger höher positioniert */}
                        <div className="absolute w-1.5 h-7 bg-red-500 origin-bottom rounded-full" style={{ transform: 'rotate(120deg) translateY(0px)' }} />
                        {/* Minutenzeiger - 00 Minuten = 0 Grad (zeigt nach oben = 180° von unten) */}
                        <div className="absolute w-1 h-9 bg-red-500 origin-bottom rounded-full" style={{ transform: 'rotate(180deg) translateY(0px)' }} />
                        {/* Mittelpunkt */}
                        <div className="absolute w-3 h-3 bg-red-500 rounded-full z-10" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-red-500 font-bold text-sm whitespace-nowrap">22:00</div>
                </div>
            </div>

        </div>
    );
};
