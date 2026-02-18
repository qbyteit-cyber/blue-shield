// ═══════════════════════════════════════════════════════════════
// ISMS Phase Data — Mandatory Source Content
// All 44 bullet items preserved verbatim from client brief.
// DO NOT edit, summarise, or truncate any bullet text.
// ═══════════════════════════════════════════════════════════════

export interface SubBullet {
    text: string;
}

export interface PhaseBullet {
    text: string;
    subBullets?: SubBullet[];
}

export interface ISMSPhase {
    id: string;
    slug: string;
    number: string;
    title: string;
    originalLabel: string;
    pdcaPhase: "PLAN" | "DO" | "CHECK" | "ACT";
    pdcaColor: string;
    pdcaBg: string;
    icon: string;
    introParagraph: string;
    bullets: PhaseBullet[];
}

export const ismsPhases: ISMSPhase[] = [
    {
        id: "01",
        slug: "gap-analysis",
        number: "01",
        title: "ISMS Gap Analysis & Foundation",
        originalLabel: "GAP Analysis",
        pdcaPhase: "PLAN",
        pdcaColor: "#3B82F6",
        pdcaBg: "#EFF6FF",
        icon: "SearchCode",
        introParagraph:
            "Before building, we diagnose. The Gap Analysis phase establishes the foundation of your entire ISMS programme. We map your current security posture against ISO 27001:2022 and VDA ISA 5.0 requirements, identifying every gap between where you are and where certification demands you to be. This diagnostic precision ensures that no resource is wasted on controls you already satisfy — and no critical gap is left unaddressed.",
        bullets: [
            { text: "Initialization of new certification projects" },
            { text: "Planning and establishing the ISMS" },
            { text: "Define the ISMS scope and boundaries" },
            { text: "ISMS information security requirements analysis" },
            { text: "ISMS information security policy document SET" },
            { text: "ISMS risk assessment" },
            {
                text: "Development of policies and procedures in support of the ISMS",
            },
        ],
    },
    {
        id: "02",
        slug: "implement-and-operate",
        number: "02",
        title: "ISMS Implementation & Operations",
        originalLabel: "Implement and Operate the ISMS (DO)",
        pdcaPhase: "DO",
        pdcaColor: "#22C55E",
        pdcaBg: "#F0FDF4",
        icon: "Settings2",
        introParagraph:
            "This is where strategy becomes operational reality. Our team works alongside yours — not just handing over documentation, but actively implementing controls, building dashboards, and embedding security into your daily business processes. From vendor risk assessments during procurement to maintaining your Statement of Applicability, we operate as an extension of your team.",
        bullets: [
            { text: "Support Business with requirements analysis during RFP" },
            {
                text: "Support the Procurement department with Risk Assessments and Business Impact Analysis for Vendors",
            },
            { text: "Risk Assessment" },
            {
                text: "Risk mitigation via Risk Treatment Plans (Through Risk ID cards)",
            },
            {
                text: "Organizing Management Reviews and provide input for improvement",
            },
            {
                text: "Create and maintain the ISMS framework Dashboards on the internal or cloud infrastructure",
            },
            {
                text: "Develop and maintain a Statement of Applicability in accordance with ISO 27001, VDA, and Client requirements",
            },
        ],
    },
    {
        id: "03",
        slug: "records-management",
        number: "03",
        title: "ISMS Records & Evidence Management",
        originalLabel: "ISMS Records Management",
        pdcaPhase: "DO",
        pdcaColor: "#22C55E",
        pdcaBg: "#F0FDF4",
        icon: "FolderOpen",
        introParagraph:
            "Evidence is the currency of every audit. Without meticulously managed records, compliance simply does not exist in the auditor's eyes. We implement a structured records management system with clearly defined control cadences — monthly, quarterly, and yearly — ensuring that every piece of evidence is current, traceable, and audit-ready at all times.",
        bullets: [
            { text: "Management of security controls" },
            {
                text: "Control of evidence and records",
                subBullets: [
                    { text: "monthly controls" },
                    { text: "quarterly controls" },
                    { text: "yearly controls" },
                    { text: "Risk Assessment ID Cards" },
                ],
            },
            {
                text: "Centralization of digital content and their dynamic management for worldwide use",
            },
            {
                text: "Manage the reporting Dashboards for document control on the internal or cloud infrastructure",
            },
        ],
    },
    {
        id: "04",
        slug: "monitoring-and-review",
        number: "04",
        title: "ISMS Monitoring & Review",
        originalLabel: "Monitoring and Review of the ISMS (CHECK)",
        pdcaPhase: "CHECK",
        pdcaColor: "#F59E0B",
        pdcaBg: "#FFF7ED",
        icon: "Activity",
        introParagraph:
            "What doesn't get measured doesn't get improved — and auditors look here first. The CHECK phase transforms your ISMS from a static document set into a living, measurable programme. We establish continuous monitoring cycles, communicate results to stakeholders, and ensure that every internal assessment feeds directly into your improvement pipeline.",
        bullets: [
            { text: "Monitoring and Review" },
            {
                text: "Communicating the results on an agreed basis to relevant stakeholders",
            },
            {
                text: "Provide input for improvement based on internal assessments",
            },
            {
                text: "Organize and manage internal and external certification audits",
            },
            { text: "Perform Risk Assessment reviews" },
            {
                text: "Organize management reviews and steering committee meetings",
            },
        ],
    },
    {
        id: "05",
        slug: "audit-program",
        number: "05",
        title: "Internal Audit Programme",
        originalLabel: "Audit Program",
        pdcaPhase: "CHECK",
        pdcaColor: "#F59E0B",
        pdcaBg: "#FFF7ED",
        icon: "ClipboardCheck",
        introParagraph:
            "Think of this as the dress rehearsal before the official assessment. A robust internal audit programme is not just a certification requirement — it is your early warning system. We develop and execute a TISAX-aligned audit plan that identifies findings before external auditors do, giving your team the time and clarity to resolve them systematically.",
        bullets: [
            { text: "Develop the TISAX internal Audit Program and Plan" },
            { text: "Provide yearly internal audits" },
            { text: "Write an audit report addressing all findings" },
            {
                text: "Communicating the results on an agreed basis to relevant stakeholders",
            },
            {
                text: "Provide input for improvement to the ISMS Operations team and top Management, based on internal assessments",
            },
        ],
    },
    {
        id: "06",
        slug: "maintain-and-improve",
        number: "06",
        title: "Continuous Improvement & Certification Support",
        originalLabel: "Maintain and Improve (ACT)",
        pdcaPhase: "ACT",
        pdcaColor: "#A855F7",
        pdcaBg: "#FDF4FF",
        icon: "RefreshCw",
        introParagraph:
            "Continuous improvement is not optional in ISO 27001 — it is a certification requirement. The ACT phase makes it systematic. We implement corrective and preventive action procedures, publish them across your organisation, and ensure that every improvement achieves its intended objective. When it is time for certification or recertification, we stand beside you through every step of the process.",
        bullets: [
            {
                text: "Provide valuable input to Management for the continuous improvement of the ISMS",
            },
            { text: "Implement identified improvements to the ISMS" },
            { text: "Develop Corrective Actions Procedure" },
            { text: "Develop Preventive Actions Procedure" },
            { text: "Publish Corrective Actions Procedure" },
            { text: "Publish Preventive Actions Procedure" },
            { text: "Take appropriate Corrective and Preventive Actions" },
            {
                text: "Communicate actions and improvements to interested parties",
            },
            { text: "Ensure improvements achieve intended objectives" },
            {
                text: "Support the company during certifications and recertifications",
            },
            {
                text: "Ensure compliance with information security or privacy laws, rules, regulations, or standards",
            },
        ],
    },
];

// ═══════════════════════════════════════════════════════════════
// FAQ Data
// ═══════════════════════════════════════════════════════════════

export interface FAQItem {
    question: string;
    answer: string;
}

export const ismsFAQs: FAQItem[] = [
    {
        question: "What is the difference between an ISMS and ISO 27001?",
        answer:
            "An Information Security Management System (ISMS) is the actual framework of policies, procedures, controls, and risk management processes that protect your organisation's information. ISO 27001 is the international standard that specifies the requirements for establishing, implementing, maintaining, and continually improving an ISMS. In short, ISO 27001 is the blueprint — your ISMS is the building.",
    },
    {
        question: "How long does ISMS implementation take?",
        answer:
            "A typical ISMS implementation takes 12–16 weeks for mid-sized organisations, depending on complexity, existing security maturity, and scope. Our structured PDCA methodology ensures that critical controls are prioritised early, meaning you achieve measurable security improvements from week one — not just at certification.",
    },
    {
        question: "Do we need an ISMS before pursuing TISAX?",
        answer:
            "Yes. TISAX assessments (both AL2 and AL3) are built on top of an ISO 27001-aligned ISMS. The VDA ISA catalogue evaluates your ISMS as its foundation. Implementing your ISMS with ITIS-Secure means your TISAX preparation is already 60–70% complete, because we align every control to both standards simultaneously.",
    },
    {
        question: "What is a Statement of Applicability?",
        answer:
            "The Statement of Applicability (SoA) is a mandatory ISO 27001 document that lists all Annex A controls and states which are applicable to your organisation, which are not, and the justification for each decision. It is one of the first documents auditors request. We develop and maintain your SoA in alignment with ISO 27001, VDA ISA, and your specific client requirements.",
    },
    {
        question: "What are Risk Assessment ID Cards?",
        answer:
            "Risk Assessment ID Cards are a structured method used within the VDA ISA framework to document, evaluate, and track individual information security risks. Each card captures the risk description, likelihood, impact, current controls, and treatment plan. They provide auditors with clear, traceable evidence of your risk management process.",
    },
    {
        question:
            "What happens after the ISMS is certified — do we need ongoing support?",
        answer:
            "ISO 27001 certification is not a one-time achievement — it requires ongoing surveillance audits (typically annually) and recertification every three years. Between audits, your ISMS must be actively maintained: risks reassessed, controls updated, incidents managed, and improvements documented. Our ACT phase and continuous improvement services ensure your ISMS stays current as standards and threats evolve.",
    },
    {
        question: "How much does ISMS implementation cost?",
        answer:
            "Implementation costs vary based on organisation size, scope, existing maturity, and target certifications. A focused ISMS implementation for a single-site company may start from €15,000, while multi-site programmes with TISAX and ISO 27001 alignment scale accordingly. We provide a detailed, transparent proposal after the initial gap assessment — there are no hidden fees.",
    },
    {
        question: "Can we implement ISMS and TISAX simultaneously?",
        answer:
            "Absolutely — and this is the approach we recommend. Since TISAX is built on ISO 27001, implementing both in parallel eliminates duplicate effort and reduces your total investment by approximately 30%. Our methodology is specifically designed to produce an Integrated Management System (IMS) that satisfies both frameworks from day one.",
    },
];
