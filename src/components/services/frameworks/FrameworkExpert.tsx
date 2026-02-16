"use client";

import { CheckCircle2, Shield } from "lucide-react";
import type { ExpertInsight } from "./types";

export function FrameworkExpert({ data }: { data: ExpertInsight }) {
    return (
        <section className="py-24 bg-primary-navy text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-black mb-6 text-white tracking-tight">
                                {data.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed text-lg mb-8">
                                {data.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {data.points.map((point, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-success-emerald shrink-0 mt-1" size={20} />
                                    <span className="text-white/90 font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                        <div className="bg-accent-coral w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <Shield className="text-white" size={24} />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white">
                            {data.insightTitle || "Expert Insight"}
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {data.insightDescription}
                        </p>
                        <div className="h-1 w-20 bg-accent-coral rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
