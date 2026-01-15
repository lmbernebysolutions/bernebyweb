"use client";

import { motion, useTransform } from "framer-motion";

interface Solution3Props {
    progress: any;
}

export const Solution3VoiceGuard = ({ progress }: Solution3Props) => {
    const worksiteOpacity = useTransform(progress, [0, 0.2], [0, 1]);
    const worksiteY = useTransform(progress, [0, 0.2], [50, 0]);
    const voiceGuardOpacity = useTransform(progress, [0.2, 0.4], [0, 1]);
    const voiceGuardScale = useTransform(progress, [0.2, 0.4], [0.8, 1]);
    const phoneAnswerOpacity = useTransform(progress, [0.3, 0.5], [0, 1]);
    const successGlowOpacity = useTransform(progress, [0.4, 0.7], [0, 0.3]);
    const activityIndicatorsOpacity = useTransform(progress, [0.5, 0.8], [0, 1]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Hintergrund Glow - wird intensiver */}
            <motion.div
                style={{ opacity: successGlowOpacity }}
                className="absolute inset-0 bg-electric-cyan/50 blur-[120px] rounded-full"
            />

            {/* Baustelle/Arbeitsplatz */}
            <motion.div
                style={{ opacity: worksiteOpacity, y: worksiteY }}
                className="relative z-10"
            >
                <div className="relative w-[500px] h-[300px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-2 border-electric-cyan/50 shadow-xl">
                    {/* Werkzeuge in Benutzung */}
                    <div className="absolute top-20 left-20">
                        <div className="w-16 h-8 bg-electric-cyan/60 rounded shadow-lg transform rotate-12" />
                    </div>
                    <div className="absolute bottom-20 right-20">
                        <div className="w-12 h-12 bg-electric-cyan/60 rounded-full shadow-lg" />
                    </div>
                </div>
            </motion.div>

            {/* Voice-Guard System auf Tablet */}
            <motion.div
                style={{ opacity: voiceGuardOpacity, scale: voiceGuardScale }}
                className="absolute top-20 right-20 z-20"
            >
                <div className="relative">
                    {/* Tablet */}
                    <div className="w-[250px] h-[180px] bg-gray-900 rounded-xl shadow-2xl border-2 border-electric-cyan/50 p-4">
                        {/* Screen */}
                        <div className="w-full h-full bg-black rounded-lg p-4 flex flex-col items-center justify-center">
                            {/* Voice-Guard Icon */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.8, 1, 0.8],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative mb-4"
                            >
                                <div className="w-20 h-20 bg-electric-cyan/30 rounded-full flex items-center justify-center">
                                    <svg className="w-12 h-12 text-electric-cyan" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                {/* Pulse Effect */}
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute inset-0 bg-electric-cyan/30 rounded-full blur-md"
                                />
                            </motion.div>
                            
                            {/* Status Text */}
                            <div className="text-electric-cyan text-sm font-bold mb-1">Voice-Guard</div>
                            <div className="text-gray-400 text-xs">Aktiv</div>
                            
                            {/* Activity Indicator */}
                            <motion.div
                                style={{ opacity: activityIndicatorsOpacity }}
                                className="mt-4 flex gap-1"
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            height: [4, 12, 4],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                        className="w-1 bg-electric-cyan rounded-full"
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Telefon wird automatisch beantwortet */}
            <motion.div
                style={{ opacity: phoneAnswerOpacity }}
                className="absolute bottom-20 right-1/4 z-20"
            >
                <div className="relative">
                    <div className="w-20 h-12 bg-gray-800 rounded-lg shadow-xl border-2 border-electric-cyan">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-8 h-8 bg-electric-cyan rounded-full flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 text-deep-navy" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                    {/* Success Glow */}
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 bg-electric-cyan/30 rounded-lg blur-md"
                    />
                </div>
            </motion.div>

        </div>
    );
};
