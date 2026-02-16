"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, ShieldX, Settings, ShieldCheck, RefreshCw } from "lucide-react";

const steps = [
    { title: "Discovery", desc: "We map your data, assets, and regulatory obligations.", icon: Search, featured: false },
    { title: "Gap Analysis", desc: "A deep-dive audit of your posture against VDA ISA or NIST.", icon: ShieldX, featured: false },
    { title: "Implementation", desc: "Engineers build policies and technical controls following the Plan-Do-Check-Act lifecycle for sustainable security.", icon: Settings, featured: false },
    { title: "Certification", desc: "We stand by your side until the auditor signs off.", icon: ShieldCheck, featured: true },
    { title: "Continuous Improvement", desc: "Maintaining your posture through automated monitoring and periodic reviews.", icon: RefreshCw, featured: false },
];

/* ── SVG Arc Helpers ───────────────────────────── */
const CX = 200, CY = 200, R = 130;
const toRad = (d: number) => ((d - 90) * Math.PI) / 180;
const px = (d: number, r = R) => ({ x: CX + r * Math.cos(toRad(d)), y: CY + r * Math.sin(toRad(d)) });

function makeArc(s: number, e: number) {
    const a = px(s), b = px(e);
    return `M${a.x.toFixed(1)},${a.y.toFixed(1)} A${R},${R} 0 0 1 ${b.x.toFixed(1)},${b.y.toFixed(1)}`;
}

/* 5 arcs × 58° each, 14° gaps = 360° */
const arcs = [0, 72, 144, 216, 288].map((start) => ({
    d: makeArc(start, start + 58),
    mid: start + 29,
}));

const colors = ["#0A2463", "#0A2463", "#0A2463", "#FF6B35", "#0A2463"];

/* Card positions around the cycle (desktop) */
const positions: React.CSSProperties[] = [
    { right: 0, top: "2%" },
    { right: 0, top: "42%", transform: "translateY(-50%)" },
    { left: "50%", bottom: 0, transform: "translateX(-50%)" },
    { left: 0, top: "42%", transform: "translateY(-50%)" },
    { left: 0, top: "2%" },
];

/* ── Step Card ─────────────────────────────────── */
function Card({ step, idx, show }: { step: typeof steps[0]; idx: number; show: boolean }) {
    const Icon = step.icon;
    const f = step.featured;
    return (
        <motion.div
            className="w-[210px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 + idx * 0.12 }}
        >
            <div className={`p-5 rounded-xl border transition-shadow ${f ? "bg-[#0A2463] border-[#0A2463] text-white shadow-[0_8px_32px_rgba(10,36,99,0.3)]" : "bg-white border-[#E2E8F0] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-lg"}`}>
                <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${f ? "bg-white/10" : "bg-[#FFF4F0]"}`}>
                        <Icon size={18} className={f ? "text-white" : "text-[#FF6B35]"} />
                    </div>
                    <span className={`text-[36px] font-[800] leading-none ${f ? "text-white/10" : "text-[#0A2463]/[0.06]"}`}>
                        {String(idx + 1).padStart(2, "0")}
                    </span>
                </div>
                <h3 className={`text-[14px] font-bold mb-1 ${f ? "text-white" : "text-[#0A2463]"}`}>{step.title}</h3>
                <p className={`text-[12px] leading-[1.5] ${f ? "text-white/65" : "text-[#64748B]"}`}>{step.desc}</p>
            </div>
        </motion.div>
    );
}

/* ── Main Component ────────────────────────────── */
export function Lifecycle() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-24 bg-white overflow-hidden" role="region" aria-label="Zero to Certified Lifecycle">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="uppercase text-[11px] font-bold text-[#FF6B35] tracking-[0.15em] block mb-4">Our Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-[800] text-[#0A2463]">The &quot;Zero to Certified&quot; Lifecycle</h2>
                </div>

                {/* ═══ DESKTOP: PDCA Cycle ═══ */}
                <div className="hidden lg:block relative mx-auto" style={{ maxWidth: 880, height: 620 }}>
                    {/* SVG Ring */}
                    <svg viewBox="0 0 400 400" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]" aria-hidden="true">
                        <defs>
                            <marker id="aN" markerWidth="14" markerHeight="14" refX="7" refY="7" orient="auto" markerUnits="userSpaceOnUse">
                                <polygon points="0,2 12,7 0,12" fill="#0A2463" />
                            </marker>
                            <marker id="aC" markerWidth="14" markerHeight="14" refX="7" refY="7" orient="auto" markerUnits="userSpaceOnUse">
                                <polygon points="0,2 12,7 0,12" fill="#FF6B35" />
                            </marker>
                        </defs>

                        {arcs.map((a, i) => (
                            <motion.path
                                key={i}
                                d={a.d}
                                stroke={colors[i]}
                                strokeWidth={22}
                                fill="none"
                                strokeLinecap="round"
                                markerEnd={i === 3 ? "url(#aC)" : "url(#aN)"}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                            />
                        ))}

                        {/* Center label */}
                        <text x={CX} y={CY - 14} textAnchor="middle" className="fill-[#0A2463]" style={{ fontSize: 15, fontWeight: 800, letterSpacing: "0.08em" }}>ZERO TO</text>
                        <text x={CX} y={CY + 14} textAnchor="middle" className="fill-[#FF6B35]" style={{ fontSize: 18, fontWeight: 800, letterSpacing: "0.08em" }}>CERTIFIED</text>
                    </svg>

                    {/* Cards around the ring */}
                    {steps.map((s, i) => (
                        <div key={s.title} className="absolute" style={positions[i]}>
                            <Card step={s} idx={i} show={inView} />
                        </div>
                    ))}
                </div>

                {/* ═══ MOBILE: Vertical Timeline ═══ */}
                <div className="lg:hidden relative pl-8">
                    <div className="absolute left-[11px] top-0 bottom-0 w-px border-l-2 border-dashed border-[#FF6B35]" />
                    <div className="space-y-6">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            const f = step.featured;
                            return (
                                <div key={step.title} className="relative">
                                    <div className={`absolute -left-8 top-5 w-3.5 h-3.5 rounded-full border-[2.5px] border-[#FF6B35] ${f ? "bg-[#FF6B35]" : "bg-white"}`} />
                                    <motion.div
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`p-5 rounded-xl border ${f ? "bg-[#0A2463] border-[#0A2463] shadow-[0_8px_32px_rgba(10,36,99,0.3)]" : "bg-white border-[#E2E8F0] shadow-[0_4px_16px_rgba(0,0,0,0.06)]"}`}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${f ? "bg-white/10" : "bg-[#FFF4F0]"}`}>
                                                <Icon size={18} className={f ? "text-white" : "text-[#FF6B35]"} />
                                            </div>
                                            <h3 className={`text-sm font-bold ${f ? "text-white" : "text-[#0A2463]"}`}>{step.title}</h3>
                                        </div>
                                        <p className={`text-[13px] leading-[1.6] ${f ? "text-white/65" : "text-[#64748B]"}`}>{step.desc}</p>
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
