import { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
    posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 border-b border-slate-200 pb-4">
                    Latest articles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
