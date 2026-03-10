import { BlogPost, BlogCategory } from "@/types/blog";
import { mockPosts, mockCategories } from "./mock-data";

// REAL QUERIES (unused while we use mock data, but ready for Sanity Studio)
export const blogQueries = {
    allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset->{url},
      alt
    },
    author->{
      name,
      role,
      image { asset->{url} }
    },
    categories[]->{
      title,
      "slug": slug.current
    },
    readTimeMinutes
  }`,

    postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset->{url},
      alt
    },
    body,
    author->{
      name,
      role,
      image { asset->{url} }
    },
    categories[]->{
      title,
      "slug": slug.current
    },
    readTimeMinutes
  }`,

    allCategories: `*[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current,
    description
  }`
};


// MOCK FETCH FUNCTIONS
export async function getLatestPosts(): Promise<BlogPost[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const post = mockPosts.find((p: BlogPost) => p.slug === slug);
    return post || null;
}

export async function getCategories(): Promise<BlogCategory[]> {
    return mockCategories;
}
