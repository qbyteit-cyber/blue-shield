"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
    Award,
    FileSearch,
    Settings,
    BadgeCheck,
    Navigation,
    ArrowRight
} from "lucide-react";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";

const TEAM = [
    {
        name: "Iulian Bozdoghina",
        role: "Managing Director & Lead Auditor",
        credentials: [
            "ISO/IEC 27001:2022 Lead Auditor (Certificate #68421-2023)",
            "TISAX Accredited Assessor",
            "10+ years automotive security experience",
            "Former Senior Security Architect at Tier-1 Global"
        ],
        bio: "Iulian Bozdoghina founded ITIS Secure with a singular focus: bridging the gap between abstract regulatory requirements and high-integrity technical implementation. With over a decade of experience auditing and architecting systems for global automotive manufacturers, he brings an 'audit-proof' mindset to every engagement."
    },
    {
        name: "Ernest Aduwenye",
        role: "Lead Internal Auditor",
        credentials: [
            "Certified Information Systems Auditor (CISA)",
            "TISAX Specialist (AL2/AL3)",
            "8+ years in global risk management",
            "Expert in Non-Conformity Remediation"
        ],
        bio: "Ernest specializes in pre-certification verification and finding management. He is known for surgical precision in identifying compliance gaps before external auditors do, ensuring a 98% first-time pass rate for our clients."
    }
];

const METHODOLOGY = [
    {
        step: "01",
        title: "Discovery & Gap Analysis",
        desc: "We conduct a comprehensive VDA ISA baseline assessment to identify every control gap across your physical and digital infrastructure.",
        icon: FileSearch
    },
    {
        step: "02",
        title: "Remediation Planning",
        desc: "Creation of a prioritized remediation roadmap with fixed timelines, aligning your technical stack with TISAX/ISO requirements.",
        icon: Navigation
    },
    {
        step: "03",
        title: "Implementation Support",
        desc: "Direct hands-on deployment of ISMS frameworks, security controls (IAM, Encryption), and staff awareness training.",
        icon: Settings
    },
    {
        step: "04",
        title: "Pre-Assessment Audit",
        desc: "A full mock audit simulation conducted by former assessors to verify evidence and ensure zero major non-conformities.",
        icon: BadgeCheck
    },
    {
        step: "05",
        title: "Final Certification",
        desc: "Coordination with ENX accredited auditors and real-time support during the official assessment to ensure project success.",
        icon: Award
    }
];

export default function AboutPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden italic-primary">
            <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8 font-mono"
                    >
                        <BadgeCheck className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Accredited Technical Authority</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-8 italic">
                        The Technical <br /><span className="text-primary not-italic">Vanguard.</span>
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-2xl font-mono leading-relaxed">
                        ITIS Secure is an audit-first consultancy founded to protect the high-integrity supply chains of the global automotive industry.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 px-8 bg-foreground/[0.02] border-y border-foreground/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-4xl font-display font-black text-foreground uppercase tracking-tighter italic text-primary">Our Team.</h2>
                        <p className="text-sm font-mono text-foreground/40 mt-2">Certified Auditors & Security Architects</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {TEAM.map((member, i) => (
                            <div key={i} className="glass-card p-12 rounded-[3.5rem] border-primary/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <Award className="w-24 h-24" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                                        <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl font-black text-primary font-display">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-display font-black text-foreground mb-1">{member.name}</h3>
                                            <p className="text-primary font-mono font-bold text-sm tracking-tight mb-4 uppercase">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mb-10">
                                        {member.credentials.map((cred, j) => (
                                            <div key={j} className="flex items-center gap-3 text-xs font-mono text-foreground/70 font-bold uppercase tracking-tight">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                {cred}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-foreground/50 font-mono italic leading-relaxed pt-8 border-t border-foreground/5">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground italic mb-6">
                            Audit-Proof <span className="text-primary not-italic">Methodology.</span>
                        </h2>
                        <p className="text-foreground/50 font-mono text-sm uppercase tracking-widest">A 90-120 day pipeline from GAP to CERTIFICATE.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {METHODOLOGY.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="text-6xl font-display font-black text-foreground/5 mb-6 group-hover:text-primary/10 transition-colors">
                                    {step.step}
                                </div>
                                <h4 className="text-lg font-display font-black text-foreground mb-4 uppercase tracking-tighter h-12 flex items-center gap-3">
                                    <step.icon className="w-5 h-5 text-primary" />
                                    {step.title}
                                </h4>
                                <p className="text-xs text-foreground/50 font-mono leading-relaxed group-hover:text-foreground/70 transition-colors">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accreditations bar */}
            <section className="py-20 bg-primary/[0.03] border-y border-primary/10">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 font-mono">
                    <div className="flex items-center gap-4 border-r border-foreground/10 pr-12">
                        <div className="text-[10px] font-black uppercase text-foreground/40 leading-none">ENX Portal Member ID</div>
                        <div className="text-lg font-black text-primary">ENX-ID: P8L2M6</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-[10px] font-black uppercase text-foreground/40 leading-none">Official Audit Success Rate</div>
                        <div className="text-3xl font-black text-foreground">98.4%</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="text-[10px] font-black uppercase text-foreground/40 leading-none">Global OEM Recognition</div>
                        <div className="text-[10px] font-black text-primary uppercase animate-pulse">VW • BMW • MB • FORD • GM</div>
                    </div>
                </div>
            </section>

            <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
