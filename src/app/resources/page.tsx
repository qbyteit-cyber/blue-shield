"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
    Download,
    ChevronRight,
    CheckCircle2,
    ArrowRight,
    Calculator,
    ArrowDownToLine,
    Info
} from "lucide-react";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";

const GUIDES = [
    {
        title: "Complete TISAX Readiness Checklist",
        type: "PDF GUIDE",
        desc: "All VDA ISA 5.0 controls mapped with self-assessment scoring and gap analysis template.",
        id: "tisax-checklist"
    },
    {
        title: "ISO 27001:2022 Transition Guide",
        type: "TECHNICAL WHITEPAPER",
        desc: "Critical changes from the 2013 version and automotive-specific implementation guidance.",
        id: "iso-transition"
    }
];

const INSIGHTS = [
    {
        title: "5 Reasons Automotive Suppliers Fail TISAX",
        category: "COMPLIANCE STRATEGY",
        desc: "Learn how to avoid the common pitfalls that lead to major non-conformities.",
        date: "Feb 2026"
    },
    {
        title: "What BMW & VW Look For in Assessments",
        category: "INDUSTRY INSIDER",
        desc: "Insights from former OEM auditors on procurement-level security expectations.",
        date: "Jan 2026"
    },
    {
        title: "TISAX AL2 vs AL3: Which Level for You?",
        category: "DECISION GUIDE",
        desc: "A breakdown of contract requirements and protection needs for Tier-1 vs Tier-2.",
        date: "Dec 2025"
    }
];

export default function ResourcesPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [comparisonTab, setComparisonTab] = useState<"overlap" | "differences">("overlap");

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-8 relative">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-8 italic">
                        Technical <span className="text-primary not-italic">Intelligence.</span>
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-mono">
                        Downloadable frameworks, readiness checklists, and expert analysis for automotive security professionals.
                    </p>
                </div>
            </section>

            {/* Premium Downloads */}
            <section className="py-24 px-8 border-t border-foreground/5 bg-foreground/[0.01]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {GUIDES.map((guide, idx) => (
                            <motion.div
                                key={guide.id}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="group glass-card p-10 rounded-[3rem] border-primary/10 hover:border-primary transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="text-[10px] font-black font-mono text-primary uppercase tracking-widest">{guide.type}</div>
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Download className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-4 uppercase tracking-tighter italic">
                                        {guide.title}
                                    </h3>
                                    <p className="text-foreground/60 font-mono text-sm leading-relaxed mb-12">
                                        {guide.desc}
                                    </p>
                                </div>
                                <button className="w-full py-5 bg-foreground/5 hover:bg-primary hover:text-white border border-foreground/10 rounded-2xl font-black text-[12px] uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                                    <ArrowDownToLine className="w-4 h-4" />
                                    Download Technical Resource
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Tool: Comparison Matrix */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-card rounded-[4rem] border-primary/20 overflow-hidden">
                        <div className="p-12 md:p-20 bg-primary/5">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-display font-black text-foreground uppercase tracking-tighter mb-4 italic">
                                        TISAX vs ISO 27001 <span className="text-primary not-italic">Matrix.</span>
                                    </h2>
                                    <p className="text-sm font-mono text-foreground/50">Understanding overlap and ROI for dual certification.</p>
                                </div>
                                <div className="flex bg-background p-1.5 rounded-2xl border border-foreground/10">
                                    <button
                                        onClick={() => setComparisonTab("overlap")}
                                        className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${comparisonTab === "overlap" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-foreground/40 hover:text-foreground"}`}
                                    >
                                        Control Overlap
                                    </button>
                                    <button
                                        onClick={() => setComparisonTab("differences")}
                                        className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${comparisonTab === "differences" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-foreground/40 hover:text-foreground"}`}
                                    >
                                        The Differences
                                    </button>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12">
                                <AnimatePresence mode="wait">
                                    {comparisonTab === "overlap" ? (
                                        <motion.div
                                            key="overlap"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            <div className="p-8 bg-background border border-primary/20 rounded-3xl space-y-6">
                                                <h4 className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    85% Core Foundation
                                                </h4>
                                                <p className="text-sm text-foreground/60 leading-relaxed font-mono">
                                                    TISAX is built upon VDA ISA, which heavily references ISO/IEC 27001 Annex A. Most established ISMS frameworks cover TISAX requirements by default.
                                                </p>
                                                <ul className="grid grid-cols-1 gap-4 text-[10px] font-mono text-foreground/40 font-bold uppercase tracking-widest">
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> Asset Management</li>
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> Access Control</li>
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> Physical Security</li>
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="differences"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            <div className="p-8 bg-background border border-orange-500/20 rounded-3xl space-y-6">
                                                <h4 className="text-sm font-black text-orange-500 uppercase tracking-widest flex items-center gap-2">
                                                    <Calculator className="w-4 h-4" />
                                                    Specific Automotive Deltas
                                                </h4>
                                                <p className="text-sm text-foreground/60 leading-relaxed font-mono">
                                                    TISAX includes specific Prototype Protection and Data Protection modules that go beyond standard ISO 27001 requirements.
                                                </p>
                                                <ul className="grid grid-cols-1 gap-4 text-[10px] font-mono text-foreground/40 font-bold uppercase tracking-widest">
                                                    <li className="flex items-center gap-2"><Info className="w-3 h-3 text-orange-500" /> Prototype Protection</li>
                                                    <li className="flex items-center gap-2"><Info className="w-3 h-3 text-orange-500" /> ENX Label Transparency</li>
                                                    <li className="flex items-center gap-2"><Info className="w-3 h-3 text-orange-500" /> Automotive Supply Chain Audits</li>
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className="space-y-8 flex flex-col justify-center">
                                    <div className="flex gap-6 items-center">
                                        <div className="text-6xl font-black text-primary font-display">~30%</div>
                                        <div className="text-sm font-mono text-foreground/60 italic leading-snug">Average cost savings when implementing both ISO and TISAX simultaneously.</div>
                                    </div>
                                    <button
                                        onClick={() => setCalculatorOpen(true)}
                                        className="w-full py-6 bg-primary text-white font-black rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4"
                                    >
                                        CALCULATE YOUR DUAL CERT ROI
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights / Blog List */}
            <section className="py-32 px-8 bg-foreground/[0.01]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <span className="text-[10px] font-black font-mono text-primary uppercase tracking-[0.5em] mb-4 block">Thought Leadership</span>
                            <h2 className="text-4xl font-display font-black text-foreground">Latest Industry <span className="italic text-primary">Insights.</span></h2>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-primary font-black font-mono text-xs uppercase tracking-widest">
                            View All Articles <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {INSIGHTS.map((post, i) => (
                            <div key={i} className="group p-8 bg-background border border-foreground/5 rounded-[2.5rem] hover:border-primary/50 transition-all flex flex-col h-full">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-mono font-bold rounded-lg">{post.category}</span>
                                    <span className="text-[10px] font-mono text-foreground/30 font-bold italic">{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-display font-black text-foreground mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-sm text-foreground/50 font-mono mb-12 flex-grow">{post.desc}</p>
                                <button className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest">
                                    Read Full Analysis <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
