import type { FrameworkPageData } from "../types";

export const doraData: FrameworkPageData = {
    meta: {
        title: "DORA Compliance Services | Digital Operational Resilience Act",
        description: "Specialized DORA implementation for financial entities and ICT providers. ICT Risk Management, TLPT testing, and Third-Party Risk support.",
    },
    hero: {
        badge: {
            text: "EU Regulation 2022/2554",
            icon: "Building2",
            variant: "dora",
        },
        h1: {
            normal: "Resilience for the",
            accent: "Financial Sector.",
        },
        description: "The Digital Operational Resilience Act unification is here. We help financial entities and critical ICT providers build robust risk management frameworks.",
        buttons: {
            primary: { text: "Start DORA Assessment", action: "scroll" },
            secondary: { text: "View The 5 Pillars", link: "#" },
        },
        complianceCard: {
            status: "Enforcement",
            items: [
                { label: "ICT Risk Framework", progress: 90 },
                { label: "Incident Reporting", progress: 100 },
                { label: "Resilience Testing", progress: 60 },
                { label: "ICT Third Party Risk", progress: 45 },
            ],
        },
    },
    benefits: {
        title: "Unifying Financial Security",
        description: "DORA harmonizes ICT risk rules across the EU financial sector, applying to banks, insurers, and their critical ICT providers.",
        items: [
            {
                title: "Holistic Risk Management",
                description: "Move beyond simple IT security to true operational resilience. Identify, protect, detect, respond, and recover.",
                icon: "ShieldCheck",
            },
            {
                title: "Critical ICT Providers",
                description: "If you provide cloud or data services to banks, you are now directly regulated. We prepare you for the Oversight Framework.",
                icon: "Server",
            },
            {
                title: "Advanced Testing (TLPT)",
                description: "Mandatory Threat-Led Penetration Testing (TIBER-EU style) for significant entities. We manage the entire Red Teaming process.",
                icon: "Zap",
            },
        ],
    },
    process: {
        title: "DORA Implementation Path",
        description: "A structured approach to the 5 pillars of the regulation, ensuring evidence-based compliance.",
        steps: [
            {
                step: "01",
                title: "ICT Gap Assessment",
                description: "Reviewing your current ICT governance against the RTS (Regulatory Technical Standards).",
                icon: "Eye",
            },
            {
                step: "02",
                title: "Risk Framework Design",
                description: "Building the ICT Risk Management Framework, including tolerance levels and impact analysis.",
                icon: "FileSpreadsheet",
            },
            {
                step: "03",
                title: "Register of Information",
                description: "Compiling the mandatory register of all contractual arrangements with ICT third-party service providers.",
                icon: "Database",
            },
            {
                step: "04",
                title: "Testing & Reporting",
                description: "Establishing the resilience testing program and major incident reporting channels.",
                icon: "Share2",
            },
        ],
    },
    expert: {
        title: "The 5 Pillars of DORA",
        description: "DORA is built on five core pillars that must be implemented effectively to avoid penalties and ensure market access.",
        points: [
            "ICT Risk Management: Governance, identification, protection, detection, and response/recovery.",
            "ICT-Related Incident Management: Classification and reporting of major incidents to competent authorities.",
            "Digital Operational Resilience Testing: From basic vulnerability scans to advanced TLPT.",
            "Managing of ICT Third-Party Risk: Monitoring risks from external vendors (Cloud, SaaS, etc.).",
            "Information Sharing: Voluntary exchange of cyber threat intelligence between financial entities.",
        ],
        insightTitle: "Are You a Critical Vendor?",
        insightDescription: "DORA introduces a direct oversight framework for 'Critical ICT Third-Party Service Providers' (CTPPs). If you serve the EU financial sector, you may be subject to direct supervision by the ESAs (EBA, EIOPA, ESMA). We help technology vendors align with these strict new banking-grade requirements.",
    },
    cta: {
        title: "Secure Your Financial Operations",
        description: "DORA is already in force. Ensure your ICT systems can withstand, respond to, and recover from all ICT-related disruptions.",
        buttonText: "Get DORA Compliant",
    },
};
