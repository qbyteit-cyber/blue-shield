import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { ChevronRight } from "lucide-react";

interface ExploreTopicsProps {
    certificationsPosts: BlogPost[];
}

export function ExploreTopics({ certificationsPosts }: ExploreTopicsProps) {
    if (!certificationsPosts || certificationsPosts.length === 0) return null;

    // Use up to 3 posts for the grid
    const featuredPosts = certificationsPosts.slice(0, 3);

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-[34px] font-bold text-slate-900 mb-4">
                        Explore our topics
                    </h2>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                        Discover stories on key trends that are transforming the business and regulatory landscape.
                    </p>
                </div>

                {/* Featured Category Block */}
                <div className="bg-[#f8f9fa] rounded-2xl p-6 md:p-10 lg:p-12 mb-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        
                        {/* Topic Information (Left Side) - ~1/3 width */}
                        <div className="lg:w-1/3 flex flex-col pt-2 lg:pt-4">
                            <h3 className="text-2xl md:text-[28px] font-semibold text-[#3b4c68] mb-4">
                                Certifications
                            </h3>
                            <p className="text-[#64748b] text-[15px] leading-relaxed mb-auto">
                                Keep up with the latest compliance frameworks, automotive requirements, and enterprise IT security assessments.
                            </p>
                            
                            <div className="mt-8">
                                <Link 
                                    href="/blog?category=certifications" 
                                    className="inline-flex items-center gap-2 text-[#0077c5] hover:text-[#005686] font-semibold text-[15px] group transition-colors"
                                >
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-current group-hover:scale-110 transition-transform">
                                        <ChevronRight className="w-4 h-4" />
                                    </span>
                                    See all articles
                                </Link>
                            </div>
                        </div>

                        {/* Article Cards (Right Side) - ~2/3 width */}
                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featuredPosts.map((post) => (
                                    <article 
                                        key={post._id} 
                                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                                    >
                                        <Link href={`/blog/${post.slug}`} className="flex flex-col h-full hover:no-underline">
                                            {/* Image container */}
                                            {post.mainImage && (
                                                <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0 bg-slate-100">
                                                    <Image
                                                        src={post.mainImage.asset.url}
                                                        alt={post.mainImage.alt || post.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            
                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h4 className="text-[17px] font-bold leading-tight text-[#1e293b] mb-3 group-hover:text-[#0870d3] transition-colors line-clamp-3">
                                                    {post.title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')}
                                                </h4>
                                                <p className="text-[#64748b] text-[14px] leading-relaxed line-clamp-3 mb-0 flex-grow">
                                                    {post.excerpt.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')}
                                                </p>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
}
