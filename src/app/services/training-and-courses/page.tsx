"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
    BookOpen,
    Users,
    GraduationCap,
    Clock,
    Target,
    ShieldCheck,
    Award,
    Users2,
    Zap,
    BarChart3,
    ChevronRight,
    Search,
    BookMarked
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const COURSES = [
    {
        category: "Management",
        title: "ISMS Internal Auditor (ISO 27001)",
        duration: "3 Days",
        audience: "IT Managers, Quality Officers",
        badge: "ISO 27001",
        description: "Focus on audit methodology, gathering objective evidence, and internal certification readiness for corporate environments.",
        icon: ShieldCheck
    },
    {
        category: "Leadership",
        title: "Cybersecurity Manager Training",
        duration: "5 Days",
        audience: "Aspiring CISOs, Security Leads",
        badge: "CISM Prep",
        description: "Deep dive into risk management, policy drafting, incident response leadership, and strategic security governance.",
        icon: BarChart3
    },
    {
        category: "Technical",
        title: "Employee Cyber Awareness",
        duration: "Half-Day / Ongoing",
        audience: "All Staff",
        badge: "Human Firewall",
        description: "Protecting the human perimeter against phishing, social engineering, and secure remote work practices tailored for B2B.",
        icon: Users2
    },
    {
        category: "Regulatory",
        title: "Framework Specials: NIS2 / DORA / TISAX",
        duration: "2 Days",
        audience: "Compliance Officers, Legal",
        badge: "NIS2 / DORA",
        description: "Strategic workshops focusing on specific regulatory requirements, implementation roadmaps, and enforcement preparation.",
        icon: Target
    }
];

const METHODOLOGY = [
    {
        icon: Zap,
        title: "Practical Focus",
        description: "No theoretical fluff. We use real-world audit scenarios and templates derived from actual security assessments."
    },
    {
        icon: Award,
        title: "Certified Instructors",
        description: "All courses are led by active Senior Auditors and Cybersecurity Architects with decades of field experience."
    },
    {
        icon: Users,
        title: "Tailored Content",
        description: "Customizable modules mapped to your industry. We adjust case studies for Automotive, Finance, or Tech sectors."
    },
    {
        icon: GraduationCap,
        title: "Certification Prep",
        description: "Designed specifically to help your team pass official certification exams like ISO 27001 Internal Auditor or CISM."
    }
];

export default function TrainingPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [filter, setFilter] = useState("All");

    const filteredCourses = filter === "All"
        ? COURSES
        : COURSES.filter(course => course.badge.includes(filter) || course.category === filter);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="relative pt-60 pb-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8"
                        >
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">
                                Academy & Knowledge
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                            <TerminalPulse text="Cybersecurity Training" delay={500} /><br />
                            <TerminalPulse text="& Professional Courses" delay={1500} className="text-primary" />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2 }}
                            className="text-xl text-foreground/60 max-w-2xl mb-12 font-mono leading-relaxed"
                        >
                            Empowering your workforce and leadership with the knowledge to navigate the complex landscape of ISO 27001, NIS2, and DORA. We build high-integrity human perimeters.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <a
                                href="/#contact"
                                className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(8,97,242,0.3)] flex items-center gap-3"
                            >
                                REQUEST A CUSTOM QUOTE
                                <ChevronRight className="w-5 h-5" />
                            </a>
                            <button className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all flex items-center gap-3">
                                VIEW COURSE SYLLABUS
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* Course Filter & Grid */}
                <section className="py-24 px-8 border-y border-foreground/5 bg-surface/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                            <h2 className="text-3xl font-display font-black text-foreground">The Academy Grid</h2>

                            <div className="flex flex-wrap gap-2">
                                {["All", "ISO 27001", "NIS2", "Management", "Technical"].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${filter === f
                                                ? "bg-primary border-primary text-white"
                                                : "bg-foreground/5 border-foreground/10 text-foreground/60 hover:border-primary/40"
                                            }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredCourses.map((course, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-foreground/5 backdrop-blur-md p-8 rounded-2xl border border-foreground/10 hover:border-primary/30 transition-all group relative overflow-hidden flex flex-col h-full"
                                >
                                    {/* Framework Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-[10px] font-black rounded uppercase tracking-widest shadow-lg">
                                        {course.badge}
                                    </div>

                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <course.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.2em]">{course.category}</div>
                                            <h3 className="text-2xl font-display font-bold text-foreground">{course.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-sm text-foreground/60 leading-relaxed font-mono mb-8 flex-grow">
                                        {course.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 border-t border-foreground/5 pt-6 mt-auto">
                                        <div>
                                            <div className="text-[10px] font-mono font-bold text-foreground/40 uppercase mb-1">Duration</div>
                                            <div className="text-sm font-bold text-foreground">{course.duration}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-mono font-bold text-foreground/40 uppercase mb-1">Target Audience</div>
                                            <div className="text-sm font-bold text-foreground">{course.audience}</div>
                                        </div>
                                    </div>

                                    {/* Hover Arrow */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ChevronRight className="w-5 h-5 text-primary" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Methodology Section */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4">Quality Standards</div>
                                <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-8 leading-[0.95]">
                                    How We <br />
                                    <span className="text-primary italic">Deepen Expertise.</span>
                                </h2>
                                <p className="text-xl text-foreground/50 font-mono mb-12">
                                    Our methodology is built on active field experience. We don't just teach the standard; we teach how to survive a technical audit.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {METHODOLOGY.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10 flex gap-6 group hover:border-primary/20 transition-all"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                            <p className="text-sm text-foreground/60 leading-relaxed font-mono">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conversion Path Section */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto bg-primary/5 rounded-3xl p-12 md:p-20 border border-primary/20 relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-blueprint opacity-10" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-8">
                                Elevate Your Team's <br />
                                <span className="text-primary">Security IQ.</span>
                            </h2>
                            <p className="text-xl text-foreground/60 mb-12 font-mono max-w-2xl mx-auto">
                                Custom corporate training sessions available in-person or remotely. Request a syllabus or a custom quote today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href="/#contact"
                                    className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-[0_15px_40_rgba(8,97,242,0.3)]"
                                >
                                    REQUEST QUOTE
                                </a>
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all"
                                >
                                    READINESS TOOL
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            {/* Readiness Calculator Modal */}
            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
