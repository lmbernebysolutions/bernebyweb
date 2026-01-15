"use client";

import { motion, useTransform } from "framer-motion";

interface Solution2Props {
    progress: any;
}

export const Solution2PremiumWeb = ({ progress }: Solution2Props) => {
    const websiteOpacity = useTransform(progress, [0, 0.3], [0, 1]);
    const websiteScale = useTransform(progress, [0, 0.3], [0.8, 1]);
    const websiteY = useTransform(progress, [0, 0.3], [50, 0]);
    const workersOpacity = useTransform(progress, [0.3, 0.6], [0, 1]);
    const workersY = useTransform(progress, [0.3, 0.6], [30, 0]);
    const worksiteOpacity = useTransform(progress, [0.4, 0.7], [0, 1]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Hintergrund Glow */}
            <motion.div
                style={{ opacity: useTransform(progress, [0, 0.5], [0, 0.2]) }}
                className="absolute inset-0 bg-electric-cyan/30 blur-[100px] rounded-full"
            />

            {/* Moderne Website auf Laptop - größer und als Website erkennbar */}
            <motion.div
                style={{ opacity: websiteOpacity, scale: websiteScale, y: websiteY }}
                className="absolute top-10 left-10 z-20"
            >
                <div className="relative">
                    {/* Laptop Base - modern und glänzend */}
                    <div className="w-[500px] h-[300px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-2xl border-2 border-electric-cyan/70 relative overflow-hidden">
                        {/* Glänzender Effekt */}
                        <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 via-transparent to-transparent rounded-lg pointer-events-none" />
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent" />
                        
                        {/* Screen */}
                        <div className="absolute inset-x-4 top-4 bottom-16 bg-black rounded-t-lg overflow-hidden border-2 border-electric-cyan/30 shadow-[0_0_20px_rgba(1,250,249,0.3)]">
                            {/* Browser Bar - modern und glänzend */}
                            <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-electric-cyan/20">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg" />
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg" />
                                <div className="flex-1 h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded ml-4 flex items-center px-3 border border-electric-cyan/30 shadow-inner">
                                    <div className="w-4 h-4 rounded-full border-2 border-electric-cyan mr-2 shadow-[0_0_8px_rgba(1,250,249,0.5)]" />
                                    <div className="text-xs text-electric-cyan font-semibold">www.dein-betrieb.de</div>
                                </div>
                            </div>
                            
                            {/* Website Content - modern und glänzend */}
                            <div className="w-full h-full bg-gradient-to-b from-gray-900 via-black to-gray-950 p-4 overflow-hidden">
                                {/* Modern Website Header - glänzend */}
                                <div className="h-12 bg-gradient-to-r from-electric-cyan/25 to-electric-cyan/15 rounded-lg mb-2 flex items-center px-4 border border-electric-cyan/40 shadow-[0_0_15px_rgba(1,250,249,0.2)]">
                                    <div className="w-8 h-8 bg-gradient-to-br from-electric-cyan/50 to-electric-cyan/30 rounded-full mr-3 border border-electric-cyan/50 shadow-lg" />
                                    <div className="flex-1">
                                        <div className="h-2 bg-electric-cyan/70 rounded w-3/4 mb-1 shadow-[0_0_8px_rgba(1,250,249,0.3)]" />
                                        <div className="h-1.5 bg-electric-cyan/50 rounded w-1/2" />
                                    </div>
                                </div>
                                
                                {/* Premium Content Cards - glänzend, kleiner */}
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="h-16 bg-gradient-to-br from-electric-cyan/15 to-electric-cyan/5 rounded border border-electric-cyan/30 shadow-[0_0_10px_rgba(1,250,249,0.15)]" />
                                    <div className="h-16 bg-gradient-to-br from-electric-cyan/15 to-electric-cyan/5 rounded border border-electric-cyan/30 shadow-[0_0_10px_rgba(1,250,249,0.15)]" />
                                </div>
                                
                                {/* CTA Button - glänzend und modern */}
                                <div className="h-10 bg-gradient-to-r from-electric-cyan to-electric-cyan/80 rounded-lg flex items-center justify-center border-2 border-electric-cyan/70 shadow-[0_0_20px_rgba(1,250,249,0.4)] mb-2">
                                    <div className="text-deep-navy text-xs font-bold">Karriere starten</div>
                                </div>
                                
                                {/* Kontakt Button - modern */}
                                <div className="h-9 bg-gradient-to-r from-electric-cyan/40 to-electric-cyan/25 rounded-lg flex items-center justify-center border border-electric-cyan/50 shadow-[0_0_10px_rgba(1,250,249,0.2)] mb-2">
                                    <div className="text-electric-cyan text-xs font-semibold">Kontakt aufnehmen</div>
                                </div>
                                
                                {/* Zweiter CTA Button - modern */}
                                <div className="h-9 bg-gradient-to-r from-electric-cyan/35 to-electric-cyan/20 rounded-lg flex items-center justify-center border border-electric-cyan/45 shadow-[0_0_10px_rgba(1,250,249,0.2)]">
                                    <div className="text-electric-cyan text-xs font-semibold">Jetzt bewerben →</div>
                                </div>
                            </div>
                        </div>
                        {/* Keyboard - modern */}
                        <div className="absolute bottom-4 left-4 right-4 h-12 bg-gradient-to-b from-gray-800 to-gray-900 rounded border border-electric-cyan/20 shadow-lg" />
                    </div>
                    
                    {/* "Premium" Label */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-electric-cyan text-deep-navy text-xs px-3 py-1 rounded-full font-bold"
                    >
                        Premium Website
                    </motion.div>
                </div>
            </motion.div>

            {/* Baustelle/Arbeitsplatz - MIT MITARBEITERN */}
            <motion.div
                style={{ opacity: worksiteOpacity, y: workersY }}
                className="relative z-10"
            >
                <div className="relative w-[500px] h-[300px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-2 border-electric-cyan/50 shadow-xl">
                    {/* Baustelle Rahmen */}
                    <div className="absolute inset-4 border-2 border-electric-cyan/30 rounded" />
                    
                    {/* Werkzeuge in Benutzung */}
                    <div className="absolute top-20 left-20">
                        <div className="w-16 h-8 bg-electric-cyan/60 rounded shadow-lg transform rotate-12" />
                    </div>
                    <div className="absolute bottom-20 right-20">
                        <div className="w-12 h-12 bg-electric-cyan/60 rounded-full shadow-lg" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
