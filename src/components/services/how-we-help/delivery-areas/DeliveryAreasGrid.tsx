"use client";

import { motion } from "framer-motion";
import type { DeliveryArea } from "../types";

export function DeliveryAreasGrid({ areas }: { areas: DeliveryArea[] }) {
    return (
        <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-[800] text-primary-navy tracking-tight mb-4">
                    What We Implement
                </h2>
                <p className="text-neutral-600 mb-12 max-w-2xl">
                    From the first gap analysis to the final auditor walkthrough, we implement every layer of your security programme.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, i) => {
                        const Icon = area.icon;
                        return (
                            <motion.div
                                key={area.id}
                                className="p-6 bg-white rounded-xl border border-neutral-100 border-l-[3px] border-l-accent-coral hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary-navy/5 flex items-center justify-center mb-4">
                                    <Icon size={20} className="text-primary-navy" />
                                </div>
                                <h3 className="text-base font-bold text-primary-navy mb-2">{area.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed">{area.body}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
