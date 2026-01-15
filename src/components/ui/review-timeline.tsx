"use client";

import { motion } from "framer-motion";
import { Star, ShieldAlert, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
    { type: 'review', author: 'Mario B.', rating: 5, text: 'Super Arbeit, gerne wieder!', time: '10:42' },
    { type: 'review-bad', author: 'Unzufrieden123', rating: 2, text: 'Termin wurde verschoben...', time: '14:15' },
    { type: 'review', author: 'Lisa K.', rating: 5, text: 'Pünktlich und saber.', time: '16:30' },
];

export const ReviewTimeline = () => {
    return (
        <div className="relative w-full max-w-md mx-auto h-[400px] bg-slate-900/50 rounded-2xl border border-white/10 p-6 overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-cyan to-transparent opacity-20" />

            <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Live Feed</span>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-500">System Active</span>
                </div>
            </div>

            <div className="relative border-l-2 border-white/5 pl-8 space-y-8">
                {events.map((event, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.5 }}
                        className="relative"
                    >
                        {/* Connector Dot */}
                        <div className={cn(
                            "absolute -left-[39px] top-0 w-5 h-5 rounded-full border-4 border-slate-900",
                            event.type === 'review-bad' ? "bg-red-500" : "bg-electric-cyan"
                        )} />

                        {/* Card */}
                        <div className={cn(
                            "p-4 rounded-xl border",
                            event.type === 'review-bad'
                                ? "bg-red-500/10 border-red-500/20"
                                : "bg-white/5 border-white/10"
                        )}>
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-white text-sm">{event.author}</span>
                                <span className="text-xs text-gray-500 font-mono">{event.time}</span>
                            </div>

                            {event.type === 'review-bad' ? (
                                <div className="flex items-center gap-2 text-red-400 text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4" />
                                    <span>ABGEFANGEN & GEKLÄRT</span>
                                </div>
                            ) : (
                                <div className="flex gap-0.5 mb-2">
                                    {Array(5).fill(0).map((_, j) => (
                                        <Star key={j} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                            )}

                            <p className={cn("text-xs", event.type === 'review-bad' ? "text-gray-400 line-through decoration-red-500/50" : "text-gray-300")}>
                                "{event.text}"
                            </p>

                            {event.type === 'review-bad' && (
                                <div className="mt-2 pt-2 border-t border-red-500/20 flex items-center gap-2">
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    <span className="text-[10px] text-green-500">Ticket automatisch erstellt</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Scroll Fade */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
        </div>
    );
};
