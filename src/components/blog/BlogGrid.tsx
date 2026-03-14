import { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
    posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
    return (
        <section className="pt-32 pb-24 bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="mb-12 border-b border-slate-200 pb-6">
                    <h2 className="text-4xl font-bold text-slate-900 mb-2">
                        Latest articles
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Discover our most recent posts across cybersecurity, compliance, and TISAX®.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map(post => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
