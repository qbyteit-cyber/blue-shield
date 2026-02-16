export interface FrameworkHeroProps {
    badge: {
        icon: string;
        text: string;
        variant: "tisax" | "iso" | "nis2" | "dora" | "gdpr" | "tpisr" | "default";
    };
    h1: {
        normal: string;
        accent: string;
    };
    description: string;
    buttons: {
        primary: { text: string; action: string }; // action could be scroll or link
        secondary: { text: string; link: string };
    };
    complianceCard?: {
        status: string;
        items: { label: string; progress: number }[];
    };
}

export interface BenefitItem {
    title: string;
    description: string;
    icon: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    icon: string;
}

export interface ExpertInsight {
    title: string;
    description: string;
    points: string[];
    insightTitle?: string;
    insightDescription?: string;
}

export interface FrameworkPageData {
    meta: {
        title: string;
        description: string;
    };
    hero: FrameworkHeroProps;
    benefits: {
        title: string;
        description: string;
        items: BenefitItem[];
    };
    process: {
        title: string;
        description: string;
        steps: ProcessStep[];
    };
    expert: ExpertInsight;
    cta: {
        title: string;
        description: string;
        buttonText: string;
    };
}
