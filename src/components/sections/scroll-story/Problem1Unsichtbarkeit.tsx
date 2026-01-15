"use client";

import { motion, useTransform } from "framer-motion";

interface Problem1Props {
    progress: any;
}

export const Problem1Unsichtbarkeit = ({ progress }: Problem1Props) => {
    // Alles sofort sichtbar beim Problem (keine Animation)
    const redGlowOpacity = useTransform(progress, [0, 0.3], [0.1, 0.2]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Hintergrund Glow */}
            <motion.div
                style={{ opacity: redGlowOpacity }}
                className="absolute inset-0 bg-red-500/30 blur-[100px] rounded-full"
            />

            {/* Laptop - sofort sichtbar */}
            <div className="relative z-10">
                {/* Laptop Base */}
                <div className="relative">
                    <div className="w-[500px] h-[300px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl border-2 border-gray-700">
                        {/* Screen */}
                        <div className="absolute inset-x-4 top-4 bottom-16 bg-black rounded-t-lg overflow-hidden">
                            {/* Screen Content */}
                            <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black p-6">
                                {/* Browser Bar */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="flex-1 h-6 bg-gray-800 rounded ml-4 flex items-center px-3">
                                        <div className="w-4 h-4 rounded-full border-2 border-gray-600 mr-2" />
                                        <div className="text-xs text-gray-400">google.com</div>
                                    </div>
                                </div>

                                {/* Search Bar */}
                                <div className="mb-4">
                                    <div className="h-12 bg-white/10 rounded-lg flex items-center px-4">
                                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <span className="text-gray-400 text-sm">Dachdecker Erzgebirge</span>
                                    </div>
                                </div>

                                {/* Search Results - Konkurrenz - sofort sichtbar */}
                                <div className="space-y-3">
                                    {/* Result 1 */}
                                    <div className="bg-gray-800/50 rounded p-3 border-l-4 border-gray-600">
                                        <div className="text-blue-400 text-sm font-medium mb-1">www.konkurrenz-a.de</div>
                                        <div className="text-white text-sm font-semibold mb-1">Dachdecker Firma A</div>
                                        <div className="text-gray-400 text-xs">Professionelle Dachdeckerarbeiten...</div>
                                    </div>

                                    {/* Result 2 */}
                                    <div className="bg-gray-800/50 rounded p-3 border-l-4 border-gray-600">
                                        <div className="text-blue-400 text-sm font-medium mb-1">www.konkurrenz-b.de</div>
                                        <div className="text-white text-sm font-semibold mb-1">Dachdecker Firma B</div>
                                        <div className="text-gray-400 text-xs">Ihr Partner für Dachsanierung...</div>
                                    </div>

                                    {/* Result 3 */}
                                    <div className="bg-gray-800/50 rounded p-3 border-l-4 border-gray-600">
                                        <div className="text-blue-400 text-sm font-medium mb-1">www.konkurrenz-c.de</div>
                                        <div className="text-white text-sm font-semibold mb-1">Dachdecker Firma C</div>
                                        <div className="text-gray-400 text-xs">Schnell und günstig...</div>
                                    </div>

                                    {/* Eber NICHT sichtbar */}
                                    <div className="bg-gray-800/20 rounded p-3 border-l-4 border-transparent opacity-30">
                                        <div className="text-gray-600 text-sm">... weitere Ergebnisse</div>
                                    </div>
                                </div>

                                {/* Red X Mark - Eber nicht gefunden - sofort sichtbar */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-red-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="absolute inset-0 bg-red-500/30 rounded-full blur-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Keyboard Area */}
                        <div className="absolute bottom-4 left-4 right-4 h-12 bg-gray-800 rounded" />
                    </div>
                </div>
            </div>

        </div>
    );
};

// Eber Character Component
export const EberCharacter = ({ emotion }: { emotion: "sad" | "happy" | "stressed" | "confident" }) => {
    return (
        <div className="relative w-48 h-48">
            {/* Eber Körper */}
            <svg viewBox="0 0 200 300" className="w-full h-full">
                <defs>
                    <linearGradient id="eberBody" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#021A33" />
                        <stop offset="100%" stopColor="#032448" />
                    </linearGradient>
                </defs>
                
                {/* Körper */}
                <ellipse cx="100" cy="200" rx="80" ry="100" fill="url(#eberBody)" stroke="#ffffff" strokeWidth="3" />
                
                {/* Kopf */}
                <path d="M 100,100 Q 80,80 60,100 Q 50,110 60,120 Q 70,115 80,120 Q 90,115 100,120 Q 110,115 120,120 Q 130,115 140,120 Q 150,110 140,100 Q 120,80 100,100" 
                      fill="url(#eberBody)" stroke="#ffffff" strokeWidth="3" />
                
                {/* Augen */}
                {emotion === "sad" || emotion === "stressed" ? (
                    <>
                        <path d="M 85,180 Q 90,185 95,180" stroke="#01FAF9" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <path d="M 105,180 Q 110,185 115,180" stroke="#01FAF9" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </>
                ) : (
                    <>
                        <ellipse cx="90" cy="180" rx="8" ry="12" fill="#01FAF9" />
                        <ellipse cx="110" cy="180" rx="8" ry="12" fill="#01FAF9" />
                    </>
                )}
                
                {/* Schnauze */}
                <ellipse cx="100" cy="200" rx="25" ry="20" fill="#01FAF9" />
                <ellipse cx="95" cy="195" rx="5" ry="5" fill="#021A33" />
                <ellipse cx="105" cy="195" rx="5" ry="5" fill="#021A33" />
                
                {/* Stoßzähne */}
                <path d="M 90,210 L 85,220 L 90,215 Z" fill="#ffffff" />
                <path d="M 110,210 L 115,220 L 110,215 Z" fill="#ffffff" />
            </svg>
        </div>
    );
};
