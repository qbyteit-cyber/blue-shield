"use client";

import { motion } from "framer-motion";
import { Search, ShieldX, Settings, ShieldCheck, RefreshCw } from "lucide-react";

const steps = [
    {
        title: "Discovery",
        desc: "We map your data, assets, and regulatory obligations.",
        icon: Search,
        color: "bg-neutral-100"
    },
    {
        title: "Gap Analysis",
        desc: "A deep-dive audit of your posture against VDA ISA or NIST.",
        icon: ShieldX,
        color: "bg-neutral-50"
    },
    {
        title: "Implementation",
        desc: "Engineers build policies and technical controls following the Plan-Do-Check-Act lifecycle for sustainable security.",
        icon: Settings,
        color: "bg-neutral-100"
    },
    {
        title: "Certification",
        desc: "We stand by your side until the auditor signs off.",
        icon: ShieldCheck,
        color: "bg-primary-navy text-white"
    },
    {
        title: "Continuous Improvement",
        desc: "Maintaining your posture through automated monitoring and periodic reviews.",
        icon: RefreshCw,
        color: "bg-neutral-100"
    }
];

export function Lifecycle() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <span className="text-xs font-bold text-accent-coral uppercase tracking-widest">Our Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4">The &quot;Zero to Certified&quot; Lifecycle</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-xl border border-neutral-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300 ${step.color}`}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform">
                                <step.icon className={step.color.includes('navy') ? "text-primary-navy" : "text-primary-navy"} size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-sm text-neutral-500 md:text-neutral-700 opacity-70 leading-relaxed">
                                {step.desc}
                            </p>

                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-neutral-200">
                                    <ArrowIcon />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
);
