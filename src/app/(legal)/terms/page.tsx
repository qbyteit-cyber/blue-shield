import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Scale, FileCheck, ShieldAlert, CreditCard, Gavel, Globe, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | ITIS-Secure",
    description: "Legal terms governing the use of ITIS-Secure consulting services and our digital assets.",
};

const LAST_UPDATED = "February 16, 2026";

export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-24 bg-white">
                <article className="container mx-auto px-6 max-w-4xl">
                    {/* Header */}
                    <header className="mb-16 border-b border-neutral-100 pb-12">
                        <div className="flex items-center gap-3 text-accent-coral mb-6">
                            <Scale size={24} />
                            <span className="text-sm font-bold uppercase tracking-widest">Legal framework</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-neutral-500 font-medium">
                            Last Updated: <time dateTime="2026-02-16">{LAST_UPDATED}</time>
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-neutral prose-headings:text-primary-navy prose-headings:font-black prose-headings:tracking-tight prose-a:text-accent-coral prose-a:no-underline hover:prose-a:underline max-w-none">
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <FileCheck className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">1. Acceptance of Terms</h2>
                            </div>
                            <p>
                                By accessing the ITIS-Secure website (itis-secure.com) and utilizing our compliance consultancy services, you engage in our "Service" and agree to be bound by the following terms and conditions. These terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, or merchants.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Scale className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">2. Service Provision</h2>
                            </div>
                            <p>
                                ITIS-Secure provides professional advisory services for TISAX®, CMMC, and ISO 27001 readiness. Our services are based on the current state of regulatory requirements and are provided with the objective of preparing your organization for high-rigor audits.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <CreditCard className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">3. Fees and Payment</h2>
                            </div>
                            <p>
                                Consultancy fees are specified in individual Statements of Work (SOW). All invoices are subject to Romanian tax laws. Payments must be made according to the agreed milestones to ensure continuity of implementation support.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldAlert className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">4. Limitation of Liability</h2>
                            </div>
                            <p>
                                While we maintain a 100% first-time pass rate, final certification is granted solely by independent audit bodies (ENX, C3PAO, etc.). ITIS-Secure shall not be liable for the decisions of these bodies or for any indirect, incidental, or consequential damages arising from the use of our recommendations.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Globe className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">5. Online Dispute Resolution</h2>
                            </div>
                            <p>
                                The European Commission provides a platform for Online Dispute Resolution (ODR) for consumers. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board, as our services are B2B focused.
                            </p>
                            <p>
                                <strong>ODR Platform:</strong>{" "}
                                <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ec.europa.eu/consumers/odr
                                </a>
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Gavel className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">6. Governing Law</h2>
                            </div>
                            <p>
                                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Romania.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <HelpCircle className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">7. Contact Information</h2>
                            </div>
                            <p>
                                Questions about the Terms of Service should be sent to us at{" "}
                                <a href="mailto:office@itis-secure.com">office@itis-secure.com</a>.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
