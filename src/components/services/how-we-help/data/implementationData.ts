import {
    Layers,
    AlertTriangle,
    FileText,
    Settings2,
    Users,
    ClipboardCheck,
} from "lucide-react";
import type { PageMeta, DeliveryArea, ProcessStep } from "../types";

/* ── 6 Delivery Areas ──────────────────────────────────────── */
export const deliveryAreas: DeliveryArea[] = [
    {
        id: "isms-foundation",
        title: "ISMS Foundation",
        icon: Layers,
        body: "We establish your Information Security Management System from the ground up — scope definition, context of organisation, leadership requirements, and the full PDCA operating model aligned to ISO 27001:2022.",
    },
    {
        id: "risk-assessment",
        title: "Risk Assessment & Treatment",
        icon: AlertTriangle,
        body: "We conduct structured risk assessments using recognised methodologies, build your Risk Treatment Plan, and develop the Statement of Applicability — the core documents every auditor scrutinises first.",
    },
    {
        id: "policy-documentation",
        title: "Policy & Documentation Library",
        icon: FileText,
        body: "We develop the full policy suite your certification requires — information security policy, acceptable use, access control, incident response, business continuity, and 20+ supporting procedures — all tailored to your environment, not copied from a template.",
    },
    {
        id: "technical-controls",
        title: "Technical Controls",
        icon: Settings2,
        body: "Policies without evidence don't pass audits. We implement and document the technical controls — access management, logging, encryption, patch management, network segmentation — and build the evidence trail auditors require.",
    },
    {
        id: "security-awareness",
        title: "Security Awareness",
        icon: Users,
        body: "Human error remains the leading cause of security incidents. We design and deliver awareness programmes that build genuine security culture, not just checkbox completion.",
    },
    {
        id: "audit-preparation",
        title: "Pre-Certification Preparation",
        icon: ClipboardCheck,
        body: "Before your official assessment, we conduct a structured mock audit against your target standard — identifying and closing gaps while there's still time to fix them.",
    },
];

/* ── 6-Phase Methodology ───────────────────────────────────── */
export const methodologySteps: ProcessStep[] = [
    {
        title: "Discover",
        body: "We assess your current posture, define scope, and build your personalised compliance roadmap.",
        timeline: "Weeks 1–2",
    },
    {
        title: "Design",
        body: "We design your ISMS architecture, risk assessment methodology, and policy framework.",
        timeline: "Weeks 3–4",
    },
    {
        title: "Build",
        body: "We implement controls, write policies, and configure technical measures.",
        timeline: "Weeks 5–10",
    },
    {
        title: "Validate & Certify",
        body: "We conduct a mock audit, close all identified gaps, and support you through the official assessment — present, available, and ready to respond.",
        timeline: "Weeks 11–13+",
    },
];

/* ── Page Metadata ─────────────────────────────────────────── */
export const implementationPageMeta: PageMeta = {
    breadcrumb: "Implementation Support",
    eyebrow: "How We Can Help You",
    eyebrowColor: "blue",
    h1: "Implementation Support.",
    subheadline:
        "Getting from zero to certified isn't a documentation exercise — it's a full-scale operational transformation. ITIS-Secure embeds alongside your team to build, configure, and prove every control your certification requires.",
    ctaPrimary: { text: "Book Your Free Gap Assessment", href: "/contact" },
    ctaSecondary: { text: "Explore ISMS Implementation", href: "/services/isms-implementation" },
    trustPoints: [
        { text: "ISO 27001 Lead Auditor certified" },
        { text: "TISAX AL3 preparation specialists" },
        { text: "98% first-time pass rate" },
    ],
    introH2: "What Is Implementation Support?",
    introParagraphs: [
        "Most companies attempting ISO 27001 or TISAX certification try to do it with their existing IT team, treating it as an internal project. They underestimate the bandwidth required, the depth of expertise needed, and the evidence requirements they don't yet know about. By month three, the project stalls — policies are half-written, risk assessments are incomplete, and the certification deadline hasn't moved.",
        "ITIS-Secure doesn't hand over a framework template and leave. We assign a dedicated expert who works inside your organisation through the full implementation lifecycle: scoping, policy development, control implementation, evidence building, and audit preparation. Your consultant becomes part of your team for the duration of the engagement.",
        "The outcome is a genuinely implemented, audit-ready security programme — not just a folder of policies no one reads. Every control is operational, every piece of evidence is documented, and your team understands what they're running. Note: ITIS-Secure provides implementation support and consultancy. Official certifications are issued by independent accredited certification bodies.",
    ],
    introStats: [
        { value: "98%", label: "First-time pass rate" },
        { value: "12wk", label: "Average time to certification" },
        { value: "140+", label: "Controls implemented per ISMS" },
    ],
    processH2: "Our Implementation Methodology",
    processIntro:
        "Every engagement follows our proven delivery model — the same process that has achieved a 98% first-time pass rate across TISAX and ISO 27001 programmes.",
    processSteps: methodologySteps,
    frameworksH2: "Frameworks We Implement",
    frameworksIntro:
        "We implement compliance programmes across every major information security framework relevant to Automotive, Defence, and regulated industries.",
    frameworks: [
        { label: "ISO 27001", href: "/services/iso-27001" },
        { label: "TISAX", href: "/services/tisax" },
        { label: "CMMC 2.0", href: "/services/cmmc" },
        { label: "NIS2", href: "/services/nis2" },
        { label: "DORA", href: "/services/dora" },
        { label: "GDPR", href: "/services/gdpr" },
        { label: "TPISR", href: "/services/tpisr" },
        { label: "IEC 62443", href: "/services" },
        { label: "DO-326A", href: "/services" },
        { label: "NIST 800-171", href: "/services" },
    ],
    faqs: [
        {
            question: "How long does a typical implementation take?",
            answer: "Timeline depends on scope, existing maturity, and team availability. TISAX AL2 typically takes 8–12 weeks, AL3 10–16 weeks, and ISO 27001 12–18 weeks. We provide a detailed, personalised timeline after completing your gap assessment.",
        },
        {
            question: "Do you work alongside our existing IT team?",
            answer: "Yes — we embed with your team, not above it. We transfer knowledge throughout the engagement so your team can maintain the ISMS independently post-certification. By the time we complete, your people own the system.",
        },
        {
            question: "What's the difference between Implementation Support and consulting?",
            answer: "Consulting gives advice. Implementation means we do the work — writing policies, building evidence, configuring controls, and preparing auditors' evidence packs. We deliver a completed, audit-ready programme, not a report with recommendations.",
        },
        {
            question: "Do you guarantee certification?",
            answer: "We don't certify companies — certifications are issued by independent accredited bodies (ENX for TISAX, ISO-accredited CBs for ISO 27001). What we guarantee is that our implementation will be ready for assessment. Our 98% first-time pass rate speaks to that.",
        },
        {
            question: "How many consultants will be assigned to our project?",
            answer: "Typically a lead consultant with framework-specific specialists for technical controls. Project scope determines team composition — we'll confirm your team structure at proposal stage.",
        },
        {
            question: "Can you implement TISAX and ISO 27001 simultaneously?",
            answer: "Yes — and we recommend it. The frameworks share significant control overlap. Dual implementation reduces total effort by 25–35% compared to sequential projects.",
        },
        {
            question: "What happens after certification?",
            answer: "Certifications require maintenance. We offer ongoing ISMS management, annual internal audits, and recertification support. See our Outsourced Roles service for ongoing support options.",
        },
        {
            question: "Do you work with companies of all sizes?",
            answer: "Yes — from 20-person software suppliers needing TISAX AL2 to multi-site manufacturers requiring ISO 27001 across 6 locations. Our methodology scales to fit your organisation.",
        },
    ],
    finalCta: {
        h2: "Ready to Start Your Implementation?",
        body: "Every day without a compliant security programme is a day your competitors could be winning contracts you're not eligible for. Your gap assessment is free, takes 30 minutes, and gives you a clear implementation roadmap.",
        ctaPrimary: { text: "Book Your Free Gap Assessment", href: "/contact" },
        ctaSecondary: { text: "View Our ISMS Service", href: "/services/isms-implementation" },
    },
};
