"use client";

import { motion, useTransform } from "framer-motion";

interface Problem2Props {
    progress: any;
}

export const Problem2Fachkraeftemangel = ({ progress }: Problem2Props) => {
    // Alles sofort sichtbar beim Problem
    const redGlowOpacity = useTransform(progress, [0, 0.3], [0.1, 0.2]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Hintergrund Glow */}
            <motion.div
                style={{ opacity: redGlowOpacity }}
                className="absolute inset-0 bg-red-500/30 blur-[100px] rounded-full"
            />

            {/* Baustelle/Arbeitsplatz - LEER - sofort sichtbar */}
            <div className="relative z-10">
                <div className="relative w-[500px] h-[300px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 border-dashed shadow-xl">
                    {/* Baustelle Rahmen */}
                    <div className="absolute inset-4 border-2 border-gray-600 border-dashed rounded" />
                    
                    {/* Werkzeuge liegen rum - ungenutzt - sofort sichtbar */}
                    <div className="absolute top-20 left-20">
                        <div className="w-16 h-8 bg-gray-600/50 rounded transform rotate-12 opacity-50" />
                    </div>
                    <div className="absolute bottom-20 right-20">
                        <div className="w-12 h-12 bg-gray-600/50 rounded-full opacity-50" />
                    </div>
                    
                    {/* Keine Personen sichtbar - sofort sichtbar */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="text-center">
                            <div className="text-4xl mb-2">👤</div>
                            <div className="text-gray-500 text-lg font-bold">LEER</div>
                            <div className="text-gray-600 text-sm">Keine Mitarbeiter</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alte Website auf Laptop - im gleichen Style wie Lösung */}
            <div className="absolute top-10 left-10 z-20">
                <div className="relative">
                    {/* Laptop Base - alt und verstaubt */}
                    <div className="w-[500px] h-[300px] bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-xl border-2 border-gray-600 opacity-90">
                        {/* Verstaubter Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-800/20 rounded-lg pointer-events-none" />
                        
                        {/* Screen */}
                        <div className="absolute inset-x-4 top-4 bottom-16 bg-gray-950 rounded-t-lg overflow-hidden border border-gray-700/50">
                            {/* Browser Bar - alt und verstaubt */}
                            <div className="flex items-center gap-2 p-2 bg-gray-900 border-b border-gray-800">
                                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                                <div className="w-3 h-3 rounded-full bg-green-500/30" />
                                <div className="flex-1 h-6 bg-gray-800 rounded ml-4 flex items-center px-3 border border-gray-700">
                                    <div className="w-3 h-3 rounded-full border border-gray-600 mr-2" />
                                    <div className="text-xs text-gray-600 font-serif">www.alt-betrieb.de</div>
                                </div>
                            </div>
                            
                            {/* Website Content - alt und verstaubt */}
                            <div className="w-full h-full bg-gradient-to-b from-gray-950 to-black p-4 overflow-hidden">
                                {/* Alter Website Header - grau, langweilig, alt */}
                                <div className="h-12 bg-gray-800/40 rounded mb-2 flex items-center px-4 border border-gray-700/30 shadow-inner">
                                    <div className="w-8 h-8 bg-gray-700/50 rounded-full mr-3 border border-gray-600/30" />
                                    <div className="flex-1">
                                        <div className="h-2 bg-gray-700/50 rounded w-3/4 mb-1" />
                                        <div className="h-1.5 bg-gray-700/30 rounded w-1/2" />
                                    </div>
                                </div>
                                
                                {/* Alte Content Cards - grau, flach, alt, kleiner */}
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="h-16 bg-gray-800/30 rounded border border-gray-700/20 shadow-inner" />
                                    <div className="h-16 bg-gray-800/30 rounded border border-gray-700/20 shadow-inner" />
                                </div>
                                
                                {/* Alter Button - langweilig, flach */}
                                <div className="h-10 bg-gray-800/40 rounded flex items-center justify-center border border-gray-700/30 mb-2 shadow-inner">
                                    <div className="text-gray-500 text-xs font-medium">Kontakt</div>
                                </div>
                                
                                {/* Zweiter Button - alt, unsichtbar */}
                                <div className="h-9 bg-gray-800/20 rounded flex items-center justify-center border border-gray-700/10">
                                    <div className="text-gray-600 text-xs">Mehr Info</div>
                                </div>
                            </div>
                        </div>
                        {/* Keyboard - alt */}
                        <div className="absolute bottom-4 left-4 right-4 h-12 bg-gray-900 rounded border border-gray-700/50" />
                    </div>
                    
                    {/* "Verstaubt" Label - deutlich sichtbar */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                        Verstaubt & Alt
                    </div>
                </div>
            </div>
        </div>
    );
};
