"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NavigationItem } from "@/types";
import { X } from "lucide-react";
import ShimmerButton from "@/components/libraries/magic-ui/shimmer-button";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    items: NavigationItem[];
}

export const MobileMenu = ({ isOpen, onClose, items }: MobileMenuProps) => {
    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    const itemVariants = {
        closed: { x: 20, opacity: 0 },
        open: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-deep-navy border-l border-white/10 z-50 p-6 shadow-2xl lg:hidden flex flex-col"
                    >
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={onClose}
                                className="p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="flex-1 flex flex-col gap-6">
                            {items.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    custom={i}
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className="text-2xl font-medium text-white hover:text-electric-cyan transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto"
                        >
                            <Link href="/contact" onClick={onClose}>
                                <ShimmerButton className="w-full">
                                    Kostenlose Analyse
                                </ShimmerButton>
                            </Link>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
