"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight, FileText, Search, Activity, HeartPulse } from "lucide-react";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";

export default function TisaxServicePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Service Hero */}
                <section className="bg-neutral-50 border-b border-neutral-100 py-24 md:py-32">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-navy/5 text-primary-navy rounded text-[10px] font-bold uppercase tracking-widest mb-6">
                                    <Shield size={12} />
                                    TISAX® Readiness
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter mb-8 leading-[0.95]">
                                    Complete Preparation for <br />
                                    <span className="text-accent-coral">ENX Accreditation.</span>
                                </h1>
                                <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-xl">
                                    95-day roadmap to TISAX® Assessment Level 2 & 3. We implement the VDA ISA 5.0 controls and manage your entire ENX portal registration.
                                </p>
                                <div className="flex gap-4">
                                    <Button variant="primary" size="lg" className="px-8 bg-primary-navy">
                                        Get Started
                                    </Button>
                                    <Button variant="outline" size="lg" className="px-8">
                                        View Roadmap
                                    </Button>
                                </div>
                            </motion.div>
                            <div className="relative">
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-100 relative z-10">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between pb-6 border-b border-neutral-50 text-sm font-bold text-neutral-400">
                                            <span>COMPLIANCE MONITOR</span>
                                            <span className="text-success-emerald">ACTIVE</span>
                                        </div>
                                        {[
                                            { label: "VDA ISA 5.0 Mapping", progress: 100 },
                                            { label: "Evidence Collection", progress: 100 },
                                            { label: "Internal Audit Status", progress: 95 },
                                            { label: "ENX Scoping", progress: 100 }
                                        ].map((item, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-xs font-bold text-primary-navy uppercase">
                                                    <span>{item.label}</span>
                                                    <span>{item.progress}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${item.progress}%` }}
                                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                        className="h-full bg-primary-navy"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-coral/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-navy/5 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </section>

                <CertificationBadgeStrip />

                {/* The Roadmap */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-6">
                                The TISAX® Excellence Journey
                            </h2>
                            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
                                From initial portal registration to the final ENX label, we manage every technical and policy requirement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-100 hidden md:block -translate-y-1/2" />
                            {[
                                { step: "01", title: "Portal & Scoping", icon: FileText, desc: "Registration on the ENX portal and site-level scope optimization." },
                                { step: "02", title: "Gap Assessment", icon: Search, desc: "Mapping current ISMS against the 140+ VDA ISA 5.0 controls." },
                                { step: "03", title: "Remediation", icon: Activity, desc: "Build-out of policies, physical security, and tech controls." },
                                { step: "04", title: "Final Audit", icon: CheckCircle2, desc: "Coordination with the audit body and 100% pass guarantee." }
                            ].map((item, i) => (
                                <div key={i} className="relative bg-neutral-50 p-8 pt-12 border border-neutral-100 rounded-3xl group hover:bg-primary-navy hover:text-white transition-all duration-300">
                                    <div className="absolute -top-4 left-8 bg-white group-hover:bg-accent-coral group-hover:text-white text-primary-navy font-black text-xs p-3 rounded-lg border border-neutral-100 shadow-sm transition-colors">
                                        STEP {item.step}
                                    </div>
                                    <item.icon className="text-accent-coral mb-6" size={32} />
                                    <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                                    <p className="text-sm opacity-60 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Content Blocks */}
                <section className="py-24 bg-primary-navy text-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-black mb-6 text-accent-coral">TISAX® AL2 vs AL3 Readiness</h3>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        Selection of the correct Assessment Level is critical for cost-optimization. AL3 involves mandatory on-site audits and high-rigor physical security controls for 'Secret' information and prototype protection.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 text-sm">
                                            <CheckCircle2 className="text-success-emerald shrink-0" size={18} />
                                            <span>On-site audit preparation and coordination.</span>
                                        </li>
                                        <li className="flex gap-3 text-sm">
                                            <CheckCircle2 className="text-success-emerald shrink-0" size={18} />
                                            <span>Prototype protection control implementation.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                                    <HeartPulse className="text-accent-coral mb-4" size={32} />
                                    <h4 className="text-lg font-bold mb-4">Integrated Management Systems (IMS)</h4>
                                    <p className="text-xs text-white/40 leading-relaxed">
                                        While TISAX is based on ISO 27001, it has specific automotive requirements. We build an Integrated Management System (IMS) that satisfies both with 80% overlapping effort.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-3xl p-10 text-primary-navy">
                                <h3 className="text-3xl font-black mb-8 tracking-tighter">Emergency 95-Day Roadmap</h3>
                                <p className="text-neutral-500 mb-8 leading-relaxed">
                                    Facing an immediate OEM audit deadline? Our prioritised implementation path focuses on high-impact controls that auditors scrutinize first.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { label: "Policy Framework", time: "Day 1-15" },
                                        { label: "Technical Hardening", time: "Day 16-45" },
                                        { label: "Evidence Packaging", time: "Day 46-75" },
                                        { label: "Mock Audit", time: "Day 76-95" }
                                    ].map((milestone, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                                            <span className="font-bold text-sm tracking-tight">{milestone.label}</span>
                                            <span className="text-[10px] font-black uppercase text-accent-coral tracking-widest">{milestone.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-white border-t border-neutral-100">
                    <div className="container mx-auto px-6 max-w-7xl text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-primary-navy tracking-tighter mb-8">
                            Ready for Your ENX Label?
                        </h2>
                        <p className="text-xl text-neutral-500 mb-12 max-w-2xl mx-auto">
                            Don't gamble with your next rotation of OEM contracts. Get the audit-ready expertise you need today.
                        </p>
                        <Button className="bg-accent-coral text-white hover:bg-accent-coral/90 text-lg px-12 py-8 h-auto rounded-xl">
                            Request Quote for TISAX® Prep
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
