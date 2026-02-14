"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { AuditService } from "../types";

export function AuditServicesGrid({ services }: { services: AuditService[] }) {
    return (
        <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-[800] text-primary-navy tracking-tight mb-4">
                    Our Audit & Testing Services
                </h2>
                <p className="text-neutral-600 mb-12 max-w-2xl">
                    Every service delivers a written, actionable report — because enterprise buyers need to know exactly what they're getting.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc, i) => {
                        const Icon = svc.icon;
                        return (
                            <motion.div
                                key={svc.id}
                                className="flex flex-col p-6 bg-white rounded-xl border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary-navy/5 flex items-center justify-center shrink-0">
                                        <Icon size={20} className="text-primary-navy" />
                                    </div>
                                    <h3 className="text-base font-bold text-primary-navy">{svc.title}</h3>
                                </div>

                                {/* Body */}
                                <p className="text-sm text-neutral-500 leading-relaxed mb-3 flex-1">{svc.whatItIs}</p>

                                {/* Frameworks */}
                                <div className="text-xs text-neutral-400 mb-4">{svc.frameworks}</div>

                                {/* Deliverable callout */}
                                <div className="p-3 rounded-lg bg-[#F0FDF4] border-l-[3px] border-l-[#059669] mb-4">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#059669] mb-1">Deliverable</div>
                                    <p className="text-xs text-neutral-600 leading-relaxed">{svc.deliverable}</p>
                                </div>

                                {/* Best for */}
                                <p className="text-xs text-neutral-400 mb-4 italic">{svc.bestFor}</p>

                                {/* CTA */}
                                <Link
                                    href={svc.cta.href}
                                    className="text-sm font-bold text-accent-coral hover:underline mt-auto"
                                >
                                    {svc.cta.text} →
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
