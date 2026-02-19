"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
    featuredIndustries,
    standardIndustries,
    allIndustryNames,
} from "@/components/industries/IndustriesData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* ═══════════════════════════════════════════
                    Section 1 — Hero
                ═══════════════════════════════════════════ */}
                <section className="relative bg-white py-28 md:py-36 overflow-hidden">
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A2463_1px,transparent_1px),linear-gradient(to_bottom,#0A2463_1px,transparent_1px)] bg-[size:48px_48px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="inline-block px-4 py-1.5 bg-[#FFF7ED] text-[#FF6B35] rounded-full text-[11px] font-bold tracking-[0.1em] uppercase">
                                Market Segments
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-navy tracking-tighter leading-[0.9] mb-8">
                            Industries<span className="text-accent-coral">.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-500 max-w-3xl leading-relaxed font-medium">
                            We don&apos;t sell generic compliance packages.{" "}
                            <span className="text-primary-navy font-semibold">
                                We engineer security programmes tailored to the regulatory reality of your sector.
                            </span>
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    Section 2 — CSS Ticker
                ═══════════════════════════════════════════ */}
                <section className="bg-primary-navy py-5 overflow-hidden select-none">
                    <div className="ticker-track">
                        {/* Duplicate the names array for seamless loop */}
                        {[...allIndustryNames, ...allIndustryNames].map(
                            (name, i) => (
                                <span
                                    key={i}
                                    className="flex items-center whitespace-nowrap"
                                >
                                    <span className="text-white/90 text-sm font-bold tracking-wide uppercase px-6">
                                        {name}
                                    </span>
                                    <span className="text-accent-coral text-lg leading-none">
                                        ·
                                    </span>
                                </span>
                            )
                        )}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    Section 3 — Featured Callout
                ═══════════════════════════════════════════ */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-black text-primary-navy tracking-tighter leading-tight mb-4">
                                Deep expertise where it matters most.
                            </h2>
                            <p className="text-lg text-neutral-500 leading-relaxed">
                                Automotive and Defence are our home industries — the sectors where we&apos;ve built our reputation on a{" "}
                                <span className="text-primary-navy font-semibold">100% first-time certification pass rate</span>.
                                Every other sector benefits from the same rigour.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    Section 4 — 2 Featured Cards (dark navy)
                ═══════════════════════════════════════════ */}
                <section className="bg-[#F8FAFC] py-4 pb-12">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {featuredIndustries.map((industry) => {
                                const Icon = industry.icon;
                                return (
                                    <Link
                                        key={industry.slug}
                                        href={industry.href}
                                        className="group relative bg-primary-navy rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-between p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(10,36,99,0.3)]"
                                    >
                                        {/* Decorative background icon */}
                                        <div className="absolute top-6 right-6 opacity-[0.05] pointer-events-none">
                                            <Icon
                                                size={200}
                                                strokeWidth={1}
                                                className="text-white"
                                            />
                                        </div>

                                        <div className="relative z-10">
                                            {/* Badge */}
                                            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.15em] uppercase bg-accent-coral/20 text-accent-coral rounded">
                                                Primary Industry
                                            </span>

                                            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                                                {industry.title}
                                            </h3>

                                            <p className="text-white/60 leading-relaxed mb-6 max-w-lg text-[15px]">
                                                {industry.description}
                                            </p>

                                            {/* Framework badges */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {industry.frameworks.map(
                                                    (fw) => (
                                                        <span
                                                            key={fw}
                                                            className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
                                                        >
                                                            {fw}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="relative z-10 flex items-center gap-2 text-accent-coral font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                                            {industry.ctaLabel}
                                            <ArrowRight
                                                size={16}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    Section 5 — 6 Standard Cards (white, 3-col)
                ═══════════════════════════════════════════ */}
                <section className="bg-[#F8FAFC] pb-24 pt-8">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {standardIndustries.map((industry) => {
                                const Icon = industry.icon;
                                return (
                                    <div
                                        key={industry.slug}
                                        className="group bg-white rounded-2xl border border-neutral-100 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-neutral-200"
                                    >
                                        {/* Icon */}
                                        <div className="bg-[#EFF6FF] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                            <Icon
                                                size={22}
                                                className="text-[#3E92CC]"
                                            />
                                        </div>

                                        <h3 className="text-xl font-black text-primary-navy tracking-tight mb-3">
                                            {industry.title}
                                        </h3>

                                        <p className="text-neutral-500 text-[15px] leading-relaxed mb-6 flex-grow">
                                            {industry.description}
                                        </p>

                                        {/* Framework pills */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {industry.frameworks.map((fw) => (
                                                <span
                                                    key={fw}
                                                    className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-primary-navy bg-primary-navy/5 border border-primary-navy/10 rounded-full"
                                                >
                                                    {fw}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA — pinned to bottom */}
                                        <Link
                                            href={industry.href}
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3E92CC] hover:text-primary-navy transition-colors group-hover:gap-2.5"
                                        >
                                            {industry.ctaLabel}
                                            <ArrowRight
                                                size={14}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                    Section 6 — Bottom CTA
                ═══════════════════════════════════════════ */}
                <section className="relative bg-primary-navy py-24 md:py-32 overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-navy to-[#162D6B]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#FF6B3510,transparent_60%)]" />
                    </div>

                    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
                            Your Industry.{" "}
                            <span className="text-accent-coral">
                                Your Compliance Deadline.
                            </span>{" "}
                            <br className="hidden md:block" />
                            Our Expertise.
                        </h2>

                        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Whether you&apos;re a Tier-1 automotive supplier racing for TISAX® or a fintech preparing for DORA — we get you there. First time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="px-10"
                                >
                                    Book Assessment
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="px-10 border-white/20 text-white hover:bg-white/10"
                                >
                                    Learn About Us
                                </Button>
                            </Link>
                        </div>

                        {/* Trust line */}
                        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/25">
                            ISO 27001 · TISAX® · CMMC · NIS2 · DORA · GDPR · SOC 2 · IEC 62443
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
