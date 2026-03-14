import { getLatestPosts } from "@/lib/sanity/queries";
import HeroCarousel from "@/components/blog/HeroCarousel";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Metadata } from "next";
import { toHeroSlide } from "@/lib/blog/adapters";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
    title: "Blog & Insights",
    description: "Latest insights, news, and guides on Cybersecurity, Compliance, TISAX, and ISO 27001.",
};

export default async function BlogLandingPage() {
    const posts = await getLatestPosts();

    if (!posts || posts.length === 0) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-xl text-slate-500">No posts found.</p>
            </div>
        );
    }

    const heroPosts = posts.slice(0, 3).map(toHeroSlide);
    const gridPosts = posts.slice(3);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <HeroCarousel slides={heroPosts} />
                {/* Could insert a Category Ribbon here in the future */}
                <BlogGrid posts={gridPosts} />
            </main>
            <Footer />
        </>
    );
}
