"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { ChevronRight } from "lucide-react";
import { clsx } from "clsx";

interface BlogHeroProps {
    posts: BlogPost[];
}

export function BlogHero({ posts }: BlogHeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!posts || posts.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [posts]);

    if (!posts || posts.length === 0) return null;

    return (
        <section className="relative w-full overflow-hidden bg-[#001f3f] text-white">
            {/* Background gradient to match the dark blue aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001024] via-[#002244] to-[#013565] pointer-events-none" />
            
            {/* Decorative abstract curved lines (SVG) on the right */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40 mix-blend-screen flex justify-end">
                <svg viewBox="0 0 1000 800" className="h-full w-auto object-cover transform translate-x-1/4 scale-150" xmlns="http://www.w3.org/2000/svg">
                    <path d="M400,800 C600,600 800,400 1000,500" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                    <path d="M350,800 C580,550 820,380 1000,480" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                    <path d="M300,800 C550,500 850,350 1000,450" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none" />
                    <path d="M500,800 C650,650 800,550 1000,600" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
                    <path d="M250,800 C500,450 900,300 1000,400" stroke="rgba(255,255,255,0.03)" strokeWidth="2" fill="none" />
                    <path d="M200,800 C450,400 950,250 1000,350" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
                    <path d="M150,800 C400,350 1000,200 1000,300" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
                    <path d="M100,800 C350,300 1000,150 1000,250" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full py-24 lg:py-32 xl:py-40 flex items-center min-h-[70vh]">
                
                {/* The Slides wrapper */}
                <div className="relative w-full">
                    {posts.map((post, index) => {
                        const isActive = index === currentIndex;
                        
                        // Format Date
                        const publishDate = new Date(post.publishedAt || new Date()).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        });
                        
                        // Author Name
                        const authorName = post.author?.name || "Iulian";
                        
                        // Category
                        const category = post.categories?.[0]?.title || "Article";

                        return (
                            <div 
                                key={post._id || index}
                                className={clsx(
                                    "flex flex-col lg:flex-row items-center gap-12 lg:gap-16 transition-opacity duration-1000 ease-in-out w-full",
                                    isActive ? "opacity-100 z-10 relative" : "opacity-0 z-0 absolute inset-0 pointer-events-none delay-100"
                                )}
                            >
                                {/* Image Column */}
                                <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-start">
                                    <Link 
                                        href={`/blog/${post.slug}`} 
                                        className="block relative aspect-[4/3] sm:aspect-[16/10] w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] border border-white/10"
                                    >
                                        <Image
                                            src={post.mainImage?.asset?.url || "/placeholder.jpg"}
                                            alt={post.mainImage?.alt || post.title}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </Link>
                                </div>

                                {/* Text Column */}
                                <div className="w-full lg:w-1/2 flex flex-col items-start gap-5 lg:gap-6 justify-center">
                                    {/* Metadata Row */}
                                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                                        <span className="text-white uppercase tracking-wider font-bold text-[11px] lg:text-xs">{category}</span>
                                        <span className="text-white/70 text-xs lg:text-sm">{publishDate}</span>
                                        {authorName && (
                                            <span className="text-white/70 text-xs lg:text-sm ml-1">{authorName}</span>
                                        )}
                                    </div>

                                    <Link href={`/blog/${post.slug}`} className="group space-y-3 lg:space-y-4">
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight group-hover:text-blue-200 transition-colors duration-300">
                                            {post.title}
                                        </h1>
                                        <p className="text-base md:text-lg text-blue-100/80 line-clamp-3 leading-relaxed max-w-2xl font-light">
                                            {post.excerpt}
                                        </p>
                                    </Link>

                                    {/* Action Row */}
                                    <div className="flex items-center w-full mt-4 justify-between max-w-md">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0070f3] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/20 text-sm whitespace-nowrap"
                                        >
                                            <ChevronRight className="w-4 h-4" strokeWidth={3} />
                                            Read article
                                        </Link>

                                        {/* Pagination Dots */}
                                        <div className="flex items-center gap-4 pl-8">
                                            {posts.map((_, dotIndex) => (
                                                <button
                                                    key={`dot-${dotIndex}`}
                                                    onClick={() => setCurrentIndex(dotIndex)}
                                                    className="relative flex items-center justify-center w-4 h-4 focus:outline-none group"
                                                    aria-label={`Go to slide ${dotIndex + 1}`}
                                                >
                                                    {dotIndex === currentIndex ? (
                                                        // Active dot with outline
                                                        <>
                                                            <span className="absolute w-6 h-6 rounded-full border-[1.5px] border-white"></span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-white z-10"></span>
                                                        </>
                                                    ) : (
                                                        // Inactive dot
                                                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors"></span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
