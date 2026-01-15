"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";

export const NewsletterSection = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('success');
        setEmail("");
    };

    return (
        <section className="py-16 bg-deep-navy border-t border-white/5">
            <div className="container mx-auto px-8 md:px-16">
                <div className="bg-white/5 border border-white/10 rounded-hauer p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden hover:border-white/20 transition-all">


                    <div className="relative z-10 max-w-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-slate-800 rounded-lg">
                                <Mail className="w-5 h-5 text-electric-cyan" />
                            </div>
                            <span className="text-electric-cyan px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-electric-cyan/10">
                                Insider Wissen
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Die "Handwerk 4.0" Strategie-Mails</h3>
                        <p className="text-gray-400">
                            Erhalte 1x pro Woche konkrete Tipps, wie du Fachkräfte gewinnst und deine Prozesse automatisierst. Keine Werbung, nur Mehrwert.
                        </p>
                    </div>

                    <div className="relative z-10 w-full max-w-md">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-3"
                            >
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <p className="text-green-200 font-medium">Willkommen im Verteiler!</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="deine@email.de"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-cyan transition-all"
                                    />
                                    <InteractiveHoverButton className="whitespace-nowrap px-6 border-electric-cyan/50 hover:border-electric-cyan text-white">
                                        Anmelden
                                    </InteractiveHoverButton>
                                </div>
                                <p className="text-xs text-gray-500 ml-1">
                                    100% kostenlos. Jederzeit abmeldbar.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
