import type { FrameworkPageData } from "../types";

export const tpisrData: FrameworkPageData = {
    meta: {
        title: "TPISR Compliance | Third Party Information Security Risk",
        description: "Manage supply chain cyber risk with our TPISR services. Vendor risk assessments, due diligence questionnaires, and continuous monitoring.",
    },
    hero: {
        badge: {
            text: "Supply Chain Risk",
            icon: "Network",
            variant: "tpisr",
        },
        h1: {
            normal: "Secure Your",
            accent: "Digital Supply Chain.",
        },
        description: "Third Party Information Security Risk (TPISR) is the fastest-growing threat vector. We help you assess, onboard, and monitor your vendors to prevent supply chain attacks.",
        buttons: {
            primary: { text: "Assess Vendor Risk", action: "scroll" },
            secondary: { text: "Vendor Audit Support", link: "/contact" },
        },
        complianceCard: {
            status: "Active",
            items: [
                { label: "Vendor Tiering", progress: 100 },
                { label: "Due Diligence", progress: 65 },
                { label: "Risk Assessment", progress: 85 },
                { label: "Continuous Monitoring", progress: 40 },
            ],
        },
    },
    benefits: {
        title: "Trust Your Supply Chain",
        description: "Your security is only as strong as your weakest link. We provide end-to-end Third Party Risk Management (TPRM).",
        items: [
            {
                title: "Vendor Assurance",
                description: "Validate that your suppliers meet your security standards before they touch your data. We run the audits for you.",
                icon: "BadgeCheck",
            },
            {
                title: "Regulatory Compliance",
                description: "Meet TPISR requirements from NIS2, DORA, and GDPR which all mandate strict supply chain oversight.",
                icon: "ShieldAlert",
            },
            {
                title: "Contractual Enforcement",
                description: "We help draft Security Schedules and Data Processing Agreements (DPAs) with right-to-audit clauses.",
                icon: "FileSignature",
            },
        ],
    },
    process: {
        title: "TPISR Lifecycle",
        description: "A standardized process for onboarding and managing external partners based on risk.",
        steps: [
            {
                step: "01",
                title: "Identification & Tiering",
                description: "Cataloging all third parties and classifying them based on access to data and business criticality.",
                icon: "Users",
            },
            {
                step: "02",
                title: "Due Diligence",
                description: "Sending and analyzing security questionnaires (SIG, CAIQ, VDA ISA) to assess control maturity.",
                icon: "Search",
            },
            {
                step: "03",
                title: "Risk Treatment",
                description: "Identifying gaps and enforcing remediation plans before contract signature or renewal.",
                icon: "BarChart3",
            },
            {
                step: "04",
                title: "Monitoring & Review",
                description: "Continuous monitoring of vendor security posture and periodic re-assessments.",
                icon: "Link",
            },
        ],
    },
    expert: {
        title: "The TPISR Challenge",
        description: "Modern enterprises rely on hundreds of SaaS, IaaS, and service providers. Managing this web of risk requires streamlined tools and expertise.",
        points: [
            "Unified Supplier Inventory: Creating a single source of truth for all external data handlers.",
            "Risk-Based Approach: Focusing resources on 'Critical' and 'High' risk vendors.",
            "Questionnaire Management: Automating the collection and scoring of SIG/VDA ISA assessments.",
            "Fourth-Party Risk: Understanding who your vendors outsource to.",
            "Offboarding Security: Ensuring data destruction and access revocation when contracts end.",
        ],
        insightTitle: "TISAX & VDA ISA Supply Chain",
        insightDescription: "For the automotive sector, TPISR is codified in TISAX. If you are an OEM or Tier 1 supplier, you must prove you are auditing your own sub-processors. We handle this cascading assurance process, collecting TISAX labels and conducting 'Second Party Audits' where labels are missing.",
    },
    cta: {
        title: "Close the Backdoor",
        description: "Don't let a vendor breach become your data breach. Implement a robust TPISR program today.",
        buttonText: "Start Vendor Screening",
    },
};
