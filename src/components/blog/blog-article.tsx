"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPostProps {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    content: React.ReactNode;
}

export const BlogArticle = ({ post }: { post: BlogPostProps }) => {
    return (
        <article className="min-h-screen bg-deep-navy pb-24">
            {/* Header Image */}
            <div className="relative w-full h-[60vh] min-h-[400px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/50 to-transparent" />

                <div className="absolute top-0 left-0 w-full p-6">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-electric-cyan transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                    >
                        <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-wrap items-center gap-4 mb-6 text-sm md:text-base"
                        >
                            <span className="px-3 py-1 bg-electric-cyan text-deep-navy font-bold rounded uppercase tracking-wider text-xs">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Clock className="w-4 h-4" /> {post.readTime}
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="text-white font-bold">{post.author.name}</div>
                                <div className="text-electric-cyan text-sm">{post.author.role}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="container mx-auto px-4 md:px-6 mt-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Main Content */}
                    <div className="w-full lg:w-3/4 prose prose-invert prose-lg max-w-none 
                        prose-headings:text-white prose-p:text-gray-300 prose-strong:text-electric-cyan
                        prose-a:text-electric-cyan prose-li:text-gray-300">
                        {post.content}
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4 space-y-8">
                        {/* Share */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Share2 className="w-4 h-4" /> Teilen
                            </h3>
                            <div className="flex gap-2">
                                {['LinkedIn', 'Facebook', 'Twitter', 'Mail'].map(platform => (
                                    <button key={platform} className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-gray-300 transition-colors">
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-electric-cyan/10 to-blue-500/10 border border-electric-cyan/20">
                            <h3 className="text-white font-bold mb-2">Keine Lust zu lesen?</h3>
                            <p className="text-sm text-gray-400 mb-4">Lass uns direkt darüber sprechen, wie wir das für dich umsetzen.</p>
                            <Link href="/contact" className="block w-full py-3 bg-electric-cyan text-deep-navy font-bold text-center rounded-lg hover:bg-electric-cyan/90 transition-colors">
                                Termin vereinbaren
                            </Link>
                        </div>
                    </aside>

                </div>
            </div>
        </article>
    );
};
