"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
                    isScrolled
                        ? "bg-white/90 dark:bg-deep-navy/90 backdrop-blur-md py-4 shadow-lg border-b border-gray-100 dark:border-white/5"
                        : "bg-transparent py-6"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
                    <Logo scrolled={isScrolled} />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-electric-cyan relative group",
                                    isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"
                                )}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-cyan transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <Link href="/contact">
                                <InteractiveHoverButton className="h-10 text-sm px-6 border-electric-cyan/50 hover:border-electric-cyan text-white">
                                    Analyse starten
                                </InteractiveHoverButton>
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={cn(
                                "lg:hidden p-2 rounded-md transition-colors",
                                isScrolled ? "text-gray-800 dark:text-white" : "text-white"
                            )}
                            aria-label="Menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </motion.header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                items={NAV_LINKS}
            />
        </>
    );
};
