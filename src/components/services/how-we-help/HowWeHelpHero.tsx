"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import type { PageMeta, EyebrowColor } from "./types";

/* ── Eyebrow colour map ────────────────────────────────────── */
const eyebrowColors: Record<EyebrowColor, string> = {
    blue: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
    green: "bg-[#F0FDF4] text-[#166534] border-[#BBF7D0]",
    amber: "bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]",
    purple: "bg-[#FDF4FF] text-[#7E22CE] border-[#E9D5FF]",
};

export function HowWeHelpHero({ meta }: { meta: PageMeta }) {
    const color = eyebrowColors[meta.eyebrowColor];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white pt-32 pb-20 md:pt-40 md:pb-24 border-b border-neutral-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,36,99,0.04),transparent_50%)]" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
                    <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/services/iso-27001" className="hover:text-primary-navy transition-colors">Services</Link>
                    <span>/</span>
                    <span className="text-primary-navy font-bold">{meta.breadcrumb}</span>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    {/* Eyebrow */}
                    <span className={`inline-block px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-[0.1em] mb-6 ${color}`}>
                        {meta.eyebrow}
                    </span>

                    {/* H1 */}
                    <h1 className="text-5xl md:text-7xl font-[800] text-primary-navy tracking-[-0.03em] leading-[1.0] mb-5">
                        {meta.h1.replace(".", "")}
                        <span className="text-accent-coral">.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-[#334155] font-normal leading-[1.6] max-w-[640px] mb-9">
                        {meta.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <Link href={meta.ctaPrimary.href}>
                            <Button variant="primary" size="lg">{meta.ctaPrimary.text}</Button>
                        </Link>
                        <Link href={meta.ctaSecondary.href}>
                            <Button variant="outline" size="lg">{meta.ctaSecondary.text}</Button>
                        </Link>
                    </div>

                    {/* Trust Points */}
                    <div className="flex flex-wrap gap-8 mt-6">
                        {meta.trustPoints.map((tp) => (
                            <span key={tp.text} className="flex items-center gap-2 text-[13px] font-medium text-[#64748B]">
                                <CheckCircle2 size={14} className="text-[#059669] shrink-0" />
                                {tp.text}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
