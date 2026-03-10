import { BlogPost, BlogCategory, BlogAuthor } from "@/types/blog";

export const mockCategories: BlogCategory[] = [
    { title: "Cybersecurity", slug: "cybersecurity" },
    { title: "TISAX®", slug: "tisax" },
    { title: "Compliance", slug: "compliance" },
    { title: "ISO 27001", slug: "iso-27001" },
    { title: "Automotive", slug: "automotive" },
];

const mockAuthorDeiu: BlogAuthor = {
    name: "Deiu",
    role: "Lead Cybersecurity Architect",
    image: {
        asset: {
            url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
        },
    },
};

export const mockPosts: BlogPost[] = [
    {
        _id: "post-1",
        title: "Understanding TISAX® AL3: A Guide to the Highest Level of Information Security in Automotive",
        slug: "understanding-tisax-al3-guide",
        publishedAt: "2026-03-01T10:00:00Z",
        excerpt: "Achieving TISAX® Assessment Level 3 is critical for suppliers handling highly confidential data. We break down the requirements, common pitfalls, and how to fast-track your compliance.",
        mainImage: {
            asset: {
                url: "https://images.unsplash.com/photo-1617814088514-6338be556d11?q=80&w=1200&auto=format&fit=crop",
            },
            alt: "Automotive engineering and technical data",
        },
        author: mockAuthorDeiu,
        categories: [mockCategories[1], mockCategories[4]], // TISAX, Automotive
        readTimeMinutes: 7,
        body: [
            {
                _type: "block",
                style: "normal",
                children: [
                    {
                        _type: "span",
                        text: "The automotive industry demands rigorous information security. Assessment Level 3 (AL3) represents the highest echelon of the Trusted Information Security Assessment Exchange (TISAX®). Whether you are sharing CAD models, intellectual property, or prototype designs, compliance is non-negotiable.",
                    },
                ],
            },
            {
                _type: "block",
                style: "h2",
                children: [{ _type: "span", text: "Why Choose AL3?" }],
            },
            {
                _type: "block",
                style: "normal",
                children: [
                    {
                        _type: "span",
                        text: "Level 3 compliance is designed for 'data with a very high need for protection'. Typical scenarios include handling data related to secret prototypes, pre-release strategic details, or highly sensitive financial models of major OEMs like VW, BMW, or Audi.",
                    },
                ],
            },
        ],
    },
    {
        _id: "post-2",
        title: "NIS2 Directive: Are Mid-Sized Tech Firms Ready or Not?",
        slug: "nis2-directive-readiness",
        publishedAt: "2026-02-15T14:30:00Z",
        excerpt: "The incoming European NIS2 directive significantly expands the scope of regulated entities. Discover the 5 immediate infrastructural changes you need to implement.",
        mainImage: {
            asset: {
                url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
            },
            alt: "Server room networking equipment",
        },
        author: mockAuthorDeiu,
        categories: [mockCategories[0], mockCategories[2]], // Cybersecurity, Compliance
        readTimeMinutes: 5,
        body: [
            {
                _type: "block",
                style: "normal",
                children: [{ _type: "span", text: "NIS2 is arriving, and it is reshaping the European compliance landscape." }],
            },
        ],
    },
    {
        _id: "post-3",
        title: "Zero-Trust Architecture on a Hybrid Cloud: A Practical Guide",
        slug: "zero-trust-architecture-hybrid-cloud",
        publishedAt: "2026-01-20T09:15:00Z",
        excerpt: "Moving from perimeter-based security to a Zero-Trust framework is complex. Learn how to maintain productivity while locking down a distributed environment.",
        mainImage: {
            asset: {
                url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
            },
            alt: "Abstract cloud network graphic",
        },
        author: mockAuthorDeiu,
        categories: [mockCategories[0]], // Cybersecurity
        readTimeMinutes: 10,
        body: [
            {
                _type: "block",
                style: "normal",
                children: [{ _type: "span", text: "Never trust, always verify." }],
            },
        ],
    },
    {
        _id: "post-4",
        title: "ISO 27001 Transitioning: Moving and updating your old certifications",
        slug: "iso-27001-transition-guide",
        publishedAt: "2026-01-05T11:45:00Z",
        excerpt: "The 2022 update to ISO/IEC 27001 introduces significant changes to Annex A controls. Get our step-by-step transitioning checklist.",
        mainImage: {
            asset: {
                url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
            },
            alt: "Business team reviewing documents",
        },
        author: mockAuthorDeiu,
        categories: [mockCategories[3], mockCategories[2]], // ISO27001, Compliance
        readTimeMinutes: 6,
        body: [
            {
                _type: "block",
                style: "normal",
                children: [{ _type: "span", text: "The new standard is here to stay." }],
            },
        ],
    },
    {
        _id: "post-5",
        title: "The Role of AI in Automated Penetration Testing",
        slug: "ai-automated-penetration-testing",
        publishedAt: "2025-12-10T08:00:00Z",
        excerpt: "LLMs and autonomous agents are beginning to discover zero-day vulnerabilities. What does the future of red-teaming look like in an AI-first era?",
        mainImage: {
            asset: {
                url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
            },
            alt: "Abstract AI technology visualization",
        },
        author: mockAuthorDeiu,
        categories: [mockCategories[0]], // Cybersecurity
        readTimeMinutes: 8,
        body: [
            {
                _type: "block",
                style: "normal",
                children: [{ _type: "span", text: "AI is revolutionizing pen-testing workflows." }],
            },
        ],
    },
];
