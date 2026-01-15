"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/libraries/magic-ui/spotlight-card";

// Mock Data
export const BLOG_POSTS = [
    {
        slug: "fachkraefte-mangel-erzgebirge",
        title: "Warum 'Wir suchen Verstärkung' nicht mehr funktioniert",
        excerpt: "Der Fachkräftemangel im Erzgebirge ist real. Doch während alle jammern, füllen innovative Handwerksbetriebe ihre Auftragsbücher. Hier ist ihre Strategie.",
        image: "https://images.unsplash.com/photo-1581094794329-cd1361d0bf36?q=80&w=2070&auto=format&fit=crop",
        category: "Personal",
        date: "12. Jan 2026",
        readTime: "5 min"
    },
    {
        slug: "sichtbarkeit-handwerk",
        title: "Unsichtbar im Netz = Unsichtbar für den Kunden",
        excerpt: "92% der Hausbesitzer suchen online nach Handwerkern. Wer dort nicht stattfindet, überlässt das Feld kampflos der Konkurrenz.",
        image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop",
        category: "Marketing",
        date: "08. Jan 2026",
        readTime: "4 min"
    },
    {
        slug: "digitalisierung-ohne-stress",
        title: "Digitalisierung ohne Kopfschmerzen: Ein Leitfaden",
        excerpt: "Keine Angst vor Tablets auf der Baustelle. Wie du mit einfachen Tools 5-10 Stunden Büroarbeit pro Woche sparst.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        category: "Prozesse",
        date: "03. Jan 2026",
        readTime: "7 min"
    }
];

export const BlogIndex = () => {
    return (
        <div className="bg-deep-navy min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-electric-cyan font-bold uppercase tracking-widest text-sm mb-4 block">
                        Berneby Magazin
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Wissen für <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">Macher</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Strategien, Trends und Tacheles für das moderne Handwerk im Erzgebirge.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, i) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <SpotlightCard className="h-full bg-slate-900/50 border-white/10 overflow-hidden flex flex-col group p-0">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-deep-navy/80 backdrop-blur text-white text-xs font-bold rounded uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime} Lesezeit</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-electric-cyan font-bold text-sm">
                                        Artikel lesen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};
