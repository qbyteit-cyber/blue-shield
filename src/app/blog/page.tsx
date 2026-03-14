import { getLatestPosts } from "@/lib/sanity/queries";
import HeroCarousel from "@/components/blog/HeroCarousel";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { ExploreTopics } from "@/components/blog/ExploreTopics";
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
    const heroPostIds = new Set(posts.slice(0, 3).map(p => p._id));

    // Find up to 3 posts for the "Certifications" topic block, ensuring no overlap with Hero
    const certificationsPosts = posts
        .filter(post => !heroPostIds.has(post._id))
        .filter(post => 
            post.categories?.some(c => ['tisax', 'compliance', 'iso-27001'].includes(c.slug))
        )
        .slice(0, 3);
        
    const certPostIds = new Set(certificationsPosts.map(p => p._id));

    // The rest goes to the grid
    const gridPosts = posts.filter(p => !heroPostIds.has(p._id) && !certPostIds.has(p._id));

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <HeroCarousel slides={heroPosts} />
                <ExploreTopics certificationsPosts={certificationsPosts} />
                <BlogGrid posts={gridPosts} />
            </main>
            <Footer />
        </>
    );
}
