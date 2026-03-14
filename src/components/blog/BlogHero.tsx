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
            {/* Background gradient specifically derived from 3ds.com (121deg, #0870d3, #04315d) */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(121.03deg, #0870d3, #04315d)' }} />
            
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
                        const category = post.categories?.[0]?.title || "COMPANY NEWS";

                        return (
                            <div 
                                key={post._id || index}
                                className={clsx(
                                    "flex flex-col lg:flex-row items-center gap-10 lg:gap-16 transition-opacity duration-1000 ease-in-out w-full",
                                    isActive ? "opacity-100 z-10 relative" : "opacity-0 z-0 absolute inset-0 pointer-events-none delay-100"
                                )}
                            >
                                {/* Left Side: Image Content */}
                                <div className="w-full lg:w-[55%] relative flex items-center justify-center lg:justify-start">
                                    <Link 
                                        href={`/blog/${post.slug}`} 
                                        className="block relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] w-full rounded-[1.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
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

                                {/* Right Side: Text Content */}
                                <div className="w-full lg:w-[45%] flex flex-col items-start gap-4 lg:gap-6 justify-center text-left py-4 lg:py-0">
                                    {/* Metadata Row */}
                                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                                        <span className="text-white uppercase tracking-wider font-bold text-[10px] lg:text-xs bg-white/10 px-2 py-0.5 rounded-sm">
                                            {category}
                                        </span>
                                        <span className="text-white text-xs lg:text-sm">{publishDate}</span>
                                        {authorName && (
                                            <>
                                                <span className="text-white text-xs">·</span>
                                                <span className="text-white text-xs lg:text-sm">{authorName}</span>
                                            </>
                                        )}
                                    </div>

                                    <Link href={`/blog/${post.slug}`} className="group space-y-4 lg:space-y-5 block w-full">
                                        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] text-white group-hover:text-blue-200 transition-colors duration-300 pr-4">
                                            {post.title}
                                        </h1>
                                        <p className="text-base md:text-lg text-white/90 leading-relaxed font-light pr-8">
                                            {post.excerpt}
                                        </p>
                                    </Link>

                                    {/* Action Row & Pagination */}
                                    <div className="flex items-center w-full mt-6 justify-between pr-4">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center justify-center w-auto px-[22px] py-[7.5px] bg-[#0870d3] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300 group/btn gap-2 text-[15px]"
                                            aria-label="Read article"
                                        >
                                            <span>Read article</span>
                                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                                        </Link>

                                        {/* Pagination Dots (Far Right) */}
                                        <div className="flex items-center gap-2">
                                            {posts.map((_, dotIndex) => (
                                                <button
                                                    key={`dot-${dotIndex}`}
                                                    onClick={() => setCurrentIndex(dotIndex)}
                                                    className="relative flex items-center justify-center w-6 h-6 focus:outline-none group"
                                                    aria-label={`Go to slide ${dotIndex + 1}`}
                                                >
                                                    {dotIndex === currentIndex ? (
                                                        // Active dot with outline ring
                                                        <>
                                                            <span className="absolute w-[22px] h-[22px] rounded-full border-[1.5px] border-white"></span>
                                                            <span className="w-[6px] h-[6px] rounded-full bg-white z-10"></span>
                                                        </>
                                                    ) : (
                                                        // Inactive dot
                                                        <span className="w-[6px] h-[6px] rounded-full bg-white/40 group-hover:bg-white/80 transition-colors"></span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );;
                    })}
                </div>
            </div>
        </section>
    );
}
