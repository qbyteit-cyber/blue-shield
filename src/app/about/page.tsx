"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import AboutSection from "@/components/ui/AboutSection";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { Users, Lightbulb, Target, Shield, Briefcase, Award } from "lucide-react";
import { TeamGrid } from "@/components/ui/TeamGrid";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});



const values = [
    {
        icon: Shield,
        title: "Uncompromising Integrity",
        desc: "We provide honest, thorough assessments that automotive manufacturers trust."
    },
    {
        icon: Lightbulb,
        title: "Technical Excellence",
        desc: "Deep engineering background in vehicle protocols and supply chain security."
    },
    {
        icon: Target,
        title: "Partner-Centric",
        desc: "We don't just audit; we guide your team towards sustainable compliance."
    }
];

export default function AboutPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section - Matched to Reference DNA Concept */}
                <section className="px-8 pt-60 pb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                                    <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
                                        About BeSecured
                                    </span>
                                </div>
                                <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-none">
                                    Security is in <br />
                                    <span className="text-primary italic">our DNA.</span>
                                </h1>
                                <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
                                    We are a team of experts with outstanding experience, specializing in ensuring compliance with regulations and industry standards in information and cybersecurity.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative aspect-square lg:aspect-auto lg:h-[ rhythm]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
                                <div className="relative z-10 glass-card border-primary/10 p-12 rounded-3xl h-full flex flex-col justify-center">
                                    <p className="text-2xl font-medium leading-relaxed italic text-foreground/80">
                                        "With over 20 years of experience in cybersecurity and information technology, we deliver tailored solutions across public administration and the commercial sector."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Pillars - Re-structured from Reference */}
                <section className="py-32 px-8 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                {
                                    id: "01",
                                    title: "Expertise and Innovation",
                                    desc: "With over 20 years of experience, we bring deep process and technical knowledge to every project. We continuously monitor industry trends and apply innovative approaches."
                                },
                                {
                                    id: "02",
                                    title: "Personal Approach",
                                    desc: "We believe in building strong, personal relationships. As a small, highly skilled company, we ensure an individual approach tailored to your specific goals."
                                },
                                {
                                    id: "03",
                                    title: "Commitment to Excellence",
                                    desc: "Quality is at the heart of everything we do. We don't just meet compliance requirements—we strive to exceed expectations and provide lasting value."
                                }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative p-10 glass-card group hover:bg-surface/50 transition-all border-none bg-foreground/[0.02]"
                                >
                                    <span className="text-5xl font-display font-black text-primary/10 absolute top-6 right-8 group-hover:text-primary/20 transition-colors">
                                        {pillar.id}
                                    </span>
                                    <h3 className="text-2xl font-display font-black mb-6 pr-12 leading-tight">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">
                                        {pillar.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter">Behind Every Solution <br /> are <span className="text-primary italic">Real People.</span></h2>
                            <p className="text-foreground/50 max-w-2xl mx-auto font-mono">Get to know our team of information and cybersecurity experts who turn complex compliance into business value.</p>
                        </div>
                        <TeamGrid />
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
