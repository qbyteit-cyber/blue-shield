import {
    Car,
    ShieldAlert,
    Landmark,
    HeartPulse,
    Zap,
    Factory,
    Cpu,
    Building,
    type LucideIcon,
} from "lucide-react";

export interface Industry {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    frameworks: string[];
    href: string;
    ctaLabel: string;
}

/* ── 2 Featured (dark navy cards) ─────────────────────────── */
export const featuredIndustries: Industry[] = [
    {
        slug: "automotive",
        title: "Automotive Supply Chain",
        description:
            "TISAX® AL3 preparation for Tier-1 and Tier-2 suppliers. We secure your OEM contracts with BMW, VW, and Mercedes-Benz through a battle-tested 95-day roadmap and a 100% first-time pass rate.",
        icon: Car,
        frameworks: ["TISAX®", "ISO 27001", "VDA ISA 5.0", "TPISR"],
        href: "/contact",
        ctaLabel: "Explore Automotive Solutions",
    },
    {
        slug: "defence",
        title: "Aerospace & Defence",
        description:
            "CMMC 2.0 Level 2 readiness for European defence subcontractors. We bridge the gap to NIST 800-171 compliance so you can secure DoD and NATO contracts with surgical precision.",
        icon: ShieldAlert,
        frameworks: ["CMMC 2.0", "NIST 800-171", "DO-326A", "ITAR"],
        href: "/contact",
        ctaLabel: "Explore Defence Solutions",
    },
];

/* ── 6 Standard (white cards, 3-col grid) ─────────────────── */
export const standardIndustries: Industry[] = [
    {
        slug: "government",
        title: "Government & Public Sector",
        description:
            "National security and citizen data protection. NIS2, ISO 27001, and sector-specific frameworks for government agencies and contractors.",
        icon: Building,
        frameworks: ["NIS2", "ISO 27001", "BSI IT-Grundschutz", "GDPR"],
        href: "/contact",
        ctaLabel: "Learn more",
    },
    {
        slug: "technology",
        title: "Technology",
        description:
            "Security-first certification for SaaS, cloud, and software companies. SOC 2, ISO 27001, and GDPR compliance to win enterprise contracts.",
        icon: Cpu,
        frameworks: ["ISO 27001", "SOC 2", "GDPR", "CSA STAR"],
        href: "/contact",
        ctaLabel: "Learn more",
    },
    {
        slug: "manufacturing",
        title: "Manufacturing",
        description:
            "Securing industrial operations and supply chains. ISO 27001 and NIS2 implementation for smart factories and Industry 4.0 environments.",
        icon: Factory,
        frameworks: ["ISO 27001", "NIS2", "IEC 62443", "TISAX®"],
        href: "/contact",
        ctaLabel: "Learn more",
    },
    {
        slug: "financial",
        title: "Financial Services",
        description:
            "Regulatory compliance for banks, insurance, and fintech. We implement DORA, PCI DSS, and ISO 27001 frameworks to satisfy ECB and national regulators.",
        icon: Landmark,
        frameworks: ["DORA", "PCI DSS", "ISO 27001", "NIS2"],
        href: "/contact",
        ctaLabel: "Learn more",
    },
    {
        slug: "healthcare",
        title: "Healthcare",
        description:
            "Protecting patient data and medical devices. GDPR, NIS2, and ISO 27001 implementation for hospitals, pharma, and medtech companies.",
        icon: HeartPulse,
        frameworks: ["GDPR", "NIS2", "ISO 27001", "MDR"],
        href: "/contact",
        ctaLabel: "Learn more",
    },
    {
        slug: "energy",
        title: "Energy & Utilities",
        description:
            "Critical infrastructure protection for power, gas, and renewables. NIS2 compliance and OT/IT convergence security for essential service operators.",
        icon: Zap,
        frameworks: ["NIS2", "IEC 62443", "ISO 27001", "NERC CIP"],
        href: "/contact",
        ctaLabel: "Learn more",
    },
];

/* ── All 8 names (for the ticker) ─────────────────────────── */
export const allIndustryNames = [
    "Automotive",
    "Aerospace & Defence",
    "Government & Public Sector",
    "Technology",
    "Manufacturing",
    "Financial Services",
    "Healthcare",
    "Energy & Utilities",
];
