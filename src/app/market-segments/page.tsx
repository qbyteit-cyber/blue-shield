"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import {
    Building2,
    Zap,
    Factory,
    Car,
    Stethoscope,
    Code2,
    Cpu,
    Landmark,
    Truck,
    Plane
} from "lucide-react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const segments = [
    {
        icon: Plane,
        title: "Aerospace",
        desc: "We provide specialized cybersecurity solutions for the aerospace sector, ensuring compliance with AS9100D and protecting critical avionics systems, ground control, and satellite communications."
    },
    {
        icon: Building2,
        title: "Public Administration",
        desc: "We protect sensitive data and critical information systems of public administration against cyberattacks and unauthorized access. We assist with compliance with legislative and security standards."
    },
    {
        icon: Zap,
        title: "Energy",
        desc: "We safeguard critical infrastructure from cyber threats that could disrupt energy supply. Our focus includes securing control systems (SCADA/ICS) and ensuring resilience against attacks."
    },
    {
        icon: Factory,
        title: "Manufacturing",
        desc: "We minimize the risk of cyberattacks on production lines and industrial systems. We help secure IoT and OT environments to ensure smooth manufacturing operations."
    },
    {
        icon: Car,
        title: "Automotive Industry",
        desc: "We ensure the security of automotive systems, protect intellectual property, and support manufacturers and suppliers in achieving cyber resilience across the supply chain."
    },
    {
        icon: Stethoscope,
        title: "Healthcare",
        desc: "We protect healthcare facilities and patient data from breaches and cyberattacks. We assist with securing healthcare systems and ensuring compliance with regulations such as GDPR."
    },
    {
        icon: Code2,
        title: "Software House",
        desc: "We help developers secure applications from design to deployment. We perform penetration tests, code reviews, and implement secure DevOps practices."
    },
    {
        icon: Cpu,
        title: "Technology Companies",
        desc: "We secure cloud services, IT infrastructure, and intellectual property. We provide protection against DDoS attacks, ransomware, and other threats."
    },
    {
        icon: Landmark,
        title: "Financial Sector",
        desc: "We protect banks, insurers, and fintech companies against cyber threats, fraud, and data breaches. We provide security monitoring, fraud prevention, and regulatory compliance."
    },
    {
        icon: Truck,
        title: "Transport",
        desc: "We secure the IT systems of transport companies, the aviation industry, and logistics against cyber threats. We help protect intelligent transport systems and control centers."
    }
];

export default function MarketSegments() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

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
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                                <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
                                    Industry Vertical Expertise
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-none">
                                Market <br />
                                <span className="text-primary italic">Segments.</span>
                            </h1>
                            <p className="text-xl text-foreground/60 leading-relaxed">
                                We help organizations across various industries protect their data, systems, and infrastructure from evolving cyber threats with tailored security strategies.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Segments Grid */}
                <section className="py-24 px-8 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {segments.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 glass-card group hover:bg-surface/50 transition-all border-none bg-foreground/[0.02]"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                        <s.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-display font-black mb-4 group-hover:text-primary transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="text-foreground/60 leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                                        {s.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto glass-card p-16 rounded-[3rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                        <h2 className="text-4xl font-display font-black mb-6 relative z-10">Don't see your industry?</h2>
                        <p className="text-foreground/60 mb-10 max-w-xl mx-auto relative z-10">
                            Our security frameworks are adaptable to any regulated or specialized market. Contact us for a free orientation consultation.
                        </p>
                        <button
                            onClick={() => setCalculatorOpen(true)}
                            className="px-10 py-5 bg-primary text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20 relative z-10"
                        >
                            GET FREE CONSULTATION
                        </button>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
