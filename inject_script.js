const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, 'src', 'lib', 'sanity', 'mock-data.ts');
const artifactsDir = 'C:\\Users\\Deiu\\.gemini\\antigravity\\brain\\b75b9e9b-8eb2-455a-a5e1-fa737ffa6abe';
let mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

const parseMarkdown = (filePath) => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const sections = raw.split(/^---$/m).filter(Boolean);
    const results = [];
    
    // Iterate in steps of 2 (frontmatter + body)
    for (let i = 0; i < sections.length; i += 2) {
        if (!sections[i+1]) break;
        
        const frontmatter = sections[i].trim();
        const bodyContent = sections[i+1].trim();
        
        const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
        const slugMatch = frontmatter.match(/slug:\s*"([^"]+)"/);
        
        let excerpt = "";
        const lines = bodyContent.split('\n');
        for (let j = 0; j < lines.length; j++) {
            if (lines[j].trim() && !lines[j].startsWith('#')) {
                excerpt = lines[j].trim();
                break;
            }
        }
        
        if (excerpt.length > 200) excerpt = excerpt.substring(0, 197) + "...";

        // Convert the body into Portable Text roughly
        const portableTextBlocks = [];
        let inList = false;
        
        bodyContent.split('\n').forEach(line => {
            const trimmed = line.trim();
            if (!trimmed) return;
            
            if (trimmed.startsWith('## ')) {
                portableTextBlocks.push(`{ _type: "block", style: "h2", children: [{ _type: "span", text: ${JSON.stringify(trimmed.replace('## ', ''))} }] }`);
                inList = false;
            } else if (trimmed.startsWith('### ')) {
                portableTextBlocks.push(`{ _type: "block", style: "h3", children: [{ _type: "span", text: ${JSON.stringify(trimmed.replace('### ', ''))} }] }`);
                inList = false;
            } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                // Simplified lists
                portableTextBlocks.push(`{ _type: "block", listItem: "bullet", children: [{ _type: "span", text: ${JSON.stringify(trimmed.substring(2))} }] }`);
                inList = true;
            } else if (trimmed.match(/^\d+\.\s/)) {
                 portableTextBlocks.push(`{ _type: "block", listItem: "number", children: [{ _type: "span", text: ${JSON.stringify(trimmed.replace(/^\d+\.\s/, ''))} }] }`);
                 inList = true;
            }
            else {
                portableTextBlocks.push(`{ _type: "block", style: "normal", children: [{ _type: "span", text: ${JSON.stringify(trimmed)} }] }`);
                inList = false;
            }
        });

        results.push({
            title: titleMatch ? titleMatch[1] : 'Unknown Title',
            slug: slugMatch ? slugMatch[1] : 'unknown-slug',
            excerpt: excerpt,
            bodyBlocks: portableTextBlocks
        });
    }
    return results;
};

// Parse all 4 batches
const allParsedPosts = [
    ...parseMarkdown(path.join(artifactsDir, 'seo_batch_1.md')),
    ...parseMarkdown(path.join(artifactsDir, 'seo_batch_2.md')),
    ...parseMarkdown(path.join(artifactsDir, 'seo_batch_3.md')),
    ...parseMarkdown(path.join(artifactsDir, 'seo_batch_4.md'))
];


console.log(`Successfully parsed ${allParsedPosts.length} posts from markdown batches.`);

// We have 15 posts total in mockData (indices 0 to 14).
// Let's replace the contents for post-2 down to post-15.
// We keep post-1 untouched as it's the main TISAX one we already published successfully.
// Wait, we can modify the mockData string manually.

let newMockDataOutput = `import { BlogPost, BlogCategory, BlogAuthor } from "@/types/blog";

export const mockCategories: BlogCategory[] = [
    { title: "Cybersecurity", slug: "cybersecurity" },
    { title: "TISAX®", slug: "tisax" },
    { title: "Compliance", slug: "compliance" },
    { title: "ISO 27001", slug: "iso-27001" },
    { title: "Automotive", slug: "automotive" },
];

const mockAuthorIulian: BlogAuthor = {
    name: "Iulian",
    role: "Lead Cybersecurity Architect",
    image: {
        asset: {
            url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
        },
    },
};

export const mockPosts: BlogPost[] = [\n`;

// Extract original post-1 (indices will shift otherwise)
const post1Match = mockDataContent.match(/\{\s*_id:\s*"post-1"[\s\S]+?\}\s*,\s*\{\s*_id:\s*"post-2"/);
if(post1Match) {
    newMockDataOutput += mockDataContent.substring(
        mockDataContent.indexOf('{\n        _id: "post-1"'), 
        mockDataContent.indexOf('{\n        _id: "post-2"')
    );
}

// Generate the remaining 14 posts
const images = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586528116311-ad8ed7c8260b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503378415752-9f37ff86af80?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614064641913-6b7140414c71?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop"
];

for(let i=0; i<allParsedPosts.length; i++) {
    const p = allParsedPosts[i];
    
    // Distribute categories roughly logically based on titles
    let cats = "[mockCategories[0]]";
    if (p.title.includes('TISAX')) cats = "[mockCategories[1], mockCategories[4]]";
    else if (p.title.includes('ISO 27001')) cats = "[mockCategories[3], mockCategories[2]]";
    else if (p.title.includes('Automotive')) cats = "[mockCategories[4], mockCategories[0]]";
    else if (p.title.includes('DORA') || p.title.includes('NIS2')) cats = "[mockCategories[2], mockCategories[0]]";
    
    // Fix dates descending from Feb 2026 backwards
    const dt = new Date(Date.now() - (i+1) * 7 * 24 * 60 * 60 * 1000).toISOString();
    
    newMockDataOutput += `    {
        _id: "post-${i+2}",
        title: ${JSON.stringify(p.title)},
        slug: ${JSON.stringify(p.slug)},
        publishedAt: ${JSON.stringify(dt)},
        excerpt: ${JSON.stringify(p.excerpt)},
        mainImage: { asset: { url: "${images[i]}" }, alt: "Blog post image" },
        author: mockAuthorIulian,
        categories: ${cats},
        readTimeMinutes: ${Math.floor(Math.random() * 5) + 5},
        body: [\n            ${p.bodyBlocks.join(',\n            ')}\n        ]
    }`;
    if(i < allParsedPosts.length - 1) newMockDataOutput += ",\n";
    else newMockDataOutput += "\n];\n";
}

fs.writeFileSync(mockDataPath, newMockDataOutput, 'utf8');
console.log("Injection completed! mock-data.ts has been updated.");
