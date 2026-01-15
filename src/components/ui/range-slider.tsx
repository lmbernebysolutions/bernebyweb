"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const RangeSlider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
        )}
        {...props}
    >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-800 border border-white/10">
            <SliderPrimitive.Range className="absolute h-full bg-electric-cyan" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
            className="block h-6 w-6 rounded-full border-2 border-electric-cyan bg-deep-navy ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 cursor-grab active:cursor-grabbing shadow-[0_0_10px_rgba(1,250,249,0.5)]"
        />
    </SliderPrimitive.Root>
));
RangeSlider.displayName = SliderPrimitive.Root.displayName;

export { RangeSlider };
