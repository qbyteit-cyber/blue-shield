"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Lock, FileCheck, Server, Terminal, AlertCircle } from "lucide-react";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";

export default function CmmcServicePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Service Hero */}
                <section className="bg-primary-navy py-24 md:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0F172A] opacity-50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,53,0.1),transparent_40%)]" />

                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-3xl"
                        >
                            <div className="inline-block px-3 py-1 bg-accent-coral/10 text-accent-coral rounded-md text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-accent-coral/20">
                                DoD / NIST / CMMC 2.0
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
                                CMMC 2.0 <br />
                                <span className="text-accent-coral">LEVEL 2 ROADMAP.</span>
                            </h1>
                            <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl">
                                implementation of all 110 NIST SP 800-171 practices for Tier-2 European defence subcontractors. No POA&M allowed for final certification. 100% adherence guaranteed.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/contact">
                                    <Button className="bg-accent-coral text-white px-8 h-14 rounded-none font-bold text-base hover:bg-accent-coral/90">
                                        Start Gap Analysis
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" className="border-white/20 text-white px-8 h-14 rounded-none font-bold text-base hover:bg-white/10">
                                        Download Roadmap
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <CertificationBadgeStrip />

                {/* NIST Implementation Details */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="p-1 rounded-full bg-success-emerald/10 text-success-emerald inline-flex items-center gap-2 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                                    <FileCheck size={14} /> NIST SP 800-171 Rev 3
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter leading-tight">
                                    Advanced Protection of <br /> Controlled Unclassified Information.
                                </h2>
                                <p className="text-lg text-neutral-600 leading-relaxed">
                                    Every organization in the DoD supply chain must demonstrate adherence to NIST SP 800-171. For European suppliers, this means implementing rigorous technical controls—from Multi-Factor Authentication (MFA) to FIPS-validated encryption—or facing contract disqualification.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "SSP (System Security Plan) Development",
                                        "POA&M (Plan of Action & Milestones) Management",
                                        "Evidence Documentation for C3PAO",
                                        "Incident Response & Backup Strategy"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-primary-navy font-bold">
                                            <div className="w-6 h-px bg-accent-coral" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-neutral-900 rounded-[2rem] p-10 text-white relative overflow-hidden group">
                                <Terminal className="absolute -bottom-10 -right-10 text-white opacity-5 group-hover:scale-110 transition-transform" size={300} />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/10">
                                        <Shield className="text-accent-coral" size={40} />
                                        <div>
                                            <div className="text-xs uppercase tracking-widest font-bold opacity-40">Classification</div>
                                            <div className="text-xl font-bold tracking-tight">Mission Critical Assets</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-8">
                                        <div className="flex gap-6">
                                            <div className="h-10 w-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                                                <Lock className="text-accent-coral" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-2">Access Control</h4>
                                                <p className="text-xs text-neutral-500 leading-relaxed">Implementation of 22 NIST practices for identity management and session control.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="h-10 w-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                                                <Server className="text-accent-coral" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-2">System Integrity</h4>
                                                <p className="text-xs text-neutral-500 leading-relaxed">Malware protection, log management, and configuration baseline enforcement.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 p-6 bg-accent-coral/10 border border-accent-coral/20 rounded-xl">
                                        <p className="text-[10px] uppercase font-black text-accent-coral tracking-[0.2em] mb-2">Alert: Compliance Deadline</p>
                                        <p className="text-sm font-medium opacity-80 leading-snug">CMMC 2.0 final rule is expected to be appearing in contracts by mid-2025. Preparation requires 12 months for mature baseline.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Risk reframe CTA */}
                <section className="py-24 bg-neutral-50 border-y border-neutral-100">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <AlertCircle className="mx-auto text-primary-navy mb-6" size={48} />
                        <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-8">
                            Don't let a missing SSP derail your programme.
                        </h2>
                        <p className="text-xl text-neutral-600 mb-12">
                            We prepare Tier-2 and Tier-3 subcontractors to meet DoD requirements without derailing production schedules.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-primary-navy text-white px-12 h-16 rounded-none font-bold text-lg hover:bg-primary-navy/90">
                                Book Your CMMC Strategy Consultation
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Synergy Quote */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="bg-primary-navy rounded-3xl p-12 md:p-20 text-white relative">
                            <div className="absolute top-0 right-0 p-12 opacity-5 hidden lg:block">
                                <Shield size={400} strokeWidth={1} />
                            </div>
                            <div className="max-w-2xl relative z-10">
                                <h3 className="text-2xl font-bold text-accent-coral mb-6 uppercase tracking-widest">The Multi-Compliance Advantage</h3>
                                <p className="text-3xl md:text-4xl font-black tracking-tight mb-8 leading-tight italic">
                                    "Companies complying with NIS2 in Europe can leverage those controls to meet ~60% of CMMC Level 2 requirements."
                                </p>
                                <div className="h-1 w-20 bg-accent-coral mb-8" />
                                <p className="text-white/60 leading-relaxed">
                                    We build integrated frameworks that satisfy both European and US regulations, reducing your operational overhead and audit fatigue.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
