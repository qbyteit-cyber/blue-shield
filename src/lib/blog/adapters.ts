import { BlogPost } from '@/types/blog';
import { HeroSlide } from '@/components/blog/HeroCarousel';

/**
 * Maps a Sanity/Mock BlogPost to exactly match the generic HeroSlide interface
 * required by the HeroCarousel component.
 */
export function toHeroSlide(post: BlogPost): HeroSlide {
  return {
    id: post._id || post.slug,
    category: post.categories?.[0]?.title || 'Article',
    date: new Date(post.publishedAt || new Date()).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    author: post.author?.name || 'Iulian',
    title: post.title,
    excerpt: post.excerpt || '',
    href: `/blog/${post.slug}`,
    image: {
      src: post.mainImage?.asset?.url || '',
      alt: post.mainImage?.alt || post.title,
    }
  };
}
