"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Shield, CheckCircle2, Phone } from "lucide-react";

export default function ContactPage() {
    const [agreedToGdpr, setAgreedToGdpr] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get("fullName"),
            companyEmail: formData.get("companyEmail"),
            targetCertification: formData.get("targetCertification"),
            message: formData.get("message"),
            website: formData.get("website"), // Honeypot
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            setIsSuccess(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Contact Hero */}
                <section className="py-24 bg-primary-navy text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,53,0.15),transparent_50%)]" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                                READY TO SECURE YOUR <br />
                                <span className="text-accent-coral">NEXT MAJOR CONTRACT?</span>
                            </h1>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                                Our experts respond to all inquiries within 4 business hours. Let's map your path from zero to certified.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Contact Form */}
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-neutral-100 shadow-2xl">
                                <h2 className="text-2xl font-black text-primary-navy mb-8 tracking-tight">Project Inquiry</h2>
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-900 mb-2">Request Received</h3>
                                        <p className="text-green-800">
                                            Thank you. Your request has been received. We'll contact you at your email within 1 business day.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Honeypot Field */}
                                        <input
                                            type="text"
                                            name="website"
                                            style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                                            tabIndex={-1}
                                            autoComplete="off"
                                            aria-hidden="true"
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">Full Name</label>
                                                <input required name="fullName" type="text" placeholder="John Doe" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">Company Email</label>
                                                <input required name="companyEmail" type="email" placeholder="john@company.com" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">Target Certification</label>
                                            <select name="targetCertification" aria-label="Target Certification" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all">
                                                <option>TISAX® AL3</option>
                                                <option>CMMC 2.0 Level 2</option>
                                                <option>ISO 27001:2022</option>
                                                <option>NIS2 / Other Framework</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">Message</label>
                                            <textarea required name="message" rows={4} placeholder="Tell us about your project or target deadline..." className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all resize-none"></textarea>
                                        </div>

                                        {error && (
                                            <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                                                {error}
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            <Button
                                                disabled={!agreedToGdpr || isSubmitting}
                                                className="w-full bg-primary-navy text-white h-16 rounded-xl font-bold text-lg hover:bg-primary-navy/90 focus:ring-2 focus:ring-accent-coral focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Book Initial Assessment
                                                        <CheckCircle2 size={20} className="text-accent-coral" />
                                                    </>
                                                )}
                                            </Button>
                                            <div className="flex gap-3 px-1">
                                                <input
                                                    type="checkbox"
                                                    id="gdpr-consent"
                                                    checked={agreedToGdpr}
                                                    onChange={(e) => setAgreedToGdpr(e.target.checked)}
                                                    className="mt-1 h-3.5 w-3.5 rounded border-neutral-300 text-accent-coral focus:ring-accent-coral cursor-pointer"
                                                />
                                                <label htmlFor="gdpr-consent" className="text-[10px] text-neutral-400 leading-relaxed cursor-pointer">
                                                    By submitting this inquiry, you agree to our <a href="/privacy" className="underline hover:text-accent-coral">Privacy Policy</a>.
                                                    Your data remains strictly confidential and is used solely for the purpose of scheduling your technical assessment.
                                                    Strategy confirmed via secure Link. GDPR Compliant.
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>

                            {/* Contact Info & Trust */}
                            <div className="flex flex-col justify-center">
                                <div className="space-y-12">
                                    <div>
                                        <h3 className="text-2xl font-black text-primary-navy mb-8 tracking-tight">Contact</h3>
                                        <div className="space-y-6">
                                            <div className="flex gap-6 items-start">
                                                <div className="bg-accent-coral/10 p-4 rounded-xl">
                                                    <Mail className="text-accent-coral" size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Email</div>
                                                    <a href="mailto:office@itis-secure.com" className="text-lg font-bold text-primary-navy hover:text-accent-coral transition-colors">
                                                        office@itis-secure.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start">
                                                <div className="bg-accent-coral/10 p-4 rounded-xl">
                                                    <Phone className="text-accent-coral" size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Phone</div>
                                                    <a href="tel:+40741711770" className="text-lg font-bold text-primary-navy hover:text-accent-coral transition-colors">
                                                        +40 741 711 770
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start">
                                                <div className="bg-accent-coral/10 p-4 rounded-xl">
                                                    <MapPin className="text-accent-coral" size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Sibiu Office</div>
                                                    <div className="text-lg font-bold text-primary-navy">Str. Liliacului nr 2</div>
                                                    <div className="text-sm text-neutral-500">Cisnadie, Sibiu</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start">
                                                <div className="bg-accent-coral/10 p-4 rounded-xl">
                                                    <MapPin className="text-accent-coral" size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Brasov Office</div>
                                                    <div className="text-lg font-bold text-primary-navy">Str. Zaharia Stancu 8A</div>
                                                    <div className="text-sm text-neutral-500">Ap 603, Brasov</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start">
                                                <div className="bg-accent-coral/10 p-4 rounded-xl">
                                                    <Clock className="text-accent-coral" size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">SLA Response</div>
                                                    <div className="text-lg font-bold text-primary-navy">Within 4 Business Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-neutral-900 rounded-3xl text-white relative overflow-hidden">
                                        <Shield className="absolute -bottom-10 -right-10 text-white opacity-5" size={200} />
                                        <h4 className="text-xl font-bold mb-4 relative z-10">Auditor-Direct Support</h4>
                                        <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
                                            Founded by Iulian Bozdoghina, ITIS-Secure provides direct technical implementation guidance that moves beyond manual checklists.
                                        </p>
                                        <div className="mt-8 flex gap-3 relative z-10">
                                            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold">TISAX® Specialist</div>
                                            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold">CMMC Professional</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
