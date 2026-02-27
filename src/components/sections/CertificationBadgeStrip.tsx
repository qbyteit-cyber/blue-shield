"use client";

import Image from "next/image";
import Link from "next/link";

const badges = [
    {
        src: "/badges/iso.svg",
        alt: "ISO 27001 Certification",
        href: "/services/iso-27001",
        tooltipTitle: "ISO 27001",
        tooltipText: "The global standard for information security management. Required by most enterprise procurement teams."
    },
    {
        src: "/badges/Logo-ISO-27001.png",
        alt: "ISO 27001 Logo",
        href: "/services/iso-27001",
        tooltipTitle: "ISO 27001",
        tooltipText: "The global standard for information security management. Required by most enterprise procurement teams."
    },
    {
        src: "/badges/tisax-enx.png",
        alt: "TISAX ENX Certification",
        className: "badge-slider__img--small",
        href: "/services/tisax",
        tooltipTitle: "TISAX ENX",
        tooltipText: "Mandatory for automotive Tier-1 & Tier-2 suppliers. We've delivered labels across 11 global sites."
    },
    {
        src: "/badges/iso-9001-certification-badge.svg",
        alt: "ISO 9001 Certification",
        href: "/services/iso-9001",
        tooltipTitle: "ISO 9001",
        tooltipText: "Quality management certification trusted across all industries."
    },
    {
        src: "/badges/nis2.jpg",
        alt: "NIS2 Compliance",
        href: "/services/nis2",
        tooltipTitle: "NIS2",
        tooltipText: "EU cybersecurity directive enforcement deadline has passed. Non-compliance carries fines up to €10M."
    },
    {
        src: "/badges/gdpr.png",
        alt: "GDPR Compliance",
        href: "/services/gdpr",
        tooltipTitle: "GDPR",
        tooltipText: "EU data protection compliance — a legal requirement for all companies processing EU citizen data."
    },
    {
        src: "/badges/tpisr.jpg",
        alt: "TPISR Compliance",
        className: "badge-slider__img--small",
        href: "/services/tpisr",
        tooltipTitle: "TPISR",
        tooltipText: "Third-party information security requirements for automotive supply chain partners."
    },
];

const standards = ["TISAX", "ISO 27001", "NIS2", "DORA", "GDPR", "TPISR"];

export function CertificationBadgeStrip() {
    return (
        <section className="badge-slider group/slider relative z-20">
            {/* Fade edges */}
            <div className="badge-slider__fade badge-slider__fade--left pointer-events-none" />
            <div className="badge-slider__fade badge-slider__fade--right pointer-events-none" />

            <div className="badge-slider__track group-hover/slider:[animation-play-state:paused]">
                {/* Render items twice for seamless infinite loop */}
                {[...badges, ...badges].map((badge, idx) => (
                    <div key={`${badge.alt}-${idx}`} className="badge-slider__slide relative group">
                        <Link
                            href={badge.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${badge.tooltipTitle} service`}
                            className="relative block transform transition-all duration-300 ease-in-out hover:scale-[1.08] hover:z-50 hover:shadow-[0_0_15px_rgba(255,107,53,0.3)] rounded-xl bg-white"
                        >
                            <Image
                                src={badge.src}
                                alt={badge.alt}
                                width={140}
                                height={70}
                                quality={85}
                                sizes="(max-width: 768px) 100px, 140px"
                                className={`badge-slider__img ${badge.className || ""}`}
                            />

                            {/* Tooltip Popover */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-primary-navy text-left text-sm rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 hidden sm:block pointer-events-none before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-primary-navy z-50">
                                <span className="block font-bold text-accent-coral mb-1">{badge.tooltipTitle}</span>
                                <span className="block text-white/80 leading-relaxed font-medium">{badge.tooltipText}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ITIS-Secure",
                        "award": standards,
                    }),
                }}
            />
        </section>
    );
}
