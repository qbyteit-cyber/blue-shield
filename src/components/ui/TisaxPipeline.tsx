"use client";

import { motion } from "framer-motion";
import { Search, FileText, CheckCircle, ShieldCheck } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Kickoff",
        desc: "Initial scope assessment and stakeholder alignment.",
        milestone: "Project Phase 01"
    },
    {
        icon: FileText,
        title: "ISMS Gap Analysis",
        desc: "Deep-dive into documentation and control effectiveness.",
        milestone: "Project Phase 02"
    },
    {
        icon: ShieldCheck,
        title: "Remediation Support",
        desc: "Hands-on guidance to bridge identified security gaps.",
        milestone: "Project Phase 03"
    },
    {
        icon: CheckCircle,
        title: "Audit Support",
        desc: "Presence and defense during the formal assessment.",
        milestone: "Project Phase 04"
    }
];

export function TisaxPipeline() {
    return (
        <div className="relative py-20 overflow-visible">
            {/* Main Pipe Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-foreground/10 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative"
                    >
                        {/* Phase Indicator */}
                        <div className="mb-6">
                            <span className="text-[10px] font-mono font-bold text-primary/50 uppercase tracking-[0.3em] group-hover:text-primary transition-colors">
                                {step.milestone}
                            </span>
                        </div>

                        {/* Visual Node */}
                        <div className="relative mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-surface border border-foreground/10 flex items-center justify-center relative z-10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(8,97,242,0.2)] transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                                <step.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                            </div>

                            {/* Connection Pulse */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-primary/0 rounded-full group-hover:border-primary/20 animate-ping pointer-events-none" />
                        </div>

                        {/* Text Content */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-foreground/50 leading-relaxed font-mono">
                                {step.desc}
                            </p>
                        </div>

                        {/* 3D Connecting Segment (Desktop) */}
                        {i < steps.length - 1 && (
                            <motion.div
                                className="absolute top-1/2 left-[80%] w-[40%] h-[2px] bg-gradient-to-r from-primary to-primary/0 hidden lg:block -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
