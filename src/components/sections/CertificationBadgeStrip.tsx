"use client";

import { motion } from "framer-motion";

const standards = [
    "TISAX",
    "ISO 27001",
    "NIS2",
    "DORA",
    "GDPR",
    "TPISR",
];

// Duplicate the array to ensure seamless infinite loop
const marqueeItems = [...standards, ...standards, ...standards, ...standards];

export function CertificationBadgeStrip() {
    return (
        <section className="w-full bg-white relative overflow-hidden py-12 md:py-16 mt-16 md:mt-24 border-y border-neutral-100">
            {/* Background Faint Horizontal Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:100%_12px]" />
            </div>

            <div className="relative z-10">
                <div className="flex overflow-hidden select-none">
                    <motion.div
                        className="flex whitespace-nowrap gap-16 md:gap-24 lg:gap-32 px-12"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* Render items twice for seamless loop */}
                        {[...standards, ...standards].map((item, idx) => (
                            <span
                                key={`${item}-${idx}`}
                                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-neutral-300 hover:text-neutral-500 transition-colors duration-500 font-sans uppercase italic"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    WebkitTextStroke: "1px rgba(0,0,0,0.05)",
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ITIS-SECURE",
                        "award": standards
                    })
                }}
            />
        </section>
    );
}
