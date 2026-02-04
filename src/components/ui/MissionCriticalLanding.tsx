"use client";

import { motion } from "framer-motion";
import { TerminalPulse } from "./TerminalPulse";
import { CompliancePulse } from "./CompliancePulse";
import { SuccessMatrix } from "./SuccessMatrix";
import { TisaxPipeline } from "./TisaxPipeline";
import { TechnicalCounter } from "./TechnicalCounter";
import { Shield, Lock, Activity, Cpu, ChevronRight } from "lucide-react";

export default function MissionCriticalLanding() {
    return (
        <div className="relative min-h-screen bg-blueprint">
            {/* Top Status Bar (Dashboard Style) */}
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-8 hidden md:block">
                <div className="flex justify-between items-center py-4">
                    <CompliancePulse />
                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-primary/5 rounded-lg border border-primary/10 flex items-center gap-3">
                            <Activity className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-foreground">ENX PORTAL: CONNECTED</span>
                        </div>
                        <div className="px-4 py-2 bg-foreground/5 rounded-lg border border-foreground/10 flex items-center gap-3">
                            <Cpu className="w-4 h-4 text-foreground/40" />
                            <span className="text-[10px] font-mono font-bold text-foreground/40">AUDIT ENGINE v4.2.0</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-60 pb-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded mb-8"
                        >
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest">
                                Mission Critical Security
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                            <TerminalPulse text="Securing The Future Of" delay={500} /><br />
                            <TerminalPulse text="Automotive, Cyber and" delay={2000} className="text-primary" /><br />
                            <TerminalPulse text="Aerospace Industry" delay={3500} />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2 }}
                            className="text-xl text-foreground/60 max-w-2xl mb-12 font-mono leading-relaxed"
                        >
                            Direct technical authority for TISAX®, Cyber, and Aerospace security assessments. We don't speak marketing. We build audit-proof high-integrity ecosystems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <button className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(8,97,242,0.3)] flex items-center gap-3">
                                INITIATE AUDIT READINESS
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <button className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all flex items-center gap-3">
                                VIEW SUCCESS MATRIX
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Data Stats Section */}
            <section className="py-20 border-y border-foreground/5 bg-surface/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <TechnicalCounter value={100} suffix="%" label="Compliance Accuracy" />
                        <TechnicalCounter value={5000} suffix="+" label="Audit Defense Hours" />
                        <TechnicalCounter value={3} suffix="" label="Core Industries Secured" />
                        <TechnicalCounter value={98} suffix="%" label="First-Time Pass Rate" />
                    </div>
                </div>
            </section>

            {/* Success Matrix Table */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-primary font-mono font-bold tracking-[0.3em] uppercase block mb-4">Empirical Proof</span>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8 tracking-tighter">
                                The Success Matrix: <br />
                                <span className="text-foreground/40">Automotive Transformation</span>
                            </h2>
                            <p className="text-lg text-foreground/50 font-mono mb-8 leading-relaxed">
                                Our engagement model focuses on shifting legacy infrastructure into high-performance security silos. We prioritize data sovereignty and zero-trust protocols over "just being compliant."
                            </p>
                            <div className="flex gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Lock className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-foreground">Military-Grade ISMS</span>
                                    </div>
                                    <p className="text-xs text-foreground/40 font-mono">ISO 27001:2022 Compliant</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-foreground">OEM Ready AL3</span>
                                    </div>
                                    <p className="text-xs text-foreground/40 font-mono">TISAX Specialized Nodes</p>
                                </div>
                            </div>
                        </div>
                        <SuccessMatrix />
                    </div>
                </div>
            </section>

            {/* TISAX Pipeline Section */}
            <section className="py-32 px-8 bg-surface/50 border-t border-foreground/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 block">Deployment Lifecycle</span>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter">
                            TISAX® Implementation Pipeline
                        </h2>
                    </div>
                    <TisaxPipeline />
                </div>
            </section>
        </div>
    );
}
