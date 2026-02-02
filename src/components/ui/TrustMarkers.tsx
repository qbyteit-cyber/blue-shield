"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Shield } from "lucide-react";

const stats = [
    {
        icon: Award,
        value: "10+",
        label: "Years Experience",
    },
    {
        icon: TrendingUp,
        value: "98%",
        label: "First-Time Pass Rate",
    },
    {
        icon: Users,
        value: "100+",
        label: "Automotive Suppliers Trusted",
    },
    {
        icon: Shield,
        value: "ISO 27001",
        label: "Certified Auditors",
    },
];

export default function TrustMarkers() {
    return (
        <section className="py-16 px-8 relative z-10 w-full max-w-7xl mx-auto">
            {/* Performance Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-6 rounded-xl text-center group hover:border-primary/20 transition-all"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                            <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                            {stat.value}
                        </div>
                        <div className="text-sm text-white/50 font-medium">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Certification Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 glass-card p-8 rounded-2xl"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-display font-semibold text-white mb-2">
                            Recognized & Certified
                        </h3>
                        <p className="text-sm text-white/50">
                            Accredited by leading automotive and security standards bodies
                        </p>
                    </div>

                    <div className="flex items-center gap-8 flex-wrap justify-center">
                        {/* VDA ISA (TISAX) */}
                        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                            <div className="w-48 h-48 rounded-lg flex items-center justify-center">
                                <img
                                    src="/tisax-badge-alt.png"
                                    alt="TISAX Certified"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* ISO/IEC 27001 */}
                        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                            <div className="w-40 h-40 rounded-lg flex items-center justify-center">
                                <img
                                    src="/iso-27001-badge.png"
                                    alt="ISO 27001 Certified"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-xs text-white/40">27001:2022</span>
                        </div>

                        {/* GDPR */}
                        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                            <div className="w-48 h-48 rounded-lg flex items-center justify-center">
                                <img
                                    src="/gdpr-certified-badge.png"
                                    alt="GDPR Certified"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
