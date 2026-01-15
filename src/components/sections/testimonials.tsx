"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/libraries/magic-ui/marquee";
import { fadeInUp } from "@/lib/animation-utils";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Bauer",
        username: "Bauer Bedachungen",
        body: "Die Anfragen-Qualität hat sich massiv verbessert. Wir fahren nur noch zu Terminen, die sich wirklich lohnen.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Klein",
        username: "Klein Fensterbau",
        body: "Endlich werden wir auch in den Nachbarorten gefunden. Das Geo-Net System ist jeden Cent wert.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Weber",
        username: "Weber Elektro",
        body: "Der Voice-Guard nimmt uns so viel Arbeit ab. Keine verpassten Anrufe mehr, auch wenn wir auf der Baustelle sind.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Meyer",
        username: "Holzbau Meyer",
        body: "Professionell, schnell und vor allem: Es funktioniert. Unser Umsatz ist seit dem Relaunch um 30% gestiegen.",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Holzbau",
        username: "Zimmerei Holzbau",
        body: "Wir haben lange gesucht, aber erst bei Berneby haben wir uns wirklich verstanden gefühlt. Top Service!",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    },
    {
        name: "Schmidt",
        username: "Schmidt SHK",
        body: "Das Review-System läuft von alleine. Wir haben in 2 Monaten mehr 5-Sterne Bewertungen bekommen als in 5 Jahren davor.",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
                "relative h-full w-80 cursor-pointer overflow-hidden rounded-hauer border border-white/10 p-6 mx-4 hover:border-white/20 transition-all",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-white/[.1] dark:bg-white/[.05] dark:hover:bg-white/[.1]"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <img className="rounded-full object-cover" width="40" height="40" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-base font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-4 text-sm text-gray-300 leading-relaxed max-w-xs">{body}</blockquote>
        </figure>
    );
};

export const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16 text-center">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <span className="text-electric-cyan font-medium tracking-widest uppercase text-sm mb-4 block border border-electric-cyan/20 rounded-hauer px-3 py-1 inline-block bg-electric-cyan/10">
                        Stimmen aus dem Handwerk
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Vertrauen ist <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">unsere Währung</span>
                    </h2>
                </motion.div>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s] mt-8">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-deep-navy/80 to-transparent z-20"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-deep-navy/80 to-transparent z-20"></div>
            </div>
        </section>
    );
};
