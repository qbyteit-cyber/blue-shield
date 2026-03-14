import { PortableTextBlock } from "@/types/blog";

interface PortableTextRendererProps {
    blocks: PortableTextBlock[];
}

// Fallback renderer since we couldn't install @portabletext/react due to execution policies.
// This handles basic text rendering so the mock data displays beautifully.
export function PortableTextRenderer({ blocks }: PortableTextRendererProps) {
    return (
        <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:text-[#005686] prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#0077c5] prose-a:underline hover:prose-a:text-[#005686] transition-colors prose-strong:text-slate-900">
            {blocks.map((block, index) => {
                if (block._type !== "block" || !block.children) {
                    return null; // unsupported block type for this dummy renderer
                }

                const textContent = block.children.map((child: any) => child.text).join("");
                
                // Super simple regex to convert **bold** and [link](url) to HTML
                const htmlContent = textContent
                    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

                if (block.style === "h2") {
                    return <h2 key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
                }
                if (block.style === "h3") {
                    return <h3 key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
                }
                if (block.listItem === "bullet") {
                    return <ul key={index} className="my-2"><li className="ml-6 list-disc" dangerouslySetInnerHTML={{ __html: htmlContent }} /></ul>;
                }
                if (block.listItem === "number") {
                    return <ol key={index} className="my-2"><li className="ml-6 list-decimal" dangerouslySetInnerHTML={{ __html: htmlContent }} /></ol>;
                }
                return <p key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
            })}
        </div>
    );
}
