import { getLatestPosts } from "@/lib/sanity/queries";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Metadata } from "next";

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

    const heroPosts = posts.slice(0, 3);
    const gridPosts = posts.slice(3);

    return (
        <main className="min-h-screen bg-white">
            <BlogHero posts={heroPosts} />
            {/* Could insert a Category Ribbon here in the future */}
            <BlogGrid posts={gridPosts} />
        </main>
    );
}
