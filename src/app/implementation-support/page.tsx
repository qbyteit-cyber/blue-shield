"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import {
    ClipboardCheck,
    Settings2,
    LifeBuoy,
    CheckCircle2,
    Shield,
    Zap,
    TrendingUp,
    ShieldAlert,
    ArrowRight,
    Search,
    Wrench,
    Activity,
    GraduationCap,
    Clock,
    Heart,
    Flame
} from "lucide-react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const ImplementationSupport = () => {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    const helpCards = [
        {
            number: "01",
            title: "Implementation of Frameworks and Standards",
            icon: Settings2,
            points: [
                "Full analysis of current processes, technologies, and systems.",
                "Design of security measures precision-aligned with standard requirements.",
                "Development of high-integrity documentation, internal guidelines, and risk analysis."
            ]
        },
        {
            number: "02",
            title: "Audits and Status Analysis",
            icon: ClipboardCheck,
            points: [
                "Organizational assessment against selected frameworks or legislative requirements.",
                "Surgical identification of non-compliance with corrective remediation roadmaps.",
                "Pre-certification audits to ensure zero-friction official TISAX/ISO assessments."
            ]
        },
        {
            number: "03",
            title: "Training and Education",
            icon: GraduationCap,
            points: [
                "High-level training for employees and management on cybersecurity vitalization.",
                "Specialized expert modules: ISMS Manager, Lead Auditor, and Risk Specialist training.",
                "Cultural transformation programs to build a resilient human firewall."
            ]
        },
        {
            number: "04",
            title: "Support and Long-Term Development",
            icon: LifeBuoy,
            points: [
                "Post-implementation support and strategic security consultations.",
                "Continuous monitoring of legislative changes and international standard shifts.",
                "Iterative testing and hardening of established security processes."
            ]
        }
    ];

    const frameworkSupport = [
        { name: "ISO 27001", desc: "Building the high-integrity foundation of information security management systems." },
        { name: "NIS2 & DORA", desc: "Resilience frameworks for regulated infrastructure and financial entities." },
        { name: "TISAX® Specialized", desc: "Automotive-tier AL3 readiness and supply chain security ecosystems." },
        { name: "GDPR & Privacy", desc: "Data sovereignty and privacy engineering, not just check-box compliance." },
        { name: "EXTENDED COMPLIANCE", desc: "Support for HIPAA, SOC 2, NIST CSF, PCI DSS, and CMMC 2.0." }
    ];

    const strategicAdvantages = [
        { title: "Personalized Approach", desc: "Tailored security solutions that match your specific industry size and risk profile.", icon: Search },
        { title: "Elite Expertise", desc: "Senior consultants with 20+ years of frontline technical and audit experience.", icon: Shield },
        { title: "Active Proactivity", desc: "We anticipate legislative changes before they impact your business continuity.", icon: Zap },
        { title: "Passion for Security", desc: "Precision and quality driven by a genuine commitment to cyber-resilience.", icon: Flame }
    ];

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="px-8 pt-60 pb-32">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1"
                        >
                            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                                <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
                                    Operational Authority
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-tight">
                                Implementation <br />
                                <span className="text-primary italic">& Support Hub.</span>
                            </h1>
                            <p className="text-xl text-foreground/60 leading-relaxed max-w-xl font-mono italic">
                                Effective deployment of cybersecurity frameworks. We bridge the documentation gap with high-performance technical reality.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex-1 w-full lg:block hidden"
                        >
                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden glass-card border-none relative">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2570&auto=format&fit=crop"
                                    alt="Security Infrastructure"
                                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-[0.4em] mb-2">Technical Core</h4>
                                    <p className="text-sm font-bold text-white uppercase tracking-widest">ITIS Secure Implementation Engine</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Service Pillars Grid */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-24 text-center lg:text-left">
                            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">How We Can Help You</h2>
                            <p className="text-foreground/50 max-w-2xl text-lg font-mono">Bridging the gap between complex regulations and high-performance business processes.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {helpCards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="p-16 rounded-[3rem] glass-card border-none bg-foreground/[0.02] relative overflow-hidden group"
                                >
                                    <span className="absolute top-10 right-16 text-8xl font-display font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-500">{card.number}</span>
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-12">
                                        <card.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-display font-black mb-8 leading-tight">{card.title}</h3>
                                    <ul className="space-y-4 mb-8">
                                        {card.points.map((p, pi) => (
                                            <li key={pi} className="flex items-start gap-4 text-sm text-foreground/60 leading-relaxed italic">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Focus Areas Section */}
                <section className="py-32 px-8 bg-surface">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-display font-black mb-16 tracking-tighter">Strategic Framework Mastery</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {frameworkSupport.map((f, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-10 glass-card bg-background/40 hover:bg-primary/5 transition-all flex flex-col justify-between"
                                >
                                    <h4 className="text-2xl font-black mb-6 border-b border-foreground/5 pb-4 group-hover:text-primary transition-colors">{f.name}</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed font-mono italic">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us - Strategic Advantage */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20">
                            <h2 className="text-5xl font-display font-black tracking-tighter mb-6">Strategic Advantage</h2>
                            <p className="text-foreground/50 text-lg">Why leading enterprises trust ITIS Secure for their implementation lifecycle.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {strategicAdvantages.map((adv, i) => (
                                <div key={i} className="space-y-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <adv.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="text-xl font-black">{adv.title}</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed italic">{adv.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="glass-card p-16 rounded-[4rem] border-none bg-primary/[0.03] relative overflow-hidden">
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                            <h2 className="text-4xl font-display font-black mb-16 text-center tracking-tighter">Immediate Organizational Gains</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center">
                                {[
                                    { icon: CheckCircle2, text: "Strict compliance with international standards." },
                                    { icon: Zap, text: "Fortified resilience against cyber incursions." },
                                    { icon: ShieldAlert, text: "Radical minimization of incident risk vectors." },
                                    { icon: Heart, text: "Brand protection and client-side trust assurance." },
                                    { icon: TrendingUp, text: "Competitive leverage through certified security excellence." }
                                ].map((benefit, i) => (
                                    <div key={i} className="space-y-6 group">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <benefit.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <p className="text-[10px] font-mono font-bold text-foreground/60 leading-relaxed px-4 uppercase tracking-widest">{benefit.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-6xl font-display font-black mb-12 tracking-tighter leading-tight italic">Engineering <span className="text-primary italic">Audit-Proof</span> Ecosystems.</h2>
                        <button
                            onClick={() => setCalculatorOpen(true)}
                            className="px-12 py-6 bg-primary text-white font-black rounded-3xl text-xl hover:scale-105 transition-all shadow-2xl shadow-primary/30"
                        >
                            Initiate Audit Readiness Test
                        </button>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
};

export default ImplementationSupport;
