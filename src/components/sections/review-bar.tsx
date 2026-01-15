"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Bauer",
        username: "Bauer Bedachungen",
        body: "Die Anfragen-Qualität hat sich massiv verbessert.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Klein",
        username: "Klein Fensterbau",
        body: "Endlich werden wir auch in den Nachbarorten gefunden.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Weber",
        username: "Weber Elektro",
        body: "Keine verpassten Anrufe mehr dank Voice-Guard.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Meyer",
        username: "Holzbau Meyer",
        body: "Umsatz ist seit dem Relaunch um 30% gestiegen.",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Holzbau",
        username: "Zimmerei Holzbau",
        body: "Top Service! Wir fühlen uns verstanden.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Schmidt",
        username: "Schmidt SHK",
        body: "Mehr 5-Sterne Bewertungen als in 5 Jahren davor.",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop",
    },
];


const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-white/[.1] dark:bg-white/[.05] dark:hover:bg-white/[.1]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full object-cover" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
        </figure>
    );
};

export const ReviewBar = () => {
    return (
        <section className="py-10 bg-deep-navy border-b border-white/5 relative overflow-hidden">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <div className="flex w-full overflow-hidden mask-linear-gradient">
                    <motion.div
                        className="flex shrink-0 gap-4 pr-4"
                        animate={{ x: ["-100%", "0%"] }}
                        transition={{
                            duration: 120,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...reviews, ...reviews, ...reviews].map((review, i) => (
                            <ReviewCard key={`r1-${i}`} {...review} />
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex shrink-0 gap-4 pr-4"
                        animate={{ x: ["-100%", "0%"] }}
                        transition={{
                            duration: 120,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...reviews, ...reviews, ...reviews].map((review, i) => (
                            <ReviewCard key={`r2-${i}`} {...review} />
                        ))}
                    </motion.div>
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-deep-navy to-transparent z-20"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-deep-navy to-transparent z-20"></div>
            </div>
        </section>
    );
};
