"use client";

import Link from "next/link";
import { Shield, Mail, MapPin, Linkedin, Globe } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary-navy text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-accent-coral p-1.5 rounded-lg">
                                <Shield className="text-white" size={24} />
                            </div>
                            <span className="text-xl font-black tracking-tighter">ITIS-SECURE</span>
                        </Link>
                        <p className="text-sm opacity-60 leading-relaxed max-w-xs">
                            European umbrella compliance company taking enterprise clients from zero security posture to full certification across all applicable frameworks.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-accent-coral transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="hover:text-accent-coral transition-colors">
                                <Globe size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent-coral">Expertise</h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li><Link href="/services/tisax" className="hover:opacity-100 transition-opacity">TISAX® Preparation</Link></li>
                            <li><Link href="/services/cmmc" className="hover:opacity-100 transition-opacity">CMMC 2.0 Compliance</Link></li>
                            <li><Link href="/services/iso-27001" className="hover:opacity-100 transition-opacity">ISO/IEC 27001:2022</Link></li>
                            <li><Link href="/services/isms-implementation" className="hover:opacity-100 transition-opacity">ISMS Implementation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent-coral">Industries</h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li><Link href="/industries/automotive" className="hover:opacity-100 transition-opacity">Automotive Supply Chain</Link></li>
                            <li><Link href="/industries/defence" className="hover:opacity-100 transition-opacity">Defence & Aerospace</Link></li>
                            <li><Link href="/about" className="hover:opacity-100 transition-opacity">About ITIS-SECURE</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent-coral">Contact</h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent-coral" />
                                <span>contact@itis-secure.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-accent-coral" />
                                <span>Bucharest, Romania</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Shield className="text-success-emerald" size={18} />
                                <span>100% First-Time Pass Rate</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-xs opacity-40">
                    <p>© 2026 ITIS-SECURE. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms of Service</Link>
                        <Link href="/legal" className="hover:underline">Legal Notice</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
