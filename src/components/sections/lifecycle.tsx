"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Search, ShieldX, Settings, ShieldCheck, RefreshCw } from "lucide-react";

/* ── Step Data ─────────────────────────────────────────── */
const steps = [
    { title: "Discovery", desc: "We map your data, assets, and regulatory obligations.", icon: Search, featured: false },
    { title: "Gap Analysis", desc: "A deep-dive audit of your posture against VDA ISA or NIST.", icon: ShieldX, featured: false },
    { title: "Implementation", desc: "Engineers build policies and technical controls following the Plan-Do-Check-Act lifecycle for sustainable security.", icon: Settings, featured: false },
    { title: "Certification", desc: "We stand by your side until the auditor signs off.", icon: ShieldCheck, featured: true },
    { title: "Continuous Improvement", desc: "Maintaining your posture through automated monitoring and periodic reviews.", icon: RefreshCw, featured: false },
];

/* ── SVG winding path (viewBox 0 0 1000 160) ───────────── */
const PATH_D = "M 0,80 C 30,80 70,15 100,15 C 130,15 270,145 300,145 C 330,145 470,15 500,15 C 530,15 670,145 700,145 C 730,145 870,15 900,15 C 930,15 970,80 1000,80";

/* Node positions in SVG coords (above=15, below=145)  */
const nodes = [
    { x: 100, y: 15 },   // Step 1 above
    { x: 300, y: 145 },  // Step 2 below
    { x: 500, y: 15 },   // Step 3 above
    { x: 700, y: 145 },  // Step 4 below
    { x: 900, y: 15 },   // Step 5 above
];

/* ── Step Card ─────────────────────────────────────────── */
function StepCard({ step, idx, show }: { step: typeof steps[0]; idx: number; show: boolean }) {
    const Icon = step.icon;
    const num = String(idx + 1).padStart(2, "0");
    const isAbove = idx % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: isAbove ? -16 : 16 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: idx * 0.2 }}
            className="relative"
        >
            {/* Large faint background number */}
            <div
                className={`absolute -top-4 -right-1 text-[80px] font-black leading-none select-none pointer-events-none ${step.featured ? "text-white/[0.08]" : "text-primary-navy/[0.04]"}`}
            >
                {idx + 1}
            </div>

            {/* Card */}
            <div
                className={`relative rounded-xl p-6 border transition-all duration-300 ${step.featured
                        ? "bg-[#0A2463] border-[#0A2463] text-white shadow-[0_8px_32px_rgba(10,36,99,0.3)]"
                        : "bg-white border-[#E2E8F0] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-lg"
                    }`}
            >
                {/* Icon + step number */}
                <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.featured ? "bg-white/10" : "bg-[#FFF4F0]"}`}>
                        <Icon size={20} className={step.featured ? "text-white" : "text-[#FF6B35]"} />
                    </div>
                    <span className={`text-[48px] font-[800] leading-none ${step.featured ? "text-white/[0.1]" : "text-[#0A2463]/[0.06]"}`}>
                        {num}
                    </span>
                </div>
                <h3 className={`text-[15px] font-bold mb-1.5 ${step.featured ? "text-white" : "text-[#0A2463]"}`}>
                    {step.title}
                </h3>
                <p className={`text-[13px] leading-[1.6] ${step.featured ? "text-white/[0.65]" : "text-[#64748B]"}`}>
                    {step.desc}
                </p>
            </div>
        </motion.div>
    );
}

/* ── Main Component ────────────────────────────────────── */
export function Lifecycle() {
    const sectionRef = useRef<HTMLElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const [pathLen, setPathLen] = useState(0);
    const [cardsReady, setCardsReady] = useState(false);

    useEffect(() => {
        if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
    }, []);

    useEffect(() => {
        if (isInView) {
            const t = setTimeout(() => setCardsReady(true), 1900);
            return () => clearTimeout(t);
        }
    }, [isInView]);

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden" role="region" aria-label="Zero to Certified Lifecycle">
            <div className="container mx-auto px-6 max-w-[1280px]">
                {/* ── Header ── */}
                <div className="text-center mb-16">
                    <span className="uppercase text-[11px] font-bold text-[#FF6B35] tracking-[0.15em] block mb-4">
                        Our Methodology
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[800] text-[#0A2463]">
                        The &quot;Zero to Certified&quot; Lifecycle
                    </h2>
                </div>

                {/* ═══════════ DESKTOP: Winding Path ═══════════ */}
                <div className="hidden lg:block">
                    {/* Row 1 — above cards (steps 1, 3, 5) */}
                    <div className="grid grid-cols-5">
                        {steps.map((s, i) =>
                            i % 2 === 0 ? (
                                <div key={i} className="px-3"><StepCard step={s} idx={i} show={cardsReady} /></div>
                            ) : (
                                <div key={i} />
                            )
                        )}
                    </div>

                    {/* Connectors ↓ from above cards */}
                    <div className="grid grid-cols-5">
                        {steps.map((_, i) =>
                            i % 2 === 0 ? (
                                <div key={i} className="flex justify-center">
                                    <div className="w-px h-8 border-l border-dashed border-[#CBD5E1]" />
                                </div>
                            ) : (
                                <div key={i} />
                            )
                        )}
                    </div>

                    {/* SVG Path Zone */}
                    <div className="relative h-40">
                        <svg
                            viewBox="0 0 1000 160"
                            className="absolute inset-0 w-full h-full"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <path
                                ref={pathRef}
                                d={PATH_D}
                                stroke="#FF6B35"
                                strokeWidth={2.5}
                                fill="none"
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                                style={{
                                    strokeDasharray: pathLen || 3000,
                                    strokeDashoffset: isInView ? 0 : pathLen || 3000,
                                    transition: "stroke-dashoffset 1.8s ease-in-out",
                                }}
                            />
                        </svg>

                        {/* Node dots (HTML for perfect circles) */}
                        {nodes.map((n, i) => (
                            <div
                                key={i}
                                className="absolute -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    left: `${n.x / 10}%`,
                                    top: `${(n.y / 160) * 100}%`,
                                    opacity: isInView ? 1 : 0,
                                    transition: `opacity 0.3s ease ${1.2 + i * 0.15}s`,
                                }}
                            >
                                <div
                                    className={`w-3.5 h-3.5 rounded-full border-[2.5px] border-[#FF6B35] ${steps[i].featured
                                            ? "bg-[#FF6B35] shadow-[0_0_0_6px_rgba(255,107,53,0.25)]"
                                            : "bg-white shadow-[0_0_0_4px_rgba(255,107,53,0.15)]"
                                        }`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Connectors ↑ to below cards */}
                    <div className="grid grid-cols-5">
                        {steps.map((_, i) =>
                            i % 2 !== 0 ? (
                                <div key={i} className="flex justify-center">
                                    <div className="w-px h-8 border-l border-dashed border-[#CBD5E1]" />
                                </div>
                            ) : (
                                <div key={i} />
                            )
                        )}
                    </div>

                    {/* Row 2 — below cards (steps 2, 4) */}
                    <div className="grid grid-cols-5">
                        {steps.map((s, i) =>
                            i % 2 !== 0 ? (
                                <div key={i} className="px-3"><StepCard step={s} idx={i} show={cardsReady} /></div>
                            ) : (
                                <div key={i} />
                            )
                        )}
                    </div>
                </div>

                {/* ═══════════ MOBILE: Vertical Timeline ═══════════ */}
                <div className="lg:hidden relative pl-8">
                    <div className="absolute left-[11px] top-0 bottom-0 w-px border-l-2 border-dashed border-[#FF6B35]" />

                    <div className="space-y-8">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.title} className="relative">
                                    {/* Node dot */}
                                    <div
                                        className={`absolute -left-8 top-6 w-3.5 h-3.5 rounded-full border-[2.5px] border-[#FF6B35] ${step.featured
                                                ? "bg-[#FF6B35] shadow-[0_0_0_6px_rgba(255,107,53,0.25)]"
                                                : "bg-white shadow-[0_0_0_4px_rgba(255,107,53,0.15)]"
                                            }`}
                                    />
                                    {/* Horizontal connector */}
                                    <div className="absolute -left-[17px] top-[27px] w-4 border-t border-dashed border-[#CBD5E1]" />

                                    <motion.div
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.12 }}
                                        className={`relative rounded-xl p-5 border ${step.featured
                                                ? "bg-[#0A2463] border-[#0A2463] shadow-[0_8px_32px_rgba(10,36,99,0.3)]"
                                                : "bg-white border-[#E2E8F0] shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${step.featured ? "bg-white/10" : "bg-[#FFF4F0]"}`}>
                                                <Icon size={18} className={step.featured ? "text-white" : "text-[#FF6B35]"} />
                                            </div>
                                            <h3 className={`text-sm font-bold ${step.featured ? "text-white" : "text-[#0A2463]"}`}>{step.title}</h3>
                                            <span className={`ml-auto text-[32px] font-[800] leading-none ${step.featured ? "text-white/[0.1]" : "text-[#0A2463]/[0.06]"}`}>
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <p className={`text-[13px] leading-[1.6] ${step.featured ? "text-white/[0.65]" : "text-[#64748B]"}`}>
                                            {step.desc}
                                        </p>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
