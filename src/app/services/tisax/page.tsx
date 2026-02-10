"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    CheckCircle2,
    ArrowRight,
    Car,
    Target,
    Lock,
    Settings,
    BadgeCheck,
    Award
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";

const PROCESS = [
    {
        phase: "PHASE 1: READINESS ASSESSMENT (2 weeks)",
        tasks: [
            "Current state analysis & ENX Portal registration support",
            "VDA ISA 5.0 control gap identification",
            "Effort and timeline estimation (Remediation Roadmap)",
            "Executive readiness briefing for C-level buy-in"
        ],
        icon: Target
    },
    {
        phase: "PHASE 2: GAP REMEDIATION (6-8 weeks)",
        tasks: [
            "ISMS framework implementation (Policies & Procedures)",
            "Technical control deployment (Encryption, IAM, SIEM)",
            "Staff security awareness training programs",
            "Evidence documentation collection and library building"
        ],
        icon: Settings
    },
    {
        phase: "PHASE 3: PRE-AUDIT (1 week)",
        tasks: [
            "Internal mock assessment with former accredited auditors",
            "Non-conformity resolution & documentation hardening",
            "Management review and technical verification",
            "Final audit readiness confirmation & scheduling"
        ],
        icon: BadgeCheck
    },
    {
        phase: "PHASE 4: OFFICIAL ASSESSMENT (1 week)",
        tasks: [
            "Coordination with ENX accredited third-party assessor",
            "Technical site-audit support and real-time issue resolution",
            "Managing result publication on ENX Exchange",
            "Ensuring label issuance without major gaps"
        ],
        icon: Award
    }
];

const ASSESSMENT_LEVELS = [
    {
        level: "AL1",
        title: "Self Assessment",
        desc: "Documentation only. Used for internal baseline or low-protection needs within specific OEM supply chains.",
        protection: "Standard",
        audit: "No official audit"
    },
    {
        level: "AL2",
        title: "Document Review",
        desc: "Remote audit with evidence verification. Standard for most Tier-1/Tier-2 suppliers with high protection needs.",
        protection: "High",
        audit: "Plausibility Check"
    },
    {
        level: "AL3",
        title: "Enhanced Assessment",
        desc: "On-site audit with deep verification. Mandatory for Prototype Protection and very high protection needs.",
        protection: "Very High",
        audit: "On-site Audit"
    }
];



export default function TisaxServicePage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-8 relative border-b border-foreground/5 bg-foreground/[0.01]">
                <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8 font-mono"
                    >
                        <Car className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Automotive Standard VDA ISA</span>
                    </motion.div>
                    <div className="grid lg:grid-cols-2 gap-20 items-end">
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] italic">
                                TISAX® <br /><span className="text-primary not-italic">Assessment.</span>
                            </h1>
                            <p className="text-xl text-foreground/60 font-mono leading-relaxed max-w-xl">
                                We help Tier-1 and Tier-2 automotive suppliers achieve AL2 and AL3 labels to secure contracts with BMW, Volkswagen, and Mercedes-Benz.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-8 bg-background border border-foreground/10 rounded-3xl">
                                <div className="text-4xl font-black text-primary mb-2">98%</div>
                                <div className="text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest">First-Time Pass Rate</div>
                            </div>
                            <div className="p-8 bg-background border border-foreground/10 rounded-3xl">
                                <div className="text-4xl font-black text-primary mb-2">95d</div>
                                <div className="text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest">Average Completion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What & Who */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl font-display font-black text-foreground uppercase tracking-tighter mb-8 italic text-primary">What is TISAX®?</h2>
                        <div className="space-y-6 text-lg text-foreground/70 font-mono leading-relaxed italic">
                            <p>
                                TISAX® (Trusted Information Security Assessment Exchange) is the cross-company assessment mechanism for information security in the automotive industry. It is based on the VDA ISA requirements catalog.
                            </p>
                            <p>
                                Successfully completing a TISAX® assessment and publishing your results on the ENX Exchange is a mandatory requirement for any supplier handling sensitive data for German OEMs.
                            </p>
                        </div>
                    </div>
                    <div className="glass-card p-12 rounded-[3rem] border-primary/10">
                        <h3 className="text-xl font-display font-black text-foreground mb-8 uppercase tracking-tighter">Who Needs It?</h3>
                        <ul className="space-y-4">
                            {[
                                "Automotive OEM suppliers (VW, BMW, Mercedes, Audi, Porsche)",
                                "Tier-1 and Tier-2 manufacturers",
                                "Technology providers to the automotive industry",
                                "Logistics partners handling sensitive PII or prototypes"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start text-sm text-foreground/60 font-mono">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Assessment Levels */}
            <section className="py-32 px-8 bg-foreground/[0.02] border-y border-foreground/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-display font-black text-foreground text-center mb-20 uppercase tracking-tighter italic">Required <span className="text-primary not-italic">Protection Levels.</span></h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {ASSESSMENT_LEVELS.map((al) => (
                            <div key={al.level} className={`p-10 rounded-[2.5rem] border ${al.level === 'AL3' ? 'border-primary bg-primary/5' : 'border-foreground/10 bg-background'} transition-all`}>
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`text-3xl font-black font-display ${al.level === 'AL3' ? 'text-primary' : 'text-foreground/40'}`}>{al.level}</div>
                                    <div className="text-[10px] font-black font-mono px-3 py-1 bg-foreground/5 rounded-lg border border-foreground/10 uppercase tracking-widest">{al.protection} Needs</div>
                                </div>
                                <h3 className="text-2xl font-display font-black mb-4 uppercase">{al.title}</h3>
                                <p className="text-sm text-foreground/50 font-mono italic leading-relaxed mb-10">{al.desc}</p>
                                <div className="pt-6 border-t border-foreground/5 flex items-center justify-between">
                                    <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest">Audit Type</span>
                                    <span className="text-xs font-bold font-mono text-primary uppercase">{al.audit}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-display font-black mb-6">Our <span className="text-primary">TISAX® Methodology.</span></h2>
                        <p className="text-foreground/50 font-mono text-sm uppercase tracking-widest">A proven 4-phase transformation from gap to label.</p>
                    </div>

                    <div className="space-y-8">
                        {PROCESS.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="group grid lg:grid-cols-6 gap-12 items-center p-12 bg-foreground/[0.02] border border-foreground/5 rounded-[3rem] hover:border-primary/30 transition-all"
                            >
                                <div className="lg:col-span-2">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                        <p.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-display font-black text-foreground uppercase tracking-tighter leading-tight">
                                        {p.phase}
                                    </h3>
                                </div>
                                <div className="lg:col-span-4">
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {p.tasks.map((t, j) => (
                                            <li key={j} className="flex gap-4 items-start text-xs text-foreground/60 font-mono leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables & Investment */}
            <section className="py-32 px-8 bg-surface/30">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                    <div className="glass-card p-12 md:p-16 rounded-[4rem] border-primary/20">
                        <h3 className="text-3xl font-display font-black text-foreground mb-12 uppercase tracking-tighter italic text-primary">Standard Deliverables.</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Complete ISMS documentation suite",
                                "VDA ISA control evidence library",
                                "Staff training materials",
                                "Audit-ready information security program",
                                "12-month post-certification support",
                                "Technical vulnerability reports"
                            ].map((d, i) => (
                                <div key={i} className="flex gap-3 items-start text-sm font-mono text-foreground/70 mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                    {d}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-12 md:p-16 bg-primary rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blueprint opacity-10" />
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-3xl font-display font-black text-white mb-8 uppercase tracking-tighter italic">Investment Options.</h3>
                                <p className="text-white/70 font-mono text-sm leading-relaxed mb-12 italic">
                                    Transparent pricing based on Assessment Level and organization size. No scope creep, no surprises.
                                </p>
                                <div className="space-y-6 mb-12">
                                    <div className="flex justify-between items-end border-b border-white/20 pb-4">
                                        <div className="text-white/60 text-xs font-mono uppercase font-black uppercase tracking-widest">AL2 Assessment Readiness</div>
                                        <div className="text-2xl font-black text-white italic">From €12,500</div>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/20 pb-4">
                                        <div className="text-white/60 text-xs font-mono uppercase font-black uppercase tracking-widest">AL3 Deep-Dive Readiness</div>
                                        <div className="text-2xl font-black text-white italic">From €18,000</div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-6 bg-white text-primary font-black rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4">
                                REQUEST DETAILED PROPOSAL
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics & Success */}
            <section className="py-24 border-y border-foreground/5 bg-background">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <div className="text-4xl font-display font-black text-primary mb-2">98%</div>
                            <div className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">First-Time Pass Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-black text-primary mb-2">95d</div>
                            <div className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Average Completion</div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-black text-primary mb-2">0</div>
                            <div className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Major Non-Conformities</div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-black text-primary mb-2">26+</div>
                            <div className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Labs Managed</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
