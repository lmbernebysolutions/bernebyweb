"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string | React.ReactNode;
        content?: React.ReactNode | any;
        headerComponent?: React.ReactNode;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--deep-navy)",
        "var(--deep-navy)",
        "var(--deep-navy)",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    return (
        <div className="container mx-auto px-8 md:px-16">
            <motion.div
                animate={{
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="flex justify-center relative space-x-0 rounded-md py-10"
                ref={ref}
            >
                {/* Sticky Image Section (Left 60%) */}
                <motion.div
                    animate={{
                        background: linearGradients[activeCard % linearGradients.length],
                    }}
                    className={cn(
                        "hidden lg:block h-[30rem] w-[55%] rounded-md bg-white sticky top-40 overflow-hidden self-start",
                        contentClassName
                    )}
                >
                    {content[activeCard].content ?? null}
                </motion.div>

                {/* Scrollable Content Section (Right 40%) */}
                <div className="relative flex items-start px-4 w-full lg:w-[45%]">
                    <div className="max-w-full lg:pl-12">
                        {content.map((item, index) => (
                            <div key={item.title + index} className="my-20 min-h-[60vh] flex flex-col justify-center snap-center">
                                {/* Render item.title component directly if it's a React element (TypingAnimation), else use standard h2 */}
                                <div className="mb-6">
                                    {item.headerComponent || (
                                        <motion.h2
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                            className="text-2xl font-bold text-slate-100"
                                        >
                                            {item.title}
                                        </motion.h2>
                                    )}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                    className="text-lg text-slate-300 max-w-sm mt-4 leading-relaxed"
                                >
                                    {item.description}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
