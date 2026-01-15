"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { calculateROI, ROI_DEFAULTS, formatCurrency } from "@/lib/calculator-logic";
import { RangeSlider } from "@/components/ui/range-slider";
import { staggerContainer, fadeInUp } from "@/lib/animation-utils";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { BadgeEuro } from "lucide-react";

export const ROICalculator = () => {
    const [leads, setLeads] = useState(ROI_DEFAULTS.monthlyLeads);
    const [dealValue, setDealValue] = useState(ROI_DEFAULTS.dealValue);
    const [conversion, setConversion] = useState(ROI_DEFAULTS.conversionRate);

    const values = useMemo(() => calculateROI({
        monthlyLeads: leads,
        dealValue: dealValue,
        conversionRate: conversion
    }), [leads, dealValue, conversion]);

    const chartData = [
        { name: "Aktuell", value: values.currentRevenue },
        { name: "Mit Berneby", value: values.projectedRevenue },
    ];

    return (
        <section className="py-24 bg-deep-navy border-t border-white/5 relative overflow-hidden" id="roi">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Input Controls */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                            <span className="p-2 bg-emerald-500/10 rounded-lg">
                                <BadgeEuro className="w-6 h-6 text-emerald-400" />
                            </span>
                            <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">
                                ROI Rechner
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Was kostet dich der <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Stillstand?</span>
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-gray-400 mb-10 text-lg">
                            Berechne jetzt, wie viel Umsatzpotenzial du jeden Monat durch ineffektives Marketing verschenkst.
                        </motion.p>

                        <div className="space-y-8 bg-white/5 p-8 rounded-hauer border border-white/10 hover:border-white/20 transition-all">
                            <InputGroup
                                label="Aktuelle Anfragen pro Monat"
                                value={leads}
                                onChange={setLeads}
                                min={5} max={100} step={1}
                                unit=" Leads"
                            />
                            <InputGroup
                                label="Durchschnittlicher Auftragswert"
                                value={dealValue}
                                onChange={setDealValue}
                                min={500} max={10000} step={100}
                                unit=" €"
                            />
                            <InputGroup
                                label="Abschlussquote"
                                value={conversion}
                                onChange={setConversion}
                                min={5} max={50} step={1}
                                unit=" %"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Visualization & Results */}
                    <motion.div
                        className="w-full lg:w-1/2 bg-slate-900 rounded-hauer p-8 border border-white/10 shadow-2xl relative overflow-hidden hover:border-white/20 transition-all"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-electric-cyan" />

                        <div className="mb-8">
                            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Dein ungenutztes Potenzial</span>
                            <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mt-2">
                                <span className="font-mono">{formatCurrency(values.extraRevenue)}</span> <span className="text-lg text-gray-500 font-normal">/ Monat</span>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="h-[250px] w-full mb-8">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#34d399" stopOpacity={0.4} />
                                            <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                                    <YAxis hide />
                                    <CartesianGrid vertical={false} stroke="#ffffff10" strokeDasharray="3 3" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fff' }}
                                        cursor={false}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#34d399"
                                        strokeWidth={3}
                                        fill="url(#gradientBar)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/5 p-4 rounded-hauer border border-white/10 hover:border-white/20 transition-all">
                                <span className="text-gray-400 text-xs uppercase block mb-1">Aktueller Umsatz</span>
                                <span className="text-lg font-bold text-white font-mono">{formatCurrency(values.currentRevenue)}</span>
                            </div>
                            <div className="bg-emerald-500/10 p-4 rounded-hauer border border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                                <span className="text-emerald-400 text-xs uppercase block mb-1">Möglicher Umsatz</span>
                                <span className="text-lg font-bold text-emerald-400 font-mono">{formatCurrency(values.projectedRevenue)}</span>
                            </div>
                        </div>

                        <InteractiveHoverButton className="w-full py-4 text-base font-bold border-electric-cyan/50 hover:border-electric-cyan text-white">
                            Potenzial berechnen
                        </InteractiveHoverButton>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const InputGroup = ({ label, value, onChange, min, max, step, unit }: any) => (
    <div>
        <div className="flex justify-between mb-4">
            <label className="text-white font-medium">{label}</label>
            <span className="text-electric-cyan font-bold bg-electric-cyan/10 px-2 py-1 rounded text-sm min-w-[60px] text-center">
                {value}{unit}
            </span>
        </div>
        <RangeSlider
            value={[value]}
            onValueChange={(val) => onChange(val[0])}
            min={min}
            max={max}
            step={step}
        />
    </div>
);
