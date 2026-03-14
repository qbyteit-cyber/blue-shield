import Link from "next/link";
import { BlogPost } from "@/types/blog";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    // Format Date
    const publishDate = new Date(post.publishedAt || new Date()).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    const categoryName = post.categories?.[0]?.title || "Article";

    return (
        <article className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-full">
            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                {/* Image (if present) */}
                {post.mainImage && (
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 shrink-0">
                        <Image
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt || post.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                        />
                    </div>
                )}

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-6">
                    {/* Category tags */}
                    <div className="mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#0870d3] transition-colors">
                            {categoryName}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-semibold text-slate-900 mb-3 leading-[1.3] group-hover:text-[#0870d3] transition-colors line-clamp-3">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                    </p>
                    
                    {/* Optional: Add date at the bottom if needed to fill space, or leave empty as 3ds does for most masonry cards */}
                    <div className="mt-auto pt-2">
                        <span className="text-[13px] text-slate-400 font-medium">{publishDate}</span>
                    </div>
                </div>
            </Link>
        </article>
    );
}
