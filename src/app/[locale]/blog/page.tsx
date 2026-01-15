import { BlogIndex } from "@/components/sections/blog-index";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-deep-navy flex flex-col">
            <Navbar />
            <BlogIndex />
            <Footer />
        </main>
    );
}
