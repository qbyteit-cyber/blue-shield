"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FrameworkCTA({ data }: { data: { title: string; description: string; buttonText: string } }) {
    return (
        <section className="py-24 bg-white border-t border-neutral-100 text-center">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-8 leading-tight">
                    {data.title}
                </h2>
                <p className="text-xl text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {data.description}
                </p>
                <div className="flex justify-center flex-col md:flex-row gap-4">
                    <Link href="/contact">
                        <Button className="bg-accent-coral text-white hover:bg-accent-coral/90 text-lg px-12 py-8 h-auto rounded-xl font-bold w-full md:w-auto">
                            {data.buttonText}
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" className="text-lg px-12 py-8 h-auto rounded-xl font-bold w-full md:w-auto">
                            Compare Frameworks
                        </Button>
                    </Link>
                </div>
                <p className="mt-8 opacity-40 text-xs uppercase tracking-widest font-bold text-neural-400">
                    Trusted by 50+ Enterprise Clients
                </p>
            </div>
        </section>
    );
}
