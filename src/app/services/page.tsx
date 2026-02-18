import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";
import {
    Wrench, GraduationCap, ShieldCheck, Users,
    Award, Car, Globe, Building2, Lock, Network,
    ClipboardList, ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | ITIS-Secure",
    description: "Explore our full suite of cybersecurity compliance services — from TISAX and ISO 27001 to CMMC, NIS2, DORA, and GDPR.",
};

const howWeHelp = [
    { label: "Implementation Support", href: "/services/implementation-support", icon: Wrench, desc: "End-to-end programme management from gap analysis to certification day." },
    { label: "Training & Courses", href: "/services/training", icon: GraduationCap, desc: "Role-based awareness and technical workshops for your team." },
    { label: "Security Audits & Testing", href: "/services/security-audits", icon: ShieldCheck, desc: "Internal audits, penetration testing, and vulnerability assessments." },
    { label: "Outsourced Roles", href: "/services/outsourced-roles", icon: Users, desc: "Virtual CISO, DPO, Internal Auditor, and other on-demand security experts." },
];

const frameworks = [
    { label: "TISAX®", href: "/services/tisax", icon: Car, desc: "Automotive information security for Tier-1 suppliers." },
    { label: "ISO 27001", href: "/services/iso-27001", icon: Award, desc: "The gold standard for information security management systems." },
    { label: "TPISR", href: "/services/tpisr", icon: Network, desc: "Third-party information security for North American OEMs." },
    { label: "NIS2", href: "/services/nis2", icon: Globe, desc: "EU directive for critical infrastructure operators." },
    { label: "DORA", href: "/services/dora", icon: Building2, desc: "Digital operational resilience for financial entities." },
    { label: "GDPR", href: "/services/gdpr", icon: Lock, desc: "EU data protection regulation compliance." },
    { label: "ISMS Implementation", href: "/services/isms-implementation", icon: ClipboardList, desc: "Full Plan-Do-Check-Act lifecycle management." },
    { label: "CMMC 2.0", href: "/services/cmmc", icon: Lock, desc: "Cybersecurity Maturity Model for defence contractors." },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero */}
                <section className="relative bg-primary-navy py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF6B35,transparent_50%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 text-accent-coral font-bold text-sm tracking-widest uppercase mb-6">
                                <div className="h-px w-8 bg-accent-coral" />
                                Our Services
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                                From Zero to Certified.{" "}
                                <span className="text-accent-coral">One Partner.</span>
                            </h1>
                            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                                We cover the full compliance lifecycle — strategy, implementation, training, auditing, and ongoing management — across every major security framework.
                            </p>
                        </div>
                    </div>
                </section>

                <CertificationBadgeStrip />

                {/* How We Help */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tighter mb-4">
                            How We Can Help You
                        </h2>
                        <p className="text-lg text-neutral-500 mb-16 max-w-2xl">
                            Four pillars of support to take your organisation from initial assessment to full certification and beyond.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {howWeHelp.map((item) => (
                                <Link key={item.label} href={item.href} className="group">
                                    <div className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className="bg-primary-navy/5 p-3 rounded-xl w-fit mb-6 group-hover:bg-accent-coral/10 transition-colors">
                                            <item.icon className="text-primary-navy group-hover:text-accent-coral transition-colors" size={28} />
                                        </div>
                                        <h3 className="text-lg font-bold text-primary-navy mb-3">{item.label}</h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed flex-1">{item.desc}</p>
                                        <div className="mt-6 flex items-center text-accent-coral text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            Learn more <ArrowRight size={14} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Frameworks */}
                <section className="py-24 bg-neutral-900 text-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                            Security Management Frameworks
                        </h2>
                        <p className="text-lg text-neutral-400 mb-16 max-w-2xl">
                            We prepare organisations for certification across all applicable frameworks — from automotive to defence, finance to healthcare.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {frameworks.map((item) => (
                                <Link key={item.label} href={item.href} className="group">
                                    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                                        <item.icon className="text-accent-coral mb-6" size={32} />
                                        <h3 className="text-lg font-bold mb-3">{item.label}</h3>
                                        <p className="text-sm text-neutral-400 leading-relaxed flex-1">{item.desc}</p>
                                        <div className="mt-6 flex items-center text-accent-coral text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            Learn more <ArrowRight size={14} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-accent-coral text-white text-center">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto font-medium">
                            Book a free 30-minute consultation. We&apos;ll assess your current posture and recommend the fastest path to certification.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-primary-navy text-white hover:bg-primary-navy/90 text-lg px-12 py-8 h-auto rounded-xl">
                                Book Free Consultation
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
