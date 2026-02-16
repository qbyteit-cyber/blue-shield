"use client";

import type { BenefitItem } from "./types";
import { DynamicIcon } from "./DynamicIcon";

export function FrameworkBenefits({ data }: { data: { title: string; description: string; items: BenefitItem[] } }) {
    return (
        <section className="py-24 bg-neutral-50 border-b border-neutral-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-primary-navy tracking-tighter mb-6">
                        {data.title}
                    </h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.items.map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-primary-navy/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-navy group-hover:text-white transition-colors">
                                <DynamicIcon name={item.icon} className="text-primary-navy group-hover:text-white transition-colors" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-primary-navy mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
