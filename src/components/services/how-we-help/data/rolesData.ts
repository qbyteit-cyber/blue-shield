import {
    Shield,
    UserCog,
    ClipboardList,
    AlertTriangle,
    Eye,
    FolderKey,
    BadgeCheck,
} from "lucide-react";
import type { PageMeta, OutsourcedRole, WhoIsThisForCard, ComparisonRow } from "../types";

/* ── 7 Roles ───────────────────────────────────────────────── */
export const outsourcedRoles: OutsourcedRole[] = [
    {
        id: "ciso",
        title: "Cybersecurity Manager (CISO)",
        icon: UserCog,
        description:
            "Own the information security programme — ISMS management, risk oversight, board reporting, certification management, incident response leadership, and stakeholder communications. Your CISO, on demand.",
        typicalEngagement: "2–8 days/month retainer",
        relevantFor:
            "SMEs and mid-market companies that need executive-level security leadership without a full-time C-suite hire.",
        featured: true,
    },
    {
        id: "dpo",
        title: "Data Privacy Officer (DPO)",
        icon: Eye,
        description:
            "Fulfil the statutory DPO function under GDPR Article 37 — advising on data protection obligations, conducting DPIAs, managing data subject requests, liaising with supervisory authorities, and maintaining records of processing activities. Organisations required to appoint a DPO under Article 37 must ensure the external DPO meets the independence requirements of Article 38.",
        typicalEngagement: "Part-time retainer",
        relevantFor:
            "Any organisation processing personal data at scale or handling special category data — particularly under GDPR Article 37(1).",
        featured: true,
    },
    {
        id: "architect",
        title: "Cybersecurity Architect",
        icon: Shield,
        description:
            "Design and oversee your security architecture — network segmentation, zero-trust implementation, cloud security controls, and technical control frameworks. Ensures your technical environment is built to certification standard from the ground up.",
        typicalEngagement: "Project-based or part-time retainer",
        relevantFor:
            "Companies building new infrastructure or undergoing digital transformation alongside compliance programmes.",
        featured: false,
    },
    {
        id: "auditor",
        title: "Internal Auditor",
        icon: ClipboardList,
        description:
            "Design and execute your internal audit programme — conducting structured audits against ISO 27001, TISAX, CMMC, or NIS2, writing formal audit reports, managing nonconformities, and maintaining the evidence trail certification bodies require.",
        typicalEngagement: "Quarterly audit cycles or annual programme",
        relevantFor:
            "Companies under ISO 27001 surveillance audits, TISAX recertification cycles, or CMMC annual affirmations.",
        featured: false,
    },
    {
        id: "risk",
        title: "Risk Management Specialist",
        icon: AlertTriangle,
        description:
            "Own your risk management process — conducting risk assessments, maintaining the risk register, developing risk treatment plans, and ensuring risk management meets the requirements of your certification framework.",
        typicalEngagement: "Quarterly reviews or project-based",
        relevantFor:
            "Organisations whose risk assessment is a certification requirement (ISO 27001 Clause 6, TISAX, CMMC RM domain).",
        featured: false,
    },
    {
        id: "isms-manager",
        title: "ISMS Manager",
        icon: FolderKey,
        description:
            "Day-to-day management of your Information Security Management System — control monitoring, document management, evidence collection, supplier oversight, awareness programme coordination, and management review preparation.",
        typicalEngagement: "1–4 days/month retainer",
        relevantFor:
            "Companies post-certification who need someone to maintain the ISMS without a full-time resource.",
        featured: false,
    },
    {
        id: "compliance",
        title: "Compliance Officer",
        icon: BadgeCheck,
        description:
            "Monitor and manage regulatory compliance across your applicable frameworks — tracking regulatory changes, ensuring controls remain current, managing compliance registers, and interfacing with legal and regulatory bodies.",
        typicalEngagement: "Part-time retainer or project-based",
        relevantFor:
            "Regulated industries (financial services, healthcare, defence) where the compliance landscape evolves frequently.",
        featured: false,
    },
];

/* ── Who Is This For? ──────────────────────────────────────── */
export const whoIsThisForCards: WhoIsThisForCard[] = [
    {
        title: "We need a CISO for certification",
        body: "Company pursuing ISO 27001 or TISAX that needs an accountable security owner but doesn't want to hire full-time for a 12-month project.",
    },
    {
        title: "We lost our security manager",
        body: "Organisation mid-certification or under surveillance whose security lead has left. Needs continuity immediately — not a 3-month recruitment process.",
    },
    {
        title: "We're required to have a DPO",
        body: "Company that falls under GDPR Article 37 DPO obligation but isn't large enough to justify a full-time data protection officer.",
    },
    {
        title: "Our auditor wants to see an audit programme",
        body: "Company under ISO 27001 surveillance or TISAX recertification that needs a credible internal audit conducted by a qualified auditor — not their own IT manager reviewing their own work.",
    },
];

/* ── Comparison Table ──────────────────────────────────────── */
export const comparisonRows: ComparisonRow[] = [
    { label: "Annual cost", fullTime: "€80K–€180K", outsourced: "€15K–€60K (scope-dependent)" },
    { label: "Availability", fullTime: "5 days/week", outsourced: "Agreed days — typically 1–4/month" },
    { label: "Time to start", fullTime: "3–6 months", outsourced: "2–4 weeks" },
    { label: "Certifications", fullTime: "Variable", outsourced: "Verified, current" },
    { label: "Risk if they leave", fullTime: "Critical", outsourced: "Continuity guaranteed" },
    { label: "Framework depth", fullTime: "Depends on hire", outsourced: "Specialist expertise" },
];

/* ── Page Metadata ─────────────────────────────────────────── */
export const rolesPageMeta: PageMeta = {
    breadcrumb: "Outsourced Roles",
    eyebrow: "How We Can Help You",
    eyebrowColor: "purple",
    h1: "Outsourced Roles.",
    subheadline:
        "Not every organisation needs a full-time CISO. But every organisation handling sensitive data, pursuing certification, or operating in a regulated industry needs that expertise — on demand, accountable, and embedded in your business.",
    ctaPrimary: { text: "Discuss Your Requirements", href: "/contact" },
    ctaSecondary: { text: "Explore Industries", href: "/industries" },
    trustPoints: [
        { text: "Qualified professionals with active framework certifications" },
        { text: "Flexible engagement — days per month to full-time" },
        { text: "Knowledge transfer built into every engagement" },
    ],
    introH2: "Senior Security Expertise, Without the Full-Time Cost",
    introParagraphs: [
        "Finding a qualified CISO with ISO 27001 lead auditor credentials and TISAX experience who wants to work for a 300-person automotive supplier in Central Europe is genuinely difficult. And even if you find one, the salary is €120,000–€180,000 for a function that might need 2 days of senior attention per week.",
        "ITIS-Secure provides qualified, certified security professionals on a fractional basis. They attend your management reviews, run your audit programme, manage your ISMS, report to your board, and interface with certification bodies — as a full member of your team, not a remote adviser who sends monthly reports.",
        "You get a verifiable credential (their certifications are real, their experience is documented), continuity (the same person, not a revolving door of consultants), and flexibility (scale up before a certification audit, scale back during quiet periods). Our outsourced professionals are engaged through ITIS-Secure and are fully accountable to the terms of your engagement agreement.",
    ],
    introStats: [
        { value: "7", label: "Specialist roles available" },
        { value: "2wk", label: "Average time to start" },
        { value: "6mo+", label: "Minimum engagement" },
    ],
    processH2: "How the Engagement Works",
    processIntro:
        "From initial scoping to ongoing delivery, every engagement is structured for accountability and results.",
    processSteps: [
        {
            title: "Requirements Scoping",
            body: "We agree the role, responsibilities, required days per month, reporting lines, and deliverables.",
        },
        {
            title: "Professional Matching",
            body: "We match you with the right specialist — the person whose certifications, industry experience, and personality fit your organisation.",
        },
        {
            title: "Onboarding",
            body: "Your specialist embeds with your team — attends management reviews, interfaces with stakeholders, and begins delivering from week one.",
        },
        {
            title: "Ongoing Delivery",
            body: "Monthly delivery reports, quarterly performance reviews, and full flexibility to scale engagement up or down as your needs change.",
        },
    ],
    frameworksH2: "Frameworks We Work With",
    frameworksIntro:
        "Our outsourced professionals hold active certifications across all major security and privacy frameworks.",
    frameworks: [
        { label: "ISO 27001", href: "/services/iso-27001" },
        { label: "TISAX", href: "/services/tisax" },
        { label: "CMMC 2.0", href: "/services/cmmc" },
        { label: "NIS2", href: "/services/nis2" },
        { label: "GDPR", href: "/services/gdpr" },
        { label: "DORA", href: "/services/dora" },
    ],
    faqs: [
        {
            question: "Are your outsourced professionals employees of ITIS-Secure?",
            answer: "Our outsourced professionals are engaged through ITIS-Secure and operate under our engagement agreements. The specific contractual arrangement (employment or specialist contractor) depends on the role and jurisdiction. In all cases, ITIS-Secure is your single point of accountability for delivery and quality.",
        },
        {
            question: "What qualifications do your outsourced professionals hold?",
            answer: "Typical credentials include ISO 27001 Lead Auditor (PECB/BSI), CISM, CISSP, TISAX lead assessor experience, and CMMC Registered Practitioner. Specific credentials for your role are confirmed at proposal stage.",
        },
        {
            question: "Can we see the CV/profile of our assigned professional before committing?",
            answer: "Yes — we present matched profiles before engagement confirmation. You'll meet your assigned professional and confirm the fit before any commitment.",
        },
        {
            question: "What if the assigned professional doesn't meet our expectations?",
            answer: "We offer a replacement guarantee — if the match isn't working within the first 30 days, we replace at no additional cost. Your satisfaction and project continuity are non-negotiable.",
        },
        {
            question: "How quickly can an outsourced CISO or DPO start?",
            answer: "Typically 2–4 weeks from signed agreement. For urgent requirements — such as an imminent certification audit or a sudden departure — we can often mobilise faster.",
        },
        {
            question: "Can the outsourced professional work on-site?",
            answer: "Yes — we can accommodate regular on-site presence as part of the engagement scope. Most clients use a hybrid model combining on-site days with remote availability.",
        },
        {
            question: "What's the minimum engagement period?",
            answer: "6 months minimum for retainer roles to ensure meaningful delivery. Project-based roles — for example, conducting a single internal audit cycle — can be shorter.",
        },
        {
            question: "Can the outsourced role transition to a permanent hire later?",
            answer: "Yes — and we support that transition. Many engagements begin as outsourced and transition to permanent once the organisation has the maturity and budget for a full-time hire.",
        },
    ],
    finalCta: {
        h2: "The Expertise You Need, Exactly When You Need It.",
        body: "Your compliance programme requires qualified, accountable security leadership — not a subscription to a policy template platform. Talk to us about which role you need and we'll match you with the right professional within the week.",
        ctaPrimary: { text: "Discuss Your Requirements", href: "/contact" },
        ctaSecondary: { text: "View All Services", href: "/contact" },
    },
};
