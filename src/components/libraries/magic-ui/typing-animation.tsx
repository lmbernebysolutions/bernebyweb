"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    children: string;
    className?: string;
    duration?: number;
    delay?: number;
    startOnView?: boolean;
}

export const TypingAnimation = ({
    children,
    className,
    duration = 100,
    delay = 0,
    startOnView = true,
}: TypingAnimationProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!startOnView) {
            setStarted(true);
        }
    }, [startOnView]);

    useEffect(() => {
        if (!started && startOnView) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setStarted(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );

            const element = document.getElementById(`typing-${children.substring(0, 10).replace(/\s/g, "")}`);
            if (element) observer.observe(element);

            return () => observer.disconnect();
        }
    }, [started, startOnView, children]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < children.length) {
                setDisplayedText(children.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [children, duration, started]);

    return (
        <h2
            id={`typing-${children.substring(0, 10).replace(/\s/g, "")}`}
            className={cn(
                "font-display text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
                className,
            )}
        >
            {displayedText}
        </h2>
    );
};
