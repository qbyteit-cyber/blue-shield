"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { OutsourcedRole, WhoIsThisForCard, ComparisonRow } from "../types";

/* ── Featured Card (dark navy — CISO + DPO) ────────────────── */
function FeaturedRoleCard({ role }: { role: OutsourcedRole }) {
    const Icon = role.icon;
    return (
        <motion.div
            id={role.id}
            className="p-8 bg-primary-navy rounded-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold">{role.title}</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">{role.description}</p>
            <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs font-bold rounded bg-[#FFF7ED]/20 text-[#FED7AA] border border-[#FED7AA]/30">
                    {role.typicalEngagement}
                </span>
            </div>
            <p className="text-xs text-white/50 mt-4 italic">{role.relevantFor}</p>
        </motion.div>
    );
}

/* ── Standard Card (white) ─────────────────────────────────── */
function StandardRoleCard({ role, index }: { role: OutsourcedRole; index: number }) {
    const Icon = role.icon;
    return (
        <motion.div
            id={role.id}
            className="p-6 bg-white rounded-xl border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary-navy/5 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary-navy" />
                </div>
                <h3 className="text-base font-bold text-primary-navy">{role.title}</h3>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed mb-3">{role.description}</p>
            <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]">
                {role.typicalEngagement}
            </span>
            <p className="text-xs text-neutral-400 mt-3 italic">{role.relevantFor}</p>
        </motion.div>
    );
}

/* ── Main Export ────────────────────────────────────────────── */
export function RolesGrid({
    roles,
    whoIsThisFor,
    comparisonRows,
}: {
    roles: OutsourcedRole[];
    whoIsThisFor: WhoIsThisForCard[];
    comparisonRows: ComparisonRow[];
}) {
    const featured = roles.filter((r) => r.featured);
    const standard = roles.filter((r) => !r.featured);

    return (
        <>
            {/* ── Roles ──────────────────────────────────── */}
            <section className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-[800] text-primary-navy tracking-tight mb-4">
                        Roles We Provide
                    </h2>
                    <p className="text-neutral-600 mb-12 max-w-2xl">
                        Qualified, certified security professionals for every function your compliance programme requires.
                    </p>

                    {/* Featured roles (CISO + DPO) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {featured.map((role) => (
                            <FeaturedRoleCard key={role.id} role={role} />
                        ))}
                    </div>

                    {/* Standard roles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {standard.map((role, i) => (
                            <StandardRoleCard key={role.id} role={role} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Who Is This For? ────────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8FAFC]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-2xl md:text-3xl font-[800] text-primary-navy tracking-tight mb-10 text-center">
                        Who Is This For?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {whoIsThisFor.map((card) => (
                            <div
                                key={card.title}
                                className="p-5 rounded-xl border border-neutral-100 bg-white"
                            >
                                <h3 className="text-sm font-bold text-primary-navy mb-2 leading-snug">
                                    "{card.title}"
                                </h3>
                                <p className="text-xs text-neutral-500 leading-relaxed">{card.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Comparison Table ────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-[800] text-primary-navy tracking-tight mb-10 text-center">
                        Why Outsource vs. Hire?
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b-2 border-primary-navy">
                                    <th className="text-left py-3 pr-6 font-bold text-primary-navy"></th>
                                    <th className="text-left py-3 px-6 font-bold text-primary-navy">Full-Time Hire</th>
                                    <th className="text-left py-3 px-6 font-bold text-accent-coral">ITIS Outsourced Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr key={row.label} className="border-b border-neutral-100">
                                        <td className="py-3 pr-6 font-semibold text-primary-navy">{row.label}</td>
                                        <td className="py-3 px-6 text-neutral-500">{row.fullTime}</td>
                                        <td className="py-3 px-6 text-neutral-700 font-medium">{row.outsourced}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-neutral-400 mt-4 text-center">
                        Cost ranges are indicative. Exact engagement costs depend on role, scope, and days required. Contact us for a proposal.
                    </p>
                </div>
            </section>
        </>
    );
}
