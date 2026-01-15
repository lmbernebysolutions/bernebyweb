"use client";

import { ArrowRight } from "lucide-react";
// We might need to implement this or use a library, for now simple text or NumberTicker

// Re-using NumberTicker from Magic UI would be best if available, distinct component otherwise
// Let's assume we can use a simple span or the NumberTicker we installed in Phase 0B
import NumberTicker from "@/components/libraries/magic-ui/number-ticker";

interface MetricProps {
    label: string;
    before: number;
    after: number;
    unit?: string;
    className?: string;
}

export const BeforeAfterMetric = ({ label, before, after, unit = "", className }: MetricProps) => {
    return (
        <div className={`bg-white/5 rounded-hauer p-4 border border-white/10 hover:border-white/20 transition-all ${className}`}>
            <span className="text-gray-400 text-xs uppercase tracking-wider block mb-2">{label}</span>
            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm font-mono strike-through decorations-red-500/50 line-through decoration-2">
                        {before}{unit}
                    </span>
                    <span className="text-[10px] text-gray-600">Vorher</span>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-600" />

                <div className="flex flex-col">
                    <span className="text-electric-cyan font-bold text-xl font-mono">
                        <NumberTicker value={after} />{unit}
                    </span>
                    <span className="text-[10px] text-electric-cyan/70">Nachher</span>
                </div>
            </div>

            {/* Growth Pill */}
            <div className="mt-3 bg-emerald-500/10 border border-emerald-500/20 rounded text-center py-1">
                <span className="text-emerald-400 text-xs font-bold font-mono">
                    +{Math.round(((after - before) / before) * 100)}% Wachstum
                </span>
            </div>
        </div>
    );
};
