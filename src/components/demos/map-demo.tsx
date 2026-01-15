"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
    { x: "20%", y: "30%" },
    { x: "50%", y: "50%" },
    { x: "80%", y: "20%" },
    { x: "30%", y: "70%" },
    { x: "70%", y: "80%" },
];

export const MapDemo = () => {
    return (
        <div className="w-full h-full min-h-[140px] bg-slate-900 rounded-lg relative overflow-hidden border border-white/5 group">
            {/* Map Background Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: "radial-gradient(#334155 1px, transparent 1px)", backgroundSize: "16px 16px" }}
            />

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 bg-electric-cyan rounded-full animate-pulse shadow-[0_0_20px_rgba(1,250,249,0.5)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-electric-cyan/30 rounded-full animate-ping-slow" />
            </div>

            {/* Satellite Locations */}
            {locations.map((loc, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: loc.x, top: loc.y }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                    <MapPin className="w-4 h-4 text-purple-400 fill-purple-400/20" />
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-full h-px bg-purple-400/30 origin-left"
                        style={{ width: "100px", transform: "rotate(45deg)" }} // Simplified connector for demo
                    />
                </motion.div>
            ))}

            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-electric-cyan border border-electric-cyan/20">
                GEO-NET ACTIVE
            </div>
        </div>
    );
};
