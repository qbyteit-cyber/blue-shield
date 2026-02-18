"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Shield, Target, Users, BookOpen, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero */}
                <section className="py-24 md:py-32 bg-white border-b border-neutral-100">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl md:text-7xl font-black text-primary-navy tracking-tighter mb-8 leading-[0.85]">
                                COMPLIANCE <br />
                                <span className="text-accent-coral italic">RE-ENGINEERED.</span>
                            </h1>
                            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
                                We bridge the "Compliance Gap"—the space between corporate ambition and the deep technical knowledge required to pass high-rigor audits.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Founder Story */}
                <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-coral/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="relative">
                                <div className="aspect-[4/5] bg-neutral-800 rounded-3xl overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
                                    <div className="absolute bottom-10 left-10">
                                        <div className="text-2xl font-black mb-1">Iulian Bozdoghina</div>
                                        <div className="text-accent-coral font-bold text-xs uppercase tracking-widest">Founder & Lead Specialist</div>
                                    </div>
                                    <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-white/5">
                                        <Users size={200} strokeWidth={0.5} />
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl hidden md:block">
                                    <Quote className="text-accent-coral mb-4" size={32} />
                                    <p className="text-primary-navy font-bold text-sm max-w-[200px] leading-tight italic">
                                        "Compliance is not a checklist; it's a strategic advantage in a high-stakes supply chain."
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                                    Lead by <br /> Auditor Insight.
                                </h2>
                                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                    Founded by Iulian Bozdoghina, a Lead Auditor with years of hands-on experience in high-rigor information security environments, ITIS-Secure was built for a single purpose: to solve the failure rate of European suppliers facing OEM compliance audits.
                                </p>
                                <p className="text-lg text-white/60 mb-10 leading-relaxed">
                                    We don't just speak 'policy'. We speak 'avionics', 'automotive engineering', and 'network architecture'. We don't just give you a "To-Do" list; we provide the engineers to DO it.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-3xl font-black text-accent-coral mb-2">100%</div>
                                        <div className="text-[10px] uppercase font-bold tracking-widest opacity-40">First-Time Pass Rate</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-accent-coral mb-2">95+</div>
                                        <div className="text-[10px] uppercase font-bold tracking-widest opacity-40">Projects Delivered</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values / Pillars */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-6">
                                Our Core Methodology
                            </h2>
                            <p className="text-neutral-500 text-lg">Built on authority, precision, and human implementation.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                {
                                    title: "Auditor-Mindset",
                                    desc: "We implement controls from the perspective of the people who will actually sign the certificate.",
                                    icon: Shield
                                },
                                {
                                    title: "Absolute Precision",
                                    desc: "Every control mapping and evidence package is built to withstand the scrutiny of Tier-1 reviewers.",
                                    icon: Target
                                },
                                {
                                    title: "End-to-End Ownership",
                                    desc: "From discovery to final audit support, we own the result. One partner, full responsibility.",
                                    icon: BookOpen
                                }
                            ].map((value, i) => (
                                <div key={i} className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-neutral-50 rounded-full mb-8 border border-neutral-100">
                                        <value.icon className="text-primary-navy" size={32} />
                                    </div>
                                    <h3 className="text-xl font-black text-primary-navy mb-4">{value.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed max-w-sm mx-auto">
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-accent-coral text-white text-center">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                            Ready to Experience <br /> Expert-Led Compliance?
                        </h2>
                        <Link href="/contact">
                            <Button className="bg-primary-navy text-white px-12 h-16 rounded-xl font-bold text-lg hover:bg-primary-navy/90 shadow-2xl">
                                Book Your Free Consultation
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
