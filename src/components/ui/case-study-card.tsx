"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BeforeAfterMetric } from "@/components/ui/before-after-metric";
import { Quote } from "lucide-react";

export interface CaseStudyProps {
    client: string;
    industry: string;
    description: string;
    quote: string;
    author: string;
    image: string;
    metrics: {
        label: string;
        before: number;
        after: number;
        unit: string;
    }[];
}

export const CaseStudyCard = ({ study }: { study: CaseStudyProps }) => {
    return (
        <motion.div
            className="bg-slate-900 border border-white/10 rounded-hauer overflow-hidden hover:border-white/20 hover:shadow-[0_0_20px_rgba(1,250,249,0.2)] transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col lg:flex-row">

                {/* Image Section */}
                <div className="w-full lg:w-2/5 relative h-64 lg:h-auto min-h-[300px]">
                    <Image
                        src={study.image}
                        alt={`${study.client} Case Study`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-deep-navy/40 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-4 left-4">
                        <span className="bg-electric-cyan text-deep-navy font-bold text-xs uppercase px-3 py-1 rounded-full">
                            {study.industry}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{study.client}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            {study.description}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {study.metrics.map((m, i) => (
                                <BeforeAfterMetric key={i} {...m} />
                            ))}
                        </div>

                        {/* Quote */}
                        <div className="bg-white/5 p-4 rounded-hauer border-l-2 border-electric-cyan/40 mb-6 relative">
                            <Quote className="absolute top-2 right-2 w-4 h-4 text-gray-600" />
                            <p className="text-gray-300 italic text-sm mb-2">"{study.quote}"</p>
                            <p className="text-gray-500 text-xs font-bold">- {study.author}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-electric-cyan text-sm font-bold cursor-pointer hover:underline underline-offset-4">
                            Ganze Story lesen
                        </span>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};
