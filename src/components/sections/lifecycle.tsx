"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search, ShieldX, Settings2, ShieldCheck, RefreshCw, Shield } from "lucide-react";

/* ── Step Data ─────────────────────────────────────────── */
const steps = [
    {
        id: 1,
        title: "Discovery",
        desc: "We map your data, assets, and regulatory obligations.",
        icon: Search,
        color: "#3B82F6"
    },
    {
        id: 2,
        title: "Gap Analysis",
        desc: "A deep-dive audit of your posture against VDA ISA or NIST.",
        icon: ShieldX,
        color: "#FF6B35"
    },
    {
        id: 3,
        title: "Implementation",
        desc: "Engineers build policies and technical controls following the Plan-Do-Check-Act lifecycle for sustainable security.",
        icon: Settings2,
        color: "#10B981"
    },
    {
        id: 4,
        title: "Certification",
        desc: "We stand by your side until the auditor signs off.",
        icon: ShieldCheck,
        color: "#0A2463",
        featured: true
    },
    {
        id: 5,
        title: "Continuous Improvement",
        desc: "Maintaining your posture through automated monitoring and periodic reviews.",
        icon: RefreshCw,
        color: "#8B5CF6"
    },
];

/* ── SVG Math Helpers ──────────────────────────────────── */
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInDegrees === -90 ? -Math.PI / 2 : angleInRadians)
    };
}

// Fixed polarToCartesian for better precision
const getPoint = (radius: number, angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
        x: radius * Math.cos(rad),
        y: radius * Math.sin(rad),
    };
};

function getSegmentPath(
    outerR: number,
    innerR: number,
    startAngle: number,
    endAngle: number,
    gap: number = 3
) {
    const sA = startAngle + gap / 2;
    const eA = endAngle - gap / 2;

    const p1 = getPoint(outerR, sA);
    const p2 = getPoint(outerR, eA - 3); // Slightly before end for arrowhead base
    const p3 = getPoint(outerR + 14, eA - 1); // Arrowhead tip
    const p4 = getPoint(innerR, eA - 2); // Inner end
    const p5 = getPoint(innerR, sA);

    const largeArc = eA - 3 - sA <= 180 ? 0 : 1;

    return [
        `M ${p1.x} ${p1.y}`,
        `A ${outerR} ${outerR} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
        `L ${p3.x} ${p3.y}`,
        `L ${p4.x} ${p4.y}`,
        `A ${innerR} ${innerR} 0 ${largeArc} 0 ${p5.x} ${p5.y}`,
        `Z`
    ].join(" ");
}

/* ── Components ────────────────────────────────────────── */

const WheelSegment = ({ step, index, total, inView }: any) => {
    const segmentAngle = 360 / total;
    const startAngle = index * segmentAngle;
    const endAngle = startAngle + segmentAngle;

    // We start at -90deg (top)
    const offsetStart = startAngle - 90;
    const offsetEnd = endAngle - 90;

    const path = getSegmentPath(220, 130, offsetStart, offsetEnd);

    // For textPath
    const textArcRadius = 175; // mid ring
    const textPA = offsetStart + 10;
    const textPB = offsetEnd - 10;
    const pS = getPoint(textArcRadius, textPA);
    const pE = getPoint(textArcRadius, textPB);
    const textPathD = `M ${pS.x} ${pS.y} A ${textArcRadius} ${textArcRadius} 0 0 1 ${pE.x} ${pE.y}`;

    return (
        <g className="group cursor-pointer">
            <motion.path
                d={path}
                fill={step.color}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: step.featured ? 1 : 0.85, scale: 1 } : { opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.04, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut"
                }}
                style={{ transformOrigin: "0px 0px" }}
            />
            {/* Text on Arc */}
            <defs>
                <path id={`textPath-${index}`} d={textPathD} />
            </defs>
            <motion.text
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="fill-white font-black uppercase pointer-events-none"
                style={{ fontSize: 13, letterSpacing: "0.08em" }}
            >
                <textPath xlinkHref={`#textPath-${index}`} startOffset="50%" textAnchor="middle">
                    {step.title}
                </textPath>
            </motion.text>
        </g>
    );
};

const SegmentLabel = ({ step, index, total, inView }: any) => {
    const segmentAngle = 360 / total;
    const midAngle = index * segmentAngle - 90 + segmentAngle / 2;
    const distance = 350; // Distance from center
    const point = getPoint(distance, midAngle);

    // Quadrant logic for alignment
    const isRight = midAngle > -90 && midAngle < 90;
    const isBottom = midAngle > 45 && midAngle < 135;

    return (
        <motion.div
            initial={{ opacity: 0, x: point.x * 0.9, y: point.y * 0.9 }}
            animate={inView ? { opacity: 1, x: point.x, y: point.y } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.12, ease: "easeOut" }}
            className="absolute z-10 w-[180px]"
            style={{
                left: "50%",
                top: "50%",
                marginLeft: point.x - (isRight ? 0 : 180),
                marginTop: point.y - 40,
                textAlign: isRight ? 'left' : 'right'
            }}
        >
            <div className={`p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${isRight ? 'ml-6' : 'mr-6'}`}>
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-1`} style={{ color: step.color }}>
                    Step 0{step.id}
                </div>
                <div className="text-[13px] font-bold text-primary-navy mb-1.5">{step.title}</div>
                <p className="text-[12px] text-neutral-500 leading-relaxed font-medium">
                    {step.desc}
                </p>
            </div>

            {/* Connector Line */}
            <div
                className={`absolute top-1/2 w-8 h-[1px] opacity-40`}
                style={{
                    backgroundColor: step.color,
                    [isRight ? 'left' : 'right']: -32,
                    transform: `rotate(${midAngle + (isRight ? 0 : 180)}deg)`,
                    transformOrigin: isRight ? 'left' : 'right'
                }}
            />
        </motion.div>
    );
};

/* ── Main Component ────────────────────────────────────── */

export function Lifecycle() {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-visible" role="region" aria-label="Zero to Certified Lifecycle">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 relative z-20">
                    <span className="uppercase text-[11px] font-bold text-accent-coral tracking-[0.15em] block mb-4">
                        Our Methodology
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[800] text-primary-navy tracking-tight leading-tight">
                        The "Zero to Certified" Lifecycle
                    </h2>
                </div>

                {/* ═══════════ DESKTOP: PDCA Wheel ═══════════ */}
                <div className="hidden md:flex items-center justify-center relative min-h-[740px]">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        <motion.div
                            initial={{ opacity: 0, rotate: -30, scale: 0.85 }}
                            animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                damping: 15,
                                duration: 0.8
                            }}
                            className="w-full h-full"
                        >
                            <svg
                                viewBox="-350 -350 700 700"
                                className="w-full h-full overflow-visible"
                                style={{ filter: "drop-shadow(0 10px 30px rgba(10,36,99,0.08))" }}
                            >
                                <defs>
                                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#0A2463" floodOpacity="0.12" />
                                    </filter>
                                </defs>

                                {/* 5 Segments */}
                                {steps.map((step, i) => (
                                    <WheelSegment key={step.id} step={step} index={i} total={5} inView={inView} />
                                ))}

                                {/* Center Circle */}
                                <g>
                                    <circle cx="0" cy="0" r="128" fill="white" filter="url(#shadow)" />

                                    <motion.g
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.6, duration: 0.4 }}
                                    >
                                        <Shield className="text-primary-navy" size={40} style={{ transform: "translate(-20px, -60px)" }} />

                                        <text y="-5" textAnchor="middle" className="fill-neutral-400 font-bold uppercase" style={{ fontSize: 11, letterSpacing: "0.12em" }}>
                                            Zero To
                                        </text>
                                        <text y="24" textAnchor="middle" className="fill-primary-navy font-black" style={{ fontSize: 20, letterSpacing: "0.02em" }}>
                                            CERTIFIED
                                        </text>
                                        <text y="48" textAnchor="middle" className="fill-neutral-400 font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.1em" }}>
                                            Lifecycle
                                        </text>
                                    </motion.g>
                                </g>
                            </svg>
                        </motion.div>

                        {/* External Labels */}
                        {steps.map((step, i) => (
                            <SegmentLabel key={step.id} step={step} index={i} total={5} inView={inView} />
                        ))}
                    </div>
                </div>

                {/* ═══════════ MOBILE: Stacked Cards ═══════════ */}
                <div className="md:hidden relative pt-8 pb-12">
                    <div className="absolute left-[24px] top-0 bottom-0 w-px border-l-2 border-dashed border-neutral-100" />

                    <div className="space-y-6">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative ml-6 p-6 bg-white border border-neutral-100 rounded-2xl shadow-sm overflow-hidden ${step.featured ? 'ring-2 ring-primary-navy/5 shadow-md' : ''}`}
                                    style={{ borderLeftWidth: 6, borderLeftColor: step.color }}
                                >
                                    {step.featured && (
                                        <div className="absolute -right-4 -top-4 w-12 h-12 bg-primary-navy transform rotate-45" />
                                    )}

                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: step.color }}>Step 0{step.id}</div>
                                            <h3 className="text-[16px] font-black text-primary-navy">{step.title}</h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${step.color}15` }}>
                                            <Icon size={20} style={{ color: step.color }} />
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-neutral-500 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
