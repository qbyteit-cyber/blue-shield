import { getPostBySlug } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(post.publishedAt));

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#f8f9fa] font-sans">
                {/* 1. Hero Banner Wrapper */}
                <div className="bg-[#005686] text-white pt-24 pb-16 lg:pt-32 lg:pb-24">
                    <div className="container mx-auto px-4 lg:px-8 max-w-[1280px]">
                        {/* Breadcrumbs */}
                        <nav className="mb-8 text-sm font-medium tracking-wide">
                            <ol className="flex flex-wrap items-center gap-2 text-slate-300">
                                <li><Link href="/blog" className="hover:text-white transition-colors">ITIS-Secure Blog</Link></li>
                                <li><span aria-hidden="true">&gt;</span></li>
                                {post.categories?.[0] && (
                                    <>
                                        <li><span className="text-white font-semibold">{post.categories[0].title}</span></li>
                                        <li><span aria-hidden="true">&gt;</span></li>
                                    </>
                                )}
                                <li className="line-clamp-1">{post.title}</li>
                            </ol>
                        </nav>

                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            {/* Hero Image (Left Column) */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden shadow-2xl">
                                    <Image
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt || post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Hero Info (Right Column) */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                {post.categories?.[0] && (
                                    <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-wider">
                                        <span className="bg-white/10 px-3 py-1 rounded">{post.categories[0].title}</span>
                                        <span className="text-slate-300 capitalize font-medium">{formattedDate} · {post.author.name}</span>
                                    </div>
                                )}
                                
                                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                    {post.title}
                                </h1>
                                
                                <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-3">
                                    {post.author.image && (
                                        <Image
                                            src={post.author.image.asset.url}
                                            alt={post.author.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover border border-white/20"
                                        />
                                    )}
                                    <span className="font-semibold">{post.author.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Main Content Wrapper */}
                <div className="container mx-auto px-4 lg:px-8 max-w-[1280px] py-16">
                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 relative items-start">
                        
                        {/* 3. Sticky Sidebar (Left Column) */}
                        <aside className="w-full lg:w-1/4 sticky top-32 flex-shrink-0 order-2 lg:order-1 hidden md:block">
                            <div className="bg-[#f8f9fa] border border-slate-200 rounded-lg p-6 mb-8 text-slate-800 shadow-sm">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-[#005686] mb-6">Table of Contents</h3>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li>
                                        <a href="#" className="flex items-start group hover:text-[#005686]">
                                            <span className="text-[#005686] font-bold mr-2 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                                            Overview and definition
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-start group hover:text-[#005686] text-slate-500">
                                            <span className="text-[#005686] font-bold mr-2 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                                            What is the objective?
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-start group hover:text-[#005686] text-slate-500">
                                            <span className="text-[#005686] font-bold mr-2 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                                            How do we implement it?
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-start group hover:text-[#005686] text-slate-500">
                                            <span className="text-[#005686] font-bold mr-2 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                                            Frequently asked questions
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Social Shares Placeholder */}
                            <div className="flex gap-4 px-6">
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#005686] hover:text-white cursor-pointer transition-colors text-slate-500">
                                    f
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#005686] hover:text-white cursor-pointer transition-colors text-slate-500">
                                    X
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#005686] hover:text-white cursor-pointer transition-colors text-slate-500">
                                    in
                                </div>
                            </div>
                        </aside>

                        {/* 4. Article Text (Right Column) */}
                        <article className="w-full lg:w-3/4 max-w-[800px] order-1 lg:order-2">
                            <PortableTextRenderer blocks={post.body} />
                        </article>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
