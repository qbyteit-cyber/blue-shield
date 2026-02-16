"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, ShieldX, Settings2, ShieldCheck, RefreshCw } from "lucide-react";

/* ── Step Data ─────────────────────────────────────────── */
const steps = [
    { id: 1, title: "Discovery", desc: "We map your data, assets, and regulatory obligations.", icon: Search, color: "#3B82F6" },
    { id: 2, title: "Gap Analysis", desc: "A deep-dive audit of your posture against VDA ISA or NIST.", icon: ShieldX, color: "#FF6B35" },
    { id: 3, title: "Implementation", desc: "Engineers build policies and technical controls following the Plan-Do-Check-Act lifecycle for sustainable security.", icon: Settings2, color: "#10B981" },
    { id: 4, title: "Certification", desc: "We stand by your side until the auditor signs off.", icon: ShieldCheck, color: "#0A2463", featured: true },
    { id: 5, title: "Maintaining", desc: "Maintaining your posture through automated monitoring and periodic reviews.", icon: RefreshCw, color: "#8B5CF6" },
];

/* ── SVG Helpers ───────────────────────────────────────── */
const getPoint = (r: number, deg: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
};

function segmentPath(outerR: number, innerR: number, startDeg: number, endDeg: number) {
    const gap = 1.5;
    const s = startDeg + gap, e = endDeg - gap;
    const o1 = getPoint(outerR, s), o2 = getPoint(outerR, e - 4);
    const tip = getPoint(outerR + 16, e);
    const i2 = getPoint(innerR, e - 3), i1 = getPoint(innerR, s);
    return `M${o1.x},${o1.y} A${outerR},${outerR} 0 0 1 ${o2.x},${o2.y} L${tip.x},${tip.y} L${i2.x},${i2.y} A${innerR},${innerR} 0 0 0 ${i1.x},${i1.y}Z`;
}

function textArcPath(r: number, s: number, e: number) {
    const p1 = getPoint(r, s + 6), p2 = getPoint(r, e - 6);
    return `M${p1.x},${p1.y} A${r},${r} 0 0 1 ${p2.x},${p2.y}`;
}

/* ── Arrow tip positions mapped to container % ─────────── */
/* SVG sits at left:18% top:12% w:64% h:64% of the square  */
/* viewBox: -260…260.  Arrow tip at getPoint(216, endAngle) */
/* containerPct = offset + ((svgCoord+260)/520)*64           */
/*                                                           */
/* Step 1 tip @ -18°  → (41.8%, 18.7%)                      */
/* Step 2 tip @  54°  → (71.5%, 28.4%)                      */
/* Step 3 tip @ 126°  → (71.5%, 59.6%)                      */
/* Step 4 tip @ 198°  → (41.8%, 69.3%)                      */
/* Step 5 tip @ 270°  → (23.4%, 44.0%)                      */
/*                                                           */
/* Cards positioned so their nearest corner touches the tip  */

const labelLayout: { left: string; top: string; w: number; touchSide: string }[] = [
    { left: "22%", top: "5%", w: 172, touchSide: "br" }, // Step 1: card bottom-right → tip
    { left: "72%", top: "15%", w: 168, touchSide: "bl" }, // Step 2: card bottom-left  → tip
    { left: "72%", top: "60%", w: 172, touchSide: "tl" }, // Step 3: card top-left     → tip
    { left: "22%", top: "69%", w: 172, touchSide: "tr" }, // Step 4: card top-right    → tip
    { left: "4%", top: "37%", w: 172, touchSide: "r" }, // Step 5: card right edge   → tip
];

/* ── Main Component ────────────────────────────────────── */
export function Lifecycle() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.25 });

    return (
        <section ref={ref} className="py-24 bg-white" role="region" aria-label="Zero to Certified Lifecycle">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="uppercase text-[11px] font-bold text-[#FF6B35] tracking-[0.15em] block mb-4">Our Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-[800] text-[#0A2463] tracking-tight mb-6">The Gap-to-Certified Lifecycle</h2>
                    <p className="max-w-3xl mx-auto text-neutral-500 leading-relaxed font-medium">
                        Whether you're pursuing your first TISAX label, renewing ISO 27001, or upgrading to AL3.
                        We assess your current posture, close every gap, and stand with you until the auditor signs off.
                    </p>
                </div>

                {/* ═══ DESKTOP ═══ */}
                <div className="hidden md:block relative mx-auto" style={{ maxWidth: 880 }}>
                    <div className="relative mx-auto" style={{ width: "100%", paddingBottom: "100%" }}>

                        {/* SVG Wheel */}
                        <motion.div
                            className="absolute"
                            style={{ left: "18%", top: "12%", width: "64%", height: "64%" }}
                            initial={{ opacity: 0, rotate: -25, scale: 0.85 }}
                            animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
                            transition={{ type: "spring", stiffness: 60, damping: 14 }}
                        >
                            <svg viewBox="-260 -260 520 520" className="w-full h-full overflow-visible" style={{ filter: "drop-shadow(0 8px 24px rgba(10,36,99,0.07))" }}>
                                <defs>
                                    <filter id="cs" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="0" dy="3" stdDeviation="10" floodColor="#0A2463" floodOpacity="0.10" />
                                    </filter>
                                </defs>

                                {/* 5 Segments */}
                                {steps.map((step, i) => {
                                    const sA = i * 72 - 90, eA = sA + 72;
                                    const d = segmentPath(200, 120, sA, eA);
                                    const tD = textArcPath(162, sA, eA);
                                    return (
                                        <g key={step.id} className="cursor-pointer">
                                            <motion.path
                                                d={d}
                                                fill={step.color}
                                                initial={{ opacity: 0, scale: 0.88 }}
                                                animate={inView ? { opacity: step.featured ? 1 : 0.88, scale: 1 } : {}}
                                                whileHover={{ scale: 1.05, opacity: 1 }}
                                                transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                                                style={{ transformOrigin: "0 0" }}
                                            />
                                            <defs><path id={`tp${i}`} d={tD} /></defs>
                                            <motion.text
                                                initial={{ opacity: 0 }}
                                                animate={inView ? { opacity: 1 } : {}}
                                                transition={{ delay: 0.7 + i * 0.08 }}
                                                className="fill-white pointer-events-none"
                                                style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}
                                            >
                                                <textPath xlinkHref={`#tp${i}`} startOffset="50%" textAnchor="middle">{step.title}</textPath>
                                            </motion.text>
                                        </g>
                                    );
                                })}

                                {/* Center Circle */}
                                <circle cx="0" cy="0" r="118" fill="white" filter="url(#cs)" />
                                <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.55, duration: 0.35 }}>
                                    <g transform="translate(-16,-52)" fill="none" stroke="#0A2463" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 0C16 0 4 4 4 12v8c0 5 4 10 12 14 8-4 12-9 12-14v-8C28 4 16 0 16 0z" />
                                        <path d="M10 16l4 4 8-8" />
                                    </g>
                                    <text y="0" textAnchor="middle" style={{ fontSize: 11, fontWeight: 700, fill: "#94A3B8", letterSpacing: "0.12em", textTransform: "uppercase" }}>GAP TO</text>
                                    <text y="22" textAnchor="middle" style={{ fontSize: 19, fontWeight: 800, fill: "#0A2463", letterSpacing: "0.02em" }}>CERTIFIED</text>
                                    <text y="40" textAnchor="middle" style={{ fontSize: 10, fontWeight: 600, fill: "#94A3B8", letterSpacing: "0.1em", textTransform: "uppercase" }}>LIFECYCLE</text>
                                </motion.g>
                            </svg>
                        </motion.div>

                        {/* Labels — positioned to touch arrow tips */}
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            const pos = labelLayout[i];
                            return (
                                <motion.div
                                    key={step.id}
                                    className="absolute z-10"
                                    style={{ left: pos.left, top: pos.top, width: pos.w }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.35, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                                >
                                    <div className="p-3.5 bg-white rounded-xl border border-neutral-100/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all hover:shadow-lg hover:-translate-y-0.5">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: `${step.color}14` }}>
                                                <Icon size={13} style={{ color: step.color }} />
                                            </div>
                                            <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: step.color }}>0{step.id}</span>
                                        </div>
                                        <h3 className="text-[12px] font-bold text-[#0A2463] mb-0.5 leading-tight">{step.title}</h3>
                                        <p className="text-[10.5px] text-[#64748B] leading-[1.5]">{step.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ═══ MOBILE ═══ */}
                <div className="md:hidden space-y-4 pt-4">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="p-5 bg-white rounded-xl border border-neutral-100 shadow-sm"
                                style={{ borderLeftWidth: 5, borderLeftColor: step.color }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest block mb-0.5" style={{ color: step.color }}>Step 0{step.id}</span>
                                        <h3 className="text-[15px] font-bold text-[#0A2463]">{step.title}</h3>
                                    </div>
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${step.color}12` }}>
                                        <Icon size={18} style={{ color: step.color }} />
                                    </div>
                                </div>
                                <p className="text-[13px] text-[#64748B] leading-relaxed">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
