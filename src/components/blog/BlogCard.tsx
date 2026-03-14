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

    const authorName = post.author?.name || "Hub ITIS Secure";

    return (
        <article className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 h-full">
            <Link href={`/blog/${post.slug}`} className="relative aspect-video w-full overflow-hidden block">
                <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
            </Link>

            <div className="flex flex-col flex-grow p-6 sm:p-8">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category) => (
                        <span
                            key={category.slug}
                            className="text-xs font-bold uppercase tracking-wider text-[#005686]"
                        >
                            {category.title}
                        </span>
                    ))}
                </div>

                {/* Title & Excerpt */}
                <Link href={`/blog/${post.slug}`} className="flex-grow group/text block">
                    <h3 className="text-[1.35rem] font-bold text-slate-900 leading-tight mb-3 group-hover/text-[#005686] transition-colors duration-200 line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                    </p>
                </Link>

                {/* Engagement Row */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <span>{publishDate}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="truncate max-w-[120px]">{authorName}</span>
                    </div>

                    <Link 
                        href={`/blog/${post.slug}`}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#005686] text-[#005686] group-hover:text-white transition-colors duration-300"
                        aria-label="Read article"
                    >
                        <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
