"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
    Shield,
    FileText,
    BarChart3,
    RefreshCcw,
    ChevronRight,
    CheckCircle2,
    Globe,
    Monitor,
    Lock,
    Users,
    Activity,
    Database,
    ArrowRightLeft,
    LayoutDashboard
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";
import { TeamGrid } from "@/components/ui/TeamGrid";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const PDCA_STAGES = [
    {
        id: "plan",
        label: "PLAN",
        title: "Establish ISMS",
        icon: FileText,
        color: "text-blue-500",
        details: [
            "Gap analysis & requirements analysis",
            "Defining ISMS scope & boundaries",
            "Policy & objective setting",
            "Initial information risk assessment"
        ]
    },
    {
        id: "do",
        label: "DO",
        title: "Operate & Implement",
        icon: Activity,
        color: "text-emerald-500",
        details: [
            "Support during RFP requirements analysis",
            "Vendor Risk Assessments (BIA)",
            "Risk Treatment Plans (Risk ID cards)",
            "Deployment of technical & organizational controls"
        ]
    },
    {
        id: "check",
        label: "CHECK",
        title: "Monitor & Review",
        icon: Monitor,
        color: "text-amber-500",
        details: [
            "Performance monitoring & metrics",
            "Organizing management reviews",
            "Internal audit execution",
            "Managing external certification audits"
        ]
    },
    {
        id: "act",
        label: "ACT",
        title: "Improve ISMS",
        icon: RefreshCcw,
        color: "text-rose-500",
        details: [
            "Implementing corrective & preventive actions",
            "Reviewing privacy law compliance",
            "Standard & framework updates",
            "Continuous security maturity optimization"
        ]
    }
];

const ANNEX_A_CONTROLS = [
    { id: "A5", area: "Information Security Policy", focus: "Management direction and support for information security." },
    { id: "A8", area: "Asset Management", focus: "Identify organizational assets and define appropriate protection levels." },
    { id: "A9", area: "Access Control", focus: "Limit access to information and processing facilities to authorized users." },
    { id: "A10", area: "Cryptography", focus: "Ensure proper and effective use of cryptography to protect CIA." },
    { id: "A11", area: "Physical Security", focus: "Prevent unauthorized physical access, damage and interference." },
];

const LOCATIONS = [
    { city: "München", projects: 11, status: "Active" },
    { city: "Stuttgart", projects: 4, status: "Active" },
    { city: "Pune", projects: 2, status: "Active" },
    { city: "Detroit", projects: 3, status: "Planning" },
    { city: "Berlin", projects: 5, status: "Active" },
];


export default function ISO27001Page() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [activeStage, setActiveStage] = useState(0);
    const [showAnnex, setShowAnnex] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-white">
            {/* 3D Background - Very subtle for technical feel */}
            <div className="fixed inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section - Technical Header Style */}
                <section className="relative pt-60 pb-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 items-end">
                            <div className="lg:col-span-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8 font-mono"
                                >
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                        Framework Implementation: ISO 27001:2022
                                    </span>
                                </motion.div>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.95]">
                                    <TerminalPulse text="Supporting ISMS" delay={500} /><br />
                                    <span className="text-primary italic">Projects Globally.</span>
                                </h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                    className="text-xl text-foreground/70 max-w-2xl font-mono leading-relaxed"
                                >
                                    Our mission is to help partners protect the <span className="text-foreground font-bold">Confidentiality, Integrity, and Availability (CIA)</span> of their information while mitigating risks stemming from error, malevolence, or natural intervention.
                                </motion.p>
                            </div>

                            <div className="lg:col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2 }}
                                    className="bg-foreground/5 backdrop-blur-xl border border-foreground/10 p-8 rounded-2xl font-mono relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Globe className="w-16 h-16" />
                                    </div>
                                    <div className="relative z-10 space-y-6">
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Track Record</div>
                                            <div className="text-3xl font-black text-foreground">50+ Projects</div>
                                            <div className="text-xs text-foreground/40">Successful TISAX and ISO27K audits</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Avg Lead Time</div>
                                            <div className="text-3xl font-black text-foreground">6–12 Mos</div>
                                            <div className="text-xs text-foreground/40">Full implementation to certification</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PDCA Methodology Section */}
                <section className="py-32 px-8 bg-surface/30 border-y border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div>
                                <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4">Methodology</div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground">The Deming Circle (PDCA)</h2>
                            </div>
                            <div className="text-foreground/40 font-mono text-sm max-w-md md:text-right">
                                Our standardized 4-stage process ensures high-integrity ISMS deployment and long-term compliance maintenance.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                            {PDCA_STAGES.map((stage, index) => (
                                <button
                                    key={stage.id}
                                    onClick={() => setActiveStage(index)}
                                    className={`relative p-8 rounded-xl border transition-all duration-300 text-left group overflow-hidden ${activeStage === index
                                        ? "bg-foreground/5 border-primary shadow-2xl scale-[1.02] z-20"
                                        : "bg-transparent border-foreground/10 hover:border-foreground/20 opacity-60 z-10"
                                        }`}
                                >
                                    <div className={`mb-4 transition-transform duration-300 ${activeStage === index ? 'scale-110' : ''}`}>
                                        <stage.icon className={`w-8 h-8 ${activeStage === index ? stage.color : 'text-foreground/40'}`} />
                                    </div>
                                    <div className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-1 ${activeStage === index ? stage.color : 'text-foreground/40'}`}>
                                        Stage {index + 1}: {stage.label}
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-foreground">{stage.title}</h3>

                                    {activeStage === index && (
                                        <motion.div
                                            layoutId="pdca-indicator"
                                            className="absolute bottom-0 left-0 h-1 bg-primary w-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <motion.div
                            key={activeStage}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-foreground/5 backdrop-blur-md rounded-2xl border border-foreground/10 p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                {(() => {
                                    const Icon = PDCA_STAGES[activeStage].icon;
                                    return <Icon className="w-64 h-64" />;
                                })()}
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                                        Focus Areas: {PDCA_STAGES[activeStage].label}
                                    </h4>
                                    <p className="text-foreground/60 font-mono mb-8">
                                        Detailed technical and organizational activities required to successfully {PDCA_STAGES[activeStage].label.toLowerCase()} the ISMS framework.
                                    </p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setCalculatorOpen(true)}
                                            className="px-6 py-3 bg-primary text-white font-bold rounded-lg text-sm hover:scale-105 transition-all"
                                        >
                                            REQUEST STAGE SCOPING
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {PDCA_STAGES[activeStage].details.map((detail, i) => (
                                        <div key={i} className="flex gap-4 items-start p-4 bg-foreground/5 rounded-xl border border-foreground/5 hover:border-primary/20 transition-all group">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${PDCA_STAGES[activeStage].color} bg-current/10`}>
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-sm font-mono text-foreground/80 group-hover:text-foreground transition-colors">
                                                {detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ISO Map Toggle Section */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4">Framework Map</div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8">Clauses vs. Security Controls</h2>
                                <p className="text-xl text-foreground/50 font-mono mb-12">
                                    Understanding the distinction between the <span className="text-foreground font-bold">Normative Clauses (4-10)</span> which establish the management system, and <span className="text-foreground font-bold">Annex A (Security Controls)</span> which provide the specific protection measures.
                                </p>

                                <button
                                    onClick={() => setShowAnnex(!showAnnex)}
                                    className="px-8 py-4 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-xl flex items-center gap-4 transition-all group"
                                >
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <ArrowRightLeft className={`w-5 h-5 text-primary transition-transform duration-500 ${showAnnex ? 'rotate-180' : ''}`} />
                                    </div>
                                    <span className="font-mono font-bold text-sm">TOGGLE: {showAnnex ? 'ANNEX A CONTROLS' : 'NORMATIVE CLAUSES'}</span>
                                </button>
                            </div>

                            <div className="relative">
                                <AnimatePresence mode="wait">
                                    {!showAnnex ? (
                                        <motion.div
                                            key="clauses"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-4"
                                        >
                                            {[
                                                { id: "C4", title: "Context of the Organization", text: "Defining internal/external issues and ISMS scope." },
                                                { id: "C5", title: "Leadership", text: "Proving top management commitment and assigning roles." },
                                                { id: "C6", title: "Planning", text: "Risks/opportunities and security objective establishment." },
                                                { id: "C7", title: "Support", text: "Resources, competence, awareness, and documentation." },
                                                { id: "C8", title: "Operation", text: "Risk assessment and treatment implementation." },
                                                { id: "C9", title: "Performance Evaluation", text: "Monitoring, measurement, analysis, and auditing." },
                                                { id: "C10", title: "Improvement", text: "Managing non-conformities and continuous improvement." },
                                            ].map((clause) => (
                                                <div key={clause.id} className="p-4 bg-foreground/5 border-l-4 border-primary rounded-r-xl">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-xs font-mono font-bold text-primary">{clause.id}</span>
                                                        <span className="text-[10px] font-mono font-bold text-foreground/30 uppercase tracking-[0.2em]">Normative</span>
                                                    </div>
                                                    <h4 className="font-bold text-foreground mb-1">{clause.title}</h4>
                                                    <p className="text-xs text-foreground/50 font-mono leading-relaxed">{clause.text}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="annex"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-4"
                                        >
                                            {ANNEX_A_CONTROLS.map((control) => (
                                                <div key={control.id} className="p-6 bg-foreground/5 border-l-4 border-secondary rounded-r-xl group hover:bg-foreground/10 transition-colors">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-xs font-mono font-bold text-secondary">{control.id}</span>
                                                        <span className="text-[10px] font-mono font-bold text-foreground/30 uppercase tracking-[0.2em]">Security Control</span>
                                                    </div>
                                                    <h4 className="font-bold text-foreground mb-2">{control.area}</h4>
                                                    <p className="text-sm text-foreground/50 font-mono leading-relaxed">{control.focus}</p>
                                                </div>
                                            ))}
                                            <div className="p-4 border-2 border-dashed border-foreground/10 rounded-xl text-center">
                                                <p className="text-xs text-foreground/40 font-mono italic">+ 88 additional sub-controls categorized in A5 through A18</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dashboard Preview Section */}
                <section className="py-32 px-8 bg-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="bg-black border border-white/10 rounded-2xl p-4 shadow-2xl relative overflow-hidden"
                                >
                                    {/* Mock Dashboard UI */}
                                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                                            <span className="text-[10px] font-mono text-white/40 ml-4 tracking-widest">ISMS_FRAMEWORK_v2.0.sh</span>
                                        </div>
                                        <div className="px-2 py-1 bg-primary/20 text-primary text-[8px] font-bold rounded uppercase">Secure Instance</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                            <div className="text-[8px] font-mono text-white/30 mb-2 uppercase tracking-widest">Compliance Health</div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-2xl font-black text-white">96.4%</div>
                                                <div className="h-2 flex-grow bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary w-[96%]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                            <div className="text-[8px] font-mono text-white/30 mb-2 uppercase tracking-widest">Active Risks</div>
                                            <div className="text-2xl font-black text-white">02</div>
                                            <div className="text-[8px] text-primary mt-1 font-mono tracking-tighter">VULN_SCAN: CLEAN</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 opacity-60">
                                        <div className="h-3 w-full bg-white/5 rounded" />
                                        <div className="h-3 w-3/4 bg-white/5 rounded" />
                                        <div className="h-3 w-5/6 bg-white/5 rounded" />
                                        <div className="h-3 w-1/2 bg-white/5 rounded" />
                                    </div>

                                    {/* Glass Overlay for depth */}
                                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
                                </motion.div>

                                {/* Floating stats for "Advanced Agentic Coding" feel */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 px-6 py-3 bg-primary/90 text-white rounded-xl shadow-xl border border-white/20 backdrop-blur-md z-20 hidden md:block"
                                >
                                    <div className="text-[10px] font-mono uppercase tracking-widest font-bold">Real-time Controls</div>
                                    <div className="text-lg font-black font-display">CLOUD ISMS V.1</div>
                                </motion.div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4">Cloud Infrastructure</div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8">Real-time Governance</h2>
                                <p className="text-xl text-foreground/50 font-mono mb-12">
                                    We deploy advanced <span className="text-foreground font-bold">ISMS Framework Dashboards</span> on secure cloud infrastructure, providing instantaneous document control, control validation, and real-time audit reporting.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <LayoutDashboard className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="font-mono font-bold text-foreground">Centralized Document Control (DMS)</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <ArrowRightLeft className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="font-mono font-bold text-foreground">API-linked Control Verification</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Presence Data Section */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-3xl font-display font-black text-foreground mb-8">Global Footprint</h3>
                                <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-md font-mono">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-foreground/10 border-b border-foreground/10">
                                                <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Location</th>
                                                <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-foreground/40 font-bold">ISO/TISAX Projects</th>
                                                <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {LOCATIONS.map((loc, i) => (
                                                <tr key={i} className="border-b border-foreground/5 hover:bg-foreground/10 transition-colors group">
                                                    <td className="px-6 py-4 font-bold text-foreground">{loc.city}</td>
                                                    <td className="px-6 py-4">{loc.projects}</td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full ${loc.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                                                            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{loc.status}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-display font-black text-foreground mb-8">The Technical Team</h3>
                                <TeamGrid />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Implementation */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto bg-foreground/5 rounded-3xl p-12 md:p-20 border border-primary/20 relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-blueprint opacity-10" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-8">
                                Architect Your <br />
                                <span className="text-primary italic">Audit-Ready ISMS.</span>
                            </h2>
                            <p className="text-xl text-foreground/60 mb-12 font-mono max-w-2xl mx-auto">
                                Contact our Lead Auditors today for a comprehensive scoping session to define your organization's security boundaries.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href="/#contact"
                                    className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(8,97,242,0.3)]"
                                >
                                    REQUEST SCOPING SESSION
                                </a>
                                <button
                                    className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all"
                                >
                                    DOWNLOAD METHODOLOGY WHITEPAPER
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            {/* Readiness Calculator Modal */}
            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
