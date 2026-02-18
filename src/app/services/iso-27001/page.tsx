"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, BookOpen, UserCheck, Search, CheckCircle, FileText } from "lucide-react";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";

export default function IsoServicePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-white border-b border-neutral-100 py-24 md:py-32">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
                            >
                                <CheckCircle size={12} />
                                ISO/IEC 27001:2022
                            </motion.div>
                            <h1 className="text-4xl md:text-7xl font-black text-primary-navy tracking-tighter mb-8 leading-[0.9]">
                                THE GOLD STANDARD FOR <br />
                                <span className="text-accent-coral underline decoration-from-font underline-offset-8">INFORMATION SECURITY.</span>
                            </h1>
                            <p className="text-xl text-neutral-500 leading-relaxed mb-10 max-w-2xl mx-auto">
                                Building your Information Security Management System (ISMS) from the ground up. Expert-led preparation for the global supply chain with 100% first-time pass guarantee.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-primary-navy text-white px-10 h-14 text-base rounded-xl font-bold">
                                        Book Gap Analysis
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline" className="px-10 h-14 text-base rounded-xl font-bold">
                                        Download ISO Matrix
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <CertificationBadgeStrip />

                {/* ISO Pillars */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "ISMS Framework Design",
                                    desc: "Customized policy architecture that moves beyond generic templates to actual risk-based security.",
                                    icon: BookOpen
                                },
                                {
                                    title: "Auditor-Led Readiness",
                                    desc: "Preparation led by certified ISO 27001 auditors who know exactly what the external body is looking for.",
                                    icon: UserCheck
                                },
                                {
                                    title: "Control Remediation",
                                    desc: "Deep technical support to fix gaps across physical, human, and technological security controls.",
                                    icon: Shield
                                }
                            ].map((pillar, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="bg-primary-navy/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                                        <pillar.icon className="text-primary-navy" size={28} />
                                    </div>
                                    <h3 className="text-xl font-black text-primary-navy mb-4 tracking-tight">{pillar.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Methodology / Steps */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="relative order-2 lg:order-1">
                                <div className="absolute top-0 -left-10 w-72 h-72 bg-accent-coral/10 rounded-full blur-3xl" />
                                <div className="relative z-10 space-y-4">
                                    {[
                                        { step: "01", label: "Gap Analysis & Risk Assessment", icon: Search },
                                        { step: "02", label: "Drafting Policies & Annex A Controls", icon: FileText },
                                        { step: "03", label: "Implementation & Technical Hardening", icon: Shield },
                                        { step: "04", label: "Internal Audit (Stage 1 Simulation)", icon: CheckCircle }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-6 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 group transition-all">
                                            <div className="text-2xl font-black text-neutral-200 group-hover:text-accent-coral transition-colors">{item.step}</div>
                                            <div className="font-bold text-primary-navy text-sm md:text-base">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="text-accent-coral font-black text-[10px] uppercase tracking-[0.3em] mb-6">Our Methodology</div>
                                <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-8 leading-tight">
                                    Expert Oversight for <br className="hidden md:block" /> Every ISO Milestone.
                                </h2>
                                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                    Compliance with ISO 27001 is not just a badge; it is a foundational baseline for global commerce. We bridge the "Compliance Gap" by providing both the roadmap and the engineers to implement it.
                                </p>
                                <div className="p-8 bg-primary-navy rounded-2xl text-white">
                                    <div className="flex gap-4 items-center mb-4">
                                        <Shield className="text-accent-coral" size={24} />
                                        <div className="font-bold tracking-tight">100% First-Time Pass Rate</div>
                                    </div>
                                    <p className="text-xs text-white/60 leading-relaxed">
                                        Our methodologies are built on years of hands-on lead auditor experience, ensuring that when the external body arrives, you have 0 major non-conformities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-primary-navy text-white text-center">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">
                            Start Your ISO 27001 Journey Today.
                        </h2>
                        <Link href="/contact">
                            <Button className="bg-accent-coral text-white text-lg px-12 py-8 h-auto rounded-xl font-bold hover:bg-accent-coral/90">
                                Book Free 30-Min Consultation
                            </Button>
                        </Link>
                        <p className="mt-8 opacity-40 text-xs uppercase tracking-widest font-bold">
                            Response within 4 hours ● Authorized Auditor Insights
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
