"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Shield, CheckCircle2, Phone } from "lucide-react";

export default function ContactPage() {
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
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">Full Name</label>
                                            <input type="text" placeholder="John Doe" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">Company Email</label>
                                            <input type="email" placeholder="john@company.com" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">Target Certification</label>
                                        <select className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all">
                                            <option>TISAX® AL3</option>
                                            <option>CMMC 2.0 Level 2</option>
                                            <option>ISO 27001:2022</option>
                                            <option>NIS2 / Other Framework</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-1">Message</label>
                                        <textarea rows={4} placeholder="Tell us about your project or target deadline..." className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-accent-coral focus:outline-none transition-all resize-none"></textarea>
                                    </div>
                                    <p className="text-[10px] text-neutral-400 leading-relaxed px-1">
                                        Your security data remains strictly confidential. GDPR compliant. Strategy confirmed via secure link.
                                    </p>
                                    <Button className="w-full bg-primary-navy text-white h-16 rounded-xl font-bold text-lg hover:bg-primary-navy/90 transition-all flex items-center justify-center gap-3">
                                        Book Initial Assessment
                                        <CheckCircle2 size={20} className="text-accent-coral" />
                                    </Button>
                                </form>
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
                                            Founded by Iulian Bozdoghina, ITIS-SECURE provides direct technical implementation guidance that moves beyond manual checklists.
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
