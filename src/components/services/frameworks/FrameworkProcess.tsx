"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "./types";
import { DynamicIcon } from "./DynamicIcon";

export function FrameworkProcess({ data }: { data: { title: string; description: string; steps: ProcessStep[] } }) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute top-0 -left-10 w-72 h-72 bg-accent-coral/5 rounded-full blur-3xl" />
                        <div className="relative z-10 space-y-4">
                            {data.steps.map((step, i) => {
                                return (
                                    <div key={i} className="flex gap-6 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 group hover:border-accent-coral/20 transition-all">
                                        <div className="shrink-0 flex flex-col items-center gap-2">
                                            <div className="text-2xl font-black text-neutral-200 group-hover:text-accent-coral transition-colors">
                                                {step.step}
                                            </div>
                                            <div className="h-full w-px bg-neutral-200 group-last:hidden" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <DynamicIcon name={step.icon} size={16} className="text-accent-coral opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <h3 className="font-bold text-primary-navy text-lg">{step.title}</h3>
                                            </div>
                                            <p className="text-sm text-neutral-500 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-accent-coral font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">
                                OUR METHODOLOGY
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-8 leading-tight">
                                {data.title}
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                {data.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
