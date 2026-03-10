import { getPostBySlug } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    // Format the date nicely
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'long',
    }).format(new Date(post.publishedAt));

    return (
        <main className="min-h-screen bg-white pt-24 pb-20">
            <article className="container mx-auto px-4 lg:px-8 max-w-4xl">

                {/* Breadcrumb / Back Link */}
                <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-[#005686] hover:text-amber-500 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {post.categories.map((category) => (
                        <span
                            key={category.slug}
                            className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase tracking-wider text-[#005686]"
                        >
                            {category.title}
                        </span>
                    ))}
                </div>

                {/* Title & Meta */}
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-8">
                    {post.author.image && (
                        <Image
                            src={post.author.image.asset.url}
                            alt={post.author.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                        />
                    )}
                    <div>
                        <div className="font-bold text-slate-900">{post.author.name}</div>
                        <div className="text-sm text-slate-500">
                            {formattedDate} • {post.readTimeMinutes} min read
                        </div>
                    </div>
                </div>

                {/* Main Image */}
                <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Body */}
                <div className="max-w-3xl mx-auto">
                    <PortableTextRenderer blocks={post.body} />
                </div>

            </article>
        </main>
    );
}
