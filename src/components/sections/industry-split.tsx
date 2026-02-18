"use client";

import { motion } from "framer-motion";
import { Car, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

const industries = [
    {
        title: "Automotive Industry",
        framework: "TISAX® AL3 Specialist",
        description: "Secure your production contracts with our 95-day TISAX roadmap. We prepare Tier-1 suppliers for BMW, VW, and Mercedes-Benz audits.",
        icon: Car,
        bg: "bg-primary-navy",
        textColor: "text-white",
        btnVariant: "text-white border-white/20 hover:bg-white/10",
        href: "/contact"
    },
    {
        title: "Aerospace & Defence",
        framework: "CMMC 2.0 & DO-326A",
        description: "Navigate the transition to CMMC Level 2. We help European defence subcontractors meet DoD and NATO security requirements.",
        icon: ShieldAlert,
        bg: "bg-neutral-100",
        textColor: "text-neutral-900",
        btnVariant: "text-neutral-900 border-neutral-200 hover:bg-neutral-200",
        href: "/contact"
    }
];

export function IndustrySplit() {
    return (
        <section className="flex flex-col md:flex-row h-auto md:h-[600px] overflow-hidden">
            {industries.map((item, idx) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex-1 p-12 md:p-24 flex flex-col justify-center relative group ${item.bg} ${item.textColor}`}
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:scale-160 transition-transform duration-500">
                        <item.icon size={256} />
                    </div>

                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase border border-current opacity-70 rounded">
                            {item.framework}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {item.title}
                        </h2>
                        <p className="text-lg opacity-80 mb-10 max-w-md">
                            {item.description}
                        </p>

                        <Link
                            href={item.href}
                            className={`inline-flex items-center gap-2 px-6 py-3 border-2 rounded-md font-bold transition-all ${item.btnVariant}`}
                        >
                            Explore Industry Solutions <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
