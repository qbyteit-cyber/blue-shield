"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
    { src: "/badges/iso.svg", alt: "ISO 27001 Certification", width: 80, height: 80 },
    { src: "/badges/tisax-enx.png", alt: "TISAX ENX Certification", width: 120, height: 52 },
    { src: "/badges/iso-9001-certification-badge.svg", alt: "ISO 9001 Certification", width: 80, height: 80 },
    { src: "/badges/nis2.png", alt: "NIS2 Compliance", width: 100, height: 52 },
    { src: "/badges/gdpr.png", alt: "GDPR Compliance", width: 100, height: 52 },
    { src: "/badges/tpisr.png", alt: "TPISR Compliance", width: 100, height: 52 },
];

const standards = ["TISAX", "ISO 27001", "NIS2", "DORA", "GDPR", "TPISR"];

// Duplicate for seamless infinite loop
const marqueeItems = [...badges, ...badges];

export function CertificationBadgeStrip() {
    return (
        <section className="w-full bg-white relative overflow-hidden py-10 md:py-14 border-y border-neutral-100">
            {/* Subtle horizontal scan lines */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:100%_12px]" />
            </div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex overflow-hidden select-none">
                    <motion.div
                        className="flex items-center whitespace-nowrap gap-12 md:gap-20 lg:gap-28 px-8"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {marqueeItems.map((badge, idx) => (
                            <div
                                key={`${badge.alt}-${idx}`}
                                className="flex items-center justify-center shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                style={{ minWidth: badge.width }}
                            >
                                <Image
                                    src={badge.src}
                                    alt={badge.alt}
                                    width={badge.width}
                                    height={badge.height}
                                    className="object-contain h-12 md:h-16 w-auto"
                                />
                            </div>
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
                        "award": standards,
                    }),
                }}
            />
        </section>
    );
}
