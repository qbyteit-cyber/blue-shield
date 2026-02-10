"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import {
    Users,
    Target,
    ShieldCheck,
    Cpu,
    BarChart3,
    Zap,
    ShieldAlert,
    CheckCircle2,
    Briefcase,
    Globe,
    Scale,
    ArrowRight
} from "lucide-react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const OutsourcingSecurityRoles = () => {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    const comparisonData = [
        { feature: "Annual Cost", inHouse: "$150k - $250k+ (Salary + Benefits)", outsourced: "Fractional / Subscription based" },
        { feature: "Scalability", inHouse: "Static (Limited by headcount)", outsourced: "Elastic (Instant scale up/down)" },
        { feature: "Specialization", inHouse: "Generalist (Jack-of-all-trades)", outsourced: "Deep Domain Experts (vCISO, SOC, PT)" },
        { feature: "Tooling & Tech", inHouse: "Heavy CAPEX / Licensing costs", outsourced: "Included in service (OPEX)" },
        { feature: "Coverage", inHouse: "Business hours (Internal silos)", outsourced: "24/7/365 Global monitoring" }
    ];

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero section */}
                <section className="px-8 pt-60 pb-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                                <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
                                    Executive Strategy
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-tight">
                                Strategic <span className="text-primary italic">Cyber-Resilience:</span><br />
                                The Guide to Outsourcing Security Roles
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* Executive Summary */}
                <section className="py-24 px-8 border-y border-foreground/5 bg-foreground/[0.01]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-display font-black mb-8">Executive Summary</h2>
                            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
                                In the face of an increasingly volatile digital landscape, the traditional model of maintaining a full-scale, in-house security department is becoming a strategic liability for many enterprises.
                            </p>
                            <p className="text-foreground/60 leading-relaxed">
                                Modern organizations are rapidly transitioning toward <strong>fractional and outsourced security models</strong>. This shift is driven by the widening global cybersecurity talent gap and the need for agility. By leveraging external technical authority, businesses can convert fixed personnel costs into elastic operational expenses while gaining access to specialized skill sets that are otherwise impossible to retain internally.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-8 glass-card border-none bg-primary/5 rounded-3xl">
                                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                                <h4 className="font-black mb-2">Efficiency</h4>
                                <p className="text-xs text-foreground/50">Reduced overhead and management complexity.</p>
                            </div>
                            <div className="p-8 glass-card border-none bg-foreground/[0.03] rounded-3xl">
                                <Globe className="w-10 h-10 text-foreground/40 mb-4" />
                                <h4 className="font-black mb-2">Global Scale</h4>
                                <p className="text-xs text-foreground/50">Follow-the-sun monitoring and response.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategic Why */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20">
                            <h2 className="text-5xl font-display font-black tracking-tighter mb-6">The Strategic "Why"</h2>
                            <p className="text-foreground/50 max-w-2xl text-lg">Why outsourcing isn't just about cost—it's about building a superior defense posture.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black">01</div>
                                <h3 className="text-2xl font-black">Cost Optimization</h3>
                                <p className="text-foreground/60 leading-relaxed">Transform massive CAPEX investments in hardware and heavy salary burdens into manageable, predictable OPEX. Only pay for the security maturity you actually need.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black">02</div>
                                <h3 className="text-2xl font-black">Elite Talent Access</h3>
                                <p className="text-foreground/60 leading-relaxed">Bypass the expensive recruitment cycle. Gain instant access to a collaborative brain-trust of auditors, architects, and forensic experts who have likely solved your specific challenges before.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black">03</div>
                                <h3 className="text-2xl font-black">24/7/365 Coverage</h3>
                                <p className="text-foreground/60 leading-relaxed">Threat actors don't take weekends off. Our outsourced models provide continuous vigilance, ensuring that detection and neutralization happen in minutes, not days.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Roles */}
                <section className="py-32 px-8 bg-surface">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-display font-black mb-16 border-l-4 border-primary pl-8">Core Outsourced Security Roles</h2>

                        <div className="space-y-8">
                            {/* vCISO */}
                            <motion.div
                                whileHover={{ x: 20 }}
                                className="p-12 glass-card border-none bg-background rounded-[3rem] flex flex-col lg:flex-row gap-12 items-start"
                            >
                                <div className="w-20 h-20 shrink-0 bg-primary/5 rounded-3xl flex items-center justify-center">
                                    <Briefcase className="w-10 h-10 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black mb-4">vCISO (Virtual Chief Information Security Officer)</h3>
                                    <p className="text-foreground/60 mb-6 text-lg">Strategic governance for enterprises that require executive-level leadership without the multi-six-figure salary. A vCISO aligns security with business objectives, manages risk registers, and leads compliance audits (TISAX, ISO 27001).</p>
                                    <div className="flex flex-wrap gap-4">
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">Governance</span>
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">Budget Management</span>
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">Regulatory Roadmap</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* SOC */}
                            <motion.div
                                whileHover={{ x: 20 }}
                                className="p-12 glass-card border-none bg-background rounded-[3rem] flex flex-col lg:flex-row gap-12 items-start"
                            >
                                <div className="w-20 h-20 shrink-0 bg-primary/5 rounded-3xl flex items-center justify-center">
                                    <ShieldAlert className="w-10 h-10 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black mb-4">SOC Analysts (Tiers 1-3)</h3>
                                    <p className="text-foreground/60 mb-6 text-lg">The frontline defense. Our outsourced SOC provides real-time traffic analysis, incident detection, and proactive threat hunting. Tier 3 analysts provide deep forensics for complex, persistent threats that evade automated tools.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">Continuous Vigilance</span>
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">Incident Response</span>
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">SIEM Management</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pentest */}
                            <motion.div
                                whileHover={{ x: 20 }}
                                className="p-12 glass-card border-none bg-background rounded-[3rem] flex flex-col lg:flex-row gap-12 items-start"
                            >
                                <div className="w-20 h-20 shrink-0 bg-primary/5 rounded-3xl flex items-center justify-center">
                                    <Target className="w-10 h-10 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black mb-4">On-Demand Penetration Testers</h3>
                                    <p className="text-foreground/60 mb-6 text-lg">Hacking your own systems before the criminals do. Our testers simulate real-world attacks to identify vulnerabilities in your network, APIs, and workforce, providing a prioritization matrix for remediation.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">Vulnerability Assessment</span>
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">Red Teaming</span>
                                        <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-xs font-mono">Social Engineering</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-display font-black mb-4">Comparison Matrix</h2>
                            <p className="text-foreground/50">Performance & Efficiency: In-house vs. Outsourced</p>
                        </div>

                        <div className="overflow-hidden rounded-3xl glass-card border-none">
                            <table className="w-full text-left">
                                <thead className="bg-primary/10 border-b border-foreground/5">
                                    <tr>
                                        <th className="p-8 text-sm font-black uppercase tracking-widest">Performance Feature</th>
                                        <th className="p-8 text-sm font-black uppercase tracking-widest text-foreground/40 text-center">In-House Model</th>
                                        <th className="p-8 text-sm font-black uppercase tracking-widest text-primary text-center">Outsourced Model</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-foreground/5">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-foreground/[0.02] transition-colors">
                                            <td className="p-8 font-bold">{row.feature}</td>
                                            <td className="p-8 text-foreground/50 text-center border-x border-foreground/5">{row.inHouse}</td>
                                            <td className="p-8 text-foreground text-center font-medium bg-primary/[0.02]">{row.outsourced}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Implementation Roadmap */}
                <section className="py-32 px-8 bg-surface">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="flex-1">
                                <h2 className="text-5xl font-display font-black tracking-tighter mb-8 italic">Transition Roadmap</h2>
                                <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                                    Moving from zero-security or high-cost internal teams to an outsourced model requires a surgical approach to avoid disruption.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { s: "Discovery & Audit", d: "Baselining existing assets and compliance gaps." },
                                        { s: "Role Definition", d: "Specifying the tier of SOC and vCISO presence required." },
                                        { s: "Integration", d: "Seamless telemetry hookups to our surveillance ecosystem." },
                                        { s: "Full Authority", d: "ITIS Secure takes accountability for your cyber-resilience." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-background/50 border border-foreground/5 italic">
                                            <span className="text-primary font-black">0{i + 1}</span>
                                            <div>
                                                <h4 className="font-bold text-foreground">{step.s}</h4>
                                                <p className="text-xs text-foreground/40">{step.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 glass-card border-none p-16 rounded-[4rem] bg-primary relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                <h3 className="text-4xl font-display font-black text-white mb-8">Ready for Expert Integration?</h3>
                                <p className="text-white/80 mb-12">Don't wait for an exploit to prove you need a specialized team. Let's discuss your fractional security requirements today.</p>
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="w-full py-6 bg-white text-primary font-black rounded-3xl text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-4"
                                >
                                    GET STARTED
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
};

export default OutsourcingSecurityRoles;
