"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, FileText, Globe, Server, ShieldCheck, Award, Download, Brain } from "lucide-react";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pillars = [
    {
        title: "Engineering Rigour",
        description: "We don't just 'consult' — we build. Our auditor-led implementation team writes the policies, designs the technical controls, and configures the infrastructure for 100% compliance.",
        icon: Server
    },
    {
        title: "Auditor-Direct Support",
        description: "Your project is managed by certified Lead Auditors (ISO27001, AS9100D, TISAX). We know exactly what the external auditors will look for because we are them.",
        icon: ShieldCheck
    },
    {
        title: "Absolute Confidentiality",
        description: "We handle sensitive Tier-1 automotive and NATO-level defence data. Our own internal security protocols exceed the standards we implement for our clients.",
        icon: Lock
    },
    {
        title: "Zero-Failure Guarantee",
        description: "Our methodology has achieved a 100% first-time pass rate for every client since inception. We don't stop until your certificate is issued.",
        icon: Award
    }
];

const documents = [
    { title: "Privacy Policy", href: "/privacy", icon: FileText },
    { title: "Terms of Service", href: "/terms", icon: FileText },
    { title: "GDPR Compliance", href: "#", icon: CheckCircle2 },
    { title: "Information Security Policy", href: "#", icon: Shield }
];

const certifications = [
    {
        name: "ISO27001:2022",
        description: "Information Security Management System",
        en_href: "/certs/CERTIFICAT SMSI-SI452CI-317684-EN-ISO27001.pdf",
        de_href: "/certs/CERTIFICAT SMSI-SI452CI-317684-DE-ISO27001.pdf",
        ro_href: "/certs/CERTIFICAT SMSI-SI452CI-317684 RO-ISO27001.pdf",
        icon: ShieldCheck
    },
    {
        name: "ISO9001:2015",
        description: "Quality Management System",
        en_href: "/certs/CERTIFICAT SMC-C452CI-733638-EN-ISO9001.pdf",
        de_href: "/certs/CERTIFICAT SMC-C452CI-733638-DE-ISO9001.pdf",
        ro_href: "/certs/CERTIFICAT SMC-C452CI-733638-RO-ISO9001.pdf",
        icon: Award
    },
    {
        name: "ISO42001",
        description: "Artificial Intelligence Management System",
        en_href: "#",
        de_href: "#",
        ro_href: "#",
        icon: Brain
    }
];

export default function TrustCenterPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="relative bg-primary-navy py-24 md:py-36 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF6B35,transparent_50%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <span className="inline-block px-4 py-1.5 bg-accent-coral/20 text-accent-coral rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                                    Trust & Security Center
                                </span>
                                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-12">
                                    THE STANDARD OF <br />
                                    <span className="text-accent-coral">VERIFICATION.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium mb-12 max-w-2xl">
                                    Compliance is more than a certificate—it is the operational proof of your reliability.
                                    Welcome to the command center for ITIS-Secure transparency and security protocols.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-success-emerald animate-pulse" />
                                        All Systems Operational
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm">
                                        <Shield size={16} className="text-accent-coral" />
                                        ISO27001 Certified Methodology
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <CertificationBadgeStrip />

                {/* Pillars of Trust */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                            {pillars.map((pillar, i) => (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8"
                                >
                                    <div className="shrink-0 w-16 h-16 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center">
                                        <pillar.icon className="text-primary-navy" size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-primary-navy mb-4 tracking-tight">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-neutral-500 leading-relaxed text-lg">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Data Security Section */}
                <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <Globe size={1000} className="translate-x-1/2 -translate-y-1/4" />
                    </div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                                    How We Handle <br className="hidden md:block" />
                                    <span className="text-accent-coral">Sensitive Technical Data.</span>
                                </h2>
                                <p className="text-lg text-white/60 leading-relaxed mb-10">
                                    Protecting proprietary engineering models, prototype designs, and defence configurations is our baseline operation.
                                    We utilize military-grade encryption and siloed data environments for every client engagement.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "E2E Encryption for all project documentation",
                                        "GDPR compliant EU-only data residency",
                                        "Strict role-based access control (RBAC)",
                                        "Automated security logging and monitoring"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-accent-coral" />
                                            <span className="font-bold text-sm tracking-wide">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-8">Trust Documents</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {documents.map((doc) => (
                                        <Link
                                            key={doc.title}
                                            href={doc.href}
                                            className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-accent-coral/30 transition-all group"
                                        >
                                            <doc.icon size={20} className="text-accent-coral group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-bold">{doc.title}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-12 p-6 bg-accent-coral/10 rounded-2xl border border-accent-coral/20">
                                    <p className="text-sm text-white/80 leading-relaxed italic">
                                        "Our trust commitment is verified by annual independent audits of our own internal management systems."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Verification & Certificates CTA */}
                <section className="py-24 bg-white border-t border-neutral-100">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-16">
                            <Shield className="mx-auto text-primary-navy mb-8" size={64} />
                            <h2 className="text-3xl md:text-6xl font-black text-primary-navy tracking-tighter leading-tight mb-8">
                                Verify Our Credentials.
                            </h2>
                            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
                                We operate strictly by the frameworks we implement for our clients. Below you can view and download our current active certifications.
                            </p>
                        </div>

                        {/* Certificates Grid */}
                        <div className="grid grid-cols-1 gap-6 mb-20">
                            {certifications.map((cert) => (
                                <div key={cert.name} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-neutral-50 border border-neutral-100 rounded-2xl group hover:border-neutral-200 transition-colors">
                                    <div className="flex gap-4 items-center mb-6 md:mb-0">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-primary-navy">
                                            <cert.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-primary-navy">{cert.name}</h4>
                                            <div className="text-sm text-neutral-500">{cert.description}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3 w-full md:w-auto">
                                        <Link href={cert.en_href} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
                                            <Button variant="outline" className="w-full bg-white border-neutral-200 text-primary-navy hover:text-accent-coral hover:border-accent-coral gap-2 transition-colors">
                                                <Download size={16} />
                                                EN
                                            </Button>
                                        </Link>
                                        <Link href={cert.de_href} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
                                            <Button variant="outline" className="w-full bg-white border-neutral-200 text-primary-navy hover:text-accent-coral hover:border-accent-coral gap-2 transition-colors">
                                                <Download size={16} />
                                                DE
                                            </Button>
                                        </Link>
                                        <Link href={cert.ro_href} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
                                            <Button variant="outline" className="w-full bg-white border-neutral-200 text-primary-navy hover:text-accent-coral hover:border-accent-coral gap-2 transition-colors">
                                                <Download size={16} />
                                                RO
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-bold text-primary-navy mb-4">Require a deeper assessment?</h3>
                            <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
                                If your procurement team requires a formal security package, filled-out vendor questionnaire, or direct conversation with our Security Lead, we reply to verification requests within 2 business hours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/contact">
                                    <Button className="bg-primary-navy text-white hover:bg-primary-navy/90 text-lg px-8 py-6 h-auto rounded-xl font-bold w-full sm:w-auto">
                                        Request Trust Package
                                    </Button>
                                </Link>
                                <Link href="mailto:office@itis-secure.com">
                                    <Button variant="outline" className="border-neutral-200 text-primary-navy hover:bg-neutral-50 text-lg px-8 py-6 h-auto rounded-xl font-bold w-full sm:w-auto">
                                        Contact Security Lead
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
