"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Lock, Globe, Server, Activity, ChevronRight, ChevronLeft, Mail, AlertTriangle, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";

interface Category {
    id: string;
    title: string;
    icon: any;
    questions: {
        id: string;
        text: string;
    }[];
}

const auditCategories: Category[] = [
    {
        id: "identity",
        title: "Identity & Access",
        icon: Lock,
        questions: [
            { id: "mfa", text: "Is Multi-Factor Authentication (MFA) strictly enforced for all administrative and user accounts?" },
            { id: "leaver", text: "Is there a 'Leaver Protocol' that disables all access within 24 hours of employee departure?" },
            { id: "privilege", text: "Have you conducted a 'Least Privilege Audit' in the last 6 months to minimize access rights?" }
        ]
    },
    {
        id: "data",
        title: "Data Protection",
        icon: Shield,
        questions: [
            { id: "encryption", text: "Is all sensitive data at rest protected using AES-256 or an equivalent high-integrity encryption standard?" },
            { id: "rotation", text: "Is there a documented Key Rotation Policy for all encryption keys used in production?" },
            { id: "pii", text: "Have you completed a comprehensive PII Mapping exercise for all data silos?" }
        ]
    },
    {
        id: "network",
        title: "Network & Infrastructure",
        icon: Server,
        questions: [
            { id: "segmentation", text: "Is your infrastructure utilizing Environment Micro-segmentation to isolate critical workloads?" },
            { id: "waf", text: "Is your Web Application Firewall (WAF) currently deployed in 'Block Mode' for suspicious traffic?" },
            { id: "scan", text: "Have you completed a 'Clean Scan' (vulnerability assessment) with zero critical findings in the last 30 days?" }
        ]
    },
    {
        id: "resilience",
        title: "Resilience & Supply Chain",
        icon: Globe,
        questions: [
            { id: "dpa", text: "Are signed Data Processing Agreements (DPAs) in place for all third-party vendors and suppliers?" },
            { id: "tabletop", text: "Have you conducted documented Tabletop Exercises for incident response in the last 12 months?" },
            { id: "backup", text: "Are regular 'Backup Restoration Tests' performed and documented to verify recovery integrity?" }
        ]
    }
];

interface ReadinessCalculatorProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReadinessCalculator({ isOpen, onClose }: ReadinessCalculatorProps) {
    const [currentStep, setCurrentStep] = useState(0); // 0-3 for categories, 4 for lead capture, 5 for results
    const [answers, setAnswers] = useState<Record<string, boolean>>({});
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState("");

    const currentCategory = auditCategories[currentStep];

    const calculateScore = useMemo(() => {
        const totalQuestions = auditCategories.reduce((acc, cat) => acc + cat.questions.length, 0);
        const yesAnswers = Object.values(answers).filter(v => v === true).length;
        return Math.round((yesAnswers / totalQuestions) * 100);
    }, [answers]);

    const handleToggle = (questionId: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const sendReadinessReport = async (email: string, score: number, data: any) => {
        // Mock API call
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Readiness Report Sent:", { email, score, data });
                resolve(true);
            }, 1500);
        });
    };

    const handleNext = () => {
        if (currentStep < auditCategories.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailError("");

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid work email address.");
            return;
        }

        setIsSubmitting(true);
        await sendReadinessReport(email, calculateScore, answers);
        setIsSubmitting(false);
        setCurrentStep(auditCategories.length + 1); // Move to results
    };

    const getScoreTier = (score: number) => {
        if (score >= 90) return { label: "Elite Resilience", color: "text-green-500", icon: CheckCircle2 };
        if (score >= 70) return { label: "High Integrity", color: "text-blue-500", icon: Shield };
        if (score >= 40) return { label: "Operational Risk", color: "text-amber-500", icon: AlertTriangle };
        return { label: "Critical Gaps", color: "text-red-500", icon: Activity };
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-2xl overflow-y-auto"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0b] border border-white/5 rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                            <motion.div
                                className="h-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${(Math.min(currentStep, auditCategories.length) / auditCategories.length) * 100}%` }}
                            />
                        </div>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                        {/* Close Button - Absolute for reliability */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            className="absolute top-8 right-8 z-[110] p-3 hover:bg-white/5 rounded-full transition-colors group"
                            aria-label="Close calculator"
                        >
                            <X className="w-6 h-6 text-white/20 group-hover:text-white transition-colors" />
                        </button>

                        {/* Header */}
                        <div className="flex justify-between items-start mb-12 pr-12">
                            <div>
                                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] block mb-2">Audit Readiness Check</span>
                                <h2 className="text-3xl font-display font-black text-white tracking-tighter">
                                    {currentStep < auditCategories.length ? currentCategory.title : currentStep === auditCategories.length ? "Report Generation" : "Audit Results"}
                                </h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {currentStep < auditCategories.length ? (
                                    <motion.div
                                        key={currentCategory.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <currentCategory.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <p className="text-white/40 text-sm font-mono italic">
                                                Analyzing {currentCategory.title} controls against global benchmarks.
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            {currentCategory.questions.map((q) => (
                                                <div key={q.id} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all flex items-center justify-between gap-6">
                                                    <p className="text-sm font-medium text-white/70 leading-relaxed font-mono italic">{q.text}</p>
                                                    <button
                                                        onClick={() => handleToggle(q.id)}
                                                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${answers[q.id] ? 'bg-primary' : 'bg-white/10'}`}
                                                    >
                                                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${answers[q.id] ? 'translate-x-5' : 'translate-x-0'}`} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 pt-12">
                                            {currentStep > 0 && (
                                                <button onClick={handlePrevious} className="flex-1 py-4 px-6 border border-white/5 font-bold text-white/40 rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                                    <ChevronLeft className="w-4 h-4" /> BACK
                                                </button>
                                            )}
                                            <button onClick={handleNext} className="flex-[2] py-4 px-6 bg-primary font-black text-white rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                                                {currentStep === auditCategories.length - 1 ? "FINALIZE CHECKLIST" : "NEXT CATEGORY"} <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : currentStep === auditCategories.length ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="max-w-md mx-auto text-center py-8"
                                    >
                                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                            <Mail className="w-10 h-10 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 italic">Get Your Full Audit Report</h3>
                                        <p className="text-white/40 font-mono text-sm leading-relaxed mb-10 italic">
                                            We have calculated your preliminary readiness score. Enter your work email to receive the deep-dive technical analysis and roadmap.
                                        </p>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                                    placeholder="executive@company.com"
                                                    className={`w-full bg-white/[0.03] border ${emailError ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-5 text-white font-mono placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all`}
                                                />
                                                {emailError && <p className="text-red-500 text-[10px] uppercase font-mono mt-2 tracking-widest">{emailError}</p>}
                                            </div>
                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full py-6 bg-white text-black font-black rounded-2xl hover:scale-[1.02] transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50"
                                            >
                                                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin text-primary" /> : "GENERATE REPORT"}
                                                {!isSubmitting && <ArrowRight className="w-6 h-6" />}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-4"
                                    >
                                        <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-8">
                                            {(() => {
                                                const Tier = getScoreTier(calculateScore);
                                                return <Tier.icon className={`w-12 h-12 ${Tier.color}`} />;
                                            })()}
                                        </div>
                                        <h3 className="text-6xl font-display font-black text-white mb-2 tracking-tighter">
                                            {calculateScore}%
                                        </h3>
                                        <p className={`text-xl font-black ${getScoreTier(calculateScore).color} italic mb-12`}>
                                            {getScoreTier(calculateScore).label}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 mb-12">
                                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                                                <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase mb-2">Findings</h4>
                                                <p className="text-xs text-white/60 font-mono italic leading-relaxed">
                                                    {calculateScore >= 70 ? "Minor controls gap in supply chain telemetry." : "Critical vulnerability exposure in identity layer."}
                                                </p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                                                <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase mb-2">Next Step</h4>
                                                <p className="text-xs text-white/60 font-mono italic leading-relaxed">
                                                    Initiate full ISMS blueprinting via fractional vCISO engagement.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <button className="w-full py-6 bg-primary text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4">
                                                BOOK AUDIT READINESS CHECK
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] italic">
                                                The technical report has been sent to {email}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
