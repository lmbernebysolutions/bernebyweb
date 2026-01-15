"use client";

import { AuroraBackground } from "@/components/libraries/aceternity/aurora-background";
import { HeroContent } from "./hero-content";
import { HeroFeatureSwitcher } from "./hero-feature-switcher";


export const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen">
            <AuroraBackground className="min-h-screen h-full">
                <div className="container mx-auto px-8 md:px-16 flex flex-col items-center justify-center py-20 relative z-20">
                    <div className="w-full flex justify-center mb-12">
                        <HeroContent />
                    </div>
                    <div className="w-full max-w-5xl mx-auto">
                        <HeroFeatureSwitcher />
                    </div>
                </div>
            </AuroraBackground>
        </section>
    );
};
