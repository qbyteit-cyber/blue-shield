"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CertificationBadgeStrip } from "./CertificationBadgeStrip";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-48 lg:pb-32">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary-navy/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase text-primary-navy bg-primary-navy/5 rounded">
                            European TISAX® & ISO 27001 Experts
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-[1.1] mb-8">
                            <span className="block lg:whitespace-nowrap">Certification. Make it happen</span>
                            <span className="text-primary-navy block mt-2">With ITIS-Secure.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-700 mb-12 leading-relaxed max-w-2xl">
                            We take your company from security gaps to full certification. Expert preparation for TISAX®, ISO 27001, NIS2, DORA, GDPR, TPISR and other frameworks with a 100% first-time pass rate.
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
