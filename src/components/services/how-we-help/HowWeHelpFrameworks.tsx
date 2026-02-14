import Link from "next/link";
import type { FrameworkLink } from "./types";

interface Props {
    h2: string;
    intro: string;
    frameworks: FrameworkLink[];
}

export function HowWeHelpFrameworks({ h2, intro, frameworks }: Props) {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <h2 className="text-2xl md:text-3xl font-[800] text-primary-navy tracking-tight mb-3">
                    {h2}
                </h2>
                <p className="text-neutral-500 mb-10 max-w-2xl mx-auto">{intro}</p>

                <div className="flex flex-wrap justify-center gap-3">
                    {frameworks.map((fw) => (
                        <Link
                            key={fw.label}
                            href={fw.href}
                            className="px-5 py-2.5 rounded-full border border-neutral-200 bg-white text-sm font-bold text-primary-navy hover:border-primary-navy hover:bg-primary-navy/5 transition-all duration-200"
                        >
                            {fw.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
