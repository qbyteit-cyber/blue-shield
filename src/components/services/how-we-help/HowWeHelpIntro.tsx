"use client";

import { motion } from "framer-motion";
import type { PageMeta } from "./types";

export function HowWeHelpIntro({ meta }: { meta: PageMeta }) {
    return (
        <section className="py-20 md:py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                    {/* Left — text (60%) */}
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl md:text-4xl font-[800] text-primary-navy tracking-tight mb-8">
                            {meta.introH2}
                        </h2>
                        <div className="space-y-6 text-neutral-600 leading-relaxed">
                            {meta.introParagraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>

                    {/* Right — stats card (40%) */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white border border-neutral-200 rounded-xl p-8 space-y-6">
                            {meta.introStats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-[800] text-primary-navy tracking-tight">{stat.value}</div>
                                    <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
