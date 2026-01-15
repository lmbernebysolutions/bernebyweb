"use client";

import { motion, useTransform } from "framer-motion";

interface Solution4Props {
    progress: any;
}

export const Solution4PremiumPositioning = ({ progress }: Solution4Props) => {
    const presentationOpacity = useTransform(progress, [0, 0.3], [0, 1]);
    const presentationScale = useTransform(progress, [0, 0.3], [0.8, 1]);
    const presentationY = useTransform(progress, [0, 0.3], [50, 0]);
    const certificatesOpacity = useTransform(progress, [0.3, 0.6], [0, 1]);
    const certificatesScale = useTransform(progress, [0.3, 0.6], [0.9, 1]);
    const bookingButtonOpacity = useTransform(progress, [0.5, 0.8], [0, 1]);
    const checkMarkOpacity = useTransform(progress, [0.6, 0.9], [0, 1]);
    const checkMarkScale = useTransform(progress, [0.6, 0.9], [0, 1]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Hintergrund Glow */}
            <motion.div
                style={{ opacity: useTransform(progress, [0, 0.5], [0, 0.2]) }}
                className="absolute inset-0 bg-electric-cyan/30 blur-[100px] rounded-full"
            />

            {/* Premium-Präsentation/Website */}
            <motion.div
                style={{ opacity: presentationOpacity, scale: presentationScale, y: presentationY }}
                className="relative z-10"
            >
                <div className="relative w-[500px] bg-gray-900 rounded-xl shadow-2xl border-2 border-electric-cyan/50 p-6">
                    {/* Premium Header */}
                    <div className="text-center mb-6">
                        <div className="text-electric-cyan text-3xl font-bold mb-2">Premium Qualität</div>
                        <div className="text-white text-lg">Wert & Expertise</div>
                    </div>

                    {/* Zertifikate/Referenzen */}
                    <motion.div
                        style={{ opacity: certificatesOpacity, scale: certificatesScale }}
                        className="grid grid-cols-3 gap-4 mb-6"
                    >
                        {/* Zertifikat 1 */}
                        <div className="bg-electric-cyan/10 rounded-lg p-4 border border-electric-cyan/30 text-center">
                            <div className="text-3xl mb-2">🏆</div>
                            <div className="text-electric-cyan text-xs font-bold">Zertifikat</div>
                        </div>

                        {/* Referenz 2 */}
                        <div className="bg-electric-cyan/10 rounded-lg p-4 border border-electric-cyan/30 text-center">
                            <div className="text-3xl mb-2">⭐</div>
                            <div className="text-electric-cyan text-xs font-bold">Referenz</div>
                        </div>

                        {/* Award 3 */}
                        <div className="bg-electric-cyan/10 rounded-lg p-4 border border-electric-cyan/30 text-center">
                            <div className="text-3xl mb-2">🎖️</div>
                            <div className="text-electric-cyan text-xs font-bold">Award</div>
                        </div>
                    </motion.div>

                    {/* Qualität statt Preis */}
                    <div className="mb-6">
                        <div className="bg-electric-cyan/5 rounded-lg p-4 border border-electric-cyan/20">
                            <div className="text-white font-medium mb-2">✓ 20+ Jahre Erfahrung</div>
                            <div className="text-white font-medium mb-2">✓ Premium Materialien</div>
                            <div className="text-white font-medium">✓ Garantie inklusive</div>
                        </div>
                    </div>

                    {/* Buchungs-Button */}
                    <motion.div
                        style={{ opacity: bookingButtonOpacity }}
                        className="relative"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full h-14 bg-electric-cyan text-deep-navy font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            Jetzt buchen
                        </motion.button>
                    </motion.div>

                    {/* Check Mark - Erfolg */}
                    <motion.div
                        style={{ opacity: checkMarkOpacity, scale: checkMarkScale }}
                        className="absolute -top-6 -right-6"
                    >
                        <div className="relative">
                            <div className="w-16 h-16 bg-electric-cyan/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl">
                                <svg className="w-10 h-10 text-deep-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute inset-0 bg-electric-cyan/30 rounded-full blur-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
};
