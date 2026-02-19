"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "./types";

interface Props {
    h2: string;
    intro: string;
    steps: ProcessStep[];
}

export function HowWeHelpProcess({ h2, intro, steps }: Props) {
    return (
        <section className="py-20 md:py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-[800] text-primary-navy tracking-tight mb-4">
                        {h2}
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">{intro}</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting line. Desktop only */}
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-neutral-200" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                className="relative text-center px-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {/* Step circle */}
                                <div className="relative z-10 w-12 h-12 mx-auto mb-4 rounded-full bg-primary-navy text-white flex items-center justify-center text-sm font-bold">
                                    {i + 1}
                                </div>
                                <h3 className="text-base font-bold text-primary-navy mb-2">{step.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed">{step.body}</p>
                                {step.timeline && (
                                    <span className="inline-block mt-3 text-xs font-bold text-accent-coral">{step.timeline}</span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
