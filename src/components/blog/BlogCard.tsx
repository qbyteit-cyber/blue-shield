import Link from "next/link";
import { BlogPost } from "@/types/blog";
import Image from "next/image";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full">
            <Link href={`/blog/${post.slug}`} className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
            </Link>

            <div className="flex flex-col flex-grow p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category) => (
                        <span
                            key={category.slug}
                            className="text-xs font-bold uppercase tracking-wider text-[#005686]"
                        >
                            {category.title}
                        </span>
                    ))}
                </div>

                <Link href={`/blog/${post.slug}`} className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-[#005686] transition-colors duration-200">
                        {post.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-3 mb-6">
                        {post.excerpt}
                    </p>
                </Link>

                {/* Optional: Add Date or Read Time here if desired later */}
            </div>
        </article>
    );
}
