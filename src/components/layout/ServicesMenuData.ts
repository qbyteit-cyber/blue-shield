import {
    Wrench, GraduationCap, ShieldCheck, Users,
    Award, Car, Globe, Building2, Lock, Network, LayoutGrid,
    Shield, UserCog, ClipboardList, AlertTriangle, Eye,
    FolderKey, BadgeCheck,
    type LucideIcon,
} from "lucide-react";

export interface MenuItem {
    label: string;
    href: string;
    icon: LucideIcon;
}

export interface MenuColumn {
    heading: string;
    items: MenuItem[];
}

export const servicesMenuColumns: MenuColumn[] = [
    {
        heading: "How We Can Help You",
        items: [
            { label: "Implementation Support", href: "/services/implementation-support", icon: Wrench },
            { label: "Training and Courses", href: "/services/training", icon: GraduationCap },
            { label: "Security Audits and Testing", href: "/services/security-audits", icon: ShieldCheck },
            { label: "Outsourced Roles", href: "/services/outsourced-roles", icon: Users },
        ],
    },
    {
        heading: "Security Management Frameworks",
        items: [
            { label: "ISO 27001", href: "/services/iso-27001", icon: Award },
            { label: "TISAX", href: "/services/tisax", icon: Car },
            { label: "NIS2", href: "/services/nis2", icon: Globe },
            { label: "DORA", href: "/services/dora", icon: Building2 },
            { label: "GDPR", href: "/services/gdpr", icon: Lock },
            { label: "TPISR", href: "/services/tpisr", icon: Network },
            { label: "Other Frameworks", href: "/services", icon: LayoutGrid },
        ],
    },
    {
        heading: "Outsourced Roles",
        items: [
            { label: "Cybersecurity Architect", href: "/services/outsourced-roles#architect", icon: Shield },
            { label: "Cybersecurity Manager (CISO)", href: "/services/outsourced-roles#ciso", icon: UserCog },
            { label: "Internal Auditor", href: "/services/outsourced-roles#auditor", icon: ClipboardList },
            { label: "Risk Management Specialist", href: "/services/outsourced-roles#risk", icon: AlertTriangle },
            { label: "Data Privacy Officer (DPO)", href: "/services/outsourced-roles#dpo", icon: Eye },
            { label: "ISMS Manager", href: "/services/outsourced-roles#isms-manager", icon: FolderKey },
            { label: "Compliance Officer", href: "/services/outsourced-roles#compliance", icon: BadgeCheck },
        ],
    },
];
