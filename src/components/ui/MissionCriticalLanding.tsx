"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Lock, Database, Search } from "lucide-react";
import { LandingHeroTitle } from "./LandingHeroTitle";
import dynamic from "next/dynamic";

const CyberSecurityGrid = dynamic(() => import("../canvas/CyberSecurityGrid"), {
    ssr: false,
});

interface MissionCriticalLandingProps {
    onOpenCalculator: () => void;
}

const STATS = [
    { label: "Client Contracts Secured", value: "€847M+" },
    { label: "Automotive Clients", value: "10+" },
    { label: "Years Zero Non-Conformities", value: "5" },
    { label: "Avg. Implementation", value: "95 days" }
];

export default function MissionCriticalLanding({ onOpenCalculator }: MissionCriticalLandingProps) {
    return (
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
            {/* Super Cool WebGL Cyber Grid */}
            <CyberSecurityGrid />

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">

                {/* Technical Meta Data Bar */}
                <div className="absolute top-0 left-0 w-full flex justify-between px-8 py-4 opacity-40 font-mono text-[10px] hidden lg:flex pointer-events-none">
                    <div className="flex gap-8">
                        <div className="flex items-center gap-2">
                            <Database className="w-3 h-3" />
                            <span>NODE_ALPHA: ACTIVE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-3 h-3" />
                            <span>AES_256: VALIDATED</span>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex items-center gap-2">
                            <Search className="w-3 h-3" />
                            <span>SCANNING_NETWORK...</span>
                        </div>
                        <span>SEC_PROTOCOL: V5.0</span>
                    </div>
                </div>

                {/* Status Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-4 px-4 py-2 bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-full mb-12 shadow-inner"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase tracking-widest">System Status: PROVISIONED</span>
                    </div>
                    <div className="w-px h-3 bg-foreground/20" />
                    <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest leading-none">
                        VDA Excellence: Level 3+
                    </div>
                </motion.div>

                {/* Badge/Small Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8 font-mono"
                >
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                        Enterprise-Grade TISAX & ISO 27001 Compliance for Automotive Leaders
                    </span>
                </motion.div>

                {/* Main Hero Title */}
                <LandingHeroTitle />

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 }}
                    className="text-xl md:text-2xl text-foreground/60 max-w-4xl mx-auto mb-16 font-mono leading-relaxed italic"
                >
                    Trusted by Tier-1 suppliers to <span className="text-foreground font-bold not-italic underline decoration-primary decoration-4">BMW, Volkswagen, and Mercedes-Benz.</span> <br />
                    98% first-time pass rate. Zero major non-conformities in 5 years.
                </motion.p>

                {/* Call to Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5 }}
                    className="flex flex-col sm:flex-row gap-6 mb-24"
                >
                    <button
                        onClick={onOpenCalculator}
                        className="relative px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 group uppercase tracking-widest text-[13px] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        <span className="relative">BOOK FREE GAP ASSESSMENT</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                    </button>
                    <a
                        href="/resources"
                        className="px-10 py-5 bg-foreground/5 backdrop-blur-md border border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[13px]"
                    >
                        <Zap className="w-5 h-5 text-primary" />
                        Download TISAX Checklist
                    </a>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 w-full pt-12 border-t border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm rounded-t-[3rem] p-8 mt-12">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 4 + i * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-3xl md:text-5xl font-display font-black text-foreground mb-2 italic">
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-mono font-bold text-foreground/30 uppercase tracking-[0.2em] leading-tight max-w-[120px]">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Cyber Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        </section>
    );
}
