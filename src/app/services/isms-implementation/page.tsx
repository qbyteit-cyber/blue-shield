"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";
import {
    ismsPhases,
    ismsFAQs,
} from "@/components/services/isms/ISMSPhaseData";
import Link from "next/link";
import {
    Shield,
    CheckCircle2,
    ArrowRight,
    Globe,
    SearchCode,
    Settings2,
    FolderOpen,
    Activity,
    ClipboardCheck,
    RefreshCw,
    ChevronDown,
    Zap,
    Eye,
    Layers,
    HeartPulse,
} from "lucide-react";
import { useState } from "react";

// ── Icon map ──────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
    SearchCode,
    Settings2,
    FolderOpen,
    Activity,
    ClipboardCheck,
    RefreshCw,
};

// ── Phase Tab Bar (horizontal, OPSWAT-style) ─────────────────
// (PhaseNavigator removed — replaced by inline tab bar below)

// ── FAQ Accordion ─────────────────────────────────────────────
function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="space-y-4">
            {ismsFAQs.map((faq, i) => (
                <div key={i} className="border border-neutral-100 rounded-2xl overflow-hidden">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                        aria-expanded={openIndex === i}
                    >
                        <span className="text-base font-bold text-primary-navy pr-4">{faq.question}</span>
                        <ChevronDown
                            size={20}
                            className={`text-neutral-400 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                            }`}
                        aria-hidden={openIndex !== i}
                    >
                        <p className="px-6 text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────
export default function ISMSImplementationPage() {
    const [activeSlug, setActiveSlug] = useState(ismsPhases[0].slug);

    const activePhase = ismsPhases.find((p) => p.slug === activeSlug) || ismsPhases[0];
    const ActiveIcon = iconMap[activePhase.icon] || Shield;

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* ═══ HERO ═══ */}
                <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-24 md:py-32 border-b border-neutral-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,36,99,0.04),transparent_50%)]" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
                            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/services/iso-27001" className="hover:text-primary-navy transition-colors">Services</Link>
                            <span>/</span>
                            <span className="text-primary-navy font-bold">ISMS Implementation</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-navy/5 text-primary-navy rounded text-[10px] font-bold uppercase tracking-widest mb-6">
                                    <Shield size={12} />
                                    ISMS Implementation Services
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter mb-8 leading-[0.95]">
                                    Build the Security Foundation <br />
                                    <span className="text-accent-coral">That Gets You Certified.</span>
                                </h1>
                                <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-xl">
                                    Your OEM just added ISO 27001 to the contract requirements. Your TISAX deadline is approaching. You need an ISMS that is audit-ready, not a stack of templates. ITIS-Secure implements, documents, and maintains your Information Security Management System end-to-end.
                                </p>
                                <div className="flex gap-4 mb-10">
                                    <Link href="/contact">
                                        <Button variant="primary" size="lg">Book Your Free ISMS Gap Assessment</Button>
                                    </Link>
                                    <Link href="/contact">
                                        <Button variant="outline" size="lg">Request Methodology Overview</Button>
                                    </Link>
                                </div>
                                <div className="flex flex-wrap gap-6 text-xs font-bold text-neutral-500">
                                    <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-success-emerald" /> 100% First-Time Pass Rate</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-success-emerald" /> 12–16 Week Implementation</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-success-emerald" /> ISO 27001 + TISAX Aligned</span>
                                </div>
                            </motion.div>

                            {/* Hero Visual — PDCA Preview Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-100">
                                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-6">PDCA Lifecycle</div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "PLAN", desc: "Gap Analysis & Scope", bg: "#EFF6FF", color: "#3B82F6" },
                                            { label: "DO", desc: "Implement & Operate", bg: "#F0FDF4", color: "#22C55E" },
                                            { label: "CHECK", desc: "Monitor & Audit", bg: "#FFF7ED", color: "#F59E0B" },
                                            { label: "ACT", desc: "Improve & Certify", bg: "#FDF4FF", color: "#A855F7" },
                                        ].map((item) => (
                                            <div key={item.label} className="p-5 rounded-2xl border border-neutral-50" style={{ backgroundColor: item.bg }}>
                                                <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: item.color }}>{item.label}</div>
                                                <div className="text-sm font-bold text-primary-navy">{item.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-coral/10 rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ═══ INTRO — What Is an ISMS ═══ */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl font-black text-primary-navy tracking-tighter mb-8">
                                    What Is an ISMS and Why It Matters
                                </h2>
                                <div className="space-y-6 text-neutral-600 leading-relaxed">
                                    <p>
                                        An Information Security Management System (ISMS) is the structured framework of policies, procedures, risk assessments, and technical controls that an organisation uses to protect its information assets. It is not a single tool or a one-time project. It is a living system that governs how your company identifies, manages, and reduces information security risks across every department, supplier, and process.
                                    </p>
                                    <p>
                                        For automotive suppliers pursuing TISAX, defence subcontractors navigating CMMC, or any European company facing NIS2 obligations, an ISMS is no longer optional. It is the contractual baseline. BMW, Volkswagen, and Airbus require evidence of a functioning ISMS before awarding or renewing supply contracts. Without one, you are excluded from the bidding table entirely.
                                    </p>
                                    <p>
                                        But your ISMS should be viewed as a <strong>business asset</strong>, not just a compliance burden. It is the foundation upon which every future certification is built — ISO 27001, TISAX, NIS2, DORA, and beyond. At ITIS-Secure, we implement your ISMS using the proven ISO 27001 Plan-Do-Check-Act lifecycle, ensuring that every control, every record, and every process is audit-ready from the very first day.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-2 space-y-6">
                                {[
                                    { label: "Frameworks Supported", value: "ISO 27001 · TISAX · NIS2 · DORA" },
                                    { label: "Typical Timeline", value: "12–16 Weeks to Certification Readiness" },
                                    { label: "TISAX Overlap", value: "60–70% of TISAX Controls Satisfied" },
                                    { label: "Success Rate", value: "100% First-Time Pass Rate" },
                                ].map((fact) => (
                                    <div key={fact.label} className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">{fact.label}</div>
                                        <div className="text-base font-bold text-primary-navy">{fact.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ EXECUTIVE SUMMARY — Mandatory ═══ */}
                <section className="py-16 bg-primary-navy text-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex gap-8 items-start"
                        >
                            <Globe className="text-accent-coral shrink-0 hidden md:block" size={48} />
                            <div>
                                <h2 className="text-2xl font-black mb-6 tracking-tighter">Our Mission</h2>
                                <p className="text-lg text-white/80 leading-relaxed max-w-4xl">
                                    We understand that Information is of greater value than ever. Therefore, our mission is to help our partners protect the Confidentiality, Integrity, and Availability of the Information they hold, as well as reducing the Risks and Vulnerabilities stemming out of error, malevolence, or natural intervention, to make the world a better and safer place.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══ APPROACH + PDCA DIAGRAM ═══ */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-primary-navy tracking-tighter mb-6">
                                Our Approach & Methodology
                            </h2>
                            <p className="text-neutral-500 max-w-3xl mx-auto leading-relaxed mb-4">
                                In the following, we will be describing our proposal for the delivered services. Please note that the activities refer to the Information Security Management System.
                            </p>
                            <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed font-medium">
                                Our ISMS implementation follows the ISO 27001 Plan-Do-Check-Act lifecycle — the internationally recognised framework for building, operating, and continuously improving an information security programme. Each phase builds on the last, creating a living system that evolves with your business and your threat landscape.
                            </p>
                        </div>

                        {/* PDCA Diagram */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative max-w-4xl mx-auto">
                            {/* Connecting Line (desktop) */}
                            <div className="absolute top-1/2 left-[12%] right-[12%] h-px bg-neutral-200 hidden md:block -translate-y-1/2 z-0" />
                            {[
                                { phase: "PLAN", label: "Gap Analysis & Scope", color: "#3B82F6", bg: "#EFF6FF", icon: SearchCode, sections: "Section 01" },
                                { phase: "DO", label: "Implement, Operate & Document", color: "#22C55E", bg: "#F0FDF4", icon: Settings2, sections: "Sections 02–03" },
                                { phase: "CHECK", label: "Monitor, Review & Audit", color: "#F59E0B", bg: "#FFF7ED", icon: Activity, sections: "Sections 04–05" },
                                { phase: "ACT", label: "Improve & Certify", color: "#A855F7", bg: "#FDF4FF", icon: RefreshCw, sections: "Section 06" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.phase}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 text-center p-6 rounded-2xl border border-neutral-100"
                                    style={{ backgroundColor: item.bg }}
                                >
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-white shadow-sm">
                                        <item.icon size={24} style={{ color: item.color }} />
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: item.color }}>{item.phase}</div>
                                    <div className="text-sm font-bold text-primary-navy mb-1">{item.label}</div>
                                    <div className="text-[10px] text-neutral-400 font-bold">{item.sections}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ PHASE SECTIONS — Tabbed Layout ═══ */}
                <section className="py-24 bg-neutral-50/50 border-y border-neutral-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        {/* Horizontal Tab Bar */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
                            {ismsPhases.map((phase) => (
                                <button
                                    key={phase.slug}
                                    onClick={() => setActiveSlug(phase.slug)}
                                    className={`px-5 py-3 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap ${activeSlug === phase.slug
                                        ? "bg-primary-navy text-white shadow-lg"
                                        : "bg-white text-neutral-500 hover:text-primary-navy hover:shadow-md border border-neutral-200"
                                        }`}
                                >
                                    {phase.originalLabel}
                                </button>
                            ))}
                        </div>

                        {/* Two-Column Content: Visual Left + Content Right */}
                        <motion.div
                            key={activePhase.slug}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden"
                        >
                            {/* Left — Phase Visual */}
                            <div
                                className="p-10 lg:p-16 flex flex-col justify-center relative"
                                style={{ backgroundColor: activePhase.pdcaBg }}
                            >
                                <div className="absolute top-6 right-6 lg:top-10 lg:right-10">
                                    <div
                                        className="inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                                        style={{ backgroundColor: "white", color: activePhase.pdcaColor }}
                                    >
                                        {activePhase.pdcaPhase}
                                    </div>
                                </div>
                                <div className="mono text-[120px] md:text-[160px] font-black leading-none mb-6" style={{ color: activePhase.pdcaColor, opacity: 0.12 }}>
                                    {activePhase.number}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-primary-navy tracking-tight mb-4">
                                    {activePhase.title}
                                </h2>
                                <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6">
                                    {activePhase.originalLabel}
                                </h3>
                                <ActiveIcon size={48} style={{ color: activePhase.pdcaColor }} />
                            </div>

                            {/* Right — Content */}
                            <div className="p-10 lg:p-16">
                                <p className="text-neutral-500 leading-relaxed mb-10 text-sm">
                                    {activePhase.introParagraph}
                                </p>
                                {/* Mandatory bullet list */}
                                <ul className="space-y-4">
                                    {activePhase.bullets.map((bullet, bi) => (
                                        <li key={bi}>
                                            <div className="flex gap-3 items-start">
                                                <CheckCircle2 className="text-accent-coral shrink-0 mt-0.5" size={16} aria-hidden="true" />
                                                <span className="text-sm text-neutral-700 leading-relaxed">{bullet.text}</span>
                                            </div>
                                            {bullet.subBullets && (
                                                <ul className="ml-8 mt-3 space-y-2 border-l-2 border-neutral-100 pl-4">
                                                    {bullet.subBullets.map((sub, si) => (
                                                        <li key={si} className="text-sm text-neutral-500 leading-relaxed">
                                                            {sub.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══ ISMS + TISAX CONNECTION ═══ */}
                <section className="py-24 bg-[#F0F4FF]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-primary-navy tracking-tighter mb-8">
                                    Your ISMS Is the Foundation for TISAX Certification
                                </h2>
                                <p className="text-neutral-600 leading-relaxed mb-6">
                                    TISAX Assessment Levels 2 and 3 require a functioning ISMS as their foundation. The VDA ISA catalogue — the control framework that TISAX auditors use — is built directly on top of ISO 27001 principles. This means every hour invested in your ISMS directly accelerates your TISAX timeline.
                                </p>
                                <p className="text-neutral-600 leading-relaxed mb-8">
                                    When you implement your ISMS with ITIS-Secure, your TISAX preparation is already 60–70% complete on the day your ISMS goes live. Our methodology is designed to satisfy both frameworks simultaneously, reducing your total investment by approximately 30% compared to treating them as separate projects.
                                </p>
                                <Link
                                    href="/services/tisax"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-accent-coral hover:underline"
                                >
                                    Learn more about our TISAX Assessment Services <ArrowRight size={16} />
                                </Link>
                            </div>
                            <div className="bg-white p-10 rounded-3xl border border-neutral-100 shadow-lg">
                                <div className="text-center">
                                    <div className="text-6xl font-black text-primary-navy mb-4">60–70%</div>
                                    <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-6">TISAX Controls Satisfied by ISMS</p>
                                    <div className="h-4 rounded-full bg-neutral-100 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "65%" }}
                                            transition={{ duration: 1.5, delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="h-full bg-gradient-to-r from-primary-navy to-accent-coral rounded-full"
                                        />
                                    </div>
                                    <p className="text-xs text-neutral-400 mt-4">One implementation. Two certifications. 30% less effort.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ WHY ITIS-Secure ═══ */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-black text-primary-navy tracking-tighter mb-16 text-center">
                            Why Automotive and Defence Leaders Choose ITIS-Secure
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: Layers,
                                    title: "End-to-End Ownership",
                                    desc: "ITIS-Secure does not just advise — we implement, document, and maintain your entire ISMS. From gap analysis through certification, you have a single partner responsible for every deliverable.",
                                },
                                {
                                    icon: Eye,
                                    title: "Audit-Ready from Day One",
                                    desc: "Every policy, every record, and every dashboard is structured for auditor review. When the assessment arrives, there is no scrambling — your evidence is already organised and traceable.",
                                },
                                {
                                    icon: Zap,
                                    title: "TISAX + ISO 27001 Alignment",
                                    desc: "One implementation, two certifications. Our built-in framework synergy means automotive suppliers satisfy both ISO 27001 and TISAX requirements simultaneously, reducing total investment by 30%.",
                                },
                                {
                                    icon: HeartPulse,
                                    title: "Continuous Compliance, Not a One-Off Project",
                                    desc: "Post-certification support keeps your ISMS current as standards, threats, and regulatory landscapes evolve. We are your long-term compliance partner, not a project vendor.",
                                },
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-10 rounded-3xl border border-neutral-100 hover:shadow-xl transition-shadow duration-300 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 flex items-center justify-center mb-6 group-hover:bg-accent-coral/10 transition-colors">
                                        <card.icon size={28} className="text-primary-navy group-hover:text-accent-coral transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary-navy mb-4">{card.title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ TIMELINE TEASER ═══ */}
                <section className="py-24 bg-primary-navy text-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-16 text-center">
                            What to Expect: ISMS Implementation Timeline
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                            <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-white/10 hidden md:block -translate-y-1/2" />
                            {[
                                { step: "01", title: "Discovery", time: "Week 1–2", desc: "We assess your current posture and define scope." },
                                { step: "02", title: "Build", time: "Week 3–10", desc: "Policies, controls, documentation, dashboards." },
                                { step: "03", title: "Validate", time: "Week 11–12", desc: "Internal mock audit. Evidence review. Ready for assessment." },
                                { step: "04", title: "Certify", time: "Week 13+", desc: "We stand beside you through every official audit." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center"
                                >
                                    <div className="mono text-3xl font-black text-accent-coral mb-4">{item.step}</div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-accent-coral mb-4">{item.time}</div>
                                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-16">
                            <Link href="/contact">
                                <Button variant="primary" size="lg">Get Your Personalised ISMS Timeline</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ═══ FAQ ═══ */}
                <section className="py-24 bg-[#F8FAFC]">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-black text-primary-navy tracking-tighter mb-12 text-center">
                            Frequently Asked Questions: ISMS Implementation
                        </h2>
                        <FAQAccordion />
                    </div>
                </section>

                {/* ═══ FINAL CTA ═══ */}
                <section className="py-24 bg-gradient-to-br from-primary-navy to-secondary-blue text-white">
                    <div className="container mx-auto px-6 max-w-7xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
                                Ready to Build Your Information <br />Security Foundation?
                            </h2>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Whether your deadline is an OEM contract renewal or a NIS2 compliance requirement, the first step is the same: a zero-risk gap assessment that maps exactly where you stand and what it takes to get certified.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-accent-coral text-white hover:bg-accent-coral/90 text-lg px-10 py-6 h-auto rounded-xl">
                                        Book Your Free ISMS Gap Assessment
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-10 py-6 h-auto rounded-xl">
                                        Request ISMS Implementation Guide
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <CertificationBadgeStrip />
                </section>

                {/* ═══ SCHEMA MARKUP ═══ */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "ISMS Implementation",
                            "serviceType": "Information Security Management System Implementation",
                            "provider": {
                                "@type": "Organization",
                                "name": "ITIS-Secure",
                                "url": "https://itis-secure.com"
                            },
                            "areaServed": {
                                "@type": "Place",
                                "name": "Europe"
                            },
                            "description": "End-to-end ISMS implementation following the ISO 27001 PDCA lifecycle. From gap analysis through certification support.",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "ISMS Implementation Phases",
                                "itemListElement": ismsPhases.map((phase, i) => ({
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": phase.title,
                                        "description": phase.introParagraph
                                    }
                                }))
                            }
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://itis-secure.com" },
                                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://itis-secure.com/services" },
                                { "@type": "ListItem", "position": 3, "name": "ISMS Implementation", "item": "https://itis-secure.com/services/isms-implementation" },
                            ]
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": ismsFAQs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer,
                                }
                            }))
                        })
                    }}
                />
            </main>
            <Footer />
        </>
    );
}
