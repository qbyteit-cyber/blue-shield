"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-[#FBFBFE]">
                {/* Simple Header */}
                <section className="py-16 md:py-24 border-b border-neutral-100 bg-white">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="uppercase text-[11px] font-bold text-accent-coral tracking-[0.2em] block mb-4">
                                Legal Information
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-primary-navy tracking-tight mb-6">
                                Terms of Service
                            </h1>
                            <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
                                <span>Version 1.0</span>
                                <span className="w-1 h-1 rounded-full bg-neutral-200" />
                                <span>Updated: 16 Feb 2026</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-3xl border border-neutral-100 shadow-sm prose prose-neutral prose-headings:text-primary-navy prose-headings:font-black prose-headings:tracking-tight prose-a:text-accent-coral prose-a:no-underline hover:prose-a:underline max-w-none"
                        >
                            <h2>1. Agreement to Terms</h2>
                            <p>
                                By accessing or using the ITIS-SECURE website (<strong>itis-secure.com</strong>) or engaging
                                our information security consulting services, you agree to be bound by these Terms of Service
                                (&quot;Terms&quot;). If you do not agree to these Terms, you must not use our website or services.
                            </p>
                            <p>
                                These Terms constitute a legally binding agreement between you (&quot;Client&quot;, &quot;you&quot;, or
                                &quot;your&quot;) and QBYTE IT SRL, trading as ITIS-SECURE (&quot;we&quot;, &quot;us&quot;, or
                                &quot;our&quot;), a company registered in Romania.
                            </p>

                            <h2>2. Description of Services</h2>
                            <p>ITIS-SECURE provides professional information security consulting services, including but not limited to:</p>
                            <ul>
                                <li>TISAX® audit preparation and implementation support</li>
                                <li>CMMC 2.0 compliance readiness</li>
                                <li>ISO/IEC 27001:2022 implementation and certification preparation</li>
                                <li>ISMS (Information Security Management System) implementation</li>
                                <li>NIS2, DORA, GDPR, and TPISR compliance consulting</li>
                                <li>Security audits and gap analysis</li>
                                <li>Outsourced CISO, DPO, and ISM roles</li>
                                <li>Information security training and awareness programmes</li>
                            </ul>

                            <h2>3. Eligibility</h2>
                            <p>
                                Our services are intended for business entities and professionals. By using our website or
                                engaging our services, you represent that you have the legal authority to enter into binding
                                agreements on behalf of your organisation.
                            </p>

                            <h2>4. Client Obligations</h2>
                            <p>When engaging our services, you agree to:</p>
                            <ul>
                                <li>Provide accurate, complete, and timely information necessary for the delivery of services.</li>
                                <li>Grant reasonable access to relevant systems, personnel, and documentation as required.</li>
                                <li>Designate a primary point of contact with authority to make decisions on behalf of your organisation.</li>
                            </ul>

                            <h2>5. Fees and Payment</h2>
                            <ul>
                                <li>Fees for our services are set out in the applicable SOW or proposal.</li>
                                <li>Unless otherwise agreed, invoices are payable within 30 days of the invoice date.</li>
                                <li>All fees are quoted exclusive of VAT, which will be applied where required by law.</li>
                            </ul>

                            <h2>6. Intellectual Property</h2>
                            <p>
                                All proprietary methodologies, frameworks, templates, tools, and training materials developed
                                by ITIS-SECURE remain our exclusive intellectual property. You receive a non-exclusive,
                                non-transferable licence to use deliverables solely for your internal business purposes.
                            </p>

                            <h2>7. Confidentiality</h2>
                            <p>
                                Both parties agree to maintain the confidentiality of all non-public information exchanged
                                during the engagement. This obligation shall survive the termination for five (5) years.
                            </p>

                            <h2>8. Limitation of Liability</h2>
                            <p>
                                Our total aggregate liability shall not exceed the total fees paid by you for the specific
                                engagement giving rise to the claim. We shall not be liable for any indirect or consequential damages.
                            </p>

                            <h2>9. No Guarantee of Certification</h2>
                            <p>
                                While ITIS-SECURE maintains a 100% first-time pass rate, certification decisions are made
                                exclusively by independent accredited audit bodies. We do not guarantee audit outcomes.
                            </p>

                            <h2>10. Governing Law</h2>
                            <p>
                                These Terms shall be governed by the laws of Romania. Any disputes shall be submitted to the
                                exclusive jurisdiction of the competent courts of Sibiu, Romania.
                            </p>

                            <h2>11. Contact Us</h2>
                            <p>For any questions regarding these Terms, please contact us:</p>
                            <ul>
                                <li><strong>Email:</strong> <a href="mailto:office@itis-secure.com">office@itis-secure.com</a></li>
                                <li><strong>Phone:</strong> +40 741 711 770</li>
                                <li><strong>Address:</strong> Str. Liliacului nr 2, Cisnadie, Sibiu, Romania</li>
                            </ul>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
