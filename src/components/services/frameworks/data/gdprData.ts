import type { FrameworkPageData } from "../types";

export const gdprData: FrameworkPageData = {
    meta: {
        title: "GDPR Compliance Services | Data Protection & Privacy",
        description: "Comprehensive GDPR support including DPO as a Service, DPIAs, RoPA creation, and Article 32 technical security controls.",
    },
    hero: {
        badge: {
            text: "EU Regulation 2016/679",
            icon: "Lock",
            variant: "gdpr",
        },
        h1: {
            normal: "Privacy by Design &",
            accent: "Data Protection.",
        },
        description: "We bridge the gap between legal privacy requirements and technical security controls. From Article 30 Records of Processing to Article 32 Security of Processing.",
        buttons: {
            primary: { text: "Book Privacy Audit", action: "scroll" },
            secondary: { text: "Hire a DPO", link: "/contact" },
        },
        complianceCard: {
            status: "Mandatory",
            items: [
                { label: "Data Mapping (RoPA)", progress: 100 },
                { label: "Privacy Notices", progress: 100 },
                { label: "Consent Management", progress: 80 },
                { label: "Breach Protocols", progress: 60 },
            ],
        },
    },
    benefits: {
        title: "Data Protection Assurance",
        description: "GDPR is not just about cookie banners. It requires deep integration of privacy principles into your business operations and IT systems.",
        items: [
            {
                title: "Avoid 4% Fines",
                description: "Penalties for non-compliance can reach €20M or 4% of global turnover. Compliance is your cheapest insurance policy.",
                icon: "Gavel",
            },
            {
                title: "DPO Services",
                description: "Don't have an internal Data Protection Officer? Our certified DPOs act as your independent point of contact for authorities.",
                icon: "UserCheck",
            },
            {
                title: "Technical Security",
                description: "We implement the 'appropriate technical and organizational measures' required by Article 32 (Encryption, Pseudonymization).",
                icon: "Shield",
            },
        ],
    },
    process: {
        title: "Privacy Implementation",
        description: "We follow a pragmatic approach to build a defensible privacy posture without slowing down your business.",
        steps: [
            {
                step: "01",
                title: "Data Mapping (RoPA)",
                description: "Creating the Article 30 Record of Processing Activities to understand what data you hold and why.",
                icon: "FileSearch",
            },
            {
                step: "02",
                title: "Gap Analysis & DPIA",
                description: "Assessing risks to data subjects and conducting Data Protection Impact Assessments for high-risk processing.",
                icon: "FileWarning",
            },
            {
                step: "03",
                title: "Policy & Process",
                description: "Drafting privacy notices, retention policies, and data subject access request (DSAR) procedures.",
                icon: "EyeOff",
            },
            {
                step: "04",
                title: "Technical Controls",
                description: "Implementing encryption, access controls, and breach detection systems to satisfy Article 32.",
                icon: "Fingerprint",
            },
        ],
    },
    expert: {
        title: "Article 32: Security of Processing",
        description: "GDPR works hand-in-hand with ISO 27001. You cannot have privacy without security. We implement the technical controls required by law.",
        points: [
            "Pseudonymisation and encryption of personal data.",
            "Ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems.",
            "Ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident.",
            "Process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures.",
            "Strict access control and privilege management.",
            "Vendor risk management (Data Processing Agreements).",
        ],
        insightTitle: "International Data Transfers",
        insightDescription: "Transferring data outside the EEA? We help you navigate recent rulings (Schrems II) and implement Standard Contractual Clauses (SCCs) and Transfer Impact Assessments (TIAs) to ensure your cross-border data flows remain legal.",
    },
    cta: {
        title: "Protect Your Data & Reputation",
        description: "Data privacy is now a board-level issue. Demonstrate your commitment to your customers' privacy rights.",
        buttonText: "Get GDPR Compliant",
    },
};
