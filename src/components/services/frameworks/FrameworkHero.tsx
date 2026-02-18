"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { FrameworkHeroProps } from "./types";
import { DynamicIcon } from "./DynamicIcon";

const variantStyles = {
    tisax: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
    iso: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
    nis2: "bg-[#ECFEFF] text-[#0E7490] border-[#CFFAFE]", // Cyan
    dora: "bg-[#F0FDF4] text-[#166534] border-[#BBF7D0]", // Green
    gdpr: "bg-[#FDF4FF] text-[#7E22CE] border-[#E9D5FF]", // Purple
    tpisr: "bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]", // Amber
    default: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export function FrameworkHero({ data }: { data: FrameworkHeroProps }) {
    const badgeStyle = variantStyles[data.badge.variant] || variantStyles.default;

    return (
        <section className="relative overflow-hidden bg-white border-b border-neutral-100 pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl"
                    >
                        {/* Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest mb-8 ${badgeStyle}`}>
                            <DynamicIcon name={data.badge.icon} size={14} />
                            {data.badge.text}
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl font-black text-primary-navy tracking-tighter mb-8 leading-[0.95]">
                            {data.h1.normal} <br />
                            <span className="text-accent-coral">{data.h1.accent}</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-neutral-500 leading-relaxed mb-10 max-w-xl">
                            {data.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary-navy text-white px-8 h-14 rounded-xl font-bold">
                                    {data.buttons.primary.text}
                                </Button>
                            </Link>
                            {data.buttons.secondary && (
                                <Link href={data.buttons.secondary.link}>
                                    <Button variant="outline" size="lg" className="px-8 h-14 rounded-xl font-bold">
                                        {data.buttons.secondary.text}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Side: Compliance Visual */}
                    {data.complianceCard && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-primary-navy/5 rounded-full blur-3xl transform scale-90" />

                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-100 relative z-10 max-w-md mx-auto">
                                <div className="flex items-center justify-between pb-6 border-b border-neutral-50 mb-6">
                                    <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Compliance Status</span>
                                    <span className="text-xs font-bold text-success-emerald bg-success-emerald/10 px-2 py-1 rounded">
                                        {data.complianceCard.status}
                                    </span>
                                </div>
                                <div className="space-y-6">
                                    {data.complianceCard.items.map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-[11px] font-bold text-primary-navy uppercase tracking-wider">
                                                <span>{item.label}</span>
                                                <span>{item.progress}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.progress}%` }}
                                                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                                                    className="h-full bg-primary-navy"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
