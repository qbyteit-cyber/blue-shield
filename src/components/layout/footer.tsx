"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Globe, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary-navy text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/itis-secure-logo.svg"
                                alt="ITIS-SECURE"
                                width={160}
                                height={72}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm opacity-60 leading-relaxed max-w-xs">
                            European umbrella compliance company taking enterprise clients from zero security posture to full certification across all applicable frameworks.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/company/information-security-consulting-srl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent-coral transition-colors"
                            >
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
                            <li><Link href="/industries/defence" className="hover:opacity-100 transition-opacity">Aerospace & Defence</Link></li>
                            <li><Link href="/about" className="hover:opacity-100 transition-opacity">About ITIS-SECURE</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent-coral">Contact</h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent-coral" />
                                <a href="mailto:office@itis-secure.com" className="hover:opacity-100 transition-opacity">office@itis-secure.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent-coral" />
                                <a href="tel:+40741711770" className="hover:opacity-100 transition-opacity">+40 741 711 770</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent-coral shrink-0 mt-0.5" />
                                <span>Str. Liliacului nr 2, Cisnadie, Sibiu</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent-coral shrink-0 mt-0.5" />
                                <span>Str. Zaharia Stancu 8A, Ap 603, Brasov</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-xs opacity-40">
                    <p>© 2026 ITIS-SECURE. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms of Service</Link>
                        <Link href="/legal-notice" className="hover:underline">Legal Notice</Link>
                        <Link href="/accessibility" className="hover:underline">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
