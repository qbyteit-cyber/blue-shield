"use client";

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
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">
                                        Full Name
                                    </label>
                                    <input
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
                                <select className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all">
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
                                    rows={4}
                                    placeholder="Tell us about your project or target deadline..."
                                    className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all resize-none"
                                />
                            </div>
                            <div className="space-y-4">
                                <Button className="w-full bg-primary-navy text-white h-14 rounded-xl font-bold text-base hover:bg-primary-navy/90 transition-all flex items-center justify-center gap-3">
                                    Book Initial Assessment
                                    <CheckCircle2 size={18} className="text-accent-coral" />
                                </Button>
                                <p className="text-[10px] text-neutral-400 leading-relaxed px-1 text-center">
                                    By submitting this inquiry, you agree to our <a href="/privacy" className="underline hover:text-accent-coral">Privacy Policy</a>.
                                    Your data remains strictly confidential and is used solely for the purpose of scheduling your technical assessment.
                                    Strategy confirmed via secure Link. GDPR Compliant.
                                </p>
                            </div>
                        </form>
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
