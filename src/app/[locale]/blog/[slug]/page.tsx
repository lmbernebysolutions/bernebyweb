import { BlogArticle } from "@/components/blog/blog-article";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import { BLOG_POSTS } from "@/components/sections/blog-index";
import { notFound } from "next/navigation";

// Mock content generator
const generateMockContent = () => (
    <>
        <p className="lead">
            Es ist ein offenes Geheimnis im Handwerk: Gute Mitarbeiter wachsen nicht auf Bäumen.
            Doch während viele Inhaber noch auf die klassische Zeitungsanzeige setzen, hat sich der Markt längst gedreht.
        </p>

        <h2>Warum die "Wir suchen"-Anzeige tot ist</h2>
        <p>
            Die besten Fachkräfte haben bereits einen Job. Sie suchen nicht aktiv. Wenn du sie erreichen willst,
            musst du dort sein, wo sie ihre Freizeit verbringen: Auf dem Smartphone.
        </p>

        <h3>Die 3 Säulen der digitalen Mitarbeitergewinnung</h3>
        <ul>
            <li><strong>Sichtbarkeit:</strong> Werde als attraktiver Arbeitgeber wahrgenommen, bevor eine Stelle frei wird.</li>
            <li><strong>Einfachheit:</strong> Keine Lebensläufe. Ein Bewerbungsprozess muss in 60 Sekunden am Handy möglich sein.</li>
            <li><strong>Schnelligkeit:</strong> Melde dich innerhalb von 2 Stunden. Geschwindigkeit schlägt Perfektion.</li>
        </ul>

        <blockquote>
            "Wir haben den Bewerbungsprozess radikal vereinfacht. Seitdem erhalten wir 5x mehr qualifizierte Anfragen."
            <cite>— Ein Berneby-Partner aus Aue</cite>
        </blockquote>

        <h2>Fazit: Werde aktiv</h2>
        <p>
            Warten ist keine Strategie. Die Demografie arbeitet gegen uns. Wer jetzt nicht digitale Kanäle aufbaut,
            wird in 5 Jahren massive Probleme haben, seine Aufträge abzuarbeiten.
        </p>
    </>
);

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const postData = BLOG_POSTS.find(p => p.slug === slug);

    if (!postData) {
        notFound();
    }

    // Enhance mock data with full content for the view
    const fullPost = {
        ...postData,
        author: {
            name: "Lennard Meyer",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
            role: "Gründer & Stratege"
        },
        content: generateMockContent()
    };

    return (
        <main className="min-h-screen bg-deep-navy flex flex-col">
            <Navbar />
            <BlogArticle post={fullPost} />
            <Footer />
        </main>
    );
}
