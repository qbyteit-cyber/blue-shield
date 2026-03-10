import { PortableTextBlock } from "@/types/blog";

interface PortableTextRendererProps {
    blocks: PortableTextBlock[];
}

// Fallback renderer since we couldn't install @portabletext/react due to execution policies.
// This handles basic text rendering so the mock data displays beautifully.
export function PortableTextRenderer({ blocks }: PortableTextRendererProps) {
    return (
        <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#005686] prose-a:text-[#005686]">
            {blocks.map((block, index) => {
                if (block._type !== "block" || !block.children) {
                    return null; // unsupported block type for this dummy renderer
                }

                const textContent = block.children.map((child: any) => child.text).join("");

                if (block.style === "h2") {
                    return <h2 key={index}>{textContent}</h2>;
                }
                if (block.style === "h3") {
                    return <h3 key={index}>{textContent}</h3>;
                }
                return <p key={index}>{textContent}</p>;
            })}
        </div>
    );
}
