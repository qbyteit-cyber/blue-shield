"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function ContactMapSection() {
    return (
        <section className="py-24 bg-neutral-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="uppercase text-[11px] font-bold text-accent-coral tracking-[0.15em] block mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tight">
                        Start Your Certification Journey
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* ── LEFT: Contact Form ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-100 shadow-xl"
                    >
                        <h3 className="text-xl font-black text-primary-navy mb-6 tracking-tight">
                            Project Inquiry
                        </h3>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                        Company Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                    Target Certification
                                </label>
                                <select className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all">
                                    <option>TISAX® AL3</option>
                                    <option>CMMC 2.0 Level 2</option>
                                    <option>ISO 27001:2022</option>
                                    <option>NIS2 Compliance</option>
                                    <option>DORA</option>
                                    <option>GDPR</option>
                                    <option>Other Framework</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project or target deadline..."
                                    className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all resize-none"
                                />
                            </div>
                            <p className="text-[10px] text-neutral-400 leading-relaxed px-1">
                                Your data remains strictly confidential. GDPR compliant.
                            </p>
                            <Button className="w-full bg-primary-navy text-white h-14 rounded-xl font-bold text-base hover:bg-primary-navy/90 transition-all flex items-center justify-center gap-3">
                                Book Initial Assessment
                                <CheckCircle2 size={18} className="text-accent-coral" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* ── RIGHT: Secured Sites Image ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-xl border border-neutral-100 bg-white"
                    >
                        <Image
                            src="/secured-sites.webp"
                            alt="Successful certified locations for TISAX — 11 global locations including München, Stuttgart, Pune, Kuala Lumpur, Den Bosch, Düsseldorf, Gliching, Coventry, Darmstadt, Durham NC, and Royal Oak"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                            priority={false}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
