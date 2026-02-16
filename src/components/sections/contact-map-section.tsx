"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";

/* ── Certified Locations ───────────────────────────── */
const locations = [
    { city: "München", certs: 11, x: 51.5, y: 28 },
    { city: "Stuttgart", certs: 4, x: 50, y: 28 },
    { city: "Pune", certs: 2, x: 69, y: 47 },
    { city: "Kuala Lumpur", certs: 2, x: 79, y: 54 },
    { city: "Den Bosch", certs: 2, x: 49, y: 26 },
    { city: "Düsseldorf", certs: 2, x: 49.5, y: 27 },
    { city: "Gliching", certs: 2, x: 51, y: 28.5 },
    { city: "Coventry", certs: 1, x: 47, y: 25 },
    { city: "Darmstadt", certs: 2, x: 50.5, y: 27.5 },
    { city: "Durham NC", certs: 1, x: 22, y: 33 },
    { city: "Royal Oak", certs: 3, x: 20, y: 29 },
];

/* ── Simplified SVG World Map path ─────────────────── */
const WORLD_MAP_PATHS = [
    // North America
    "M5,18 L8,15 L12,13 L16,12 L20,13 L24,15 L28,18 L30,22 L28,28 L26,32 L24,35 L22,36 L18,40 L16,42 L14,40 L12,38 L10,34 L8,30 L6,26 L5,22 Z",
    // South America
    "M22,48 L24,46 L26,44 L28,46 L30,50 L32,56 L30,62 L28,66 L26,70 L24,72 L22,70 L20,64 L21,58 L20,52 Z",
    // Europe
    "M44,14 L46,12 L48,13 L50,12 L52,14 L54,13 L55,16 L54,18 L52,20 L54,22 L52,24 L50,26 L48,28 L46,30 L44,28 L43,24 L44,20 L43,18 Z",
    // Africa
    "M44,32 L46,30 L48,32 L52,32 L54,34 L56,38 L58,44 L56,50 L54,56 L52,60 L50,62 L48,60 L46,56 L44,50 L43,44 L42,38 Z",
    // Asia
    "M56,12 L60,10 L66,8 L72,10 L78,12 L82,14 L86,16 L88,20 L86,24 L84,28 L80,30 L76,32 L72,34 L68,36 L64,38 L60,36 L58,32 L56,28 L54,24 L55,20 L56,16 Z",
    // India
    "M66,36 L68,34 L70,36 L72,40 L70,46 L68,50 L66,48 L64,44 L65,40 Z",
    // SE Asia
    "M76,36 L78,34 L80,36 L82,40 L84,44 L82,48 L80,50 L78,48 L76,44 L75,40 Z",
    // Australia
    "M78,56 L82,54 L86,56 L90,58 L92,62 L90,66 L86,68 L82,66 L78,64 L76,60 Z",
    // Japan/Korea
    "M84,18 L86,16 L88,18 L87,22 L85,24 L84,22 Z",
    // UK/Ireland
    "M44,16 L46,14 L47,16 L46,19 L44,20 L43,18 Z",
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                            <p className="text-[10px] text-neutral-400 leading-relaxed px-1">
                                Your data remains strictly confidential. GDPR compliant.
                            </p>
                            <Button className="w-full bg-primary-navy text-white h-14 rounded-xl font-bold text-base hover:bg-primary-navy/90 transition-all flex items-center justify-center gap-3">
                                Book Initial Assessment
                                <CheckCircle2 size={18} className="text-accent-coral" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* ── RIGHT: Map ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary-navy rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden"
                    >
                        <h3 className="text-xl font-black text-white mb-2 tracking-tight">
                            Successful Certified Locations
                        </h3>
                        <p className="text-sm text-white/50 mb-8">
                            TISAX® certifications delivered across 11 global locations
                        </p>

                        {/* SVG Map */}
                        <div className="relative w-full aspect-[2/1] mb-8">
                            <svg
                                viewBox="0 0 100 75"
                                className="w-full h-full"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Land masses */}
                                {WORLD_MAP_PATHS.map((d, i) => (
                                    <path
                                        key={i}
                                        d={d}
                                        fill="#1E3A7A"
                                        stroke="#2A4A8A"
                                        strokeWidth={0.3}
                                    />
                                ))}

                                {/* Location pins */}
                                {locations.map((loc, i) => (
                                    <g key={i}>
                                        {/* Pulse ring */}
                                        <circle
                                            cx={loc.x}
                                            cy={loc.y}
                                            r={1.5}
                                            fill="none"
                                            stroke="#4FC3F7"
                                            strokeWidth={0.3}
                                            opacity={0.4}
                                        >
                                            <animate
                                                attributeName="r"
                                                from="1"
                                                to="3"
                                                dur="2s"
                                                begin={`${i * 0.2}s`}
                                                repeatCount="indefinite"
                                            />
                                            <animate
                                                attributeName="opacity"
                                                from="0.6"
                                                to="0"
                                                dur="2s"
                                                begin={`${i * 0.2}s`}
                                                repeatCount="indefinite"
                                            />
                                        </circle>
                                        {/* Pin dot */}
                                        <circle
                                            cx={loc.x}
                                            cy={loc.y}
                                            r={0.8}
                                            fill="#4FC3F7"
                                            stroke="white"
                                            strokeWidth={0.2}
                                        />
                                    </g>
                                ))}
                            </svg>
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

                        {/* Total badge */}
                        <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                            <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Total Certifications</span>
                            <span className="text-3xl font-black text-[#4FC3F7]">
                                {locations.reduce((sum, l) => sum + l.certs, 0)}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
