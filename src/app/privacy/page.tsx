"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
                                Privacy Policy
                            </h1>
                            <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
                                <span>Version 1.2</span>
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
                            <h2>1. Introduction</h2>
                            <p>
                                ITIS-SECURE (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operated by QBYTE IT SRL, is
                                committed to protecting the privacy and personal data of individuals who interact with our
                                website (<strong>itis-secure.com</strong>) and our information security consulting services.
                            </p>
                            <p>
                                This Privacy Policy explains how we collect, use, store, and share personal data in
                                accordance with the <strong>EU General Data Protection Regulation (GDPR)</strong>{" "}
                                (Regulation (EU) 2016/679) and applicable Romanian data protection legislation.
                            </p>

                            <h2>2. Data Controller</h2>
                            <p>The data controller for the purposes of this policy is:</p>
                            <ul>
                                <li><strong>Company:</strong> QBYTE IT SRL (trading as ITIS-SECURE)</li>
                                <li><strong>Registered Office:</strong> Str. Liliacului nr 2, Cisnadie, Sibiu, Romania</li>
                                <li><strong>Email:</strong> office@itis-secure.com</li>
                                <li><strong>Phone:</strong> +40 741 711 770</li>
                            </ul>

                            <h2>3. Personal Data We Collect</h2>
                            <p>We may collect the following categories of personal data:</p>
                            <h3>3.1 Data You Provide Directly</h3>
                            <ul>
                                <li><strong>Contact information:</strong> Full name, email address, phone number, company name, and job title when you submit a form, request a consultation, or contact us.</li>
                                <li><strong>Project information:</strong> Details about your compliance objectives, target certification frameworks, and project timelines.</li>
                                <li><strong>Communications:</strong> Content of emails, chat messages, and any other correspondence with us.</li>
                            </ul>
                            <h3>3.2 Data Collected Automatically</h3>
                            <ul>
                                <li><strong>Technical data:</strong> IP address, browser type and version, operating system, device information, and screen resolution.</li>
                                <li><strong>Usage data:</strong> Pages visited, time spent on pages, referral source, click patterns, and navigation paths.</li>
                                <li><strong>Cookies and similar technologies:</strong> See Section 8 below for details.</li>
                            </ul>

                            <h2>4. Purpose and Legal Basis for Processing</h2>
                            <p>We process your personal data for the following purposes and on the following legal bases:</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Purpose</th>
                                        <th>Legal Basis (GDPR Art. 6)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Responding to enquiries and providing consultations</td>
                                        <td>Legitimate interest / pre-contractual measures</td>
                                    </tr>
                                    <tr>
                                        <td>Delivering our consulting and audit-preparation services</td>
                                        <td>Performance of a contract</td>
                                    </tr>
                                    <tr>
                                        <td>Sending service-related communications</td>
                                        <td>Legitimate interest</td>
                                    </tr>
                                    <tr>
                                        <td>Improving website functionality and user experience</td>
                                        <td>Legitimate interest</td>
                                    </tr>
                                    <tr>
                                        <td>Compliance with legal obligations</td>
                                        <td>Legal obligation</td>
                                    </tr>
                                    <tr>
                                        <td>Marketing communications (where opted in)</td>
                                        <td>Consent</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>5. Data Sharing and International Transfers</h2>
                            <p>
                                We do not sell your personal data. We may share personal data with the following categories of
                                recipients, only to the extent necessary:
                            </p>
                            <ul>
                                <li><strong>Service providers:</strong> Cloud hosting (Vercel), email services, analytics providers, and CRM tools that process data on our behalf under appropriate data processing agreements.</li>
                                <li><strong>Professional advisors:</strong> Auditors, legal counsel, and accountants where required.</li>
                                <li><strong>Regulatory and public authorities:</strong> When required by applicable law or regulation.</li>
                            </ul>
                            <p>
                                Where data transfers occur outside the European Economic Area (EEA), we ensure appropriate
                                safeguards are in place, including EU Standard Contractual Clauses (SCCs) or reliance on an
                                adequacy decision by the European Commission.
                            </p>

                            <h2>6. Data Retention</h2>
                            <p>
                                We retain personal data only for as long as necessary to fulfil the purposes for which it was
                                collected. Specific retention periods include:
                            </p>
                            <ul>
                                <li><strong>Contact form submissions:</strong> 24 months from last interaction, unless a contractual relationship is established.</li>
                                <li><strong>Client project data:</strong> Duration of the engagement plus 6 years (in accordance with statutory record-keeping obligations).</li>
                                <li><strong>Website analytics:</strong> Aggregated and anonymised within 14 months.</li>
                            </ul>

                            <h2>7. Your Rights Under GDPR</h2>
                            <p>You have the following rights regarding your personal data:</p>
                            <ul>
                                <li><strong>Right of access</strong> — Request a copy of the personal data we hold about you.</li>
                                <li><strong>Right to rectification</strong> — Request correction of inaccurate or incomplete data.</li>
                                <li><strong>Right to erasure</strong> — Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
                                <li><strong>Right to restrict processing</strong> — Request limitation of processing under certain circumstances.</li>
                                <li><strong>Right to data portability</strong> — Receive your data in a structured, commonly used, and machine-readable format.</li>
                                <li><strong>Right to object</strong> — Object to processing based on legitimate interests or direct marketing.</li>
                                <li><strong>Right to withdraw consent</strong> — Where processing is based on consent, you may withdraw it at any time.</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us at{" "}
                                <a href="mailto:Iulian.Bozdoghina@itis-secure.com">Iulian.Bozdoghina@itis-secure.com</a>.
                                We will respond within 30 days.
                            </p>

                            <h2>8. Cookies</h2>
                            <p>
                                Our website uses cookies and similar tracking technologies. We categorise cookies as follows:
                            </p>
                            <ul>
                                <li><strong>Strictly necessary cookies:</strong> Essential for website functionality. Cannot be disabled.</li>
                                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the site (e.g., page views, session duration). Activated only with your consent.</li>
                                <li><strong>Marketing cookies:</strong> Used for targeted advertising. Activated only with your explicit consent.</li>
                            </ul>
                            <p>
                                You can manage your cookie preferences at any time through your browser settings or our cookie
                                consent tool.
                            </p>

                            <h2>9. Security Measures</h2>
                            <p>
                                We implement appropriate technical and organisational measures to protect personal data against
                                unauthorised access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul>
                                <li>Encryption in transit (TLS/SSL) and at rest</li>
                                <li>Access controls and role-based permissions</li>
                                <li>Regular security assessments and vulnerability testing</li>
                                <li>Employee awareness training on data protection</li>
                            </ul>

                            <h2>10. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices,
                                technology, or legal requirements. The &quot;Last updated&quot; date at the top indicates when the
                                most recent revision was made. We encourage you to review this page periodically.
                            </p>

                            <h2>11. Supervisory Authority</h2>
                            <p>
                                If you believe that we have not adequately addressed your data protection concerns, you have the
                                right to lodge a complaint with the relevant supervisory authority. In Romania, the competent
                                authority is:
                            </p>
                            <p>
                                <strong>ANSPDCP</strong> (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
                                Personal)<br />
                                Blvd. G-ral Gheorghe Magheru nr. 28-30, Sector 1, 010336, Bucharest, Romania<br />
                                Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>
                            </p>

                            <h2>12. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or our data protection practices, please
                                contact us:
                            </p>
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
