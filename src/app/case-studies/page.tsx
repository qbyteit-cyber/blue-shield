"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
    CheckCircle2,
    ArrowRight,
    Zap,
    Shield,
    TrendingUp,
    Building2,
    Target
} from "lucide-react";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";

const CASE_STUDIES = [
    {
        id: "tier-1-tisax",
        title: "Tier-1 Automotive Supplier Achieves TISAX AL3 in 90 Days",
        clientProfile: {
            industry: "Automotive Electronics Manufacturing",
            size: "500+ employees, 3 production facilities",
            challenge: "Required TISAX AL3 for new BMW contract worth €40M"
        },
        challenge: {
            description: "The client faced a critical deadline to secure a major OEM contract. Their existing infrastructure was highly fragmented across three geographical sites, with inconsistent security policies and no centralized ISMS.",
            points: [
                "Tight 90-day deadline imposed by procurement",
                "Multiple legacy systems with deep technical debt",
                "No existing ISMS framework",
                "Complex multi-site coordination across different regulatory zones"
            ]
        },
        approach: [
            {
                phase: "Phase 1: Gap Analysis (Week 1-2)",
                tasks: [
                    "Conducted comprehensive VDA ISA baseline assessment",
                    "Identified 47 control gaps across 3 sites",
                    "Created prioritized remediation roadmap"
                ]
            },
            {
                phase: "Phase 2: Implementation (Week 3-10)",
                tasks: [
                    "Deployed ISMS framework based on ISO 27001:2022",
                    "Conducted 12 staff training sessions",
                    "Implemented technical controls (encryption, access management, incident response)"
                ]
            },
            {
                phase: "Phase 3: Assessment Prep (Week 11-12)",
                tasks: [
                    "Mock audit simulation with former VDA assessors",
                    "Evidence documentation review and refinement",
                    "Executive readiness briefings for C-level stakeholders"
                ]
            }
        ],
        results: [
            "Passed TISAX AL3 assessment on first attempt",
            "Secured €40M BMW contract",
            "Reduced information security incidents by 73%",
            "Completed 2 weeks ahead of schedule"
        ],
        technologies: ["ISO 27001:2022", "VDA ISA 5.0", "Endpoint Encryption", "SIEM Integration"],
        testimonial: "ITIS Secure's methodology was surgical. They didn't just give us policies; they transformed our technical readiness in time to win our biggest contract to date."
    },
    {
        id: "iso-27001-multisite",
        title: "Enterprise ISO 27001 Certification for Multi-National Software Provider",
        clientProfile: {
            industry: "Autonomous Driving Software",
            size: "1200+ employees, Global Presence",
            challenge: "Global standardization for Mercedes-Benz supply chain integration"
        },
        challenge: {
            description: "A fast-scaling software startup needed to prove its enterprise maturity to the 'Big Three' German OEMs. Disjointed cloud operations across AWS and Azure made compliance a moving target.",
            points: [
                "Hybrid cloud complexity (AWS/Azure)",
                "Lack of standardized incident response",
                "Strict 'Zero Trust' requirement from OEM procurement",
                "Rapid headcount growth outpacing security training"
            ]
        },
        approach: [
            {
                phase: "Phase 1: Scoping & Design",
                tasks: ["Defined ISMS boundaries for global DevOps pipelines", "Zero-Trust architecture audit"]
            },
            {
                phase: "Phase 2: Modern Controls",
                tasks: ["Automated compliance monitoring deployment", "Developer-focused security workshops"]
            }
        ],
        results: [
            "Zero major non-conformities during accreditation",
            "Approved as critical vendor for Mercedes-Benz",
            "SOC2 Type II and ISO 27001 dual alignment"
        ],
        technologies: ["Cloud Security Posture Management", "Infrastructure as Code Audit", "Zero Trust"],
        testimonial: "They speak the language of developers and auditors simultaneously. Rare and invaluable."
    },
    {
        id: "tpisr-us-market",
        title: "TPISR Compliance for European Tech Firm Entering US Market",
        clientProfile: {
            industry: "Connected Vehicle Services",
            size: "200 employees",
            challenge: "Regulatory hurdle for Ford/GM supply chain entry"
        },
        challenge: {
            description: "To enter the North American market, our client needed to pass the rigorous Third-Party Information Security Requirements (TPISR) used by US-based OEMs.",
            points: [
                "Cross-border data flow restrictions",
                "Specific NIST 800-171 mapping requirements",
                "Aggressive market entry timeline"
            ]
        },
        approach: [
            {
                phase: "Phase 1: Mapping",
                tasks: ["Cross-walking TISAX controls to TPISR/NIST standards", "Data privacy impact assessment"]
            }
        ],
        results: [
            "100% compliance score on first TPISR audit",
            "Successfully onboarded with Ford and GM",
            "Secure data bridge established between EU and US nodes"
        ],
        technologies: ["NIST 800-171", "TPISR Framework", "Cross-Border Data Encryption"],
        testimonial: "Navigating US OEM requirements from Europe seemed impossible. ITIS Secure simplified the complexity."
    }
];

export default function CaseStudiesPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-8 border-b border-foreground/5 relative">
                <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-6"
                    >
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Procurement-Proven Results</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 italic">
                        Real World <span className="text-primary not-italic">Deliverables.</span>
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-mono">
                        How we help Tier-1 suppliers navigate complex certification pipelines to secure multi-million euro OEM contracts.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 px-8">
                <div className="max-w-7xl mx-auto space-y-32">
                    {CASE_STUDIES.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-12 gap-12 items-start"
                        >
                            {/* Left Meta info */}
                            <div className="lg:col-span-4 sticky top-32 space-y-8">
                                <div className="glass-card p-8 rounded-3xl border-primary/10">
                                    <h3 className="text-2xl font-display font-black text-foreground mb-6 uppercase tracking-tighter italic text-primary">Client Profile.</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Building2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <div className="text-sm font-mono text-foreground/70">{study.clientProfile.industry}</div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Target className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <div className="text-sm font-mono text-foreground/70">{study.clientProfile.size}</div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Shield className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <div className="text-xs font-bold font-mono text-primary/80 uppercase">{study.clientProfile.challenge}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em]">Technical Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {study.technologies.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-[10px] font-mono text-foreground/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-8 space-y-12">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-8 leading-tight">
                                        {study.title}
                                    </h2>
                                    <div className="p-8 bg-foreground/[0.02] border border-foreground/5 rounded-3xl">
                                        <p className="text-lg text-foreground/80 leading-relaxed font-mono italic mb-8">
                                            "{study.challenge.description}"
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {study.challenge.points.map((point, i) => (
                                                <div key={i} className="flex gap-3 text-sm text-foreground/60">
                                                    <span className="text-primary font-black">/</span>
                                                    {point}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Approach */}
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-display font-black text-foreground uppercase tracking-tighter flex items-center gap-3">
                                        <Zap className="w-6 h-6 text-primary" />
                                        Our Approach
                                    </h3>
                                    <div className="space-y-6">
                                        {study.approach.map((step, i) => (
                                            <div key={i} className="relative pl-8 border-l-2 border-primary/20 py-2">
                                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                                <h4 className="text-lg font-bold text-foreground mb-4 font-display">{step.phase}</h4>
                                                <ul className="space-y-2">
                                                    {step.tasks.map((task, j) => (
                                                        <li key={j} className="text-sm text-foreground/60 flex items-center gap-3">
                                                            <CheckCircle2 className="w-4 h-4 text-primary/40" />
                                                            {task}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="glass-card p-10 rounded-[3rem] border-primary/20 bg-primary/[0.02]">
                                    <h3 className="text-2xl font-display font-black text-foreground mb-8 uppercase tracking-tighter flex items-center gap-3">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                        The Outcome
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                        {study.results.map((res, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-primary/10">
                                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                <span className="text-sm font-black text-foreground uppercase tracking-tight">{res}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-foreground/5 pt-8 italic text-foreground/60 font-mono text-sm">
                                        {study.testimonial}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-8 italic">
                        Achieve Procurement <span className="text-primary not-italic">Credibility.</span>
                    </h2>
                    <button
                        onClick={() => setCalculatorOpen(true)}
                        className="px-12 py-6 bg-primary text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/20 flex items-center gap-4 mx-auto"
                    >
                        BOOK FOR FREE GAP ASSESSMENT
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
