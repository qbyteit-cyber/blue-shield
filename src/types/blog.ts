export interface PortableTextBlock {
    _type: string;
    style?: string;
    children?: { _type: string; text?: string }[];
    [key: string]: any;
}

export interface BlogAuthor {
    name: string;
    role?: string;
    image?: {
        asset: {
            url: string;
        };
    };
}

export interface BlogCategory {
    title: string;
    slug: string;
    description?: string;
}

export interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
    mainImage: {
        asset: {
            url: string;
        };
        alt?: string;
    };
    body: PortableTextBlock[];
    author: BlogAuthor;
    categories: BlogCategory[];
    readTimeMinutes?: number;
}
