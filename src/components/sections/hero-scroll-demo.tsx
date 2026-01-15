"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden bg-deep-navy">
            <ContainerScroll
                titleComponent={
                    <div className="flex flex-col items-center">
                        <span className="text-electric-cyan font-medium tracking-widest uppercase text-sm mb-4">
                            Deine Digitale Werkstatt
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Alle Werkzeuge für <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">
                                dein digitales Wachstum
                            </span>
                        </h2>
                    </div>
                }
            >
                <Image
                    src="/images/assets/display-visual.png"
                    alt="Berneby Solutions Prozess Visualisierung"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-center"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}