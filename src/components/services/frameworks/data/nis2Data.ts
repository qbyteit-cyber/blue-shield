import type { FrameworkPageData } from "../types";

export const nis2Data: FrameworkPageData = {
    meta: {
        title: "NIS2 Compliance Services | Essential & Important Entities",
        description: "Expert NIS2 implementation support. Gap analysis, Article 21 technical controls, and 24/72h incident reporting frameworks for EU compliance.",
    },
    hero: {
        badge: {
            text: "EU Directive 2022/2555",
            icon: "Globe",
            variant: "nis2",
        },
        h1: {
            normal: "Cybersecurity for",
            accent: "Critical Infrastructure.",
        },
        description: "Complete NIS2 compliance roadmap for Essential and Important entities. We operationalize Article 21 technical measures and streamline your incident reporting obligations.",
        buttons: {
            primary: { text: "Book NIS2 Gap Analysis", action: "scroll" },
            secondary: { text: "Request Checklist", link: "/contact" },
        },
        complianceCard: {
            status: "Required",
            items: [
                { label: "Entity Classification", progress: 100 },
                { label: "Article 21 Controls", progress: 85 },
                { label: "Incident Reporting", progress: 60 },
                { label: "Supply Chain Security", progress: 40 },
            ],
        },
    },
    benefits: {
        title: "Beyond Compliance: Operational Resilience",
        description: "NIS2 shifts the focus from 'tick-box' compliance to active cyber hygiene and personal liability for management bodies.",
        items: [
            {
                title: "Avoid Massive Penalties",
                description: "Fines up to €10M or 2% of global turnover for Essential entities. We build the evidence trail to protect your organization.",
                icon: "Scale",
            },
            {
                title: "C-Level Liability Protection",
                description: "NIS2 holds management personally liable for non-compliance. Our governance frameworks demonstrate due diligence.",
                icon: "ShieldAlert",
            },
            {
                title: "Supply Chain Continuity",
                description: "Mandatory security for direct suppliers. We help you audit your downstream partners to meet Article 21 requirements.",
                icon: "Truck",
            },
        ],
    },
    process: {
        title: "The NIS2 Roadmap",
        description: "From entity classification to full operational resilience, we guide you through the transposition into national law.",
        steps: [
            {
                step: "01",
                title: "Scoping & Classification",
                description: "Determining if you are an Essential or Important entity based on sector, size, and critical dependency.",
                icon: "Activity",
            },
            {
                step: "02",
                title: "Article 21 Gap Analysis",
                description: "Assessing current security posture against the 10 mandatory technical and organizational measures.",
                icon: "FileText",
            },
            {
                step: "03",
                title: "Control Implementation",
                description: "Deploying MFA, encryption, BCM, and vulnerability handling processes to close the gaps.",
                icon: "CheckCircle2",
            },
            {
                step: "04",
                title: "Incident Reporting Setup",
                description: "Establishing the 24-hour Early Warning and 72-hour Incident Notification workflows with CSIRTs.",
                icon: "Siren",
            },
        ],
    },
    expert: {
        title: "Mandatory Technical Measures",
        description: "Article 21 of NIS2 is prescriptive. Your organization must implement 'state-of-the-art' measures relative to the risk.",
        points: [
            "Policies on risk analysis and information system security.",
            "Incident handling (prevention, detection, and response).",
            "Business continuity, such as backup management and disaster recovery.",
            "Supply chain security including security-related aspects concerning the relationships between each entity and its direct suppliers.",
            "Security in network and information systems acquisition, development and maintenance.",
            "Policies and procedures to assess the effectiveness of cybersecurity risk-management measures.",
            "Basic cyber hygiene practices and cybersecurity training.",
            "Policies and procedures regarding the use of cryptography and, where appropriate, encryption.",
            "Human resources security, access control policies and asset management.",
            "The use of multi-factor authentication or continuous authentication solutions.",
        ],
        insightTitle: "The 24-Hour Rule",
        insightDescription: "NIS2 creates a strict timeline for significant incidents. You must submit an 'Early Warning' to the CSIRT within 24 hours of becoming aware of the incident, followed by a detailed notification within 72 hours. Our Incident Response Retainer ensures you meet these deadlines.",
    },
    cta: {
        title: "Are You Ready for NIS2?",
        description: "Member states have transposed the directive. The time for implementation is now. Secure your critical infrastructure status today.",
        buttonText: "Schedule NIS2 Consultation",
    },
};
