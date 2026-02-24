import {
    Wrench, GraduationCap, ShieldCheck, Users,
    Award, Car, Globe, Building2, Lock, Network, LayoutGrid,
    Shield, UserCog, ClipboardList, AlertTriangle, Eye,
    FolderKey, BadgeCheck, Brain,
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
            { label: "ISMS Implementation", href: "/services/isms-implementation", icon: ClipboardList },
            { label: "Implementation Support", href: "/services/implementation-support", icon: Wrench },
            { label: "Training and Courses", href: "/services/training", icon: GraduationCap },
            { label: "Security Audits and Testing", href: "/services/security-audits", icon: ShieldCheck },
            { label: "Outsourced Roles", href: "/services/outsourced-roles", icon: Users },
        ],
    },
    {
        heading: "Management Frameworks",
        items: [
            { label: "TISAX", href: "/services/tisax", icon: Car },
            { label: "ISO27001", href: "/services/iso-27001", icon: Award },
            { label: "ISO42001", href: "/services/iso-42001", icon: Brain },
            { label: "ISO9001", href: "/services/iso-9001", icon: Award },
            { label: "NIS2", href: "/services/nis2", icon: Globe },
            { label: "DORA", href: "/services/dora", icon: Building2 },
            { label: "AS9100D", href: "/services/as9100d", icon: Award },
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
            { label: "AIMS Manager", href: "/services/outsourced-roles#aims-manager", icon: Brain },
            { label: "Compliance Officer", href: "/services/outsourced-roles#compliance", icon: BadgeCheck },
        ],
    },
];
