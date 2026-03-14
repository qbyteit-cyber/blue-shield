import { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
    posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
    // Split posts into 4 columns for the staggered masonry effect
    const columns: BlogPost[][] = [[], [], [], []];
    posts.forEach((post, index) => {
        columns[index % 4].push(post);
    });

    return (
        <section className="pt-32 pb-24 bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="mb-16 border-b border-slate-200 pb-6">
                    <h2 className="text-[34px] font-bold text-slate-900 mb-2">
                        Latest articles
                    </h2>
                    <p className="text-slate-600 text-[15px]">
                        Discover our most recent posts across all industries, brands and topics.
                    </p>
                </div>

                {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    {/* Column 1: Pushed down significantly */}
                    <div className="flex flex-col gap-8 lg:mt-24">
                        {columns[0].map(post => <BlogCard key={post._id} post={post} />)}
                    </div>
                    
                    {/* Column 2: Pushed down even more */}
                    <div className="flex flex-col gap-8 lg:mt-40">
                        {columns[1].map(post => <BlogCard key={post._id} post={post} />)}
                    </div>
                    
                    {/* Column 3: Highest point (no margin top) */}
                    <div className="flex flex-col gap-8 lg:mt-0">
                        {columns[2].map(post => <BlogCard key={post._id} post={post} />)}
                    </div>
                    
                    {/* Column 4: Slightly pushed down */}
                    <div className="flex flex-col gap-8 lg:mt-12">
                        {columns[3].map(post => <BlogCard key={post._id} post={post} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
