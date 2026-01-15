"use client";

import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

// Dynamically import the map client with no SSR
const GeoMapClient = dynamic(() => import('./geo-map-client'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-900 animate-pulse rounded-xl flex items-center justify-center text-gray-500">Lade Karte...</div>
});

export const GeoCoverageMap = ({ className }: { className?: string }) => {
    return (
        <div className={cn("w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 relative z-0", className)}>
            <GeoMapClient />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-deep-navy via-transparent to-transparent z-[400]" />
        </div>
    );
};
