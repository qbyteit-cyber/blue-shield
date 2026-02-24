import type { FrameworkPageData } from "../types";

export const as9100dData: FrameworkPageData = {
    meta: {
        title: "AS9100D Aerospace Quality Management | Mission Critical Security",
        description: "Secure your aerospace and defence contracts with AS9100 Rev D compliance. Expert guidance on aviation, space and defence quality standards.",
    },
    hero: {
        badge: {
            text: "AS9100 REV D",
            icon: "ShieldCheck",
            variant: "iso",
        },
        h1: {
            normal: "Aerospace Quality &",
            accent: "Mission Integrity.",
        },
        description: "Meet the rigorous safety and quality requirements of the aerospace, space, and defence (ASD) industry. AS9100 Rev D is your license to operate in global aviation supply chains.",
        buttons: {
            primary: { text: "Book AS9100 Audit", action: "scroll" },
            secondary: { text: "Defence Solutions", link: "/services/iso-42001" },
        },
        complianceCard: {
            status: "High Reliability",
            items: [
                { label: "Risk Management", progress: 100 },
                { label: "Configuration Mgmt", progress: 90 },
                { label: "Traceability", progress: 100 },
                { label: "Product Safety", progress: 85 },
            ],
        },
    },
    benefits: {
        title: "The ASD Industry Standard",
        description: "AS9100 builds upon ISO9001 with specific requirements for safety, reliability, and technology for aerospace and defence.",
        items: [
            {
                title: "Tier-1 Eligibility",
                description: "Mandatory qualification for almost all Tier-1 and Tier-2 aerospace and defence prime contractors.",
                icon: "Truck",
            },
            {
                title: "Risk-First Culture",
                description: "Deep integration of risk management across the entire product lifecycle from design to delivery.",
                icon: "ShieldAlert",
            },
            {
                title: "Supply Chain Control",
                description: "Enhanced oversight of sub-contractors and prevention of counterfeit parts in the ASD supply chain.",
                icon: "Network",
            },
        ],
    },
    process: {
        title: "AS9100 Implementation",
        description: "Our approach focuses on the 'Mission Critical' nature of aerospace operations, maximizing first-time assessment outcomes.",
        steps: [
            {
                step: "01",
                title: "Baseline Audit",
                description: "Deep dive into your production and design processes against AS9100 requirements.",
                icon: "Search",
            },
            {
                step: "02",
                title: "Critical Control Design",
                description: "Implementing key ASD requirements: Configuration Management and Product Safety.",
                icon: "Shield",
            },
            {
                step: "03",
                title: "Traceability & Flow",
                description: "Establishing end-to-end traceability and robust non-conformity controls.",
                icon: "Activity",
            },
            {
                step: "04",
                title: "Oversight & Audit",
                description: "Mock audits and OASIS database preparation for the official certification body.",
                icon: "BadgeCheck",
            },
        ],
    },
    expert: {
        title: "Aerospace & Defence Rigour",
        description: "AS9100 is not just a quality standard; it is a safety standard. We prioritize the technical integrity of your output to satisfy NATO and DoD requirements.",
        points: [
            "Advanced Configuration Management (Clause 8.1.2).",
            "Ethical focus on Product Safety and human factors.",
            "Counterfeit Parts Prevention and counterfeit detection.",
            "Rigorous sub-tier supplier control and monitoring.",
            "Strict non-conforming material management and disposal.",
            "Operational risk management throughout delivery.",
        ],
        insightTitle: "ITAR & Export Control",
        insightDescription: "Working with sensitive ASD data? We integrate AS9100 quality controls with ITAR and EAR data security requirements to ensure your quality system handles controlled technical data (CTI) correctly.",
    },
    cta: {
        title: "Ready for Mission-Critical Compliance?",
        description: "Don't let a quality gap disqualify you from the next major ASD contract. Start your AS9100 journey today.",
        buttonText: "Request AS9100 Support",
    },
};
