import {
    Award,
    Car,
    Globe,
    Lock,
    Shield,
    Puzzle,
    MapPin,
    Monitor,
    Layers,
} from "lucide-react";
import type { PageMeta, TrainingProgramme, TrainingFormat, AudienceCard } from "../types";

/* ── 6 Training Programmes ─────────────────────────────────── */
export const trainingProgrammes: TrainingProgramme[] = [
    {
        id: "iso-27001",
        title: "ISO 27001 / ISMS Training",
        icon: Award,
        audience: "Information Security Managers, IT Directors, Quality Managers",
        duration: "1–3 days",
        format: "In-person / Remote / Blended",
        highlights: [
            "ISO 27001:2022 standard structure and requirements",
            "Building and maintaining an ISMS",
            "Risk assessment methodology",
            "Conducting internal audits",
            "Preparing for external certification",
            "Managing nonconformities and corrective actions",
        ],
        cta: { text: "Request ISO 27001 Training", href: "/contact" },
    },
    {
        id: "tisax",
        title: "TISAX Awareness & Preparation",
        icon: Car,
        audience: "IT teams, Quality departments, Management at automotive suppliers",
        duration: "1–2 days",
        format: "In-person / Remote",
        highlights: [
            "VDA ISA 6.0 structure and control domains",
            "TISAX AL1 / AL2 / AL3 differences",
            "Evidence requirements and common non-conformities",
            "How TISAX assessments work",
            "Prototype protection requirements",
            "Practical session: self-assessment walkthrough",
        ],
        cta: { text: "Request TISAX Training", href: "/contact" },
    },
    {
        id: "nis2",
        title: "NIS2 Directive Training",
        icon: Globe,
        audience: "C-Suite, Security Managers, Compliance Officers",
        duration: "1 day",
        format: "In-person / Remote",
        highlights: [
            "NIS2 scope — essential vs. important entities",
            "10 minimum security measures",
            "Incident reporting obligations and timelines",
            "Supply chain security requirements",
            "Penalties and management liability",
            "Gap assessment workshop",
        ],
        cta: { text: "Request NIS2 Training", href: "/contact" },
    },
    {
        id: "gdpr",
        title: "GDPR & Data Privacy",
        icon: Lock,
        audience: "DPOs, HR, Marketing, Legal, IT teams",
        duration: "Half-day to 1 day",
        format: "In-person / Remote",
        highlights: [
            "GDPR key principles and lawful bases",
            "Data subject rights and how to handle requests",
            "Data breach notification procedures",
            "DPIA methodology",
            "Vendor and processor management",
            "Records of processing activities",
        ],
        cta: { text: "Request GDPR Training", href: "/contact" },
    },
    {
        id: "cmmc",
        title: "CMMC & NIST 800-171",
        icon: Shield,
        audience: "Defence contractors, IT and Security teams",
        duration: "1–2 days",
        format: "Remote / In-person",
        highlights: [
            "CMMC 2.0 model — Level 1, 2, 3 requirements",
            "NIST SP 800-171 Rev 3 — 110 requirements walkthrough",
            "CUI handling and documentation",
            "System Security Plan (SSP) development",
            "Preparing for C3PAO assessment",
            "Common assessment failures and how to avoid them",
        ],
        cta: { text: "Request CMMC Training", href: "/contact" },
    },
    {
        id: "bespoke",
        title: "Bespoke In-House Training",
        icon: Puzzle,
        audience: "Any team, any framework",
        duration: "Custom",
        format: "In-person preferred",
        highlights: [
            "Fully tailored curriculum to your frameworks and industry",
            "Board-level awareness through to hands-on technical workshops",
            "Real examples drawn from your environment",
            "Gap-specific training based on audit findings",
            "Train-the-trainer programmes available",
            "Post-training assessment and certification of completion",
        ],
        cta: { text: "Discuss Bespoke Training", href: "/contact" },
    },
];

/* ── 3 Training Formats ────────────────────────────────────── */
export const trainingFormats: TrainingFormat[] = [
    {
        title: "In-Person",
        icon: MapPin,
        bestFor: "Teams that benefit from interactive exercises and group discussion. Hands-on workshops and assessment simulations. We travel to your location anywhere in Europe.",
    },
    {
        title: "Remote / Virtual",
        icon: Monitor,
        bestFor: "Distributed teams, international organisations, or when time constraints make travel impractical. Full course content delivered via video conference with interactive elements.",
    },
    {
        title: "Blended",
        icon: Layers,
        bestFor: "Larger organisations rolling out compliance awareness across multiple sites or departments. Self-paced online modules combined with live sessions for Q&A and practical exercises.",
    },
];

/* ── 5 Audience Cards ──────────────────────────────────────── */
export const audienceCards: AudienceCard[] = [
    {
        title: "Information Security Managers",
        body: "Build the technical framework knowledge to implement and maintain certification programmes independently.",
    },
    {
        title: "C-Suite & Board",
        body: "Understand your legal obligations, management responsibilities, and what it means when your auditor calls.",
    },
    {
        title: "Internal Auditors",
        body: "Develop the skills to run a credible internal audit programme that genuinely prepares your organisation for external assessment.",
    },
    {
        title: "IT Teams",
        body: "Understand the technical controls your certification requires and how to implement and evidence them correctly.",
    },
    {
        title: "Compliance & Legal Teams",
        body: "Navigate GDPR, NIS2, DORA, and ITAR with the depth needed to advise leadership and manage regulatory risk.",
    },
];

/* ── Page Metadata ─────────────────────────────────────────── */
export const trainingPageMeta: PageMeta = {
    breadcrumb: "Training & Courses",
    eyebrow: "How We Can Help You",
    eyebrowColor: "green",
    h1: "Training & Courses.",
    subheadline:
        "Compliance frameworks only work when the people responsible for them actually understand them. Our training programmes build genuine framework expertise — for security managers, auditors, executives, and IT teams.",
    ctaPrimary: { text: "Request a Training Programme", href: "/contact" },
    ctaSecondary: { text: "Request Course Catalogue", href: "/contact" },
    trustPoints: [
        { text: "Framework-expert trainers with practitioner experience" },
        { text: "Industry-specific courses for Automotive and Defence sectors" },
        { text: "Available in-person, remote, or blended format" },
    ],
    introH2: "Build the Expertise Your Compliance Requires",
    introParagraphs: [
        "The compliance gap is often a knowledge gap. Companies implement frameworks with external consultants, then fail to maintain compliance because their own team doesn't understand what they're running. This is particularly acute with TISAX (3-year recertification cycle) and ISO 27001 (annual surveillance audits). Frameworks that require continuous, informed operation.",
        "ITIS-Secure training is delivered by practitioners. People who have run TISAX assessments, conducted ISO 27001 audits, and implemented NIS2 programmes for real organisations. Not academics. Not slide-deck readers. People who've seen what auditors look for and what causes non-conformities.",
        "Whether your team needs a half-day awareness session or a full 3-day auditor certification programme, we build and deliver the course around your frameworks, your industry, and your timeline.",
    ],
    introStats: [
        { value: "6", label: "Training programmes available" },
        { value: "3", label: "Delivery formats" },
        { value: "5–25", label: "Participants per session" },
    ],
    processH2: "How Our Training Works",
    processIntro:
        "From needs assessment to delivery and follow-up, every programme is structured to maximise knowledge transfer and practical application.",
    processSteps: [
        {
            title: "Needs Assessment",
            body: "We identify your team's skill gaps, target frameworks, and learning objectives.",
        },
        {
            title: "Curriculum Design",
            body: "We build or tailor the programme to your industry, frameworks, and specific requirements.",
        },
        {
            title: "Delivery",
            body: "Expert-led sessions with interactive exercises, real-world scenarios, and practical workshops.",
        },
        {
            title: "Follow-Up",
            body: "Certificates of completion, post-training resources, and ongoing support for implementation.",
        },
    ],
    frameworksH2: "Frameworks We Train On",
    frameworksIntro:
        "Our training programmes cover the full spectrum of information security and compliance frameworks.",
    frameworks: [
        { label: "ISO 27001", href: "/services/iso-27001" },
        { label: "TISAX", href: "/services/tisax" },
        { label: "CMMC 2.0", href: "/services/cmmc" },
        { label: "NIS2", href: "/services/nis2" },
        { label: "DORA", href: "/services/dora" },
        { label: "GDPR", href: "/services/gdpr" },
        { label: "NIST 800-171", href: "/services" },
    ],
    faqs: [
        {
            question: "Are your courses accredited?",
            answer: "Our courses are practitioner-led and based on official framework standards. All training prepares participants for accredited certification exams (e.g., PECB ISO 27001 Lead Auditor). Certificates of completion are issued for all courses; framework certifications require separate accredited exams.",
        },
        {
            question: "Can you deliver training in languages other than English?",
            answer: "Yes. Our trainers deliver in English and Romanian as standard. Additional language availability can be discussed at proposal stage depending on the programme.",
        },
        {
            question: "How many participants can attend?",
            answer: "In-person sessions are optimised for groups of 5–25. Remote sessions can accommodate larger groups. We recommend smaller cohorts for hands-on workshops and larger groups for awareness sessions.",
        },
        {
            question: "Do you offer certifications or certificates of completion?",
            answer: "Certificates of completion are provided for all ITIS courses. Framework certifications (e.g., ISO 27001 Lead Auditor) require sitting a separate accredited exam — our courses prepare you for those exams.",
        },
        {
            question: "Can training be delivered at our premises?",
            answer: "Yes. We travel anywhere in Europe. Most in-house clients prefer this as it allows us to use real examples from their environment and maximise team engagement.",
        },
        {
            question: "How far in advance do we need to book?",
            answer: "Standard programmes typically require 2–4 weeks' notice. Bespoke programmes need 4–6 weeks to develop the tailored curriculum. For urgent requirements, contact us to discuss availability.",
        },
        {
            question: "Do you offer training as part of an implementation project?",
            answer: "Yes. Awareness training and internal auditor training are included in our full implementation packages. This ensures your team can maintain the ISMS independently after we complete the project.",
        },
        {
            question: "Can the training be tailored to our specific industry?",
            answer: "Absolutely. Automotive, defence, healthcare, finance. All examples, case studies, and framework emphasis are adjusted to your sector so the learning is immediately applicable.",
        },
    ],
    finalCta: {
        h2: "Build a Team That Owns Your Compliance.",
        body: "External consultants can implement a framework. Only your team can maintain it — and that requires real knowledge, not a certificate on the wall.",
        ctaPrimary: { text: "Request a Training Programme", href: "/contact" },
        ctaSecondary: { text: "Request Course Catalogue", href: "/contact" },
    },
};
