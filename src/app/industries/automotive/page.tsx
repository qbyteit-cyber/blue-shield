"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Calendar, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";
import Image from "next/image";

export default function AutomotiveIndustryPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Subpage Hero */}
                <section className="relative bg-primary-navy py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF6B35,transparent_50%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <div className="flex items-center gap-3 text-accent-coral font-bold text-sm tracking-widest uppercase mb-6">
                                <div className="h-px w-8 bg-accent-coral" />
                                Automotive Sector
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                                95 Days to TISAX® Compliance: <br className="hidden md:block" />
                                <span className="text-accent-coral">Secure Your OEM Contracts.</span>
                            </h1>
                            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
                                The definitive TISAX® AL3 preparation roadmap for Tier-1 suppliers. We bridge the gap between your current posture and ENX label readiness with a 100% first-time pass rate.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" className="px-8">
                                    Book Free Gap Assessment
                                </Button>
                                <Button variant="outline" size="lg" className="px-8 border-white/20 text-white hover:bg-white/10">
                                    Request Checklist
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <CertificationBadgeStrip />

                {/* Problem/Solution Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-primary-navy tracking-tighter mb-8 leading-tight">
                                    Why 40% of Automotive Suppliers Fail TISAX® on Their First Attempt
                                </h2>
                                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                    The transition to **VDA ISA 5.0** has raised the bar for physical security, prototype protection, and supply chain transparency. Most failures occur not from a lack of security, but from a lack of <span className="text-primary-navy font-bold italic">auditable evidence</span>.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        "Scoping errors leading to OEM rejection",
                                        "Incomplete documentation for AL3 requirements",
                                        "Lack of records proving policy adherence",
                                        "Complexity in multi-site registration"
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="bg-red-50 p-1 rounded-full shrink-0">
                                                <ArrowRight className="text-red-500" size={16} />
                                            </div>
                                            <span className="text-neutral-700 font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-neutral-50 p-8 md:p-12 rounded-3xl border border-neutral-100">
                                <div className="bg-primary-navy aspect-video rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-accent-coral/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Shield className="text-white opacity-20 group-hover:scale-110 transition-transform" size={120} />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                            <div className="text-[10px] uppercase tracking-widest font-bold text-accent-coral mb-1">Status Report</div>
                                            <div className="text-white text-sm font-mono">ENX Portal: VDA ISA 5.0 Compliant</div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-primary-navy mb-4">The ITIS Secure Advantage</h3>
                                <p className="text-neutral-600 mb-6">
                                    We don't just give you a checklist. We provide the auditors who understand the ENX portal requirements and the engineers who implement the controls.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-xl border border-neutral-200">
                                        <div className="text-2xl font-black text-primary-navy">95</div>
                                        <div className="text-[10px] uppercase font-bold text-neutral-400">Day Roadmap</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-neutral-200">
                                        <div className="text-2xl font-black text-primary-navy">100%</div>
                                        <div className="text-[10px] uppercase font-bold text-neutral-400">Pass Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Suite */}
                <section className="py-24 bg-neutral-900 text-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                                Our Automotive Service Suite
                            </h2>
                            <p className="text-white/60 text-lg">
                                Comprehensive preparation for the highest levels of automotive information security.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "TISAX® Readiness (AL2/AL3)",
                                    desc: "Full preparation for ENX assessments including mock audits and control remediation.",
                                    icon: Shield
                                },
                                {
                                    title: "ISO 21434 Implementation",
                                    desc: "Engineering-focused cybersecurity for vehicle type approval and TARA analysis.",
                                    icon: Calendar
                                },
                                {
                                    title: "TPISR Compliance",
                                    desc: "Navigating North American OEM requirements for GM, Ford, and Stellantis.",
                                    icon: Award
                                }
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-white/5 p-8 rounded-3xl border border-white/10"
                                >
                                    <service.icon className="text-accent-coral mb-6" size={40} />
                                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Objection Handling / FAQ */}
                <section className="py-24 bg-white border-t border-neutral-100">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-black text-primary-navy text-center mb-16">
                            Critical Questions for Tier-1 Suppliers
                        </h2>
                        <div className="space-y-8">
                            {[
                                {
                                    q: "The TISAX® assessment is too expensive for our current budget.",
                                    a: "A failed audit costs 5x more in lost revenue, audit re-takes, and potential contract disqualification. We optimize for high-impact, low-cost remediation that ensures success on the first attempt."
                                },
                                {
                                    q: "We have an emergency deadline from a major OEM. Is it too late?",
                                    a: "Our accelerated 95-day roadmap is specifically designed for emergency contract compliance. We prioritize critical path controls to get you audit-ready in the shortest possible timeframe."
                                },
                                {
                                    q: "What is the difference between Assessment Level 2 and Level 3?",
                                    a: "AL2 is usually for 'Confidential' data and involves remote checks. AL3 is for 'Secret' data and prototype protection, requiring mandatory on-site audits and higher physical security rigor."
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                                    <h4 className="text-lg font-bold text-primary-navy mb-4 flex gap-4">
                                        <span className="text-accent-coral italic">Q:</span> {item.q}
                                    </h4>
                                    <p className="text-neutral-600 leading-relaxed flex gap-4">
                                        <span className="text-success-emerald italic font-bold">A:</span> {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-accent-coral text-white">
                    <div className="container mx-auto px-6 max-w-7xl text-center">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                            Ready to Secure Your Next <br /> €100M Automotive Contract?
                        </h2>
                        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto font-medium">
                            Our experts are standing by to conduct an initial gap analysis of your current posture. Response within 4 hours.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-primary-navy text-white hover:bg-primary-navy/90 text-lg px-12 py-8 h-auto rounded-xl">
                                Book Free 30-Min Consultation
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
