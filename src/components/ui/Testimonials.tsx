"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Michael Weber",
        role: "Chief Information Security Officer",
        company: "Continental Automotive",
        content: "ITIS Secure guided us through our TISAX Level 3 assessment with exceptional professionalism. Their deep understanding of automotive security requirements and hands-on approach made the entire process seamless.",
        rating: 5,
    },
    {
        name: "Sarah Chen",
        role: "VP of Compliance",
        company: "Bosch Engineering",
        content: "The gap analysis and remediation roadmap provided by ITIS Secure was instrumental in achieving our ISO 27001:2022 certification on the first attempt. Their expertise saved us months of preparation time.",
        rating: 5,
    },
    {
        name: "Thomas Müller",
        role: "Head of IT Security",
        company: "ZF Friedrichshafen",
        content: "Working with ITIS Secure transformed our approach to information security. Their auditors are not just compliance experts—they're strategic partners who understand the automotive supply chain.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-8 relative z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    What People Say
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    Trusted by leading automotive suppliers and Tier-1 manufacturers across Europe
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-8 rounded-2xl relative group hover:border-primary/20 transition-all"
                    >
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote className="w-12 h-12 text-primary" />
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 fill-secondary text-secondary"
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">
                            "{testimonial.content}"
                        </p>

                        {/* Author */}
                        <div className="border-t border-white/5 pt-4">
                            <div className="font-semibold text-white text-sm">
                                {testimonial.name}
                            </div>
                            <div className="text-xs text-white/50 mt-1">
                                {testimonial.role}
                            </div>
                            <div className="text-xs text-primary font-medium mt-1">
                                {testimonial.company}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Trust Badge */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
            >
                <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full">
                    <Star className="w-5 h-5 fill-secondary text-secondary" />
                    <span className="text-sm text-white/70">
                        <strong className="text-white font-semibold">4.9/5</strong> average rating from 50+ clients
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
