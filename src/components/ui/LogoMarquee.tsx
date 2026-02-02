"use client";

import React from "react";

const badges = [
    { src: "/tisax-badge-alt.png", alt: "TISAX Certified" },
    { src: "/iso-27001-badge.png", alt: "ISO 27001 Certified" },
    { src: "/gdpr-certified-badge.png", alt: "GDPR Certified" },
    { src: "/tisax-certified-badge.png", alt: "TISAX Specialized" },
    { src: "/tisax-badge-alt.png", alt: "TISAX Assessment" },
    { src: "/iso-27001-badge.png", alt: "ISO/IEC 27001" },
    { src: "/gdpr-certified-badge.png", alt: "GDPR Compliant" },
    { src: "/tisax-certified-badge.png", alt: "VDA ISA Compliance" },
];

export default function LogoMarquee() {
    return (
        <div className="marquee-wrapper w-full opacity-60 hover:opacity-100 transition-opacity duration-700 pt-8 pb-16">
            <div
                className="marquee fadeout-horizontal"
                style={{ "--numItems": 8 } as React.CSSProperties}
            >
                <div className="marquee-track">
                    {badges.map((badge, i) => (
                        <div
                            key={i}
                            className="marquee-item"
                            style={{ "--item-position": i + 1 } as React.CSSProperties}
                        >
                            <img src={badge.src} alt={badge.alt} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="marquee fadeout-horizontal"
                style={{ "--numItems": 8, "--direction": "reverse" } as React.CSSProperties}
            >
                <div className="marquee-track">
                    {[...badges].reverse().map((badge, i) => (
                        <div
                            key={i}
                            className="marquee-item"
                            style={{ "--item-position": i + 1 } as React.CSSProperties}
                        >
                            <img src={badge.src} alt={badge.alt} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
