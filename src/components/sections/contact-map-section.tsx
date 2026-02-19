"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";

/* ── Certified Locations ───────────────────────────── */
const locations = [
    { city: "München", certs: 11 },
    { city: "Stuttgart", certs: 4 },
    { city: "Pune", certs: 2 },
    { city: "Kuala Lumpur", certs: 2 },
    { city: "Den Bosch", certs: 2 },
    { city: "Düsseldorf", certs: 2 },
    { city: "Gilching", certs: 2 },
    { city: "Coventry", certs: 1 },
    { city: "Darmstadt", certs: 2 },
    { city: "Durham NC", certs: 1 },
    { city: "Royal Oak", certs: 3 },
];

export function ContactMapSection() {
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
        <section className="py-24 bg-neutral-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="uppercase text-[11px] font-bold text-accent-coral tracking-[0.15em] block mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-primary-navy tracking-tight">
                        Start Your Certification Journey
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* ── LEFT: Contact Form ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-100 shadow-xl"
                    >
                        <h3 className="text-xl font-black text-primary-navy mb-6 tracking-tight">
                            Project Inquiry
                        </h3>
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
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Honeypot Field */}
                                <input
                                    type="text"
                                    name="website"
                                    style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            name="fullName"
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                            Company Email
                                        </label>
                                        <input
                                            required
                                            name="companyEmail"
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                        Target Certification
                                    </label>
                                    <select name="targetCertification" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all">
                                        <option>TISAX® AL3</option>
                                        <option>CMMC 2.0 Level 2</option>
                                        <option>ISO 27001:2022</option>
                                        <option>NIS2 Compliance</option>
                                        <option>DORA</option>
                                        <option>GDPR</option>
                                        <option>Other Framework</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us about your project or target deadline..."
                                        className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all resize-none"
                                    />
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                                        {error}
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <Button
                                        disabled={!agreedToGdpr || isSubmitting}
                                        className="w-full bg-primary-navy text-white h-14 rounded-xl font-bold text-base hover:bg-primary-navy/90 focus:ring-2 focus:ring-accent-coral focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Book Initial Assessment
                                                <CheckCircle2 size={18} className="text-accent-coral" />
                                            </>
                                        )}
                                    </Button>
                                    <div className="flex gap-3 px-1">
                                        <input
                                            type="checkbox"
                                            id="gdpr-consent-map"
                                            checked={agreedToGdpr}
                                            onChange={(e) => setAgreedToGdpr(e.target.checked)}
                                            className="mt-1 h-3.5 w-3.5 rounded border-neutral-300 text-accent-coral focus:ring-accent-coral cursor-pointer"
                                        />
                                        <label htmlFor="gdpr-consent-map" className="text-[10px] text-neutral-400 leading-relaxed cursor-pointer">
                                            By submitting this inquiry, you agree to our <a href="/privacy" className="underline hover:text-accent-coral">Privacy Policy</a>.
                                            Your data remains strictly confidential and is used solely for the purpose of scheduling your technical assessment.
                                            Strategy confirmed via secure Link. GDPR Compliant.
                                        </label>
                                    </div>
                                </div>
                            </form>
                        )}
                    </motion.div>

                    {/* ── RIGHT: Secured Sites ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary-navy rounded-2xl p-8 md:p-10 shadow-xl"
                    >
                        <h3 className="text-xl font-black text-white mb-2 tracking-tight">
                            Successful Certified Locations
                        </h3>
                        <p className="text-sm text-white/50 mb-6">
                            TISAX® certifications delivered across 11 global locations
                        </p>

                        {/* Map Image — fully visible */}
                        <div className="relative w-full rounded-xl overflow-hidden mb-8">
                            <Image
                                src="/secured-sites.webp"
                                alt="World map showing TISAX certified locations across 11 global sites"
                                width={800}
                                height={450}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Location List */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                            {locations.map((loc) => (
                                <div key={loc.city} className="flex items-center gap-2 text-sm">
                                    <MapPin size={12} className="text-[#4FC3F7] shrink-0" />
                                    <span className="text-white/80 truncate">{loc.city}</span>
                                    <span className="ml-auto text-[#4FC3F7] font-bold text-xs">{loc.certs}</span>
                                </div>
                            ))}
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
