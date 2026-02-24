import type { FrameworkPageData } from "../types";

export const iso9001Data: FrameworkPageData = {
    meta: {
        title: "ISO9001 Quality Management | Process Excellence Services",
        description: "Streamline your operations and ensure customer satisfaction with ISO9001:2015 certification readiness. Expert guidance on quality management systems.",
    },
    hero: {
        badge: {
            text: "ISO9001:2015",
            icon: "ShieldCheck",
            variant: "iso",
        },
        h1: {
            normal: "Quality Management &",
            accent: "Operational Excellence.",
        },
        description: "Deliver consistent quality, streamline internal processes, and enhance customer satisfaction with a robust Quality Management System (QMS) built to global standards.",
        buttons: {
            primary: { text: "Book QMS Audit", action: "scroll" },
            secondary: { text: "View Methodology", link: "/services/implementation-support" },
        },
        complianceCard: {
            status: "In Progress",
            items: [
                { label: "Process Mapping", progress: 100 },
                { label: "Quality Manual", progress: 85 },
                { label: "Internal Audit", progress: 60 },
                { label: "Management Review", progress: 40 },
            ],
        },
    },
    benefits: {
        title: "Why Implement ISO9001?",
        description: "Beyond a certificate, ISO9001 provides a framework for sustainable growth and operational efficiency.",
        items: [
            {
                title: "Efficiency Gains",
                description: "Identify redundant processes and optimize resource allocation to reduce operational waste.",
                icon: "Activity",
            },
            {
                title: "Customer Trust",
                description: "Demonstrate a commitment to quality that wins new business and maintains existing contracts.",
                icon: "BadgeCheck",
            },
            {
                title: "Global Recognition",
                description: "The world's most recognized quality standard, opening doors to international supply chains.",
                icon: "Globe",
            },
        ],
    },
    process: {
        title: "QMS Implementation",
        description: "Our auditor-led approach ensures your quality management system is both lean and effective.",
        steps: [
            {
                step: "01",
                title: "Diagnostic Gap Analysis",
                description: "Assessing your current processes against the ISO9001:2015 requirements.",
                icon: "Search",
            },
            {
                step: "02",
                title: "Process Design",
                description: "Developing robust workflows and documentation that reflect how you actually work.",
                icon: "FileSignature",
            },
            {
                step: "03",
                title: "Training & Rollout",
                description: "Ensuring every team member understands their role in the Quality Management System.",
                icon: "Users",
            },
            {
                step: "04",
                title: "Certification Support",
                description: "Final internal audit and management review to guarantee a first-time pass.",
                icon: "CheckCircle2",
            },
        ],
    },
    expert: {
        title: "PDCA: Plan-Do-Check-Act",
        description: "We don't just 'do' ISO; we build cultures of continuous improvement. Our methodology is based on the foundational PDCA cycle.",
        points: [
            "Clear ownership and accountability at the leadership level.",
            "Evidence-based decision making through data monitoring.",
            "Risk-based thinking applied to business operations.",
            "Management of non-conformities and root cause analysis.",
            "Continuous improvement through regular internal audits.",
            "Streamlined documentation that adds value, not bureaucracy.",
        ],
        insightTitle: "Lean Integration",
        insightDescription: "Worried about excessive paperwork? We specialize in 'Lean ISO' — ensuring your compliance documentation is minimal, digital-first, and supports speed rather than slowing it down.",
    },
    cta: {
        title: "Elevate Your Business Standards Today",
        description: "Join thousands of successful organizations that have used ISO9001 to drive growth and efficiency.",
        buttonText: "Start QMS Journey",
    },
};
