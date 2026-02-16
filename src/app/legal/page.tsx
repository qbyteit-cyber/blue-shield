"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function LegalNoticePage() {
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
                                Legal Notice
                            </h1>
                            <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
                                <span>Impressum</span>
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
                            <h2>1. Company Information</h2>
                            <p>This website is operated by:</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Company Name</strong></td>
                                        <td>QBYTE IT SRL</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Trading As</strong></td>
                                        <td>ITIS-SECURE</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Registered Office</strong></td>
                                        <td>Str. Liliacului nr 2, Cisnadie, Sibiu, Romania</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Managing Director</strong></td>
                                        <td>Iulian Bozdoghina</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td><a href="mailto:office@itis-secure.com">office@itis-secure.com</a></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone</strong></td>
                                        <td>+40 741 711 770</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>2. Responsible for Content</h2>
                            <p>
                                <strong>Iulian Bozdoghina</strong><br />
                                Founder &amp; Lead Specialist<br />
                                QBYTE IT SRL (trading as ITIS-SECURE)<br />
                                Str. Liliacului nr 2, Cisnadie, Sibiu, Romania
                            </p>

                            <h2>3. Professional Qualifications</h2>
                            <p>
                                ITIS-SECURE team members hold recognized industry certifications including:
                            </p>
                            <ul>
                                <li>ISO/IEC 27001 Lead Auditor</li>
                                <li>ISO/IEC 27001 Lead Implementer</li>
                                <li>TISAX® Assessment Specialist</li>
                                <li>Certified Information Security Manager (CISM)</li>
                            </ul>

                            <h2>4. Disclaimer</h2>
                            <p>
                                The content of this website is intended for general information purposes only. It does not
                                constitute legal or professional advice. While we strive for accuracy, we do not guarantee
                                the currency or completeness of the information provided.
                            </p>

                            <h2>5. Copyright</h2>
                            <p>
                                All content on this website is the property of QBYTE IT SRL and is protected by copyright
                                laws. Reproduction requires written consent.
                            </p>

                            <h2>6. Dispute Resolution</h2>
                            <p>
                                The European Commission provides a platform for online dispute resolution (ODR):{" "}
                                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                                    https://ec.europa.eu/consumers/odr
                                </a>
                            </p>

                            <h2>7. Contact</h2>
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
