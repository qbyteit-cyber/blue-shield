import Link from "next/link";
import { BlogPost } from "@/types/blog";
import Image from "next/image";

interface BlogHeroProps {
    post: BlogPost;
}

export function BlogHero({ post }: BlogHeroProps) {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#00385f] to-[#005686] text-white pt-32 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 relative">
                        <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt || post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {post.categories.map((category) => (
                                <span
                                    key={category.slug}
                                    className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#90cdf4]"
                                >
                                    {category.title}
                                </span>
                            ))}
                        </div>

                        <Link href={`/blog/${post.slug}`} className="group space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight group-hover:text-amber-400 transition-colors duration-300">
                                {post.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 line-clamp-3 leading-relaxed max-w-2xl">
                                {post.excerpt}
                            </p>
                        </Link>

                        <Link
                            href={`/blog/${post.slug}`}
                            className="mt-4 px-8 py-4 bg-white text-[#005686] font-bold rounded-full hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300 shadow-lg"
                        >
                            Read article
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
