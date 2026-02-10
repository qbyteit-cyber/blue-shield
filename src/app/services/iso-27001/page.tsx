"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Shield,
    ArrowRight,
    CheckCircle2,
    Lock,
    RefreshCcw,
    Target,
    Settings,
    Award
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";

const PHASES = [
    {
        title: "PHASE 1: SCOPING & GAP ANALYSIS",
        desc: "Defining the ISMS boundaries and identifying gaps against the 93 controls of Annex A.",
        tasks: ["Asset Inventory", "Risk Assessment Baseline", "Statement of Applicability (SoA)"],
        icon: Target
    },
    {
        title: "PHASE 2: FRAMEWORK IMPLEMENTATION",
        desc: "Developing the technical and organizational measures required for full compliance.",
        tasks: ["Policy Deployment", "Security Control Configuration", "Staff Competence Training"],
        icon: Settings
    },
    {
        title: "PHASE 3: VERIFICATION & AUDIT",
        desc: "Internal audit execution and management review before official certification.",
        tasks: ["Mock Audit", "Evidence Hardening", "Non-Conformity Remediation"],
        icon: Award
    }
];

export default function ISO27001ServicePage() {
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
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Global Security Standard</span>
                    </motion.div>
                    <div className="grid lg:grid-cols-2 gap-20 items-end">
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] italic">
                                ISO/IEC <br /><span className="text-primary not-italic">27001:2022.</span>
                            </h1>
                            <p className="text-xl text-foreground/60 font-mono leading-relaxed max-w-xl">
                                Establishing world-class Information Security Management Systems (ISMS) for high-growth automotive technology firms.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-8 bg-background border border-foreground/10 rounded-3xl text-center">
                                <div className="text-4xl font-black text-primary mb-2">50+</div>
                                <div className="text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest">Global Deployments</div>
                            </div>
                            <div className="p-8 bg-background border border-foreground/10 rounded-3xl text-center">
                                <div className="text-4xl font-black text-primary mb-2">100%</div>
                                <div className="text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest">Audit Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            { title: "Confidentiality", desc: "Ensuring that information is accessible only to those authorized to have access.", icon: Lock },
                            { title: "Integrity", desc: "Safeguarding the accuracy and completeness of information and processing methods.", icon: Shield },
                            { title: "Availability", desc: "Ensuring that authorized users have access to information and associated assets when required.", icon: RefreshCcw }
                        ].map((pillar, i) => (
                            <div key={i} className="glass-card p-10 rounded-[3rem] border-primary/10 hover:border-primary/30 transition-all text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-display font-black text-foreground mb-4 uppercase tracking-tighter">{pillar.title}</h3>
                                <p className="text-sm text-foreground/50 font-mono leading-relaxed italic">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why ISO 27001? */}
            <section className="py-32 px-8 bg-foreground/[0.02] border-y border-foreground/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-black text-foreground uppercase tracking-tighter mb-8 italic text-primary">The Enterprise Gold Standard.</h2>
                        <div className="space-y-6 text-lg text-foreground/70 font-mono leading-relaxed">
                            <p>
                                ISO 27001 is the only internationally recognized auditable standard that defines the requirements of an ISMS.
                            </p>
                            <p>
                                For automotive suppliers, ISO 27001 certification often serves as the foundation for TISAX® readiness, covering over 80% of the core security requirements out of the box.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            "Direct requirement from Tier-1 procurement teams",
                            "Reduced insurance premiums and risk exposure",
                            "Global recognition beyond the automotive industry",
                            "Continuous improvement through the PDCA cycle"
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-4 p-6 bg-background border border-foreground/10 rounded-2xl items-center">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                <span className="font-mono text-sm font-bold text-foreground/80 uppercase">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3-Phase Process */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-display font-black mb-6 italic">Our <span className="text-primary not-italic">Implementation Framework.</span></h2>
                        <p className="text-foreground/50 font-mono text-sm uppercase tracking-widest">A results-oriented path to global accreditation.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {PHASES.map((p, i) => (
                            <div key={i} className="group p-10 bg-foreground/[0.02] border border-foreground/5 rounded-[3rem] hover:border-primary/40 transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <p.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-display font-black text-foreground mb-6 uppercase tracking-tighter leading-tight">{p.title}</h3>
                                <p className="text-sm text-foreground/50 font-mono italic mb-8 leading-relaxed">{p.desc}</p>
                                <ul className="space-y-3">
                                    {p.tasks.map((t, j) => (
                                        <li key={j} className="flex gap-3 items-center text-xs font-mono text-foreground/70 group-hover:text-primary transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-8">
                <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-blueprint opacity-10" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 italic">
                            Build Your <br /><span className="text-secondary not-italic">Security Foundation.</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-12 font-mono max-w-2xl mx-auto italic">
                            Contact our Lead Auditors today for a comprehensive ISO 27001:2022 scoping session.
                        </p>
                        <button
                            onClick={() => setCalculatorOpen(true)}
                            className="px-12 py-6 bg-white text-primary font-black rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto"
                        >
                            SCHEDULE SCOPING SESSION
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
