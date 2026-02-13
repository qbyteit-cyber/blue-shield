"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Globe, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";

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
                                <span className="bg-accent-coral/20 px-3 py-1 rounded text-accent-coral text-[10px]">ITAR / NATO / CUI</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
                                CMMC 2.0 READINESS <br />
                                <span className="text-neutral-400">FOR EUROPEAN DEFENCE.</span>
                            </h1>
                            <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl font-medium">
                                Bridge the Gap to NIST 800-171. We help Tier-2 and Tier-3 subcontractors secure DoD and NATO contracts with surgical precision and engineering depth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" className="px-8 h-14 text-base rounded-none bg-accent-coral hover:bg-accent-coral/90">
                                    Book CMMC Consultation
                                </Button>
                                <Button variant="outline" size="lg" className="px-8 h-14 text-base rounded-none border-white/20 text-white hover:bg-white/10">
                                    NIST 800-171 Matrix
                                </Button>
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
                                    The New Standard of Defence Compliance
                                </h2>
                                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                    In global defence, compliance is a matter of National Security. For European suppliers to giants like Lockheed Martin or Airbus, implementing the 110 rigorous technical controls of **CMMC Level 2** is now a mandatory license to operate.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "CUI Protection", desc: "Advanced protection of Controlled Unclassified Information." },
                                        { title: "NIST SP 800-171", desc: "Rev 3 implementation with 100% adherence target." },
                                        { title: "NIS2 Alignment", desc: "Meeting EU requirements for critical defence entities." },
                                        { title: "Airworthiness", desc: "Specialized security for aerospace components." }
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
                                        "Compliance is no longer a checklist—it's your license to operate in the €300B NATO defence market."
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
                                    RPO Ready ● C3PAO Preparation ● NATO STANAG
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
                                    title: "CMMC Level 2 Prep",
                                    desc: "Gap analysis, SSP development, and POA&M management for DoD subs.",
                                    icon: Lock
                                },
                                {
                                    title: "DO-326A / ED-202A",
                                    desc: "Security assurance for aircraft airworthiness and avionics.",
                                    icon: Zap
                                },
                                {
                                    title: "NATO Alignment",
                                    desc: "Handling sensitive information according to Alliance standards.",
                                    icon: Globe
                                },
                                {
                                    title: "ITAR Strategy",
                                    desc: "Assistance with export control and dual-use technology data security.",
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
                            Don't let a missing System Security Plan (SSP) or a single failed NIST control derail your programme. We speak 'avionics' and 'network architecture' as fluently as we speak 'policy'.
                        </p>
                        <div className="bg-white p-1 rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                {[
                                    { kpi: "110", label: "NIST Controls" },
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
                        <Button className="bg-accent-coral text-white hover:bg-accent-coral/90 text-lg px-12 py-8 h-auto rounded-none font-bold">
                            Book Gap Analysis Consultation
                        </Button>
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
