"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mic, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const PhoneMockup = () => {
    const [callState, setCallState] = useState<'incoming' | 'active' | 'completed'>('incoming');
    const [transcript, setTranscript] = useState<string[]>([]);

    // Simulate flow
    useEffect(() => {
        const sequence = async () => {
            // Incoming -> Active
            await new Promise(r => setTimeout(r, 2000));
            setCallState('active');

            // Messages
            const messages = [
                "KI: Berneby Solutions, guten Tag. Wie kann ich helfen?",
                "Kunde: Hallo, ich brauche dringend einen Dachdecker für eine Reparatur.",
                "KI: Verstehe. Ist es ein Notfall oder eine geplante Reparatur?",
                "Kunde: Es regnet rein, also eher Notfall!",
                "KI: Alles klar. Ich habe Ihre Nummer notiert. Ein Meister ruft in 10 Min zurück.",
            ];

            for (let i = 0; i < messages.length; i++) {
                await new Promise(r => setTimeout(r, 1500));
                const message = messages[i];
                if (message) {
                    setTranscript(prev => [...prev, message]);
                }
            }

            await new Promise(r => setTimeout(r, 2000));
            setCallState('completed');

            // Reset loop
            await new Promise(r => setTimeout(r, 3000));
            setCallState('incoming');
            setTranscript([]);
        };

        sequence();
    }, []);

    return (
        <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden mx-auto">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-slate-950 flex flex-col pt-12 pb-8 px-4 relative">

                {/* INCOMING CALL SCREEN */}
                <AnimatePresence>
                    {callState === 'incoming' && (
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="w-24 h-24 rounded-full bg-gray-700 mb-6 flex items-center justify-center animate-pulse">
                                <span className="text-3xl">👤</span>
                            </div>
                            <h3 className="text-2xl text-white font-medium mb-2">Unbekannt</h3>
                            <span className="text-gray-400 mb-20">Eingehender Anruf...</span>

                            <div className="flex gap-16">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/20">
                                        <Phone className="text-white fill-white rotate-[135deg]" />
                                    </div>
                                    <span className="text-xs text-white">Ablehnen</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20 animate-bounce">
                                        <Phone className="text-white fill-white" />
                                    </div>
                                    <span className="text-xs text-white">Annehmen</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ACTIVE CALL SCREEN */}
                {callState !== 'incoming' && (
                    <motion.div
                        className="flex flex-col h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="flex justify-between items-center text-gray-400 mb-8 px-2">
                            <Volume2 className="w-5 h-5" />
                            <span className="text-xs font-mono text-green-400">00:15</span>
                            <Mic className="w-5 h-5 text-white" />
                        </div>

                        {/* Transcript */}
                        <div className="flex-1 overflow-y-auto space-y-3 px-1 no-scrollbar">
                            {transcript.map((msg, i) => {
                                const isAI = msg.startsWith("KI:");
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={cn(
                                            "p-3 rounded-2xl text-xs max-w-[85%]",
                                            isAI
                                                ? "bg-electric-cyan/10 text-electric-cyan ml-auto rounded-tr-sm"
                                                : "bg-gray-800 text-gray-200 mr-auto rounded-tl-sm"
                                        )}
                                    >
                                        <span className="block font-bold mb-1 opacity-50 text-[10px] uppercase">
                                            {isAI ? "Voice Guard AI" : "Anrufer"}
                                        </span>
                                        {msg.split(": ")[1]}
                                    </motion.div>
                                );
                            })}
                            {callState === 'active' && (
                                <div className="flex gap-1 p-2">
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            )}
                        </div>

                        <div className="mt-6 flex justify-center">
                            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                                <Phone className="text-white fill-white rotate-[135deg]" />
                            </div>
                        </div>
                    </motion.div>
                )}

            </div>
        </div>
    );
};
