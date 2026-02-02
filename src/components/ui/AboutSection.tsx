"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Target } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Security-First Approach",
        description: "Over a decade of experience in automotive cybersecurity and information security management systems.",
    },
    {
        icon: Award,
        title: "Certified Expertise",
        description: "ISO 27001 Lead Auditors and TISAX-accredited assessors with deep automotive industry knowledge.",
    },
    {
        icon: Users,
        title: "Trusted Partner",
        description: "Supporting 100+ automotive suppliers and Tier-1 manufacturers across Europe with compliance excellence.",
    },
    {
        icon: Target,
        title: "Results-Driven",
        description: "98% first-time pass rate on TISAX assessments through our proven methodology and hands-on guidance.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-8 relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                        <span className="text-sm font-mono text-primary uppercase tracking-wider">
                            About ITIS Secure
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Your Trusted Partner in Automotive Security Compliance
                    </h2>

                    <p className="text-lg text-white/70 leading-relaxed mb-6">
                        ITIS Secure is a specialized security audit firm dedicated to helping automotive suppliers and manufacturers achieve and maintain compliance with TISAX®, ISO 27001, and GDPR standards.
                    </p>

                    <p className="text-white/60 leading-relaxed mb-8">
                        Founded by former automotive security engineers and compliance officers, we understand the unique challenges of protecting sensitive data in the automotive supply chain. Our mission is to make world-class security audits accessible, efficient, and results-oriented.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <div className="text-3xl font-display font-bold text-primary mb-1">10+</div>
                            <div className="text-sm text-white/50">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-primary mb-1">100+</div>
                            <div className="text-sm text-white/50">Clients Served</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-primary mb-1">98%</div>
                            <div className="text-sm text-white/50">Success Rate</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Features Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 rounded-xl group hover:border-primary/20 transition-all"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-display font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
