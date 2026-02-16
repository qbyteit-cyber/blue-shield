"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CertificationBadgeStrip } from "./CertificationBadgeStrip";

const SystemStatus = () => {
    const [statuses, setStatuses] = useState([
        { label: "NODE_ALPHA", value: "ACTIVE", color: "text-success-emerald" },
        { label: "AES_256", value: "VALIDATED", color: "text-success-emerald" },
        { label: "SCANNING", value: "100%", color: "text-warning-amber" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStatuses((prev) =>
                prev.map(s => ({
                    ...s,
                    value: s.label === "SCANNING" ? (Math.random() > 0.5 ? "100%" : "SYNC") : s.value
                }))
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-8 right-8 hidden flex-col gap-2 p-4 border border-neutral-200 bg-white/50 backdrop-blur-md rounded-lg shadow-sm md:flex"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-success-emerald animate-pulse" />
                <span className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">System Status</span>
            </div>
            {statuses.map((s) => (
                <div key={s.label} className="flex justify-between gap-8 mono text-[11px]">
                    <span className="text-neutral-400">{s.label}:</span>
                    <span className={s.color}>{s.value}</span>
                </div>
            ))}
        </motion.div>
    );
};

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-48 lg:pb-32">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary-navy/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <SystemStatus />

                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase text-primary-navy bg-primary-navy/5 rounded">
                            European TISAX® & ISO 27001 Experts
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-[1.1] mb-8">
                            Certification. Make it happen <br />
                            <span className="text-primary-navy">With ITIS-Secure.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-700 mb-12 leading-relaxed max-w-2xl">
                            We take your company from security gaps to full certification. Expert preparation for TISAX®, ISO 27001, NIS2, DORA, GDPR TPISR and other frameworks with a 100% first-time pass rate.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <Button size="lg">Book Your Free Gap Assessment</Button>
                            </Link>
                            <Link href="/services/tisax">
                                <Button variant="secondary" size="lg">Explore Solutions</Button>
                            </Link>
                        </div>

                    </motion.div>
                </div>

                <div className="mt-16 md:mt-20 -mx-6 md:mx-0">
                    <CertificationBadgeStrip />
                </div>
            </div>
        </section>
    );
}
