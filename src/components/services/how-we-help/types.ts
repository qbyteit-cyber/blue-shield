import type { LucideIcon } from "lucide-react";

/* ── Shared types for all 4 "How We Can Help You" pages ────── */

export interface TrustPoint {
    text: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface ProcessStep {
    title: string;
    body: string;
    timeline?: string;
}

export interface FrameworkLink {
    label: string;
    href: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface CTAButton {
    text: string;
    href: string;
}

export interface FinalCTA {
    h2: string;
    body: string;
    ctaPrimary: CTAButton;
    ctaSecondary: CTAButton;
}

export type EyebrowColor = "blue" | "green" | "amber" | "purple";

export interface PageMeta {
    breadcrumb: string;
    eyebrow: string;
    eyebrowColor: EyebrowColor;
    h1: string;
    subheadline: string;
    ctaPrimary: CTAButton;
    ctaSecondary: CTAButton;
    trustPoints: TrustPoint[];
    introH2: string;
    introParagraphs: string[];
    introStats: StatItem[];
    processH2: string;
    processIntro: string;
    processSteps: ProcessStep[];
    frameworksH2: string;
    frameworksIntro: string;
    frameworks: FrameworkLink[];
    faqs: FAQItem[];
    finalCta: FinalCTA;
}

/* ── Page‑specific content types ───────────────────────────── */

export interface DeliveryArea {
    id: string;
    title: string;
    icon: LucideIcon;
    body: string;
}

export interface TrainingProgramme {
    id: string;
    title: string;
    icon: LucideIcon;
    audience: string;
    duration: string;
    format: string;
    highlights: string[];
    cta: CTAButton;
}

export interface TrainingFormat {
    title: string;
    icon: LucideIcon;
    bestFor: string;
}

export interface AudienceCard {
    title: string;
    body: string;
}

export interface AuditService {
    id: string;
    title: string;
    icon: LucideIcon;
    whatItIs: string;
    deliverable: string;
    frameworks: string;
    bestFor: string;
    cta: CTAButton;
}

export interface OutsourcedRole {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    typicalEngagement: string;
    relevantFor: string;
    featured: boolean;
}

export interface WhoIsThisForCard {
    title: string;
    body: string;
}

export interface ComparisonRow {
    label: string;
    fullTime: string;
    outsourced: string;
}
