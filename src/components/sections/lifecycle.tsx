"use client";

import { motion } from "framer-motion";
import { Search, ShieldX, Settings, ShieldCheck, RefreshCw } from "lucide-react";

export function Lifecycle() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-neutral-50 -skew-y-3 origin-top-left -z-10" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-sm font-bold text-accent-coral uppercase tracking-widest block mb-3">Our Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-black text-primary-navy tracking-tight mb-6">
                        The "Zero to Certified" Lifecycle
                    </h2>
                    <p className="text-neutral-500 text-lg">
                        A structured, evidence-based approach to get you compliant and keep you secure.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-neutral-100" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Step Number & Icon */}
                                <div className="flex flex-col items-center mb-6 relative z-10">
                                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 border-[6px] border-white shadow-xl ${step.highlight ? "bg-primary-navy text-white scale-110 shadow-primary-navy/30" : "bg-white text-primary-navy group-hover:scale-105 group-hover:border-neutral-50"
                                        }`}>
                                        <step.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div className="absolute -top-3 -right-3 bg-neutral-900 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                                        {idx + 1}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`text-center p-6 rounded-2xl transition-all duration-300 h-full border ${step.highlight
                                        ? "bg-primary-navy text-white border-primary-navy shadow-2xl shadow-primary-navy/20"
                                        : "bg-white border-neutral-100 hover:border-accent-coral/30 hover:shadow-lg"
                                    }`}>
                                    <h3 className={`text-lg font-bold mb-3 ${step.highlight ? "text-white" : "text-primary-navy"}`}>
                                        {step.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${step.highlight ? "text-white/80" : "text-neutral-500"}`}>
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const steps = [
    {
        title: "Discovery",
        desc: "We map your data, assets, and regulatory obligations to understand your unique context.",
        icon: Search,
        highlight: false
    },
    {
        title: "Gap Analysis",
        desc: "A deep-dive assessment comparing your current posture against frameworks like ISO 27001 or NIS2.",
        icon: ShieldX,
        highlight: false
    },
    {
        title: "Implementation",
        desc: "We build the policies, deploy the controls, and train your team using our proven playbooks.",
        icon: Settings,
        highlight: false
    },
    {
        title: "Certification",
        desc: "We manage the external audit, handle auditor questions, and guarantee your successful certification.",
        icon: ShieldCheck,
        highlight: true
    },
    {
        title: "Continuous Improvement",
        desc: "Automated monitoring and annual reviews to ensure you stay compliant as threats evolve.",
        icon: RefreshCw,
        highlight: false
    }
];

const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
);
