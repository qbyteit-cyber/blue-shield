"use client";

import Image from "next/image";

const badges = [
    { src: "/badges/iso.svg", alt: "ISO 27001 Certification" },
    { src: "/badges/Logo-ISO-27001.png", alt: "ISO 27001 Logo" },
    { src: "/badges/tisax-enx.png", alt: "TISAX ENX Certification", className: "badge-slider__img--small" },
    { src: "/badges/iso-9001-certification-badge.svg", alt: "ISO 9001 Certification" },
    { src: "/badges/nis2.jpg", alt: "NIS2 Compliance" },
    { src: "/badges/gdpr.png", alt: "GDPR Compliance" },
    { src: "/badges/tpisr.jpg", alt: "TPISR Compliance", className: "badge-slider__img--small" },
];

const standards = ["TISAX", "ISO 27001", "NIS2", "DORA", "GDPR", "TPISR"];

export function CertificationBadgeStrip() {
    return (
        <section className="badge-slider">
            {/* Fade edges */}
            <div className="badge-slider__fade badge-slider__fade--left" />
            <div className="badge-slider__fade badge-slider__fade--right" />

            <div className="badge-slider__track">
                {/* Render items twice for seamless infinite loop */}
                {[...badges, ...badges].map((badge, idx) => (
                    <div key={`${badge.alt}-${idx}`} className="badge-slider__slide">
                        <Image
                            src={badge.src}
                            alt={badge.alt}
                            width={140}
                            height={70}
                            quality={85}
                            sizes="(max-width: 768px) 100px, 140px"
                            className={`badge-slider__img ${badge.className || ""}`}
                        />
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
