"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";
import type { FinalCTA } from "./types";

export function HowWeHelpCta({ cta }: { cta: FinalCTA }) {
    return (
        <>
            <section className="relative py-24 md:py-28 bg-gradient-to-br from-[#0A2463] to-[#1E3A8A] overflow-hidden">
                {/* Subtle radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.08),transparent_60%)]" />

                <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-[800] text-white tracking-tight mb-6">
                            {cta.h2}
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
                            {cta.body}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href={cta.ctaPrimary.href}>
                                <Button variant="primary" size="lg">{cta.ctaPrimary.text}</Button>
                            </Link>
                            <Link href={cta.ctaSecondary.href}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                                >
                                    {cta.ctaSecondary.text}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Badge strip */}
            <CertificationBadgeStrip />
        </>
    );
}
