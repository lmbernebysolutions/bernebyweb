"use client";

import { motion, useTransform } from "framer-motion";

interface Solution1Props {
    progress: any;
}

export const Solution1GeoNet = ({ progress }: Solution1Props) => {
    const laptopScale = useTransform(progress, [0, 0.3], [0.9, 1]);
    const laptopY = useTransform(progress, [0, 0.3], [50, 0]);
    const searchResultsOpacity = useTransform(progress, [0.2, 0.5], [0, 1]);
    const searchResultsX = useTransform(progress, [0.2, 0.5], [30, 0]);
    const checkMarkOpacity = useTransform(progress, [0.4, 0.7], [0, 1]);
    const checkMarkScale = useTransform(progress, [0.4, 0.7], [0, 1]);
    const mapPinsOpacity = useTransform(progress, [0.5, 0.8], [0, 1]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Hintergrund Glow */}
            <motion.div
                style={{ opacity: useTransform(progress, [0, 0.5], [0, 0.2]) }}
                className="absolute inset-0 bg-electric-cyan/30 blur-[100px] rounded-full"
            />

            {/* Map Pins im Hintergrund */}
            <motion.div
                style={{ opacity: mapPinsOpacity }}
                className="absolute inset-0"
            >
                {[200, 600, 300, 700].map((x, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${x}px`,
                            top: `${150 + i * 200}px`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    >
                        <div className="w-4 h-4 bg-electric-cyan rounded-full" />
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-electric-cyan" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Laptop */}
            <motion.div
                style={{ scale: laptopScale, y: laptopY }}
                className="relative z-10"
            >
                <div className="relative">
                    <div className="w-[500px] h-[300px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl border-2 border-electric-cyan/50">
                        {/* Screen */}
                        <div className="absolute inset-x-4 top-4 bottom-16 bg-black rounded-t-lg overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black p-6">
                                {/* Browser Bar */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="flex-1 h-6 bg-gray-800 rounded ml-4 flex items-center px-3">
                                        <div className="w-4 h-4 rounded-full border-2 border-electric-cyan mr-2" />
                                        <div className="text-xs text-electric-cyan">google.com</div>
                                    </div>
                                </div>

                                {/* Search Bar */}
                                <div className="mb-4">
                                    <div className="h-12 bg-white/10 rounded-lg flex items-center px-4 border border-electric-cyan/30">
                                        <svg className="w-5 h-5 text-electric-cyan mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <span className="text-white text-sm">Dachdecker Erzgebirge</span>
                                    </div>
                                </div>

                                {/* Search Results - EBER DOMINIERT */}
                                <motion.div
                                    style={{ opacity: searchResultsOpacity, x: searchResultsX }}
                                    className="space-y-3"
                                >
                                    {/* Result 1 - EBER */}
                                    <motion.div
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-electric-cyan/20 rounded p-3 border-l-4 border-electric-cyan"
                                    >
                                        <div className="text-electric-cyan text-sm font-medium mb-1">www.dein-betrieb.de/annaberg</div>
                                        <div className="text-white text-sm font-bold mb-1">Dein Betrieb - Annaberg</div>
                                        <div className="text-gray-300 text-xs">Professionelle Dachdeckerarbeiten...</div>
                                    </motion.div>

                                    {/* Result 2 - EBER */}
                                    <motion.div
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-electric-cyan/20 rounded p-3 border-l-4 border-electric-cyan"
                                    >
                                        <div className="text-electric-cyan text-sm font-medium mb-1">www.dein-betrieb.de/marienberg</div>
                                        <div className="text-white text-sm font-bold mb-1">Dein Betrieb - Marienberg</div>
                                        <div className="text-gray-300 text-xs">Ihr Partner für Dachsanierung...</div>
                                    </motion.div>

                                    {/* Result 3 - EBER */}
                                    <motion.div
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-electric-cyan/20 rounded p-3 border-l-4 border-electric-cyan"
                                    >
                                        <div className="text-electric-cyan text-sm font-medium mb-1">www.dein-betrieb.de/chemnitz</div>
                                        <div className="text-white text-sm font-bold mb-1">Dein Betrieb - Chemnitz</div>
                                        <div className="text-gray-300 text-xs">Schnell und professionell...</div>
                                    </motion.div>
                                </motion.div>

                                {/* Check Mark - Erfolg */}
                                <motion.div
                                    style={{ opacity: checkMarkOpacity, scale: checkMarkScale }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-electric-cyan/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-16 h-16 text-deep-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        </div>

                        {/* Keyboard Area */}
                        <div className="absolute bottom-4 left-4 right-4 h-12 bg-gray-800 rounded" />
                    </div>
                </div>
            </motion.div>

        </div>
    );
};
