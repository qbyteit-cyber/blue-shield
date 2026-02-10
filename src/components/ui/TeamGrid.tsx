"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Award,
    CheckCircle2,
    Database,
    Cpu,
    FileText,
    Lock,
    Search,
    BrainCircuit,
    Cloud,
    Layout,
    Users
} from "lucide-react";

interface Consultant {
    name: string;
    role: string;
    background: string;
    certifications: string[];
    accomplishments: string[];
    expertise: string[];
    techStack: { name: string; icon: any }[];
    stats: { label: string; value: string }[];
}

const team: Consultant[] = [
    {
        name: "Iulian Bozdoghina",
        role: "Senior ISMS Consultant / Account Manager",
        background: "Ex-ISMS Manager at Dassault Systemes",
        certifications: ["ISO 27001 Lead Auditor", "TISAX Expert", "ITIL", "TPISR"],
        expertise: ["Automotive Security", "SAP/Active Directory", "Infrastructure Compliance"],
        accomplishments: [
            "Implemented 26+ TISAX frameworks (AL3)",
            "Managed 30+ Certification Programs",
            "Conducted 30+ Internal Audits"
        ],
        techStack: [
            { name: "SAP", icon: Database },
            { name: "Active Directory", icon: Users },
            { name: "NetApp", icon: Cpu },
            { name: "JIRA", icon: Layout }
        ],
        stats: [
            { label: "TISAX AL3 Projects", value: "26+" },
            { label: "Audits Conducted", value: "30+" }
        ]
    },
    {
        name: "Ernest Aduwenye",
        role: "ISMS Consultant & Internal Auditor",
        background: "Audit Program Specialist & Agile Coach",
        certifications: ["ISO 27001 Certified", "TISAX Internal Auditor", "GDPR"],
        expertise: ["Audit Program Architecture", "Finding Reports", "Cloud Security"],
        accomplishments: [
            "Developed framework-wide Internal Audit Programs",
            "Specialist in comprehensive compliance reporting",
            "GDPR and Cloud Security alignment"
        ],
        techStack: [
            { name: "JIRA", icon: Layout },
            { name: "Cloud Security", icon: Cloud },
            { name: "GDPR Systems", icon: Lock },
            { name: "Agile", icon: BrainCircuit }
        ],
        stats: [
            { label: "Frameworks Covered", value: "15+" },
            { label: "Focus", value: "Audit Design" }
        ]
    }
];

export function TeamGrid() {
    return (
        <section className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {team.map((consultant, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-foreground/[0.03] dark:bg-foreground/[0.02] border border-foreground/10 hover:border-primary/30 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                            <ShieldCheck className="w-64 h-64 rotate-12" />
                        </div>

                        <div className="relative z-10">
                            {/* Header Section */}
                            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                                <div className="hidden md:block shrink-0">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-[2px] shadow-lg">
                                        <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center text-3xl font-black text-primary font-display">
                                            {consultant.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black rounded uppercase tracking-widest">
                                            Lead Specialist
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-display font-black text-foreground mb-1">
                                        {consultant.name}
                                    </h3>
                                    <p className="text-primary font-mono font-bold text-sm tracking-tight mb-4">
                                        {consultant.role}
                                    </p>
                                    <p className="text-foreground/50 text-xs font-mono italic">
                                        {consultant.background}
                                    </p>
                                </div>
                            </div>

                            {/* Stats Bento Row */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {consultant.stats.map((stat, sidx) => (
                                    <div key={sidx} className="bg-foreground/5 rounded-xl p-4 border border-foreground/5">
                                        <div className="text-2xl font-black text-foreground">{stat.value}</div>
                                        <div className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications & Badges */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {consultant.certifications.map((cert, cidx) => (
                                    <div key={cidx} className="flex items-center gap-2 px-3 py-1.5 bg-secondary/5 border border-secondary/20 rounded-lg group/cert hover:bg-secondary/10 transition-colors">
                                        <Award className="w-3.5 h-3.5 text-secondary" />
                                        <span className="text-[10px] font-bold text-secondary uppercase tracking-tight">{cert}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Key Accomplishments */}
                            <div className="space-y-3 mb-10">
                                <h4 className="text-[10px] font-mono font-bold text-foreground/30 uppercase tracking-[0.3em] mb-4">Core Track Record</h4>
                                {consultant.accomplishments.map((acc, aidx) => (
                                    <div key={aidx} className="flex items-start gap-3 group/item">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-sm text-foreground/70 font-mono leading-tight group-hover/item:text-foreground transition-colors">
                                            {acc}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Technology Stack Footer */}
                            <div className="pt-8 border-t border-foreground/5">
                                <div className="flex flex-wrap items-center gap-6">
                                    <span className="text-[10px] font-mono font-bold text-foreground/30 uppercase tracking-[0.2em]">Tech Stack:</span>
                                    <div className="flex gap-4">
                                        {consultant.techStack.map((tech, tidx) => (
                                            <div key={tidx} className="group/tech relative" title={tech.name}>
                                                <tech.icon className="w-5 h-5 text-foreground/30 group-hover/tech:text-primary transition-colors cursor-help" />
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[8px] font-bold rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                                                    {tech.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 p-6 bg-primary/5 border border-dashed border-primary/30 rounded-2xl text-center"
            >
                <p className="text-xs text-primary font-mono font-bold uppercase tracking-[0.2em]">
                    Combined network of 12+ Senior Auditors across Munich, Berlin, and Bucharest
                </p>
            </motion.div>
        </section>
    );
}
