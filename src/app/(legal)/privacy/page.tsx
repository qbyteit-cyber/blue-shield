import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Shield, Lock, Eye, FileText, Database, UserCheck, Bell, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | ITIS-Secure",
    description: "Our commitment to protecting your personal data in compliance with GDPR and EU privacy regulations.",
};

const LAST_UPDATED = "February 16, 2026";

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-24 bg-white">
                <article className="container mx-auto px-6 max-w-4xl">
                    {/* Header */}
                    <header className="mb-16 border-b border-neutral-100 pb-12">
                        <div className="flex items-center gap-3 text-accent-coral mb-6">
                            <Shield size={24} />
                            <span className="text-sm font-bold uppercase tracking-widest">Trust & Privacy</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-neutral-500 font-medium">
                            Last Updated: <time dateTime="2026-02-16">{LAST_UPDATED}</time>
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-neutral prose-headings:text-primary-navy prose-headings:font-black prose-headings:tracking-tight prose-a:text-accent-coral prose-a:no-underline hover:prose-a:underline max-w-none">
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">1. Information We Collect</h2>
                            </div>
                            <p>
                                ITIS-Secure ("we", "us", or "our"), operated by Information Security Consulting SRL, collects personal data to provide our consulting and audit-preparation services. This includes:
                            </p>
                            <ul>
                                <li><strong>Identity Data:</strong> Name, company role, and professional credentials.</li>
                                <li><strong>Contact Data:</strong> Business email address, phone number, and office location.</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns on our website.</li>
                                <li><strong>Project Data:</strong> Compliance objectives (e.g., TISAX® AL3 readiness) and organizational security posture information shared during consultations.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">2. Legal Basis for Processing</h2>
                            </div>
                            <p>
                                We process your data under the following legal bases defined by the <strong>General Data Protection Regulation (GDPR)</strong>:
                            </p>
                            <ul>
                                <li><strong>Contractual Necessity:</strong> To fulfill our service agreements.</li>
                                <li><strong>Legitimate Interest:</strong> To improve our security methodologies and respond to project inquiries.</li>
                                <li><strong>Compliance:</strong> To meet legal and regulatory obligations within the EU.</li>
                                <li><strong>Consent:</strong> For specific marketing communications where explicitly granted.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">3. Data Retention & Security</h2>
                            </div>
                            <p>
                                We implement industry-leading technical and organizational measures to protect your information. Personal data is retained only for as long as necessary to fulfill the purposes outlined or as required by Romanian statutory retention periods (typically 10 years for financial/contractual records).
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <UserCheck className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">4. Your Rights</h2>
                            </div>
                            <p>
                                Under GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to object to processing and the right to data portability.
                            </p>
                            <p>
                                To exercise these rights, or if you have any concerns, please contact our Data Protection lead at{" "}
                                <a href="mailto:office@itis-secure.com">office@itis-secure.com</a>.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Bell className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">5. Supervisory Authority</h2>
                            </div>
                            <p>
                                If you believe we have infringed your rights, you have the right to lodge a complaint with the National Supervisory Authority for Personal Data Processing (ANSPDCP).
                            </p>
                            <p>
                                <strong>ANSPDCP Contact:</strong>{" "}
                                <a
                                    href="https://www.dataprotection.ro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.dataprotection.ro
                                </a>
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageSquare className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">6. Contact Our Team</h2>
                            </div>
                            <p>
                                For any privacy-related inquiries:
                            </p>
                            <p>
                                <strong>Information Security Consulting SRL</strong><br />
                                Str. Liliacului nr 2, Cisnadie, Sibiu, Romania<br />
                                Email: <a href="mailto:office@itis-secure.com">office@itis-secure.com</a>
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
