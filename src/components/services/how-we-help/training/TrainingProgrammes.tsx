"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { TrainingProgramme, TrainingFormat, AudienceCard } from "../types";

/* ── Programme Card ────────────────────────────────────────── */
function ProgrammeCard({ prog, index }: { prog: TrainingProgramme; index: number }) {
    const Icon = prog.icon;
    return (
        <motion.div
            className="py-8 border-b border-neutral-100 last:border-b-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
        >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Left — meta (30%) */}
                <div className="lg:w-[30%] flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-navy/5 flex items-center justify-center shrink-0">
                            <Icon size={20} className="text-primary-navy" />
                        </div>
                        <h3 className="text-lg font-bold text-primary-navy">{prog.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#EFF6FF] text-[#1D4ED8]">
                            {prog.duration}
                        </span>
                        <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#F0FDF4] text-[#166534]">
                            {prog.format}
                        </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">{prog.audience}</p>
                </div>

                {/* Right — content (70%) */}
                <div className="lg:w-[70%]">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                        {prog.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-neutral-600">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-coral shrink-0" />
                                {h}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href={prog.cta.href}
                        className="text-sm font-bold text-accent-coral hover:underline"
                    >
                        {prog.cta.text} →
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

/* ── Main Export ────────────────────────────────────────────── */
export function TrainingProgrammes({
    programmes,
    formats,
    audienceCards,
}: {
    programmes: TrainingProgramme[];
    formats: TrainingFormat[];
    audienceCards: AudienceCard[];
}) {
    return (
        <>
            {/* ── Programmes ─────────────────────────────── */}
            <section className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-[800] text-primary-navy tracking-tight mb-4">
                        Our Training Programmes
                    </h2>
                    <p className="text-neutral-600 mb-8 max-w-2xl">
                        Expert-led courses covering the frameworks that matter most to your industry and certification goals.
                    </p>

                    <div className="divide-y divide-neutral-100">
                        {programmes.map((p, i) => (
                            <ProgrammeCard key={p.id} prog={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Formats ────────────────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8FAFC]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-2xl md:text-3xl font-[800] text-primary-navy tracking-tight mb-10 text-center">
                        Training Formats
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {formats.map((f) => {
                            const FIcon = f.icon;
                            return (
                                <div key={f.title} className="p-6 bg-white rounded-xl border border-neutral-100 text-center">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-navy/5 flex items-center justify-center">
                                        <FIcon size={22} className="text-primary-navy" />
                                    </div>
                                    <h3 className="text-base font-bold text-primary-navy mb-2">{f.title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{f.bestFor}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Who Should Attend ──────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-2xl md:text-3xl font-[800] text-primary-navy tracking-tight mb-10 text-center">
                        Who Should Attend?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {audienceCards.map((card) => (
                            <div
                                key={card.title}
                                className="p-5 rounded-xl border border-neutral-100 bg-[#F8FAFC]"
                            >
                                <h3 className="text-sm font-bold text-primary-navy mb-2">{card.title}</h3>
                                <p className="text-xs text-neutral-500 leading-relaxed">{card.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
