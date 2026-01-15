"use client";

import { motion, useTransform } from "framer-motion";

interface Problem4Props {
    progress: any;
}

export const Problem4Preiskampf = ({ progress }: Problem4Props) => {
    // Alles sofort sichtbar beim Problem
    const redGlowOpacity = useTransform(progress, [0, 0.3], [0.1, 0.2]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Hintergrund Glow */}
            <motion.div
                style={{ opacity: redGlowOpacity }}
                className="absolute inset-0 bg-red-500/30 blur-[100px] rounded-full"
            />

            {/* Preisvergleich-Tabelle - sofort sichtbar */}
            <div className="relative z-10">
                <div className="relative w-[500px] bg-gray-900 rounded-hauer shadow-2xl border-2 border-white/10 p-6">
                    {/* Überschrift */}
                    <div className="text-center mb-4">
                        <h3 className="text-white text-xl font-bold mb-1">Preisvergleich</h3>
                        <div className="text-gray-400 text-sm">Alle Anbieter - nur Preise</div>
                    </div>

                    {/* Preisvergleich Liste - sofort sichtbar */}
                    <div className="space-y-3">
                        {/* Firma A */}
                        <div className="bg-gray-800 rounded-hauer p-4 border-l-4 border-red-500/40">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-white font-medium">Firma A</div>
                                    <div className="text-gray-400 text-sm">Standard-Service</div>
                                </div>
                                <div className="text-red-500 text-2xl font-bold font-mono">€500</div>
                            </div>
                        </div>

                        {/* Firma B */}
                        <div className="bg-gray-800 rounded-hauer p-4 border-l-4 border-red-500/40">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-white font-medium">Firma B</div>
                                    <div className="text-gray-400 text-sm">Basis-Service</div>
                                </div>
                                <div className="text-red-500 text-2xl font-bold font-mono">€450</div>
                            </div>
                        </div>

                        {/* Dein Betrieb - nur als Preis */}
                        <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-transparent opacity-60">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-gray-500 font-medium">Dein Betrieb</div>
                                    <div className="text-gray-600 text-sm">Nur eine Zahl</div>
                                </div>
                                <div className="text-red-500 text-2xl font-bold font-mono">€600</div>
                            </div>
                        </div>

                        {/* Firma C */}
                        <div className="bg-gray-800 rounded-hauer p-4 border-l-4 border-red-500/40">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-white font-medium">Firma C</div>
                                    <div className="text-gray-400 text-sm">Günstig-Service</div>
                                </div>
                                <div className="text-red-500 text-2xl font-bold font-mono">€480</div>
                            </div>
                        </div>
                    </div>

                    {/* "Nur Preise" Hinweis - sofort sichtbar */}
                    <div className="mt-4 text-center">
                        <div className="text-red-500 text-sm font-medium">Alle gleich behandelt - nur Preise zählen</div>
                    </div>
                </div>
            </div>

        </div>
    );
};
