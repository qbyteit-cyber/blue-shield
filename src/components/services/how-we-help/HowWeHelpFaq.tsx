"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "./types";

export function HowWeHelpFaq({ faqs }: { faqs: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 md:py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-6 max-w-[840px]">
                <h2 className="text-3xl md:text-4xl font-[800] text-primary-navy tracking-tight text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-neutral-100 rounded-2xl overflow-hidden bg-white">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                                aria-expanded={openIndex === i}
                            >
                                <span className="text-base font-bold text-primary-navy pr-4">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`text-neutral-400 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[600px] pb-6" : "max-h-0"}`}
                                aria-hidden={openIndex !== i}
                            >
                                <p className="px-6 text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
