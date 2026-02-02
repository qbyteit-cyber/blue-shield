"use client";

import { motion } from "framer-motion";

export function CompliancePulse() {
    return (
        <div className="flex items-center gap-4 bg-foreground/5 backdrop-blur-md px-4 py-2 rounded-full border border-foreground/10">
            <div className="relative w-8 h-8 flex items-center justify-center">
                <motion.div
                    className="absolute inset-0 border-2 border-primary rounded-full"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
                <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(8,97,242,0.8)]" />

                {/* Radar Line */}
                <motion.div
                    className="absolute inset-0 border-r-2 border-primary/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary leading-none mb-1">
                    System Status
                </span>
                <span className="text-[12px] font-mono font-bold text-foreground leading-none">
                    Real-Time Compliance Pulse
                </span>
            </div>
        </div>
    );
}
