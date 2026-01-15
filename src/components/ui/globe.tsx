"use client"
import { useEffect, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400
const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1, // Set to dark for the deep-navy theme
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [0.01, 0.14, 0.2], // Branded base color
    markerColor: [0.01, 0.98, 0.97], // electric-cyan [1/255, 250/255, 249/255]
    glowColor: [0.01, 0.98, 0.97],
    markers: [
        { location: [50.584, 12.864], size: 0.05 }, // Erzgebirge regions
        { location: [50.833, 12.917], size: 0.08 },
        { location: [51.050, 13.737], size: 0.05 },
        { location: [51.339, 12.373], size: 0.07 },
        { location: [48.135, 11.582], size: 0.08 },
        { location: [52.520, 13.404], size: 0.1 },
    ],
}

export function Globe({
    className,
    config = GLOBE_CONFIG,
}: {
    className?: string
    config?: COBEOptions
}) {
    let phi = 0
    let width = 0
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerInteracting = useRef<number | null>(null)
    const pointerInteractionMovement = useRef(0)
    const r = useMotionValue(0)
    const rs = useSpring(r, {
        mass: 1,
        damping: 30,
        stiffness: 100,
    })

    const updatePointerInteraction = (value: number | null) => {
        pointerInteracting.current = value
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
        }
    }

    const updateMovement = (clientX: number) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            r.set(r.get() + delta / MOVEMENT_DAMPING)
        }
    }

    useEffect(() => {
        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth
            }
        }
        window.addEventListener("resize", onResize)
        onResize()
        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender: (state) => {
                if (!pointerInteracting.current) phi += 0.005
                state.phi = phi + rs.get()
                state.width = width * 2
                state.height = width * 2
            },
        })
        setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
        return () => {
            globe.destroy()
            window.removeEventListener("resize", onResize)
        }
    }, [rs, config])

    return (
        <div
            className={cn(
                "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
                className
            )}
        >
            <canvas
                className={cn(
                    "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
                )}
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX
                    updatePointerInteraction(e.clientX)
                }}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    )
}
