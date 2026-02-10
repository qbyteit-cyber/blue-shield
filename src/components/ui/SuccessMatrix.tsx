"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";

const rows = [
    { metric: "TISAX® Readiness", before: "Unmapped Gaps", after: "Audit Ready AL3", status: "optimized" },
    { metric: "VDA ISA Maturity", before: "Level 0-1", after: "Level 3+ (Established)", status: "optimized" },
    { metric: "Audit Findings", before: "Major NCs", after: "Zero Major NCs", status: "optimized" },
    { metric: "Procurement Due Diligence", before: "High Risk", after: "Approved Vendor", status: "optimized" },
];

export function SuccessMatrix() {
    return (
        <div className="w-full bg-surface border border-foreground/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-foreground/5 px-8 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="font-mono text-sm tracking-widest uppercase text-primary font-bold">Success Matrix v1.0</span>
                <span className="text-[10px] font-mono text-foreground/40 uppercase">Last updated: Global Audit v2024</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-foreground/5">
                            <th className="px-8 py-4 text-[10px] font-mono uppercase tracking-widest text-foreground/40">Metric Identifier</th>
                            <th className="px-8 py-4 text-[10px] font-mono uppercase tracking-widest text-foreground/40">Legacy State</th>
                            <th className="px-8 py-4 text-[10px] font-mono uppercase tracking-widest text-foreground/40">ITIS Secure Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <motion.tr
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="border-b border-foreground/5 group hover:bg-foreground/[0.02] transition-colors"
                            >
                                <td className="px-8 py-6">
                                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{row.metric}</span>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2">
                                        <X className="w-4 h-4 text-secondary/50" />
                                        <span className="text-sm text-foreground/40 font-mono">{row.before}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_10px_rgba(8,97,242,0.2)] group-hover:shadow-[0_0_15px_rgba(8,97,242,0.4)] transition-all">
                                            <Check className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground font-bold tracking-tight">{row.after}</span>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-primary/5 px-8 py-6 flex items-center justify-center gap-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground tracking-tight">Audit compliance verified across all EU/US automotive hubs.</span>
            </div>
        </div>
    );
}
