"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Globe, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary-navy text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/itis-secure-logo.svg"
                                alt="ITIS-Secure"
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
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="hover:text-accent-coral transition-colors" aria-label="Website">
                                <Globe size={20} />
                            </Link>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-[10px] text-white/70 leading-relaxed">
                                Information Security Consulting SRL
                            </p>
                            <p className="text-[10px] text-white/70 leading-relaxed">
                                J32/68/2022 &middot; VAT: RO45485372 &middot; EUID: ROONRC.J32/68/2022
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent-coral">Expertise</h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li><Link href="/services/tisax" className="hover:opacity-100 transition-opacity">TISAX® Preparation</Link></li>
                            <li><Link href="/services/iso-27001" className="hover:opacity-100 transition-opacity">ISO/IEC 27001:2022</Link></li>
                            <li><Link href="/services/isms-implementation" className="hover:opacity-100 transition-opacity">ISMS Implementation</Link></li>
                            <li><Link href="/services/iso-42001" className="hover:opacity-100 transition-opacity">ISO 42001 Preparation</Link></li>
                            <li><Link href="/services/tpisr" className="hover:opacity-100 transition-opacity">TPISR Preparation</Link></li>
                            <li><Link href="/services/nis2" className="hover:opacity-100 transition-opacity">NIS2 Preparation</Link></li>
                            <li><Link href="/services/dora" className="hover:opacity-100 transition-opacity">DORA Preparation</Link></li>
                            <li><Link href="/services/gdpr" className="hover:opacity-100 transition-opacity">GDPR Preparation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent-coral">Industries</h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li><Link href="/industries/automotive" className="hover:opacity-100 transition-opacity">Automotive Supply Chain</Link></li>
                            <li><Link href="/industries/defence" className="hover:opacity-100 transition-opacity">Aerospace & Defence</Link></li>
                            <li><Link href="/industries/government" className="hover:opacity-100 transition-opacity">Government & Public Sector</Link></li>
                            <li><Link href="/industries/technology" className="hover:opacity-100 transition-opacity">Technology</Link></li>
                            <li><Link href="/industries/manufacturing" className="hover:opacity-100 transition-opacity">Manufacturing</Link></li>
                            <li><Link href="/industries/financial" className="hover:opacity-100 transition-opacity">Financial Services</Link></li>
                            <li><Link href="/industries/energy" className="hover:opacity-100 transition-opacity">Energy & Utilities</Link></li>
                            <li><Link href="/industries/healthcare" className="hover:opacity-100 transition-opacity">Healthcare</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent-coral">Legal</h4>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li><Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link></li>
                            <li><Link href="/legal-notice" className="hover:opacity-100 transition-opacity">Legal Notice</Link></li>
                            <li><Link href="/accessibility" className="hover:opacity-100 transition-opacity">Accessibility</Link></li>
                            <li>
                                <button
                                    onClick={() => {
                                        const win = window as Window & { openCookieSettings?: () => void };
                                        if (win.openCookieSettings) win.openCookieSettings();
                                    }}
                                    className="hover:opacity-100 transition-opacity text-left appearance-none"
                                    type="button"
                                >
                                    Cookie Settings
                                </button>
                            </li>
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
                                <div>
                                    <div className="font-bold text-white mb-1">Sibiu Office</div>
                                    <span>Str. Liliacului nr 2, Cisnadie</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent-coral shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-bold text-white mb-1">Brasov Office</div>
                                    <span>Str. Zaharia Stancu 8A, Ap 603</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40">
                    {/* Left: Copyright */}
                    <p className="w-full md:w-auto text-center md:text-left">© 2026 ITIS-Secure. All rights reserved.</p>

                    {/* Center: Compliance Badges */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://anpc.ro/ce-este-sal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-75"
                        >
                            <Image
                                src="/SAL.svg"
                                alt="SAL - Solutionarea Alternativa a Litigiilor"
                                width={120}
                                height={24}
                                className="w-[120px] h-auto"
                            />
                        </a>
                        <a
                            href="https://ec.europa.eu/consumers/odr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-75"
                        >
                            <Image
                                src="/SOL.svg"
                                alt="SOL - Solutionarea Online a Litigiilor"
                                width={120}
                                height={24}
                                className="w-[120px] h-auto"
                            />
                        </a>
                    </div>

                    {/* Right: Legal Links */}
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:underline">Privacy</Link>
                        <Link href="/terms" className="hover:underline">Terms</Link>
                        <Link href="/legal-notice" className="hover:underline">Notice</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
