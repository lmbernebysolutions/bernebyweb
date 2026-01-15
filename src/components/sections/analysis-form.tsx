"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";

export const AnalysisForm = () => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Simple state management for MVP
    const [formData, setFormData] = useState({
        url: "",
        name: "",
        email: "",
        phone: "",
        role: "owner", // owner, marketing, other
        goal: "" // growth, staff, automation, other
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-white/10 p-8 rounded-hauer text-center max-w-lg mx-auto hover:border-white/20 transition-all"
            >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Anfrage erhalten!</h3>
                <p className="text-gray-300 mb-6">Wir haben deine Daten erhalten und starten die Analyse. Du hörst in Kürze von uns (meist innerhalb von 2 Stunden).</p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-sm text-green-400 hover:text-green-300 underline"
                >
                    Neue Anfrage starten
                </button>
            </motion.div>
        );
    }

    return (
        <section className="py-24 relative overflow-hidden bg-deep-navy" id="analyse">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-electric-cyan font-bold uppercase tracking-widest text-sm mb-2 block">
                            Kostenlos & Unverbindlich
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Starte deine <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">Potenzial-Analyse</span>
                        </h2>
                        <p className="text-gray-400">
                            Finde heraus, wie viele Kunden dir in deiner Region aktuell entgehen.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-hauer backdrop-blur-sm relative hover:border-white/20 transition-all">

                        {/* Progress Bar */}
                        <div className="flex gap-2 mb-8">
                            {[1, 2, 3].map((s) => (
                                <div
                                    key={s}
                                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${s <= step ? 'bg-electric-cyan' : 'bg-gray-700'}`}
                                />
                            ))}
                        </div>

                        {step === 1 && (
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="space-y-4"
                            >
                                <Input
                                    label="Deine Website (falls vorhanden)"
                                    placeholder="www.dein-betrieb.de"
                                    value={formData.url}
                                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                />

                                <div className="pt-4">
                                    <label className="block text-xs font-medium text-gray-400 mb-3 uppercase tracking-wide">Du bist...</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, role: 'owner' })}
                                            className={`p-3 rounded-lg border text-sm font-medium transition-all ${formData.role === 'owner' ? 'bg-electric-cyan/10 border-electric-cyan text-electric-cyan' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'}`}
                                        >
                                            Inhaber / GF
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, role: 'marketing' })}
                                            className={`p-3 rounded-lg border text-sm font-medium transition-all ${formData.role === 'marketing' ? 'bg-electric-cyan/10 border-electric-cyan text-electric-cyan' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'}`}
                                        >
                                            Marketing / Vertrieb
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="w-full mt-6 h-12 bg-white text-deep-navy font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors"
                                >
                                    Weiter <ChevronRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="space-y-4"
                            >
                                <label className="block text-xs font-medium text-gray-400 mb-3 uppercase tracking-wide">Was ist dein wichtigstes Ziel?</label>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { id: 'growth', label: 'Mehr Neukunden & Umsatz' },
                                        { id: 'staff', label: 'Mitarbeiter finden & binden' },
                                        { id: 'automation', label: 'Zeitersparnis durch Automatisierung' },
                                        { id: 'other', label: 'Andere Herausforderung' }
                                    ].map((g) => (
                                        <button
                                            key={g.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, goal: g.id })}
                                            className={`p-4 rounded-lg border text-left text-sm font-medium transition-all ${formData.goal === g.id ? 'bg-electric-cyan/10 border-electric-cyan text-electric-cyan' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'}`}
                                        >
                                            {g.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="pt-4 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="w-1/3 h-12 bg-transparent border border-white/10 text-gray-400 font-bold rounded-lg hover:text-white hover:border-white/20 bg-gradient-to-b from-white/5 to-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors"
                                    >
                                        Zurück
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep(3)}
                                        className="flex-1 h-12 bg-white text-deep-navy font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors"
                                    >
                                        Weiter <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="space-y-4"
                            >
                                <Input
                                    label="Dein Name"
                                    placeholder="Max Mustermann"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <Input
                                    label="E-Mail Adresse"
                                    type="email"
                                    placeholder="max@firma.de"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <Input
                                    label="Telefonnummer (für Rückfragen)"
                                    type="tel"
                                    placeholder="0171 12345678"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />

                                <div className="pt-4 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="w-1/3 h-12 bg-transparent border border-white/10 text-gray-400 font-bold rounded-lg hover:text-white hover:border-white/20 bg-gradient-to-b from-white/5 to-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors"
                                    >
                                        Zurück
                                    </button>
                                    <InteractiveHoverButton
                                        type="submit"
                                        className="flex-1 w-full border-electric-cyan/50 hover:border-electric-cyan text-white"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Sende...</span>
                                        ) : (
                                            "Ergebnis anzeigen"
                                        )}
                                    </InteractiveHoverButton>
                                </div>
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Mit dem Absenden stimmst du zu, dass wir dich kontaktieren dürfen. Deine Daten sind sicher.
                                </p>
                            </motion.div>
                        )}

                        {/* DSGVO Sticker Ornament */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -bottom-10 -right-10 w-44 h-44 z-20 pointer-events-none opacity-50 hover:opacity-100 transition-opacity drop-shadow-lg"
                        >
                            <Image
                                src="/assets/images/dgvo-transparent.png"
                                alt="DSGVO Safe"
                                fill
                                className="object-contain drop-shadow-lg"
                                style={{ background: 'transparent' }}
                                unoptimized
                            />
                        </motion.div>
                    </form>
                </div>
            </div>
        </section>
    );
};
