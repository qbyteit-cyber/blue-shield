import {
    SearchCode,
    ClipboardList,
    AlertTriangle,
    Bug,
    BadgeCheck,
    Network,
} from "lucide-react";
import type { PageMeta, AuditService } from "../types";

/* ── 6 Audit Services ──────────────────────────────────────── */
export const auditServices: AuditService[] = [
    {
        id: "gap-analysis",
        title: "Gap Analysis",
        icon: SearchCode,
        whatItIs:
            "A structured assessment of your current security posture against your target framework — identifying what controls exist, what's missing, and what requires remediation.",
        deliverable:
            "Gap Analysis Report — control-by-control assessment, RAG status, remediation priorities, estimated effort to close.",
        frameworks: "ISO 27001 | TISAX | CMMC | NIS2 | DORA | GDPR",
        bestFor:
            "Companies starting a certification programme or unsure of their current compliance posture.",
        cta: { text: "Book a Gap Analysis", href: "/contact" },
    },
    {
        id: "internal-audit",
        title: "Internal Audit Programme",
        icon: ClipboardList,
        whatItIs:
            "A systematic internal audit of your ISMS and controls against your target standard, conducted by a qualified lead auditor. Generates the audit evidence that certification bodies require to see. Note: This is an internal assessment that prepares you for official certification — it is not the official certification audit itself.",
        deliverable:
            "Formal Internal Audit Report — findings, nonconformities (major/minor), observations, and corrective action register.",
        frameworks: "ISO 27001 | TISAX | CMMC | NIS2",
        bestFor:
            "Companies with an existing ISMS who need to demonstrate continual improvement and audit programme compliance.",
        cta: { text: "Book an Internal Audit", href: "/contact" },
    },
    {
        id: "risk-assessment",
        title: "Risk Assessment",
        icon: AlertTriangle,
        whatItIs:
            "A structured information security risk assessment — threat identification, vulnerability analysis, impact and likelihood scoring, and risk treatment planning using recognised methodology.",
        deliverable:
            "Risk Assessment Report + Risk Treatment Plan + Risk Register + Statement of Applicability input.",
        frameworks: "All ISO 27001-aligned frameworks + TISAX + CMMC",
        bestFor:
            "Organisations at the start of their ISMS journey or those due for their annual risk assessment review.",
        cta: { text: "Book a Risk Assessment", href: "/contact" },
    },
    {
        id: "pen-testing",
        title: "Penetration Testing & Vulnerability Assessment",
        icon: Bug,
        whatItIs:
            "Technical security testing — vulnerability scanning, network penetration testing, web application testing, social engineering assessments — to identify exploitable weaknesses in your environment.",
        deliverable:
            "Technical Penetration Test Report — vulnerabilities found, CVE references, CVSS scores, and prioritised remediation guidance.",
        frameworks: "ISO 27001 A.8 | TISAX technical controls | CMMC AC/SC/SI",
        bestFor:
            "Companies needing technical evidence of control effectiveness for certification, or those wanting to validate their security posture.",
        cta: { text: "Request Penetration Testing", href: "/contact" },
    },
    {
        id: "mock-audit",
        title: "Pre-Certification Mock Audit",
        icon: BadgeCheck,
        whatItIs:
            "A full simulation of the official certification assessment — conducted by our lead auditors using the same methodology, evidence requests, and interview process that official assessors use.",
        deliverable:
            "Mock Audit Report — assessment findings, certification readiness score, and a specific action list to close before the official assessment date.",
        frameworks: "ISO 27001 | TISAX AL2 / AL3 | CMMC Level 2",
        bestFor:
            "Companies 4–8 weeks from their official certification date who want certainty they will pass.",
        cta: { text: "Book a Mock Audit", href: "/contact" },
    },
    {
        id: "supplier-audits",
        title: "Supplier & Third-Party Audits",
        icon: Network,
        whatItIs:
            "Assessment of your vendors, suppliers, and third-party service providers against your information security requirements — meeting ISO 27001 Clause 8.4, TISAX prototype protection requirements, and CMMC supply chain security controls.",
        deliverable:
            "Third-Party Audit Report per supplier + consolidated risk register for your vendor portfolio.",
        frameworks: "ISO 27001 A.5.19 | TISAX TPISR | CMMC SR domain",
        bestFor:
            "Companies with contractual obligations to audit their supply chain, or those preparing for TISAX TPISR assessment.",
        cta: { text: "Discuss Supplier Audits", href: "/contact" },
    },
];

/* ── Page Metadata ─────────────────────────────────────────── */
export const auditsPageMeta: PageMeta = {
    breadcrumb: "Security Audits & Testing",
    eyebrow: "How We Can Help You",
    eyebrowColor: "amber",
    h1: "Security Audits & Testing.",
    subheadline:
        "The worst time to find a gap is when the auditor is sitting across the table. Our internal audit and testing services find every non-conformity before it costs you a certification — or a contract.",
    ctaPrimary: { text: "Book Your Gap Analysis", href: "/contact" },
    ctaSecondary: { text: "Explore Security Management Frameworks", href: "/services/isms-implementation" },
    trustPoints: [
        { text: "Audit against ISO 27001, TISAX, CMMC, NIS2 and more" },
        { text: "Written audit reports with actionable remediation plans" },
        { text: "Pre-certification mock audits conducted by lead auditors" },
    ],
    introH2: "Know Your Gaps Before the Auditor Does",
    introParagraphs: [
        "A company invests 6 months and €50,000 in certification preparation, walks into the official assessment, and fails on a major non-conformity that could have been caught in week 3. This scenario is avoidable. Internal auditing is the quality control mechanism for your implementation — it finds the gaps while there's still time to close them.",
        "ITIS-Secure's audit services are independent, rigorous internal assessments conducted by the same people who prepare clients for official certification. Our auditors know what VDA ISA 6.0 assessors look for, what ISO 27001 auditors scrutinise first, and where companies consistently fail.",
        "Every audit ends with a written report, a prioritised remediation plan, and a clear picture of certification readiness. No vague findings, no unexplained scores — just the specific actions needed to close the gap between where you are and where your certification body expects you to be.",
    ],
    introStats: [
        { value: "6", label: "Audit & testing services" },
        { value: "5 days", label: "Report delivery turnaround" },
        { value: "98%", label: "Post-audit pass rate" },
    ],
    processH2: "How Our Audit Process Works",
    processIntro:
        "A structured, repeatable approach that delivers clear results within days.",
    processSteps: [
        {
            title: "Scoping",
            body: "We define the audit scope, agree the framework version and criteria, and align on audit objectives and timelines.",
            timeline: "Day 1",
        },
        {
            title: "Evidence Review",
            body: "We review your policies, procedures, risk assessments, records, and technical evidence against the framework requirements.",
        },
        {
            title: "Interviews & Walkthroughs",
            body: "We interview key personnel and conduct technical walkthroughs to validate that controls are operating as documented.",
        },
        {
            title: "Report & Remediation",
            body: "We deliver a written audit report with every finding classified, a corrective action register, and a prioritised remediation roadmap.",
            timeline: "Within 5 working days",
        },
    ],
    frameworksH2: "Frameworks We Audit Against",
    frameworksIntro:
        "Our auditors hold active certifications and practitioner experience across all major security frameworks.",
    frameworks: [
        { label: "ISO 27001", href: "/services/iso-27001" },
        { label: "TISAX AL2", href: "/services/tisax" },
        { label: "TISAX AL3", href: "/services/tisax" },
        { label: "CMMC Level 2", href: "/services/cmmc" },
        { label: "NIS2", href: "/services/nis2" },
        { label: "DORA", href: "/services/dora" },
        { label: "GDPR", href: "/services/gdpr" },
        { label: "IEC 62443", href: "/services" },
    ],
    faqs: [
        {
            question: "What's the difference between a gap analysis and an internal audit?",
            answer: "A gap analysis is a snapshot assessment of where you are versus where you need to be — typically used at the start of a certification programme. An internal audit is a formal audit of an existing ISMS to verify that controls are implemented and operating effectively. Gap analysis typically comes first; internal audits come after implementation as ongoing evidence for certification maintenance.",
        },
        {
            question: "Are your audits official certification audits?",
            answer: "No. Our audits are internal assessments that prepare you for official certification. Official TISAX labels are issued by ENX-accredited assessment providers; ISO 27001 certificates by accredited certification bodies. We prepare you to pass those official assessments with confidence.",
        },
        {
            question: "How long does a gap analysis take?",
            answer: "Typically 2–5 days depending on scope and organisation size. The written report is delivered within 5 working days of the assessment.",
        },
        {
            question: "What happens if you find major non-conformities?",
            answer: "We document exactly what the non-conformity is, why it's major, and what remediation is required. We then support you through closing it — either within our implementation engagement or as a focused remediation project.",
        },
        {
            question: "Can you test our technical security controls?",
            answer: "Yes. Penetration testing and vulnerability assessments test the technical layer. Internal audits test process and procedural controls. Most pre-certification programmes benefit from both types of assessment.",
        },
        {
            question: "How far in advance of our certification should we book a mock audit?",
            answer: "4–8 weeks before the official assessment date. This gives enough time to address any findings without rushing and allows for a focused remediation period.",
        },
        {
            question: "Do you provide audit evidence that we can show our clients or OEMs?",
            answer: "We provide formal written reports suitable for stakeholder communication. What you share with clients depends on your contractual obligations — we can advise on appropriate disclosure.",
        },
        {
            question: "Can you audit us against multiple frameworks simultaneously?",
            answer: "Yes. For companies pursuing TISAX and ISO 27001 simultaneously, a combined audit is significantly more efficient. We map findings across both frameworks in a single integrated report.",
        },
    ],
    finalCta: {
        h2: "Find Your Gaps Before Your Auditor Does.",
        body: "The official assessment has a fixed date. Everything before it is your opportunity to be ready.",
        ctaPrimary: { text: "Book Your Gap Analysis", href: "/contact" },
        ctaSecondary: { text: "Book a Mock Audit", href: "/contact" },
    },
};
