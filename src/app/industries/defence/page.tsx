"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Globe, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";
import Link from "next/link";

export default function DefenceIndustryPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Subpage Hero */}
                <section className="relative bg-[#0F172A] py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#FF6B35,transparent_60%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]" />
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_25%,transparent_25%,transparent_50%,#ffffff05_50%,#ffffff05_75%,transparent_75%,transparent)] bg-[size:4px_4px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-3xl"
                        >
                            <div className="flex items-center gap-3 text-accent-coral font-bold text-sm tracking-[0.2em] uppercase mb-6">
                                <span className="bg-accent-coral/20 px-3 py-1 rounded text-accent-coral text-[10px]">AI GOVERNANCE / NATO / ITAR</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
                                AI TRUST IN <br />
                                <span className="text-neutral-400">EUROPEAN DEFENCE.</span>
                            </h1>
                            <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl font-medium">
                                Manage AI risk, safety, and ethical transparency. We help Tier-2 and Tier-3 subcontractors secure DoD and NATO autonomous systems contracts with surgical precision and engineering depth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button variant="primary" size="lg" className="px-8 h-14 text-base rounded-none bg-accent-coral hover:bg-accent-coral/90 w-full sm:w-auto">
                                        Book ISO 42001 Consultation
                                    </Button>
                                </Link>
                                <Link href="/services/iso-42001">
                                    <Button variant="outline" size="lg" className="px-8 h-14 text-base rounded-none border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                                        ISO 42001 Annex Controls
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <CertificationBadgeStrip />

                {/* Strategic Importance */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                            <div className="flex flex-col justify-center">
                                <div className="inline-block px-4 py-1.5 bg-neutral-100 text-neutral-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                                    Mission Critical
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-8 leading-tight">
                                    The New Standard of AI Defence Compliance
                                </h2>
                                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                    In global defence, AI governance is a matter of National Security. For European suppliers to giants like Lockheed Martin or Airbus, implementing the rigorous technical controls of **ISO/IEC 42001:2023** is now a mandatory license to operate autonomous systems.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "AI Model Integrity", desc: "Advanced protection of training data and algorithm logic." },
                                        { title: "ISO 42001 Annex A/B Controls", desc: "Implementation of AI-specific risk and impact controls with 100% adherence target." },
                                        { title: "AI Trust & Transparency", desc: "Meeting EU/NATO requirements for ethical and safe autonomous systems." },
                                        { title: "Airworthiness", desc: "Specialized safety for AI-driven aerospace components." }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-4">
                                            <CheckCircle className="text-success-emerald shrink-0 mt-1" size={18} />
                                            <div>
                                                <div className="font-bold text-primary-navy text-sm">{feat.title}</div>
                                                <div className="text-xs text-neutral-500 leading-tight">{feat.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-primary-navy rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Globe size={300} strokeWidth={1} />
                                </div>
                                <div className="relative z-10">
                                    <Shield className="text-accent-coral mb-8" size={60} />
                                    <blockquote className="text-2xl font-bold leading-tight mb-8">
                                        "AI Governance is no longer a checklist. It's your license to operate in the €300B NATO defence market."
                                    </blockquote>
                                    <div className="h-px w-full bg-white/10 mb-8" />
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="opacity-60">Success Probability</span>
                                            <span className="text-success-emerald font-bold">100%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-success-emerald" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
                                    AIIA Ready ● ISO 42001 Preparation ● NATO STANAG
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Defence Service Suite */}
                <section className="py-24 bg-neutral-900 text-white border-y border-white/5">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "ISO 42001 Gap Analysis & AIIA",
                                    desc: "AI Impact Assessment, management system development, and risk mitigation for DoD subs.",
                                    icon: Lock
                                },
                                {
                                    title: "DO-326A / ED-202A",
                                    desc: "Security assurance for AI-driven aircraft airworthiness and avionics.",
                                    icon: Zap
                                },
                                {
                                    title: "NATO Alignment",
                                    desc: "Handling sensitive AI models according to Alliance standards.",
                                    icon: Globe
                                },
                                {
                                    title: "ITAR Strategy",
                                    desc: "Assistance with export control and dual-use AI technology data security.",
                                    icon: Shield
                                }
                            ].map((service, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="h-1 bg-white/10 w-full mb-8 group-hover:bg-accent-coral transition-colors" />
                                    <service.icon className="text-white mb-6 opacity-40 group-hover:opacity-100 group-hover:text-accent-coral transition-all" size={32} />
                                    <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Risk Reframe Section */}
                <section className="py-24 bg-[#F8FAFC]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-8">
                            The Cost of Disqualification
                        </h2>
                        <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                            Don't let a missing AI Impact Assessment (AIIA) or a single failed ISO 42001 control derail your autonomous systems programme. We speak 'avionics', 'machine learning', and 'model integrity' as fluently as we speak 'policy'.
                        </p>
                        <div className="bg-white p-1 rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                {[
                                    { kpi: "38+", label: "ISO 42001 Controls" },
                                    { kpi: "100%", label: "Confidence" },
                                    { kpi: "0", label: "Non-Conformities" }
                                ].map((item, i) => (
                                    <div key={i} className="p-10 border-b md:border-b-0 md:border-r last:border-0 border-neutral-100">
                                        <div className="text-4xl font-black text-primary-navy mb-2">{item.kpi}</div>
                                        <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-primary-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent-coral/5 pointer-events-none" />
                    <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                            Secure Your Contract in the <br /> €300B NATO Defence Market
                        </h2>
                        <Link href="/contact">
                            <Button className="bg-accent-coral text-white hover:bg-accent-coral/90 text-lg px-12 py-8 h-auto rounded-none font-bold">
                                Book Gap Analysis Consultation
                            </Button>
                        </Link>
                        <p className="mt-8 text-neutral-500 text-sm font-medium">
                            Response within 4 hours. ITAR compliant data handling.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
