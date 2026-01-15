"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import SpotlightCard from "@/components/libraries/magic-ui/spotlight-card";

export interface TestimonialProps {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    avatar: string; // URL or path
}

export const TestimonialCard = ({ quote, author, role, company, rating, avatar }: TestimonialProps) => {
    return (
        <SpotlightCard className="w-[350px] p-6 bg-slate-900/50 border-white/10 flex flex-col justify-between h-full mx-4">
            <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                        />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                    "{quote}"
                </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <Image
                        src={avatar}
                        alt={author}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-sm font-bold">{author}</span>
                    <span className="text-gray-500 text-xs">{role}, {company}</span>
                </div>
            </div>
        </SpotlightCard>
    );
};
