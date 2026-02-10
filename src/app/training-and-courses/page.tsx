"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import {
    GraduationCap,
    BookOpen,
    Shield,
    Users,
    Award,
    Presentation,
    Lightbulb,
    CheckCircle2,
    ArrowRight,
    Globe,
    Clock,
    FileText
} from "lucide-react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const TrainingAndCourses = () => {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    const courses = [
        {
            title: "TISAX® Implementation Specialist",
            duration: "3 Days",
            level: "Intermediate to Advanced",
            focus: "Automotive Supply Chain",
            desc: "A deep dive into the VDA ISA catalog. Learn how to implement controls, manage evidence, and prepare for high-assessment level audits.",
            icon: Shield
        },
        {
            title: "ISO 27001:2022 Internal Auditor",
            duration: "2 Days",
            level: "Intermediate",
            focus: "Compliance & Governance",
            desc: "Master the art of internal auditing for ISMS. Learn the requirements of ISO 19011 and how to identify non-conformities before the certificate audit.",
            icon: FileText
        },
        {
            title: "Cyber Security Awareness (Automotive)",
            duration: "4 Hours / Modular",
            level: "All Staff",
            focus: "Human Risk Management",
            desc: "Tailored for the automotive sector. Covering phishing, social engineering, and secure handling of prototype data and intellectual property.",
            icon: Users
        },
        {
            title: "Executive Security Strategy",
            duration: "1 Day",
            level: "C-Level / Management",
            focus: "Strategic ROI",
            desc: "Bridging the gap between technical security and business objectives. How to budget for resilience and manage cyber-risk as a business functional area.",
            icon: Lightbulb
        }
    ];

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero section */}
                <section className="px-8 pt-60 pb-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                                <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
                                    Knowledge Hub
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-tight">
                                Cultivating <span className="text-primary italic">Technical Authority:</span><br />
                                Training & specialized Courses
                            </h1>
                            <p className="text-xl text-foreground/60 max-w-2xl font-mono leading-relaxed italic">
                                Compliance is not just a certificate; it's a culture. We bridge the documentation gap with hands-on technical expertise.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Core Philosophy */}
                <section className="py-24 px-8 border-y border-foreground/5 bg-foreground/[0.01]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-display font-black mb-8 italic">The Human Firewall Strategy</h2>
                            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
                                The most sophisticated technical shield is only as strong as the individuals operating within it.
                            </p>
                            <p className="text-foreground/60 leading-relaxed">
                                Our training programs are designed by senior auditors and security architects. We don't just read from slides; we share real-world scenarios, audit findings, and implementation shortcuts that save hundreds of hours in the compliance journey.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-8 glass-card border-none bg-primary/5 rounded-3xl">
                                <Award className="w-10 h-10 text-primary mb-4" />
                                <h4 className="font-black mb-2">Certified Experts</h4>
                                <p className="text-xs text-foreground/50">Instruction from TISAX and ISO accredited auditors.</p>
                            </div>
                            <div className="p-8 glass-card border-none bg-foreground/[0.03] rounded-3xl">
                                <Clock className="w-10 h-10 text-foreground/40 mb-4" />
                                <h4 className="font-black mb-2">Flexible Formats</h4>
                                <p className="text-xs text-foreground/50">On-site, remote, or hybrid learning modules.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Catalog */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20">
                            <h2 className="text-5xl font-display font-black tracking-tighter mb-6">Specialized Course Catalog</h2>
                            <p className="text-foreground/50 max-w-2xl text-lg">Deep domain expertise delivered through structured technical authority.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {courses.map((course, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-10 glass-card border-none bg-surface/50 rounded-[2.5rem] flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <course.icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] font-mono font-bold text-primary block uppercase tracking-widest">{course.duration}</span>
                                                <span className="text-[10px] font-mono text-foreground/40 block uppercase tracking-widest">{course.level}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-black mb-4">{course.title}</h3>
                                        <p className="text-foreground/60 leading-relaxed mb-6 italic">{course.desc}</p>
                                    </div>
                                    <div className="pt-6 border-t border-foreground/5 flex items-center justify-between">
                                        <span className="text-xs font-mono text-primary font-bold">{course.focus}</span>
                                        <button className="text-sm font-black flex items-center gap-2 hover:text-primary transition-colors">
                                            ENROLL INQUIRY <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Delivery Formats */}
                <section className="py-32 px-8 bg-surface">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-display font-black mb-16 border-l-4 border-primary pl-8">Delivery Frameworks</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="p-10 glass-card bg-background/40">
                                <Presentation className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-4">On-Site Workshops</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed">Direct engagement at your facility. Ideal for leadership alignment and complex technical implementation teams.</p>
                            </div>
                            <div className="p-10 glass-card bg-background/40">
                                <Globe className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-4">Live Virtual Training</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed">Interactive sessions powered by modern collaboration tools. Seamless for distributed global teams.</p>
                            </div>
                            <div className="p-10 glass-card bg-background/40">
                                <BookOpen className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-4">Customized Curriculum</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed">We build modules specific to your internal policies, toolsets, and organizational structure.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ / Info Section */}
                <section className="py-32 px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-display font-black mb-12 text-center">Why Train with ITIS Secure?</h2>
                        <div className="space-y-6">
                            {[
                                "Auditor Perspective: We teach you what auditors look for, not just what the standard says.",
                                "Hands-on implementation templates included with every technical course.",
                                "Ongoing support: Access to instructors for 30 days post-training for follow-up questions.",
                                "Sector Specificity: Every example is drawn from the automotive and aerospace supply chain."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 items-start p-6 glass-card border-none bg-foreground/[0.02]">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <p className="text-foreground/70 font-medium">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="glass-card border-none p-16 rounded-[4rem] bg-gradient-to-br from-primary to-blue-900 relative overflow-hidden">
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                            <div className="max-w-2xl relative z-10">
                                <h3 className="text-5xl font-display font-black text-white mb-8 italic">Ready to Upskill Your Team?</h3>
                                <p className="text-white/70 text-xl mb-12 italic">Don't leave compliance to chance. Empower your workforce with technical authority from ITIS Secure.</p>
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="px-12 py-6 bg-white text-primary font-black rounded-3xl text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4"
                                >
                                    BOOK A TRAINING CONSULTATION
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
};

export default TrainingAndCourses;
